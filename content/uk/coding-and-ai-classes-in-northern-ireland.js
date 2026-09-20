'use strict';
// Northern Ireland (cg- nation page, UK cluster Phase 3). Facts read on 20 September 2026:
//  - CCEA GCSE Specification in Digital Technology, subject codes 2650 and 2610, for first teaching
//    from September 2017, first assessment Summer 2018, first award Summer 2019, marked
//    "Updated: 17 September 2019". Taken from CCEA's own PDF (ccea.org.uk serves the specification
//    PDF; its HTML subject page returns 403 to automated reads, which is recorded and not worked around):
//    * "This qualification is available as: GCSE Digital Technology (Multimedia), a digital authoring
//      qualification focusing on multimedia; and GCSE Digital Technology (Programming), a digital
//      development qualification focusing on programming."
//    * "All students study Unit 1: Digital Technology. They then choose either the multimedia route or
//      the programming route and study the relevant two units for their chosen route."
//    * "Students cannot combine units from each route; they can only be entered for Units 1, 2 and 3
//      or Units 1, 4 and 5."
//    * Unit 1, external written examination, 1 hour, 30 per cent, Summer from 2018. Unit 2 or Unit 4,
//      external written examination, 1 hour 30 mins, 40 per cent, Summer from 2019. Unit 3 or Unit 5,
//      controlled assessment, 30 per cent, Summer from 2019.
//    * "Students must take at least 40 percent of the assessment (based on unit weightings) at the end
//      of the course as terminal assessment." / "This is the terminal rule."
//    * Unit 5: "Students must use one of the following languages in their completed solution: Python,
//      Java or C#." CCEA names three; it does not pick one.
//    * Controlled assessment: "The controlled assessment task is worth 60 marks and will take a maximum
//      of 36 hours to complete"; task setting control is "high. This means that we set the task";
//      "We will publish a new scenario-based task for Unit 3 and Unit 5 in June each year"; task taking
//      and task marking are both "medium"; "Candidates can work in pairs or groups, but it is essential
//      that the teacher can identify individual contributions."
//    * AO weightings overall: AO1 30, AO2 46, AO3 24, with "a tolerance of +/-3%".
//    * "We award GCSE qualifications on a grade scale from A* to G, with A* being the highest. The nine
//      grades available are as follows: A* A B C* C D E F G." (This is CCEA grading CCEA's GCSEs.)
//    * Curriculum: "the statutory Northern Ireland Curriculum", Key Stage 3 and Key Stage 4, with
//      Cross-Curricular Skills (Communication, Using Mathematics, Using ICT) and Thinking Skills and
//      Personal Capabilities.
//  - Corroboration that the 2017 specification is what schools are teaching now: Wallace High School's
//    GCSE Prospectus for September 2026-2027, published December 2025, describes Unit 1 at 30 per cent,
//    Unit 4 at 40 and Unit 5 at 30, says its students "will follow the programming route obtaining a
//    GCSE with the title 'Digital Technology (Programming)'", teaches it in Python, and links to the
//    same 2017 CCEA microsite.
//  - NISRA, Census 2021 main statistics, phase 1 bulletin: census day 21 March 2021; "The usually
//    resident population of Northern Ireland on census day, 21 March 2021, was 1,903,175"; Table 1
//    gives the 11 Local Government Districts as ROUNDED display figures ("for display purposes figures
//    are appropriately rounded but full figures are available in the Census 2021 tables"). The rounded
//    rows do not sum to the stated total, so this page never adds them up.
// Spine: one subject name, two qualifications, and no mixing. A Northern Irish family that picks
// "Digital Technology" may be picking multimedia, in which case no programming is assessed at all.
// Second edge: where Wales names Python in the rules, CCEA names Python, Java or C# and leaves the
// choice to the school. Where Wales bars a year of preparation from the room, CCEA marks 36 hours of
// supervised coursework from a scenario it republishes every June.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'nation', tag: 'NI', blurb: 'Two GCSEs share one subject name here, and a family choosing between them is choosing whether programming is assessed at all.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-northern-ireland',
  code: 'nir',
  accent: '#8D356F',
  accentRationale: 'Northern Ireland: a mulberry from the solver (5.94:1 on every paper tint) in the widest unused hue gap, lighter and less saturated than the Harrow plum and clear of the two magentas on the Perse and Primary Maths Challenge pages',
  pageType: 'governorate',
  place: {
    name: 'Northern Ireland',
    eyebrow: 'Northern Ireland, United Kingdom',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Northern Ireland',
  title: 'Coding and AI Classes in Northern Ireland | CCEA Digital Tech',
  description: 'Live online coding, Python, AI and maths classes for families across Northern Ireland, built around CCEA Digital Technology and its two separate routes.',
  ogDescription: 'Northern Ireland has two GCSEs with the same subject name. Only one of them assesses programming, and the units cannot be mixed.',
  twitterDescription: 'Coding and AI classes in Northern Ireland for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Northern Ireland',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the eleven local government districts of Northern Ireland, taught live in English.'
  },

  h1: 'Coding and AI classes in Northern Ireland',
  capsuleQ: 'What are the best coding classes in Northern Ireland?',
  capsule: 'Start with a fact most families here are never told. CCEA offers its Digital Technology GCSE as two separate qualifications with almost the same name: Digital Technology (Multimedia) and Digital Technology (Programming). Every student takes the same one-hour Unit 1 worth 30 per cent, then goes down one route or the other, and the specification is blunt about it: "Students cannot combine units from each route." Pick the multimedia route and no programming is assessed. Pick the programming route and the coursework must be written in Python, Java or C#, with the school choosing which. So the useful question in Belfast or Omagh is not whether a child is doing Digital Technology, but which Digital Technology. We teach live online from India, ages 6 to 67, in groups of five to ten or one to one. The first lesson is free; a group place is then USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Northern Ireland runs the most quietly consequential subject choice in British computing. Two GCSEs, one subject name, a shared compulsory core and then a fork that cannot be walked back, because units from the two routes may not be combined in an entry. A pupil who chooses in Year 10 without knowing which fork they are on can reach Year 12 having built websites and edited video without writing a line of code, and nothing about the certificate will look unusual. This page explains the fork, the languages CCEA permits, the 36 hours of controlled assessment behind the practical unit, and how a family can prepare for either road.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Northern Ireland.',

  picks: {
    eyebrow: 'Course picks for Northern Ireland',
    h2: 'Four courses for learners in Northern Ireland',
    intro: 'A P5 pupil in Newry who wants to make a game, a Year 10 in Ballymena weighing up the two routes, a Year 12 heading for Software Systems Development, and a parent in Derry who wants to follow what is going on. Every one of them starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A first language where a child builds something that runs, long before any route has to be chosen.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python in Key Stage 3, which is what makes the programming route a real option rather than a gamble.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'One of the three languages CCEA permits in the Unit 5 solution, and the one most schools here teach.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For parents and career changers who want the concepts without committing to becoming a developer.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: '', eyebrow: 'The fork',
      h2: 'One subject name, two GCSEs, and no mixing units',
      intro: 'Every figure and phrase below is quoted from CCEA\'s own specification for Digital Technology, subject codes 2650 and 2610.',
      body: [
        { kind: 'callout', h3: 'The sentence that decides a school career', p: '"Students cannot combine units from each route; they can only be entered for Units 1, 2 and 3 or Units 1, 4 and 5." A family that discovers this in Year 12 has discovered it too late.' },
        { kind: 'table', mt: true, caption: 'How the two routes are built, from the CCEA specification at a glance', head: ['Unit', 'Route A: Multimedia', 'Route B: Programming', 'Assessment and weighting'], rows: [
          ['Unit 1', 'Digital Technology (compulsory core)', 'Digital Technology (compulsory core)', 'External written examination, 1 hour, 30 per cent'],
          ['Second unit', 'Unit 2: Digital Authoring Concepts', 'Unit 4: Digital Development Concepts', 'External written examination, 1 hour 30 mins, 40 per cent'],
          ['Third unit', 'Unit 3: Digital Authoring Practice', 'Unit 5: Digital Development Practice', 'Controlled assessment, 30 per cent'],
          ['Certificate title', 'GCSE Digital Technology (Multimedia)', 'GCSE Digital Technology (Programming)', 'Awarded on the route taken']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What a multimedia route contains', p: 'CCEA calls it "a digital authoring qualification focusing on multimedia". It is a real qualification with real skills. It simply does not assess a student\'s ability to write a program.' },
          { h3: 'What a programming route contains', p: '"A digital development qualification focusing on programming": the same core, then software development concepts on paper and a coded solution built, tested and evaluated in practice.' },
          { h3: 'Why the name hides it', p: 'Both certificates read Digital Technology first. The route sits in brackets after it, and brackets are easy to miss on a school option form in January of Year 10.' }
        ] },
        { kind: 'p', text: 'There is a second rule worth knowing before a school plans its timetable. CCEA sets a terminal requirement: "Students must take at least 40 percent of the assessment (based on unit weightings) at the end of the course as terminal assessment." Because the specification is unitised, a school has real freedom about when the rest is sat, and two schools four miles apart can sequence the same GCSE very differently.' },
        { kind: 'spec', title: 'A grade scale of its own', p: 'One more thing that surprises families who move here. CCEA awards its GCSEs "on a grade scale from A* to G, with A* being the highest", and lists nine grades: A*, A, B, C*, C, D, E, F and G. That C* has no counterpart in the English 9 to 1 scale, and a pupil in Northern Ireland may hold certificates on both systems if their school enters some subjects with an English board.' }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'The language',
      h2: 'Python, Java or C#, and the school decides which',
      intro: 'CCEA does not mandate a language. It offers a list of three, and that is a more consequential difference than it sounds.',
      body: [
        { kind: 'callout', h3: 'Quoted in full', p: 'Unit 5, Digital Development Practice: "Students must use one of the following languages in their completed solution: Python, Java or C#."' },
        { kind: 'align', mt: true, rows: [
          { code: 'Python', req: 'The common choice in Northern Irish schools, and the one a pupil is most likely to meet again at A level or in a first job.', ours: 'Our teens\' Python course runs from typed basics to file handling and testing, which is the whole of the Unit 5 skill list.' },
          { code: 'Java', req: 'Verbose, strongly typed and unforgiving about structure, which some departments prefer precisely because it makes design visible.', ours: 'A learner arriving from Java transfers cleanly: the constructs CCEA lists are the same, and we teach the ideas rather than the syntax.' },
          { code: 'C#', req: 'Usually chosen where a department has a Visual Studio setup and wants a graphical interface built alongside the logic.', ours: 'The same answer. We do not teach C# as a course, and we say so rather than imply we cover everything.' }
        ] },
        { kind: 'p', text: 'Compare that with Wales, where the rules name a single language and every candidate sits the same on-screen Python paper. Northern Ireland puts the choice with the school, which means a parent cannot look up the answer nationally. They have to ask the department, and the answer determines what practice at home is worth doing. It is a two-minute question at a parents\' evening that changes a whole year of preparation.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What CCEA does specify', p: 'The constructs. Variables and constants, Boolean and arithmetic operators, input, output and assignment, conditional execution, for, while and repeat loops, user-defined and in-built functions, arrays and writing to text files.' },
          { h3: 'Why that list is portable', p: 'Every item on it exists in all three permitted languages. A student who understands a while loop has understood it in Python, Java and C# at once, which is why we teach the construct first and the syntax second.' },
          { h3: 'What we would not claim', p: 'That learning Python guarantees anything if a school teaches C#. It does not. It transfers well, and transferring well is an honest promise where a guarantee would not be.' }
        ] },
        { kind: 'p', text: 'The same reasoning runs through the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a>, which sets out how the four school systems differ and where a single birthday puts a child in each of them.' }
      ]
    },
    {
      id: 'coursework', tint: 'deep', eyebrow: 'Controlled assessment',
      h2: 'Thirty-six hours, sixty marks, and a new scenario every June',
      intro: 'The practical unit is coursework, but tightly bounded coursework, and the boundaries are published.',
      body: [
        { kind: 'table', caption: 'The controlled assessment rules, in CCEA\'s words', head: ['Rule', 'What the specification says'], rows: [
          ['Who sets the task', 'The level of control is "high. This means that we set the task."'],
          ['How often it changes', '"We will publish a new scenario-based task for Unit 3 and Unit 5 in June each year."'],
          ['Size of the task', '"The controlled assessment task is worth 60 marks and will take a maximum of 36 hours to complete."'],
          ['Supervision', 'Task taking is "medium" control: teachers monitor progress, prevent plagiarism, give advice if there are problems and certify the work is the candidate\'s own.'],
          ['Working together', '"Candidates can work in pairs or groups, but it is essential that the teacher can identify individual contributions."'],
          ['Who marks it', 'Task marking is "medium" control: "teachers mark the task and we moderate the results."'],
          ['Referencing', '"Candidates must reference appropriately all the materials they use in their work, including any online resources."']
        ] },
        { kind: 'callout', mt: true, h3: 'What thirty-six hours actually buys', p: 'Roughly a school term of lessons, spent designing, building, testing and evaluating one solution. It is the longest single piece of technical work most Northern Irish teenagers will have produced, and it is worth 30 per cent of the grade.' },
        { kind: 'p', text: 'That design is worth sitting with, because it is the opposite of the arrangement over the Irish Sea in Wales. There a scenario arrives a year ahead, none of the preparation may enter the examination room and none of it is marked. Here the work itself is the assessment: supervised, teacher-marked, moderated by CCEA, and built over 36 hours a student can plan. Neither approach is soft. They test different things, and a family that understands which one their child faces prepares very differently.' },
        { kind: 'p', text: 'We do not touch controlled assessment work. A CCEA task is set, supervised and certified inside a school, and a tutor who helped with it would put a candidate\'s entry at risk. What we teach is everything that makes the 36 hours go well: decomposing a problem, designing before typing, writing a test plan in tabular form with black box and white box tests, and evaluating honestly against the user requirements. Those are CCEA\'s own words for what Unit 5 rewards, and none of them are things a student can only learn inside the task.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Design before code', p: 'CCEA asks for a "fully decomposed solution" specified before it is built. Most lost marks here are not programming failures; they are a student who started typing in hour one.' },
          { h3: 'A test plan, in a table', p: 'Presented in tabular format, with appropriate test data, expected output, and run-time and logic errors identified. It is a skill, it is teachable, and it is rarely taught.' },
          { h3: 'An honest evaluation', p: 'Refer to the user requirements, to performance during testing, and to the refinements testing showed were needed. Naming a weakness scores better than hiding one.' }
        ] },
        { kind: 'spec', title: 'Where the marks live overall', p: 'Across the whole qualification CCEA sets the assessment objectives at AO1 30 per cent for knowledge and understanding, AO2 46 per cent for applying that knowledge to investigate problems and propose solutions, and AO3 24 per cent for designing, developing and evaluating solutions, with a stated tolerance of plus or minus 3 per cent. Nearly half the qualification is application. Recall alone does not carry a candidate here.' }
      ]
    },
    {
      id: 'ni', tint: '', eyebrow: 'Across Northern Ireland',
      h2: 'Eleven districts, 1,903,175 people, one timetable',
      intro: 'NISRA published these district figures rounded for display. They are reproduced as published, and not added together.',
      body: [
        { kind: 'table', caption: 'Usually resident population by local government district, Census 2021, as NISRA displays it', head: ['Local government district', 'All usual residents 2021', 'Share of Northern Ireland'], rows: [
          ['Belfast', '345,400', '18.1 per cent'],
          ['Armagh City, Banbridge and Craigavon', '218,700', '11.5 per cent'],
          ['Newry, Mourne and Down', '182,100', '9.6 per cent'],
          ['Ards and North Down', '163,700', '8.6 per cent'],
          ['Derry City and Strabane', '150,800', '7.9 per cent'],
          ['Mid Ulster', '150,300', '7.9 per cent'],
          ['Lisburn and Castlereagh', '149,100', '7.8 per cent'],
          ['Antrim and Newtownabbey', '145,700', '7.7 per cent'],
          ['Causeway Coast and Glens', '141,700', '7.4 per cent'],
          ['Mid and East Antrim', '139,000', '7.3 per cent'],
          ['Fermanagh and Omagh', '116,800', '6.1 per cent']
        ] },
        { kind: 'p', text: 'NISRA states the national figure precisely: "The usually resident population of Northern Ireland on census day, 21 March 2021, was 1,903,175." The district rows above are the agency\'s rounded display figures, published with the note that "for display purposes figures are appropriately rounded but full figures are available in the Census 2021 tables". We have reproduced them exactly and left them alone, because rounded parts do not reconcile to an exact whole and pretending otherwise would be the kind of tidy arithmetic that quietly turns into a false claim.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A small place, thinly spread', p: 'Belfast holds under a fifth of the population. Fermanagh and Omagh, the largest district by area, holds the fewest people, and an evening class within driving distance is not a given there.' },
          { h3: 'The same hour for everyone', p: 'A pupil in Enniskillen joins the same lesson, with the same teacher, as one in east Belfast. Distance stops being a variable when the classroom is a link.' },
          { h3: 'The language we teach in', p: 'Our lessons are in English. Irish-medium schooling is part of the system here and we are not equipped to teach through Irish, which we would rather state up front than let a family discover after booking.' }
        ] },
        { kind: 'p', text: 'Beyond Digital Technology, CCEA\'s specification points forward: it says the GCSE "provides a sound basis for further study in both GCE Digital Technology and GCE Software Systems Development". A pupil who takes the programming route and enjoys it has two post-16 doors, and both of them expect someone who can already build something that works.' },
        { kind: 'spec', title: 'Sources', p: 'Qualification facts: CCEA GCSE Specification in Digital Technology, subject codes 2650 and 2610, for first teaching from September 2017, marked updated 17 September 2019, read directly from CCEA\'s published PDF. Corroboration that schools are teaching this specification in the 2026 to 2027 cycle: Wallace High School\'s GCSE prospectus for September 2026 to 2027, which sets out the same units and weightings and links to the same CCEA microsite. Population: NISRA, Census 2021 main statistics for Northern Ireland, phase 1 statistical bulletin. All read 20 September 2026. CCEA\'s HTML subject pages return an automated-access error, so the specification PDF itself was used.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first program to a coded solution that passes its own tests',
    intro: 'Placement is by what a learner can already build without help, which is also how CCEA measures Unit 5.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Something that runs', p: 'Block-based programs a child can demonstrate and explain, well before any option form appears.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Typed code in Key Stage 3', p: 'The move to Python during Key Stage 3, so that the programming route is a choice rather than a risk.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 16', h3: 'Design, build, test, evaluate', p: 'The four things Unit 5 rewards, practised on projects that are ours and never on a CCEA task.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 16 to 67', h3: 'After the GCSE', p: 'A level study, data and AI, and adult retraining for people who started late and kept going.', courses: ['ai-ml-masterclass-teens', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an assistant can write the coursework, why should a teenager in Northern Ireland learn to code?',
    intro: 'Because of who signs the form, and because of what the other seventy per cent asks for.',
    p1: 'Take the practical unit first. A teacher has to certify that the work submitted is the candidate\'s own, and they supervise the 36 hours in which it is produced. Handing in generated code is not a shortcut here; it is a declaration somebody else has to sign and a conversation nobody wants. Then take the rest of the qualification. Seventy per cent of the marks sit in two written examinations, one of an hour and one of ninety minutes, and no assistant sits either of them.',
    p2: 'There is a better use for the tools, and it is the one we teach. Ask an assistant to explain why a loop does not terminate, or to propose three test cases you had not thought of, then check whether it was right. That builds the judgement the examination rewards. Copying its output builds nothing and leaves a student defenceless in June.',
    closer: 'So the honest case is not that AI will not write code. It is that Northern Ireland measures the student, in a supervised room and on paper, and a student who cannot work unaided has nowhere to stand.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Coleraine to Crossmaglen, taught at a kitchen table',
    intro: 'Eleven districts, most of them rural, and one lesson that reaches all of them equally.',
    cells: [
      { h3: 'No journey involved', p: 'A pupil in Fermanagh gets the teaching a pupil in south Belfast gets, without an hour in a car in each direction.' },
      { h3: 'CCEA vocabulary used', p: 'Units, routes, controlled assessment and the terminal rule, named the way the specification names them.' },
      { h3: 'A free lesson first', p: 'Real teaching, ending with a frank view of level and a recommended course. Nothing is taken until after it.' },
      { h3: 'Small groups by level', p: 'Five to ten learners at one stage, drawn from across the UK and beyond so a group exists at a usable hour.' },
      { h3: 'Taught in English', p: 'We do not teach through Irish or Ulster-Scots. A bilingual learner is welcome; a lesson in another language is not something we offer.' },
      { h3: 'Agreed in UK time', p: 'Teachers work from India, four and a half hours ahead in summer and five and a half in winter, and every slot is fixed in UK time.' }
    ],
    spec: { title: 'Ask the department one question', p: 'Which language does your school use for the Unit 5 solution: Python, Java or C#? The answer costs two minutes at a parents\' evening and decides what practice at home is worth doing for the next two years. Nothing else a parent can ask about this subject has a better return.' }
  },

  fees: {
    h2: 'What classes cost in Northern Ireland',
    intro: 'Three prices, the same in every district.',
    first: 'Forty minutes of teaching on something real, closing with a straight answer about where the learner stands.',
    group: 'Two lessons most weeks, alongside five to ten others working at the same stage.',
    private: 'Two lessons most weeks, with one screen for the teacher to watch and no one else waiting.',
    closer: 'Billing is in US dollars, which is how we price outside India, and we publish no pound equivalent. Payment starts only once a course and a weekly slot are agreed after the free lesson. Holidays, a lesson missed through illness and switching between a group and one-to-one teaching are all covered on the pricing page.'
  },

  reviewsH2: 'What six families wrote, left exactly as they wrote it',

  book: {
    h2: 'Tell us about the learner',
    intro: 'Year group and interests are enough to go on. The free lesson might build a small game, write a first typed program, or take apart a test plan the way Unit 5 asks for one.',
    success: 'Thank you. Your class request from Northern Ireland has reached the team.'
  },

  faq: {
    h2: 'Coding classes in Northern Ireland: questions',
    intro: 'About CCEA Digital Technology, the two routes and how lessons work.',
    items: [
      { q: 'Is there one Digital Technology GCSE or two?', a: 'Two. CCEA offers GCSE Digital Technology (Multimedia) and GCSE Digital Technology (Programming). Both begin with the same compulsory Unit 1, then split into two units each.' },
      { q: 'Can a student mix units from both routes?', a: 'No. The specification says students "can only be entered for Units 1, 2 and 3 or Units 1, 4 and 5". The routes are sealed off from one another.' },
      { q: 'How are the marks divided?', a: 'Unit 1 is a one-hour written examination worth 30 per cent. The second unit is a written examination of 1 hour 30 minutes worth 40 per cent. The third unit is controlled assessment worth 30 per cent.' },
      { q: 'Which programming language is used?', a: 'CCEA permits three. Unit 5 states that students "must use one of the following languages in their completed solution: Python, Java or C#". The school chooses which one it teaches.' },
      { q: 'What is the controlled assessment?', a: 'A scenario-based task set by CCEA, worth 60 marks and taking a maximum of 36 hours. CCEA publishes a new task each June, teachers mark it and CCEA moderates the results.' },
      { q: 'Will you help with my child\'s controlled assessment?', a: 'No. The task is set, supervised and certified inside the school, and outside help would put an entry at risk. We teach the skills it draws on, using our own projects.' },
      { q: 'What is the terminal rule?', a: 'Students must take at least 40 per cent of the assessment, by unit weighting, at the end of the course. The specification is otherwise unitised, so schools have some freedom about sequencing.' },
      { q: 'Why do CCEA grades look different?', a: 'CCEA awards its GCSEs on a nine-grade scale from A* to G that includes a C*. A pupil whose school enters some subjects with an English board may hold certificates on both scales.' },
      { q: 'What can the programming route lead to?', a: 'The specification says it "provides a sound basis for further study in both GCE Digital Technology and GCE Software Systems Development", which are the two post-16 routes CCEA offers in this area.' },
      { q: 'Do you teach in Irish?', a: 'No. Our lessons are in English. We say so plainly rather than let an Irish-medium family find out after they have booked.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    html: 'Four school systems sit side by side on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a>, which also carries a link to every page in this series. <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> assesses the same subject in almost the opposite way. Anything a pupil here could enter between now and next summer is listed on the <a class="cg-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.',
    h2: 'The other nations',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Northern Ireland and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' }
  ],

  personalityCss: `
.cg-root.cg-nir .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-nir .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-nir .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; font-size: 0.8rem; }
.cg-root.cg-nir .cg-section-head h2 { max-width: 24ch; }
.cg-root.cg-nir .cg-callout { border-left-width: 8px; border-radius: 0 6px 6px 0; }
.cg-root.cg-nir .cg-callout h3 { letter-spacing: 0.01em; }
.cg-root.cg-nir .cg-table th { text-transform: none; letter-spacing: 0.01em; }
.cg-root.cg-nir .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-nir .cg-align-code { font-weight: 700; letter-spacing: 0.04em; }
.cg-root.cg-nir .cg-grid-3 h3 { letter-spacing: -0.008em; }
.cg-root.cg-nir .cg-spec { border-top: 4px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Northern Ireland. CCEA GCSE Specification in Digital Technology, subject codes 2650 and 2610, first teaching September 2017, first assessment Summer 2018, first award Summer 2019, marked "Updated: 17 September 2019", read from CCEA\'s published PDF because ccea.org.uk returns an automated-access error on its HTML subject pages. Two qualifications share the subject: "GCSE Digital Technology (Multimedia), a digital authoring qualification focusing on multimedia; and GCSE Digital Technology (Programming), a digital development qualification focusing on programming"; "All students study Unit 1: Digital Technology. They then choose either the multimedia route or the programming route"; "Students cannot combine units from each route; they can only be entered for Units 1, 2 and 3 or Units 1, 4 and 5." Structure: Unit 1 external written examination 1 hour, 30 per cent, Summer from 2018; Unit 2 or Unit 4 external written examination 1 hour 30 mins, 40 per cent, Summer from 2019; Unit 3 or Unit 5 controlled assessment, 30 per cent, Summer from 2019. Terminal rule: "Students must take at least 40 percent of the assessment (based on unit weightings) at the end of the course as terminal assessment." Unit 5: "Students must use one of the following languages in their completed solution: Python, Java or C#." Controlled assessment: task setting control "high. This means that we set the task"; "We will publish a new scenario-based task for Unit 3 and Unit 5 in June each year"; "The controlled assessment task is worth 60 marks and will take a maximum of 36 hours to complete"; task taking and task marking both "medium"; "Candidates can work in pairs or groups, but it is essential that the teacher can identify individual contributions"; "teachers mark the task and we moderate the results"; "Candidates must reference appropriately all the materials they use in their work, including any online resources." Assessment objectives overall: AO1 30, AO2 46, AO3 24, "A tolerance of +/-3% is applicable". Grading: "We award GCSE qualifications on a grade scale from A* to G, with A* being the highest. The nine grades available are as follows: A* A B C* C D E F G." Progression: the GCSE "provides a sound basis for further study in both GCE Digital Technology and GCE Software Systems Development". Curriculum context: "the statutory Northern Ireland Curriculum", Key Stage 3 and Key Stage 4, Cross-Curricular Skills (Communication, Using Mathematics, Using ICT) and Thinking Skills and Personal Capabilities. Corroboration for the 2026 to 2027 cycle: Wallace High School GCSE Prospectus September 2026-2027, which states its students "will follow the programming route obtaining a GCSE with the title Digital Technology (Programming)", gives Unit 1 at 30 per cent, Unit 4 at 40 and Unit 5 at 30, teaches Python, and links to the same 2017 CCEA microsite. Population: NISRA, Census 2021 main statistics for Northern Ireland phase 1 bulletin: census day 21 March 2021; "The usually resident population of Northern Ireland on census day, 21 March 2021, was 1,903,175"; Table 1 rounded display figures by the 11 local government districts, Belfast 345,400 (18.1 per cent) down to Fermanagh and Omagh 116,800 (6.1 per cent), with NISRA\'s own note that "for display purposes figures are appropriately rounded but full figures are available in the Census 2021 tables".',
    localProject: 'One subject name, two qualifications, and no mixing. The page is built on the single sentence "Students cannot combine units from each route", because a Northern Irish family can choose Digital Technology on a Year 10 option form and reach Year 12 with no programming assessed at all. Two further edges follow from it: CCEA names three permitted languages for the Unit 5 solution rather than one, so the decisive fact is local to a school and a parent has to ask for it; and the practical unit is 36 hours of supervised, teacher-marked, CCEA-moderated coursework from a scenario republished every June. AI angle: a teacher signs an authenticity declaration for the coursework and 70 per cent of the marks sit in two written papers, so an assistant is useful for interrogating code and useless as a substitute. Lesson family: a qualification whose name conceals a branching decision, and whose practical component is assessed inside the school rather than sealed out of it; deliberately the mirror image of the Welsh pre-release rule and distinct from the English NEA pages, which turn on acknowledgement and malpractice.',
    requiredMentions: [
      'cannot combine units from each route',
      'Python, Java or C#',
      '36 hours',
      '60 marks',
      'in June each year',
      '1,903,175',
      'Fermanagh and Omagh',
      'terminal assessment',
      'C*',
      'Software Systems Development'
    ],
    sources: [
      { claim: 'CCEA GCSE Specification in Digital Technology: the two routes, the no-mixing rule, unit structure and weightings, the terminal rule, the three permitted languages, the controlled assessment rules, assessment objective weightings, the A* to G nine-grade scale and progression to GCE Software Systems Development.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Digital%20Technology%20(2017)/GCSE%20Digital%20Technology%20(2017)-specification-Standard_1.pdf' },
      { claim: 'CCEA subject microsite for GCSE Digital Technology (2017). Returns an automated-access error; the specification PDF above was used instead and no attempt was made to work around the block.', url: 'https://ccea.org.uk/key-stage-4/gcse/subjects/gcse-digital-technology-2017' },
      { claim: 'A Northern Irish school teaching this specification in the 2026 to 2027 cycle, with the same units, weightings and route title, using Python.', url: 'https://www.wallacehigh.org/wp-content/uploads/2025/12/GCSEProspectus-2026-27-1.pdf' },
      { claim: 'NISRA Census 2021 main statistics phase 1 bulletin: the 1,903,175 total, census day, and the rounded population table for the 11 local government districts.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-main-statistics-for-northern-ireland-phase-1-statistical-bulletin-demography-and-households.pdf' }
    ],
    rejectedClaims: [
      'Exact Census 2021 populations for the 11 districts: the bulletin publishes rounded display figures that do not sum to the stated national total, and the exact figures live in commissioned tables not read for this build. The page reproduces the rounded figures as published and never adds them up.',
      'That Northern Ireland grades all GCSEs A* to G: the quoted scale is CCEA grading its own qualifications, and pupils here also sit GCSEs from English boards graded 9 to 1. The claim is scoped to CCEA throughout.',
      'The SEAG entrance assessment format, paper count, timings or scoring: only third-party tutoring sites were found stating these, and the official SEAG domain did not resolve. Left entirely to a dedicated page once a CCEA, Education Authority or gov.uk source states it.',
      'Which language any particular Northern Irish school teaches: CCEA permits three and the choice is local, so the page tells parents to ask their department rather than asserting a national norm.',
      'Counts of Irish-medium or integrated schools: not read at a primary source for this build, so the page says only that we teach in English.',
      'Entry fees for the qualification: published in pounds, and this site prices in one currency.'
    ]
  }
};
