'use strict';
// Enfield (cg- London borough page, UK cluster Phase 5, row 167). Named sources only.
// Spine: how a machine spots a typo. Historic England list entry 1484988, Barclays Bank, 20 The Town, Enfield EN2 6LS,
// Grade II, first listed 30 March 2023, "as the site of the world's first operational automated teller machine (ATM),
// inaugurated on 27 June 1967". Learners code four one-digit check schemes and test each against every single-digit
// slip, adjacent swap, twin error and jump swap on 2,000 random 16-digit numbers (seed 20260925): plain digit sum,
// weighted sum (1 and 3 alternately), Luhn (US patent 2,950,048, "Computer for verifying numbers", Hans P. Luhn,
// assigned to International Business Machines, filed 6 January 1954, published 23 August 1960) and Verhoeff (dihedral
// group D5). Single slips: all 100%. Adjacent swaps: 0.0 / 88.9 / 97.7 / 100.0% (Luhn misses only 09<->90; weighted
// misses the five pairs differing by 5). Twins: 88.9 / 88.9 / 93.3 / 95.5%. Jump swaps: 0 / 0 / 0 / 94.3%. Two random
// slips: 89.1 / 88.7 / 88.8 / 88.9%: one check digit cannot beat about 9 in 10 on random double errors.
// Lesson family: check digits (Luhn vs Verhoeff), exhaustive error enumeration. Woensel-Zuid (NL) taught the Dutch
// eleven test; this page is a different scheme, error model and hook. We do not say which numbers use Luhn.
// Enfield Council's libraries URL served a "Page Not Found" body on 25 September 2026, so no library list is given.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'ENFIELD', blurb: 'The first cash machine site, Forty Hall and a project on how one extra digit catches a typing mistake.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-enfield-london',
  code: 'enf',
  accent: '#773622',
  accentRationale: 'Enfield: a Victorian bank-brick red from the solver (7.30:1 on every paper tint), deeper than the Brent rust and clear of any bank\'s brand colour',
  pageType: 'governorate',
  place: {
    name: 'Enfield',
    eyebrow: 'London Borough of Enfield',
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
  routeLabel: 'Enfield, London',
  title: 'Coding Classes in Enfield and Edmonton | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Enfield: Edmonton, Southgate, Palmers Green, Winchmore Hill, Ponders End and Enfield Lock. Ages 6 to 67.',
  ogDescription: 'Enfield coding and Python classes, with a project where learners code check digits and test which typing mistakes each one catches, from the borough of the first cash machine.',
  twitterDescription: 'Enfield coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Enfield Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Enfield, taught live in English.'
  },

  h1: 'Coding classes in Enfield',
  capsuleQ: 'What are the best coding classes in Enfield?',
  capsule: 'Enfield is the north London borough of Enfield Town, Edmonton, Southgate, Palmers Green, Winchmore Hill, Ponders End and Enfield Lock, with 329,984 people counted at the 2021 Census. Historic England lists a bank on The Town as the site of the world\'s first operational cash machine. Classes worth a family\'s time teach a learner to reason about mistakes, not just to write code that works when nothing goes wrong, and this page does that with check digits: one extra digit that lets a machine notice a mistyped number. Lessons are taught live on video by teachers based in India, to anyone aged 6 to 67, privately or in a class of five to ten at one level. The opening lesson is free, then a class place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'On 27 June 1967, according to Historic England, the world\'s first operational automated teller machine was inaugurated at a bank at 20 The Town, Enfield. The building was listed at Grade II in 2023 partly for that reason. Every machine that handles numbers typed by people meets the same problem: people make mistakes. They hit a wrong key, or swap two digits, or double the wrong one. Our learners code four ways of adding a single check digit to the end of a long number, then attack each one with every mistake they can think of, on 2,000 random 16-digit numbers. All four catch every single wrong key. They differ sharply on swapped digits, and none of them can do much better than 9 in 10 against two random slips.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Enfield.',

  picks: {
    eyebrow: 'Course picks for Enfield',
    h2: 'First courses for Enfield learners',
    intro: 'Imagine a Year 3 child in Palmers Green who loves secret codes, a Year 8 pupil in Edmonton who wonders how a shop till knows a barcode was misread, a Year 12 student in Southgate choosing computer science or maths, and an office worker in Enfield Lock tired of fixing typing errors in spreadsheets. Each can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch secret-code game where a checking rule catches a wrong digit, and a first taste of error detection.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python: add up the digits of a number, make a check digit, and catch a deliberate mistake.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including this page\'s four check digit schemes and the full error test.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who handle reference numbers and want systems that catch mistakes before they cost money.' }
    ]
  },

  sections: [
    {
      id: 'enfield', tint: '', eyebrow: 'Enfield by the numbers',
      h2: '329,984 residents and 300 listed buildings',
      intro: 'Every figure comes from the body named beside it, or from our count of that body\'s open data.',
      body: [
        { kind: 'table', caption: 'Enfield in figures, with sources', head: ['Item', 'Figure', 'Source'], rows: [
          ['Usual residents, 2021 Census', '329,984', 'ONS table TS001, via Nomis'],
          ['National Heritage List entries inside the borough', '300: 3 Grade I, 23 Grade II*, 274 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Barclays Bank, 20 The Town, first listed', '30 March 2023, Grade II', 'Historic England list entry 1484988'],
          ['Underground stations listed at Grade II*', 'Oakwood and Southgate, both on the Piccadilly line', 'Historic England list; TfL open data']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Forty Hall', p: 'Two of Enfield\'s three Grade I entries are Forty Hall and the screen wall, gateway and north pavilions to its west. The third is the original block of Grovelands Park Hospital.' },
          { h3: 'Water and flour', p: 'The list includes several parts of the King George Pumping Station beside the Lea Navigation, and buildings of Wright\'s Flour Mills, among them the old mill building.' },
          { h3: 'Houses at Grade II*', p: 'Capel House, Broomfield House in Broomfield Park, Millfield House and Salisbury House are among the borough\'s 23 Grade II* entries.' }
        ] }
      ]
    },
    {
      id: 'checkdigits', tint: 'tint', eyebrow: 'The idea',
      h2: 'One extra digit that checks the rest',
      intro: 'A check digit is worked out from all the other digits and stuck on the end. If anyone mistypes the number, the sum usually stops working, and the machine can refuse it at once.',
      body: [
        { kind: 'table', caption: 'The four schemes learners code', head: ['Scheme', 'How the check digit is made', 'Where it comes from'], rows: [
          ['Plain digit sum', 'Add all digits; choose the last so the total ends in 0', 'The simplest possible rule'],
          ['Weighted sum', 'Multiply digits by 1 and 3 alternately, then add', 'A common textbook scheme'],
          ['Luhn', 'Double every second digit from the right, subtract 9 from anything over 9, then add', 'Patented by Hans Peter Luhn of IBM: filed 1954, granted 1960'],
          ['Verhoeff', 'Combine digits using the symmetries of a pentagon, position by position', 'A scheme built to catch every adjacent swap']
        ] },
        { kind: 'p', text: 'Luhn\'s United States patent, number 2,950,048, is titled "Computer for verifying numbers" and was assigned to International Business Machines. The Verhoeff scheme needs no special machine at all, only a pair of small tables, which makes it a good challenge for sixth formers who have met modular arithmetic.' },
        { kind: 'p', text: 'We would have listed Enfield\'s libraries on this page too. On 25 September 2026 the council\'s libraries address returned a page-not-found message, so we name none; Enfield Council\'s website is the place to check.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Attack every scheme with every mistake',
      intro: 'Learners generate 2,000 random 16-digit numbers, give each a check digit, then make every mistake of each kind and count how many are caught.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wrong key', p: 'One digit replaced by any other. Every position, every wrong digit: 288,000 mistakes in total.' },
          { h3: 'Swapped neighbours', p: 'Two different digits next to each other trade places, 34 typed as 43. The most common slip of a quick typist.' },
          { h3: 'Twins and jumps', p: 'A doubled digit doubled wrongly, 33 typed as 66, and a swap across a middle digit, 123 typed as 321.' }
        ] },
        { kind: 'table', caption: 'Share of mistakes caught, run 25 September 2026', head: ['Mistake', 'Plain sum', 'Weighted 1 and 3', 'Luhn', 'Verhoeff'], rows: [
          ['Wrong key', '100%', '100%', '100%', '100%'],
          ['Swapped neighbours', '0%', '88.9%', '97.7%', '100%'],
          ['Twin error', '88.9%', '88.9%', '93.3%', '95.5%'],
          ['Jump swap', '0%', '0%', '0%', '94.3%'],
          ['Two random wrong keys', '89.1%', '88.7%', '88.8%', '88.9%']
        ] },
        { kind: 'p', text: 'A plain sum cannot see order at all, so it misses every swap. Weighting by 1 and 3 catches most swaps but misses any pair that differs by 5, such as 16 and 61. Luhn misses exactly one kind of neighbour swap, 09 and 90, because doubling 9 and subtracting 9 gives 9 again. Verhoeff catches every neighbour swap and nearly all jumps. The last row is the humbling one: against two random wrong keys every scheme catches about nine in ten, because a single digit has only ten possible values, and one wrong number in ten will match by luck.' },
        { kind: 'callout', h3: 'Why an AI helper does not replace this', p: 'An assistant will happily write any of these four functions. It will not decide which mistakes matter for your users, or notice that "catches all single errors" is true of every scheme and therefore says almost nothing. Learners who have attacked their own code with every possible mistake learn to test systems the way attackers and auditors do, which is exactly the skill that separates reliable software from software that merely runs.' }
      ]
    },
    {
      id: 'why', tint: 'tint', eyebrow: 'What it teaches',
      h2: 'Counting every case instead of guessing',
      intro: 'The method matters more than the answer. Learners replace "it seems to work" with a complete count.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Exhaustive testing', p: 'Rather than trying a few examples, the program tries every mistake of each kind, so the percentages are counts, not impressions.' },
          { h3: 'Finding the blind spot', p: 'When a scheme misses something, the code prints which cases, and learners explain the maths behind each miss, like 09 and 90 under Luhn.' },
          { h3: 'Limits of one digit', p: 'Ten possible check values means roughly one random error in ten gets through, whatever the rule. Catching more needs more check digits.' }
        ] },
        { kind: 'p', text: 'GCSE computer science asks pupils about validation, including check digits; this project gives them a real understanding of why some checks are stronger than others. A-level students can take it further into modular arithmetic and group theory through Verhoeff. The list entries belong to Historic England and the patent record to the United States Patent and Trademark Office via Google Patents; the tests and percentages are our own, run on 25 September 2026. Historic England, Barclays, Enfield Council, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Two listed Tube stations, and a class at home',
      intro: 'Enfield\'s Piccadilly line stations are protected buildings. Our lessons need only a working computer.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oakwood and Southgate', p: 'TfL\'s open data lists the Piccadilly line at both stations, and Historic England lists both at Grade II*.' },
          { h3: 'Edmonton to Enfield Lock', p: 'Learners in the east of the borough and in the north can join one class from home without a single change of train.' },
          { h3: 'No wrong platform', p: 'Every learner joins a group of five to ten at the same level, at a UK evening time agreed in advance.' }
        ] },
        { kind: 'spec', title: 'Enfield and the other boroughs', p: 'Enfield is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, adding a link to each page as it appears, including <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> just to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From secret codes to error detection',
    intro: 'Where a learner starts is set by what they show us in the free lesson; their school year only helps us guess.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and checks', p: 'Children make secret-code games in Scratch and add a simple rule that spots a wrong answer.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Digits and sums', p: 'Python that splits numbers into digits, adds them up and checks them, with deliberate mistakes to catch.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Test every case', p: 'Check digit schemes, modular arithmetic and exhaustive testing, strong ground for GCSE validation and A-level projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Reliable systems', p: 'Adults learn how data is validated at the point of entry, and how to judge whether a check is strong enough.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write a checking function. Why should an Enfield teenager test one to destruction?',
    intro: 'Because working code and trustworthy code are different things, and only testing shows which you have.',
    p1: 'AI coding tools produce functions that pass the obvious example. What they rarely do unprompted is ask what could go wrong: which mistakes the check misses, and how often. On this page, a claim like "catches all single-digit errors" turns out to be true of the weakest scheme too, while the real differences hide in swaps and twins. A learner who has built the test that exposes those differences will not trust a function, human or machine made, until they have tried to break it.',
    p2: 'That habit of adversarial testing runs through security, finance and safety engineering. Learners leave knowing to list the likely failures, count them all, and explain each miss. AI will keep writing code quickly; deciding whether it can be trusted is a person\'s job.',
    closer: 'Enfield has a building listed partly for a machine that trusted people to type correctly. A learner here who can design for the times they do not is ready for a lot of modern work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Southgate to Ponders End, lessons live online',
    intro: 'From anywhere in Enfield, a learner is in class the moment the video call opens.',
    cells: [
      { h3: 'At the kitchen table', p: 'All a learner needs is a laptop or desktop, headphones and an internet connection that holds steady.' },
      { h3: 'England\'s Key Stages', p: 'We map progress onto the Key Stages English schools use, Key Stage 1 through to sixth form, naming GCSE and A level where relevant. Teaching is in English.' },
      { h3: 'Try before paying', p: 'The first lesson is genuine teaching with a teacher, and closes with a recommended level and course. We ask for no card details.' },
      { h3: 'Five to ten per group', p: 'Learners are grouped by stage with others from around the UK and beyond, so a workable hour can nearly always be found.' },
      { h3: 'A twice-weekly rhythm', p: 'Classes generally meet on two evenings a week, pausing for half terms, holidays and exams by arrangement.' },
      { h3: 'Enfield time', p: 'Teachers work from India; each time in our messages is the time it will be in London.' }
    ],
    spec: { title: 'Nearly 330,000 people, one right group', p: 'Enfield is home to almost 330,000 people, but a good class depends on five learners at one level being free at one time, which is why our groups draw from well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Enfield families',
    intro: 'The first lesson is free; after that one monthly fee applies, whether you live in Edmonton or Enfield Town.',
    first: 'A full lesson with a teacher at no cost, finishing with our suggested level, course and time.',
    group: 'About eight live lessons each month in a class of five to ten at the same stage.',
    private: 'About eight live lessons each month with a teacher all to themselves.',
    closer: 'Enfield families pay in US dollars, the same as every family outside India, and the site carries no prices in pounds. You pay nothing before the free lesson and before settling on a course and a weekly slot. Pausing, missed classes and moving between group and private lessons are all covered on the pricing page.'
  },

  reviewsH2: 'Six families, in their own Google reviews',

  book: {
    h2: 'Claim a free lesson',
    intro: 'Tell us the learner\'s age or year group and something they like. The first lesson could be a Scratch secret-code game, a Python digit checker, or the check digit tests on this page.',
    success: 'Thank you. Your Enfield lesson request is with our team.'
  },

  faq: {
    h2: 'What Enfield families ask',
    intro: 'About the borough, the check digit project and how lessons work.',
    items: [
      { q: 'How many people live in Enfield?', a: 'The London Borough of Enfield had 329,984 usual residents at the 2021 Census, in Office for National Statistics table TS001.' },
      { q: 'Was the first cash machine really in Enfield?', a: 'Historic England\'s list entry for Barclays Bank, 20 The Town, Enfield, listed at Grade II on 30 March 2023, gives as a reason for listing that it is the site of the world\'s first operational automated teller machine, inaugurated on 27 June 1967.' },
      { q: 'What is a check digit?', a: 'An extra digit calculated from the others and added to the end of a number. If a digit is later mistyped, the calculation usually no longer works, so the mistake can be caught straight away.' },
      { q: 'What is the Luhn check?', a: 'A check digit method named after Hans Peter Luhn of IBM, whose patent for a computer for verifying numbers was filed in 1954 and granted in 1960. It doubles every second digit, which lets it catch almost all swaps of neighbouring digits.' },
      { q: 'Which scheme caught the most mistakes?', a: 'Verhoeff caught every swap of neighbouring digits and most jump swaps. Luhn missed only swaps of 0 and 9. Against two random wrong keys, though, every scheme caught about nine mistakes in ten, the limit for a single check digit.' },
      { q: 'When would Enfield lessons be?', a: 'Once the free lesson is finished we propose a regular weekly time in a class at the learner\'s level with a place open. Teachers are based in India, and all times we send are London times.' },
      { q: 'Is special equipment needed?', a: 'No. A laptop or desktop, headphones or speakers and a dependable connection are enough. The check digit project runs in plain Python with no downloads.' },
      { q: 'Is there a Modern Age Coders centre in Enfield?', a: 'No. There is no Enfield centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Enfield cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'More London boroughs, and the UK',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> gathers every borough and the City and links each page when it is live, such as <a class="cg-inline-link" href="/coding-classes-in-bromley-london">Bromley</a> in the far south east and <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> to the east. For learners interested in machine learning there are our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lays out how schooling differs across the four UK nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Enfield and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-barnet-london', label: 'Barnet' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-enf .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.9vw, 2.4rem); }
.cg-root.cg-enf .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.02; }
.cg-root.cg-enf .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-enf .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-enf .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-enf .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.6rem); }
.cg-root.cg-enf .cg-table caption { font-weight: 700; letter-spacing: 0.018em; }
.cg-root.cg-enf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-enf .cg-table td:nth-child(4) { font-weight: 650; }
.cg-root.cg-enf .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-enf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Enfield. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000010): 329,984 usual residents (328,106 households, 1,878 communal). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 300 (I 3, II* 23, II 274); Grade I 1294469 FORTY HALL, 1079565 SCREEN WALL, GATEWAY AND NORTH PAVILIONS TO WEST OF FORTY HALL, 1078925 GROVELANDS PARK HOSPITAL (ORIGINAL BLOCK ONLY); II* include 1078930 OAKWOOD UNDERGROUND STATION, 1188692 SOUTHGATE UNDERGROUND STATION, INCLUDING SURFACE BUILDINGS AND PLATFORMS, 1078898 CAPEL HOUSE, 1078934 BROOMFIELD HOUSE BROOMFIELD PARK, 1079504 MILLFIELD HOUSE, 1188620 SALISBURY HOUSE; II include several KING GEORGE PUMPING STATION entries (sluice gates at intake from the Lea Navigation) and WRIGHT\'S FLOUR MILLS entries. List entry 1484988 Barclays Bank, 20 The Town, Enfield EN2 6LS: Grade II, first listed 30-Mar-2023; historic interest "as the site of the world\'s first operational automated teller machine (ATM), inaugurated on 27 June 1967"; built 1897 for the London and Provincial Bank. TfL Unified API 940GZZLUOAK (Oakwood) and 940GZZLUSGT (Southgate), 25 September 2026: Piccadilly. enfield.gov.uk/services/libraries returned a "Page Not Found" body on 25 September 2026: no library list used.',
    localProject: 'Four check schemes on 2,000 random 16-digit numbers (15 random body digits + 1 check, random.Random(20260925)); exhaustive per number: single substitutions (all positions, all 9 wrong digits: 288,000), adjacent transpositions of unequal digits (~27,000), twin errors aa->bb (~26,000), jump transpositions abc->cba with a != c (~25,000), plus 20 random two-position substitutions per number (40,000). Detected: plain sum 100 / 0.0 / 88.9 / 0.0 / 89.1; weighted 1-3 100 / 88.9 / 88.9 / 0.0 / 88.7; Luhn 100 / 97.7 / 93.3 / 0.0 / 88.8; Verhoeff (D5 tables) 100 / 100.0 / 95.5 / 94.3 / 88.9. Blind spots: Luhn adjacent {0,9} only (proved over all 45 unordered pairs), twins 22-55, 33-66, 44-77; weighted misses 5 of 45 pairs (difference 5). Luhn patent: Google Patents US2950048A "Computer for verifying numbers", Hans P. Luhn, assigned to International Business Machines Corporation, filed Jan. 6, 1954, Ser. No. 402,491, published 1960-08-23. Lesson family: check digits and exhaustive error enumeration (Luhn vs Verhoeff), screened 25 September 2026 (Luhn 0, Verhoeff 0); Woensel-Zuid NL used the eleven test.',
    requiredMentions: [
      '329,984',
      '20 The Town',
      '27 June 1967',
      'Luhn',
      'Verhoeff',
      'Forty Hall',
      'Grovelands Park Hospital',
      'King George Pumping Station',
      'Wright\'s Flour Mills'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Enfield E09000010: 329,984 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000010&measures=20100' },
      { claim: 'Historic England list entry 1484988, Barclays Bank, 20 The Town, Enfield: site of the first operational ATM, 27 June 1967; listed 30 March 2023.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1484988' },
      { claim: 'US patent 2,950,048, Computer for verifying numbers, H. P. Luhn, IBM, filed 1954, granted 1960.', url: 'https://patents.google.com/patent/US2950048A/en' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Enfield on 25 September 2026: 300 (3 I, 23 II*, 274 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API StopPoints 940GZZLUOAK (Oakwood) and 940GZZLUSGT (Southgate): Piccadilly line.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUSGT' }
    ],
    rejectedClaims: [
      'Which real numbers (payment cards, IMEIs, ISBNs) use each scheme: standards documents not read at a primary source; the page names no uses, and the ISBN manual page we read gave no weights.',
      'How the 1967 machine worked (vouchers, PINs, its inventor): not in the list entry text we read, so not stated.',
      'Enfield library list: the council libraries URL returned a page-not-found body; no libraries named.',
      'Enfield schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Enfield: never a standout; used only to order the build.'
    ]
  }
};
