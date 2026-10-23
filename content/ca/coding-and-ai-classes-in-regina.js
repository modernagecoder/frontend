'use strict';
// Regina (cg- city page, Canada cluster Wave 2, row 110). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. The Saskatchewan province page (not live yet) owns the full
// outcome lists; the Saskatoon page (row 109) took Computer Science 20. This page takes Computer Science 30, Pre-Calculus 30
// and Calculus 30, the Time Act, 2026 bill as text only, and a City of Regina parks project.
// Spine: the senior year of a Regina student who likes both code and math, two City of Regina map layers that disagree about
// playgrounds, the Fryer, Galois, Hypatia and team contests, and a province that writes its clock into law.
// Sources, read raw on 22 and 23 October 2026:
//  - Saskatchewan curriculum (keyword-research-2026-09/ca/src/coding-classes-in-saskatchewan/): CS 30 outcomes
//    (cs30-outcomes.txt): CS30-CP2 "Engage in collaborative programming practices."; CS30-FP1 "Investigate types of data
//    structures and the advantages of organizing data in different ways."; CS30-FP2 "Create programs that utilize external
//    files."; CS30-FP3 "Use libraries to simplify solutions to programming problems."; CS30-FP4 object-oriented programming;
//    CS30-CC1 "Explore recursion and investigate sorting algorithms."; CS30-CC2 "Explore number systems and character encoding
//    used in computing."; CS30-CAP1 "Create a large-scale computer program to demonstrate proficiency in procedural or
//    object-oriented programming."; CS30-CAP2 "Document and reflect on the process of creating a large-scale computer
//    program." Pre-Calculus 30 (precalc30-outcomes.txt): P30.2 unit circle and "the six trigonometric ratios"; P30.9
//    logarithms; P30.10 polynomial functions "of degree greater than 2"; P30.12 "permutations, including the fundamental
//    counting principle"; PC30.13 combinations and "the binomial theorem". Calculus 30 (calc30-outcomes.txt): C30.3
//    "Demonstrate understanding of limits and continuity."; C30.4 "differentiation based on slope as a rate of change"; C30.6
//    derivatives for optimization and rates of change.
//  - The Time Act, 2026, Bill No. 58 (docs.legassembly.sk.ca; saved geo/tz/gov_Bill30-58.pdf and .txt): '"central standard
//    time" means UTC-6 hours'; "the time to be observed in Saskatchewan is central standard time"; "Saskatchewan" includes the
//    City of Lloydminster; "This Act comes into force by order of the Lieutenant Governor in Council." Not claimed in force.
//    IANA tzdb 2026e: America/Regina -6:00 with no daylight saving time (facts-geo.md).
//  - City of Regina open data, ParksAndAmenities MapServer (opengis.regina.ca/arcgis/rest/services/OpenData/ParksAndAmenities):
//    layer 0 "Parks and Recreation Areas" as GeoJSON (4,826,339 bytes, sha256 1b82009c...3741) and layer 1 "AMENITIES" as JSON
//    without geometry (219,450 bytes, sha256 864a0b7c...1483), downloaded with curl on 22 October 2026; layer 0 spatial
//    reference wkid 26913. Licence page regina.ca/city-government/open-data/open-government-licence (regina-ogl.html):
//    "including for commercial purposes"; attribution "Contains information licensed under the Open Government Licence – City
//    of Regina." (en dash in source; written with a hyphen here). The openregina.ca catalogue was behind a Cloudflare challenge
//    and was not bypassed (opendata.tsv note).
//  - CEMC (facts-schools-contests.md rows 112-113, 149-150, 156-157, 160-162): Fryer Grade 9, Galois Grade 10, Hypatia Grade 11,
//    "Wednesday, April 7, 2027", "4 questions; a mix of final answer-only and full-solution.", 75 minutes; CTMC "Teams of six
//    secondary school students in any combination of Grades 9-12", at UWaterloo "Tuesday, April 13, 2027", in school
//    "Wednesday, April 14, 2027 or later"; Problem of the Week for Grades 3 to 12, new problems every Thursday; through a school.
//  - facts-geo.md: area codes 306, 474, 639 (CNAC via the Internet Archive); India ahead by 11 hours 30 minutes all year.
//    No populations; no claim about Regina being the capital (UNVERIFIED in facts-geo.md).
// Our own calculations (reconcile_page.py, the script printed on this page, and analysis.out.txt / analysis2.out.txt; python
// -I; in keyword-research-2026-09/ca/src-pilots/coding-and-ai-classes-in-regina/): layer 0: 998 areas, 442 distinct names;
// TYPE PARK OPEN SPACE 656, SCHOOL OPEN SPACE 223, ENVIRONMENTAL RESERVE 45, STORM CHANNEL 44, W.C.A. OPEN SPACE 17, GOLF
// COURSE 11, CEMETERY 2; PLAYGROUND "Yes" on 210 areas (200 names). Layer 1: 977 points; owner CITY 708, SCHOOL BOARD 269;
// PLAYGROUND 254 points (CITY 154, SCHOOL BOARD 100) on 220 names; 28 names with more than one playground point (most 4);
// winter assets OUTDOOR RINK SHELTER 34, OUTDOOR RINK UNBOARDED 31, OUTDOOR RINK BOARDED 24, TOBOGGAN HILLS 19, CROSS-COUNTRY
// SKI TRAIL 7, CROKICURL 6, SPEED SKATING 1. Name match: both 175, flag only 25, point only 45; of the 45, 35 names do not
// appear in layer 0 at all. No park or school name is printed on the page.
// Lesson family: reconciling two tables that describe the same things (a set join on a key) and showing why a text key fails.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import json',
  '',
  'with open("parks-layer0.geojson", encoding="utf-8") as f:',
  '    parks = [feat["properties"] for feat in json.load(f)["features"]]',
  'with open("amenities-layer1.json", encoding="utf-8") as f:',
  '    points = [feat["attributes"] for feat in json.load(f)["features"]]',
  '',
  'flagged = {p["NAME"] for p in parks if p["PLAYGROUND"] == "Yes"}',
  'pointed = {a["NAME"] for a in points if a["ASSET_TYPE"] == "PLAYGROUND"}',
  '',
  'print("park areas:", len(parks), "distinct names:", len({p["NAME"] for p in parks}))',
  'print("playground points:", sum(1 for a in points if a["ASSET_TYPE"] == "PLAYGROUND"))',
  'print("names flagged Yes:", len(flagged))',
  'print("names with a point:", len(pointed))',
  'print("in both:", len(flagged &amp; pointed))',
  'print("flag only:", len(flagged - pointed))',
  'print("point only:", len(pointed - flagged))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'REGINA', label: 'Regina', blurb: 'Live online coding, AI and Grade 12 math for Regina students, with a City of Regina parks data project and Computer Science 30 context.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-regina',
  code: 'ar',
  accent: '#992617',
  accentRationale: 'Regina: a deep prairie-barn red, #992617, allocated for this row and at least 14 RGB units from the other Canada accents; contrast 7.49 on the paper #FBF8F2 and above 6.4 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Regina',
    eyebrow: 'Regina, Saskatchewan',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Saskatchewan' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Contests', href: '/canada-math-and-coding-contest-calendar' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Regina',
  title: 'Coding and AI Classes in Regina | Live Online, Ages 6 to Adult',
  description: 'Live online coding, Python and AI classes for Regina students, with Computer Science 30 and Pre-Calculus 30 context and a City of Regina parks data project.',
  ogDescription: 'Regina students can learn coding, AI and Grade 12 math with a live teacher online, and practise on two City of Regina park layers that disagree.',
  twitterDescription: 'Regina coding, AI and Grade 12 math support, live online on Saskatchewan time.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Senior Math Support for Regina Students',
    description: 'Live online coding and AI for Regina students from age 6 to adult, with support beside Computer Science 30 and Grade 12 math, taught in English on Saskatchewan time.'
  },

  h1: 'Coding and AI classes in Regina',
  capsuleQ: 'Who teaches coding, AI and senior math to Regina students live?',
  capsule: 'Modern Age Coders teaches coding and AI live online to Regina students from age 6 to adult, privately or alongside 15 to 20 classmates. Teens take Python for Teens, then AI and machine learning; senior students can add our Grade 12 math course beside Pre-Calculus 30. Every lesson is timed in Saskatchewan time, and the opening one costs nothing.',
  lead: 'By Grade 12, a Regina student who enjoys both computing and math is often carrying three demanding courses at once: Computer Science 30, with its large capstone program, and Pre-Calculus 30 or Calculus 30. They draw on one another more than the timetable suggests. Sorting algorithms and recursion need the same careful step-by-step reasoning as a limit or a counting problem. This page sets out what those three courses ask for as Saskatchewan publishes them, takes a student through two City of Regina map layers that disagree about playgrounds, lists the Waterloo contests a Regina school can enter, and explains the province&rsquo;s fixed clock.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Regina.',

  picks: {
    eyebrow: 'Course picks for Regina',
    h2: 'Four courses Regina teens ask about',
    intro: 'Matched to the student in a free first class. We teach alongside school and grant no provincial credits.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to files, data structures and libraries, the ground Computer Science 30 builds on.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python, where the student prepares the data, trains the model and argues about its errors.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12 math', note: 'Written for Pre-calculus 12 and Math 30-1. For Pre-Calculus 30 in Regina we match lessons to the school outline after the free class. No provincial credit is granted.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12', note: 'Problem solving for the Waterloo math contests, taught with problems we write ourselves.' }
    ]
  },

  sections: [
    {
      id: 'senior', tint: '', eyebrow: 'Senior courses in Regina',
      h2: 'Computer Science 30, Pre-Calculus 30 and Calculus 30, in the ministry&rsquo;s words',
      intro: 'Every Regina public school teaches to the provincial curriculum, and all three outcome lists below were pulled from it on 22 October 2026. The quoted words are the ministry&rsquo;s; the right-hand column is our reading.',
      body: [
        { kind: 'table', caption: 'Selected Grade 12 outcomes from the Saskatchewan curriculum, read 22 October 2026, with what each asks of a student in our words', head: ['Outcome', 'Saskatchewan&rsquo;s wording', 'What a student actually does'], rows: [
          ['CS30-FP2', '&ldquo;Create programs that utilize external files.&rdquo;', 'Read a real data file, such as the Regina layers below, instead of typed-in test values'],
          ['CS30-CC1', '&ldquo;Explore recursion and investigate sorting algorithms.&rdquo;', 'Write a function that calls itself, and compare two sorts on the same list'],
          ['CS30-CC2', '&ldquo;Explore number systems and character encoding used in computing.&rdquo;', 'Binary, hexadecimal, and why text has to be decoded'],
          ['CS30-CAP1', '&ldquo;Create a large-scale computer program to demonstrate proficiency in procedural or object-oriented programming.&rdquo;', 'A capstone project of real size, planned over weeks'],
          ['P30.12 and PC30.13', 'Permutations &ldquo;including the fundamental counting principle&rdquo;, then combinations and &ldquo;the binomial theorem&rdquo;', 'Counting arguments that a short program can check'],
          ['C30.3', '&ldquo;Demonstrate understanding of limits and continuity.&rdquo;', 'The idea under every derivative in the course']
        ] },
        { kind: 'p', text: 'Read side by side, the courses reinforce each other. A student who has written a recursive function finds the fundamental counting principle easier to trust, because they have watched a program enumerate the cases. A student comfortable with limits reads an algorithm&rsquo;s running time with less fear. Our job is to give the time that a busy Grade 12 timetable cannot, in one subject or in all three.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The capstone is the hard part', p: 'CS30-CAP2 asks students to &ldquo;Document and reflect on the process of creating a large-scale computer program.&rdquo; Planning, splitting into modules and keeping notes are skills we practise long before the project starts.' },
          { h3: 'Working with others', p: 'Computer Science 30 also asks students to &ldquo;Engage in collaborative programming practices.&rdquo; In our group classes students review one another&rsquo;s code, which is the gentlest way to learn that.' },
          { h3: 'Libraries, used wisely', p: 'CS30-FP3 has students use libraries to simplify solutions. We teach the plain version first, so a student knows what the library is doing on their behalf.' }
        ] },
        { kind: 'callout', h3: 'What we are and are not', p: 'Our classes run alongside a Regina student&rsquo;s school courses. We do not grant provincial credits, and the school awards every credit in Computer Science 30, Pre-Calculus 30 and Calculus 30. We are not connected with the Saskatchewan Ministry of Education, Regina&rsquo;s school divisions or the City of Regina.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Regina data project',
      h2: 'Two City of Regina layers, two answers about playgrounds',
      intro: 'The City of Regina publishes its parks as open data in two layers: park areas with yes or blank columns for each amenity, and a separate set of amenity points. Both describe playgrounds. Our students check whether they agree. The counts are ours.',
      body: [
        { kind: 'table', caption: 'Our reconciliation of the City of Regina ParksAndAmenities layers, downloaded 22 October 2026 (998 park areas, 977 amenity points), matched on the NAME column', head: ['Measure', 'Our count'], rows: [
          ['Park areas in layer 0', '998, under 442 different names'],
          ['Park areas with PLAYGROUND marked Yes', '210, under 200 names'],
          ['Playground points in layer 1', '254, under 220 names'],
          ['Names in both lists', '175'],
          ['Names flagged Yes but with no playground point', '25'],
          ['Names with a playground point but not flagged', '45, of which 35 do not appear in layer 0 at all']
        ] },
        { kind: 'p', text: 'Here is the script. It uses only the json module in Python 3, with both downloaded files in the same folder, and Python sets do the matching:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One park, many shapes', p: 'The first surprise is that 998 areas carry only 442 names. A large park can be drawn as many polygons, so counting rows counts pieces, not parks. Turning names into a set fixes that before any comparison.' },
          { h3: 'Set operations', p: 'With two sets of names, the questions become one line each: the intersection gives names on both lists, and the two differences give names on only one. A Grade 9 student can follow it, and it is exactly the kind of data structure work Computer Science 30 names.' },
          { h3: 'Why the key fails', p: 'Of the 45 point-only names, 35 never appear among the park areas. That points to names spelled or recorded differently in the two layers rather than missing playgrounds. A text name is a weak key; the stronger next step is a spatial test of which area each point falls inside.' }
        ] },
        { kind: 'callout', h3: 'What a careful student writes', p: 'Not &ldquo;the city has 254 playgrounds&rdquo;, and not &ldquo;45 playgrounds are missing from the map&rdquo;. A fair sentence is that the two layers agree on 175 park names and differ on 70, and that most of the differences look like naming mismatches. The file supports that, and nothing stronger.' },
        { kind: 'p', text: 'Regina&rsquo;s winters show up in the same file: the amenity layer lists 34 outdoor rink shelters, 31 unboarded and 24 boarded outdoor rinks, 19 toboggan hills and 7 cross-country ski trails, a good second exercise in grouping categories. Contains information licensed under the Open Government Licence - City of Regina (<a class="cg-inline-link" href="https://regina.ca/city-government/open-data/open-government-licence">licence</a>, <a class="cg-inline-link" href="https://opengis.regina.ca/arcgis/rest/services/OpenData/ParksAndAmenities/MapServer">ParksAndAmenities service</a>). No endorsement by the City of Regina is implied.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Regina',
      h2: 'Full-solution and team contests a Regina school can enter',
      intro: 'CEMC, the University of Waterloo&rsquo;s Centre for Education in Mathematics and Computing, offers more than multiple-choice papers. These three suit students who like to explain their reasoning. Facts are from CEMC&rsquo;s pages, read 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Fryer, Galois and Hypatia', p: 'For Grades 9, 10 and 11 respectively. CEMC lists them for Wednesday 7 April 2027: four questions mixing answer-only and full-solution parts, in 75 minutes. Writing a clear solution is the skill being tested.' },
          { h3: 'The team contest', p: 'The Canadian Team Mathematics Contest takes teams of six students from any mix of Grades 9 to 12. CEMC lists it at the University of Waterloo on Tuesday 13 April 2027, and in schools on Wednesday 14 April 2027 or later.' },
          { h3: 'Problem of the Week', p: 'CEMC emails a Problem of the Week to educators for students in Grades 3 to 12, with new problems every Thursday and solutions a week later. Ask a teacher to pass them on.' }
        ] },
        { kind: 'p', text: 'All of these run through schools: CEMC does not register students on their own, so a Regina student needs a teacher to order the contest, or a nearby school willing to host. We prepare students with original practice problems that we write and label as ours, and send them to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s past contests</a> for genuine papers, which are free. See <a class="cg-inline-link" href="/fryer-galois-hypatia-contests-guide">our Fryer, Galois and Hypatia guide</a> and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canadian contest calendar</a>. We are not affiliated with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'A clock written into Saskatchewan law, and what it means for lessons',
      intro: 'Most of Canada changes its clocks on 1 November 2026. Regina does not. Here is what the province&rsquo;s own bill says, and how our class times follow from it.',
      body: [
        { kind: 'table', caption: 'Regina class times in India time, all year. Regina is on UTC-6 with no daylight saving (IANA tzdb 2026e); the conversions are ours', head: ['Regina class time', 'India time', 'Same in winter and summer?'], rows: [
          ['5:00 pm on a weekday', '4:30 am the next day', 'Yes'],
          ['7:00 pm on a weekday', '6:30 am the next day', 'Yes'],
          ['11:00 am on a Sunday', '10:30 pm the same day', 'Yes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Time Act, 2026', p: 'Bill No. 58 defines central standard time as UTC-6 and says the time to be observed in Saskatchewan is central standard time, including in Lloydminster. The bill comes into force by order of the Lieutenant Governor in Council; we have not confirmed that order, and nothing on this page depends on it.' },
          { h3: 'Regina numbers', p: 'Saskatchewan numbers start with 306, 639 or 474. The form takes the ten digits; Canada&rsquo;s +1 is already set.' },
          { h3: 'Booked once, fixed all year', p: 'Because neither Regina nor India moves its clocks, a class booked in October is at the same Regina time in February and in May. We still confirm every time in Saskatchewan time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to a Computer Science 30 capstone',
    intro: 'A rough guide by age. The free class places each student on the right step.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Visual coding', p: 'Blocks, sequences and loops, with the child explaining each plan out loud.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Into Python', p: 'Typed code with conditions and functions, and a first honest look at how AI tools learn.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 10', h3: 'Data and contests', p: 'Files, lists, sets and the Regina parks layers, with full-solution contest work for keen students.', courses: ['python-complete-masterclass-teens', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 11 and 12', h3: 'Capstone and Grade 12 math', p: 'Machine learning, large programs, and support beside Pre-Calculus 30, with no credit granted by us.', courses: ['ai-ml-masterclass-teens', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can a Regina student let AI write the Computer Science 30 capstone?',
    intro: 'It could write a lot of the code. It could not do the part the course actually assesses.',
    p1: 'Ask an AI tool to compare the two Regina layers and it may report 45 missing playgrounds with total confidence. It has no way of knowing that 35 of those names simply never appear in the other layer. A student who wrote the set operations, then went looking at why the names differed, has done the thinking that CS30-CAP2&rsquo;s documentation and reflection are meant to capture.',
    p2: 'We teach that thinking: understand the problem, build the solution yourself, then challenge it. Students meet AI assistants as they grow, inside each tool&rsquo;s age rules, as a tutor to question, never as the author of work they submit.',
    closer: 'A capstone you cannot explain line by line is not proficiency, and Saskatchewan&rsquo;s outcome asks for proficiency.',
    blogAnchor: 'our longer piece on why the reasoning cannot be outsourced'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Regina families take our classes',
    intro: 'Online and live, so the teacher sees the student&rsquo;s screen and hears their reasoning, wherever in Regina they are.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'One to one or a group', p: 'A private teacher for capstone or Grade 12 math work, or a group of 15 to 20 students at one stage.' },
      { h3: 'Grade 12 planning', p: 'Teachers know the shape of Computer Science 30, Pre-Calculus 30 and Calculus 30, and plan around school deadlines. Marked school work stays entirely the student&rsquo;s own.' },
      { h3: 'Across Saskatchewan', p: 'Students outside Regina, in smaller towns or on farms with a good connection, join the same classes on the same fixed clock.' },
      { h3: 'Set-up', p: 'A laptop or desktop with audio and a reliable connection. For senior students we install Python and an editor together in the first lesson.' },
      { h3: 'The free lesson', p: 'A real class, not a pitch, ending with a suggested course and time. No payment details are requested.' }
    ],
    spec: { title: 'No Regina premises', p: 'Modern Age Coders has no office or classroom in Regina. Every class is live online, taught from India in English.' }
  },

  fees: {
    h2: 'Fees for Regina families',
    intro: 'Three options; the page shows each in your own currency.',
    first: 'A full live lesson, free, finishing with a recommended course and class time.',
    group: 'The monthly fee for a group of 15 to 20 students at the same stage.',
    private: 'The monthly fee for one-to-one lessons, at hours the family picks.',
    closer: 'Regina families pay the same monthly fee as families elsewhere in Canada. Billing starts only after the free lesson, once course and time are agreed; the pricing page covers holidays and missed classes.'
  },

  reviewsH2: 'What our families and students have said on Google',

  book: {
    h2: 'Book a free lesson for a Regina student',
    intro: 'Give us the age and the courses. A young child might animate a character, a Grade 8 student build a Python quiz, and a Computer Science 30 student reconcile the two Regina layers.',
    success: 'Thank you. The team will be in touch soon about a class for Regina.'
  },

  faq: {
    h2: 'Regina coding and AI questions',
    intro: 'What Regina parents and students ask us most often.',
    items: [
      { q: 'Are there coding classes in Regina for children?', a: 'Yes, taught live over video, not at a local centre. Children from 6 take part from home, one to one or in a group of 15 to 20.' },
      { q: 'Can you help with Computer Science 30?', a: 'Yes. We work on data structures, files, recursion, sorting and the capstone program alongside the school course, in whichever language the school uses.' },
      { q: 'Do you tutor Pre-Calculus 30 or Calculus 30 in Regina?', a: 'Yes. Our Grade 12 math course was built for Pre-calculus 12 and Math 30-1, and for Saskatchewan we follow the school\'s outline for Pre-Calculus 30 or Calculus 30.' },
      { q: 'Will your classes count as a Saskatchewan credit?', a: 'No. We do not grant provincial credits. The school awards credits; our lessons build the understanding behind them.' },
      { q: 'What time are classes for Regina?', a: TIMING + ' Regina keeps UTC-6 all year, so a booked time never shifts.' },
      { q: 'Does Regina change its clocks on 1 November 2026?', a: 'No. Saskatchewan stays on UTC-6 all year. Bill No. 58, the Time Act, 2026, sets central standard time at UTC-6 hours; we have not confirmed it is in force, but the IANA time zone database already shows no change for Regina.' },
      { q: 'Can a Regina student enter the Hypatia or the team contest?', a: 'Yes, through a school. CEMC lists Fryer, Galois and Hypatia for Wednesday 7 April 2027, and the team contest in schools from Wednesday 14 April 2027.' },
      { q: 'Is AI part of the classes for younger students?', a: 'Yes, at the right level. Children learn what AI is and where it goes wrong; teens build machine learning models in Python with real data.' },
      { q: 'Which phone numbers does the form accept?', a: 'Regina and other Saskatchewan numbers with 306, 639 or 474 all work. Type the ten digits and leave out the leading 1.' },
      { q: 'Where do I find the fees?', a: 'On this page, in the fees block: the free lesson, the monthly group fee and the monthly private fee, in your own currency. There is no charge before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Related pages for Regina students',
    html: 'Begin with <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Senior math students can compare courses on <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Canadian high school math courses compared</a>, contest students can use the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">contest calendar</a>, and every city&rsquo;s clock is on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Regina and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' },
    { href: '/fryer-galois-hypatia-contests-guide', label: 'Fryer, Galois, Hypatia' },
    { href: '/canada-high-school-math-courses-compared', label: 'Math courses compared' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-ar .cg-hero h1 { font-weight: 730; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-ar .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ar .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-ar .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.008em; }
.cg-root.cg-ar .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-ar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ar #parks code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.85rem 1rem; border-left: 5px solid var(--cg-accent); }
.cg-root.cg-ar .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-ar .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Saskatchewan Ministry of Education curriculum site, read raw 22 October 2026 (copies in ca/src/coding-classes-in-saskatchewan/): Computer Science 30 outcomes CP2, FP1 to FP4, CC1, CC2, CAP1, CAP2; Pre-Calculus 30 P30.2, P30.9, P30.10, P30.12, PC30.13; Calculus 30 C30.3, C30.4, C30.6. The Time Act, 2026, Bill No. 58 text (UTC-6, Lloydminster, in force by order). CEMC Fryer, Galois, Hypatia, CTMC and Problem of the Week facts and the through-a-school rule. America/Regina offsets and the 306/639/474 area codes from facts-geo.md.',
    localProject: 'City of Regina open data, ParksAndAmenities layers 0 and 1 (Open Government Licence - City of Regina), downloaded with curl on 22 October 2026 and reconciled with our script reconcile_page.py (python -I): 998 park areas under 442 names; PLAYGROUND Yes on 210 areas (200 names); 254 playground points on 220 names; 175 names on both lists, 25 flag only, 45 point only (35 absent from layer 0); winter amenity counts. No park or school names printed. Labelled as ours. Lesson family: reconciling two tables with set operations on a key, and why a text key fails.',
    requiredMentions: [
      'Open Government Licence - City of Regina',
      '998 areas carry only 442 names',
      'agree on 175 park names and differ on 70',
      '35 never appear among the park areas',
      '19 toboggan hills',
      'Engage in collaborative programming practices.',
      '34 outdoor rink shelters',
      'Booked once, fixed all year',
      '11:00 am on a Sunday',
      'teams of six students from any mix of Grades 9 to 12'
    ],
    sources: [
      { claim: 'Saskatchewan curriculum: Computer Science 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumHome?id=444' },
      { claim: 'Saskatchewan curriculum: Pre-Calculus 30 and Calculus 30 outcomes.', url: 'https://curriculum.gov.sk.ca/CurriculumOutcomeContent?id=159' },
      { claim: 'Legislative Assembly of Saskatchewan: The Time Act, 2026, Bill No. 58.', url: 'https://docs.legassembly.sk.ca/legdocs/Bills/30L2S/Bill30-58.pdf' },
      { claim: 'City of Regina ParksAndAmenities map service (layers 0 and 1).', url: 'https://opengis.regina.ca/arcgis/rest/services/OpenData/ParksAndAmenities/MapServer' },
      { claim: 'City of Regina: Open Government Licence (commercial use, attribution, non-endorsement).', url: 'https://regina.ca/city-government/open-data/open-government-licence' },
      { claim: 'CEMC: Fryer, Galois, Hypatia, CTMC and Problem of the Week, 2026-27.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Regina, no daylight saving time.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That Regina has 254 playgrounds, or that 45 are missing from the map: refused; the layers support only the reconciliation counts.',
      'That the Time Act, 2026 is in force: not claimed; only the bill text was read.',
      'That Regina is the capital of Saskatchewan: not stated; marked UNVERIFIED in facts-geo.md.',
      'Any Regina population figure: StatCan was not reachable live.',
      'Park or school names from the City layers: not printed (school names appear in the NAME column).',
      'That our Grade 12 math course was written for Pre-Calculus 30: not claimed; matched to the school outline.',
      'That our classes grant a Saskatchewan credit: refused; we do not grant provincial credits.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Regina, the Saskatchewan Ministry of Education, the Legislative Assembly, CEMC or the University of Waterloo.'
    ]
  }
};
