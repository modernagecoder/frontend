'use strict';
// Sherbrooke (cg- city page, Canada cluster Wave 2, row 136, slug shape online-coding-and-python-classes-in-).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// English-language page for a city in Quebec. Shape from content/ca/coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: what "live online" means, step by step, for a Sherbrooke family; a Python path by age; a Python project on the
// Ville de Sherbrooke bike path file whose lesson is map projection (Web Mercator lengths overstate ground distance);
// where Quebec schooling, CEGEP and the CEMC contests sit; Eastern time and the 1 November 2026 change.
// Sources, read raw 22 to 23 October 2026:
//  - Ville de Sherbrooke open data, "Pistes cyclables", ArcGIS item 9478537c06104aa0a2c7e4634947f382 (hub record saved by
//    the geo worker in keyword-research-2026-09/ca/src/geo/opendata/sherbrooke/: hubv3_pistes.json structuredLicense
//    {"type":"CC-BY-4.0"}, licenseInfo "CC BY", recordCount 1257, description "Système de coordonnées : WGS 1984 Web
//    Mercator (sphère auxiliaire), WKID 3857"). CC BY 4.0 deed (src/geo/opendata/_licences/cc-by-4.0-deed.html): "for any
//    purpose, even commercially". CSV and GeoJSON downloaded with curl on 22 October 2026 into
//    ca/src-pilots/online-coding-and-python-classes-in-sherbrooke/ (pistes-cyclables.csv, sha256 cf0c7c62...20e0;
//    pistes-cyclables.geojson, crs "EPSG:3857"). Columns NOM, OBJECTID, SHAPE__Length, TYPEVOIE.
//  - Quebec (keyword-research-2026-09/ca/src/quebec/ and src/coding-classes-in-quebec/): Ministère de l'Éducation (quebeca-
//    education.txt); Secondary Cycle Two math options "Cultural, Social and Technical (CST), Technical and Scientific (TS)
//    and Science (S)" and "All of these options allow students to enroll in a preuniversity program." (qep-math-cycle2.txt);
//    CEGEP "Program that prepares students for university and that requires two years of full-time study." and "Program
//    designed to prepare students for the job market and that requires three years of full-time study."; "Universities use
//    the R score to analyze applications" (cegep-overview.txt); Digital Competency Framework 2026 "organized into 12
//    dimensions", "integration of AI as a component of digital technology", "Develop or adapt a digital tool using one's
//    knowledge and skills in computer programming", theme "Computational thinking" (qc-digital-competency-framework.pdf.txt).
//  - Charter of the French language, CQLR c C-11, s.1 (facts-geo.md, Internet Archive copy): "French is the official
//    language of Québec."
//  - CEMC (facts-schools-contests.md): CCC "This contest is available in English and French."; BCC "This contest is
//    available in English only."; CCC Wednesday 17 February 2027; BCC 9 to 20 November 2026; Euclid "Students in their final
//    year of secondary school or CÉGEP students.", Tuesday 6 April 2027; CSMC eligibility includes "CÉGEP students",
//    Wednesday 18 November 2026; "all students must participate through their school"; CCC languages C, C++, Python 2,
//    Python 3, Java; Python caveat "it may not always be possible to achieve a perfect score".
//  - facts-geo.md: Sherbrooke CMA and city on America/Toronto; area codes 468, 819, 873 (CNAC files via the Internet
//    Archive); Eastern offsets UTC-4 to 1 November 2026, UTC-5 to 14 March 2027 (IANA tzdb 2026e). No population printed.
//  - brand-facts.json: free first class "30-45 minutes"; group 15 to 20; ages 6 to 67.
// Our own calculations (src-pilots/.../analysis.py, analysis2.py, count_paths.py, each run with python -I; outputs in
// analysis.out.txt, analysis2.out.txt, count_paths.out.txt): 1,257 rows; TYPEVOIE Bande cyclable unidirectionnelle 514,
// Piste cyclable bidirectionnelle 353, Chaussée désignée 177, Piste cyclable unidirectionnelle 125, Accotement revêtu 88;
// SHAPE__Length matches the planar EPSG:3857 length of each GeoJSON feature (row 1: 741.2587 both ways); planar total
// 445.0 km against a great-circle ground total of 312.2 km (ratio 0.7014; cos 45.4 degrees = 0.7022); latitude range
// 45.274 to 45.518; cos-corrected km by type 112.8, 105.6, 38.7, 34.7, 20.7 (ground 112.6, 105.5, 38.6, 34.7, 20.7);
// NOM: 8 named values plus 3 blank rows; Réseau utilitaire 818 rows. Time conversions ours (timeconv.out.txt).
// English glosses of the French TYPEVOIE labels are our translations. Lesson family: map projections and unit checks.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'import math',
  '',
  'SCALE = math.cos(math.radians(45.4))   # Sherbrooke sits near latitude 45.4 N',
  '',
  'counts = {}',
  'km = {}',
  'with open("pistes-cyclables.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        kind = row["TYPEVOIE"]',
  '        metres = float(row["SHAPE__Length"]) * SCALE',
  '        counts[kind] = counts.get(kind, 0) + 1',
  '        km[kind] = km.get(kind, 0) + metres / 1000',
  '',
  'for kind in sorted(km, key=km.get, reverse=True):',
  '    print(kind, counts[kind], "segments", round(km[kind], 1), "km")'
].join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SHERBROOKE', label: 'Sherbrooke', blurb: 'Live online Python for Sherbrooke learners, with a bike path data project that teaches why map lengths need checking.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-sherbrooke',
  code: 'ps',
  accent: '#1D661C',
  accentRationale: 'Sherbrooke: a muted forest green, #1D661C, allocated for this row and clear of the retired purple and cyan band; contrast 6.67 on the paper #FBF8F2 and at least 5.74 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Sherbrooke',
    eyebrow: 'Sherbrooke, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Python in Canada', href: '/python-classes-in-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sherbrooke',
  title: 'Online Coding and Python Classes in Sherbrooke | Live Classes',
  description: 'Live online coding and Python classes for Sherbrooke learners from age 6 to adult, how a live class works, and a Python project on the city\'s bike path data.',
  ogDescription: 'What a live online class looks like for a Sherbrooke family, a Python path from first lines to data, and a project on Ville de Sherbrooke bike path data.',
  twitterDescription: 'Sherbrooke coding and Python classes, taught live online in English with a real teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Sherbrooke Learners',
    description: 'Live online coding and Python taught in English to Sherbrooke learners aged 6 to adult, in a group of fifteen to twenty or one to one, from first programs to data projects.'
  },

  h1: 'Online coding and Python classes in Sherbrooke',
  capsuleQ: 'Can a Sherbrooke learner take a live coding and Python class online?',
  capsule: 'Yes. Modern Age Coders teaches coding and Python live online, in English, to Sherbrooke learners from age 6 to adult: in a group of fifteen to twenty or one to one with a teacher. Most children begin in Python and AI for Kids, most teenagers in Python for Teens and most adults in the Python Masterclass. The first class is free.',
  lead: '"Online" covers everything from a video you watch alone to a teacher who reads your code while you type it. Ours is the second kind, and this page explains plainly what that looks like from a kitchen table in Fleurimont or Lennoxville. It then sets out a Python path for each age, a Python exercise our teachers wrote around the Ville de Sherbrooke bike path file (which hides a lesson about maps that most adults miss), and how all of it sits beside Quebec school, CEGEP and the CEMC contests.',
  wa: 'Hello Modern Age Coders, I would like a free online Python class for a learner in Sherbrooke.',

  picks: {
    eyebrow: 'Python courses for Sherbrooke',
    h2: 'Four ways into Python, by age and by goal',
    intro: 'Three Python courses split by age, plus one for teens who want to go from code to data. The free class decides which one fits.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language for children ready to leave blocks behind: turtle drawings, small games and programs that make choices.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'From a first print statement to files, functions and CSV data, which is exactly the toolkit the bike path project below needs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and university', note: 'Python for grown-ups starting from zero or restarting after years away, paced for people with jobs and evenings.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Teens with some Python', note: 'For students who can already write a loop and now want charts, tidy tables and a first look at models built on real files.' }
    ]
  },

  sections: [
    {
      id: 'live', tint: '', eyebrow: 'What live online means',
      h2: 'A live online class, from the first message to the tenth lesson',
      intro: 'Families in Sherbrooke often ask what they are actually signing up for. These are the steps as they happen, in order.',
      body: [
        { kind: 'table', caption: 'How a live online class runs at Modern Age Coders (our own description of our process)', head: ['Step', 'What happens', 'What the learner needs'], rows: [
          ['1. You write to us', 'You fill in the form on this page or send a WhatsApp message with the learner\'s age or grade and any coding they have done.', 'Nothing yet'],
          ['2. The free class', 'A real lesson of 30 to 45 minutes with a teacher, live, ending with a suggested level and course.', 'A laptop or desktop with sound and a steady connection'],
          ['3. Placement', 'You choose a group of fifteen to twenty at the same level, or one to one, and agree a time on the Sherbrooke clock.', 'A time that suits school, work or both'],
          ['4. Each lesson', 'The teacher explains, then the learner writes the code on their own machine, runs it, and reads the error out loud when it breaks.', 'Python 3, which is free, installed with help in the first lessons'],
          ['5. Between lessons', 'A short task to finish alone. The point is that the learner can do it without the teacher, or an AI tool, beside them.', 'Twenty quiet minutes, a few times a week'],
          ['6. Checking progress', 'Every few weeks the learner rebuilds a small program from a blank file, which shows what has stuck and what has not.', 'Honesty about what was hard']
        ] },
        { kind: 'p', text: 'The difference between this and a recorded course is that somebody notices. When a twelve year old in Sherbrooke types <code>print("Bonjour")</code> with a curly quote pasted from a document, a teacher sees the error message on the shared screen and asks the child what it says before fixing anything. That habit, reading the error instead of guessing, is most of what separates people who can program from people who have watched programming.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Taught in English', p: 'Every class is in English. Quebec\'s Charter of the French language states that "French is the official language of Québec", and many Sherbrooke learners study in French at school; Python itself reads the same in either language, and teachers are patient with mixed vocabulary.' },
          { h3: 'Your own computer', p: 'Learners code on the machine they will keep using, not in a sandbox that disappears. By the end of the first month they know where their files are, how to run a script and how to open a CSV.' },
          { h3: 'No travel', p: 'Nobody drives across town in January. A learner in Rock Forest and one in Brompton join the same lesson, and a snowy evening changes nothing.' }
        ] }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'Quebec schooling',
      h2: 'Where coding meets a Sherbrooke student at school and at CEGEP',
      intro: 'Sherbrooke follows the Québec Education Program set by the Ministère de l\'Éducation. We read the English versions of the ministry documents on 22 October 2026. Words in quotation marks come from the ministry; everything else is our summary.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 2026 Digital Competency Framework', p: 'The ministry\'s framework is "organized into 12 dimensions" and names, as a guiding principle, the "integration of AI as a component of digital technology". In our reading, one of its elements does ask students to build or adapt a digital tool with programming, and computational thinking appears among its sample themes.' },
          { h3: 'Secondary IV and V math', p: 'In Secondary Cycle Two students choose between "Cultural, Social and Technical (CST), Technical and Scientific (TS) and Science (S)". The program says "All of these options allow students to enroll in a preuniversity program." Our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">guide to the three options</a> goes further.' },
          { h3: 'CEGEP and the R score', p: 'Quebec describes a pre-university CEGEP program as one "that requires two years of full-time study", and a technical program as three years. It adds that "Universities use the R score to analyze applications". Our <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science page</a> covers preparation.' }
        ] },
        { kind: 'p', text: 'What the framework does not do is put a weekly programming course on every timetable. Computing in Quebec is spread across subjects and competencies, so how much code a Sherbrooke student actually writes depends a great deal on the school and the teacher. A learner who wants to be fluent by CEGEP, especially one aiming at a science or computer science program, usually needs time outside school to write programs long enough to go wrong in interesting ways.' },
        { kind: 'callout', h3: 'What we are, and what we are not', p: 'Our classes run alongside school and CEGEP; they do not replace either. Diplomas, credits and R scores come from schools and CEGEPs alone, and we are not connected with the Ministère de l\'Éducation, any school service centre, any CEGEP or the Ville de Sherbrooke.' }
      ]
    },
    {
      id: 'bikes', tint: 'deep', eyebrow: 'Sherbrooke data project',
      h2: 'How long are Sherbrooke\'s bike paths? Python, a city file and a map that lies a little',
      intro: 'The Ville de Sherbrooke publishes its bike path layer, "Pistes cyclables", as open data under CC BY 4.0. Our students count it in Python and then discover that the length column is not in ground metres. Every figure below is our own calculation from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our count of the Ville de Sherbrooke file (1,257 rows), by TYPEVOIE. "Map km" adds up the SHAPE__Length column; "ground km" applies our latitude correction. English glosses are our translations', head: ['TYPEVOIE in the file', 'Our gloss', 'Segments', 'Map km (Web Mercator)', 'Ground km (our correction)'], rows: [
          ['Bande cyclable unidirectionnelle', 'One-way painted lane', '514', '160.6', '112.8'],
          ['Piste cyclable bidirectionnelle', 'Two-way separate path', '353', '150.3', '105.6'],
          ['Chaussée désignée', 'Designated shared roadway', '177', '55.1', '38.7'],
          ['Accotement revêtu', 'Paved shoulder', '88', '49.5', '34.7'],
          ['Piste cyclable unidirectionnelle', 'One-way separate path', '125', '29.5', '20.7']
        ] },
        { kind: 'p', text: 'This is the Python that prints the right-hand columns. It needs nothing beyond the standard library and the CSV in the same folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The naive sum', p: 'Students first add up SHAPE__Length and get 445.0 km. It looks like an answer. Then they read the dataset description, which gives the coordinate system as WGS 1984 Web Mercator, WKID 3857, and ask what a "metre" means on that map.' },
          { h3: '2. Measure it a second way', p: 'From the GeoJSON copy of the same layer, they convert every vertex back to latitude and longitude and add great-circle distances. That gives 312.2 km on the ground, about 0.70 of the map figure, across latitudes 45.274 to 45.518.' },
          { h3: '3. Explain the gap', p: 'Web Mercator stretches distances by roughly one over the cosine of the latitude. At 45.4 degrees north the cosine is 0.7022, so multiplying by it brings the map lengths within a fraction of a kilometre of the careful measurement in every row of the table.' }
        ] },
        { kind: 'callout', h3: 'What the file still cannot tell you', p: 'A one-way lane painted on both sides of a street appears as two segments, so lane kilometres are not street kilometres. The file says nothing about surface, width, winter clearing or how busy a path is. Three rows have an empty network name, and 818 rows belong to the "Réseau utilitaire". A student who writes those limits down beside the number has done real data work.' },
        { kind: 'p', text: 'Licence: CC BY 4.0, which allows reuse with credit. Source: Ville de Sherbrooke, Pistes cyclables (<a class="cg-inline-link" href="https://donneesouvertes-sherbrooke.opendata.arcgis.com/datasets/9478537c06104aa0a2c7e4634947f382_0">dataset page</a>, <a class="cg-inline-link" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>). Our counts and corrections are ours, and the city does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and clocks',
      h2: 'CEMC contests in a French-language province, and Sherbrooke time',
      intro: 'CEMC, based at the University of Waterloo, sets the contests that most Canadian schools order, and its language rules are worth knowing in a province where many schools teach in French. Dates are as CEMC listed them on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests a Sherbrooke student may write in 2026 to 2027, with CEMC\'s language and eligibility notes', head: ['Contest', 'Who it is for (CEMC wording or our summary)', 'CEMC date', 'Language'], rows: [
          ['Beaver Computing Challenge', 'Our summary: Grade 10 or below in three levels; no coding needed', '9 to 20 November 2026', 'English only'],
          ['Canadian Senior Mathematics Contest', 'Includes "CÉGEP students"', '18 November 2026', 'See CEMC'],
          ['Canadian Computing Competition', 'Junior or Senior, chosen by skill', 'Wednesday 17 February 2027', 'English and French'],
          ['Euclid', '"Students in their final year of secondary school or CÉGEP students."', 'Tuesday 6 April 2027', 'See CEMC']
        ] },
        { kind: 'p', text: 'CEMC says "all students must participate through their school", so a Sherbrooke student cannot enter alone; a teacher or school has to order the contest. CCC writers may use C, C++, Python or Java, and CEMC warns that "it may not always be possible to achieve a perfect score" in some languages, Python among them. We prepare students with original problems of our own and point them to CEMC\'s free archive, and we are not connected with CEMC. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> has the detail.' },
        { kind: 'table', mt: true, caption: 'Two sample class times on the Sherbrooke clock and the matching time for our teachers in India (offsets from the IANA tz database 2026e; conversions ours; examples only, not fixed batch times)', head: ['Period', 'Sherbrooke offset', 'Wednesday 5:30 pm in Sherbrooke is, in India', 'Saturday 10 am in Sherbrooke is, in India'], rows: [
          ['Until 1 November 2026', 'UTC-4', '3:00 am Thursday', '7:30 pm Saturday'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '4:00 am Thursday', '8:30 pm Saturday'],
          ['From 14 March 2027', 'UTC-4', '3:00 am Thursday', '7:30 pm Saturday']
        ] },
        { kind: 'p', text: 'Sherbrooke keeps Eastern time with Montréal and Toronto. When clocks go back on 1 November 2026, India does not move, so the gap widens by an hour; we confirm every class in Sherbrooke time before each change. The full picture across the country is on our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The Python path',
    h2: 'From a first loop at 9 to data projects as an adult',
    intro: 'Ages are only a guide here; in the free lesson the teacher sees what the learner can actually do and sets the starting rung from that.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Before Python', p: 'Blocks and short puzzles, so ideas like order, repetition and choice are familiar before any typing begins.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'First typed code', p: 'Python with drawings, games and quizzes; variables, loops and conditions written by hand, explained aloud.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Python properly', p: 'Functions, files, lists and dictionaries, then a real data file like the bike path layer, then contests or data science.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Python for work', p: 'Zero to confident scripts, then automation of the spreadsheets and reports that eat a working week.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'An AI tool would have given you 445 km',
    intro: 'Which is the point of learning to check.',
    p1: 'Ask a chatbot to total the Sherbrooke bike path file and it will write a tidy script that sums SHAPE__Length and prints 445.0. The code runs. The answer is wrong by more than 130 km, because the question of what a map metre means never came up. Nothing in the output warns you.',
    p2: 'We teach Python so that learners ask that question themselves: what unit is this, where did it come from, does the result make sense against something I know? Older students use AI tools under the age rules we follow, but as a draft to inspect, never as an answer to hand in.',
    closer: 'Quebec\'s own framework talks about integrating AI into digital competency; integration starts with knowing when the tool is confidently wrong.',
    blogAnchor: 'why coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How classes are arranged for Sherbrooke and the Eastern Townships',
    intro: 'One teacher, a fixed group or a one-to-one plan, and times written on the local clock.',
    cells: [
      { h3: 'Choosing a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or one to one', p: 'A group of fifteen to twenty learners at one level moves through a course together; one to one suits adults with tight diaries or a teen preparing for a contest.' },
      { h3: 'Beyond the city', p: 'Learners in Magog, Granby or a farm outside Coaticook join exactly the same classes. All of them sit on Eastern time with Sherbrooke.' },
      { h3: 'Sherbrooke phone numbers', p: 'Numbers on the 819, 873 and 468 area codes work in the form below. Type all ten digits; the +1 is already filled in.' },
      { h3: 'Marked work stays yours', p: 'We help a learner understand a school or CEGEP assignment, but we never write graded work for them. Teachers can tell, and so can the learner.' },
      { h3: 'Starting is free', p: 'The first class costs nothing and needs no card. It ends with a level, a course and a suggested time.' }
    ],
    spec: { title: 'No office in Sherbrooke', p: 'Modern Age Coders has no centre in Sherbrooke or anywhere in Quebec. Every lesson is taught live and online by teachers based in India, in English.' }
  },

  fees: {
    h2: 'Fees for Sherbrooke learners',
    intro: 'Three lines. The currency appears beside each fee for your region.',
    first: 'A full live lesson free of charge, ending with a level and a course suggestion.',
    group: 'The monthly fee for a group of fifteen to twenty at the same stage.',
    private: 'The monthly fee for one teacher and one learner, at times you agree.',
    closer: 'Sherbrooke learners pay what every learner in Canada pays. No invoice arrives before the free class has happened and a course has been chosen; rules for missed lessons and holiday weeks are on the pricing page.'
  },

  reviewsH2: 'What families and learners have said about us on Google',

  book: {
    h2: 'Tell us about the Sherbrooke learner',
    intro: 'Give us an age or grade and a line about past coding. A nine year old might start with a turtle drawing; a CEGEP student might go straight to the bike path file.',
    success: 'Thank you. We will be in touch soon about a free class for Sherbrooke.'
  },

  faq: {
    h2: 'Questions from Sherbrooke',
    intro: 'Asked by parents, students and adult learners in Sherbrooke and the Eastern Townships.',
    items: [
      { q: 'Are your Sherbrooke coding classes in person or online?', a: 'Online only, and live. There is no Sherbrooke centre. A teacher teaches the class in real time and the learner codes on their own computer at home.' },
      { q: 'Are the classes taught in French?', a: 'No. Every class is taught in English. Many of our Quebec learners study in French at school, and Python code itself is the same in either language.' },
      { q: 'What happens in the free class?', a: 'A real lesson of 30 to 45 minutes with a teacher, matched to the learner\'s age. It ends with a suggested level, a course and a time. No card is needed.' },
      { q: 'What does my child need for an online Python class?', a: 'A laptop or desktop with sound and a steady internet connection. Python 3 is free, and the teacher helps install it in the first lessons. A tablet is not enough for typed code.' },
      { q: 'At what age can a child start Python?', a: 'Most children are ready for typed Python at about 9. From 6 to 8 we start with blocks and puzzles. Teens and adults can start Python straight away.' },
      { q: 'Do you have Python classes for adults in Sherbrooke?', a: 'Yes. The Python Masterclass takes adults from no experience to writing useful scripts, and the automation course follows for people who want to use Python at work.' },
      { q: 'Do your classes affect a Quebec diploma or an R score?', a: 'Not directly. Those come only from school and CEGEP; we issue none of them. What we offer is practice and understanding that a learner carries into the courses that do count.' },
      { q: 'Can you help a Sherbrooke student prepare for the CCC?', a: 'Yes. The 2027 CCC falls on Wednesday 17 February 2027 according to CEMC, and it can be written in English or French. Students write it through their school; we prepare them with original problems.' },
      { q: 'When are classes held for Sherbrooke learners?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always confirmed on Eastern time.' },
      { q: 'Will a Sherbrooke phone number work in your form?', a: 'Yes. Numbers on the 819, 873 and 468 area codes work. Enter the ten digits without the leading 1.' },
      { q: 'How do I see the fees?', a: 'The fees section above shows the free first class, the monthly group fee and the monthly one-to-one fee, with your currency shown beside each figure. Nothing is charged before the free class.' }
    ]
  },

  next: {
    eyebrow: 'Further reading',
    h2: 'More for Sherbrooke and Quebec learners',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a> or <a class="cg-inline-link" href="/python-classes-in-canada">Python classes in Canada</a>. Secondary students can read about <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">CST, TS and Science math</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math help</a>, and CEGEP-bound learners about <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sherbrooke and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/python-classes-in-canada', label: 'Python in Canada' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP computer science' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Quebec Secondary IV math' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-ps .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; max-width: 18ch; }
.cg-root.cg-ps .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ps .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ps .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-ps .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ps .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ps #bikes code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-ps .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ps .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 October 2026 from English ministry documents saved raw: Ministère de l\'Éducation; Digital Competency Framework 2026 (12 dimensions, AI integration principle, programming element, computational thinking theme); Secondary Cycle Two math options CST, TS, S, all leading to pre-university; CEGEP pre-university two years, technical three years, R score; Charter of the French language s.1. CEMC 2026-27: BCC English only, CCC English and French, Euclid and CSMC open to CÉGEP students, through-a-school rule. Eastern time and area codes 468/819/873 from facts-geo.md (IANA tzdb 2026e; CNAC via the Internet Archive).',
    localProject: 'Ville de Sherbrooke open data, Pistes cyclables (CC BY 4.0), CSV and GeoJSON downloaded with curl on 22 October 2026 and analysed with our scripts (python -I): 1,257 rows; TYPEVOIE counts 514 / 353 / 177 / 125 / 88; SHAPE__Length is planar Web Mercator length (EPSG:3857), total 445.0 km, against 312.2 km great-circle ground length (ratio 0.7014; cos 45.4 = 0.7022); cos-corrected km by type 112.8, 105.6, 38.7, 34.7, 20.7. Labelled as ours. Lesson family: map projections and unit checks.',
    requiredMentions: [
      'Accotement revêtu',
      'WKID 3857',
      '312.2 km on the ground',
      'At 45.4 degrees north the cosine is 0.7022',
      'Réseau utilitaire',
      'A learner in Rock Forest and one in Brompton',
      'This is the Python that prints the right-hand columns',
      'Numbers on the 819, 873 and 468 area codes',
      'An AI tool would have given you 445 km',
      'Wednesday 5:30 pm in Sherbrooke'
    ],
    sources: [
      { claim: 'Ville de Sherbrooke open data: Pistes cyclables dataset (CC BY 4.0, 1,257 records, Web Mercator WKID 3857).', url: 'https://donneesouvertes-sherbrooke.opendata.arcgis.com/datasets/9478537c06104aa0a2c7e4634947f382_0' },
      { claim: 'Creative Commons Attribution 4.0 International licence: use for any purpose, even commercially.', url: 'https://creativecommons.org/licenses/by/4.0/' },
      { claim: 'Québec Education Program, Secondary Cycle Two mathematics: CST, TS and S options; all lead to pre-university.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Québec.ca CEGEP overview: pre-university two years, technical three years, R score.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'Ministère de l\'Éducation Digital Competency Framework 2026 (English version).', url: 'https://www.quebec.ca/en/education' },
      { claim: 'CEMC contests 2026-27: dates, languages, eligibility, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Sherbrooke population or language-share figure: StatCan not reachable live, nothing printed.',
      'The 445.0 km map sum or the 312.2 km ground figure as the official length of the city network: refused; both are our calculations with stated limits.',
      'That a lane kilometre equals a street kilometre: refused; two one-way lanes on one street are two segments.',
      'That our classes earn Quebec credits, diplomas or R scores: refused.',
      'That we teach in French: refused; classes are in English.',
      'Named schools, school service centres or CEGEPs: not used.',
      'CEMC fees: left out (currency-neutral page).',
      'Any affiliation with the Ville de Sherbrooke, the Ministère de l\'Éducation or CEMC.'
    ]
  }
};
