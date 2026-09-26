'use strict';
// Hertfordshire (cg- county index, UK cluster Phase 7, row 214). Ten districts under Hertfordshire County Council.
// Spine: you cannot steer what you cannot see in time. GOV.UK (29 March 2025): the Rosalind Franklin rover was
// "entirely built in Stevenage by engineers from Airbus UK", due to launch in 2028 and land on Mars in 2030. Our
// run (scratchpad hrt/lt.py, 26 September 2026): JPL Horizons observer table, Mars (499) from geocentre, quantity
// 20 (range), daily 1 January 2030 to 31 December 2032, 1,096 days; one-way light time = range x 1 au / c. Closest
// 12 May 2031 at 0.5534 au, 82.8 million km, 4.6 min one way (9.2 round trip); farthest 27 July 2032 at 2.6365 au,
// 394.4 million km, 21.93 min one way (43.9 round trip). Round trip above 30 minutes on 700 of 1,096 days. A
// driver allowed one command per round trip gets 52 in an eight-hour shift at the closest and 10 at the farthest.
// Lesson family: latency and the control loop (why distant machines need autonomy), with light-time computed from
// an ephemeris; screened site-wide 26 September 2026 (light time, round trip, Horizons observer: 0 hits); distinct
// from Kepler's third law on JPL elements (Richmond) and from dead reckoning drift (FIRST LEGO League spoke).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for the ten districts (1,198,800, our sum);
// ONS Census 2021 built-up areas, checked with our OA-level sums (Harlow excluded, Essex; Watford BUA 131,325
// spans Watford, Three Rivers and Hertsmere); Hertfordshire County Council school term dates 2026-27 (start of
// term 1 September 2026; half term 26 to 30 October 2026; Christmas 21 December 2026 to 1 January 2027; February
// half term 15 to 19 February 2027; Easter 26 March to 9 April 2027; May half term 31 May to 4 June 2027; summer
// holiday 23 July to 31 August 2027); GOV.UK UK Space Agency case study "Life on Mars? ExoMars Programme" and news
// item of 29 March 2025; ESA ExoMars page (Rosalind Franklin launch target 2028; "2 m rover drill depth").

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'HERTFORDSHIRE', blurb: 'Ten districts and thirty-two towns, and a Stevenage-built rover that will be anywhere from 4.6 to 21.9 light-minutes from home.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hertfordshire',
  code: 'hrc',
  accent: '#7A6150',
  accentRationale: 'Hertfordshire: a Martian-dust brown from the solver (4.63:1 on the darkest paper tint), warmer and greyer than any other UK county accent',
  pageType: 'governorate',
  place: {
    name: 'Hertfordshire',
    eyebrow: 'County of Hertfordshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'St Albans', href: '/best-coding-class-in-st-albans' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hertfordshire',
  title: 'Coding Classes in Hertfordshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes across Hertfordshire, from Watford and Stevenage to St Albans, Hemel Hempstead and Hitchin. The first class is free.',
  ogDescription: 'Coding classes for all of Hertfordshire, with a project on the Stevenage-built Mars rover: work out how far away it will be, and why nobody can drive it with a joystick.',
  twitterDescription: 'Hertfordshire coding, Python and AI classes for ages 6 to 67, taught live online. First class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Hertfordshire',
    description: 'Ability-placed online coding, Python, AI, robotics thinking and mathematics for children, teenagers and adults across the ten Hertfordshire districts, taught live in English.'
  },

  h1: 'Coding classes in Hertfordshire',
  capsuleQ: 'What are the best coding classes in Hertfordshire?',
  capsule: 'Hertfordshire is ten districts and boroughs with 1,198,800 residents at the 2021 Census, and like its neighbours it has no single dominant town: Watford, Hemel Hempstead and Stevenage are the three largest, followed by St Albans, Welwyn Garden City and more than two dozen others. Our lessons come to every one of them in the same way. They are live on video with teachers based in India, and learners join at the level they have reached, whatever their age, from 6 to 67. Pick a small group of five to ten or have a teacher to yourself. Subjects run from first programs through Python and AI to maths. The county project follows a Mars rover built in Stevenage. There is no charge for lesson one; afterwards it is USD 100 monthly for a group seat and USD 150 for private lessons.',
  lead: 'Imagine steering a car where every turn of the wheel takes twenty minutes to reach the tyres, and every picture from the windscreen takes another twenty to reach you. That is roughly what driving on Mars would be like on a bad day, and it is why the rover being built for Europe\'s ExoMars mission has to make many of its own decisions. The UK Space Agency says the Rosalind Franklin rover was built entirely in Stevenage by Airbus engineers, and that it is due to launch in 2028 and land in 2030. So Hertfordshire\'s project asks a question that sounds simple and is not: how far away will that rover be, day by day, once it arrives, and what does that distance do to anyone trying to control it from Earth?',
  wa: 'Hello Modern Age Coders, please could we have a free lesson for a learner in Hertfordshire?',

  picks: {
    eyebrow: 'Courses for Hertfordshire',
    h2: 'Four courses Hertfordshire learners often begin with',
    intro: 'A six-year-old in Tring who loves the museum\'s animals, a Year 7 in Letchworth who wants to make a game, a Year 11 in Bishop\'s Stortford reading about Mars and machine learning, and an operations analyst in Hatfield buried in repetitive reports. Different first courses; the same free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch for young beginners: characters that move, react and keep score, and the first idea that a program is a set of instructions.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real typed Python for children, with enough arithmetic practice to work out a light-minute from the speed of light.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning, neural networks and computer vision for teenagers, the family of ideas that lets a machine judge terrain from a camera.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python automation for professionals: scraping, browser automation and applied AI for documents and forecasts.' }
    ]
  },

  sections: [
    {
      id: 'hertfordshire', tint: '', eyebrow: 'The county today',
      h2: 'Ten districts, 1,198,800 people and a string of towns that overlap their boroughs',
      intro: 'District totals are 2021 Census counts from Nomis. Towns are ONS built-up areas, and we checked each against our own count of the census output areas inside the county.',
      body: [
        { kind: 'table', caption: 'Hertfordshire\'s ten districts and boroughs, usual residents at Census 2021, largest first', head: ['District or borough', 'Usual residents', 'Main towns'], rows: [
          ['Dacorum', '155,081', 'Hemel Hempstead, Berkhamsted, Tring'],
          ['East Hertfordshire', '150,158', 'Bishop\'s Stortford, Hertford, Ware, Sawbridgeworth, Buntingford'],
          ['St Albans', '148,167', 'St Albans, Harpenden, London Colney, Redbourn'],
          ['North Hertfordshire', '133,210', 'Hitchin, Letchworth, Royston, Baldock'],
          ['Welwyn Hatfield', '119,836', 'Welwyn Garden City, Hatfield'],
          ['Hertsmere', '107,827', 'Borehamwood, Bushey, Potters Bar, Radlett'],
          ['Watford', '102,246', 'Watford'],
          ['Broxbourne', '99,009', 'Cheshunt, Hoddesdon, Waltham Cross'],
          ['Three Rivers', '93,771', 'Rickmansworth, Chorleywood, Abbots Langley, Moor Park'],
          ['Stevenage', '89,495', 'Stevenage']
        ] },
        { kind: 'p', text: 'Ten districts of similar size, none above about 155,000, means Hertfordshire\'s children are spread over many towns rather than gathered in one. Several of those towns do not fit their own borough. The Watford built-up area holds 131,325 people, well above Watford borough\'s 102,246, because it runs into Three Rivers and Hertsmere. Stevenage\'s built-up area spills into North Hertfordshire. Hemel Hempstead reaches into Three Rivers. A family\'s town and a family\'s council are often two different answers.' },
        { kind: 'table', caption: 'Hertfordshire towns by ONS built-up area, Census 2021, largest first; Harlow is in Essex and is left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Watford', '131,325', 'Berkhamsted', '21,240'],
          ['Hemel Hempstead', '95,985', 'Ware', '19,625'],
          ['Stevenage', '94,470', 'Abbots Langley and Kings Langley', '18,205'],
          ['St Albans', '75,540', 'Royston', '17,445'],
          ['Welwyn Garden City', '51,505', 'Chorleywood', '12,630'],
          ['Cheshunt', '43,680', 'Tring', '11,960'],
          ['Hatfield', '41,560', 'Waltham Cross', '11,940'],
          ['Bishop\'s Stortford', '40,915', 'Baldock', '10,615'],
          ['Hoddesdon', '40,615', 'Sawbridgeworth', '10,475'],
          ['Borehamwood', '39,765', 'Radlett', '8,185'],
          ['Hitchin', '35,220', 'London Colney', '7,930'],
          ['Letchworth', '33,990', 'Buntingford', '7,875'],
          ['Harpenden', '30,965', 'Moor Park', '5,850'],
          ['Hertford', '28,800', 'Bovingdon', '5,310'],
          ['Bushey', '28,425', 'Redbourn', '5,185'],
          ['Rickmansworth', '26,290', '', ''],
          ['Potters Bar', '23,400', '', '']
        ] },
        { kind: 'p', text: 'Our count agrees with the ONS totals to within rounding for all but three rows. Sawbridgeworth reaches about two thousand people into Essex, Hoddesdon a little under nine hundred, and Borehamwood a couple of hundred into London; the table prints the ONS figure for the whole place in each case. Harlow is the opposite: an Essex town with about 420 residents on the Hertfordshire side, so it is not a Hertfordshire town at all.' },
        { kind: 'callout', h3: 'Hertfordshire County Council\'s 2026-27 school year', p: 'For the county\'s community schools, term starts on 1 September 2026, October half term is 26 to 30 October, and Christmas runs 21 December 2026 to 1 January 2027. February half term is 15 to 19 February 2027, Easter 26 March to 9 April, the May half term 31 May to 4 June, and the summer holiday begins on 23 July 2027. The council notes that academies, voluntary-aided, foundation and free schools may have different dates, so we agree breaks family by family. The county\'s partially selective schools have <a class="cg-inline-link" href="/11-plus-maths-tuition-hertfordshire">a maths page of their own</a>; this page gives no school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hertfordshire project',
      h2: 'How far away is a Stevenage rover, and what does the distance do?',
      intro: 'A real ephemeris, a constant everyone learns at school, and a few lines of code. The answers surprise most adults.',
      body: [
        { kind: 'p', text: 'NASA\'s Jet Propulsion Laboratory publishes a free service called Horizons that gives the position of any planet on any date. We asked it for the distance from Earth to Mars every day from 1 January 2030, the year the rover is due to land, to 31 December 2032: 1,096 rows. Divide each distance by the speed of light, 299,792.458 kilometres a second, and you have the time a radio signal takes to cross the gap one way. Double it for a question and its answer.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: Earth to Mars, from JPL Horizons, converted to signal time', head: ['Date', 'Distance', 'One way', 'Question and answer'], rows: [
          ['1 January 2030', '2.081 au', '17.3 minutes', '34.6 minutes'],
          ['1 July 2030', '2.544 au', '21.2 minutes', '42.3 minutes'],
          ['1 January 2031', '1.564 au', '13.0 minutes', '26.0 minutes'],
          ['12 May 2031, closest in the window', '82.8 million km', '4.6 minutes', '9.2 minutes'],
          ['1 January 2032', '1.773 au', '14.7 minutes', '29.5 minutes'],
          ['27 July 2032, farthest in the window', '394.4 million km', '21.93 minutes', '43.9 minutes']
        ] },
        { kind: 'p', text: 'The first surprise is the range. Mars is almost five times farther away at its farthest than at its closest, because both planets are going round the Sun at different speeds and spend long stretches on opposite sides of it. The second is how rarely it is close. On 700 of the 1,096 days, a question and its answer take more than half an hour. A learner who plots the column sees a slow wave, not a constant, and learns that "how far is Mars?" has no single answer.' },
        { kind: 'p', text: 'The third lesson is about control, and it is the one that matters for the rover. Suppose a driver on Earth may send one command, wait for the picture showing what happened, and only then send the next. In an eight-hour shift that allows 52 commands on the closest day of the window and 10 on the farthest. Ten small moves a day is not driving. It is why a rover must look at the ground with its own cameras, judge a safe route and take many small decisions without asking, and why the UK Space Agency\'s account of the mission speaks of autonomous navigation.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Convert three distances to light-minutes on a calculator, then in Python, and check that the answers match.' },
          { h3: 'Ages 13 to 16', p: 'Load all 1,096 rows, plot signal time against date, and find the closest and farthest days with a loop rather than by eye.' },
          { h3: 'Ages 16 and up', p: 'Simulate a rover that stops for orders against one that plans its own moves, and measure how far each gets in a day.' }
        ] },
        { kind: 'callout', h3: 'What the numbers are and are not', p: 'The distances are between the centres of Earth and Mars, from JPL\'s published ephemeris, and the landing date is the UK Space Agency\'s stated plan, not a guarantee. Real missions relay through orbiting spacecraft and cannot talk to Mars at all when the Sun is in the way; our one-command-per-round-trip driver is a teaching model, not how any mission actually operates.' }
      ]
    },
    {
      id: 'stevenage', tint: 'deep', eyebrow: 'Why this county',
      h2: 'A Mars rover with a Stevenage address',
      intro: 'The Hertfordshire link, in the words of the agencies that fund and run the mission.',
      body: [
        { kind: 'table', caption: 'The Rosalind Franklin rover, from UK Space Agency and ESA pages', head: ['Source', 'What it says'], rows: [
          ['UK Space Agency, 29 March 2025', 'The rover was "entirely built in Stevenage by engineers from Airbus UK" and "is due to launch in 2028 with the support of NASA and land on Mars in 2030".'],
          ['UK Space Agency, ExoMars case study', 'Built by Airbus Defence and Space at the company\'s UK facility in Stevenage; its software "will have a degree of \'intelligence\' and autonomy to make certain decisions on the ground" and will navigate using optical sensors.'],
          ['UK Space Agency, 29 March 2025', 'The mission is to drill 2 metres into the surface to hunt for signs of ancient life.'],
          ['European Space Agency', 'The ExoMars programme\'s second mission, carrying the Rosalind Franklin rover, will target launch in 2028; the first European rover, with a 2 m drill depth.']
        ] },
        { kind: 'p', text: 'The rover is named after Rosalind Franklin, the British scientist whose X-ray work was central to understanding the structure of DNA. For a child in Stevenage, the useful part of the story is not the rocket. It is that the machine was designed, built and tested by people in their own town, many of whom began by writing small programs that did one thing, and checking that they did it right.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Airbus, the UK Space Agency, ESA, NASA or JPL, or with Hertfordshire County Council, and this page implies none. The quotations are theirs; the distance calculation, the teaching model and any error in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-st-albans">St Albans</a> has a city page of its own, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> is the next county west and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> lies to the south. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route through',
    h2: 'From a sprite that follows orders to a machine that makes its own',
    intro: 'The free lesson finds the right first rung. A school year is useful information, not a rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Instructions, exactly', p: 'Scratch characters that do precisely what they are told, which is the first and most important thing to understand about any machine.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Numbers with units', p: 'Python arithmetic with real quantities, kilometres, seconds and minutes, and the habit of checking an answer another way.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Machines that judge', p: 'Machine learning and computer vision, alongside the algorithms that plan a route through a grid of obstacles.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Automation at work', p: 'Python that removes repetitive tasks, with a clear view of when a person should stay in the loop.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding when AI writes code',
    h2: 'Rovers already drive themselves. Why should a Hertfordshire teenager learn to program?',
    intro: 'Because somebody has to decide which choices a machine may make alone, and that decision is written in code.',
    p1: 'The rover\'s autonomy is not magic, and it is not a chatbot. It is software that people wrote to judge terrain from images, pick a route and stop when unsure, with limits set by engineers who understood exactly how long a message from Earth would take. The same is true of an AI assistant that writes code: it acts on its own between your instructions, and what it does in that gap depends on what it was told and what it was allowed.',
    p2: 'A student who has worked out that a question to Mars can take 43.9 minutes to answer understands something most people never consider: latency decides how much freedom a machine must have, and freedom decides how carefully its rules must be written. That lesson transfers directly to automation at work, to self-driving systems and to AI agents, all of which are machines acting between checks.',
    closer: 'So the reason to learn to code in Hertfordshire in 2026 is to be one of the people who set those limits, not one of the people surprised by them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Royston to Rickmansworth with no drive at either end',
    intro: 'Hertfordshire is a county of towns joined by busy roads. An online lesson skips every one of them.',
    cells: [
      { h3: 'Taught at home', p: 'A bedroom in Ware, a kitchen in Berkhamsted, a desk in Borehamwood. The teacher shares a screen and the learner does the typing.' },
      { h3: 'School words families know', p: 'Key Stages, GCSE options and A levels are named as Hertfordshire schools name them, and everything is in English.' },
      { h3: 'First lesson on us', p: 'A complete lesson with a teacher, ending with an honest recommendation of level and course. Nobody asks for card details.' },
      { h3: 'Matched by stage', p: 'Groups of five to ten learners who are at the same point, gathered from many places, so the level is right and the time is sensible.' },
      { h3: 'Holidays by agreement', p: 'Most learners take two lessons a week, with breaks settled around their own school\'s dates, which in Hertfordshire can differ by school type.' },
      { h3: 'Every time in UK time', p: 'Teachers work from India, which is four and a half hours ahead of British Summer Time and five and a half hours ahead in winter. Bookings always show the UK time.' }
    ],
    spec: { title: 'Why a level-based group suits Hertfordshire', p: 'Thirty-odd towns and no dominant city mean a class formed around one town rarely has enough learners at the same stage. Forming groups by level lets a Tring learner and a Cheshunt learner work side by side.' }
  },

  fees: {
    h2: 'What classes cost in Hertfordshire',
    intro: 'One set of prices covers the whole county, and every country except India.',
    first: 'A full lesson of genuine work, ending in a suggested level and course.',
    group: 'About eight lessons each month, in a group of five to ten learners at one level.',
    private: 'About eight lessons each month with a teacher and one learner.',
    closer: 'All fees are in US dollars, the rate we charge outside India, and there is no pound price list. Payment only begins after the free lesson has agreed a course and a weekly time; the pricing page covers pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Reviews families left on Google',

  book: {
    h2: 'Request the free lesson',
    intro: 'Share an age or school year and one thing the learner enjoys. Lesson one might be a Scratch game, a first Python calculation, or working out how long a message takes to reach Mars.',
    success: 'Thank you. We have your Hertfordshire request.'
  },

  faq: {
    h2: 'Hertfordshire questions',
    intro: 'The county, the rover project and the lessons.',
    items: [
      { q: 'How many people live in Hertfordshire?', a: 'The ten Hertfordshire districts and boroughs held 1,198,800 usual residents at the 2021 Census, from Office for National Statistics data on Nomis. Dacorum was the largest at 155,081 and Stevenage the smallest at 89,495.' },
      { q: 'What are the biggest towns in Hertfordshire?', a: 'By ONS built-up area in 2021: Watford 131,325, Hemel Hempstead 95,985, Stevenage 94,470, St Albans 75,540 and Welwyn Garden City 51,505. The table on this page lists thirty-two Hertfordshire towns above five thousand residents.' },
      { q: 'When is half term in Hertfordshire in autumn 2026?', a: 'Hertfordshire County Council lists 26 to 30 October 2026, with term starting on 1 September 2026. Academies, voluntary-aided, foundation and free schools may set different dates, so check with your school.' },
      { q: 'What is the Mars project?', a: 'Learners use JPL Horizons distances from Earth to Mars for 2030 to 2032 and convert them to signal time. A message takes between 4.6 and 21.93 minutes one way in that window, which is why a rover cannot be driven live and must make many decisions itself.' },
      { q: 'Was the Mars rover really built in Stevenage?', a: 'Yes. The UK Space Agency says the Rosalind Franklin rover was entirely built in Stevenage by Airbus UK engineers, and that it is due to launch in 2028 and land on Mars in 2030.' },
      { q: 'Is there a classroom in Watford, St Albans or Stevenage?', a: 'No. All lessons are live online, so a learner in Buntingford joins the same class as one in Watford with no travelling.' },
      { q: 'What ages do you teach?', a: 'Six through sixty-seven. Scratch is the usual first step for young children, typed Python tends to follow between ten and twelve, and teenagers and adults move on to AI, data, web and software. The free lesson places each learner.' },
      { q: 'Do you teach AI and machine learning to teenagers?', a: 'Yes. The teen AI and machine learning course is for ages 13 to 18 and covers Python, real ML models, neural networks, computer vision, language processing and modern generative AI.' },
      { q: 'What are the fees?', a: 'The first lesson is free. After that, USD 100 a month for a group place or USD 150 a month for private lessons, with no registration fee and no lock-in.' },
      { q: 'Do you prepare children for the Hertfordshire selective tests?', a: 'There is a separate maths page about them. This page is about coding, and we give no advice on schools or admissions.' }
    ]
  },

  next: {
    eyebrow: 'More of the UK',
    h2: 'Pages beyond Hertfordshire',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-st-albans">St Albans</a> has its own page, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> builds a cipher and <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> counts forecasts. Start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for the rest, or read <a class="cg-inline-link" href="/best-online-coding-classes-uk">how to choose an online class</a> first.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Hertfordshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-st-albans', label: 'St Albans' },
    { href: '/11-plus-maths-tuition-hertfordshire', label: 'Hertfordshire 11 plus' }
  ],

  personalityCss: `
.cg-root.cg-hrc .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.5rem); }
.cg-root.cg-hrc .cg-hero h1 { font-weight: 700; letter-spacing: -0.026em; line-height: 1.03; }
.cg-root.cg-hrc .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hrc .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hrc .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-hrc .cg-table caption { font-weight: 600; font-style: italic; }
.cg-root.cg-hrc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrc .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-hrc .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hrc .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Hertfordshire (ten districts under Hertfordshire County Council). ONS Census 2021 TS001 via Nomis: Dacorum 155,081; East Hertfordshire 150,158; St Albans 148,167; North Hertfordshire 133,210; Welwyn Hatfield 119,836; Hertsmere 107,827; Watford 102,246; Broxbourne 99,009; Three Rivers 93,771; Stevenage 89,495; total 1,198,800 (our sum). ONS Census 2021 built-up areas (published, rounded; checked by our OA sums): Watford 131,325 (Watford, Three Rivers, Hertsmere); Hemel Hempstead 95,985; Stevenage 94,470; St Albans 75,540; Welwyn Garden City 51,505; Cheshunt 43,680; Hatfield 41,560; Bishop\'s Stortford 40,915; Hoddesdon 40,615 (about 860 outside); Borehamwood 39,765 (about 240 outside); Hitchin 35,220; Letchworth 33,990; Harpenden 30,965; Hertford 28,800; Bushey 28,425; Rickmansworth 26,290; Potters Bar 23,400; Berkhamsted 21,240; Ware 19,625; Abbots Langley and Kings Langley 18,205; Royston 17,445; Chorleywood 12,630; Tring 11,960; Waltham Cross 11,940; Baldock 10,615; Sawbridgeworth 10,475 (about 2,050 outside); Radlett 8,185; London Colney 7,930; Buntingford 7,875; Moor Park 5,850; Bovingdon 5,310; Redbourn 5,185. Harlow 93,580 excluded (about 420 in East Hertfordshire). Chiswell Green omitted from the page (appears on the St Albans page). Hertfordshire County Council School term dates, School year 2026-27: "Start of term : 1 September 2026"; "Half term holiday : 26 October 2026 - 30 October 2026"; "Christmas holiday : 21 December 2026 - 1 January 2027"; "Half term holiday : 15 February 2027 - 19 February 2027"; "Easter holiday : 26 March 2027 - 9 April 2027"; "Half term holiday : 31 May 2027 - 4 June 2027"; "Summer holiday : 23 July 2027 - 31 August 2027"; "Academies, voluntary-aided, foundation and free schools may have different term dates". GOV.UK news 29 March 2025 (UK firm to land Europe\'s first rover on Mars): "The rover, entirely built in Stevenage by engineers from Airbus UK, is due to launch in 2028 with the support of NASA and land on Mars in 2030"; "drill 2 metres down into the surface to hunt for signs of ancient life"; "autonomous navigation technologies". GOV.UK case study ExoMars: "The Rosalind Franklin rover was built by Airbus Defence and Space, at the company\'s UK facility in Stevenage, UK"; software "will have a degree of \'intelligence\' and autonomy to make certain decisions on the ground and will navigate using optical sensors". ESA ExoMars: second mission carrying the Rosalind Franklin rover "will target launch in 2028"; "1st European rover"; "2 m rover drill depth".',
    localProject: 'Latency and the control loop. JPL Horizons API, COMMAND 499 (Mars), CENTER 500@399 (geocentre), observer table, QUANTITIES 20 (range delta), daily 2030-01-01 to 2032-12-31 (1,096 rows), read 26 September 2026. One-way light time = delta x 149,597,870.700 km / 299,792.458 km/s. 2030-01-01 2.081 au 17.3 min (34.6 round trip); 2030-07-01 2.544 au 21.2 (42.3); 2031-01-01 1.564 au 13.0 (26.0); closest 2031-05-12 0.5534 au 82.8 million km 4.6 min (9.2); 2032-01-01 1.773 au 14.7 (29.5); farthest 2032-07-27 2.6365 au 394.4 million km 21.93 min (43.9). Round trip above 30 minutes on 700 of 1,096 days. Teaching model: one command per round trip in an eight-hour shift gives 52 commands at the closest and 10 at the farthest. Page states distances are centre to centre, the landing date is the agency\'s plan, relays and solar conjunction are ignored, and the one-command driver is not how missions operate. AI angle: autonomy is written by people who understood the latency; AI agents are machines acting between checks. Lesson family: latency and the control loop (autonomy forced by signal delay), light time from an ephemeris; screened free 26 September 2026 and distinct from Kepler\'s third law on JPL elements (Richmond) and dead reckoning drift (FIRST LEGO League spoke).',
    requiredMentions: [
      '1,198,800',
      '23 July 2027',
      'entirely built in Stevenage',
      '21.93 minutes',
      '394.4 million km',
      '82.8 million km',
      '700 of the 1,096 days',
      '12 May 2031',
      'Abbots Langley and Kings Langley',
      '131,325'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the ten Hertfordshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Hertfordshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Hertfordshire County Council school term dates 2026-27.', url: 'https://www.hertfordshire.gov.uk/services/schools-and-education/at-school/school-term-dates/school-term-dates.aspx' },
      { claim: 'UK Space Agency, 29 March 2025: rover entirely built in Stevenage, launch 2028, landing 2030, 2 metre drill.', url: 'https://www.gov.uk/government/news/uk-firm-to-land-europes-first-rover-on-mars' },
      { claim: 'UK Space Agency ExoMars case study: built at Airbus Defence and Space in Stevenage; autonomy and optical navigation.', url: 'https://www.gov.uk/government/case-studies/exomars' },
      { claim: 'ESA ExoMars programme: Rosalind Franklin rover to target launch in 2028; first European rover; 2 m drill depth.', url: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars' },
      { claim: 'JPL Horizons: Earth to Mars range, daily, 2030 to 2032.', url: 'https://ssd.jpl.nasa.gov/horizons/' }
    ],
    rejectedClaims: [
      'The UK\'s financial contribution to ExoMars and the value of Airbus contracts: money figures are left out of place pages.',
      'The political reasons for the mission\'s delay: not relevant to a coding page and not repeated.',
      'Rosalind Franklin rover driving speed per sol: ESA lists a figure but we did not read the definition of a sol at a primary source for this build, so no driving arithmetic uses it.',
      'Harlow as a Hertfordshire town: its built-up area has only about 420 residents in East Hertfordshire, so it is excluded.',
      'Named Hertfordshire schools: the county\'s selective schools belong on the 11 plus page, and no school is named here.',
      'Letchworth and Welwyn Garden City as the first garden cities: not read at a primary source for this build, so no garden-city history is given.'
    ]
  }
};
