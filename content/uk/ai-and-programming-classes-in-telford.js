'use strict';
// Telford (cg- town page, UK cluster Phase 8, towns band A, row 337). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: can a program check what a history book says? Anchors (read raw 27 September 2026): Project Gutenberg ebook 939,
// Samuel Smiles, "The Life of Thomas Telford, Civil Engineer": the Coalbrookdale bridge project "actively taken up in 1776
// by Mr. Abraham Darby"; "It was opened for traffic in 1779"; "giving the name to the town of Ironbridge"; "one
// semicircular arch, of 100 feet span"; Buildwas: "a single arch of 130 feet span"; "Although the span of the new bridge
// was 30 feet wider than the Coalbrookdale bridge, it contained less than half the quantity of iron; Buildwas bridge
// containing 173, whereas the other contained 378 tons". Project Gutenberg ebook 404, Samuel Smiles, "Industrial Biography:
// Iron Workers and Tool Makers": Pritchard's design "was to be of 120 feet span"; the adopted plan "prepared under the
// superintendence of Abraham Darby, by Mr. Thomas Gregory, his foreman of pattern-makers"; "The abutments of the bridge were
// built in 1777-8"; "the ironwork was successfully erected in the course of three months"; "The bridge was opened for
// traffic in 1779"; Telford quoted: "The bridge was executed in 1777 by Mr. Abraham Darby". postcodes.io places:
// Ironbridge, Coalbrookdale and Madeley in Telford and Wrekin; Buildwas and Broseley in Shropshire (so Buildwas is not
// placed in Telford).
// Our run (27 September 2026): claims written as unit tests. 130 - 100 == 30 passes; 173 < 378 / 2 passes (173/378 =
// 0.458); "span of the Coalbrookdale bridge" 100 (Life of Telford) vs 120 (Industrial Biography) fails until the test names
// the object (120 was Pritchard's rejected plan); "year built" 1777 (Telford quoted) vs 1779 (Smiles) fails until the test
// separates "executed"/abutments 1777-8 from "opened for traffic" 1779.
// Lesson family: executable claims (unit tests on facts), failing tests that expose ambiguous definitions; screened (unit
// test, test-driven, doctest, claim checking: 0 hits; Caerphilly's unit-pair checker and Harrow's fact check are different;
// "long ton" avoided because Caerphilly registered it).
// Place facts: Nomis Census 2021 TS007A, Telford and Wrekin E06000020: total 185,542; under 5 10,562 (5.7%; England 5.4%);
// 5 to 9 11,869 (6.4%; 5.9%); 10 to 14 12,142 (6.5%; 6.0%); 50 to 54 13,476 (7.3%; 6.9%); 80 to 84 4,288 (2.3%; 2.5%); 85+
// 3,579 (1.9%; 2.4%). ONS 2021 BUAs wholly inside: Telford 156,910; Newport 14,190.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TELFORD', label: 'Telford', blurb: 'AI and programming classes for Telford, with a project that turns claims about the Iron Bridge into unit tests.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-telford',
  code: 'tlf',
  accent: '#5B2B7A',
  accentRationale: 'Telford: a cast-iron heather violet (8.17:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Telford',
    eyebrow: 'Telford, Shropshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Shropshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands' }],
  nav: [
    { label: 'Shropshire', href: '/coding-classes-in-shropshire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Telford, England',
  title: 'AI and Programming Classes in Telford | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Telford, Newport and Wrekin learners aged 6 to 67, taught live one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Telford, and a Python project that turns Samuel Smiles\'s claims about the Iron Bridge into unit tests.',
  twitterDescription: 'Telford AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Telford',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Telford and Wrekin, taught live at the right level.'
  },

  h1: 'AI and programming classes in Telford',
  capsuleQ: 'What are the best AI and programming classes in Telford?',
  capsule: 'The 2021 census recorded 185,542 people in Telford and Wrekin, with the ONS placing 156,910 in the Telford built-up area and 14,190 in Newport. Children are well represented, with every band from birth to 14 above the England share, while the over-80s are fewer. Learners from 6 up to 67 study AI, programming, Python and maths with our tutors in India, live over video, alone or in same-stage classes of five to ten. The first lesson is free and picks the course. The Telford project turns a Victorian writer\'s claims about the Iron Bridge into tests a computer can run. Those who continue pay USD 100 monthly for a class or USD 150 monthly for one-to-one.',
  lead: 'Ironbridge, Coalbrookdale and Madeley all lie within Telford and Wrekin, and it was at Coalbrookdale, Samuel Smiles writes, that the castings for the first iron bridge were made. Smiles tells the story twice, in two different books, and adds a comparison with Thomas Telford\'s later bridge over the Severn at Buildwas, in Shropshire: 30 feet wider, yet with less than half the iron, 173 tons against 378. Claims like these usually get read and believed. A programmer can do something better: write each one as a small test, run them all, and see which pass. On this page two claims pass cleanly and two fail, and the failures turn out to be the most interesting part, because they show that the books were using words in different ways.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Telford.',

  picks: {
    eyebrow: 'Telford course picks',
    h2: 'First courses for Telford learners',
    intro: 'Choose one to match age and interests. The first live lesson in every course is free, and no card is needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with bridges, building and simple checks.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with numbers and rules, plus small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including testing the Iron Bridge claims.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch, up to testing and data work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Telford and Wrekin',
      h2: 'A young borough',
      intro: 'Census table TS007A (2021) for Telford and Wrekin, from Nomis, six bands beside England.',
      body: [
        { kind: 'table', caption: 'Telford and Wrekin and England, six age bands, Census 2021 TS007A', head: ['Age', 'Borough residents', 'Borough %', 'England %'], rows: [
          ['Under 5', '10,562', '5.7%', '5.4%'],
          ['5 to 9', '11,869', '6.4%', '5.9%'],
          ['10 to 14', '12,142', '6.5%', '6.0%'],
          ['50 to 54', '13,476', '7.3%', '6.9%'],
          ['80 to 84', '4,288', '2.3%', '2.5%'],
          ['85 and over', '3,579', '1.9%', '2.4%']
        ] },
        { kind: 'p', text: 'School-age children are above the national share and the oldest residents below it. The ONS lists two built-up areas wholly inside the borough, Telford at 156,910 and Newport at 14,190. Shropshire and Telford schools teach England\'s national curriculum; tell us the half-terms and our timetable leaves them clear.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-shropshire">Shropshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Telford project',
      h2: 'Four claims, four unit tests',
      intro: 'Write what the book says as code, run it, and read every failure carefully.',
      body: [
        { kind: 'p', text: 'The learner copies the key figures from Smiles\'s two books into Python and writes one unit test per claim. The first is easy: Buildwas has a 130 foot span, the Coalbrookdale bridge 100 feet, so the test checks that 130 minus 100 equals 30, as Smiles says. It passes. The second checks "less than half the quantity of iron": 173 must be less than 378 divided by 2, which is 189. It passes too, with Buildwas using 45.8 per cent of the Coalbrookdale bridge\'s iron.' },
        { kind: 'table', caption: 'Our tests on Samuel Smiles\'s Iron Bridge claims, 27 September 2026', head: ['Claim', 'Test', 'First result', 'After reading closely'], rows: [
          ['Buildwas was 30 feet wider', '130 - 100 == 30', 'Pass', 'Pass'],
          ['Less than half the iron', '173 < 378 / 2', 'Pass', 'Pass'],
          ['Span of the Coalbrookdale bridge', '100 in one book, 120 in the other', 'Fail', '120 was Pritchard\'s rejected plan'],
          ['Year the bridge was built', '1777 quoted, 1779 stated', 'Fail', '1777 is when work was done; 1779 is opening']
        ] },
        { kind: 'p', text: 'The third test compares the span of the Coalbrookdale bridge across both books, and fails: 100 feet in The Life of Thomas Telford, 120 feet in Industrial Biography. Reading the passage shows the 120 feet belonged to Mr. Pritchard\'s design, which was set aside for an all-iron plan drawn up under Abraham Darby by his foreman of pattern-makers, Thomas Gregory. The test was wrong, not the book: it compared two different bridges. The learner rewrites it to name the object being measured, and it passes.' },
        { kind: 'p', text: 'The fourth test asks for the year the bridge was built. Telford, quoted by Smiles, says it "was executed in 1777"; Smiles says it was "opened for traffic in 1779", with the abutments built in 1777-8 and the ironwork erected in three months. "Built" meant different things to different writers. The fix is to split one vague field into clear ones, work begun and date opened, each with its own test. That is exactly how professional programmers find hidden ambiguity in a specification.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write three facts about your school as true-or-false checks, then argue about one that is unclear.' },
          { h3: 'Ages 11 to 15', p: 'Turn the four claims into Python unit tests and run them.' },
          { h3: 'Ages 15 and up', p: 'Redesign the failing tests, split ambiguous fields, and log each source.' }
        ] },
        { kind: 'callout', h3: 'Smiles\'s books, our tests', p: 'The figures and quotations come from Samuel Smiles\'s The Life of Thomas Telford and Industrial Biography on Project Gutenberg. The tests and their results are ours.' }
      ]
    },
    {
      id: 'ironbridge', tint: 'deep', eyebrow: 'Why Coalbrookdale',
      h2: 'The first iron bridge',
      intro: 'What Smiles records, across his two books.',
      body: [
        { kind: 'table', caption: 'The Coalbrookdale and Buildwas bridges in Samuel Smiles\'s books', head: ['Detail', 'According to Smiles'], rows: [
          ['Project taken up', '1776, by Abraham Darby of Coalbrookdale'],
          ['Design', 'One semicircular arch of 100 feet span'],
          ['Ironwork erected', 'In the course of three months'],
          ['Opened for traffic', '1779'],
          ['Iron used', '378 tons, against 173 at Buildwas'],
          ['A town named after it', 'Ironbridge, which grew up nearby']
        ] },
        { kind: 'p', text: 'Unit tests are how serious software stays trustworthy. Every time a programmer changes code, thousands of small tests check that each piece still does what it should, and a failing test stops a mistake reaching users. The Iron Bridge exercise teaches the harder half of the skill: a failing test is a question, not a verdict. Sometimes the code is wrong, sometimes the test is, and sometimes the specification never said clearly what it meant.' },
        { kind: 'p', text: 'Our company has no link to Project Gutenberg or to the census office. The books and figures belong to them; each test written here, including any bug, belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From true-or-false games to test suites',
    intro: 'Years are a guide; the free trial settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Rules and checks', p: 'Block coding with conditions and simple checks.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and tests', p: 'Functions, numbers and first tests in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Software and AI', p: 'Testing, data and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Reliable programming', p: 'Adult Python with testing and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and claims',
    h2: 'Would an AI notice the two meanings of built?',
    intro: 'Confident summaries can hide a quiet contradiction.',
    p1: 'Ask a chatbot when the Iron Bridge was built and it will give one year. Whether that year means work begun or the day it opened is usually left unsaid.',
    p2: 'A Telford learner who has watched a unit test fail on 1777 against 1779 knows to ask what a word means before trusting a date.',
    closer: 'Programming teaches Telford teenagers to run a check before they repeat a fact, a habit that matters more with every AI answer in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'Telford and Newport, by live video',
    intro: 'Any home in the borough joins the same lesson.',
    cells: [
      { h3: 'The student builds it', p: 'Learners type every line; the tutor watches the shared screen and asks questions instead of taking over.' },
      { h3: 'Placed with care', p: 'From Year 5 to Year 12, the trial and the school year together decide the first topic, with the exam board kept in view.' },
      { h3: 'Try it free', p: 'You pay nothing for a full first lesson, and you leave it with a named course and the reason for it.' },
      { h3: 'Peers who match', p: 'A group means five to ten learners from around the UK, all working at the same stage.' },
      { h3: 'Twice a week', p: 'Two lessons weekly in term; holidays kept free.' },
      { h3: 'Fixed local time', p: 'UK clock changes are handled by our tutors, not your timetable.' }
    ],
    spec: { title: 'Why groups are online', p: 'Five Telford learners at one level, free at the same hour, seldom live nearby. Online classes give each the right group.' }
  },

  fees: {
    h2: 'Telford fees',
    intro: 'Telford families pay the same fee as every family outside India.',
    first: 'A full lesson free, ending with a course recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Prices are in US dollars, never sterling. The first bill follows the trial, once a course and a regular weekday time are agreed. Holidays, missed lessons and a move from group to private are set out on the pricing page.'
  },

  reviewsH2: 'What our families say on Google',

  book: {
    h2: 'Book a free Telford lesson',
    intro: 'Tell us the learner\'s age or year group and one interest. Trial options: build a Scratch bridge, write a first Python script, try a small AI task, or test Smiles\'s bridge claims.',
    success: 'Thank you. Your Telford request is with us.'
  },

  faq: {
    h2: 'Telford questions',
    intro: 'On the borough, the bridge tests and everyday arrangements.',
    items: [
      { q: 'What is the population of Telford?', a: 'The ONS gives 156,910 for the Telford built-up area in 2021; Telford and Wrekin as a whole had 185,542.' },
      { q: 'Are online AI and programming lessons available in Telford?', a: 'Yes, from Madeley to Newport, anyone aged 6 to 67 can take our live AI, programming, Python and maths lessons online.' },
      { q: 'What is the Iron Bridge project?', a: 'Learners turn Samuel Smiles\'s claims about the Coalbrookdale and Buildwas bridges into Python unit tests and investigate the two that fail.' },
      { q: 'What is a unit test?', a: 'A small program that checks one piece of code, or here one claim, and reports pass or fail.' },
      { q: 'Is the Iron Bridge in Telford?', a: 'Ironbridge and Coalbrookdale are in Telford and Wrekin; Smiles records that the bridge was opened for traffic in 1779.' },
      { q: 'Are lessons held locally?', a: 'No, all lessons run live online, so the whole borough is covered.' },
      { q: 'Can exam students get help?', a: 'GCSE and A level maths and computing are covered, with the aim of understanding and no grade guarantee.' },
      { q: 'What ages can join?', a: 'Anyone from 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the opening lesson; after that, USD 100 per month buys a group place and USD 150 per month a personal tutor.' },
      { q: 'Do lessons continue in holidays?', a: 'No, we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Telford',
    html: 'Read the county view on our <a class="cg-inline-link" href="/coding-classes-in-shropshire">Shropshire</a> page; <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a> catches a wrong date in an old book; <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands</a> collects the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Telford and Shropshire',
  footerPlaces: [
    { href: '/coding-classes-in-shropshire', label: 'Shropshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tlf .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.1vw, 2.6rem); }
.cg-root.cg-tlf .cg-hero h1 { font-weight: 780; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-tlf .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-tlf .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tlf .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.021em; }
.cg-root.cg-tlf .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-tlf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tlf .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-tlf .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-tlf .cg-callout { border-radius: 0 10px 10px 0; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Telford and Wrekin (E06000020). Nomis Census 2021 TS007A: total 185,542; under 5 10,562 (5.7%, England 5.4%); 5 to 9 11,869 (6.4%, 5.9%); 10 to 14 12,142 (6.5%, 6.0%); 50 to 54 13,476 (7.3%, 6.9%); 80 to 84 4,288 (2.3%, 2.5%); 85+ 3,579 (1.9%, 2.4%). ONS 2021 BUAs: Telford 156,910; Newport 14,190. Project Gutenberg 939, Smiles, Life of Thomas Telford: project "actively taken up in 1776"; "opened for traffic in 1779"; "one semicircular arch, of 100 feet span"; Buildwas "130 feet span"; "30 feet wider"; "173, whereas the other contained 378 tons". Project Gutenberg 404, Smiles, Industrial Biography: Pritchard plan "120 feet span"; Thomas Gregory; abutments "built in 1777-8"; ironwork erected "in the course of three months"; Telford quoted: "executed in 1777". postcodes.io places: Ironbridge, Coalbrookdale, Madeley in Telford and Wrekin; Buildwas in Shropshire.',
    localProject: 'Claims as unit tests: 130 - 100 == 30 pass; 173 < 189 pass (45.8%); span 100 vs 120 fails until the object is named (120 = Pritchard plan); year 1777 vs 1779 fails until "work done" and "opened" are separate fields. Lesson family: executable claims, unit tests, ambiguous specifications.',
    requiredMentions: [
      '156,910',
      '14,190',
      'Coalbrookdale',
      'Iron Bridge',
      'Buildwas',
      '378 tons',
      'Madeley',
      'unit test',
      'Thomas Gregory'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Telford and Wrekin and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Samuel Smiles, The Life of Thomas Telford (ebook 939).', url: 'https://www.gutenberg.org/ebooks/939' },
      { claim: 'Project Gutenberg, Samuel Smiles, Industrial Biography: Iron Workers and Tool Makers (ebook 404).', url: 'https://www.gutenberg.org/ebooks/404' },
      { claim: 'postcodes.io places search (OS Open Names) for Ironbridge, Coalbrookdale, Madeley and Buildwas.', url: 'https://api.postcodes.io/places?q=Coalbrookdale' }
    ],
    rejectedClaims: [
      'That the town of Telford is named after Thomas Telford: not in the sources read; not claimed.',
      'Buildwas is in Shropshire, not Telford and Wrekin; no direction or distance is claimed.',
      'Modern measurements of the bridge: not claimed; only Smiles\'s figures.',
      'World Heritage status and visitor figures: not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
