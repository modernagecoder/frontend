'use strict';
// Harrow (cg- London borough page, UK cluster Phase 1 preview). Named sources only.
// Spine: a format check is not a fact check. The learner validates postcodes at three levels:
// shape (the structure ONS describes: an outward code of 2 to 4 characters and an inward code of three),
// existence (postcodes.io, which serves ONS Postcode Directory data) and place (the local authority it
// returns). Our run of 19 September 2026 on 16 inputs, starting from the six library postcodes Harrow
// Council publishes: 14 have the right shape, 12 exist, 10 are in Harrow. HA3 0ZZ and HA99 9ZZ are
// well formed but do not exist; HA1 9ZZ looks invented and exists (Marlborough ward); HA0 4AA is in
// Brent and HA8 7AA in Barnet; "HAI 1GX" (letter I for the digit 1) and "HA1 1GXX" fail on shape.
// Lesson family: input validation, shape versus existence versus meaning. Checked free site-wide on
// 20 September 2026 (input validation, sanitising: 0 dossiers); distinct from regex parsing (Roermond,
// Howth), identifiers losing leading zeros (As Suwaiq) and a name is not an identifier (Longford).
// Place facts read at their own sources: Harrow Council (six libraries with addresses; public computers;
// Headstone Manor museum dates), Harrow School (the 1572 charter), Nomis TS001 (261,203), TfL Unified API
// (lines at Harrow-on-the-Hill), ONS postal geography. The manor's building dates were not found on a
// page we could read and are not used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HARROW', blurb: 'Six libraries, a 1572 charter and a project on checking postcodes three ways.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-harrow-london',
  code: 'hrw',
  accent: '#961C9C',
  accentRationale: 'Harrow: a deep violet from the solver (5.79:1 on every paper tint), far from the London red, the UK hub blue and the UK best-page green',
  pageType: 'governorate',
  place: {
    name: 'Harrow',
    eyebrow: 'London Borough of Harrow',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Harrow, London',
  title: 'Coding Classes in Harrow, London | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Harrow families, from Pinner and Stanmore to Wealdstone and Roxeth, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and Python classes for Harrow, on a page about six libraries, a charter from 1572, and a postcode that can look perfect and still be wrong.',
  twitterDescription: 'Harrow coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Harrow Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Harrow, taught live in English.'
  },

  h1: 'Coding classes in Harrow',
  capsuleQ: 'What are the best coding classes in Harrow?',
  capsule: 'Harrow is a north-west London borough of 261,203 people at the 2021 Census, with six public libraries run by Harrow Council, a school whose founder was granted a royal charter in 1572, and Harrow-on-the-Hill station on the Metropolitan line. A class worth choosing here fits a learner\'s week and teaches them to check their own work, which is what this page\'s project is about: telling a postcode that merely looks right from one that is real, and a real one from one that is actually in Harrow. Our lessons are taught live over video from India, so a child in Pinner and a parent in Wealdstone can each join a class at their level, aged 6 to 67, with five to ten others or one to one. The first lesson is free; a group place then costs USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Type a postcode into a website form and three different questions hide behind the green tick. Does it look like a postcode? Does it exist? And is it where the person says they live? Most forms only ask the first. We took the six postcodes Harrow Council prints for its libraries and added ten awkward ones of our own: lower case, missing spaces, a letter I in place of a 1, codes that look invented, and codes from next door. A pattern check passed 14 of the 16. Only 12 of those turned out to exist. And only 10 were in Harrow at all, because HA0 4AA is in Brent and HA8 7AA is in Barnet, however much they look like Harrow. The gap between looking valid and being true is where a lot of real software goes wrong, and it is the thread of this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Harrow.',

  picks: {
    eyebrow: 'Course picks for Harrow',
    h2: 'Four courses for Harrow learners',
    intro: 'A Year 3 child in Kenton who draws games in the margins of exercise books, a Year 9 student in Stanmore weighing up GCSE options, a sixth former in Rayners Lane who likes data, and a parent in Headstone who wants a spreadsheet to check itself. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch quiz that only accepts sensible answers, the youngest way to meet the idea that a program should check what it is given.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, where a program asks for an answer, tidies it up and tells the user politely what was wrong with it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for Key Stage 3 and 4, with real validation: patterns, lookups and clear error messages, built on Harrow postcodes.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who handle forms and lists at work: catching bad entries before they spoil a report or an AI summary.' }
    ]
  },

  sections: [
    {
      id: 'harrow', tint: '', eyebrow: 'Harrow today',
      h2: 'A borough of 261,203, six libraries and a charter from 1572',
      intro: 'Every figure below comes from the organisation that publishes it, and each row names its source.',
      body: [
        { kind: 'table', caption: 'Harrow from its own sources', head: ['Measure', 'Figure', 'Source'], rows: [
          ['Usual residents, Census 2021', '261,203', 'Office for National Statistics, table TS001 on Nomis'],
          ['Public libraries', '6', 'Harrow Council'],
          ['Royal charter for the school at Harrow on the Hill', '1572', 'Harrow School'],
          ['Headstone Manor museum opened', '1986, reopened 2017', 'Harrow Council'],
          ['Services listed at Harrow-on-the-Hill', 'Metropolitan line, Chiltern Railways, 21 bus routes', 'TfL open data, checked 20 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Six libraries', p: 'Harrow Council lists six: Greenhill, Kenton, Pinner, Roxeth, Stanmore and Wealdstone. Each has public computers, and the council\'s terms give library members the first two hours free, in sessions of up to 60 minutes and no more than two sessions a day.' },
          { h3: 'A charter from 1572', p: 'Harrow School records that John Lyon, a land-owning farmer from the village of Preston, was granted a royal charter by Queen Elizabeth I in 1572 to endow a parish school in Harrow on the Hill as a free grammar school for 30 local boys. Its family of schools now includes the John Lyon School.' },
          { h3: 'A museum in an old manor', p: 'Headstone Manor is Harrow\'s museum. Harrow Council says the museum opened in 1986 and, after major renovation, the site reopened in 2017.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Six libraries, six postcodes',
      h2: 'Where Harrow\'s libraries are, and which ward each postcode falls in',
      intro: 'The addresses are Harrow Council\'s. The ward in the last column is what postcodes.io returned for each postcode on 19 September 2026, and it is the starting data for the project below.',
      body: [
        { kind: 'table', caption: 'Harrow Council\'s six libraries', head: ['Library', 'Address', 'Ward returned for the postcode'], rows: [
          ['Greenhill', 'Perceval Square, College Road, Harrow, HA1 1GX', 'Greenhill'],
          ['Kenton', '141 Kenton Lane, Harrow, HA3 8UJ', 'Kenton East'],
          ['Pinner', '78 Marsh Road, Pinner, HA5 5NQ', 'Pinner South'],
          ['Roxeth', 'Northolt Road, South Harrow, HA2 8EQ', 'Roxeth'],
          ['Stanmore', '8 Stanmore Hill, Stanmore, HA7 3BQ', 'Stanmore'],
          ['Wealdstone', 'The Wealdstone centre, 38/40 High Street, Wealdstone, HA3 7AE', 'Wealdstone South']
        ] },
        { kind: 'p', text: 'A library computer is where plenty of learners first write code, and it is also a reasonable place to take an online lesson when home is noisy: the council offers free Wi-Fi to library members. Our lessons need a laptop or desktop, working audio and a steady connection, and a library can provide all three.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A postcode can look perfect, exist, and still not be in Harrow',
      intro: 'Learners write a postcode checker with three separate questions in it, and run it on Harrow\'s library postcodes plus ten difficult cases.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Is it the right shape?', p: 'The Office for National Statistics describes a postcode as an outward code of 2 to 4 characters and an inward code of three: a digit then two letters. After trimming spaces and changing to capitals, a pattern can test that in one line.' },
          { h3: '2. Does it exist?', p: 'Shape says nothing about reality. Learners ask postcodes.io, a free service built on the ONS Postcode Directory, whether each well-formed code is a real, live postcode.' },
          { h3: '3. Is it where we think?', p: 'A real postcode still has to be in the right place. The same service returns the local authority and ward, and a code starting HA can belong to more than one borough.' }
        ] },
        { kind: 'table', caption: 'Our run, 19 September 2026: 16 inputs, three questions', head: ['Input', 'Right shape', 'Exists', 'Local authority'], rows: [
          ['The six library postcodes', 'Yes', 'Yes', 'Harrow, in six different wards'],
          ['ha5 5nq, HA55NQ, and HA2 8EQ with stray spaces', 'Yes, once tidied', 'Yes', 'Harrow'],
          ['HA1 1GXX', 'No: one letter too many', 'Not asked', 'Not asked'],
          ['HAI 1GX', 'No: a letter I where the digit 1 belongs', 'Not asked', 'Not asked'],
          ['HA3 0ZZ and HA99 9ZZ', 'Yes', 'No', 'None'],
          ['HA1 9ZZ', 'Yes', 'Yes, though it looks invented', 'Harrow, Marlborough ward'],
          ['HA0 4AA', 'Yes', 'Yes', 'Brent'],
          ['HA8 7AA', 'Yes', 'Yes', 'Barnet'],
          ['Totals', '14 of 16', '12 of 16', '10 in Harrow']
        ] },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant for a UK postcode validator and you will very likely get a tidy regular expression that accepts HA99 9ZZ and HA0 4AA without complaint, because they have the right shape. The code is not wrong; it answers the question of shape and nothing else. Whether a postcode exists needs an up-to-date list, and whether it is in Harrow needs a boundary. A learner who has seen 14 pass, 12 exist and 10 belong knows to ask which of the three questions a check is really answering, before a form, a mailing list or a delivery route depends on it.' }
      ]
    },
    {
      id: 'habits', tint: 'tint', eyebrow: 'Checking what people type',
      h2: 'Five rules for any input a program accepts',
      intro: 'For forms, spreadsheets, school projects and anything that takes what a person typed and trusts it. Learned on postcodes because every family in Harrow has one.',
      body: [
        { kind: 'table', caption: 'Validating input without fooling yourself', head: ['Rule', 'In practice', 'What it catches'], rows: [
          ['Tidy before you test', 'Trim spaces, change to capitals, allow one space in the middle', 'Rejecting a real postcode because it was typed in lower case'],
          ['Test the shape', 'A pattern for the structure the publisher documents', 'Typos such as a letter I or O in place of 1 or 0'],
          ['Test existence separately', 'Look the value up in an authoritative, current list', 'Well-formed values that are simply not real'],
          ['Test meaning separately', 'Ask the list where the value belongs, and compare with what you expected', 'Real values from the wrong place'],
          ['Say which test failed', 'Tell the person exactly what to fix', 'Forms that reject people with no explanation']
        ] },
        { kind: 'p', text: 'The scale explains why a pattern is never enough. ONS counts 124 postcode areas in the UK, 3,118 postcode districts, 12,463 sectors and approximately 1.79 million live postcodes, and it warns that postcode boundaries mostly do not align with other geographic boundaries. A pattern can describe all 1.79 million in one line and still accept millions of codes that were never issued.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Harrow Council, Harrow School, the John Lyon School, Headstone Manor, Transport for London or postcodes.io, and nothing here suggests one. The library addresses are the council\'s; the wards and the run of 16 inputs are our own test on 19 September 2026.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Metropolitan line, Chiltern trains, 21 buses, and a lesson that needs none of them',
      intro: 'Harrow families plan around the stations. A lesson online plans around nothing but the learner\'s timetable.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Harrow-on-the-Hill', p: 'TfL\'s open data lists the Metropolitan line, Chiltern Railways and 21 bus routes at Harrow-on-the-Hill, among them the Superloop routes SL9 and SL10 and the night buses N18 and N140.' },
          { h3: 'Next door, by postcode', p: 'HA postcodes run beyond the borough. In our test HA0 4AA belonged to Brent, around Wembley, and HA8 7AA to Barnet, around Edgware, which matters to any form that assumes HA means Harrow.' },
          { h3: 'No journey at all', p: 'A learner in Hatch End and a learner in South Harrow join the same online group from their own desks, with no bus, no train and no car park.' }
        ] },
        { kind: 'spec', title: 'Harrow and the rest of London', p: 'Harrow is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all, and links each one as its page goes live.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a quiz that checks its answers to a form that checks its data',
    intro: 'The first lesson finds a learner\'s level from what they can actually do, which is not always what their school year suggests.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Answers that make sense', p: 'Children build quizzes and games that refuse silly answers and say why, the earliest form of input checking.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Tidy, then test', p: 'Python programs that clean up what a user types before deciding whether it is acceptable.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Patterns and lookups', p: 'Regular expressions, lookups against real lists and helpful error messages, the tools behind every good form.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Clean data at work', p: 'Adults put checks in front of spreadsheets and forms, so errors are caught at the door rather than in the report.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a postcode checker for you in seconds. Why should a Harrow teenager learn to test it?',
    intro: 'Because a check that answers the wrong question still gives a confident green tick.',
    p1: 'A validator written by an assistant will usually check shape well. It will accept HA99 9ZZ, which does not exist, and HA8 7AA, which is real but in Barnet, and it will reject nothing it should accept. For a school project that may be fine. For a delivery service, a council form or a list of club members in Harrow, it is the start of a quiet mess, because nothing downstream knows that the tick only ever meant the right shape.',
    p2: 'A learner who has run the three questions on their own borough carries the habit into every form they build and every dataset they inherit: tidy it, check its shape, check it is real, check it means what you think, and say plainly which test failed. The assistant can write each check in a moment. Knowing that there are three, and which one a given job needs, is the programmer\'s part.',
    closer: 'So the case for a Harrow child learning to code in 2026 is not that software will vanish without them. It is that every system people rely on is only as good as the checks at its front door, and somebody has to design them properly.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Hatch End to South Harrow, taught at your desk',
    intro: 'Every part of the borough is the same distance from an online lesson.',
    cells: [
      { h3: 'Learn where you are', p: 'At home, or at a library computer when home is busy. The lesson moves with the learner, not the other way round.' },
      { h3: 'School stages as you know them', p: 'Key Stages, Year 9 options, GCSEs and A levels are called by their English names, and every lesson is in English.' },
      { h3: 'Try it before paying', p: 'The opening lesson is a real piece of work with a teacher, and ends with an honest suggestion of level and course. No card is needed.' },
      { h3: 'Small, matched groups', p: 'Five to ten learners at the same stage, some from Harrow and some from further afield, so that a group exists at a sensible hour.' },
      { h3: 'Around the school calendar', p: 'Lessons usually run twice a week, and the family and teacher agree breaks for holidays, half terms and revision.' },
      { h3: 'Time zones handled', p: 'Teachers work on India time, five and a half hours ahead of the UK in winter and four and a half in summer, and every lesson is booked and shown in UK time.' }
    ],
    spec: { title: 'Six libraries, one online group', p: 'Harrow has six libraries and many schools, but a coding group only works when five learners share a level, a subject and an hour, which is why ours draw on Harrow and beyond.' }
  },

  fees: {
    h2: 'What classes cost in Harrow',
    intro: 'The same three prices for every family, wherever they live in the borough.',
    first: 'A full lesson on a real task, ending with a suggested level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month with a teacher for one learner.',
    closer: 'Fees are set in US dollars, the rate for all families outside India, and there is no pound price list. Nothing is charged until the free lesson has settled a course and a regular slot; the pricing page explains pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews, left exactly as written',

  book: {
    h2: 'Tell us about the learner',
    intro: 'Their age or school year and what they enjoy is enough. The first task might be a Scratch quiz, a first Python program that checks what it is given, or the postcode project on this page.',
    success: 'Thank you. Your Harrow class request has reached the team.'
  },

  faq: {
    h2: 'Harrow coding class questions',
    intro: 'About the borough, its libraries, the project and the lessons.',
    items: [
      { q: 'How many people live in Harrow?', a: 'The 2021 Census counted 261,203 usual residents in the London Borough of Harrow, according to the Office for National Statistics table TS001.' },
      { q: 'How many libraries does Harrow have?', a: 'Six, according to Harrow Council: Greenhill, Kenton, Pinner, Roxeth, Stanmore and Wealdstone. Members get free Wi-Fi, and the first two hours on a library computer are free.' },
      { q: 'What is the postcode project?', a: 'Learners check postcodes three ways: shape, existence and place. On Harrow\'s six library postcodes plus ten awkward cases, 14 of 16 had the right shape, 12 existed and 10 were in Harrow; HA0 4AA is in Brent and HA8 7AA in Barnet.' },
      { q: 'Is every HA postcode in Harrow?', a: 'No. In our test HA0 4AA was in Brent and HA8 7AA in Barnet. ONS notes that postcode boundaries mostly do not align with other geographic boundaries, so a postcode area and a borough are different things.' },
      { q: 'When was Harrow School founded?', a: 'Harrow School records that John Lyon was granted a royal charter by Queen Elizabeth I in 1572 to endow a parish school in Harrow on the Hill as a free grammar school for 30 local boys.' },
      { q: 'What time are lessons for Harrow learners?', a: 'A regular slot is agreed after the free lesson, depending on which groups have space at the learner\'s level. India time is five and a half hours ahead of the UK in winter and four and a half in summer, and times are always confirmed in UK time.' },
      { q: 'Can my child take lessons from a library?', a: 'Yes, if the library\'s computers and connection allow it; Harrow\'s libraries offer free Wi-Fi to members. Most learners take lessons at home, and a headset helps anywhere public.' },
      { q: 'Is there a Modern Age Coders centre in Harrow?', a: 'No. All teaching is live and online, and no Harrow premises or UK office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.', boiler: true },
      { q: 'What do coding classes in Harrow cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'The rest of London, and the whole UK',
    html: 'All 32 boroughs and the City are listed on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, which links each one as it goes live. For AI and machine learning in the capital there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the four school systems of the UK are on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Harrow and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-online-coding-classes-uk', label: 'Choosing a class, UK' }
  ],

  personalityCss: `
.cg-root.cg-hrw .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hrw .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-hrw .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hrw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-hrw .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-hrw .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-hrw .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-hrw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrw .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-hrw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hrw .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Harrow. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000015): 261,203 usual residents. Harrow Council, Harrow library branches: "There are six libraries in Harrow": Greenhill library, Perceval Square, College Road, Harrow, HA1 1GX; Kenton library, 141 Kenton Lane, Harrow, HA3 8UJ; Pinner library, 78 Marsh Road, Pinner, HA5 5NQ; Roxeth library, Northolt Road, South Harrow, HA2 8EQ; Stanmore library, 8 Stanmore Hill, Stanmore, HA7 3BQ; Wealdstone library, The Wealdstone centre, 38/40 High Street, Wealdstone, HA3 7AE. Harrow Council, public computers: "The first two hours: free of charge"; "valid for sessions of no more than 60 minutes"; "restricted to no more than two sessions in one day"; "Wi-Fi is provided free of charge in our libraries" with library membership. Harrow Council, Headstone Manor: "The museum was opened in 1986. After major renovations, the site reopened in 2017." Harrow School, John Lyon\'s Foundation: "John Lyon, a land-owning farmer from the village of Preston in the London Borough of Brent"; "In 1572, John Lyon was granted a Royal Charter by Queen Elizabeth I to endow a parish school in Harrow on the Hill as a free grammar school for 30 local boys"; the Harrow Family of Schools includes John Lyon School. TfL Unified API StopPoint 940GZZLUHOH, 20 September 2026: modes bus, national-rail, tube; lines Metropolitan, Chiltern Railways and 21 bus routes (114, 140, 182, 183, 223, 258, 340, 395, 483, 640, H9, H10, H11, H14, H17, H18, H19, N18, N140, SL9, SL10). ONS postal geography: "Postcodes are alphanumeric references comprising an outward code of 2-4 characters and an inward code of three characters"; 124 postcode areas, 3,118 districts, 12,463 sectors, approximately 1.79 million live postcodes; "Postcode boundaries mostly do not align with other geographic boundaries."',
    localProject: 'A format check is not a fact check. Three questions per input: shape (pattern from the ONS description, after trimming and upper-casing), existence (postcodes.io, serving ONS Postcode Directory data) and place (local authority returned). Run of 19 September 2026 on 16 inputs: the six Harrow library postcodes (all Harrow, wards Greenhill, Kenton East, Pinner South, Roxeth, Stanmore, Wealdstone South), three tidying cases (ha5 5nq, HA55NQ, spaced HA2 8EQ), HA1 1GXX and HAI 1GX (fail shape), HA3 0ZZ and HA99 9ZZ (shape ok, do not exist), HA1 9ZZ (looks invented, exists, Marlborough ward), HA0 4AA (Brent, Wembley Central), HA8 7AA (Barnet, Edgware). Totals 14 shape, 12 exist, 10 Harrow. AI angle: an assistant\'s regex answers shape only. Lesson family: input validation, shape versus existence versus meaning; checked free on 20 September 2026 against every dossier (input validation, sanitising: 0) and distinct from regex parsing (Roermond, Howth), lost leading zeros (As Suwaiq), name versus identifier (Longford, Friesland) and a moved boundary (Mahdah).',
    requiredMentions: [
      '261,203',
      'Perceval Square',
      'Kenton Lane',
      'Marsh Road',
      'Stanmore Hill',
      'Wealdstone centre',
      'John Lyon',
      '30 local boys',
      'postcodes.io',
      'HA99 9ZZ',
      '1.79 million',
      '12,463'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Harrow E09000015: 261,203 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?date=latest&geography=E09000015&c2021_restype_3=0&measures=20100' },
      { claim: 'Harrow Council: "There are six libraries in Harrow", with the six addresses and postcodes.', url: 'https://www.harrow.gov.uk/libraries/harrow-library-branches' },
      { claim: 'Harrow Council: public computers, first two hours free, sessions of no more than 60 minutes, no more than two a day; free Wi-Fi for members.', url: 'https://www.harrow.gov.uk/libraries/public-computers-harrow-libraries' },
      { claim: 'Harrow Council: "The museum was opened in 1986. After major renovations, the site reopened in 2017."', url: 'https://www.harrow.gov.uk/health-leisure/headstone-manor' },
      { claim: 'Harrow School: John Lyon, a farmer from Preston, granted a Royal Charter by Queen Elizabeth I in 1572 for a free grammar school for 30 local boys; the Harrow Family of Schools includes John Lyon School.', url: 'https://www.harrowschool.org.uk/further-information/about-the-foundation-and-family' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUHOH (Harrow-on-the-Hill), 20 September 2026: Metropolitan, Chiltern Railways and 21 bus routes including SL9, SL10, N18 and N140.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUHOH' },
      { claim: 'ONS postal geography: outward code 2-4 characters and inward code three; 124 areas, 3,118 districts, 12,463 sectors, about 1.79 million live postcodes; postcode boundaries mostly do not align with other boundaries.', url: 'https://www.ons.gov.uk/methodology/geography/ukgeographies/postalgeography' },
      { claim: 'postcodes.io (ONS Postcode Directory data), bulk lookup of 19 September 2026: results as tabled on the page.', url: 'https://api.postcodes.io/' }
    ],
    rejectedClaims: [
      'Headstone Manor\'s building date (around 1310), moat and tithe barn details: found in search summaries only; the museum\'s buildings page returned 404 and Harrow Council\'s page gives only the museum dates.',
      'Neighbouring boroughs by shared boundary: not read at a primary source; only the two test postcodes in Brent and Barnet are stated.',
      'Individual Harrow state schools: not read at their own sites for this build, so none is named.',
      'Library computer charges after two hours and printing charges: priced in pounds, not printed on a USD-only page.',
      'Census ethnicity or country of birth for Harrow: never a standout; used only to order the build.'
    ]
  }
};
