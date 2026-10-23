'use strict';
// Guelph, Ontario (cg- city page, Canada cluster Wave 2, row 127: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a data thread through Ontario school for a Guelph teen (Grade 8 math codes data analysis, MTH1W coding with
// algebra, ICD2O's three strands, the four ICS strands including computers in society); CEMC's free practice (Courseware,
// Problem of the Week) and the CCC Junior level; the AI tool age rules; and a time-series forecasting project on the City of
// Guelph's monthly green bin (organic waste) volumes. No claims about local schools.
// Sources, read raw on 22 October 2026:
//  - Ontario DCP API (facts-schools-contests.md, ca/src/ontario/): Grade 8 C3.1 "including code that involves the analysis of
//    data in order to inform and communicate decisions"; Grade 8 C3.2 "read and alter existing code involving the analysis of
//    data in order to inform and communicate decisions"; MTH1W C2.1 "use coding to demonstrate an understanding of algebraic
//    concepts including variables, parameters, equations, and inequalities"; ICD2O strands "Computational Thinking and Making
//    Connections", "Hardware, Software, and Innovations" and "Programming"; current computer studies list has no ICS2O. 2008
//    PDF: "In each course, the first strand is" A. Programming Concepts and Skills, "and the second is" B. Software Development;
//    "The fourth strand (strand D) deals with the role of computers in society"; "The Grade 10 course is organized in three
//    strands" (ICS2O, 2008); ICS4U prerequisite ICS3U.
//  - CEMC (ca/src/cemc/): Courseware "Covering topics from Grades 4 to12 mathematics and computer science" (sic), "No
//    registration is required to access these resources.", "there is no certificate or other form of credential awarded";
//    Problem of the Week "e-mailed to educators for use with their students from Grades 3 to 12", "New problems are sent every
//    Thursday, and their solutions are sent one week later."; CCC "Junior level - any participant with beginner to intermediate
//    programming skills."; "Wednesday, February 17, 2027"; "all students must participate through their school."
//  - OpenAI Terms of Use, effective January 1, 2026: "You must be at least 13 years old or the minimum age required in your
//    country to consent to use the Services"; "If you are under 18 you must have your parent or legal guardian's permission to
//    use the Services." Anthropic Consumer Terms, Oct 8, 2025: "You must be at least 18 years old". CCC Online Grader rules:
//    "generative AI such as CoPilot or ChatGPT"; "AI-based tools within an IDE cannot be used."
//  - facts-geo.md: Guelph CSD in the Guelph CMA; area codes 226/382/519/548 (south-western Ontario overlay);
//    America/Toronto, UTC-4 until 1 November 2026, UTC-5 to 14 March 2027. No populations used.
//  - City of Guelph open data (src-pilots/ai-and-python-classes-for-teens-in-guelph/): item ca6f0863d68247a88b77cbce90e6bae2
//    "City of Guelph Total Organic Waste Volume by Month 2012_2019", owner David.Messer_cityofguelph, licenseInfo linking
//    "Guelph Open Data License"; snippet "Total volume of organic waste collected through the City of Guelph's green bin program
//    from 2012-2019 by month."; description: data "does not include organic waste collected in Waterloo Region and processed at
//    the Guelph Waste Resource Innovation Centre". Licence: GuelphGIS Hub Page item 4430c79729cf47968ffde39ed58771d4 "Open Data
//    License" (licence-page.txt): "Open Data Licence Version 2.0"; "based on version 2.0 of the Open Government Licence"
//    (Canada); "grants you a worldwide, royalty-free, perpetual, non-exclusive licence to use the Information including for
//    commercial purposes"; attribution statement names the Open Government Licence for the City of Guelph; non-endorsement.
//    data.open.guelph.ca failed TLS from this machine and was not bypassed; the licence was read from the City's hub page item.
// Our own calculations (guelph_forecast.py run live with python -I, guelph_forecast.out.txt; guelph_explore.out.txt): 96 rows,
// 2012 to 2019; Year filled only on the 8 January rows; month labels typed 16 ways (e.g. "Feb ", "April", "Sept ", "Aug" and
// "Aug "); forecasting the 12 months of 2019: flat 2018 monthly average misses by 98.2 on average, same month in 2018 by 38.5,
// mean of the same month over 2013 to 2018 by 51.4 (units as published, not stated by the City); February has the lowest total
// in every year 2013 to 2019, but the lowest per day only in 2014, 2015 and 2019; January 2012 74.33 against February 2012
// 256.67 (the programme's first year); largest 2019 misses for the same-month model: April +81.5, August -73.3.
// No annual totals are formed from the monthly rows. Lesson family: time-series forecasting, seasonal naive baseline,
// cleaning spreadsheet-style tables, feature engineering (per-day rates).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, urllib.request',
  '',
  'URL = ("https://services5.arcgis.com/k3dd78JyG9GFoZHG/arcgis/rest/services/"',
  '       "CoG_Org_Waste_Month_Vol_2012_2019/FeatureServer/0/query"',
  '       "?where=1%3D1&outFields=*&orderByFields=ObjectId&f=json")',
  'rows = [f["attributes"] for f in json.load(urllib.request.urlopen(URL))["features"]]',
  '',
  '# The year is filled in only on each January row, and month names are typed',
  '# inconsistently ("Feb ", "April", "Sept "), so clean both before anything else.',
  'volume, year = {}, None',
  'for r in rows:',
  '    year = r["Year"] or year',
  '    volume[(year, r["Month"].strip()[:3].title())] = r["Volume"]',
  '',
  'MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",',
  '          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]',
  'print(len(rows), "rows,", len(volume), "year-month cells,",',
  '      min(y for y, m in volume), "to", max(y for y, m in volume))',
  '',
  'def miss(guess):',
  '    return round(sum(abs(guess(m) - volume[(2019, m)]) for m in MONTHS) / 12, 1)',
  '',
  'last_year = sum(volume[(2018, m)] for m in MONTHS) / 12',
  'print("flat 2018 monthly average:", miss(lambda m: last_year))',
  'print("same month in 2018:", miss(lambda m: volume[(2018, m)]))',
  'print("same month, mean of 2013-2018:",',
  '      miss(lambda m: sum(volume[(y, m)] for y in range(2013, 2019)) / 6))',
  'lowest = [min(MONTHS, key=lambda m: volume[(y, m)]) for y in range(2012, 2020)]',
  'print("lowest month each year, 2012-2019:", lowest)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'GUELPH', label: 'Guelph', blurb: 'Python and AI for Guelph teenagers: Ontario coding with data from Grade 8 to ICS4U, CEMC free practice, AI age rules and a forecast built on City of Guelph green bin data.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-guelph',
  code: 'apyg',
  accent: '#6B6530',
  accentRationale: 'Guelph: a deep olive, #6B6530, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 5.61 on the paper #FBF8F2, 5.28 and 4.83 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Guelph',
    eyebrow: 'Guelph, Ontario',
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
  routeLabel: 'Guelph',
  title: 'AI and Python Classes for Teens in Guelph, ON | Live Online',
  description: 'Live online Python and AI for Guelph teens aged 13 to 18: Ontario coding from Grade 8 data to ICS4U, CEMC free practice, AI age rules and a green bin forecast.',
  ogDescription: 'How Ontario asks a Guelph teen to code with data from Grade 8 on, what CEMC offers free, which AI tools a teenager may use, and a forecast built on City of Guelph green bin records.',
  twitterDescription: 'Python and AI for Guelph teens, live online, with a forecasting project on City of Guelph green bin volumes.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Guelph, Ontario',
    description: 'Python, data, machine learning and CCC preparation for Guelph students aged 13 to 18, taught live online in a group or one to one, beside Ontario Grade 8 math, MTH1W, ICD2O, ICS3U and ICS4U.'
  },

  h1: 'AI and Python classes for teens in Guelph',
  capsuleQ: 'Where can a Guelph teenager learn Python, data and AI with a live teacher?',
  capsule: 'Modern Age Coders teaches Python and AI to Guelph students between 13 and 18 in live online classes, in groups of fifteen to twenty or one to one. The usual start is Python for Teens; after that, students choose AI and Machine Learning for Teens, CCC preparation, or the Ontario Computer Science Companion beside ICS3U and ICS4U. Every class runs on Eastern time, and the first is free.',
  lead: 'In Ontario, data arrives in a student&rsquo;s coding before most families notice. The Grade 8 math curriculum already asks for code that analyses data, Grade 9 math pairs code with algebra, and the senior computer science courses add software design and the place of computers in society. For a Guelph teenager that is a good thread to pull on, because the most useful skill in modern AI is not writing a prompt but working out what a column of numbers can and cannot tell you. This page quotes what the ministry asks at each stage, lists what CEMC offers free, sets out which AI tools a 13 to 17 year old may use under each company&rsquo;s terms, and walks through a forecasting project on the City of Guelph&rsquo;s own green bin records.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Guelph, Ontario.',

  picks: {
    eyebrow: 'Course picks for Guelph teens',
    h2: 'Four courses matched to an Ontario student in Guelph',
    intro: 'One builds the language, one the models, two sit beside school and contests. The free class decides the starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grade 8 onward', note: 'Python properly, through functions, dictionaries and files, so that cleaning a messy public table like Guelph&rsquo;s green bin file becomes routine.' },
      { course: 'ai-ml-masterclass-teens', band: 'After Python', note: 'Forecasting, classification and clustering, always tested against a simple baseline first, as the green bin project on this page is.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contest year', note: 'Problems we write in the CCC format, from Junior loops to Senior algorithms, sat under the real three-hour limit.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'With ICS3U or ICS4U', note: 'Concept help, extra practice and project feedback while the school course runs. The school grants the credit, never us.' }
    ]
  },

  sections: [
    {
      id: 'thread', tint: '', eyebrow: 'Ontario, Grade 8 to 12',
      h2: 'The data thread in Ontario coding, from Grade 8 math to ICS4U',
      intro: 'Quoted text: the Ontario curriculum service and the 2008 computer studies document, both checked on 22 October 2026. Right-hand notes: ours.',
      body: [
        { kind: 'table', caption: 'Coding and data in Ontario courses a Guelph teen meets (Ontario Ministry of Education curriculum API and 2008 computer studies document, checked 22 October 2026)', head: ['Grade and course', 'Ministry wording', 'Our note'], rows: [
          ['Grade 8 math, C3.1', 'Students code &ldquo;including code that involves the analysis of data in order to inform and communicate decisions&rdquo;', 'A 13 year old is already expected to use code to reason about data'],
          ['Grade 8 math, C3.2', 'Students &ldquo;read and alter existing code involving the analysis of data in order to inform and communicate decisions&rdquo;', 'Reading someone else&rsquo;s analysis and changing it, a real-world skill'],
          ['Grade 9, MTH1W, C2.1', 'Students &ldquo;use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities&rdquo;', 'Variables in code and variables in algebra, taught as one idea'],
          ['Grade 10, ICD2O (2023)', 'Strands titled &ldquo;Computational Thinking and Making Connections&rdquo;, &ldquo;Hardware, Software, and Innovations&rdquo; and &ldquo;Programming&rdquo;', 'Broad by design: thinking, technology and code in one course'],
          ['Grades 11 and 12, ICS3U and ICS4U (2008)', 'Each course opens with Programming Concepts and Skills and Software Development; &ldquo;The fourth strand (strand D) deals with the role of computers in society&rdquo;', 'Building software and asking what it does to people, both on the syllabus']
        ] },
        { kind: 'p', text: 'Notice how often the word data appears before Grade 11. The Grade 8 expectations do not ask students to analyse data by hand and then learn to code separately; they ask for code that analyses data to support a decision. That is exactly the shape of a small machine learning task, and it is why our Guelph students meet real public datasets early. There is also a small curriculum change families sometimes ask about: the 2008 document still describes a Grade 10 course, ICS2O, that is &ldquo;organized in three strands&rdquo;, but the current ministry list of computer studies courses does not include ICS2O and does include ICD2O. We state both facts and leave the history to the ministry; the practical point is that ICD2O is the Grade 10 course on today&rsquo;s list.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 8: real files early', p: 'We give Grade 8 students a small real table, ask a question it can answer, and have them write the code that answers it. The decision part matters: what would you do differently because of this number?' },
          { h3: 'Grades 9 and 10: algebra meets code', p: 'MTH1W&rsquo;s link between code variables and algebra is a gift. Students who see that a function in Python and a function in math are the same idea find both subjects easier.' },
          { h3: 'Grades 11 and 12: the society strand', p: 'Strand D asks about computers in society. AI gives that question plenty to work with, and our older students write short, evidence-based notes on what a model they built could get wrong.' }
        ] },
        { kind: 'callout', h3: 'Credits are the school&rsquo;s', p: 'Our lessons sit beside the school day, and we do not grant Ontario credits: ICD2O, ICS3U and ICS4U are earned only at school. Modern Age Coders has no connection with the Ontario Ministry of Education or any Guelph-area school board.' }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Free from CEMC',
      h2: 'What CEMC gives a Guelph teen for free, and what it does not',
      intro: 'CEMC, part of the University of Waterloo, publishes practice material and runs the CCC. The quotes below are CEMC&rsquo;s own, read on 22 October 2026; the right-hand column is our advice.',
      body: [
        { kind: 'table', caption: 'Free CEMC material and the CCC Junior level (CEMC pages, read 22 October 2026)', head: ['Resource', 'In CEMC&rsquo;s words', 'How a teen can use it'], rows: [
          ['Courseware', '&ldquo;Covering topics from Grades 4 to12 mathematics and computer science&rdquo;; &ldquo;No registration is required to access these resources.&rdquo;', 'Self-paced lessons for gaps; CEMC adds that &ldquo;there is no certificate or other form of credential awarded&rdquo;'],
          ['Problem of the Week', 'Problems &ldquo;e-mailed to educators for use with their students from Grades 3 to 12&rdquo;; &ldquo;New problems are sent every Thursday, and their solutions are sent one week later.&rdquo;', 'A weekly reasoning habit, best done before looking at the solution'],
          ['CCC Junior level', '&ldquo;Junior level - any participant with beginner to intermediate programming skills.&rdquo;', 'The right first paper for most Guelph students who already code'],
          ['CCC date', 'Wednesday 17 February 2027 for North and South America', 'A teacher orders the paper, since in CEMC&rsquo;s words &ldquo;all students must participate through their school.&rdquo;']
        ] },
        { kind: 'p', text: 'Free material is valuable, and we point students to it. What it cannot do is notice the specific mistake a particular student keeps making. A student working alone through Courseware can finish a unit while still misunderstanding why a loop runs one time too many. In a live class the teacher sees the error the first time it appears, asks the student to predict the output, and lets them find it. That difference, between material and feedback, is the reason most families come to us, and it is why we encourage students to keep using CEMC&rsquo;s resources alongside our classes rather than instead of them.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Our problems in class', p: 'We never reproduce CEMC problems or solutions. Students read CEMC&rsquo;s archive and Problem of the Week on their own; class time goes to problems we write for the same skills.' },
          { h3: 'Junior first, usually', p: 'Most first-time writers from Guelph should sit Junior. Those who find Junior questions 1 to 4 routine in practice move up to Senior the following year.' },
          { h3: 'Read further', p: 'The <a class="cg-inline-link" href="/cemc-free-resources-guide">CEMC free resources guide</a> lists everything CEMC offers, and the <a class="cg-inline-link" href="/ccc-past-problems-practice-guide">CCC past problems guide</a> explains how to use old papers well.' }
        ] },
        { kind: 'callout', h3: 'Not part of CEMC', p: 'Modern Age Coders is independent of CEMC and the University of Waterloo and is not endorsed by either. Waterloo contests are entered through a school, never through us.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'City of Guelph data project',
      h2: 'Can a simple model forecast Guelph&rsquo;s green bin volume a year ahead?',
      intro: 'The City of Guelph publishes the monthly volume of organic waste collected through its green bin program from 2012 to 2019. Our students clean the table, then forecast every month of 2019 from earlier years and check how far off each forecast is. All results here are our own calculations; the volumes are the City&rsquo;s, in the units it published, which the dataset does not state.',
      body: [
        { kind: 'table', caption: 'Our forecasts of the 12 months of 2019 on the City of Guelph Total Organic Waste Volume by Month 2012_2019 file (96 monthly rows fetched 22 October 2026)', head: ['Forecast method', 'How it guesses a 2019 month', 'Average miss per month'], rows: [
          ['Flat average', 'The 2018 monthly average, for every month', '98.2'],
          ['Same month last year', 'The value for the same month in 2018', '38.5'],
          ['Same month, six-year mean', 'The average of that month from 2013 to 2018', '51.4']
        ] },
        { kind: 'p', text: 'The code below uses nothing beyond Python&rsquo;s standard library, and most of it is cleaning: the year appears only on each January row, so the code carries it forward, and the month names arrive in several spellings with stray spaces, so the code trims and shortens them. Only then does it forecast. Run on 22 October 2026, it printed the three averages shown above:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean like a spreadsheet', p: 'The table looks like a copied spreadsheet: a year written once, then blanks, and month labels typed sixteen different ways, such as &ldquo;Aug&rdquo; and &ldquo;Aug &rdquo; with a trailing space. Students who skip this step get twelve months that do not line up.' },
          { h3: '2. The seasonal naive baseline', p: 'Guessing that a month will look like the same month last year is called a seasonal naive forecast, and it is the baseline every serious forecaster tries first. Here it beats both alternatives: an average miss of 38.5 against 51.4 and 98.2.' },
          { h3: '3. Why the long average loses', p: 'A six-year mean should be steadier, yet it does worse. In 10 of the 12 months the 2018 value is higher than the 2013 value, so the older years drag the mean down. Recent data wins when a series is trending, an idea students test by trying three-year and two-year means.' }
        ] },
        { kind: 'callout', h3: 'February and the calendar', p: 'February has the lowest total in every year from 2013 to 2019. That looks like a pattern in behaviour until a student divides by the number of days: per day, February is the lowest month only in 2014, 2015 and 2019. Most of the dip is simply a shorter month. Turning totals into per-day rates is a first taste of feature engineering, choosing what to measure so that a model learns the right thing.' },
        { kind: 'p', text: 'A few more honest details. The program began in 2012, and January 2012 shows 74.33 against 256.67 in February, so the first months describe a launch rather than normal service, which is why the six-year mean starts at 2013. The same-month model&rsquo;s biggest misses on 2019 were April, 81.5 too low, and August, 73.3 too high. The City notes that the figures do not include organic waste collected in Waterloo Region and processed at the Guelph Waste Resource Innovation Centre, so this is Guelph&rsquo;s own green bin collection only. We never add the monthly rows into yearly totals; the City publishes a separate yearly file for that. The data is used under the City of Guelph&rsquo;s Open Data Licence Version 2.0, which grants a licence &ldquo;to use the Information including for commercial purposes&rdquo;, and attribution goes to the City of Guelph under its Open Government Licence. No endorsement by the City of Guelph is implied.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools for under-18s',
      h2: 'AI tools a Guelph teenager may use, and the contest that bans them',
      intro: 'Each rule is quoted from the source document, checked on 22 October 2026; the right-hand column is how we teach with it.',
      body: [
        { kind: 'table', caption: 'AI tool rules for students aged 13 to 17 (as published by each organisation; checked 22 October 2026)', head: ['Tool or setting', 'What the document says', 'Our practice'], rows: [
          ['ChatGPT, OpenAI Terms of Use (effective January 1, 2026)', 'Users must be at least 13, and &ldquo;If you are under 18 you must have your parent or legal guardian&rsquo;s permission to use the Services.&rdquo;', 'Parent decides; no lesson needs it'],
          ['Claude, Anthropic Consumer Terms (effective Oct 8, 2025)', '&ldquo;You must be at least 18 years old&rdquo;', 'Not used with under-18s'],
          ['The CCC, CCC Online Grader rules', 'Generative AI is banned by name, and &ldquo;AI-based tools within an IDE cannot be used.&rdquo;', 'Contest work in a plain editor']
        ] },
        { kind: 'p', text: 'The green bin forecast shows why we hold AI tools back for teens who are still learning. An assistant asked to forecast the series would produce a confident model in seconds. It would be unlikely to point out that the year is missing from eleven rows in twelve, that &ldquo;Sept &rdquo; and &ldquo;Sept&rdquo; are the same month, or that February&rsquo;s dip is mostly the calendar. Those are the observations that turn a script into an analysis, and a Guelph teen who makes them is ready to use AI tools well later, because they will know what to check.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The family decides', p: 'OpenAI&rsquo;s terms give the permission to a parent or guardian until 18. We say in advance which lessons might involve it, and every lesson works without it.' },
          { h3: 'Adults only means adults only', p: 'Anthropic&rsquo;s terms set 18 as the minimum for Claude. We keep it out of teen classes, and our adult agentic coding course does not enrol under-18s.' },
          { h3: 'Honest school work', p: 'We explain and review but never write marked school assignments. If a student&rsquo;s code looks borrowed, we say so and work through it together.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Eastern time',
      h2: 'Guelph and India clocks across the 2026 to 2027 school year',
      intro: 'Guelph falls back an hour on 1 November 2026 and springs forward on 14 March 2027; India does not change. The sample hours below are illustrations, not a published timetable.',
      body: [
        { kind: 'table', caption: 'Guelph (America/Toronto) beside India. Offsets per IANA tzdb 2026e; conversions are ours', head: ['When', 'Guelph offset', 'India ahead by', 'Saturday 11 am to 12:30 pm in Guelph', 'Weekday 4 to 5:30 pm in Guelph'], rows: [
          ['Until 1 November 2026', 'UTC-4', '9 h 30 min', 'India 8:30 to 10 pm', 'India 1:30 to 3 am, next day'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '10 h 30 min', 'India 9:30 to 11 pm', 'India 2:30 to 4 am, next day'],
          ['After 14 March 2027', 'UTC-4', '9 h 30 min', 'India 8:30 to 10 pm', 'India 1:30 to 3 am, next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Booked in Guelph time', p: 'All confirmations state Eastern time. Ahead of each clock change, families receive the new schedule in writing so no lesson goes missing.' },
          { h3: 'Phone numbers', p: 'Guelph shares 519 and its overlays 226, 382 and 548 with the rest of south-western Ontario. Enter the ten digits in the form without a leading 1.' },
          { h3: 'February plans', p: 'The CCC on 17 February 2027 falls in the UTC-5 months. Students who plan to write it get weekly mock papers at a fixed Eastern hour from January.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first data script in Grade 8 to a forecast a Grade 12 student can defend',
    intro: 'Ages are only a guide. Placement depends on what the student can already program, which the free class checks.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Python and small tables', p: 'Complete programs that read a small dataset and answer a question about it, the Grade 8 expectation taken further.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Ages 14 and 15', h3: 'Algorithms and a contest', p: 'Searching, sorting and counting, and a CCC Junior paper for students who want one.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Ages 15 to 17', h3: 'Data and forecasting', p: 'Cleaning messy public files and testing forecasts against honest baselines, starting with the green bin series.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 16 to 18', h3: 'ICS4U and models', p: 'Support beside ICS3U and ICS4U, and larger machine learning projects explained line by line.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Baselines first',
    h2: 'Why a Guelph teen should beat a simple baseline before reaching for AI',
    intro: 'Because &ldquo;same month last year&rdquo; beat two more elaborate guesses, and only a student who tried it would know.',
    p1: 'Forecasting is full of clever methods that lose to a plain baseline. A teen who has watched a six-year average lose to last year&rsquo;s value understands something many adults do not: complexity is not accuracy, and every model has to earn its place against the simplest reasonable guess.',
    p2: 'We teach in that spirit. State the question, clean the data, try the obvious answer, then try to beat it, and explain why the winner won. AI tools can join later, inside the age rules, as a reviewer whose suggestions are tested like any other model. Students who learn this way can tell a good result from a lucky one.',
    closer: 'On CCC day there is no assistant at all, so the reasoning has to be the student&rsquo;s from the first line.',
    blogAnchor: 'an argument for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Guelph, Fergus, Elora and Cambridge',
    intro: 'Classes are online, so a teen near downtown Guelph and another in Fergus, Elora or Cambridge join the same lesson without a drive down the Hanlon.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Around Guelph', p: 'Students in Wellington County and nearby Waterloo Region join the same groups, all on Eastern time.' },
      { h3: 'Group or private', p: 'Groups of fifteen to twenty at one level, or a private teacher when the aim is fixed, such as a CCC paper or a final ICS4U project.' },
      { h3: 'Ownership', p: 'Students write and keep their own code in their own folders. We explain and review; graded school work stays theirs.' },
      { h3: 'What is needed', p: 'A computer able to run Python 3, a microphone and a steady internet connection. Python can be installed together in the first lesson.' },
      { h3: 'The free class', p: 'A full lesson at no cost and with no card requested, ending with a written course and level recommendation.' }
    ],
    spec: { title: 'No Guelph classroom', p: 'Modern Age Coders has no centre in Guelph and claims none. Classes are live online, taught by teachers in India, at Guelph times.' }
  },

  fees: {
    h2: 'Fees for Guelph families',
    intro: 'Fees show in your own currency, with the currency code beside each one.',
    first: 'A complete live lesson, free, ending in a placement and a suggested course.',
    group: 'Charged as a monthly fee: eight live classes with fifteen to twenty teens at the same level.',
    private: 'Charged as a monthly fee: one teacher for one teen at hours the family sets.',
    closer: 'Families in Guelph pay the same as families elsewhere in Canada. Nothing is charged before the free class or before a course and schedule are agreed; the pricing page explains how missed classes and holidays work.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Book a free class for a Guelph teen',
    intro: 'Share the grade and a line about any coding so far. A beginner writes a full first program; a stronger student might clean the Guelph green bin table or try one of our timed CCC-style problems.',
    success: 'Thank you. Our team will be in touch soon about a class in Guelph.'
  },

  faq: {
    h2: 'Guelph families ask',
    intro: 'The questions Guelph parents and teens send us most.',
    items: [
      { q: 'Are classes held in Guelph?', a: 'They are online and live, so students join from home in Guelph. There is no local centre; teens choose a group of fifteen to twenty or a private teacher.' },
      { q: 'My child is in Grade 8. Is that too early?', a: 'No. Ontario\'s Grade 8 math already asks for code that analyses data, and Python for Teens starts at that level.' },
      { q: 'Do your classes give an Ontario credit?', a: 'No. We teach alongside school courses and do not grant Ontario credits; ICD2O, ICS3U and ICS4U credits come only from the school.' },
      { q: 'Is ChatGPT allowed for my 13 year old?', a: 'OpenAI\'s terms set 13 as the minimum and require a parent\'s or guardian\'s permission under 18. We involve it only where a parent agrees.' },
      { q: 'Do teens use Claude in your lessons?', a: 'No. Anthropic\'s terms say users must be at least 18, so Claude is never used with anyone younger.' },
      { q: 'Are CEMC\'s resources really free?', a: 'Yes. CEMC says no registration is required for its Courseware, and its Problem of the Week sends new problems every Thursday. It also notes Courseware gives no certificate.' },
      { q: 'Which CCC level should a Guelph student write first?', a: 'Junior, in most cases: CEMC describes it as suited to beginner to intermediate programmers. Students move to Senior once Junior feels routine.' },
      { q: 'Can my teen use autocomplete or AI in the CCC?', a: 'No. The CCC grader rules ban generative AI and say AI-based tools within an editor cannot be used, so contest practice uses a plain editor.' },
      { q: 'When do classes run for Guelph students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Is the green bin project real City data?', a: 'Yes. It uses the City of Guelph\'s published monthly organic waste volumes under its open data licence. Students clean and forecast it themselves; the City has not endorsed our courses.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Further pages for Guelph students',
    html: 'For school courses, see <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding by grade, 1 to 8</a>, <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a> and <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explained</a>. For contests, read the <a class="cg-inline-link" href="/ccc-senior-guide">CCC Senior guide</a>. The <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario page</a> covers the province.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Guelph and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
    { href: '/cemc-free-resources-guide', label: 'CEMC free resources' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' }
  ],

  personalityCss: `
.cg-root.cg-apyg .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-apyg .cg-capsule { border-top: 1px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding-block: 0.75rem; }
.cg-root.cg-apyg .cg-eyebrow { letter-spacing: 0.07em; font-size: 0.75rem; text-transform: uppercase; font-weight: 700; }
.cg-root.cg-apyg .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-apyg .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-apyg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apyg #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.55; padding: 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-apyg .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-apyg .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum API for Grade 8 math C3.1 and C3.2 (data analysis), MTH1W C2.1, ICD2O strand titles and the current computer studies list (no ICS2O); 2008 computer studies document (first and second strands, strand D computers in society, ICS2O three strands); CEMC Courseware, Problem of the Week and CCC pages (Junior level, 2027 date, school-based entry); OpenAI Terms of Use (January 1, 2026); Anthropic Consumer Terms (Oct 8, 2025); CCC Online Grader rules; facts-geo.md for the south-western Ontario area codes and Eastern time.',
    localProject: 'City of Guelph open data, Total Organic Waste Volume by Month 2012_2019 (Guelph Open Data Licence Version 2.0), 96 rows fetched with urllib on 22 October 2026; our guelph_forecast.py (python -I): year only on January rows, month labels typed 16 ways; forecasting 2019: flat 2018 monthly average misses 98.2 per month on average, same month in 2018 misses 38.5, six-year same-month mean misses 51.4; February lowest total in every year 2013 to 2019 but lowest per day only in 2014, 2015 and 2019; January 2012 74.33 against February 2012 256.67; April and August 2019 the largest misses. No annual totals built from monthly rows. Labelled as ours. Lesson family: time-series forecasting, seasonal naive baseline, cleaning, per-day rates.',
    requiredMentions: [
      'Total Organic Waste Volume by Month 2012_2019',
      'Guelph Waste Resource Innovation Centre',
      'Open Data Licence Version 2.0',
      'an average miss of 38.5 against 51.4 and 98.2',
      'per day, February is the lowest month only in 2014, 2015 and 2019',
      'January 2012 shows 74.33 against 256.67 in February',
      'month labels typed sixteen different ways',
      'seasonal naive forecast',
      'Guelph shares 519 and its overlays 226, 382 and 548',
      'including code that involves the analysis of data in order to inform and communicate decisions'
    ],
    sources: [
      { claim: 'Ontario curriculum API: Grade 8 math coding expectations on data analysis.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_8___strands?depth=4' },
      { claim: 'Ontario curriculum API: MTH1W coding strand.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth4w___strands?depth=4' },
      { claim: 'Ontario curriculum API: ICD2O strands and the current computer studies course list.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/boh4m___strands__copy__3f73159?depth=3' },
      { claim: 'Ontario 2008 computer studies curriculum: strands and ICS2O.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'CEMC Courseware: topics, no registration, no credential.', url: 'https://cemc.uwaterloo.ca/resources/courseware' },
      { claim: 'CEMC Problem of the Week: Grades 3 to 12, weekly Thursday problems.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CEMC CCC page: Junior level and 2027 date.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC how contests work: participation through a school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'OpenAI Terms of Use: minimum age 13 and parent or guardian permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'CCC Online Grader rules: generative AI and AI-based IDE tools forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'City of Guelph: Total Organic Waste Volume by Month 2012_2019 item.', url: 'https://www.arcgis.com/home/item.html?id=ca6f0863d68247a88b77cbce90e6bae2' },
      { claim: 'City of Guelph Open Data Licence Version 2.0 (hub page item): commercial use, attribution, non-endorsement.', url: 'https://www.arcgis.com/sharing/rest/content/items/4430c79729cf47968ffde39ed58771d4/data?f=json' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Guelph schools, school boards or their results: none made, by the row instruction.',
      'Any Guelph population: StatCan not reachable live, so none printed.',
      'A unit for the green bin volumes: not asserted; the dataset does not state one.',
      'Yearly green bin totals built by adding monthly rows: refused; the City publishes a separate yearly file.',
      'Why volumes rose from 2013 to 2019: not asserted; posed as a trend for students to test.',
      'That ICD2O replaced ICS2O: not claimed; the two facts are stated side by side.',
      'Any University of Guelph claim: none made.',
      'That our courses earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the City of Guelph or the Ontario Ministry of Education.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
