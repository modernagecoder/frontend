'use strict';
// St. John's, Newfoundland (cg- city page, Canada cluster Wave 2, row 112). Spec docs/superpowers/specs/2026-10-22-ca-cluster-
// design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from coding-classes-in-newfoundland-and-
// labrador (the full Technology Education program, the math fork, the place-names project, island vs Labrador clocks): this
// page takes the province's computing courses in fresh words, a St. John's weather data project and the CCC to IOI path.
// Spine: a student in St. John's meeting computing through Technology Education, a year of daily weather at the city's airport
// station that teaches what a zero and a flag mean, the Canadian Computing Competition's route to the international olympiad,
// and the half-hour time zone.
// Sources, read raw on 22 and 23 October 2026:
//  - Newfoundland and Labrador Program of Studies 2025-2026 (saved by the NL writer in keyword-research-2026-09/ca/src-pilots/
//    coding-classes-in-newfoundland-and-labrador/, nl-pos-technology.main.txt, nl-gradreq.main.txt, nl-distance.main.txt,
//    nl-prma.main.txt, nl-pos-mathematics.main.txt; quotes re-grepped for this page): "The program at the intermediate level
//    consists of four 26 hour compulsory modules."; Computer Science 8 "plan, design and create block-based programs for
//    specific tasks", "control physical devices such as LEDs and motors", topic "Technology sector in Atlantic Canada";
//    Computer Science 1204 "introduces students to software and hardware topics in computer science", "build skills in both
//    block-based and text-based programming languages"; Communications Technology 3104 "Students acquire the skills and
//    knowledge to become proficient programmers.", units Data Manipulation, Web Services Technologies, Designing a Mobile
//    Application; "Students require 36 credits to graduate"; "Centre for Distance Learning and Innovation (CDLI)"; "Grades 3
//    and 6 PRMA"; Advanced Mathematics courses for programs "that require the study of calculus".
//  - Environment and Climate Change Canada, MSC GeoMet OGC API, collection climate-daily ("Climate - Daily Observations"),
//    station ST. JOHN'S INTL A, CLIMATE_IDENTIFIER 8403505, LOCAL_YEAR 2025, CSV downloaded with curl on 22 October 2026
//    (59,884 bytes, sha256 c51321d5...d80e). Licence: ECCC Data Services End-use Licence, Version 2.1.1 - August 2026
//    (eccc-msc.github.io/open-data/licence/readme_en/, msc-licence.html): "including for commercial purposes"; attribution
//    example "Data Source: Environment and Climate Change Canada"; the MSC GeoMet readme points to that End-use Licence.
//    Glossary (climate.weather.gc.ca/glossary_e.html, eccc-climate-glossary-flags.html): Trace "An unmeasurable or
//    insignificant quantity. A precipitation amount of less than 0.2 mm."; precipitation expressed "to the nearest 0.2 mm".
//    The climate.weather.gc.ca bulk CSV (saved but NOT used, renamed NOT-USED-...) sits under a different Data Licence
//    Agreement with redistribution limits, so only the GeoMet file is used. The City of St. John's publishes no open data
//    licence (opendata.tsv: FAILED), so this is national data about the city's airport station, not the city's own file.
//  - CEMC (facts-schools-contests.md rows 112, 115, 117-118, 122, 124, 131-133, 135): CCC "Wednesday, February 17, 2027";
//    Junior and Senior by skill; C, C++, Python 2, Python 3, Java; "Approximately 20 of the top official CCC Senior participants
//    from schools in Canada are invited to the CCO at the University of Waterloo each spring."; the CCO selects Canada's IOI
//    teams; "CCO participants must use C++."; IOI 2026 team "returned from Tashkent, Uzbekistan with four medals"; through a
//    school.
//  - facts-geo.md: America/St_Johns UTC-3:30 winter, UTC-2:30 summer, back on 1 November 2026, forward 14 March 2027 (IANA
//    tzdb 2026e); India ahead by 9 hours in winter and 8 hours in summer; area codes 709 and 879 (CNAC via the Internet Archive;
//    879 "Deferred Indefinitely" in the 2023 table, one St. John's exchange code in service by 2025-07-30). No populations.
// Our own calculations (weather_page.py, the script printed on this page, and analysis.out.txt; python -I; in keyword-research-
// 2026-09/ca/src-pilots/coding-and-ai-classes-in-st-johns-newfoundland/): 365 rows, 1 January to 31 December 2025; total
// precipitation measurable (0.2 mm or more) on 216 days, 0 with no flag on 96 days, 0 flagged T on 53 days; wettest day 24
// October 2025 at 43.4 mm; maximum temperature flagged M on 5 days; gust speed present on 341 days, 60 km/h or more on 146;
// warmest maximum 30.9 on 12 August 2025, coldest minimum -13.8 on 23 January 2025; snow recorded on 70 days. India time
// conversions are ours. Nothing is summed into a published total.
// Lesson family: flag columns that change the meaning of a value (zero vs trace vs missing), and denominators that shrink
// when data is missing.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'precip = Counter()',
  'missing_temp = 0',
  'gusty = 0',
  'gust_known = 0',
  '',
  'with open("geomet-climate-daily-2025.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        mm = float(row["TOTAL_PRECIPITATION"])',
  '        flag = row["TOTAL_PRECIPITATION_FLAG"]',
  '        if flag == "T":',
  '            precip["trace (under 0.2 mm)"] += 1',
  '        elif mm == 0:',
  '            precip["dry"] += 1',
  '        else:',
  '            precip["measurable"] += 1',
  '        if row["MAX_TEMPERATURE_FLAG"] == "M":',
  '            missing_temp += 1',
  '        if row["SPEED_MAX_GUST"] != "":',
  '            gust_known += 1',
  '            if float(row["SPEED_MAX_GUST"]) &gt;= 60:',
  '                gusty += 1',
  '',
  'print(dict(precip))',
  'print("days with no maximum temperature:", missing_temp)',
  'print("gusts of 60 km/h or more:", gusty, "of", gust_known, "days with a gust reading")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: "ST. JOHN'S", label: "St. John's, NL", blurb: "Live online coding and AI for St. John's students, with a year of St. John's weather data to analyse and Newfoundland time handled for you." },
  market: CA,
  slug: 'coding-and-ai-classes-in-st-johns-newfoundland',
  code: 'asjn',
  accent: '#2E572A',
  accentRationale: "St. John's, Newfoundland: a deep spruce green, #2E572A, allocated for this row and at least 14 RGB units from the other Canada accents; contrast 7.88 on the paper #FBF8F2 and above 6.7 on all three paper tints",
  pageType: 'city',
  place: {
    name: "St. John's",
    eyebrow: "St. John's, Newfoundland and Labrador",
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Newfoundland and Labrador' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-newfoundland-and-labrador', name: 'Newfoundland and Labrador' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Newfoundland and Labrador', href: '/coding-classes-in-newfoundland-and-labrador' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: "St. John's",
  title: "Coding and AI Classes in St. John's, Newfoundland | Live Online",
  description: "Live online coding, Python and AI classes for St. John's, Newfoundland students aged 6 to adult, on Newfoundland time, with a St. John's weather data project.",
  ogDescription: "Coding and AI for St. John's students, taught live online on Newfoundland time, with a year of the city's daily weather to turn into real Python.",
  twitterDescription: "St. John's coding, Python and AI classes, live online on Newfoundland time.",
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: "Live Online Coding, Python and AI Classes for St. John's Students",
    description: "Level-matched live online coding for St. John's, Newfoundland students from age 6 to adult: blocks, Python, AI and machine learning, and CCC preparation, taught in English on Newfoundland time."
  },

  h1: "Coding and AI classes in St. John's, Newfoundland",
  capsuleQ: "Who teaches coding and AI live to students in St. John's, Newfoundland?",
  capsule: "Modern Age Coders runs live online coding, Python and AI lessons for students in St. John's, Newfoundland, from age 6 to adult, either in a shared class of 15 to 20 or one to one. Younger learners tend to begin in Python and AI for Kids; teenagers in Python for Teens, moving on to machine learning. We teach on Newfoundland time; lesson one is free.",
  lead: "A student in St. John's can meet programming in a Grade 8 Technology Education module that ends in an innovation challenge, and can go much further in high school through Computer Science 1204 and Communications Technology 3104. Between those courses, programming may get little dedicated time on a timetable, and that is where a habit of regular coding either grows or fades. This page describes the computing a St. John's student meets in school, works through a year of daily weather from the city&rsquo;s airport station as a Python project, explains how the Canadian Computing Competition leads to the international olympiad, and sets out how our class times work on Newfoundland&rsquo;s half-hour clock.",
  wa: "Hello Modern Age Coders, I would like a free coding or AI class for a student in St. John's.",

  picks: {
    eyebrow: "Course picks for St. John's",
    h2: "Where St. John's students usually begin",
    intro: 'Chosen by age, then confirmed in the free first lesson. All run beside school; none grants a credit.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language for children who have done blocks: turtle drawings, games and the basic ideas behind AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first line to files and data, with the St. John&rsquo;s weather year as a practice set.' },
      { course: 'ai-ml-masterclass-teens', band: 'Levels II and III', note: 'Machine learning on real data in Python, with time spent on what the data cannot tell the model.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contest students', note: 'Practice for the CCC Junior and Senior papers using problems we write ourselves, in Python, Java or C++.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: "Coding at school in St. John's",
      h2: "The computing courses a St. John's student can take",
      intro: "St. John's schools follow the Newfoundland and Labrador Program of Studies, set by the province&rsquo;s Department of Education and Early Childhood Development. These are the 2025 to 2026 course descriptions as the department publishes them; the right-hand column is our reading.",
      body: [
        { kind: 'table', caption: 'Computing courses listed in the province&rsquo;s 2025 to 2026 Program of Studies, as we read it on 22 October 2026. Text in quotation marks is the department&rsquo;s own; we wrote the final column', head: ['Course', 'Where it sits', 'In the department&rsquo;s words', 'What it means for a student'], rows: [
          ['Computer Science 8', 'A Grade 8 Technology Education module; the intermediate program has four compulsory modules of 26 hours', 'Block-based programs written for set tasks, then used to drive LEDs and motors (our paraphrase)', 'A first taste of programming, with hardware, ending in an innovation challenge'],
          ['Computer Science 1204', 'Senior high, Technology Education', '&ldquo;introduces students to software and hardware topics in computer science&rdquo;', 'Block-based and text-based programming side by side'],
          ['Communications Technology 3104', 'Senior high, Technology Education', '&ldquo;Students acquire the skills and knowledge to become proficient programmers.&rdquo;', 'Data manipulation, web services, then a mobile application of their own']
        ] },
        { kind: 'p', text: 'The arc is sensible: blocks and devices in Grade 8, both kinds of programming in 1204, and real software in 3104, whose last unit is designing a mobile application. The gap is time. A single module in Grade 8 and then a wait until senior high can leave a keen St. John&rsquo;s student with few chances at school to keep writing code. Weekly classes across those years mean that by Communications Technology 3104 the student is building the app, not learning what a loop is.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Credits and graduation', p: 'The department says students require 36 credits to graduate. Computing courses are part of the Technology Education program, so they compete with everything else for a place in a student&rsquo;s timetable.' },
          { h3: 'Distance courses', p: 'The province&rsquo;s Centre for Distance Learning and Innovation (CDLI) delivers courses to schools, mostly in rural and remote communities. A St. John&rsquo;s family may hear of it through a school; our classes are separate from it.' },
          { h3: 'Math beside computing', p: 'The province splits senior math into Applied, Academic and Advanced streams, and the department ties the Advanced courses to further study involving calculus. Most university computing degrees sit on that side.' }
        ] },
        { kind: 'callout', h3: 'What we do not do', p: 'We teach alongside a St. John&rsquo;s student&rsquo;s school courses. We do not grant Newfoundland and Labrador credits, sit the provincial reading and mathematics assessments for Grades 3 and 6, or mark school work. We are not connected with the province&rsquo;s education department, CDLI or any school district.' }
      ]
    },
    {
      id: 'weather', tint: 'deep', eyebrow: "St. John's data project",
      h2: "How many days did it rain in St. John's in 2025? Count the flags first",
      intro: "Environment and Climate Change Canada publishes daily observations from the ST. JOHN&rsquo;S INTL A station through its open data service. A whole year fits in one small file, and the obvious count turns out to need one more column. The figures below are our counts for 2025.",
      body: [
        { kind: 'table', caption: "Our count of 2025 daily observations for ST. JOHN&rsquo;S INTL A (climate ID 8403505), downloaded 22 October 2026 from ECCC&rsquo;s climate-daily collection (365 rows)", head: ['What the day recorded', 'Days', 'How the file shows it'], rows: [
          ['Measurable precipitation, 0.2 mm or more', '216', 'TOTAL_PRECIPITATION above 0'],
          ['Trace: fell, but less than 0.2 mm', '53', 'TOTAL_PRECIPITATION of 0 with the flag T'],
          ['Dry', '96', 'TOTAL_PRECIPITATION of 0 with no flag'],
          ['Maximum temperature missing', '5', 'Blank value with the flag M'],
          ['Gust of 60 km/h or more', '146 of 341 days with a gust reading', 'SPEED_MAX_GUST; 24 days flagged M']
        ] },
        { kind: 'p', text: 'This is the script behind the table. It needs Python 3 and the downloaded CSV only, and the comparisons in it are the whole lesson:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A zero is not always dry', p: 'Count the zeros and you get 149 dry days. But ECCC&rsquo;s glossary defines a trace as a precipitation amount of less than 0.2 mm, and the file writes it as 0 with a T beside it. Read the flag and 53 of those zeros become days when something did fall.' },
          { h3: 'Missing is not zero either', p: 'Five days have no maximum temperature at all, flagged M. A script that turns a blank into 0 would invent five freezing afternoons, including two in July. The script counts them instead of guessing.' },
          { h3: 'Watch the denominator', p: 'Gust speed is missing on 24 days, so &ldquo;146 gusty days&rdquo; is out of 341, not 365. Saying which total a count comes from is half of reporting it honestly.' }
        ] },
        { kind: 'callout', h3: 'The sentence we want students to write', p: 'Not &ldquo;it rained on 216 days&rdquo;, because precipitation includes snow and the trace days are left out. A fair version: in 2025 the St. John&rsquo;s airport station recorded measurable precipitation on 216 days and a trace on 53 more. It is longer, and it is true.' },
        { kind: 'p', text: "Strong students go on to compare months (the station logged measurable precipitation on 6 days in August and 23 in each of January, November and December) or to chart the year&rsquo;s range, from -13.8 on 23 January to 30.9 on 12 August. Data Source: Environment and Climate Change Canada, used under the <a class=\"cg-inline-link\" href=\"https://eccc-msc.github.io/open-data/licence/readme_en/\">ECCC Data Services End-use Licence</a> through its <a class=\"cg-inline-link\" href=\"https://api.weather.gc.ca/collections/climate-daily\">climate-daily collection</a>. The station is the airport&rsquo;s, the data is national, and neither ECCC nor the City of St. John&rsquo;s endorses this page or our classes." }
      ]
    },
    {
      id: 'olympiad', tint: 'tint', eyebrow: "Contests from St. John's",
      h2: "From the CCC to the international olympiad: the computing contest path",
      intro: "CEMC, the contest centre at the University of Waterloo, runs the Canadian Computing Competition, and through it, Canada&rsquo;s route to the International Olympiad in Informatics. Facts are from CEMC&rsquo;s CCC pages, read on 22 October 2026.",
      body: [
        { kind: 'table', caption: 'The CCC pathway as CEMC describes it, 2026 to 2027', head: ['Step', 'Who', 'What CEMC says'], rows: [
          ['CCC Junior or Senior', 'Any student, choosing the level by skill', 'CEMC lists the 2027 CCC for Wednesday 17 February 2027; C, C++, Python and Java are allowed'],
          ['Canadian Computing Olympiad (CCO)', 'About 20 top official CCC Senior writers from schools in Canada', 'Invited to the University of Waterloo each spring; CCO participants must use C++'],
          ['International Olympiad in Informatics (IOI)', 'Canada&rsquo;s team', 'Chosen through the CCO; the 2026 team came home from Tashkent with four medals']
        ] },
        { kind: 'p', text: "The table explains a choice our older contest students make. Python is a fine language for the CCC Junior, and many St. John&rsquo;s students should stay with it. A student with real ambitions for the CCO, though, has to move to C++ at some point, and the earlier that change happens the less painful it is. We teach Python first and C++ when a student is ready, always with practice problems we write and label as our own, and we point students to <a class=\"cg-inline-link\" href=\"https://cemc.uwaterloo.ca/resources/past-contests\">CEMC&rsquo;s free past contests</a> for genuine papers." },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entered at school', p: 'A St. John&rsquo;s student writes the CCC through a school; CEMC does not register individuals. If the school does not take part, CEMC suggests finding another local school willing to host.' },
          { h3: 'Junior is a real start', p: 'CEMC describes the Junior level as suited to beginner to intermediate programmers. A student who has been coding weekly for a year is usually ready for it.' },
          { h3: 'Further reading', p: 'Our <a class="cg-inline-link" href="/canadian-computing-olympiad-cco-guide">Canadian Computing Olympiad guide</a> and <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> go deeper. We are not connected with CEMC or the University of Waterloo.' }
        ] }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: "Newfoundland time, India time and the half-hour difference",
      intro: "St. John&rsquo;s keeps Newfoundland time, half an hour ahead of Atlantic time, and changes it twice a year. India&rsquo;s clock stays fixed, which makes the gap a tidy whole number of hours.",
      body: [
        { kind: 'table', caption: "St. John&rsquo;s against India time across 2026 to 2027. UTC offsets from IANA tzdb 2026e; the conversions are ours", head: ['Dates in St. John&rsquo;s', 'Offset', 'India ahead by', '4 to 7 pm weekday class, India time', '9 am to noon Saturday class, India time'], rows: [
          ['Now, until clocks go back on 1 November 2026', 'UTC-2:30', '8 hours', 'Midnight to 3:00 am, next day', '5:00 to 8:00 pm'],
          ['Winter: 1 November 2026 to 14 March 2027', 'UTC-3:30', '9 hours', '1:00 to 4:00 am, next day', '6:00 to 9:00 pm'],
          ['Spring and summer, from 14 March 2027', 'UTC-2:30', '8 hours', 'Midnight to 3:00 am, next day', '5:00 to 8:00 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Whole hours, for once', p: 'India is five and a half hours ahead of UTC and Newfoundland three and a half behind in winter, so the half hours cancel. St. John&rsquo;s is one of the few places in Canada where our teachers&rsquo; clock differs by a round number.' },
          { h3: 'Two changes, two reminders', p: 'Newfoundland falls back on 1 November 2026 and springs forward on 14 March 2027. Ahead of each, we resend every family its class times in Newfoundland time.' },
          { h3: '709 and 879 numbers', p: 'Newfoundland and Labrador numbers use 709, with 879 as an overlay. The form takes the ten digits; +1 is already set.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to Communications Technology 3104 and the CCC',
    intro: 'Ages are only a guide. The free lesson places each student on the right step.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences, loops and simple events in a visual editor, explained aloud before they run.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Typed Python', p: 'Conditions, functions and small games, plus a careful first look at how AI learns.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 8 to 10', h3: 'Beyond the module', p: 'Python with files and the weather year, and a first CCC Junior for students who like a challenge.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Levels I to III', h3: 'AI and serious contests', p: 'Machine learning on real data, and Senior CCC work moving towards C++.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: "Why should a St. John's teen learn to code if AI writes the code?",
    intro: 'Because the program is the easy part; knowing what the numbers mean is not.',
    p1: "Ask an AI assistant how many dry days St. John&rsquo;s had in 2025 and it may well count the zeros and report 149. The code would run perfectly and the answer would be wrong by 53 days, because the meaning sits in a flag column the assistant was never told about. Finding that takes a person who reads the documentation and checks the result.",
    p2: 'That is the habit we teach: think the problem through, write the code yourself, then test the answer against what the data really says. Students use AI tools as they get older, within each tool&rsquo;s age rules, to explain and review their thinking, not to replace it.',
    closer: 'Communications Technology 3104 asks students to become proficient programmers; proficiency includes knowing when a correct-looking result is not correct.',
    blogAnchor: 'why we still teach students to write the code themselves'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: "How our classes reach St. John's",
    intro: 'Online and live, with the teacher watching the student&rsquo;s screen, so a student anywhere on the Avalon has the same lesson as one downtown.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'Shared class or private', p: 'Learn in a class of 15 to 20 at one level, or with a private teacher for faster progress or C++ contest work.' },
      { h3: 'Newfoundland grades and levels', p: 'Teachers plan by grade and by senior high level, and know where Computer Science 1204 and Communications Technology 3104 fit. School work stays the student&rsquo;s own.' },
      { h3: 'Beyond the city', p: 'Students in Mount Pearl, Conception Bay South and further across the province join the same classes on the same Newfoundland clock.' },
      { h3: 'What to have', p: 'A laptop or desktop with sound and a dependable connection. Young block coders can use a tablet; Python needs a keyboard.' },
      { h3: 'The free lesson', p: 'A complete class that finishes with a recommended course, level and time, with no payment details asked.' }
    ],
    spec: { title: "No St. John's office", p: "Modern Age Coders has no premises in St. John's and claims none. All teaching is live and online, from India, in English." }
  },

  fees: {
    h2: "Fees for St. John's families",
    intro: 'Three options, shown in your own currency.',
    first: 'One full live lesson free, ending with a recommended course and time.',
    group: 'The monthly fee for a shared class of 15 to 20 students at one stage.',
    private: 'The monthly fee for one-to-one teaching at hours that suit you.',
    closer: "St. John's families pay the same monthly fee as everyone else in Canada. Nothing is billed before the free lesson; the pricing page explains holidays and missed classes."
  },

  reviewsH2: 'Google reviews from families and students we teach',

  book: {
    h2: "Book a free lesson for a St. John's student",
    intro: 'Tell us the age and grade. A six-year-old might animate a puffin, a Grade 7 student build a Python quiz, and a Level II student take on the weather year.',
    success: "Thank you. The team will be in touch soon about a class for St. John's."
  },

  faq: {
    h2: "St. John's coding and AI questions",
    intro: "What St. John's families ask us most.",
    items: [
      { q: "Are there coding classes for kids in St. John's?", a: "Yes, taught live online rather than in a local centre. Children from age 6 join from home, in a shared class of 15 to 20 or one to one." },
      { q: "What computing do St. John's schools teach?", a: 'Newfoundland and Labrador teaches Computer Science 8 as a Grade 8 Technology Education module, then offers Computer Science 1204 and Communications Technology 3104 in senior high. Which of these a student can take depends on the school.' },
      { q: 'Do your classes count for a Newfoundland and Labrador credit?', a: 'No. We do not grant provincial credits. Credits come from school courses; our lessons support them from outside.' },
      { q: "What time are classes for St. John's?", a: TIMING + ' Every time is confirmed in Newfoundland time.' },
      { q: 'Why is the time difference to India a whole number of hours?', a: 'Because both clocks sit on a half hour. In winter St. John\'s is UTC-3:30 and India UTC+5:30, so India is 9 hours ahead; in summer the gap is 8 hours.' },
      { q: 'Can a student in St. John\'s write the CCC?', a: 'Yes, through a school, since CEMC does not register individuals. CEMC lists the 2027 CCC for Wednesday 17 February 2027.' },
      { q: 'Which language should a contest student learn?', a: 'Python for the CCC Junior and most of the Senior. CEMC requires C++ at the Canadian Computing Olympiad, so students aiming that high should add C++ in time.' },
      { q: 'Do younger children learn about AI too?', a: 'Yes, at their level. Children from about 9 learn what AI is and where it goes wrong; building models with real data comes in the teen years.' },
      { q: 'Will a 709 number work in the form?', a: 'Yes. Numbers with 709 or 879 work; enter the ten digits without the leading 1.' },
      { q: 'How do I see the fees?', a: 'The fees block on this page lists the free lesson, the monthly class fee and the monthly private fee in your own currency. You pay nothing before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Newfoundland and Labrador',
    h2: "Related pages for St. John's students",
    html: 'For the whole province see <a class="cg-inline-link" href="/coding-classes-in-newfoundland-and-labrador">coding classes in Newfoundland and Labrador</a>, or start at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Contest students can read <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> and the <a class="cg-inline-link" href="/canadian-computing-olympiad-cco-guide">CCO guide</a>, and the clocks of every province are on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: "St. John's and Canada",
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-newfoundland-and-labrador', label: 'Newfoundland and Labrador' },
    { href: '/canadian-computing-olympiad-cco-guide', label: 'CCO guide' },
    { href: '/ccc-junior-guide', label: 'CCC Junior' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-asjn .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-asjn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-asjn .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-asjn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-asjn .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-asjn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asjn #weather code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-asjn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-asjn .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Newfoundland and Labrador Program of Studies 2025-2026 (raw copies saved by the NL writer, re-grepped 23 October 2026): Computer Science 8 (four 26-hour intermediate modules; block-based programs; LEDs and motors), Computer Science 1204, Communications Technology 3104 (units including Designing a Mobile Application), 36 credits to graduate, CDLI, Grades 3 and 6 PRMA, Advanced math for programs that require calculus. CEMC CCC, CCO and IOI facts and the through-a-school rule. America/St_Johns offsets and the 709/879 area codes from facts-geo.md.',
    localProject: "Environment and Climate Change Canada, MSC GeoMet climate-daily collection, ST. JOHN'S INTL A (climate ID 8403505), 2025 daily rows (ECCC Data Services End-use Licence v2.1.1), CSV downloaded with curl on 22 October 2026 and counted with our script weather_page.py (python -I): measurable precipitation 216 days, trace 53, dry 96; maximum temperature missing 5 days; gusts of 60 km/h or more on 146 of 341 days with a reading. National data about the city's airport station (the City publishes no open data licence). Labelled as ours. Lesson family: flags that change a value's meaning, and shrinking denominators.",
    requiredMentions: [
      'climate ID 8403505',
      'invent five freezing afternoons',
      '53 of those zeros become days when something did fall',
      '146 of 341 days with a gust reading',
      'measurable precipitation on 216 days and a trace on 53 more',
      'the intermediate program has four compulsory modules of 26 hours',
      'the student is building the app, not learning what a loop is',
      'the earlier that change happens the less painful it is',
      'the half hours cancel',
      '709, with 879 as an overlay'
    ],
    sources: [
      { claim: 'Newfoundland and Labrador Program of Studies: Technology Education course descriptions.', url: 'https://www.gov.nl.ca/education/k12/curriculum/' },
      { claim: 'ECCC MSC GeoMet: climate-daily collection (Climate - Daily Observations).', url: 'https://api.weather.gc.ca/collections/climate-daily' },
      { claim: 'ECCC Data Services End-use Licence v2.1.1: commercial use, attribution.', url: 'https://eccc-msc.github.io/open-data/licence/readme_en/' },
      { claim: 'ECCC climate glossary: definition of Trace (under 0.2 mm).', url: 'https://climate.weather.gc.ca/glossary_e.html' },
      { claim: 'CEMC Canadian Computing Competition: 2027 date, languages, CCO invitations and C++ rule.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC: Team Canada IOI 2026 result.', url: 'https://cemc.uwaterloo.ca/team-canada-brought-back-four-medals-ioi-2026' },
      { claim: 'IANA tzdb northamerica: America/St_Johns offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      "That this is the City of St. John's own open data: refused; the City publishes no open data licence, so national ECCC data for the airport station is used and labelled so.",
      'The climate.weather.gc.ca bulk CSV: not used, because its Data Licence Agreement limits redistribution; the GeoMet copy under the End-use Licence is used instead.',
      "That it rained on 216 days in St. John's: refused; precipitation includes snow and the 53 trace days are counted separately.",
      'The strongest gust of 2025 and any storm framing: left out (no disaster content).',
      "Any St. John's population figure: StatCan was not reachable live.",
      'That our classes earn or count toward a Newfoundland and Labrador credit: refused; we do not grant provincial credits.',
      'CEMC fees and the names of IOI team members: left out on purpose.',
      "Names of St. John's schools or private people: not used.",
      'Any affiliation with ECCC, the City of St. John\'s, the Newfoundland and Labrador education department, CDLI, CEMC or the University of Waterloo.'
    ]
  }
};
