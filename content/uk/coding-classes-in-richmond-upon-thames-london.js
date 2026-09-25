'use strict';
// Richmond upon Thames (cg- London borough page, UK cluster Phase 5, row 169). Named sources only.
// Spine: Kepler's third law, from the observatory built for a transit of Venus. Historic England list entry 1357729
// (Kew Observatory, Old Deer Park, Grade I): designed by Sir William Chambers, built 1768-9 when Dr Stephen Demainbray
// persuaded George III to take an interest in a transit of Venus. Data: JPL SSD "Approximate Positions of the Planets"
// (Table 1, 1800-2050): semi-major axis a (au) and mean-longitude rate (deg/century), period T = 36000 / rate years.
// T^2/a^3: Mercury 1.00003 ... Neptune 0.99877; log-log slope 1.49986; inner four only predicts Neptune 164.89 years vs
// 164.79. JPL SSD Planetary Satellite Mean Elements (sep.html): Io 421,800 km, P 1.762732 d; Europa 671,100, 3.525463;
// Ganymede 1,070,400, 7.155588; Callisto 1,882,700, 16.690440; Moon 384,400, 27.322. With au = 149,597,870,700 m (JPL
// astro_par, IAU 2012) and a 365.25-day year, a^3/T^2 gives Jupiter/Sun mass 1/1039 (Io), 1/1032 (Europa), 1/1048
// (Ganymede), 1/1048 (Callisto); (Earth+Moon)/Sun 1/329,815. Earth-Venus at a transit, circular approximation,
// 1 - 0.7233 = 0.2767 au, about 41.4 million km. Lesson family: Kepler's third law, log-log fitting, weighing by orbits.
// Screened 25 September 2026 (Kepler 0 site-wide on cluster pages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'RICHMOND', blurb: 'Kew Observatory, Hampton Court and a project that weighs Jupiter using nothing but its moons\' orbits.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-richmond-upon-thames-london',
  code: 'rch',
  accent: '#141F5D',
  accentRationale: 'Richmond: a night-sky navy from the solver (12.32:1 on every paper tint), for an observatory page, darker than any London sibling blue',
  pageType: 'governorate',
  place: {
    name: 'Richmond upon Thames',
    eyebrow: 'London Borough of Richmond upon Thames',
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
  routeLabel: 'Richmond upon Thames, London',
  title: 'Coding Classes in Richmond, Twickenham, Kew | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Richmond upon Thames: Twickenham, Teddington, Kew, Barnes, Hampton and East Sheen. Ages 6 to 67.',
  ogDescription: 'Richmond coding and Python classes, with a project that starts at Kew Observatory and ends with learners weighing Jupiter from the orbits of its four largest moons.',
  twitterDescription: 'Richmond upon Thames coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Richmond upon Thames Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Richmond upon Thames, taught live in English.'
  },

  h1: 'Coding classes in Richmond upon Thames',
  capsuleQ: 'What are the best coding classes in Richmond upon Thames?',
  capsule: 'Richmond upon Thames is the south west London borough of Richmond, Twickenham, Teddington, Kew, Barnes, Hampton, Whitton and East Sheen, home to 195,278 people at the 2021 Census and to Kew Observatory, Hampton Court Palace and Ham House. The coding classes to look for teach a learner to turn a law of nature into a working calculation, and this page does that with Kepler\'s third law: planetary data from NASA\'s Jet Propulsion Laboratory, a straight line on a log scale, and then the mass of Jupiter worked out from its moons. We teach live by video from India for ages 6 to 67, one to one or in groups of five to ten at a single level. There is no charge for the first lesson. Carrying on costs USD 100 a month in a group or USD 150 a month privately.',
  lead: 'In Old Deer Park stands Kew Observatory, listed at Grade I. Historic England\'s entry says it was built in 1768 and 1769 after Dr Stephen Demainbray persuaded George III to take an interest in a transit of Venus, when Venus crosses the face of the Sun. Such transits mattered because they could reveal the scale of the solar system. Our learners pick up the story with modern numbers. NASA\'s Jet Propulsion Laboratory publishes each planet\'s distance from the Sun and how fast it moves round. From those, learners find that the square of every planet\'s year equals the cube of its distance, to within about a tenth of one per cent: Kepler\'s third law. Then they turn the law round and use the orbits of Jupiter\'s four largest moons to weigh the planet itself.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Richmond upon Thames.',

  picks: {
    eyebrow: 'Course picks for Richmond',
    h2: 'Courses Richmond learners start with',
    intro: 'Think of a Year 3 child in Teddington who points out planets on clear evenings, a Year 10 pupil in Twickenham who likes physics more than they let on, a Year 13 student in Barnes applying for physics or engineering, and a retired civil servant in Kew who has always wondered how anyone could weigh a planet. Each can begin with one free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch solar system where outer planets move more slowly, a first look at orbits as a pattern.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real planets: distances, years, and a table that shows the outer planets are slow.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including Kepler\'s law on log scales and the weighing of Jupiter.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who want to understand how a straight line on a log chart can reveal a law hidden in data.' }
    ]
  },

  sections: [
    {
      id: 'richmond', tint: '', eyebrow: 'Richmond by the numbers',
      h2: '195,278 residents and 39 Grade I entries',
      intro: 'Where a figure is ours, we counted it from the named body\'s open data; otherwise the body published it directly.',
      body: [
        { kind: 'table', caption: 'Richmond upon Thames in four figures', head: ['What', 'How many', 'Whose figure'], rows: [
          ['Residents on Census day 2021', '195,278', 'Office for National Statistics, TS001'],
          ['Heritage List entries within the borough boundary', '808, including 39 at Grade I and 85 at Grade II*', 'Historic England data, counted 25 September 2026'],
          ['Branch libraries on the council\'s list', '11, plus a reference library and local studies collection', 'Richmond Council, read 25 September 2026'],
          ['Services at Richmond station', 'District line, Mildmay line and South Western Railway', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Palaces and houses', p: 'Grade I entries include Hampton Court Palace and many of its gates and gardens, Kew Palace, Ham House, Marble Hill House and Asgill House.' },
          { h3: 'Kew\'s glasshouses', p: 'The Palm House, the Temperate House and the Pagoda are all listed at Grade I, alongside Kew Observatory in Old Deer Park.' },
          { h3: 'Garrick and Strawberry Hill', p: 'Garrick\'s Villa and Garrick\'s Shakespeare Temple are Grade I, as are Strawberry Hill and the Chapel in the Wood beside it.' }
        ] },
        { kind: 'p', text: 'Richmond Council lists branch libraries at Castelnau, East Sheen, Ham, Hampton, Hampton Hill, Hampton Wick, Kew, Richmond, Teddington, Twickenham and Whitton.' }
      ]
    },
    {
      id: 'orbits', tint: 'tint', eyebrow: 'The data',
      h2: 'Eight planets, two numbers each',
      intro: 'The Jet Propulsion Laboratory\'s table of approximate planetary positions gives each orbit\'s average distance from the Sun in astronomical units (au), and how many degrees the planet travels in a century. Dividing 36,000 by that rate gives its year.',
      body: [
        { kind: 'table', caption: 'From JPL\'s table: distance, year, and the Kepler ratio', head: ['Planet', 'Distance, au', 'Year, Earth years', 'Year squared divided by distance cubed'], rows: [
          ['Mercury', '0.387', '0.241', '1.0000'],
          ['Venus', '0.723', '0.615', '1.0000'],
          ['Earth and Moon', '1.000', '1.000', '1.0000'],
          ['Mars', '1.524', '1.881', '1.0000'],
          ['Jupiter', '5.203', '11.863', '0.9991'],
          ['Saturn', '9.537', '29.448', '0.9998'],
          ['Uranus', '19.189', '84.018', '0.9990'],
          ['Neptune', '30.070', '164.790', '0.9988']
        ] },
        { kind: 'p', text: 'The last column is the whole of Kepler\'s third law. For every planet, the year squared divided by the distance cubed comes out as 1 to within about a tenth of one per cent, when years and au are the units. The small shortfall for the giant planets is a question learners are invited to chase: the numbers are averages over two and a half centuries, and the big planets tug on one another.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A straight line, a prediction, and a planet on the scales',
      intro: 'Learners discover the law from data, test it on a planet they held back, and then use it as a measuring instrument.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Logs make it straight', p: 'Plot the logarithm of each year against the logarithm of each distance and the eight points fall on a line. Its slope, 1.4999 in our fit, is the power in the law: year grows as distance to the power three halves.' },
          { h3: '2. Predict what you hid', p: 'Fit only Mercury to Mars, then predict Neptune, thirty times further out. The four inner planets give 164.89 years; JPL\'s figure gives 164.79.' },
          { h3: '3. Weigh Jupiter', p: 'The same law holds for moons round a planet, with the constant set by the planet\'s mass. Distance cubed over period squared, in au and years, gives Jupiter\'s mass as a fraction of the Sun\'s.' }
        ] },
        { kind: 'table', caption: 'Jupiter weighed four times, from JPL satellite elements, run 25 September 2026', head: ['Moon', 'Distance from Jupiter, km', 'Orbit, days', 'Jupiter\'s mass as a fraction of the Sun\'s'], rows: [
          ['Io', '421,800', '1.762732', '1 / 1,039'],
          ['Europa', '671,100', '3.525463', '1 / 1,032'],
          ['Ganymede', '1,070,400', '7.155588', '1 / 1,048'],
          ['Callisto', '1,882,700', '16.690440', '1 / 1,048']
        ] },
        { kind: 'p', text: 'Four moons, four nearly identical answers: Jupiter carries roughly one thousandth of the Sun\'s mass. The two outer moons agree with each other almost exactly; the two inner ones give answers about one per cent different. Learners are asked to explain that rather than hide it, and the notes on JPL\'s table about how its average elements are defined are the place to start. The same calculation with our own Moon, 384,400 km away on a 27.322-day orbit, puts the Earth and Moon together at about one 330,000th of the Sun.' },
        { kind: 'callout', h3: 'Why this matters more when AI can recite the answer', p: 'Any chatbot will tell you Jupiter\'s mass. What it cannot give a learner is the experience of getting that number themselves from four moons and a law found in a table, and of noticing where the answers disagree. A person who has done that knows the difference between a fact and a measurement, and can judge an AI\'s confident numbers because they know how such numbers are made.' }
      ]
    },
    {
      id: 'venus', tint: 'tint', eyebrow: 'Back to 1769',
      h2: 'What Kepler\'s law could not tell Kew\'s astronomers',
      intro: 'The law gives every distance as a multiple of Earth\'s distance from the Sun. It says nothing about how many miles that is. A transit of Venus is one way to find out.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ratios, not miles', p: 'From Kepler alone, Venus orbits at 0.723 of Earth\'s distance, but the size of the whole plan is unknown. It is a map with no scale bar.' },
          { h3: 'Two views of a transit', p: 'Observers far apart on Earth see Venus cross the Sun along slightly different tracks. The gap depends on how far away Venus is, and that is the missing scale.' },
          { h3: 'Today it is fixed', p: 'The astronomical unit is now defined as exactly 149,597,870,700 metres, the value JPL lists from a 2012 resolution of the International Astronomical Union.' }
        ] },
        { kind: 'p', text: 'With that scale, Venus at a transit is about 0.277 au from Earth in a simple circular-orbit picture, around 41.4 million kilometres. Sixth formers can go on to model the two tracks and see how tiny the angles are that eighteenth-century observers had to measure. Pupils working towards GCSE physics or maths can follow the ratios, the log plot and the Jupiter calculation. The planetary figures are JPL\'s; every fit, prediction and mass on this page is our own calculation, run on 25 September 2026. NASA, JPL, Historic England, Richmond Council, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'District line to Richmond, lessons at home',
      intro: 'Richmond has the District line, the Mildmay line and main-line trains. Learners in our classes use none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Richmond station', p: 'TfL\'s open data lists the District line, the Mildmay line and South Western Railway at Richmond.' },
          { h3: 'Barnes to Hampton', p: 'A learner by the river at Barnes and another out at Hampton can join the same class from their own desks.' },
          { h3: 'Regular orbits', p: 'Classes keep to a steady pattern: five to ten learners at one stage, twice a week, at an agreed UK time.' }
        ] },
        { kind: 'spec', title: 'Richmond and its neighbours', p: 'Richmond upon Thames is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, adding a link to each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a> to the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a model solar system to weighing planets',
    intro: 'We find each learner\'s rung in the free lesson. A school year tells us roughly where to look, nothing more.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Planets in motion', p: 'Children animate planets in Scratch and notice that the far ones take longer to go round.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Tables and patterns', p: 'Python tables of distances and years, squares and cubes, and a first look for a rule that fits them all.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Laws from data', p: 'Log plots, fitted slopes, held-back predictions and physical constants, strong material for physics, maths or computing projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Seeing structure', p: 'Adults learn how scientists find laws in data and why a log scale can turn a curve into a line.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI knows Kepler\'s law already. Why should a Richmond teenager rediscover it?',
    intro: 'Because knowing a law and being able to use it as a tool are different skills.',
    p1: 'An AI can state Kepler\'s third law in a sentence and quote Jupiter\'s mass to several figures. A learner who has plotted JPL\'s numbers on log scales, seen the slope come out at one and a half, predicted Neptune from four inner planets and then weighed Jupiter from its moons has something the AI\'s sentence cannot give: a working method for pulling a law out of data and turning it into a measuring instrument. That method is what physicists, engineers and data scientists do every day.',
    p2: 'Learners also practise a scientist\'s honesty: noticing that Io and Europa disagree slightly with the outer moons, and asking why instead of rounding it away. AI will keep supplying facts; people who know where facts come from will keep being the ones who find new ones.',
    closer: 'Kew Observatory was built because people wanted to measure the heavens. A Richmond learner who can do some of that measuring with code is continuing a very local project.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Teddington to Twickenham, every class live',
    intro: 'From any part of Richmond upon Thames, class begins when the video call starts.',
    cells: [
      { h3: 'From your own room', p: 'Learners need a laptop or desktop, headphones, and an internet connection steady enough for an hour of video.' },
      { h3: 'English school stages', p: 'We use the Key Stages of English schools, from Key Stage 1 to sixth form, and name GCSE and A level where they apply. Classes are taught in English.' },
      { h3: 'First lesson on us', p: 'The free lesson is actual teaching, and by the end the teacher can suggest where the learner should start. We do not ask for any card details.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners who are at the same point share a class, gathered from across the UK and abroad so that a good hour is available.' },
      { h3: 'Twice each week', p: 'Classes normally run on two evenings a week and stop for half terms, holidays and exam time as agreed.' },
      { h3: 'Times you can trust', p: 'Teachers work in India, and every time we give is already converted to UK time.' }
    ],
    spec: { title: 'Nearly 200,000 residents, one right class', p: 'Richmond upon Thames has around 195,000 residents, and a good group needs five learners at the same stage free at the same hour, so our classes reach far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Richmond families',
    intro: 'A free first lesson, then one monthly fee, identical in Kew, Hampton and everywhere between.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a group of five to ten at the same level.',
    private: 'About eight live lessons a month, the learner alone with the teacher.',
    closer: 'Families in Richmond upon Thames pay in US dollars, as all families outside India do; pound prices are not shown anywhere on the site. Payment begins only after the free lesson and after you have chosen a course and a weekly time. Pausing, missed lessons and switching between a group and one-to-one lessons are explained on the pricing page.'
  },

  reviewsH2: 'Six families, reviewing us on Google',

  book: {
    h2: 'Book your free lesson',
    intro: 'Give us the learner\'s age or year and one interest. We could start with a Scratch solar system, a Python table of planets, or weighing Jupiter as on this page.',
    success: 'Thank you. Your Richmond lesson request is with our team.'
  },

  faq: {
    h2: 'Richmond families\' questions',
    intro: 'On the borough, the Kepler project and how lessons work.',
    items: [
      { q: 'How many people live in Richmond upon Thames?', a: 'ONS Census table TS001 records 195,278 usual residents in the London Borough of Richmond upon Thames in 2021.' },
      { q: 'Why was Kew Observatory built?', a: 'Historic England\'s list entry says it was built in 1768 and 1769, designed by Sir William Chambers, when Dr Stephen Demainbray persuaded George III to take an interest in a transit of Venus.' },
      { q: 'What is Kepler\'s third law?', a: 'That the square of a planet\'s orbital period is proportional to the cube of its average distance from the Sun. Using years and astronomical units, the ratio is 1, and JPL\'s figures give 1 to within about a tenth of a per cent for all eight planets.' },
      { q: 'How can moons weigh a planet?', a: 'The same law applies to moons round a planet, but the constant depends on the planet\'s mass. Comparing the moons\' distance cubed over period squared with the planets\' gives the planet\'s mass relative to the Sun: about one thousandth for Jupiter.' },
      { q: 'Where does the data come from?', a: 'From NASA\'s Jet Propulsion Laboratory Solar System Dynamics pages: the table of approximate planetary positions, and the mean elements of planetary satellites. Both are free to read.' },
      { q: 'When would a Richmond learner have lessons?', a: 'When the free lesson is over we propose a weekly slot in a class at the right level with room to join. Teachers are in India, and all times we send are UK times.' },
      { q: 'Is anything special needed at home?', a: 'Nothing beyond a laptop or desktop with sound and a reliable connection. The Kepler project needs only Python and the numbers in JPL\'s two tables.' },
      { q: 'Is there a Modern Age Coders centre in Richmond upon Thames?', a: 'No. There is no Richmond upon Thames centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Richmond upon Thames cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'From Richmond to the rest of the map',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> is our index of the capital, with each borough linked as its page goes live, from <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> next door to <a class="cg-inline-link" href="/coding-classes-in-bromley-london">Bromley</a> across the south. Learners drawn to modelling and prediction can carry on with our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, while the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> compares how England, Scotland, Wales and Northern Ireland organise school years.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Richmond and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-kingston-upon-thames-london', label: 'Kingston' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-rch .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.8rem); }
.cg-root.cg-rch .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.07; }
.cg-root.cg-rch .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-rch .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rch .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.009em; }
.cg-root.cg-rch .cg-grid-3 { gap: clamp(0.85rem, 2.4vw, 1.7rem); }
.cg-root.cg-rch .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-rch .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rch .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-rch .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-rch .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Richmond upon Thames. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000027): 195,278 usual residents (193,417 households, 1,861 communal). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary (6 rings), 25 September 2026: 808 (I 39, II* 85, II 684); Grade I include 1193127 HAMPTON COURT PALACE, 1263073 KEW PALACE, 1080832 Ham House, 1285673 MARBLE HILL HOUSE, 1180412 ASGILL HOUSE, 1262670 THE PALM HOUSE, 1262590 TEMPERATE HOUSE, 1262593 THE PAGODA, 1357729 KEW OBSERVATORY, 1193477 Garrick\'s Villa, 1065456 Garrick\'s Shakespeare Temple, 1261987 Strawberry Hill (St Mary\'s Training College), 1253028 CHAPEL IN THE WOOD, STRAWBERRY HILL. List entry 1357729 text: OLD DEER PARK Kew Observatory, designed by Sir William Chambers, built 1768-9 when Dr Stephen Demainbray, a tutor to the royal family, persuaded George III to take an interest in a transit of Venus. Richmond Council /services/libraries/branch_libraries, 25 September 2026: Castelnau, East Sheen, Ham, Hampton Hill, Hampton, Hampton Wick, Kew, Richmond, Teddington, Twickenham, Whitton libraries, plus reference library and local studies collection. TfL Unified API HUBRMD (Richmond), 25 September 2026: District, Mildmay, South Western Railway.',
    localProject: 'JPL SSD planets/approx_pos.html Table 1 (1800 AD-2050 AD): a (au) and L rate (deg/Cy): Mercury 0.38709927, 149472.67411175; Venus 0.72333566, 58517.81538729; EM Bary 1.00000261, 35999.37244981; Mars 1.52371034, 19140.30268499; Jupiter 5.20288700, 3034.74612775; Saturn 9.53667594, 1222.49362201; Uranus 19.18916464, 428.48202785; Neptune 30.06992276, 218.45945325. T = 36000/rate yr: 0.2408, 0.6152, 1.0000, 1.8808, 11.8626, 29.448, 84.0175, 164.7903; T^2/a^3 1.00003, 1.00002, 1.00003, 1.00000, 0.99914, 0.99982, 0.99901, 0.99877. log10 T on log10 a: slope 1.49986, r2 0.99999999697. Inner four only: slope 1.5000, Neptune predicted 164.89. JPL SSD sats/elem/sep.html (P = sidereal period, days): Io 421800 km 1.762732; Europa 671100 3.525463; Ganymede 1070400 7.155588; Callisto 1882700 16.690440; Moon 384400 27.322. au = 149597870700 m (JPL astro_par.html, IAU 2012). a^3/T^2 (au, 365.25-day yr): Io 1/1039.1, Europa 1/1032.0, Ganymede 1/1047.7, Callisto 1/1047.6; Moon (Earth+Moon)/Sun 1/329,815. Venus-Earth at transit (circular) 0.27666 au = 41.39 million km. Lesson family: Kepler third law, log-log fit, held-out prediction, mass from orbits; screened 25 September 2026 (Kepler 0).',
    requiredMentions: [
      '195,278',
      'Kew Observatory',
      'Demainbray',
      'Kepler\'s third law',
      'Ganymede',
      'Callisto',
      'Marble Hill House',
      'Garrick\'s Villa',
      'Asgill House'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Richmond upon Thames E09000027: 195,278 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000027&measures=20100' },
      { claim: 'Historic England list entry 1357729, Kew Observatory: built 1768-9, Chambers, Demainbray, George III, transit of Venus.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1357729' },
      { claim: 'JPL Solar System Dynamics, Approximate Positions of the Planets, Table 1 elements and rates.', url: 'https://ssd.jpl.nasa.gov/planets/approx_pos.html' },
      { claim: 'JPL Solar System Dynamics, Planetary Satellite Mean Elements: Galilean moons and the Moon.', url: 'https://ssd.jpl.nasa.gov/sats/elem/sep.html' },
      { claim: 'JPL astrodynamic parameters: au = 149,597,870,700 m (IAU 2012).', url: 'https://ssd.jpl.nasa.gov/astro_par.html' },
      { claim: 'Richmond Council branch libraries list.', url: 'https://www.richmond.gov.uk/services/libraries/branch_libraries' },
      { claim: 'TfL Unified API, StopPoint HUBRMD (Richmond): District, Mildmay, South Western Railway.', url: 'https://api.tfl.gov.uk/StopPoint/HUBRMD' }
    ],
    rejectedClaims: [
      'Which transit Kew observed and what was measured there: the list entry says only that George III took an interest in a transit of Venus; no observation results are claimed.',
      'Why Io and Europa give slightly different Jupiter masses: not established from a primary source; posed as a question pointing to the table notes.',
      'Solar parallax in arcseconds: needs an Earth radius from a source not captured (JPL physical parameters page is script-rendered), so omitted.',
      'Kew Gardens as a World Heritage Site and NPL history at Teddington: not read at a primary source for this build and not used.',
      'That Richmond is the only London borough on both banks of the Thames: commonly said but not verified at a primary source, so not stated.',
      'Richmond schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Richmond: never a standout; used only to order the build.'
    ]
  }
};
