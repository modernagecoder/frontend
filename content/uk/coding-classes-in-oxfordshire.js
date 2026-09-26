'use strict';
// Oxfordshire (cg- county index, UK cluster Phase 7, row 219). Five districts under Oxfordshire County Council.
// Spine: energy is not power. JET at UKAEA's Culham Campus, from GOV.UK: "producing 69 megajoules of high power over
// five seconds" in 2023 "using just 0.2. milligrams of fuel - the equivalent weight of a fruit fly" (16 December
// 2024); first plasma 25 June 1983; 2021 record 59 megajoules over 5 seconds; 1997 "16.1 MW and 21.7 megajoules";
// "over 103,000 'pulses'", each "typically lasts for 40 seconds"; originally designed to run for eight years (23 June
// 2023). An older page (19 January 2022) gives 1997 as "22.5 megajoules of fusion energy and 16 megawatts". Our run
// (scratchpad oxs/units.py, 26 September 2026) with a quantity class that carries kg, m and s exponents: 69 MJ / 5 s
// = 13.8 MW; 59 MJ / 5 s = 11.8 MW; 21.7 MJ / 16.1 MW = at least 1.35 s at peak (22.5 / 16 = 1.41 s); MJ + MW
// raises a TypeError; 69 MJ / 0.2 mg = 3.45 x 10^14 J/kg; a 3 kW kettle (our example) would take 6.39 hours to use
// 69 MJ; the two 1997 energy figures differ by 3.7 per cent. Lesson family: energy versus power and unit-checked
// arithmetic (dimensional analysis in code); screened 26 September 2026 (dimensional, megajoule: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (725,291, our sum); ONS built-up areas with our OA
// check (all 20 inside the county; Oxford BUA 170,805 spans Oxford, South Oxfordshire and Vale of White Horse; Didcot
// spans South Oxfordshire and Vale). Oxfordshire County Council term dates: no connection (twice); none printed.
// Diamond Light Source pages returned 403 (not retried).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'OXFORDSHIRE', blurb: 'Five districts, twenty towns, and the Culham fusion records rewritten as a lesson in why megajoules and megawatts never add.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-oxfordshire',
  code: 'oxs',
  accent: '#0B104C',
  accentRationale: 'Oxfordshire: a deep midnight blue from the solver (14.19:1 on the lightest paper), darker and more violet than the Buckinghamshire navy',
  pageType: 'governorate',
  place: {
    name: 'Oxfordshire',
    eyebrow: 'County of Oxfordshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Oxford', href: '/best-coding-class-in-oxford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Oxfordshire',
  title: 'Coding Classes in Oxfordshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, GCSE computing and maths classes across Oxfordshire, from Oxford and Banbury to Bicester, Didcot, Abingdon and Witney. First lesson free.',
  ogDescription: 'Coding classes for every Oxfordshire town, and a project built on the JET fusion records at Culham: a program that knows megajoules from megawatts and will not let you mix them.',
  twitterDescription: 'Oxfordshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'gcse-computer-science-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Computing Classes for Oxfordshire',
    description: 'Ability-placed online coding, Python, GCSE Computer Science, AI and mathematics for children, teenagers and adults across the five Oxfordshire districts, taught live in English.'
  },

  h1: 'Coding classes in Oxfordshire',
  capsuleQ: 'What are the best coding classes in Oxfordshire?',
  capsule: 'Oxfordshire is five districts holding 725,291 people at the 2021 Census. Oxford itself is by far the biggest place, and its built-up area reaches into two neighbouring districts; after it come Banbury, Bicester, Didcot, Abingdon and Witney, then a long list of market towns and villages. Wherever a family lives among them, the offer is the same. A teacher in India works with the learner live over video; the starting level comes from skill, not birthday, for anyone between 6 and 67; and the choice is a group of five to ten or a teacher to themselves, across programming, Python, GCSE computing, AI and maths. The Oxfordshire project starts at Culham, with the fusion records set there. The first lesson costs nothing; from then on group places are USD 100 monthly and private teaching USD 150.',
  lead: 'In 2023 the JET machine at Culham, near Abingdon, produced 69 megajoules of fusion energy over five seconds from 0.2 milligrams of fuel, about the weight of a fruit fly. Headlines often turn numbers like that into "megawatts", and the two words are not the same thing. A megajoule is an amount of energy; a megawatt is a rate, energy per second. Confuse them and a calculation can be wrong by any factor you like, with nothing on the page to warn you. This page\'s project builds a small piece of Python that knows the difference: every number carries its units, and the program refuses outright to add a megajoule to a megawatt. Then it uses JET\'s published records to show what the right sums say.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in Oxfordshire, please.',

  picks: {
    eyebrow: 'Courses for Oxfordshire',
    h2: 'Where Oxfordshire learners tend to begin',
    intro: 'A seven-year-old in Thame building a first game, a Year 6 in Wantage who asks how everything works, a Year 10 in Banbury sitting GCSE Computer Science, and a lab technician in Didcot who wants Python for the data piling up at work. Different routes; one free first lesson for each.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'From a first Scratch game to Minecraft and Roblox coding, with kid-safe AI and a taste of Python.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real Python for children, where numbers, variables and simple classes first appear.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'Taught to the board your child actually sits, AQA 8525, OCR J277 or Edexcel 1CP2.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python for working adults: automation, scraping and applied AI for documents, text and forecasts.' }
    ]
  },

  sections: [
    {
      id: 'oxfordshire', tint: '', eyebrow: 'Oxfordshire by the numbers',
      h2: 'Five districts, 725,291 people and an Oxford that crosses three of them',
      intro: 'District totals come from the 2021 Census on Nomis. Towns are ONS built-up areas, and our own sum of census output areas shows which councils each one touches.',
      body: [
        { kind: 'table', caption: 'Oxfordshire\'s five districts, usual residents at Census 2021, largest first', head: ['District', 'Usual residents', 'Main towns'], rows: [
          ['Oxford', '162,040', 'Oxford'],
          ['Cherwell', '161,016', 'Banbury, Bicester, Kidlington'],
          ['South Oxfordshire', '149,085', 'Didcot in part, Thame, Henley-on-Thames, Wallingford, Chinnor'],
          ['Vale of White Horse', '138,913', 'Abingdon-on-Thames, Wantage, Faringdon, Grove'],
          ['West Oxfordshire', '114,237', 'Witney, Carterton, Chipping Norton, Eynsham']
        ] },
        { kind: 'p', text: 'The ONS Oxford built-up area had 170,805 residents, more than the 162,040 of Oxford district, because the city\'s edges run into South Oxfordshire and the Vale of White Horse. Didcot, too, sits across the South Oxfordshire and Vale boundary. Outside that central belt the county is a scatter of market towns, from Banbury in the north to Henley in the south-east, and the distances between them are real: a weekly club in Oxford is not a practical option for most families in Chipping Norton or Faringdon.' },
        { kind: 'table', caption: 'Twenty Oxfordshire places over five thousand people, from the 2021 built-up area tables', head: ['Place', 'People in 2021', 'Place', 'People in 2021'], rows: [
          ['Oxford', '170,805', 'Faringdon', '8,625'],
          ['Banbury', '52,045', 'Wallingford', '8,455'],
          ['Bicester', '37,755', 'Grove', '7,945'],
          ['Didcot', '34,600', 'Chinnor', '7,265'],
          ['Abingdon-on-Thames', '33,175', 'Chipping Norton', '6,985'],
          ['Witney', '30,165', 'Shrivenham and Watchfield', '5,350'],
          ['Carterton', '17,950', 'Eynsham', '5,325'],
          ['Kidlington', '14,640', 'Sonning Common', '5,265'],
          ['Wantage', '13,105', 'Benson', '5,240'],
          ['Thame', '12,945', 'Henley-on-Thames', '11,780']
        ] },
        { kind: 'p', text: 'All twenty agree with our own count to within rounding, and none of them crosses the county line, which is unusual; most counties we have checked lose a town or two to a neighbour. Oxfordshire\'s larger places sit well inside its borders, with only Henley-on-Thames and Sonning Common close to Berkshire and Buckinghamshire.' },
        { kind: 'callout', h3: 'School calendars', p: 'Oxfordshire County Council\'s website did not respond when we tried to read its term dates on 26 September 2026, so we print none rather than rely on a copy. Academies can also set their own. Lesson breaks are arranged with each family, around the dates your own school sends home.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Oxfordshire project',
      h2: 'Megajoules, megawatts, and a program that will not let you mix them',
      intro: 'JET\'s published records, a little class that carries units with every number, and the answers that only make sense once the units are right.',
      body: [
        { kind: 'p', text: 'The learner writes a class for a quantity: a number plus the powers of kilograms, metres and seconds that describe it. A joule is kilograms times metres squared per second squared; a watt is the same divided by one more second. Dividing a quantity by a time subtracts one from the power of seconds automatically, so energy divided by time comes out as power without anyone remembering to say so. Adding two quantities checks first that their units match, and if they do not, the program stops with an error. That one rule catches a whole family of mistakes before they ever produce a number.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: JET\'s published figures through the unit-checked class', head: ['What we asked', 'From GOV.UK', 'Answer, with units checked'], rows: [
          ['Average power of the 2023 record', '69 megajoules over five seconds', '13.8 megawatts'],
          ['Average power of the 2021 record', '59 megajoules over five seconds', '11.8 megawatts'],
          ['Shortest time the 1997 record could have taken', '21.7 megajoules at a peak of 16.1 MW', 'At least 1.35 seconds'],
          ['Energy per kilogram of fuel in 2023', '69 megajoules from 0.2 milligrams', '3.45 x 10 to the 14 joules per kilogram'],
          ['Adding 69 megajoules to 16.1 megawatts', 'A mistake people make in headlines', 'Refused: the units do not match']
        ] },
        { kind: 'p', text: 'The third row shows why peak and average are different things. If JET\'s 1997 run had produced its peak power of 16.1 MW the whole time, 21.7 MJ would have taken 1.35 seconds; since power rises and falls during a pulse, the real run must have been longer. The fourth row is the one that makes people sit up. 3.45 times ten to the fourteen joules per kilogram is a number so large it needs comparison: the same 69 megajoules would run a 3 kilowatt kettle, our example, for about 6.4 hours, and it came from fuel weighing as much as an insect.' },
        { kind: 'p', text: 'There is one more lesson hidden in the sources. GOV.UK\'s 2023 page gives the 1997 record as 16.1 MW and 21.7 megajoules; a 2022 page from the same agency gives 16 megawatts and 22.5 megajoules. The energy figures differ by 3.7 per cent. We do not know which measurement or definition each page used, so we print both and say where each came from. A program can check units; it cannot tell you which of two official sources to believe, and a careful learner notices when they disagree.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Convert energy and time into power by hand and in Python, and explain in a sentence why "megawatts of energy" is a muddle.' },
          { h3: 'Ages 13 to 16', p: 'Build the quantity class with multiply, divide and add, and write tests that prove adding joules to watts raises an error.' },
          { h3: 'Ages 16 and up', p: 'Extend the class to prefixes and conversions, run JET\'s records through it, and write up the disagreement between the two sources.' }
        ] },
        { kind: 'callout', h3: 'What our figures are', p: 'The records, the fuel mass and the pulse facts are UKAEA\'s, quoted from GOV.UK. The averages, the minimum duration and the energy per kilogram are our own arithmetic, and the kettle is our illustration. None of it is a statement about fusion power stations or energy policy.' }
      ]
    },
    {
      id: 'culham', tint: 'deep', eyebrow: 'Why Culham',
      h2: 'Forty years of fusion experiments in an Oxfordshire village',
      intro: 'The county link, as the UK Atomic Energy Authority describes it on GOV.UK.',
      body: [
        { kind: 'table', caption: 'JET, from UKAEA news on GOV.UK', head: ['Fact', 'As published'], rows: [
          ['Where', 'UKAEA\'s Culham Campus in Oxfordshire'],
          ['First plasma', '25 June 1983; originally designed to run experiments for eight years'],
          ['Pulses', 'Over 103,000 by June 2023, each typically lasting 40 seconds'],
          ['2021 record', '59 megajoules over 5 seconds'],
          ['2023 record', '69 megajoules over five seconds, from 0.2 milligrams of fuel']
        ] },
        { kind: 'p', text: 'A machine designed for eight years that ran for forty is itself a lesson for anyone who writes software: things built to last a little while have a habit of lasting a long time, and the decisions made on day one follow them. JET\'s engineers kept a machine from 1983 doing new experiments into the 2020s by measuring carefully, recording everything and checking their units. Those are habits a thirteen-year-old can start practising this week.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with UKAEA, EUROfusion or Oxfordshire County Council, and nothing here suggests one. The published figures are theirs; the unit class, the calculations and any mistake in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> page covers the city, with its own weather project. <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> is across the Thames, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> to the north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Step by step',
    h2: 'From a number on screen to a number you can trust',
    intro: 'The free lesson decides the first step. Year group is a clue; what the learner can already do is the answer.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and measuring', p: 'Scratch projects with timers, scores and speeds, where children first see that a number means nothing without its unit.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Numbers with meaning', p: 'Python variables that hold measurements, and simple functions that convert minutes to seconds and grams to kilograms.', courses: ['python-ai-kids-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 13 to 18', h3: 'Classes and checks', p: 'Object-oriented Python, tests that must fail when they should, and the GCSE and A level topics built on them.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reliable numbers at work', p: 'Python that processes real data and reports with units and sources attached, so the numbers survive scrutiny.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and getting units right',
    h2: 'An AI will happily tell you JET produced 69 megawatts. Would you catch the mistake?',
    intro: 'Only if you know that the unit is part of the answer, not decoration.',
    p1: 'Language models write fluent sentences about energy, and fluent sentences mix up megajoules and megawatts as easily as people do, because both appear in the same articles. Ask one for JET\'s record and you may get the right number with the wrong unit, or a power figure computed from an energy figure without dividing by time. The sentence reads well; the physics is off by a factor of five.',
    p2: 'An Oxfordshire student who has written a class that refuses to add joules to watts reads such an answer differently. They check the unit, ask over what time, and redo the division. They also notice when two official sources disagree, as the 1997 figures do, and say so instead of silently picking one. Those habits make someone useful in any lab, office or classroom that now runs on AI-written text.',
    closer: 'So an Oxfordshire teenager should learn to program in 2026 to be the person who catches the wrong unit in a confident paragraph, whoever or whatever wrote it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical matters',
    h2: 'Banbury to Henley with no car and no bus',
    intro: 'Oxfordshire\'s towns are spread out and its roads are busy at school pick-up. An online lesson skips all of it.',
    cells: [
      { h3: 'Learn where you are', p: 'A bedroom in Carterton, a kitchen in Kidlington, a spare room in Wallingford. The teacher shares a screen and the learner types.' },
      { h3: 'The same words as school', p: 'Teachers talk about Year 9 options, mock exams and exam boards the way an Oxfordshire classroom does, always in English.' },
      { h3: 'No-cost first lesson', p: 'A real lesson with real work and a clear recommendation at the end. You will not be asked for card details.' },
      { h3: 'Peers who match', p: 'Your classmates, between five and ten of them, will have reached the same point as you, even if they log in from the far end of the country, which keeps the pace comfortable.' },
      { h3: 'Holidays that suit you', p: 'Typically two lessons a week, paused for your own school\'s breaks, since academies and council schools can differ.' },
      { h3: 'Times in UK time', p: 'Our teachers work on India time, 4.5 hours ahead of the UK in summer and 5.5 in winter. Every booking is written in UK time.' }
    ],
    spec: { title: 'Why groups follow level, not town', p: 'One city and nineteen smaller towns mean few places outside Oxford have enough learners at one stage on one evening. Level-based groups let a Faringdon learner and a Bicester learner share a class.' }
  },

  fees: {
    h2: 'Fees for Oxfordshire',
    intro: 'Identical fees in every Oxfordshire town and in every country except India.',
    first: 'A complete lesson of genuine work, with a recommended level and course.',
    group: 'Roughly eight lessons a month, five to ten learners at one level.',
    private: 'Roughly eight lessons a month, one teacher with one learner.',
    closer: 'We quote in US dollars for all families outside India and keep no pound prices. You pay nothing until the free lesson has fixed a course and weekly time, and the pricing page sets out how pausing, missed lessons and moving between group and private places work.'
  },

  reviewsH2: 'Six Google reviews from parents and learners',

  book: {
    h2: 'Start with a free lesson',
    intro: 'An age or school year, plus one thing the learner enjoys, is enough. The first lesson could be a block-coding game, a first Python unit converter, or the megajoule checker on this page.',
    success: 'Thank you. Your Oxfordshire request has arrived.'
  },

  faq: {
    h2: 'Oxfordshire questions',
    intro: 'The county, the fusion project and how lessons work.',
    items: [
      { q: 'How many people live in Oxfordshire?', a: 'The five Oxfordshire districts had 725,291 usual residents at the 2021 Census, from ONS figures on Nomis. Oxford district had 162,040 and West Oxfordshire, the smallest, 114,237.' },
      { q: 'What are the biggest towns in Oxfordshire?', a: 'By ONS built-up area: Oxford 170,805, Banbury 52,045, Bicester 37,755, Didcot 34,600 and Abingdon-on-Thames 33,175. Our table lists twenty Oxfordshire towns above five thousand residents.' },
      { q: 'What is the fusion project?', a: 'Learners build a Python class that carries units with every number, then use JET\'s published records to compute average power, peak durations and energy per kilogram. The class refuses to add megajoules to megawatts.' },
      { q: 'What did JET achieve?', a: 'UKAEA says JET, at its Culham Campus in Oxfordshire, produced 69 megajoules over five seconds in 2023 from 0.2 milligrams of fuel, after 59 megajoules in 2021. It first made plasma on 25 June 1983.' },
      { q: 'What is the difference between a megajoule and a megawatt?', a: 'A megajoule is an amount of energy. A megawatt is a rate, one megajoule every second. JET\'s 69 megajoules over five seconds is an average of 13.8 megawatts.' },
      { q: 'Is there a classroom in Oxford, Banbury or Didcot?', a: 'There is no building anywhere. Teaching happens over video, which is how a Chinnor teenager and a Chipping Norton teenager end up in one class with no journey for either.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for the youngest, typed Python from about ten, GCSE and A level computing for teenagers, and Python, data and AI for adults. The free lesson settles the level.' },
      { q: 'Do you teach GCSE Computer Science?', a: 'Yes. Our GCSE course is taught to the specification your child actually sits: AQA 8525, OCR J277 or Edexcel 1CP2.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then USD 100 a month for a group place or USD 150 a month one to one, with no joining fee and no contract.' },
      { q: 'When are Oxfordshire school holidays?', a: 'The county council sets dates for its schools and academies can set their own. We could not reach the council\'s website on the day we checked, so breaks are arranged around your school\'s own dates.' }
    ]
  },

  next: {
    eyebrow: 'Explore further',
    h2: 'Around Oxfordshire',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> city page asks whether rain remembers yesterday. Neighbouring counties so far are <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything else.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Oxfordshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-oxford', label: 'Oxford' },
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' }
  ],

  personalityCss: `
.cg-root.cg-oxs .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-oxs .cg-hero h1 { font-weight: 600; letter-spacing: -0.028em; line-height: 1.02; }
.cg-root.cg-oxs .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-oxs .cg-eyebrow { letter-spacing: 0.24em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-oxs .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-oxs .cg-table caption { font-style: italic; letter-spacing: 0.02em; }
.cg-root.cg-oxs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-oxs .cg-table th { text-transform: uppercase; letter-spacing: 0.07em; }
.cg-root.cg-oxs .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-oxs .cg-callout { border-left-width: 4px; border-radius: 0 16px 16px 0; }
`,

  dossier: {
    curriculumAuthority: 'Oxfordshire (five districts under Oxfordshire County Council). ONS Census 2021 TS001 via Nomis: Oxford 162,040; Cherwell 161,016; South Oxfordshire 149,085; Vale of White Horse 138,913; West Oxfordshire 114,237; total 725,291 (our sum). ONS Census 2021 built-up areas (published; all 20 agree with our OA sums within rounding and lie inside the county): Oxford 170,805 (Oxford, South Oxfordshire, Vale of White Horse); Banbury 52,045; Bicester 37,755; Didcot 34,600 (South Oxfordshire, Vale of White Horse); Abingdon-on-Thames 33,175; Witney 30,165; Carterton 17,950; Kidlington 14,640; Wantage 13,105; Thame 12,945; Henley-on-Thames 11,780; Faringdon 8,625; Wallingford 8,455; Grove 7,945; Chinnor 7,265; Chipping Norton 6,985; Shrivenham and Watchfield 5,350; Eynsham 5,325; Sonning Common 5,265; Benson 5,240. GOV.UK UKAEA news 16 December 2024: JET "achieving a world record in 2023 by producing 69 megajoules of high power over five seconds. This feat was accomplished using just 0.2. milligrams of fuel - the equivalent weight of a fruit fly"; JET "located at United Kingdom Atomic Energy Authority\'s (UKAEA) Culham Campus in Oxfordshire". GOV.UK 23 June 2023 (JET set for its 40th birthday): "Originally designed to run experiments for eight years"; "JET produced its first plasma on 25 June 1983"; "1997: First deuterium-tritium experiments and world record for producing 16.1 MW and 21.7 megajoules"; "2021: ... producing 59 megajoules over 5 seconds"; "over 103,000 \'pulses\'"; "Each pulse typically lasts for 40 seconds". GOV.UK 19 January 2022 (100,000th pulse): "1997: A world record 22.5 megajoules of fusion energy and 16 megawatts of fusion power".',
    localProject: 'Energy versus power and unit-checked arithmetic. Python quantity class carrying exponents of kg, m and s; addition requires identical dimensions, division and multiplication combine exponents. JET: 69 MJ / 5 s = 13.8 MW (2023); 59 MJ / 5 s = 11.8 MW (2021); 21.7 MJ / 16.1 MW = 1.35 s minimum at peak (1997, 2023 page); 22.5 MJ / 16 MW = 1.41 s (2022 page); the two 1997 energies differ by 3.7 per cent and both are printed with their sources. 69 MJ + 16.1 MW raises TypeError (J vs W). 69 MJ / 0.2 mg = 3.45 x 10^14 J/kg. Illustration (ours): 3 kW kettle would take 6.39 hours to use 69 MJ. AI angle: generated text mixes megajoules and megawatts fluently. Lesson family: energy versus power and dimensional analysis in code; screened 26 September 2026 (dimensional, megajoule: 0 hits).',
    requiredMentions: [
      '725,291',
      '69 megajoules',
      '0.2 milligrams',
      '13.8 megawatts',
      '21.7 megajoules',
      '22.5 megajoules',
      '25 June 1983',
      'Shrivenham and Watchfield',
      '1.35 seconds',
      '170,805'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five Oxfordshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Oxfordshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'UKAEA on GOV.UK: JET 2023 record, 69 megajoules over five seconds from 0.2 milligrams of fuel; Culham Campus.', url: 'https://www.gov.uk/government/news/jets-final-deuterium-tritium-results-revealed-one-year-on' },
      { claim: 'UKAEA on GOV.UK: first plasma 25 June 1983, 1997 record 16.1 MW and 21.7 megajoules, 2021 record 59 megajoules, over 103,000 pulses of about 40 seconds.', url: 'https://www.gov.uk/government/news/jet-set-for-its-40th-birthday' },
      { claim: 'UKAEA on GOV.UK (2022): 1997 record given as 22.5 megajoules and 16 megawatts.', url: 'https://www.gov.uk/government/news/watch-iconic-fusion-energy-machines-100000th-pulse' }
    ],
    rejectedClaims: [
      'Oxfordshire County Council term dates: the site gave no connection on 26 September 2026 (tried twice); none printed.',
      'Diamond Light Source figures at Harwell: the Diamond site returned 403, not retried, so the synchrotron is not mentioned.',
      'Which 1997 figure is correct: two UKAEA pages differ and we do not know the definitions used, so both are printed with their sources and neither is chosen.',
      'Any claim about fusion power stations, electricity prices or energy policy: out of scope for a coding page.',
      'The total plasma time across all JET pulses: pulse lengths are only described as typical, so no total is claimed.',
      'Named Oxfordshire schools: none is named.'
    ]
  }
};
