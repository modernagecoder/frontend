'use strict';
// Newfoundland and Labrador (cg- province page, Canada cluster Plan 2, row 96). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: the computing a student here already meets in the Technology Education program (Computer Science 8, Computer
// Science 1204, Communications Technology 3104, Robotic Systems Technology 3205), the Applied / Academic / Advanced math
// fork, a place-names data project on the province's official names, the CEMC contests, and the island vs Labrador clocks.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/coding-classes-in-newfoundland-and-labrador/;
// gov.nl.ca had returned a "Temporary Disruption to Government Websites" HTTP 500 notice on 21 and 22 October, and answered
// HTTP 200 on the single retry made for this page):
//  - gov.nl.ca/education/k12/curriculum/ (gov-nl-education.html): page title "Curriculum - Education and Early Childhood
//    Development"; curriculum guides "found on the eNLightenED website" (nl-guides.html).
//  - Program of Studies 2025-2026, Technology Education (nl-pos-technology.html): "Technology Education fosters the development
//    of all learners as technologically literate and capable citizens"; "The program at the intermediate level consists of four
//    26 hour compulsory modules."; strands include "technological problem solving" and "technological responsibility";
//    "requiring students to work in design teams mirroring product development and engineering environments"; Computer Science 8:
//    "plan, design and create block-based programs for specific tasks", "control physical devices such as LEDs and motors",
//    topic "Technology sector in Atlantic Canada"; Computer Science 1204: "build skills in both block-based and text-based
//    programming languages", "control physical devices, such as sensors and motors", five units; Communications Technology 3104:
//    "Students acquire the skills and knowledge to become proficient programmers.", units Data Manipulation, Web Services
//    Technologies, Designing a Mobile Application; Robotic Systems Technology 3205: "design and build a robot".
//  - Program of Studies, front page (nl-descriptions.html): "In 2023, the Division of Programs and Services adopted the
//    Newfoundland and Labrador Key Competencies"; six competencies listed (our count). Key Competencies page
//    (nl-key-competencies.html): critical thinking and problem solving "to make informed judgments and decisions".
//  - Program of Studies, Mathematics (nl-pos-mathematics.html): Applied 1202, 2202, 3202 "entry into the majority of trades and
//    for direct entry into the workforce"; Academic 2201, 3201 "that do not require the study of calculus"; Advanced 2200, 3200,
//    3208 "that require the study of calculus"; Mathematics 1201 "intended for students who plan to undertake academic or advanced
//    mathematics in Level II"; prerequisites (3200 and 3208: Mathematics 2200; 3201: "Mathematics 2201 or Mathematics 2200");
//    3208 topics from "Limits and Continuity" to "Antidifferentiation and Integration"; K-9 processes include "Technology".
//  - Graduation requirements (nl-gradreq.html): "Students require 36 credits to graduate"; "most students complete 14 credits
//    each year". Distance Learning (nl-distance.html): "Centre for Distance Learning and Innovation (CDLI)"; "CDLI currently
//    offers 38 courses to students attending 103 schools, primarily located in rural, remote and isolated communities".
//    PRMA page (nl-prma.html): "Provincial Reading and Mathematics Assessments (PRMA)", "Grades 3 and 6 PRMA".
//  - CEMC contest dates and rules from keyword-research-2026-09/ca/facts-schools-contests.md rows 112-127, 136-151.
//  - facts-geo.md: America/St_Johns UTC-3:30 / UTC-2:30, most of Labrador America/Goose_Bay UTC-4 / UTC-3 (IANA tzdb 2026e);
//    area codes 709 and 879 (CNAC files via the Internet Archive; 879 "Deferred Indefinitely" in the 2023 table, 1 code in
//    service by 2025-07-30). No populations used.
//  - Natural Resources Canada, Canadian Geographical Names Database, cgn_nl_csv_eng.zip from ftp.cartes.canada.ca, downloaded
//    22 October 2026 (zip sha256 cbb2f302...c9d7, csv sha256 21903ab6...c6); licence "Open Government Licence - Canada" named
//    in the NRCan metadata file cgn_NL_20201125_nap.xml (saved). opendata.gov.nl.ca returned the disruption notice (HTTP 500,
//    saved as ERR500-nl-opendata-home.html), so the national file was used. Town names checked against the same file.
// Our own calculations (count_names.py and analysis.py, python -I, outputs count_names.out.txt and analysis.out.txt; the
// script as printed on the page is saved as count_names_page.py and gives identical output):
// 33,150 rows, 33,150 distinct CGNDB IDs; Concise Code LAKE 8,794, BAY 5,775, CAPE 4,370, ISL 3,205; within LAKE, Generic Term
// Pond 6,742, Lake 1,020, Ponds 365, Gully 210, Steady 160; Generic Term Cove 3,881 (3,880 BAY, 1 RIVF); Tickle 245 (all CHAN);
// 93 Pond rows have no "pond" in the name (one is Arvert Lake); 283 Lake rows have no "lake" in the name; Long Pond 179 rows,
// 178 coded LAKE. India time conversions are ours. Counts are never summed into a published total.
// Lesson family: grouping by two columns at once (a category and a sub-label), and testing a label against the text it labels.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  '',
  'concise_counts = {}',
  'generic_counts = {}',
  'lake_words = {}',
  '',
  'with open("cgn_nl_csv_eng.csv", encoding="utf-8-sig") as names_file:',
  '    for row in csv.DictReader(names_file):',
  '        concise = row["Concise Code"]',
  '        generic = row["Generic Term"]',
  '        concise_counts[concise] = concise_counts.get(concise, 0) + 1',
  '        generic_counts[generic] = generic_counts.get(generic, 0) + 1',
  '        if concise == "LAKE":',
  '            lake_words[generic] = lake_words.get(generic, 0) + 1',
  '',
  'print(sum(concise_counts.values()), "names")',
  'for code in ["LAKE", "BAY", "CAPE", "ISL"]:',
  '    print(code, concise_counts[code])',
  'top = sorted(lake_words, key=lake_words.get, reverse=True)',
  'for word in top[:5]:',
  '    print("LAKE as", word, lake_words[word])',
  'print("Tickle", generic_counts.get("Tickle", 0))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'NEWFOUNDLAND AND LABRADOR', label: 'Newfoundland and Labrador', blurb: 'Coding, Python and AI for students across Newfoundland and Labrador, set against Computer Science 8 and 1204, with a place-names data project.' },
  market: CA,
  slug: 'coding-classes-in-newfoundland-and-labrador',
  code: 'new',
  accent: '#236134',
  accentRationale: 'Newfoundland and Labrador: a muted spruce green, #236134, allocated for row 96 and kept clear of the retired purple and cyan band; contrast 7.00 on the paper #FBF8F2 (6.58 and 6.02 on the two paper tints), above the 4.5 floor',
  pageType: 'city',
  courseCodePage: true,
  place: {
    name: 'Newfoundland and Labrador',
    eyebrow: 'Newfoundland and Labrador, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Newfoundland and Labrador',
  title: 'Coding Classes in Newfoundland and Labrador | Live Online',
  description: 'Live online coding, Python, AI and math classes for Newfoundland and Labrador students, set beside Computer Science 1204 and the province\'s math pathways.',
  ogDescription: 'Computer Science 8 is compulsory here and CS 1204 drives sensors and motors. What the province teaches, the math fork, CEMC dates and live online classes.',
  twitterDescription: 'Newfoundland and Labrador coding, Python and AI classes, live online, set beside the Program of Studies.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python, AI and Math Classes for Newfoundland and Labrador Students',
    description: 'Live online coding for students across Newfoundland and Labrador from age 6 to adult: block coding, Python, AI and machine learning, CCC preparation and high school math, taught in English in a group or one to one.'
  },

  h1: 'Coding classes in Newfoundland and Labrador',
  capsuleQ: 'Where can a student in Newfoundland and Labrador learn coding with a live teacher?',
  capsule: 'Modern Age Coders teaches coding, Python, AI and math live online to learners anywhere in Newfoundland and Labrador, aged 6 through adult, in groups of fifteen to twenty students or individually. Families usually start with Python and AI for Kids or Python for Teens. Times are set in Newfoundland time, or Atlantic time for most of Labrador, and the first class is free.',
  lead: 'The province teaches more computing than many families realize. Its Program of Studies, the course descriptions published by the Department of Education and Early Childhood Development, lists a Computer Science 8 module in the intermediate grades and a Computer Science 1204 course in senior high, and both point code at real hardware: LEDs, sensors and motors. What a school timetable rarely has room for is the long middle stretch, where a student writes a program too big to finish in one period, gets it wrong and works out why. This page quotes what the department publishes, walks through a data project we built on the official place names of the province, lists the CEMC contests open through schools in 2026 to 2027, and explains how live online classes sit beside school here. We teach alongside school courses and we do not grant provincial credits.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in Newfoundland and Labrador.',

  picks: {
    eyebrow: 'Course picks for Newfoundland and Labrador',
    h2: 'Four courses that fit the way this province teaches computing and math',
    intro: 'Chosen against the Technology Education modules and the math pathways described below, then confirmed in a free first class with the student at the keyboard.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'Typed Python through games and drawings, so the block programs of Computer Science 8 arrive as ideas the child already owns rather than new ones.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Text-based Python from a first program to files and functions, the half of Computer Science 1204 that a short course can only start, and the language of the place-names project here.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning built from Python a student can read, on data they can open, so every prediction can be checked against the file it came from.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'High school math', note: 'Algebra, functions, trigonometry and an introduction to calculus, taught beside the Academic or Advanced courses. It does not grant a provincial credit; the school course does.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'What schools here teach',
      h2: 'Coding in the Newfoundland and Labrador Program of Studies',
      intro: 'The Department of Education and Early Childhood Development publishes a Program of Studies that describes every course. We read the 2025-2026 edition on 22 October 2026. Anything in quotation marks is the department&rsquo;s wording; everything else is our reading of it.',
      body: [
        { kind: 'table', caption: 'Computing in Technology Education, from the Program of Studies 2025-2026 (read 22 October 2026). Quotes are the department&rsquo;s; the short summaries are ours', head: ['Course or module', 'Where it sits', 'What the department says it covers'], rows: [
          ['Communication Technology 7', 'Intermediate module', 'Our summary: graphic and multimedia skills, ending in an innovation challenge that combines digital audio, video and graphic design'],
          ['Computer Science 8', 'Intermediate module', 'Students &ldquo;plan, design and create block-based programs for specific tasks&rdquo; and use them to &ldquo;control physical devices such as LEDs and motors&rdquo;'],
          ['Computer Science 1204', 'High school course', 'Skills &ldquo;in both block-based and text-based programming languages&rdquo;, across five units that end in an innovation challenge'],
          ['Communications Technology 3104', 'High school course', 'Units on data manipulation, web services technologies and designing a mobile application; the department says students &ldquo;acquire the skills and knowledge to become proficient programmers&rdquo;'],
          ['Robotic Systems Technology 3205', 'High school course', 'Electronics, programming and interfacing, with students in design teams who &ldquo;design and build a robot&rdquo;']
        ] },
        { kind: 'p', text: 'Two details stand out for parents. The first is that the intermediate program is compulsory: the department describes it as &ldquo;four 26 hour compulsory modules&rdquo;, and Computer Science 8 is one of the four, so on paper every intermediate student builds block programs. The second is that programming here is physical from the first lesson. Computer Science 8 drives LEDs and motors, and Computer Science 1204 asks students to &ldquo;control physical devices, such as sensors and motors&rdquo;. A child who has made a motor respond to a sensor has met a loop and a condition in the most concrete form there is, and the step to typed code is shorter than it looks.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Design teams', p: 'Technology Education outcomes run along five strands, among them &ldquo;technological problem solving&rdquo; and &ldquo;technological responsibility&rdquo;. Each course carries a design challenge, with students in teams &ldquo;mirroring product development and engineering environments&rdquo;, in the department&rsquo;s phrase.' },
          { h3: 'Key Competencies since 2023', p: 'In 2023 the department&rsquo;s Division of Programs and Services adopted six Newfoundland and Labrador Key Competencies to guide new curriculum. One is Critical Thinking and Problem Solving, which the department links to reaching &ldquo;informed judgments and decisions&rdquo;.' },
          { h3: 'Credits and CDLI', p: 'Students need 36 credits to graduate, and the department notes most complete 14 a year. Its Centre for Distance Learning and Innovation (CDLI) reports 38 courses for students at 103 schools, mainly in rural, remote and isolated communities.' }
        ] },
        { kind: 'callout', h3: 'Beside school, never instead of it', p: 'Modern Age Coders teaches alongside a student&rsquo;s school courses, and we do not grant provincial credits. Computer Science 1204, Mathematics 3200 and every other credit are earned at school. We are not connected with the Department of Education and Early Childhood Development, CDLI or any school district.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'Math pathways',
      h2: 'Applied, Academic or Advanced: the high school math fork',
      intro: 'Senior high math in Newfoundland and Labrador comes in three families of numbered courses. The descriptions are the department&rsquo;s, from the same Program of Studies.',
      body: [
        { kind: 'table', caption: 'High school math course families, Program of Studies 2025-2026 (read 22 October 2026). Mathematics 1201 leads into both the Academic and the Advanced courses', head: ['Family', 'Courses', 'What the department says the family prepares students for'], rows: [
          ['Applied', '1202, 2202, 3202', 'Entry &ldquo;into the majority of trades and for direct entry into the workforce&rdquo;'],
          ['Academic', '2201, 3201', 'Post-secondary programs &ldquo;that do not require the study of calculus&rdquo;'],
          ['Advanced', '2200, 3200, 3208', 'Post-secondary programs &ldquo;that require the study of calculus&rdquo;']
        ] },
        { kind: 'p', text: 'Mathematics 1201 is described as the course for students who plan to take academic or advanced mathematics in Level II, and after it the prerequisites fork. Mathematics 3200, with polynomial, trigonometric, exponential and logarithmic functions, lists Mathematics 2200 as its prerequisite. So does Mathematics 3208, whose topics run from limits and continuity through derivatives to antidifferentiation and integration. Mathematics 3201 accepts either 2201 or 2200. Read together, those lines mean a student who moves from 2200 down to 2201 can still reach 3201, but not 3200 or 3208 by that route, which is worth knowing before the Level II choice is made rather than after.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grades 3 and 6: the PRMA', p: 'The department runs Provincial Reading and Mathematics Assessments, the PRMA, in Grades 3 and 6. We do not drill a test format. We build the number sense and reasoning that any fair math assessment is looking for, and the format follows.' },
          { h3: 'Technology as a math process', p: 'The Kindergarten to Level III math program names Technology among the processes that run through every grade, beside Problem Solving and Reasoning. A short program that tests a pattern on its first hundred cases is one honest way to use it.' },
          { h3: 'Where Python helps', p: 'Mathematics 2201 includes inductive and deductive reasoning and a mathematics inquiry; Mathematics 3201 adds set theory, counting methods and probability. Those are exactly the topics where a few lines of code can check a hand calculation, or break a wrong one.' }
        ] }
      ]
    },
    {
      id: 'names', tint: 'deep', eyebrow: 'Our data project',
      h2: 'Ponds, coves and tickles: Python on the province&rsquo;s official place names',
      intro: 'Natural Resources Canada publishes the Canadian Geographical Names Database as open data. We downloaded the Newfoundland and Labrador file on 22 October 2026 and counted it in Python. Every number below is our count, not a figure the government publishes.',
      body: [
        { kind: 'table', caption: 'Our count of the Newfoundland and Labrador names file (cgn_nl_csv_eng.csv, 33,150 rows), downloaded 22 October 2026. Column names as they appear in the file', head: ['What we counted', 'Rows'], rows: [
          ['All official names in the file', '33,150'],
          ['Concise Code LAKE', '8,794'],
          ['Concise Code LAKE with Generic Term Pond', '6,742'],
          ['Concise Code LAKE with Generic Term Lake', '1,020'],
          ['Concise Code LAKE with Generic Term Ponds', '365'],
          ['Concise Code LAKE with Generic Term Gully', '210'],
          ['Concise Code LAKE with Generic Term Steady', '160'],
          ['Concise Code BAY', '5,775'],
          ['Generic Term Cove (3,880 of them coded BAY)', '3,881'],
          ['Generic Term Tickle (every one coded CHAN)', '245'],
          ['Rows named exactly Long Pond', '179']
        ] },
        { kind: 'p', text: 'This is the script that prints the main counts. It needs only Python&rsquo;s standard library and runs in the same folder as the unzipped CSV:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Two columns, two questions', p: 'Concise Code is the database&rsquo;s broad class, so a pond, a lake and a steady all share LAKE. Generic Term is the local word. Counting each column, and then counting one inside the other, is the core of the lesson: a dictionary update inside an if statement.' },
          { h3: '2. Test the label against the name', p: 'Next, students check an assumption. Of the 6,742 Pond rows, 93 have no &ldquo;pond&rdquo; anywhere in the name, and one of those is called Arvert Lake. Of the 1,020 Lake rows, 283 have no &ldquo;lake&rdquo; in the name. A label and a name are different fields, and good code says which one it means.' },
          { h3: '3. Repeats are not duplicates', p: 'Long Pond is the most repeated name, on 179 rows, and 178 of them are coded LAKE. Yet every row has its own CGNDB ID, 33,150 IDs for 33,150 rows, so these are separate places sharing a name, not copies to delete.' }
        ] },
        { kind: 'callout', h3: 'What the counts cannot say', p: 'A row is an official name, not a measurement. Nothing in the file says whether a pond is smaller than a lake, so 6,742 against 1,020 tells you how people in this province name standing water, not how big it is. Getting that sentence right is the part of the project no script writes for you.' },
        { kind: 'p', text: 'A natural next step is a map: plot the Latitude and Longitude columns for Tickle rows and see where the word clusters along the coast. Why the national file and not the province&rsquo;s own portal? On 22 October 2026 the provincial open data site showed a temporary disruption notice, so we used the national copy. Source: Natural Resources Canada, Canadian Geographical Names Database, Newfoundland and Labrador CSV, used under the Open Government Licence - Canada, which the dataset&rsquo;s metadata names (<a class="cg-inline-link" href="https://ftp.cartes.canada.ca/pub/nrcan_rncan/vector/geobase_cgn_toponyme/prov_csv_eng/">download folder</a>). Natural Resources Canada has not reviewed or endorsed this project, this page or our teaching.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests through school',
      h2: 'CEMC contests open to Newfoundland and Labrador students in 2026 to 2027',
      intro: 'Most contests that Canadian schools order are set by the University of Waterloo&rsquo;s Centre for Education in Mathematics and Computing, known as CEMC. The dates below are the ones CEMC gives for schools in North and South America, checked on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'What CEMC offers this school year, in date order, with the dates CEMC itself gives (2026 to 2027)', head: ['CEMC date', 'Contest', 'Open to'], rows: [
          ['9 November to 20 November 2026', 'Beaver Computing Challenge, multiple choice, with no programming background expected', 'Grade 10 or below, at three levels'],
          ['17 February 2027', 'Canadian Computing Competition (CCC), at Junior or Senior level', 'Any grade; the level is chosen by skill'],
          ['23 and 24 February 2027', 'Pascal, Cayley and Fermat', 'Grades 9, 10 and 11 respectively'],
          ['6 April 2027', 'Euclid', 'Students in their last year of secondary school'],
          ['7 April 2027', 'Fryer, Galois and Hypatia', 'Grades 9, 10 and 11 respectively'],
          ['10 May to 21 May 2027', 'Gauss', 'Grades 7 and 8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entered by a school', p: 'CEMC states that &ldquo;it is not possible for students to individually register for a contest&rdquo;. A family whose school does not order one can ask a nearby school to host the student, which CEMC itself suggests.' },
          { h3: 'The 2027 CCC', p: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027: five questions in three hours, scored out of 75, in C, C++, Python or Java. Junior is aimed at beginner to intermediate programmers and Senior at intermediate to advanced, whatever the grade.' },
          { h3: 'Free practice', p: 'Ten years of CEMC past contests are free, with no registration, and the CCC Online Grader offers a free practice account. Students practise in <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s own archive</a>; in class we use problems we write ourselves, never CEMC&rsquo;s.' }
        ] },
        { kind: 'p', text: 'A student coming out of Computer Science 1204 often finds CCC Junior questions closer than expected: read some numbers, loop, decide, print. The gap is speed and edge cases, and that is where a teacher reading the code line by line pays off. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers both levels, while our page on <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo math contests</a> runs from Gauss to Euclid. Modern Age Coders has no link with CEMC or the university.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Newfoundland time, Labrador time and India time in 2026 to 2027',
      intro: 'The island of Newfoundland keeps its own half-hour zone, while most of Labrador keeps Atlantic time. Both change their clocks on 1 November 2026 and 14 March 2027. India, where our teachers work, never changes.',
      body: [
        { kind: 'table', caption: 'Island and Labrador offsets for the 2026 to 2027 school year, per the IANA tz database, release 2026e; the India conversions are ours', head: ['Period', 'Island of Newfoundland', 'Most of Labrador', 'Weekday 4 to 7 pm on the island is, in India', 'Saturday 9 am to noon on the island is, in India'], rows: [
          ['Now, until 1 November 2026', 'UTC-2:30', 'UTC-3', 'Midnight to 3:00 am the next day', '5:00 to 8:00 pm'],
          ['Winter: 1 November 2026 to 14 March 2027', 'UTC-3:30', 'UTC-4', '1:00 to 4:00 am the next day', '6:00 to 9:00 pm'],
          ['Summer: from 14 March 2027', 'UTC-2:30', 'UTC-3', 'Midnight to 3:00 am the next day', '5:00 to 8:00 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Labrador families', p: 'In most of Labrador the clock runs 30 minutes behind the island. A 4 pm class in Labrador City is 1:30 am in India in winter, so we write every time in the family&rsquo;s own zone and never assume island time.' },
          { h3: 'Phone numbers', p: 'Area code 709 covers the whole province. CNAC&rsquo;s 2023 table lists 879 as an overlay deferred indefinitely, though one exchange was in service by 2025. Either way, enter all ten digits, since the form supplies the +1.' },
          { h3: 'A half-hour bug', p: 'Plenty of scheduling code assumes time zones fall on the hour. A student who builds a class reminder for Newfoundland time, then tests it against the America/St_Johns zone, learns why offsets are looked up and never guessed.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first block program to calculus-track math and AI',
    intro: 'Ages here are only a guide. In the free class we place each student by the skills they show us, not by their birthday.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Blocks and stories', p: 'Short block programs a child can explain aloud, the same block-based start that Computer Science 8 later builds on.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 13', h3: 'Typed Python', p: 'Python with games, drawings and a first look at how AI tools make guesses, so junior high block work feels familiar.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 16', h3: 'Python properly', p: 'Files, functions and real data, plus a first CCC Junior attempt for students who want a contest.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Ages 16 to 18', h3: 'AI and senior math', p: 'Machine learning in Python, and steady support for students in the Academic or Advanced math courses.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in Newfoundland and Labrador when AI writes code?',
    intro: 'Because the hard part of the place-names project was never the loop.',
    p1: 'An AI assistant will write the counting script above in seconds. It will not stop to ask whether a Gully coded LAKE is water you could paddle across, why Arvert Lake sits under Pond, or whether 179 rows of Long Pond are one place or many. Those questions decide whether the answer is right, and a student only learns to ask them after writing enough code by hand to see where data goes wrong.',
    p2: 'So we teach students to reason first: state the question, predict the answer, write the code, then argue with the output. Older students use AI tools under the age rules we follow, and they use them to check work they could have done themselves, never to hand in work they could not explain.',
    closer: 'The department counts critical thinking and problem solving among its Key Competencies, and that is the one skill no AI tool can practise for anyone.',
    blogAnchor: 'whether coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes that reach the whole province',
    intro: 'Online teaching makes distance irrelevant: a student on the Avalon and a student on the Labrador coast can sit in the same lesson with the same teacher.',
    cells: [
      { h3: 'Class times', p: TIMING },
      { h3: 'Across the province', p: 'Families in St. John&rsquo;s, Mount Pearl, Conception Bay South, Corner Brook, Gander, Grand Falls-Windsor and Labrador City join the same classes, each confirmed in their own local time.' },
      { h3: 'Group or one to one', p: 'Groups hold fifteen to twenty students working at one level. One-to-one means a single teacher and student, for faster progress, CCC work or math before exams.' },
      { h3: 'Planned by course number', p: 'Teachers plan by grade and by the course numbers families here use, such as 1204, 2200 or 3201, and graded school assignments remain the student&rsquo;s work alone.' },
      { h3: 'What a student needs', p: 'A laptop or desktop with sound and a steady internet connection, and a quiet place to type. Nothing else is required for the first class.' },
      { h3: 'First lesson free', p: 'Every student begins with a full lesson at no cost, which ends with a level, a course and a suggested time. No card details are asked for.' }
    ],
    spec: { title: 'No office in the province', p: 'Modern Age Coders has no centre in Newfoundland and Labrador and claims none. Teaching is live and online from India, and every class time is written in the family&rsquo;s own zone.' }
  },

  fees: {
    h2: 'What classes cost for families in Newfoundland and Labrador',
    intro: 'A free first lesson, then one of two monthly fees, each shown in your own currency.',
    first: 'A complete first lesson with a teacher, free, ending in a recommended level, course and class time.',
    group: 'The monthly fee for a group of fifteen to twenty students at the same stage, with eight live classes a month.',
    private: 'The monthly fee for one-to-one teaching, at times agreed with the family.',
    closer: 'The fee is the same across Canada, wherever a family lives. Nothing is charged before the free lesson, and the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What families and students say about Modern Age Coders on Google',

  book: {
    h2: 'Tell us about your student in Newfoundland and Labrador',
    intro: 'We pitch the first task to the student: a block animation for a six-year-old, a Python quiz for a child in Grade 6, or the place-names file for a teenager who wants real data.',
    success: 'Thank you. The team will contact you soon about a class in Newfoundland and Labrador.'
  },

  faq: {
    h2: 'Newfoundland and Labrador coding questions',
    intro: 'What families across the province ask us before a first class.',
    items: [
      { q: 'Are there coding classes in Newfoundland and Labrador?', a: 'Yes, taught live over the internet. We have no building in the province: students log in from home and learn with a real teacher, either in a group of fifteen to twenty or individually.' },
      { q: 'Do schools in Newfoundland and Labrador teach coding?', a: 'Yes. The Program of Studies lists a compulsory Computer Science 8 module, where students build block-based programs that control LEDs and motors, and a high school Computer Science 1204 course with block-based and text-based programming.' },
      { q: 'Will your classes count for a Newfoundland and Labrador credit?', a: 'No. We do not grant provincial credits. Courses such as Computer Science 1204 or Mathematics 3200 are credited by the school, and our classes run alongside them.' },
      { q: 'Which math course leads to a calculus program?', a: 'The department describes the Advanced courses, 2200, 3200 and 3208, as preparing students for post-secondary programs that require calculus, and both 3200 and 3208 list Mathematics 2200 as the prerequisite. Check the entrance rules of the program itself too.' },
      { q: 'What age can my child start coding?', a: 'From age 6, with blocks and short stories. Most children move to typed Python somewhere between 9 and 12, and adults are welcome as well.' },
      { q: 'Do you teach Python for teens?', a: 'Yes. Python for Teens starts at a student\'s very first program and builds up to functions, files and working with data; after it come our AI and machine learning course and CCC preparation.' },
      { q: 'Can my child write the CCC from here?', a: 'Yes, through a school. CEMC lists the 2027 CCC for Wednesday 17 February 2027 and says students cannot register on their own. We coach for it using problems we wrote, in Python, C++ or Java.' },
      { q: 'When do classes run for families on the island?', a: TIMING + ' We send each time in Newfoundland time, or in Atlantic time for families in most of Labrador.' },
      { q: 'Do Labrador families use a different clock?', a: 'Most of Labrador keeps Atlantic time, 30 minutes behind the island. We write each class time in the family\'s own zone and re-confirm it before the changes on 1 November 2026 and 14 March 2027.' },
      { q: 'Can I use a 709 number in the booking form?', a: 'It works. Key in the ten digits of the 709 number without a leading 1, because the form adds +1 itself.' },
      { q: 'Where are the fees shown?', a: 'Further up this page: the free first class, then the monthly group fee and the monthly fee for one-to-one teaching, each in your own currency. Billing starts only after the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for students in Newfoundland and Labrador',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, or compare provinces on <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding in each provincial curriculum</a>. Contest students can read <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> and <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>, families juggling clocks can use <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canadian time zones for online classes</a>, and for math support see our page on <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newfoundland and Labrador and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian time zones' }
  ],

  personalityCss: `
.cg-root.cg-new .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; max-width: 20ch; }
.cg-root.cg-new .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-new .cg-eyebrow { letter-spacing: 0.08em; font-weight: 650; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-new .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-new .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-new .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-new #names code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 1rem 1.1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-new .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-new .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Newfoundland and Labrador, read raw on 22 October 2026 from gov.nl.ca (Department of Education and Early Childhood Development): Program of Studies 2025-2026, Technology Education (four 26 hour compulsory intermediate modules; Computer Science 8 block-based programs controlling LEDs and motors; Computer Science 1204 block-based and text-based programming controlling sensors and motors; Communications Technology 3104; Robotic Systems Technology 3205), Key Competencies adopted 2023, Mathematics (Applied 1202/2202/3202, Academic 2201/3201, Advanced 2200/3200/3208, prerequisites), graduation (36 credits), CDLI (38 courses, 103 schools), PRMA Grades 3 and 6. CEMC 2026-27 contest dates and the through-a-school rule; IANA tzdb 2026e for America/St_Johns and America/Goose_Bay; CNAC area codes 709 and 879 via the Internet Archive.',
    localProject: 'Natural Resources Canada, Canadian Geographical Names Database, Newfoundland and Labrador CSV (cgn_nl_csv_eng.csv, Open Government Licence - Canada per the NRCan metadata), downloaded 22 October 2026 and counted with our scripts count_names.py and analysis.py (python -I): 33,150 rows and IDs; Concise Code LAKE 8,794 (Generic Term Pond 6,742, Lake 1,020, Ponds 365, Gully 210, Steady 160), BAY 5,775, CAPE 4,370, ISL 3,205; Cove 3,881; Tickle 245; 93 Pond rows without the word pond (Arvert Lake); 283 Lake rows without the word lake; Long Pond 179 rows, 178 LAKE. Labelled as ours. Lesson family: grouping by two columns and testing a label against its text.',
    requiredMentions: [
      'four 26 hour compulsory modules',
      'control physical devices such as LEDs and motors',
      'Robotic Systems Technology 3205',
      'Centre for Distance Learning and Innovation',
      'Generic Term Steady',
      'Arvert Lake',
      '178 of them are coded LAKE',
      'Mathematics 3201 accepts either 2201 or 2200',
      'Provincial Reading and Mathematics Assessments',
      'A 4 pm class in Labrador City is 1:30 am in India'
    ],
    sources: [
      { claim: 'Newfoundland and Labrador K-12 curriculum page (Department of Education and Early Childhood Development).', url: 'https://www.gov.nl.ca/education/k12/curriculum/' },
      { claim: 'Program of Studies 2025-2026, Technology Education: intermediate modules, Computer Science 8, Computer Science 1204, Communications Technology 3104, Robotic Systems Technology 3205.', url: 'https://www.gov.nl.ca/education/k12/curriculum/descriptions/technology-education/' },
      { claim: 'Program of Studies 2025-2026, Mathematics: Applied, Academic and Advanced courses and prerequisites.', url: 'https://www.gov.nl.ca/education/k12/curriculum/descriptions/mathematics/' },
      { claim: 'Program of Studies: Key Competencies adopted in 2023.', url: 'https://www.gov.nl.ca/education/k12/curriculum/descriptions/' },
      { claim: 'Graduation requirements: 36 credits.', url: 'https://www.gov.nl.ca/education/k12/highschool/gradreq/' },
      { claim: 'Distance Learning: CDLI, 38 courses, 103 schools.', url: 'https://www.gov.nl.ca/education/k12/distance/' },
      { claim: 'Provincial Reading and Mathematics Assessments, Grades 3 and 6.', url: 'https://www.gov.nl.ca/education/k12/prma/' },
      { claim: 'CEMC: 2026-27 contest dates, school-only registration, CCC format and languages, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Natural Resources Canada, Canadian Geographical Names Database provincial CSV files.', url: 'https://ftp.cartes.canada.ca/pub/nrcan_rncan/vector/geobase_cgn_toponyme/prov_csv_eng/' },
      { claim: 'IANA tzdb northamerica: America/St_Johns and America/Goose_Bay offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any population for the province or its towns: StatCan was not reachable live, so none is printed.',
      'A mapping of Level I, II and III to Grades 10, 11 and 12: no saved source states it, so courses are named by number only.',
      'That our classes earn or count toward a Newfoundland and Labrador credit: refused; we do not grant provincial credits.',
      'School calendar dates: the department calendar page we read stops at 2015-16, so no dates are used.',
      'Any PRMA dates or results: the PRMA question and answer PDF has no extractable text, so nothing beyond the grades is quoted.',
      'That a pond is smaller than a lake, or any total of water bodies: the names file does not measure features.',
      'That every Labrador community keeps Atlantic time: the page says most of Labrador, as the time zone database does.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of schools, districts results or private people: not used.',
      'Any affiliation with the Department of Education and Early Childhood Development, CDLI, Natural Resources Canada, CEMC or the University of Waterloo.'
    ]
  }
};
