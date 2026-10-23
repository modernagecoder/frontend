'use strict';
// Halifax (cg- city page, Canada cluster Wave 2, row 107). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. The province page coding-classes-in-nova-scotia (not live yet)
// owns the graduation credits, the full assessment calendar and the Mathematics 10 exam; this page only touches them in fresh
// words and leads with the city: a Halifax Regional Municipality play equipment file, Atlantic time and what a student in
// Halifax can build beyond school.
// Spine: Halifax play equipment as a lesson in coded values and trust ratings, a student path from the Grade 7 and 8 numeracy
// block to Computer Programming 12, contests entered through a school, and the Atlantic clock against India time.
// Sources, read raw on 22 and 23 October 2026:
//  - Halifax Regional Municipality open data, Outdoor Recreation Equipment (hub item 5dbc7a7c78c54dfbae7b53ac428fda90_0;
//    feature service services2.arcgis.com/11XBiaBYA9Ep0yNJ/.../OutdoorRecreationEquipment/FeatureServer/0), CSV downloaded
//    with curl on 22 October 2026 (397,733 bytes, sha256 7e122700...f0a4) with the layer metadata (layer.json): coded values
//    ASSETCODE BBH Basketball Hoop, PYST Play Structure, SWNG Swing, CLIM Climber, SPTY Spring Toy, SLID Slide, THP Triple
//    Hoop, OGE Outdoor Gym Equipment, TETO Teeter Totter, MOD Modular Skateboard Ramp, OTHER; INSTYRCONF 1 "Highly Accurate -
//    Measured Value or Known Fact", 2 "Moderate" (value based on good indications from a reliable source), 3 "Reasoned
//    Assumption", 4 "Low Accuracy", 5 "Inaccurate"; ASSETSTAT INS "In Service". Licence page data-hrm.hub.arcgis.com/pages/
//    open-data-licence (hrm-licence.html): "including for commercial purposes"; attribution statement "Contains information
//    licenced under the Open Government Licence—Halifax." (em dash and the spelling "licenced" in source; written here with a
//    hyphen); non-endorsement clause.
//  - Nova Scotia (keyword-research-2026-09/ca/src/coding-classes-in-nova-scotia/, read raw 22 October 2026): plans-home
//    "Each year, Nova Scotia students in Grades 3, 6, and 8 participate in provincial assessments"; "Students will complete the
//    grade 6 and 8 assessments online using school devices instead of on paper."; plans-calendar Grade 8 main window "May
//    17-June 8, 2027" (dash in source), Mathematics 10 "June 23, 2027"; plans-mathematics-10 "the exam counts for 20% of the
//    final course mark"; psp-4-8 Grades 7 and 8 numeracy block "mathematics, technology and science"; credits PDF "1 other
//    from science or technology"; facts-schools-contests.md rows 104-105 (Nova Scotia Virtual School Computer Programming 12
//    modules "Problem Solving in Computer Programming, Fundamentals of Programming, Applied Problem Solving, Project
//    Development"; "CodeHS: NSVS Computer Programming 12 (Java).").
//  - CEMC (facts-schools-contests.md rows 112-113, 115, 118, 122, 136-139, 160-161): BCC 9 to 20 November 2026, 45 minutes,
//    no coding needed; CCC Wednesday 17 February 2027, levels by skill, C, C++, Python and Java; through a school; free past
//    contests, last 10 years.
//  - facts-geo.md: America/Halifax UTC-4 winter, UTC-3 summer, back on 1 November 2026, forward 14 March 2027 (IANA tzdb
//    2026e); India ahead by 9 hours 30 minutes in winter and 8 hours 30 minutes in summer; area codes 902 and 782 (CNAC files
//    via the Internet Archive), shared with Prince Edward Island. Halifax is a regional municipality (StatCan CSD type, no
//    population printed).
// Our own calculations (equipment_page.py, the script printed on this page, and analysis.py, both run with python -I;
// outputs equipment_page.out.txt and analysis.out.txt in keyword-research-2026-09/ca/src-pilots/coding-and-ai-classes-in-
// halifax-nova-scotia/): 2,218 rows, 2,218 distinct ASSETID; ASSETSTAT In Service 2,195, Out of Service 13; ASSETCODE BBH 664,
// PYST 592, SWNG 349, CLIM 205, SPTY 125, OTHER 62, THP 59, SLID 51, OGE 46, TETO 31, MOD 30, blank 4; INSTYR filled on 842
// rows (1986 to 2022); in service: 1,356 with no install year, 839 with one, 712 rated confidence 1 or 2; medians among
// confidence 1 or 2: Climber 2007.5 (60), Spring Toy 2012 (41), Play Structure 2013 (274), Slide 2014 (19), Swing 2015 (149),
// Basketball Hoop 2018 (101), our Other group 2013 (68); ACCESSIBLE Y 228, N 378, blank 1,612 (all rows); material METL 1,733.
// India time conversions are ours. Rows are never summed into a published total.
// Lesson family: decoding short codes with a lookup table, then filtering by a data-quality column before taking a median.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  'import statistics',
  '',
  'NAMES = {"BBH": "Basketball Hoop", "PYST": "Play Structure", "SWNG": "Swing",',
  '         "CLIM": "Climber", "SPTY": "Spring Toy", "SLID": "Slide"}',
  '',
  'years = {}',
  'blank = 0',
  'with open("outdoor-recreation-equipment.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["ASSETSTAT"] != "INS":',
  '            continue',
  '        if row["INSTYR"] == "":',
  '            blank += 1',
  '            continue',
  '        if row["INSTYRCONF"] not in ("1", "2"):',
  '            continue',
  '        name = NAMES.get(row["ASSETCODE"], "Other")',
  '        years.setdefault(name, []).append(int(row["INSTYR"]))',
  '',
  'print("in service, no install year:", blank)',
  'for name, ys in sorted(years.items(), key=lambda p: statistics.median(p[1])):',
  '    print(name, len(ys), "median", statistics.median(ys), "oldest", min(ys))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'HALIFAX', label: 'Halifax', blurb: 'Live online coding and AI for Halifax students, with a Halifax play equipment data project, Atlantic time and Nova Scotia school context.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-halifax-nova-scotia',
  code: 'ahns',
  accent: '#122E7A',
  accentRationale: 'Halifax, Nova Scotia: a deep harbour navy, #122E7A, allocated for this row and at least 14 RGB units from the other Canada accents; contrast 11.67 on the paper #FBF8F2 and above 10 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Halifax',
    eyebrow: 'Halifax, Nova Scotia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Nova Scotia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Time zones', href: '/canada-time-zones-2026-online-class-times' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Halifax',
  title: 'Coding and AI Classes in Halifax, Nova Scotia | Live Online',
  description: 'Live online coding, Python and AI classes for Halifax, Nova Scotia students aged 6 to adult, on Atlantic time, with a Halifax play equipment data project.',
  ogDescription: 'Coding and AI for Halifax students, taught live online on Atlantic time, with a real Halifax Regional Municipality dataset to practise on.',
  twitterDescription: 'Halifax coding, Python and AI classes, live online on Atlantic time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Halifax Students',
    description: 'Level-matched live online coding for Halifax, Nova Scotia students from age 6 to adult: blocks, Python, AI and machine learning, and contest preparation, taught in English on Atlantic time.'
  },

  h1: 'Coding and AI classes in Halifax, Nova Scotia',
  capsuleQ: 'Who teaches coding and AI to Halifax students with a live teacher?',
  capsule: 'Modern Age Coders teaches coding, Python and AI live online to students in Halifax, Nova Scotia, from age 6 to adult. A student learns in a class group of 15 to 20 or with a private teacher. Younger children start with Python and AI for Kids, teens with Python for Teens, then AI and machine learning. Lessons run on Atlantic time and the first class is free.',
  lead: 'Halifax students have more computing in their school week than most parents remember from their own: Nova Scotia folds technology into the Grade 7 and 8 numeracy block and offers programming in high school, including a Java course through the Nova Scotia Virtual School. What a timetable seldom allows is a long stretch of hours with one teacher reading the student&rsquo;s own code. This page explains where Halifax students meet code at school, works through a project we built on the Halifax Regional Municipality&rsquo;s file of park play equipment, lists the contests a Halifax school can enter its students for, and shows how our evening and weekend classes line up with Atlantic time.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Halifax.',

  picks: {
    eyebrow: 'Course picks for Halifax',
    h2: 'Where most Halifax students begin',
    intro: 'Chosen by age and stage. The free first class checks the fit with the student before anything is booked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Block coding for the youngest: sequences, loops and events built into small games a child can show the family at the end of a lesson.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'The move to typed Python, with turtle drawings, quizzes and simple AI ideas, for children who find blocks too easy.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to files, functions and real data, including the Halifax equipment file used on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python where the student cleans the data and judges the model, rather than pressing a button.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding at school in Halifax',
      h2: 'Where a Halifax student meets computing in the Nova Scotia program',
      intro: 'Halifax schools follow the Nova Scotia Public School Program, set by the Department of Education and Early Childhood Development. We read the department&rsquo;s pages raw on 22 October 2026; the summaries are ours.',
      body: [
        { kind: 'table', caption: 'Computing and math checkpoints for a Halifax student, as published by the Nova Scotia education department (read 22 October 2026). Plain summaries are ours', head: ['Stage', 'What the province publishes', 'What it means at home'], rows: [
          ['Grades 7 and 8', 'Technology is taught inside the numeracy block, beside mathematics and science', 'Coding arrives as part of math and science time, not as its own subject'],
          ['Grade 8', 'Provincial literacy and mathematics assessment, main window 17 May to 8 June 2027; Grade 6 and 8 assessments now taken online on school devices', 'A screen-based test, so typing and on-screen problem solving matter'],
          ['Grade 10', 'Mathematics 10 provincial examination on 23 June 2027, worth a fifth of the course mark', 'The first exam where algebra fluency has a real weight'],
          ['Grades 10 to 12', 'One graduation credit must come from science or technology, and technology education courses are eligible', 'A programming course can fill a required slot'],
          ['Grade 12', 'Computer Programming 12 through the Nova Scotia Virtual School, in four modules, with course materials in Java on CodeHS', 'The most code-heavy school option on the public list']
        ] },
        { kind: 'p', text: 'Read top to bottom, the table shows a gap. Before Grade 12, programming in a Halifax school is mostly a thread woven through other subjects; the one course built around writing programs comes at the very end, and the virtual school delivers it in Java. A student who wants to arrive at Computer Programming 12 ready, or who wants Python for science fairs, data or AI before then, has to find that time somewhere. That is the time our classes fill.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The four CP12 modules', p: 'The Nova Scotia Virtual School lists Computer Programming 12 as Problem Solving in Computer Programming, Fundamentals of Programming, Applied Problem Solving and Project Development. Problem solving is named twice, which matches how we teach: plan first, type second.' },
          { h3: 'Java at school, Python with us', p: 'The virtual school course runs in Java. We teach Python first for most teens because the syntax gets out of the way, then show the same loops and functions in Java so a Grade 12 student is not meeting the ideas cold.' },
          { h3: 'Online tests from Grade 6', p: 'The department now has Grade 6 and Grade 8 students sit their provincial assessments on school devices instead of paper. Children who are used to reading a problem on screen and working it through calmly have one less thing to learn on the day.' }
        ] },
        { kind: 'callout', h3: 'Alongside school, never instead of it', p: 'Our classes sit beside a Halifax student&rsquo;s school courses. We do not grant Nova Scotia credits, set provincial assessments or mark school work. We are not connected with the Nova Scotia Department of Education and Early Childhood Development, the Nova Scotia Virtual School or any regional centre for education.' }
      ]
    },
    {
      id: 'equipment', tint: 'deep', eyebrow: 'Halifax data project',
      h2: 'How old is the play equipment in Halifax parks? A project on the municipality&rsquo;s own file',
      intro: 'Halifax Regional Municipality publishes an Outdoor Recreation Equipment file as open data: swings, slides, hoops and play structures, one row each. Our teen students download it and ask a plain question that turns out to need careful code. Every figure below is our count, not the municipality&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our count of the Halifax Regional Municipality Outdoor Recreation Equipment file, downloaded 22 October 2026 (2,218 rows). In-service rows only, with an install year rated confidence 1 or 2 by the file', head: ['Equipment (decoded from ASSETCODE)', 'Rows used', 'Median install year', 'Oldest year'], rows: [
          ['Climber', '60', '2007.5', '2000'],
          ['Spring Toy', '41', '2012', '1998'],
          ['Play Structure', '274', '2013', '1999'],
          ['Slide', '19', '2014', '1997'],
          ['Swing', '149', '2015', '1995'],
          ['Basketball Hoop', '101', '2018', '1994'],
          ['Other (our group: triple hoops, gym equipment, teeter totters, ramps and items coded OTHER)', '68', '2013', '1998']
        ] },
        { kind: 'p', text: 'Here is the script that prints the table. It needs only Python 3 and the downloaded CSV in the same folder; the equipment names come from the coded values the municipality publishes with the layer:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Decode the codes', p: 'The ASSETCODE column holds short codes such as PYST and SPTY. The layer&rsquo;s own metadata maps them to Play Structure and Spring Toy, so the first job is a small dictionary that turns codes into words a reader understands.' },
          { h3: '2. Keep what is in service', p: 'Of 2,218 rows, 2,195 carry the status In Service. The rest are out of service, pending, proposed or blank, and a question about equipment in parks today should leave them out.' },
          { h3: '3. Ask how sure the year is', p: 'Each install year has a partner column, INSTYRCONF, rating it from 1 (a measured value or known fact) to 5 (inaccurate). We keep ratings 1 and 2 only, which leaves 712 of the 839 in-service rows that have a year at all.' }
        ] },
        { kind: 'callout', h3: 'The number the script prints first', p: 'Before any median, the script reports that 1,356 in-service rows have no install year. That is most of the file. A student who publishes &ldquo;Halifax climbers date from about 2007&rdquo; without saying the median rests on 60 rows out of 205 climbers has told a smaller truth than it sounds. Saying how much of the data an answer stands on is the habit this project exists to build.' },
        { kind: 'p', text: 'Good next steps for a strong student: compare the ACCESSIBLE column (228 rows marked yes, 378 no, and 1,612 left blank across the whole file) by equipment type, then plot the equipment on a map with the X and Y columns. We use the file under the municipality&rsquo;s open licence, and its required wording is: Contains information licenced under the Open Government Licence - Halifax (<a class="cg-inline-link" href="https://data-hrm.hub.arcgis.com/pages/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://data-hrm.hub.arcgis.com/datasets/5dbc7a7c78c54dfbae7b53ac428fda90_0">dataset page</a>). Nothing here is endorsed by Halifax Regional Municipality.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Halifax',
      h2: 'Two Waterloo computing contests a Halifax school can enter',
      intro: 'The University of Waterloo&rsquo;s Centre for Education in Mathematics and Computing (CEMC) runs contests that schools across Canada order for their students, Nova Scotia schools included. Dates are CEMC&rsquo;s, read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Beaver Computing Challenge', p: 'For students in Grade 10 or below, in three levels. Its 2026 window runs from 9 to 20 November 2026, and CEMC says the questions only require familiarity with concepts in the mathematics curriculum, so no programming is needed. It lasts 45 minutes.' },
          { h3: 'Canadian Computing Competition', p: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027. Writers pick the Junior or Senior paper to suit their programming level, whatever grade they are in, and the accepted languages include Python and Java, which suits a Halifax student coming from either Python or the Java of CP12.' },
          { h3: 'Entry runs through a school', p: 'A student cannot sign up alone: CEMC&rsquo;s rule is that students take part through a school. If a Halifax school does not order a contest, CEMC suggests looking for another local school that will let the student join as a participant.' }
        ] },
        { kind: 'p', text: 'The Beaver challenge is the gentler door, and it rewards exactly what the equipment project trains: reading a rule carefully and applying it without guessing. For the CCC, the step from Junior to Senior is mostly about efficiency, and we work on it with practice problems we write ourselves. Ten years of past CEMC papers sit online at no cost and need no account; we send students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s archive</a> for real papers and never copy its questions into our lessons. Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> go further. Modern Age Coders has no link to CEMC or to the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Atlantic time, India time and the two clock changes this school year',
      intro: 'Halifax runs on Atlantic time and shifts it in spring and autumn, while India, home to our teachers, keeps one clock all year. The gap therefore moves by an hour in November and again in March.',
      body: [
        { kind: 'table', caption: 'Halifax against India time across the 2026 to 2027 school year. UTC offsets are from IANA tzdb release 2026e; we worked out the India columns', head: ['Dates in Halifax', 'Halifax offset', 'India is ahead by', 'A 4 to 7 pm weekday class in Halifax, in India', 'A 9 am to noon Saturday class in Halifax, in India'], rows: [
          ['Until 1 November 2026', 'UTC-3', '8 h 30 min', '12:30 to 3:30 am the following day', '5:30 to 8:30 pm'],
          ['Winter, 1 November 2026 to 14 March 2027', 'UTC-4', '9 h 30 min', '1:30 to 4:30 am the following day', '6:30 to 9:30 pm'],
          ['Spring onward, from 14 March 2027', 'UTC-3', '8 h 30 min', '12:30 to 3:30 am the following day', '5:30 to 8:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Weekend mornings suit both ends', p: 'A Saturday morning in Halifax is an Indian evening, a comfortable hour for teacher and student alike. Weekday after-school classes run in the Indian night, and our teachers work those hours by choice.' },
          { h3: 'Halifax phone numbers', p: 'Nova Scotia numbers use the 902 or 782 area codes, which Prince Edward Island shares. Enter the ten digits in the form; the +1 is already filled in.' },
          { h3: 'We write the time your way', p: 'Every class confirmation is written in Atlantic time first. Ahead of the November 2026 fall-back and the March 2027 spring-forward, each family gets its updated times from us in writing.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to Computer Programming 12 and beyond',
    intro: 'Ages and grades are a guide only. The free class finds the right rung.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and stories', p: 'Sequences, loops and events in a visual editor, with the child explaining each step aloud.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Typed Python', p: 'Variables, conditions and functions in short projects, plus a first look at how AI tools learn from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 10', h3: 'Python properly', p: 'Files, lists and dictionaries, the Halifax equipment file, and the Beaver challenge or a first CCC Junior.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'AI and Senior work', p: 'Machine learning on real data, and Java side by side with Python before Computer Programming 12.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write code, why should a Halifax teen learn it?',
    intro: 'Because a script can run perfectly and still answer the wrong question.',
    p1: 'Request the median install year of Halifax play structures from an AI assistant and you will get code that runs. It will probably not stop to ask whether out-of-service equipment belongs in the answer, or whether a year rated as a guess should count. Those choices change the result, and only someone who understands the data can make them well.',
    p2: 'So we teach thinking before typing: what is the question, which rows answer it, how sure is each value. As students get older they meet AI assistants too, within the age limits each tool sets, to check and explain their work, never to hand in output they cannot defend line by line.',
    closer: 'The aim is a student who can tell a correct answer from a confident one, which is a skill no tool supplies on the student&rsquo;s behalf.',
    blogAnchor: 'our essay on judging code you did not write yourself'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online classes work for Halifax families',
    intro: 'There is no commute across the harbour: a student in Dartmouth and one on the peninsula join the same lesson from home.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'Across the municipality', p: 'Halifax is one regional municipality, and families from Dartmouth, Bedford and the surrounding communities take part on the same Atlantic clock.' },
      { h3: 'Group or one to one', p: 'A group of fifteen to twenty students at the same stage, or a teacher of your own for a faster pace, contest work or a particular project.' },
      { h3: 'Planned in Nova Scotia grades', p: 'Teachers plan by Nova Scotia grade and know where the Grade 8 assessment and Mathematics 10 fall in the year. School assignments always remain the student&rsquo;s own work.' },
      { h3: 'What a student needs', p: 'A laptop or desktop with a microphone, a steady connection and a quiet corner. Tablets work for the youngest block coders; typed Python wants a keyboard.' },
      { h3: 'The first lesson is free', p: 'A full lesson, not a sales call. It ends with a suggested level, course and time, and no card details are asked for.' }
    ],
    spec: { title: 'No Halifax centre', p: 'Modern Age Coders has no office or classroom in Halifax and does not claim one. Every class is taught live online from India, in English.' }
  },

  fees: {
    h2: 'Fees for Halifax families',
    intro: 'Three options, each shown in the visitor&rsquo;s own currency.',
    first: 'A full live lesson at no cost, ending with a recommended level, course and class time.',
    group: 'The monthly fee for a group of fifteen to twenty students at one stage, eight live classes a month.',
    private: 'The monthly fee for one teacher with one student, at times you choose.',
    closer: 'A Halifax family pays what a family in any other province pays. Nothing is charged until after the free lesson, once a course and time are agreed; missed classes and holidays are set out on the pricing page.'
  },

  reviewsH2: 'Reviews families and students have left for us on Google',

  book: {
    h2: 'Book a free class for a Halifax student',
    intro: 'The trial lesson is pitched to the student: a looping animation for a seven-year-old, a Python quiz for an eleven-year-old, or the play equipment file for a teen who wants real data.',
    success: 'Thank you. The team will be in touch soon about a class for Halifax.'
  },

  faq: {
    h2: 'Halifax coding and AI questions',
    intro: 'What Halifax parents and students ask us most.',
    items: [
      { q: 'Are there coding classes in Halifax for kids?', a: 'There are, taught live over video. We have no Halifax building; children from age 6 log in from home, either in a class group of 15 to 20 or alone with a teacher.' },
      { q: 'What time are classes for Halifax students?', a: TIMING + ' Confirmations are always written in Atlantic time.' },
      { q: 'Do Halifax schools teach coding?', a: 'Some. Nova Scotia teaches technology inside the Grade 7 and 8 numeracy block, and Computer Programming 12 is offered through the Nova Scotia Virtual School, in Java. Dedicated programming time before Grade 12 is limited, which is the gap our classes fill.' },
      { q: 'Do your classes count toward a Nova Scotia graduation credit?', a: 'No. We do not grant Nova Scotia credits. Credits are earned through school courses; our classes run alongside them for skill and confidence.' },
      { q: 'Which language should a Halifax teen learn first, Python or Java?', a: 'Python first for most beginners, because it lets them think about the problem rather than the punctuation. Students heading for Computer Programming 12 then see the same ideas in Java before the course starts.' },
      { q: 'Can a Halifax student enter the Beaver Computing Challenge or the CCC?', a: 'Yes, through a school. CEMC lists the Beaver challenge for 9 to 20 November 2026 and the CCC for Wednesday 17 February 2027, and students cannot register on their own.' },
      { q: 'Is there AI for kids in Halifax, or only for teens?', a: 'Both. Children from about 9 learn what AI is and how it learns from examples in our AI literacy and Python for kids courses; machine learning with real data starts in the teen years.' },
      { q: 'Do you change class times when the clocks change in Halifax?', a: 'Yes. Halifax moves from UTC-3 to UTC-4 on 1 November 2026 and back on 14 March 2027, and we resend every family its class times in Atlantic time before each change.' },
      { q: 'Will a 902 or 782 number work in the form?', a: 'Yes. Enter the ten-digit Nova Scotia number without the leading 1; both area codes are accepted.' },
      { q: 'Where are the fees listed?', a: 'Scroll to the fees block: it gives the free trial, the group fee per month and the private fee per month, each in your own currency. Nobody is billed before the trial lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Halifax and Atlantic Canada families',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, or see the neighbouring province page, <a class="cg-inline-link" href="/coding-classes-in-newfoundland-and-labrador">coding classes in Newfoundland and Labrador</a>. Every Canadian clock this year is laid out on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>, and contest students can read the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Halifax and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-newfoundland-and-labrador', label: 'Newfoundland and Labrador' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver challenge' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-ahns .cg-hero h1 { font-weight: 680; letter-spacing: -0.012em; line-height: 1.08; }
.cg-root.cg-ahns .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ahns .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-ahns .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-ahns .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ahns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ahns #equipment code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-ahns .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-ahns .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Nova Scotia, read raw 22 October 2026 from the Department of Education and Early Childhood Development (plans.ednet.ns.ca and ednet.ns.ca, copies in ca/src/coding-classes-in-nova-scotia/): Grades 3, 6 and 8 provincial assessments; Grade 6 and 8 assessments online on school devices; Grade 8 main window 17 May to 8 June 2027; Mathematics 10 exam 23 June 2027, 20% of the final course mark; Grades 7 and 8 numeracy block includes technology; one graduation credit from science or technology; Nova Scotia Virtual School Computer Programming 12 modules and CodeHS Java (facts-schools-contests.md rows 104-105). CEMC 2026-27 BCC and CCC facts and the through-a-school rule. America/Halifax offsets and the 902/782 area codes from facts-geo.md.',
    localProject: 'Halifax Regional Municipality open data, Outdoor Recreation Equipment (Open Government Licence - Halifax), CSV downloaded with curl on 22 October 2026 and counted with our script equipment_page.py (python -I): 2,218 rows; 2,195 In Service; ASSETCODE decoded through the layer coded values; 1,356 in-service rows with no install year; 712 in-service rows with a year rated confidence 1 or 2; medians Climber 2007.5 (60 rows), Spring Toy 2012, Play Structure 2013 (274), Slide 2014, Swing 2015, Basketball Hoop 2018 (101); ACCESSIBLE 228 yes, 378 no, 1,612 blank. Labelled as ours. Lesson family: decoding codes with a lookup, then filtering by a data-quality column before a median.',
    requiredMentions: [
      'Spring Toy',
      'INSTYRCONF',
      'Open Government Licence - Halifax',
      '1,356 in-service rows have no install year',
      '902 or 782',
      'Ahead of the November 2026 fall-back and the March 2027 spring-forward',
      '712 of the 839 in-service rows',
      'median rests on 60 rows out of 205 climbers',
      'UTC-3 to UTC-4 on 1 November 2026',
      '1,612 left blank across the whole file'
    ],
    sources: [
      { claim: 'Halifax Regional Municipality open data: Outdoor Recreation Equipment dataset page.', url: 'https://data-hrm.hub.arcgis.com/datasets/5dbc7a7c78c54dfbae7b53ac428fda90_0' },
      { claim: 'Outdoor Recreation Equipment layer metadata: coded values for ASSETCODE, INSTYRCONF and ASSETSTAT.', url: 'https://services2.arcgis.com/11XBiaBYA9Ep0yNJ/arcgis/rest/services/OutdoorRecreationEquipment/FeatureServer/0?f=json' },
      { claim: 'Open Government Licence - Halifax: commercial use, attribution statement, non-endorsement.', url: 'https://data-hrm.hub.arcgis.com/pages/open-data-licence' },
      { claim: 'Nova Scotia provincial assessments and examinations: grades, online delivery, calendar, Mathematics 10 weighting.', url: 'https://plans.ednet.ns.ca/' },
      { claim: 'Nova Scotia Credits for Graduation Diploma: science or technology credit.', url: 'https://www.ednet.ns.ca/docs/creditsforgraduationdiplomaen.pdf' },
      { claim: 'Nova Scotia Virtual School: Computer Programming 12 modules and Java on CodeHS.', url: 'https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/' },
      { claim: 'CEMC: BCC and CCC 2026-27 dates, levels, languages, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Halifax offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Halifax population figure: StatCan was not reachable live, so none is printed.',
      'The hub record count of 2,285 for the equipment layer: our own download had 2,218 rows, and only our count is used.',
      'A Grade 6 assessment date: the calendar says TBD while the Grade 6 page describes an autumn window, so no date is given.',
      'That equipment with a blank ACCESSIBLE value is inaccessible: blank means not recorded in this file.',
      'That our classes earn or count toward a Nova Scotia credit: refused; we do not grant Nova Scotia credits.',
      'A total of all equipment by type summed into one figure for Halifax: not computed; counts are shown per type.',
      'CEMC fees: left out of the copy on purpose (currency-neutral page).',
      'Names of Halifax schools, regional centres results or private people: not used.',
      'Any affiliation with Halifax Regional Municipality, the Nova Scotia education department, the Nova Scotia Virtual School, CEMC or the University of Waterloo.'
    ]
  }
};
