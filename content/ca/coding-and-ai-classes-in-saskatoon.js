'use strict';
// Saskatoon (cg- city page, Canada cluster Wave 2, row 109). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. The province page coding-classes-in-saskatchewan (not live yet)
// owns the full CS 20 and CS 30 outcome lists, Pre-Calculus 30, Calculus 30 and the Time Act bill; the Regina page (row 110)
// takes CS 30 and senior math. This page takes Computer Science 20 in fresh words and leads with a Saskatoon Transit file.
// Spine: what Computer Science 20 asks a Saskatoon student to do and the freedom it leaves teachers over language, a bus stop
// file whose accessibility column teaches that 0 can mean "unknown", the Gauss and Pascal to Fermat contests, and a city whose
// clock never changes.
// Sources, read raw on 22 and 23 October 2026:
//  - Saskatchewan curriculum (keyword-research-2026-09/ca/src/coding-classes-in-saskatchewan/): CS 20 outcomes
//    (cs20_outcomes.csv from CurriculumOutcomeContent?id=446): goals Core Principles and Techniques, Fundamentals of Programming,
//    Computing and Society, Career Exploration, Student-Directed Research; CS20-CP2 "Use common coding techniques to enhance
//    code elegance and troubleshoot errors"; CS20-FP1 data types "integer, floating point, Boolean and string"; CS20-FP2
//    "Investigate how control structures affect program flow."; CS20-FP3 functions "to create reusable pieces of code";
//    CS20-FP4 "one-dimensional arrays"; CS20-CS2 privacy and "digital security practices"; CS20-SD1 "Develop a coding project
//    and/or research a topic related to computer science of the student's choice." CS 20 curriculum PDF (Ministry of Education,
//    "January, 2018"; cs20-curriculum.pdf.txt): "The choice of programming language for Computer Science 20" is left to teachers;
//    suggested languages Python, Java, PHP, JavaScript, Visual Basic; "students should start coding as soon as possible in the
//    course"; a visual environment (Blockly, Scratch) "should not be used as the core language in Computer Science 20"; "a
//    modern adaptation of Karel the Robot"; graduation needs "one 10-level credit and one 20-level credit in science"; CS 20 sits
//    in the Grades 10-12 Science Framework. CS 30 outcomes: files, libraries, object-oriented programming (one line only here).
//  - Saskatoon Transit stops (City of Saskatoon open data, hub item 657bed1e360b45cb8cfb21e3144244fc layer 0), CSV downloaded
//    with curl on 22 October 2026 (89,588 bytes, sha256 688594c0...e2ee). Licence statement on saskatoon.ca/services-residents/
//    connect-your-city/open-data (saskatoon-open-data.html): "free to use, re-use and redistribute without any legal,
//    technological or social restriction." A statement, not a named licence: flagged for the owner.
//  - GTFS Schedule reference (gtfs.org/documentation/schedule/reference/, gtfs-reference.html): wheelchair_boarding for
//    parentless stops "0 or empty - No accessibility information for the stop.", "1 - Some vehicles at this stop can be boarded
//    by a rider in a wheelchair.", "2 - Wheelchair boarding is not possible at this stop."; for child stops 0 or empty inherits
//    from the parent station.
//  - CEMC (facts-schools-contests.md rows 112-113, 143-148, 160-161, 165): Gauss Grades 7 and 8, "Monday, May 10, 2027 to
//    Friday, May 21, 2027", 25 multiple-choice questions, 60 minutes, lower grades welcome; Pascal Grade 9, Cayley Grade 10,
//    Fermat Grade 11, 23 and 24 February 2027; through a school; free past contests; Computer Science Circles "[Python
//    Programming Tutorials]".
//  - facts-geo.md: America/Regina UTC-6 with no daylight saving time (IANA tzdb 2026e); Alberta on UTC-6 all year; Ontario
//    UTC-5 winter / UTC-4 summer; BC UTC-7 all year; India ahead by 11 hours 30 minutes all year; area codes 306, 474, 639
//    (CNAC via the Internet Archive). No populations. The Time Act, 2026 is not claimed to be in force.
// Our own calculations (stops_page.py, the script printed on this page, and analysis.out.txt; python -I; in keyword-research-
// 2026-09/ca/src-pilots/coding-and-ai-classes-in-saskatoon/): 1,368 rows, 1,368 distinct stop_id, 1,363 distinct stop_code
// (6 blank, all six location_type 1 hub stations); wheelchair_boarding: parentless rows 998 "1", 340 "0" (6 of them hub
// stations), 9 empty; the 21 child stops all "1"; no row uses "2"; 1,175 distinct stop names, 188 names used more than once;
// nearest stops to our sample point 52.1300, -106.6600 (a point we chose downtown): Downtown Terminal North 82 m, 3rd Avenue /
// 23rd Street 102 m, Downtown Terminal East 2 110 m (haversine, Earth radius 6,371 km). India time conversions are ours.
// Lesson family: reading a coded column against its published specification, splitting counts by a second column, and great
// circle distance.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  'import math',
  'from collections import Counter',
  '',
  'def km_between(lat1, lon1, lat2, lon2):',
  '    r = 6371.0',
  '    p1, p2 = math.radians(lat1), math.radians(lat2)',
  '    dp = p2 - p1',
  '    dl = math.radians(lon2 - lon1)',
  '    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2',
  '    return 2 * r * math.asin(math.sqrt(a))',
  '',
  'here = (52.1300, -106.6600)',
  'codes = Counter()',
  'nearest = []',
  '',
  'with open("transit-stops.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        kind = "child" if row["parent_station"] else "own"',
  '        codes[(kind, row["wheelchair_boarding"] or "empty")] += 1',
  '        d = km_between(here[0], here[1], float(row["stop_lat"]), float(row["stop_lon"]))',
  '        nearest.append((d, row["stop_name"]))',
  '',
  'for key in sorted(codes):',
  '    print(key, codes[key])',
  'for d, name in sorted(nearest)[:3]:',
  '    print(round(d * 1000), "m", name)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SASKATOON', label: 'Saskatoon', blurb: 'Live online coding and AI for Saskatoon students, with Computer Science 20 context, a Saskatoon Transit data project and a clock that never changes.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-saskatoon',
  code: 'aisa',
  accent: '#6B404A',
  accentRationale: 'Saskatoon: a muted saskatoon-berry plum, #6B404A, allocated for this row and at least 14 RGB units from the other Canada accents; contrast 8.06 on the paper #FBF8F2 and above 6.9 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Saskatoon',
    eyebrow: 'Saskatoon, Saskatchewan',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Saskatchewan' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Time zones', href: '/canada-time-zones-2026-online-class-times' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Saskatoon',
  title: 'Coding and AI Classes in Saskatoon | Live Online, Ages 6 Up',
  description: 'Live online coding, Python and AI classes for Saskatoon students aged 6 to adult, with Computer Science 20 context and a Saskatoon Transit data project.',
  ogDescription: 'Coding and AI for Saskatoon students, taught live online on a clock that never changes, with a real Saskatoon Transit file to practise on.',
  twitterDescription: 'Saskatoon coding, Python and AI classes, live online on Saskatchewan time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Saskatoon Students',
    description: 'Level-matched live online coding for Saskatoon students from age 6 to adult: blocks, Python, AI and machine learning, and Grade 12 math support, taught in English on Saskatchewan time.'
  },

  h1: 'Coding and AI classes in Saskatoon',
  capsuleQ: 'Where can a Saskatoon student learn coding and AI from a real teacher?',
  capsule: 'Modern Age Coders teaches coding, Python and AI live online to Saskatoon students from age 6 to adult, in a group of 15 to 20 or one to one. Children usually begin with Python and AI for Kids and teens with Python for Teens, before AI and machine learning. Classes run on Saskatchewan time, and the first one is free.',
  lead: 'Saskatchewan gives its high school computing course an unusual amount of freedom. Computer Science 20 lists what students must be able to do, from data types to functions and arrays, but leaves the programming language to each teacher, and asks that students start coding as soon as possible. For a Saskatoon student that can mean Python in one school and Java or JavaScript in another. This page sets out what the course expects in the ministry&rsquo;s words, walks through a project we built on Saskatoon Transit&rsquo;s bus stop file, names the Waterloo math contests a Saskatoon school can enter, and shows what the city&rsquo;s fixed clock means for class times with teachers in India.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Saskatoon.',

  picks: {
    eyebrow: 'Course picks for Saskatoon',
    h2: 'Four starting points for Saskatoon students',
    intro: 'Matched to age and stage, then checked in the free first class. None of these grants a provincial credit.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with drawings, games and gentle AI ideas, for children ready to leave blocks behind.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'A full Python course from a first program to files and data, covering the data types, control structures, functions and arrays that Computer Science 20 names.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python, built on data the student cleans and questions, never a black box.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12 math', note: 'Built for Pre-calculus 12 and Math 30-1; for a Saskatoon student in Pre-Calculus 30 we match lessons to the school&rsquo;s course outline in the free class. We do not grant provincial credits.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding at school in Saskatoon',
      h2: 'What Computer Science 20 asks of a Saskatoon student',
      intro: 'Saskatoon schools follow the Saskatchewan curriculum. We read the Computer Science 20 outcomes and the 2018 curriculum document from the province&rsquo;s curriculum site on 22 October 2026; the quotes are the ministry&rsquo;s and the plain readings are ours.',
      body: [
        { kind: 'table', caption: 'Six Computer Science 20 outcomes, as published by the Saskatchewan Ministry of Education, with our reading of each', head: ['Outcome', 'The ministry&rsquo;s words', 'What it looks like in practice'], rows: [
          ['CS20-FP1', 'Use data types &ldquo;including integer, floating point, Boolean and string&rdquo;', 'Knowing why 7 / 2 and 7 // 2 differ in Python, and when text must become a number'],
          ['CS20-FP2', '&ldquo;Investigate how control structures affect program flow.&rdquo;', 'Tracing if, else and loops by hand before running them'],
          ['CS20-FP3', 'Functions &ldquo;to create reusable pieces of code&rdquo;', 'Writing a distance function once and calling it 1,368 times, as in the project below'],
          ['CS20-FP4', '&ldquo;Investigate one-dimensional arrays and their applications.&rdquo;', 'Lists of values, sorted and searched'],
          ['CS20-CP2', 'Coding techniques &ldquo;to enhance code elegance and troubleshoot errors&rdquo;', 'Readable names, small functions, and a calm method for bugs'],
          ['CS20-SD1', '&ldquo;Develop a coding project and/or research a topic related to computer science of the student&rsquo;s choice.&rdquo;', 'A self-chosen project, which is where outside depth shows most']
        ] },
        { kind: 'p', text: 'The same document is frank about language. It says the choice of programming language for Computer Science 20 is left to the teacher, suggests Python, Java, PHP, JavaScript or Visual Basic, and warns that a visual environment such as Blockly or Scratch is useful as an introduction but should not be used as the core language in Computer Science 20. It even suggests a modern version of Karel the Robot as a bridge between blocks and text. Our own path follows the same arc: blocks for young children, Karel-style puzzles for the step up, then Python.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A science course', p: 'Computer Science 20 is filed in Saskatchewan&rsquo;s Grades 10 to 12 science framework, and the same document notes that graduation requires one 10-level and one 20-level science credit. How a school uses the course in a timetable is the school&rsquo;s decision.' },
          { h3: 'Then Computer Science 30', p: 'The follow-on course moves to external files, libraries and object-oriented programming. A Saskatoon student who arrives with confident functions and lists has the time to enjoy those topics instead of catching up.' },
          { h3: 'Start early', p: 'The 2018 document says students should start coding as soon as possible in the course. We agree, and for most students we would start years earlier, with short weekly lessons from Grade 4 or 5.' }
        ] },
        { kind: 'callout', h3: 'Beside school, not in place of it', p: 'Our lessons sit alongside a Saskatoon student&rsquo;s courses. We do not grant provincial credits, and we do not mark or write school work. We are not connected with the Saskatchewan Ministry of Education, Saskatoon&rsquo;s school divisions or the City of Saskatoon.' }
      ]
    },
    {
      id: 'stops', tint: 'deep', eyebrow: 'Saskatoon data project',
      h2: 'How many Saskatoon bus stops are wheelchair accessible? It depends what 0 means',
      intro: 'The City of Saskatoon publishes Saskatoon Transit&rsquo;s stops as open data, in the GTFS format transit agencies use worldwide. Our teen students download the file, count one column and find that the obvious answer is wrong. Every number below is ours.',
      body: [
        { kind: 'table', caption: 'Our count of the Saskatoon Transit stops file, downloaded 22 October 2026 (1,368 rows), with each code read against the GTFS Schedule reference', head: ['wheelchair_boarding value', 'Rows', 'Meaning in the GTFS reference'], rows: [
          ['1, stop has no parent station', '998', 'Some vehicles at this stop can be boarded by a rider in a wheelchair'],
          ['0, stop has no parent station', '340 (6 of them are the hub stations themselves)', 'No accessibility information, not &ldquo;inaccessible&rdquo;'],
          ['Empty, no parent station', '9', 'Also no accessibility information'],
          ['1, stop inside a station', '21', 'For a stop inside a station: an accessible path exists from outside'],
          ['2, any stop', '0', 'Boarding not possible; the file never says this about any stop']
        ] },
        { kind: 'p', text: 'This script prints those counts and the three stops nearest a point we picked downtown, using the haversine formula for distance on a sphere. It runs on Python 3 with no extra packages:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The tempting mistake', p: 'A beginner counts the 1s, calls the rest inaccessible, and reports that about a quarter of stops cannot be used. The GTFS reference says 0 or empty means no information, and no stop in the file is coded 2, so the honest finding is: 1,019 marked boardable, 349 unknown, none marked impossible.' },
          { h3: 'Split by a second column', p: 'The same code means different things for a stop inside a station. Splitting by parent_station first, as the script does, keeps the 21 child stops from being read with the wrong rule.' },
          { h3: 'Nearest stop', p: 'From our sample point at latitude 52.1300 and longitude -106.6600, the closest stop is Downtown Terminal North at 82 m, then 3rd Avenue / 23rd Street at 102 m. Changing the point changes the answer, which makes a good first app.' }
        ] },
        { kind: 'callout', h3: 'One more check before publishing', p: 'There are 1,368 stop IDs but only 1,363 different stop codes. The gap is six rows with a blank code, and all six are hub stations rather than places a bus stops. Small audits like this decide whether a count can be trusted, and they are the habit we most want a student to take away.' },
        { kind: 'p', text: 'The City of Saskatoon says the data shared on its Open Data site is &ldquo;free to use, re-use and redistribute without any legal, technological or social restriction&rdquo; (<a class="cg-inline-link" href="https://saskatoon.ca/services-residents/connect-your-city/open-data">the city&rsquo;s open data statement</a>, <a class="cg-inline-link" href="https://data-citysaskatoon.opendata.arcgis.com/datasets/657bed1e360b45cb8cfb21e3144244fc_0">dataset page</a>). Code meanings come from the <a class="cg-inline-link" href="https://gtfs.org/documentation/schedule/reference/">GTFS Schedule reference</a>. The City and Saskatoon Transit do not endorse this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Math contests for Saskatoon',
      h2: 'Gauss, then Pascal, Cayley and Fermat: the Waterloo math ladder in Saskatoon',
      intro: 'The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo publishes these contests for schools across Canada. We read CEMC&rsquo;s contest pages on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Four CEMC math contests by grade, 2026 to 2027, as CEMC lists them', head: ['Contest', 'Grade', 'Format', 'Date'], rows: [
          ['Gauss', 'Grades 7 and 8; younger students welcome', '25 multiple-choice questions, 60 minutes', '10 to 21 May 2027'],
          ['Pascal', 'Grade 9', '25 multiple-choice questions, 60 minutes', '23 and 24 February 2027'],
          ['Cayley', 'Grade 10', 'As Pascal', '23 and 24 February 2027'],
          ['Fermat', 'Grade 11', 'As Pascal', '23 and 24 February 2027']
        ] },
        { kind: 'p', text: 'These are math contests, but they reward the same thinking a program does: break the problem into steps, test a small case, look for a pattern. We prepare students with problems we write ourselves and send them to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s free archive</a> for past papers; we do not copy CEMC questions into lessons. A student in Saskatoon enters through a school, since CEMC does not register students one by one; when a school does not take part, CEMC suggests asking another local school to host. CEMC also runs Computer Science Circles, a free set of Python tutorials, which we recommend between lessons. Our <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation page</a> and <a class="cg-inline-link" href="/pascal-contest-preparation">Pascal preparation page</a> say more. Modern Age Coders has no connection with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Saskatoon never changes its clocks, and that makes scheduling easy',
      intro: 'Saskatchewan stays on UTC-6 all year, with no daylight saving time, according to the IANA time zone database (2026e). India also stays put, so the gap between Saskatoon and our teachers never moves.',
      body: [
        { kind: 'table', caption: 'Saskatoon against India and three other Canadian cities in the 2026 to 2027 school year. Offsets from IANA tzdb 2026e; the comparisons are ours', head: ['Compared with', 'In winter (from 1 November 2026)', 'In summer (from 14 March 2027)'], rows: [
          ['India', 'India 11 hours 30 minutes ahead', 'India 11 hours 30 minutes ahead'],
          ['Calgary and Edmonton', 'Same clock', 'Same clock'],
          ['Toronto', 'Toronto 1 hour ahead', 'Toronto 2 hours ahead'],
          ['Vancouver', 'Vancouver 1 hour behind', 'Vancouver 1 hour behind']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What that means in practice', p: 'A 9 am to noon Saturday class in Saskatoon is 8:30 to 11:30 pm in India, every week of the year. A 4 to 7 pm weekday class is 3:30 to 6:30 am the following day there, which our teachers cover by choice.' },
          { h3: 'No November surprise', p: 'When Ontario and the Atlantic provinces change their clocks on 1 November 2026, nothing moves for a Saskatoon family. A class booked now stays at the same local time all winter.' },
          { h3: 'Saskatchewan numbers', p: 'Phones in Saskatoon use 306, 639 or 474. Type the ten digits in the form; the +1 is already filled in.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks at 6 to Computer Science 30 and machine learning',
    intro: 'Grades are only a guide; the free class finds each student&rsquo;s starting rung.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences, loops and events in a visual editor, the stage the Saskatchewan document calls an introduction.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'The bridge', p: 'Puzzle-style programs in the spirit of Karel the Robot, then typed Python with conditions and functions.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 10', h3: 'Python for real', p: 'Data types, lists, files and the Saskatoon stops file, with Gauss or Pascal for students who like contests.', courses: ['python-complete-masterclass-teens', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 11 and 12', h3: 'AI and Grade 12 math', p: 'Machine learning on real data, and support beside the Grade 12 math course, with no credit granted by us.', courses: ['ai-ml-masterclass-teens', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does a Saskatoon teen still need to code when AI writes programs?',
    intro: 'Yes, because the hardest part of the bus stop project is not the code.',
    p1: 'An AI assistant will happily write a script that counts accessible stops. Unless someone tells it, it will probably treat 0 as no, and report a confident figure that the GTFS reference contradicts. The code would be fine; the meaning would be wrong. Catching that takes a person who knows to look up what the codes mean.',
    p2: 'We teach students to reason first, write the code themselves, and then question what it prints. As they get older they use AI tools within each tool&rsquo;s age limits, to explain an error or check an approach, and never to hand in work they could not rebuild alone.',
    closer: 'Computer Science 20 asks students to troubleshoot errors and write elegant code; both start with understanding what the program is for.',
    blogAnchor: 'our case for learning to code in the age of AI assistants'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for families across Saskatoon',
    intro: 'A student on either side of the river joins the same lesson from home, with the teacher seeing their screen.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'Group or private', p: 'A group of 15 to 20 at the same level, or a teacher to yourself for quicker progress or a particular project.' },
      { h3: 'Planned in Saskatchewan grades', p: 'Teachers plan in Saskatchewan grades and know where Computer Science 20 and 30 and the Grade 12 math courses sit. School assignments remain the student&rsquo;s own.' },
      { h3: 'Towns nearby', p: 'Families in the towns around Saskatoon, and anywhere else in Saskatchewan, join the same classes on the same unchanging clock.' },
      { h3: 'What to have ready', p: 'A laptop or desktop with sound and a reliable connection. Younger children can start on a tablet; typed Python needs a keyboard.' },
      { h3: 'Free first class', p: 'A full lesson that ends with a suggested course, level and time. We take no payment details before it.' }
    ],
    spec: { title: 'No Saskatoon office', p: 'Modern Age Coders has no centre in Saskatoon and claims none. Classes are live and online, taught from India in English.' }
  },

  fees: {
    h2: 'Fees for Saskatoon families',
    intro: 'Three choices, each shown in the currency your browser displays.',
    first: 'A full live lesson at no charge, ending with a suggested level and course.',
    group: 'The monthly fee for a group of 15 to 20 students working at one level.',
    private: 'The monthly fee for one-to-one lessons at times you choose.',
    closer: 'Saskatoon families pay the same monthly fee as families in every other province. Nothing is charged before the free lesson, and the pricing page covers missed classes and holidays.'
  },

  reviewsH2: 'Reviews from our families and students on Google',

  book: {
    h2: 'Book a free class for a Saskatoon student',
    intro: 'Tell us the age and what the student has tried. We might start a seven-year-old on an animation, a twelve-year-old on a Python game, and a Computer Science 20 student on the stops file.',
    success: 'Thank you. The team will be in touch soon about a class for Saskatoon.'
  },

  faq: {
    h2: 'Saskatoon coding and AI questions',
    intro: 'Answers to what Saskatoon parents and teens ask us most.',
    items: [
      { q: 'Are there coding classes for kids in Saskatoon?', a: 'Yes, live online rather than in a local building. Children from age 6 join from home, in a group of 15 to 20 or one to one with a teacher.' },
      { q: 'What language does Computer Science 20 use in Saskatoon schools?', a: 'It varies. The Saskatchewan curriculum leaves the language to the teacher and suggests Python, Java, PHP, JavaScript or Visual Basic, so ask the school. We teach Python first and can show the same ideas in Java or JavaScript.' },
      { q: 'Do your classes give a Saskatchewan credit?', a: 'No. We do not grant provincial credits. Credits come from school courses such as Computer Science 20; our classes build the skills alongside them.' },
      { q: 'Can you help with Pre-Calculus 30 in Saskatoon?', a: 'Yes, one to one or in a group. Our Grade 12 math course was built for Pre-calculus 12 and Math 30-1, and for Pre-Calculus 30 we follow the school\'s course outline, which we check in the free class.' },
      { q: 'Is AI taught to kids, or only to teens?', a: 'Both. From about age 9, children learn what AI is and how it learns from examples; hands-on machine learning with real data starts in the teen years.' },
      { q: 'What time are classes for Saskatoon families?', a: TIMING + ' Saskatoon does not change its clocks, so a booked time stays put all year.' },
      { q: 'Can a Saskatoon student enter the Gauss or Pascal contests?', a: 'Yes, through their school, because CEMC does not take individual entries. CEMC lists Gauss for 10 to 21 May 2027 and Pascal, Cayley and Fermat for 23 and 24 February 2027.' },
      { q: 'Does a Saskatoon phone number work in the form?', a: 'Yes. Numbers with 306, 639 or 474 all work; enter the ten digits without the leading 1.' },
      { q: 'Do you have a centre in Saskatoon?', a: 'No. Every class is taught live online by a teacher in India, which is why the timing is flexible across weekdays and weekends.' },
      { q: 'How can I check the fees?', a: 'The fees block on this page lists the free first lesson, the monthly group fee and the monthly private fee in your own currency. Billing begins only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Related pages for Saskatoon families',
    html: 'Begin at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, see how the provinces compare on <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding in each province&rsquo;s curriculum</a>, and check any city&rsquo;s clock on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>. Contest families can read <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Saskatoon and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' },
    { href: '/gauss-contest-preparation', label: 'Gauss contest' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' }
  ],

  personalityCss: `
.cg-root.cg-aisa .cg-hero h1 { font-weight: 690; letter-spacing: -0.015em; line-height: 1.07; }
.cg-root.cg-aisa .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aisa .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aisa .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-aisa .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-aisa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aisa #stops code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-aisa .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aisa .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Saskatchewan Ministry of Education, read raw 22 October 2026 (copies in ca/src/coding-classes-in-saskatchewan/): Computer Science 20 outcomes CS20-FP1 to FP4, CP2, CS2 and SD1; CS 20 curriculum document (January 2018): language left to teachers, suggested languages, start coding as soon as possible, visual environments not the core language, Karel the Robot, science framework and 20-level science credit; CS 30 outcomes (files, libraries, OOP). CEMC Gauss and Pascal, Cayley, Fermat 2026-27 facts and through-a-school rule. America/Regina UTC-6 with no DST and the 306/639/474 area codes from facts-geo.md.',
    localProject: 'Saskatoon Transit stops, City of Saskatoon open data (statement: free to use, re-use and redistribute without restriction), CSV downloaded with curl on 22 October 2026 and analysed with our script stops_page.py (python -I): 1,368 rows; wheelchair_boarding parentless 998 "1", 340 "0" (6 hub stations), 9 empty; 21 child stops "1"; none "2"; read against the GTFS Schedule reference (0 or empty = no information); 1,363 distinct stop codes (6 blank, all hubs); nearest stop to our sample point Downtown Terminal North at 82 m (haversine). Labelled as ours. Lesson family: coded column read against its specification, split by a second column, great-circle distance.',
    requiredMentions: [
      'Downtown Terminal North at 82 m',
      '1,019 marked boardable, 349 unknown, none marked impossible',
      'without any legal, technological or social restriction',
      'should not be used as the core language in Computer Science 20',
      'Karel-style puzzles',
      '3rd Avenue / 23rd Street at 102 m',
      'only 1,363 different stop codes',
      'CS20-FP2',
      'A class booked now stays at the same local time all winter',
      'the 21 child stops from being read with the wrong rule'
    ],
    sources: [
      { claim: 'Saskatchewan curriculum: Computer Science 20 outcomes and curriculum document.', url: 'https://curriculum.gov.sk.ca/CurriculumHome?id=446' },
      { claim: 'Saskatchewan curriculum: Computer Science 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumHome?id=444' },
      { claim: 'City of Saskatoon open data: Transit Stops (GTFS) dataset.', url: 'https://data-citysaskatoon.opendata.arcgis.com/datasets/657bed1e360b45cb8cfb21e3144244fc_0' },
      { claim: 'City of Saskatoon: open data statement on reuse.', url: 'https://saskatoon.ca/services-residents/connect-your-city/open-data' },
      { claim: 'GTFS Schedule reference: wheelchair_boarding values.', url: 'https://gtfs.org/documentation/schedule/reference/' },
      { claim: 'CEMC: Gauss and Pascal, Cayley, Fermat 2026-27, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Regina, no daylight saving time.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That 340 Saskatoon stops are inaccessible: refused; the GTFS reference says 0 means no information.',
      'Any Saskatoon population figure: StatCan was not reachable live.',
      'That the Time Act, 2026 is in force: not claimed; only the bill text and tzdb were read.',
      'That Computer Science 20 counts as the 20-level science credit at every school: not claimed; left to the school.',
      'That our Grade 12 math course is written for Saskatchewan Pre-Calculus 30: not claimed; it is built for Pre-calculus 12 and Math 30-1 and matched to the school outline.',
      'That our classes grant a Saskatchewan credit: refused; we do not grant provincial credits.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Saskatoon schools, school divisions results or private people: not used.',
      'Any affiliation with the City of Saskatoon, Saskatoon Transit, the Saskatchewan Ministry of Education, CEMC or the University of Waterloo.'
    ]
  }
};
