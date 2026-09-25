'use strict';
// Hounslow (cg- London borough page, UK cluster Phase 5, row 158). Named sources only.
// Spine: an error budget. William Roy measured a base line across Hounslow Heath in 1784 and published every
// correction he applied (Philosophical Transactions 1785, "An Account of the Measurement of a Base on
// Hounslow-Heath", read from the public-domain archive.org copy; royalsocietypublishing.org returned a
// Cloudflare challenge and was not retried). Learners rebuild his correction chain from his own figures:
// hypotenusal length 27402.8204 ft (1369.925521 glass rods of 20 ft + 4.31 ft); reduction to the level of the
// south-east end -0.0714 ft; glass expansion excess +4.1867 in; brass-scale temperature equation (62 to 68
// degrees) +20.3352 in; giving 27404.7925 ft; sea-level reduction -0.0706 ft; 27404.7219 ft, which Roy rounds to
// 27404 feet and seven-tenths. Ranked by size: brass temperature 1.695 ft (0.517 m), glass 0.349 ft (0.106 m),
// level 0.0714 ft, sea level 0.0706 ft (about 2 cm each). Then a modern check: both ends are listed
// (Historic England 1119717 north-western end, 1263302 south-eastern end, captured at 1:1250); grid distance
// between the list points 8,352.15 m; converted to the Airy ellipsoid with the OS inverse Transverse Mercator
// (St Davids code) and Vincenty, 8,354.23 m (grid/ellipsoid 0.999752); Roy's sea-level figure in modern feet
// (0.3048 m) 8,352.96 m; gap 1.27 m. The gap is bigger than every one of Roy's corrections except brass
// temperature, so the modern check is limited by where the markers are recorded, not by Roy's arithmetic,
// and the page says exactly that. The straight line between the two list points lies 56.6% inside the ONS
// December 2024 BFC boundary of Hounslow; both end monuments are outside it (Heathrow side and Hampton side).
// Lesson family: error budget / ranking the corrections to a measurement. Screened 25 September 2026
// ("error budget" 0; General Roy, Hounslow Heath, King's Arbour 0). Distinct from Helmert and inverse TM
// (St Davids, whose code is reused only as a tool here and not taught), Delaunay (Carlisle) and Stirling's formula.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HOUNSLOW', blurb: 'Eleven hub libraries, Chiswick House and General Roy\'s 1784 base line across Hounslow Heath.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hounslow-london',
  code: 'hns',
  accent: '#126829',
  accentRationale: 'Hounslow: a heath green from the solver (5.61:1 on every paper tint), clear of the Brent earth orange, the Harrow violet and the London red',
  pageType: 'governorate',
  place: {
    name: 'Hounslow',
    eyebrow: 'London Borough of Hounslow',
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
  routeLabel: 'Hounslow, London',
  title: 'Coding Classes in Hounslow, Chiswick, Feltham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Hounslow, Chiswick, Brentford, Isleworth, Feltham and Heston families, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and Python classes for Hounslow, on a page about the base line General Roy measured across Hounslow Heath in 1784 and which of his corrections really mattered.',
  twitterDescription: 'Hounslow coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hounslow Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Hounslow, taught live in English.'
  },

  h1: 'Coding classes in Hounslow',
  capsuleQ: 'What are the best coding classes in Hounslow?',
  capsule: 'Hounslow runs from Chiswick and Brentford by the Thames out to Feltham, Bedfont and Cranford by Heathrow, and the 2021 Census found 288,181 people living there. The council runs eleven Community Hub and Library sites, and Hounslow Central sits on the Piccadilly line. A class for your family should leave a learner able to judge which parts of a calculation matter, and this page\'s project does exactly that with a measurement made across Hounslow Heath in 1784. Lessons are live on video from India, in groups of five to ten at one level or one to one, for learners aged 6 to 67. The first lesson is free; afterwards a group place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'In the spring of 1784 a narrow strip of Hounslow Heath was cleared of furze bushes and ant-hills, a party of soldiers from the 12th Regiment of Foot camped beside it, and William Roy laid glass rods, twenty feet at a time, along more than five miles of it. Ordnance Survey\'s own history tells how that base began the triangulation that joined London to Paris, a line that now crosses Heathrow airport. Roy did not stop at counting rods. He corrected his total for the slope of the ground, for the rods growing in the heat, for the temperature of the brass scale he had checked them against, and for the height of the heath above the sea, and he published every correction. Our learners rebuild his sums and put them in order of size. The largest turns out to be more than twenty times the size of the two smallest. Knowing which corrections matter, and which you could safely ignore, is called an error budget, and it is the thread of this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hounslow.',

  picks: {
    eyebrow: 'Course picks for Hounslow',
    h2: 'Four courses for Hounslow learners',
    intro: 'Imagine a Year 4 child in Isleworth who measures everything with a ruler, a Year 10 pupil in Heston who likes physics more than English, a sixth former in Chiswick wondering about engineering, and an adult in Feltham who checks figures for a living. Every one of them begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that measure distances on the stage in steps, then scale them up, a playful first taste of a base line.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Units, ratios and rounding written as Python, including converting Roy\'s feet into metres and deciding how many decimals are honest.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 and 4 and beyond, with this page\'s error budget built from a real 1785 scientific paper.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who adjust figures at work: listing every correction, ranking them by size and knowing which ones change the answer.' }
    ]
  },

  sections: [
    {
      id: 'hounslow', tint: '', eyebrow: 'Hounslow in numbers',
      h2: '288,181 people, eleven hub libraries and 506 listed buildings',
      intro: 'Each figure below comes from the organisation named beside it.',
      body: [
        { kind: 'table', caption: 'Hounslow, as its publishers count it', head: ['Item', 'Number', 'Published by'], rows: [
          ['People counted at the 2021 Census', '288,181', 'ONS Census table TS001, read through Nomis'],
          ['Community Hub and Library sites', '11', 'Hounslow Council'],
          ['National Heritage List entries inside the borough boundary', '506: 32 Grade I, 28 Grade II*, 446 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['Line at Hounslow Central station', 'Piccadilly', 'TfL open data, checked 25 September 2026'],
          ['Length of Roy\'s base, reduced to sea level', '27,404.72 feet', 'William Roy, Philosophical Transactions, 1785']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade I, many times over', p: 'Chiswick House and a whole set of pieces in its grounds, from an obelisk to three statues from Hadrian\'s Villa, sit among Hounslow\'s 32 Grade I entries, as does Boston Manor House in Brentford.' },
          { h3: 'Engines by the reservoirs', p: 'Two Grade II* entries at Kempton Park record a pumping station with a triple expansion engine house and the Lilleshall engine house, part of the borough\'s working history beside its Grade I houses.' },
          { h3: 'A count you can repeat', p: 'Take every Historic England list point, keep those that fall within the borough outline the ONS publishes, and 506 remain. The same kind of point-in-polygon test tells us how much of Roy\'s base line crosses the borough.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Libraries and hubs',
      h2: 'Eleven Community Hub and Library sites, from Chiswick to Bedfont',
      intro: 'Hounslow Council combines its libraries with community hubs. The addresses are the council\'s own.',
      body: [
        { kind: 'table', caption: 'Hounslow Council\'s Community Hub and Library sites', head: ['Site', 'Address'], rows: [
          ['Beavers', 'Beavers Children\'s Centre, Salisbury Rd, Hounslow TW4 7NW'],
          ['Bedfont', 'Staines Rd, Bedfont TW14 8DB'],
          ['Brentford', 'Boston Manor Rd, Brentford TW8 8DW'],
          ['Chiswick', 'Dukes Ave, Chiswick W4 2AB'],
          ['Feltham', 'The Centre, High St, Feltham TW13 4GU'],
          ['Hanworth', 'Hanworth Air Park Leisure Centre, Feltham TW13 5EG'],
          ['Heston', 'New Heston Rd, Heston TW5 0LW'],
          ['Hounslow', '7 Bath Rd, Hounslow TW3 3EB'],
          ['Isleworth', 'Twickenham Rd, Isleworth TW7 7EU'],
          ['Meadowbank (Cranford)', 'Meadowbank Adult Education Centre, Cranford TW5 9SD'],
          ['Osterley', 'St Mary\'s Crescent, Isleworth TW7 4NB']
        ] },
        { kind: 'p', text: 'A hub with public computers is a reasonable fallback on an evening when home is loud. For our lessons a learner needs a laptop or desktop, sound and a steady connection; for the project below, nothing more than Python and a copy of Roy\'s published figures, which are free to read.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'General Roy\'s base on Hounslow Heath, and which correction mattered',
      intro: 'Learners rebuild the arithmetic of a 1784 measurement from the published paper, rank every correction by size, then test the result against where the two ends are recorded today.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Count the rods', p: 'Roy\'s base was measured with glass rods twenty feet long. His paper gives 1369.925521 rods plus 4.31 feet to the centre of the north-west pipe: 27,402.8204 feet along the ground.' },
          { h3: '2. Apply each correction', p: 'He took off 0.0714 feet for the slope, added 4.1867 inches because the glass had expanded, added 20.3352 inches for the temperature of the brass scale, and took off 0.0706 feet to bring the heath down to sea level.' },
          { h3: '3. Rank them', p: 'Written in one unit and sorted by size, the corrections tell a story: one of them is worth more than half a metre, and two are worth about two centimetres each.' }
        ] },
        { kind: 'table', caption: 'Roy\'s corrections, from his 1785 paper, sorted by size', head: ['Correction', 'In Roy\'s units', 'In feet', 'In metres (modern foot)'], rows: [
          ['Temperature of the brass scale, 62 to 68 degrees', '+20.3352 inches', '+1.6946', '+0.517'],
          ['Glass rods expanding more than contracting', '+4.1867 inches', '+0.3489', '+0.106'],
          ['Slope: bringing the length to the level of the Hampton end', '-0.0714 feet', '-0.0714', '-0.022'],
          ['Height of the heath above the sea', '-0.0706 feet', '-0.0706', '-0.022'],
          ['Result, from 27,402.8204 feet on the ground', '27,404.7219 feet', '+1.9015 in all', '8,352.96 m']
        ] },
        { kind: 'p', text: 'The temperature of the brass scale is worth nearly five times the glass correction and more than twenty times either of the last two. Roy knew his final decimals were fragile. He wrote that a measurement is more likely to err in excess than in defect, and settled on 27,404 feet and seven-tenths, saying he would throw away some useless decimals.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'An assistant will convert 27,404.72 feet to metres, or apply a list of corrections, without hesitation. What it will not do unasked is tell you which of the corrections deserve your attention. A learner who has ranked Roy\'s corrections knows to ask of any calculation which term is doing the work, which ones could be dropped, and how many decimals the answer can honestly carry. Those are the questions that separate a careful result from a merely precise-looking one.' }
      ]
    },
    {
      id: 'today', tint: 'tint', eyebrow: 'A modern check',
      h2: 'Where the two ends are recorded now, and what that can and cannot prove',
      intro: 'Both ends of the base are marked by monuments on Historic England\'s list. Their recorded positions give a modern distance to set beside Roy\'s.',
      body: [
        { kind: 'table', caption: 'Roy\'s base against today\'s records, our calculation, 25 September 2026', head: ['Figure', 'Value', 'How it was found'], rows: [
          ['Monument at the north-western end', 'List entry 1119717', 'Historic England, recorded near Heathrow at 1:1250 map scale'],
          ['Monument at the south-eastern end', 'List entry 1263302', 'Historic England, recorded near Hampton at 1:1250 map scale'],
          ['Distance between the two recorded points on the National Grid', '8,352.15 m', 'Straight line between the list coordinates'],
          ['The same distance on the ellipsoid at sea level', '8,354.23 m', 'Grid distance corrected by the Ordnance Survey projection formulas'],
          ['Roy\'s sea-level length in metres', '8,352.96 m', '27,404.7219 feet at the modern 0.3048 m per foot'],
          ['Gap between the two sea-level figures', '1.27 m', 'About 1 part in 6,600']
        ] },
        { kind: 'p', text: 'A gap of 1.27 m is larger than every correction in Roy\'s table except the brass-scale one. That does not show that Roy made a mistake of a metre. The list points mark where each monument is recorded, captured at a map scale of 1:1250, and a monument need not stand exactly over the end of a line measured more than two centuries ago; the foot Roy used was also his own standard, not the modern foot of exactly 0.3048 m. The honest conclusion is that the two agree to within what the modern records can resolve, and that the next correction worth making is to the positions, not to the arithmetic. That is an error budget doing its job.' },
        { kind: 'p', text: 'The straight line between the two monuments runs across Hounslow for 56.6% of its length by our count, through the Hanworth area Roy describes in his paper, while both ends lie just outside the borough. None of the bodies whose data appears here, Hounslow Council, Historic England, the Ordnance Survey, the Royal Society, TfL and the ONS, is linked to Modern Age Coders or endorses this page. The library addresses are the council\'s; the ranking, the distances and the 56.6% are our own calculations on published data.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Across the borough',
      h2: 'Riverside Chiswick to Heathrow\'s edge, one online class',
      intro: 'Hounslow stretches a long way from east to west. An online group makes the distance irrelevant.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hounslow Central', p: 'TfL\'s open data lists the Piccadilly line at Hounslow Central, a few minutes from the Hounslow hub and library on Bath Rd.' },
          { h3: 'East meets west', p: 'A learner near Chiswick\'s library on Dukes Ave and another near Bedfont\'s on Staines Rd can share one group without either crossing the borough.' },
          { h3: 'The heath, measured', p: 'Roy\'s line is a reminder that distance is only a number. The course of more than five miles that took him a season to measure is no distance at all to a lesson online.' }
        ] },
        { kind: 'spec', title: 'Hounslow and the rest of London', p: 'Hounslow is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all and links each as its page is published, including <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> to the north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From measuring in steps to budgeting for error',
    intro: 'The first lesson places a learner by what they can do already, which may be ahead of or behind their school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Measure, then check', p: 'Children measure distances in a game, measure again a different way, and notice the two do not quite agree.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Units and rounding', p: 'Python programs that convert units, round sensibly and explain why a long decimal is not always more accurate.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Corrections and budgets', p: 'Real measurements, their corrections and an error budget, the backbone of any good science or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Which term matters', p: 'Adults learn to rank the adjustments in a report or model and to spend their checking time where it changes the answer.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can do Roy\'s arithmetic instantly. Why should a Hounslow teenager learn to budget for error?',
    intro: 'Because a result with many decimals looks equally trustworthy whether or not it is.',
    p1: 'Give an assistant Roy\'s figures and it will add them to the ten-thousandth of a foot and convert them to metres in a blink. It will rarely stop to say that two of the four corrections are too small to matter against the uncertainty in where the ends are recorded today, or that the answer should be rounded, as Roy himself rounded it. Spreadsheets, forecasts and AI-generated summaries all share that habit of reporting every digit with the same confidence.',
    p2: 'A learner who has built an error budget carries a simple routine into every project: list the terms, put them in one unit, sort them by size, and ask which ones the answer truly depends on. The machine can do the adding. Deciding which numbers deserve trust is still a human judgement, and it is teachable.',
    closer: 'Computers will keep getting faster at arithmetic. What stays scarce is the person in the room who can point at one line of a calculation and say that this is where the answer really comes from, and that is a reason for a Hounslow child to learn to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Chiswick to Cranford, lessons on your own screen',
    intro: 'Every street in the borough is the same distance from an online class.',
    cells: [
      { h3: 'Home first, hub if needed', p: 'Most learners join from home. A quiet corner of a hub library with a headset is a good fallback.' },
      { h3: 'English school language', p: 'Key Stages, Year 9 options, GCSEs, A levels and T Levels are named as English schools name them, and every lesson is in English.' },
      { h3: 'A free, real first lesson', p: 'The opening lesson is genuine work with a teacher and finishes with a clear recommendation of level and course. No card is needed.' },
      { h3: 'Groups at one level', p: 'Between five and ten learners working at the same stage, drawn from Hounslow and far beyond, so there is a group at a sensible time.' },
      { h3: 'Two lessons a week', p: 'Groups usually meet twice a week, with breaks for half terms, holidays and revision agreed with the teacher.' },
      { h3: 'Times you can read', p: 'The teacher\'s clock is in India, but your booking, reminders and timetable all use UK time, summer and winter alike.' }
    ],
    spec: { title: 'Eleven hubs, one matched group', p: 'Hounslow has eleven hub libraries and many schools, but a strong coding group needs five learners at one level and one hour, which is why ours reach well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Hounslow families',
    intro: 'The same fees in every corner of the borough: a free first lesson, then one monthly fee.',
    first: 'A complete lesson with a teacher, free, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at the same stage.',
    private: 'About eight live lessons a month with a teacher for your learner alone.',
    closer: 'From Brentford to Bedfont, families are billed in US dollars, like every family outside India, and no pound prices appear on this site. Nothing is due until after the free lesson, once a course and a regular slot are chosen; our pricing page explains pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six families on Google, in their own words',

  book: {
    h2: 'Tell us about your learner',
    intro: 'An age or school year and a few words about what they enjoy is plenty. Their first task could be a Scratch measuring game, a first Python program, or Roy\'s error budget from this page.',
    success: 'Thank you. Your Hounslow class request is with our team.'
  },

  faq: {
    h2: 'Hounslow coding class questions',
    intro: 'About the borough, General Roy\'s base and how our lessons run.',
    items: [
      { q: 'How many people live in Hounslow?', a: 'The 2021 Census counted 288,181 usual residents in the London Borough of Hounslow, according to Office for National Statistics table TS001.' },
      { q: 'How many libraries does Hounslow have?', a: 'Hounslow Council lists eleven Community Hub and Library sites: Beavers, Bedfont, Brentford, Chiswick, Feltham, Hanworth, Heston, Hounslow, Isleworth, Meadowbank in Cranford, and Osterley.' },
      { q: 'What is General Roy\'s base on Hounslow Heath?', a: 'A straight line measured by William Roy from King\'s Arbour, near today\'s Heathrow, to Hampton Poor-house, beginning in April 1784. His paper gives its sea-level length as 27,404.7219 feet, which he rounded to 27,404 feet and seven-tenths. It became the starting length for the national survey.' },
      { q: 'Are the ends of Roy\'s base still marked?', a: 'Yes. Historic England lists a monument at the north-western end (entry 1119717) and one at the south-eastern end (entry 1263302). Both lie just outside the borough; the line between them crosses Hounslow for 56.6% of its length by our count.' },
      { q: 'What is an error budget?', a: 'A list of every correction or uncertainty in a result, put in one unit and sorted by size, so you can see which ones change the answer and which you could ignore. In Roy\'s base, the brass-scale temperature correction of 0.517 m dwarfs the two corrections of about 2 cm.' },
      { q: 'When are lessons for Hounslow learners?', a: 'A regular slot is chosen after the free lesson from the groups at the learner\'s level that have space. Our teachers work evenings in India while Hounslow has its afternoon and early evening, and every message and reminder gives the time as it is on a UK clock.' },
      { q: 'Can my child join a lesson from a hub library?', a: 'Yes, if the site\'s computers and connection allow it and they use a headset. Home is usually quieter, and it is where most of our learners join.' },
      { q: 'Is there a Modern Age Coders centre in Hounslow?', a: 'No. There is no Hounslow centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Hounslow cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are groups formed?', a: 'By level, pace and goals rather than age or area, with five to ten learners at the same stage. When no group at the right level meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Other boroughs, other nations',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> brings together all 32 boroughs and the City, and adds each borough\'s link as its page is published, <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> among them. For machine learning in the capital there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the school stages of England, Scotland, Wales and Northern Ireland are set out on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hounslow and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-brent-london', label: 'Brent' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hns .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-hns .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-hns .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-hns .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-hns .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-hns .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.7rem); }
.cg-root.cg-hns .cg-table caption { font-weight: 700; font-style: italic; }
.cg-root.cg-hns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hns .cg-table tr:last-child td { font-weight: 700; }
.cg-root.cg-hns .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-hns .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Hounslow. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000018): 288,181 usual residents (286,381 households, 1,800 communal). Hounslow Council, Libraries and Community Hubs page, "Find your nearest Community Hub and Library": Beavers (Beavers Children\'s Centre, Salisbury Rd, Hounslow TW4 7NW), Bedfont (Staines Rd, Bedfont TW14 8DB), Brentford (Boston Manor Rd, Brentford TW8 8DW), Chiswick (Dukes Ave, Chiswick W4 2AB), Feltham (The Centre, High St, Feltham TW13 4GU), Hanworth (Hanworth Air Park Leisure Centre, Feltham TW13 5EG), Heston (New Heston Rd, Heston TW5 0LW), Hounslow (7 Bath Rd, Hounslow TW3 3EB), Isleworth (Twickenham Rd, Isleworth TW7 7EU), Meadowbank (Cranford) (Meadowbank Adult Education Centre, Cranford TW5 9SD), Osterley (St Mary\'s Crescent, Isleworth TW7 4NB). Historic England NHLE listed building points inside ONS LAD Dec 2024 BFC boundary, 25 September 2026: 506 (I 32, II* 28, II 446), Grade I includes 1079607 CHISWICK HOUSE, 1079603 BOSTON MANOR HOUSE, 1079568 THREE MALE STATUES FROM HADRIAN\'S VILLA IN CHISWICK PARK, 1079608 OBELISK IN CHISWICK PARK; II* includes 1260598 KEMPTON PARK PUMPING STATION (INCLUDING TRIPLE EXPANSION HOUSE AND TWO ATTACHED CHIMNEYS) and 1375631 LILLESHALL ENGINE HOUSE, KEMPTON PARK PUMPING STATION. TfL Unified API StopPoint 940GZZLUHWC (Hounslow Central), 25 September 2026: Piccadilly.',
    localProject: 'Error budget on Roy\'s base. Source: W. Roy, "An Account of the Measurement of a Base on Hounslow-Heath", Philosophical Transactions 1785 (archive.org item paper-doi-10_1098_rstl_1785_0024, djvu text): "we began our observations at a place called King\'s Arbour, at the north-west extremity of the Heath" (16 April 1784); "finished at Hampton Poor-house, near the side of Bushy-Park"; "through the narrow gorge, formed by Hanworth-Park and Hanworth-Farm"; hypotenusal length "1369.925521 glass rods of twenty feet each +4.31 feet" = 27402.8204; seventh-column reduction 0.0714 deducted -> 27402.7490; glass expansion excess 4.1867 inches; brass scale equation for 6 degrees between 62 and 68 = 20.3352 inches; -> 27404.7925; sea-level reduction 0.0706 -> 27404.7219; "ultimate length of the base at 27404 feet and seven-tenths"; "throw away some useless decimals". Ranked: 1.6946 ft, 0.3489 ft, 0.0714 ft, 0.0706 ft. Modern check: NHLE 1119717 (507714, 176789) and 1263302 (513720, 170985), CaptureScale 1:1250 both; grid distance 8352.15 m; OS inverse TM (Airy 1830, F0 0.9996012717) + Vincenty on Airy: 8354.23 m; grid/ellipsoid 0.999752; 27404.7219 x 0.3048 = 8352.96 m; gap 1.27 m. Straight line between list points: 56.6% of 2,001 sample points inside the Hounslow BFC polygon; both endpoints outside. Lesson family: error budget, screened free 25 September 2026.',
    requiredMentions: [
      '288,181',
      'Salisbury Rd',
      'Dukes Ave',
      'Bath Rd',
      'Hanworth Air Park',
      'King\'s Arbour',
      'Hampton Poor-house',
      '1369.925521',
      '27,404.7219',
      '1263302'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Hounslow E09000018: 288,181 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000018&measures=20100' },
      { claim: 'Hounslow Council: eleven Community Hub and Library sites with addresses.', url: 'https://www.hounslow.gov.uk/libraries/community-hubs' },
      { claim: 'Historic England NHLE listed building points (open data), inside the ONS boundary of Hounslow on 25 September 2026: 506 (32 I, 28 II*, 446 II); entries 1119717 and 1263302 mark the ends of General Roy\'s survey base, captured at 1:1250.', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'W. Roy, An Account of the Measurement of a Base on Hounslow-Heath, Philosophical Transactions 1785: the correction chain and 27404.7219 feet at sea level (public-domain copy).', url: 'https://archive.org/details/paper-doi-10_1098_rstl_1785_0024' },
      { claim: 'Ordnance Survey, history: "To begin the London/Paris triangulation, it was necessary to measure a baseline that Roy established on the flattest suitable ground on Hounslow Heath (a line that now crosses Heathrow airport)." Roy 1785 on the soldiers: "a party of the 12th regiment of foot, consisting of a serjeant, corporal, and 10 men" encamped on Hounslow Heath on 26 May.', url: 'https://www.ordnancesurvey.co.uk/about/history' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Hounslow E09000018.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUHWC (Hounslow Central), 25 September 2026: Piccadilly line.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUHWC' }
    ],
    rejectedClaims: [
      'The Royal Society\'s own page for Roy\'s paper returned a Cloudflare challenge (403) and was not retried; the public-domain archive.org copy was used.',
      'Dates and origin of the cannons or monuments at each end: not read at a primary source (Historic England list pages 403), so the page says only that both ends are marked by listed monuments.',
      'The exact modern length of Roy\'s foot: not read at a primary source; the page says only that his foot was his own standard and uses the modern 0.3048 m for the conversion, with that caveat.',
      'Heathrow Airport statistics: Heathrow is in Hillingdon, not Hounslow, and none are used.',
      'Census ethnicity, religion or country of birth for Hounslow: never a standout; used only to order the build.'
    ]
  }
};
