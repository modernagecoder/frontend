'use strict';
// Barnet (cg- London borough page, UK cluster Phase 5, row 162). Named sources only.
// Spine: a traffic jam needs no crash and no bottleneck, only enough cars and a little random braking. Learners code
// the Nagel-Schreckenberg cellular automaton (single-lane ring of 2,000 cells of 7.5 m, top speed 5 cells a second, about
// 84 mph; rules: accelerate, keep the gap, slow at random with probability p, move) and measure flow = density x mean
// speed over 3,000 seconds after a 1,000 second warm-up (seed 20260925). p = 0: flow rises in a straight line to
// 2,700/h at 32.2 vehicles per mile and peaks at 2,880/h at 42.9/mile, nobody stops below 32.2/mile. p = 0.3: peak about
// 1,680/h at 25.7/mile, and at that density 8.2% of cars are stopped at any moment with no obstacle on the road.
// Real data: National Highways WebTRIS, MIDAS site M1/2116B (southbound, 522416E 187767N, inside the ONS December 2024
// BFC boundary of Barnet, E09000003), March 2025, 2,962 of 2,972 fifteen-minute rows with data. Flow = 4 x 15-minute
// volume, density = flow / average speed (whole carriageway; lane count not used). Median flow by density band: 450/h
// (0-20/mile), 1,348 (20-40), 2,080 (40-60), 2,574 (60-80), 2,682 (80-120), 2,414 at 120+ with median speed 10 mph;
// 8.2% of intervals averaged under 40 mph. January 2026 onwards returned empty rows, so March 2025 is used.
// Lesson family: cellular automaton (traffic, Nagel-Schreckenberg) and the fundamental diagram. Screened 25 September
// 2026 (cellular automaton 0, Nagel 0). Distinct from inspection paradox (Bangor NI), Marey charts (Derry), queueing
// or Monte Carlo (Milton Keynes) and difference-in-differences (Newport, which used DfT counts).
// Barnet Council's site served an Imperva bot check ("Pardon Our Interruption") to our reader and was not circumvented,
// so no council library list is given.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'BARNET', blurb: 'Hampstead Garden Suburb, 66 motorway sensors and a project on traffic jams that come from nowhere.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-barnet-london',
  code: 'bnt',
  accent: '#6C6A41',
  accentRationale: 'Barnet: an olive khaki from the solver (4.51:1 on every paper tint), a road-sign warmth far from the Redbridge raspberry and the Ealing indigo',
  pageType: 'governorate',
  place: {
    name: 'Barnet',
    eyebrow: 'London Borough of Barnet',
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
  routeLabel: 'Barnet, London',
  title: 'Coding Classes in Barnet, Finchley, Hendon | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Barnet: Finchley, Hendon, Edgware, Golders Green, Mill Hill and High Barnet, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and Python classes for Barnet, on a page where learners build a traffic model and watch jams appear with no crash and no bottleneck, then check it against M1 sensors.',
  twitterDescription: 'Barnet coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Barnet Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Barnet, taught live in English.'
  },

  h1: 'Coding classes in Barnet',
  capsuleQ: 'What are the best coding classes in Barnet?',
  capsule: 'Barnet is the north London borough of Finchley, Hendon, Edgware, Golders Green, Mill Hill and High Barnet, home to 389,344 people at the 2021 Census, with Hampstead Garden Suburb inside it and the M1 and A1 running through. A class worth joining here should teach a learner to build a simple model and test it against the real world, and this page\'s project does that with traffic: a few lines of code that grow jams out of nothing, compared with sensors on the M1 in Barnet. Learners aged 6 to 67 meet their teacher, who is based in India, on a live video call, either alone or in a small class of five to ten at one level. Trying it costs nothing; carrying on costs USD 100 each month in a class, or USD 150 each month one to one.',
  lead: 'Everyone who drives the M1 into London has sat in a queue that seemed to have no cause: no crash, no roadworks, and then suddenly the road is clear again. Our learners build the simplest explanation there is. Picture a ring road divided into car-length boxes. Each second, every car speeds up if it can, slows to keep a safe gap, and now and then brakes a little for no reason at all. Four rules, a few lines of code. With perfect drivers the road carries up to 2,880 cars an hour and nobody stops until it is nearly full. Add that occasional pointless tap on the brake and the road jams at barely half that density, with cars standing still and no obstacle anywhere. Then learners open National Highways\' sensor data for the M1 in Barnet and find the same rise and fall in real traffic.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Barnet.',

  picks: {
    eyebrow: 'Course picks for Barnet',
    h2: 'Four courses for Barnet learners',
    intro: 'Think of a Year 2 child in Mill Hill who lines up toy cars in queues, a Year 9 pupil in Finchley who asks why traffic stops for no reason, a Year 12 student in Edgware considering engineering or economics, and a commuter in Golders Green who would like to model their own journey. Each can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch road where each car follows a simple rule, the youngest way to see big patterns grow from small rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with lists and loops: a row of cars that move one step at a time, and a count of how many pass.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, with this page\'s traffic model and real M1 sensor data from Barnet.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who work with forecasts and want to see how a simple model can explain a messy system.' }
    ]
  },

  sections: [
    {
      id: 'barnet', tint: '', eyebrow: 'Barnet in figures',
      h2: '389,344 people, 649 listed buildings and 66 traffic sensors',
      intro: 'Every figure is published by the body named alongside it, or counted by us from its data.',
      body: [
        { kind: 'table', caption: 'Five facts about Barnet and where each is published', head: ['Fact', 'Figure', 'Publisher'], rows: [
          ['Usual residents, 2021 Census', '389,344', 'ONS Census table TS001, through Nomis'],
          ['National Heritage List entries inside the borough', '649: 2 Grade I, 34 Grade II*, 613 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['National Highways traffic sensor sites inside the borough', '66, of which 13 active on the M1 and 5 on the A1', 'WebTRIS site list, checked 25 September 2026'],
          ['Line at High Barnet station', 'Northern', 'TfL open data, checked 25 September 2026'],
          ['Fifteen-minute readings used from one M1 site', '2,962 in March 2025', 'WebTRIS, site M1/2116B']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Suburb\'s Grade I', p: 'Barnet\'s two Grade I entries on Historic England\'s list are the Hampstead Garden Suburb Free Church and the Church of St Jude.' },
          { h3: 'Squares at Grade II*', p: 'Several of Barnet\'s 34 Grade II* entries are houses on North Square and South Square in NW11, alongside Waterlow Court, Church Farmhouse Museum and Wyldes Farm.' },
          { h3: 'Sensors by the roadside', p: 'National Highways lists 66 traffic monitoring sites inside Barnet\'s boundary, most of them along the M1. Each records how many vehicles pass and how fast, every fifteen minutes.' }
        ] }
      ]
    },
    {
      id: 'sensors', tint: 'tint', eyebrow: 'The data',
      h2: 'Where the traffic figures come from',
      intro: 'National Highways publishes readings from motorway sensors through a free service called WebTRIS. This is what one site in Barnet offers.',
      body: [
        { kind: 'table', caption: 'WebTRIS sites inside Barnet, by road and status', head: ['Road', 'Active sites', 'Inactive sites'], rows: [
          ['M1', '13', '45'],
          ['A1', '5', '2'],
          ['Other', '0', '1']
        ] },
        { kind: 'p', text: 'We use site M1/2116B, on the southbound M1 and inside the borough boundary by our check, because its March 2025 record is nearly complete: 2,962 of 2,972 fifteen-minute slots carry a count and an average speed. Later months returned empty rows when we asked on 25 September 2026, so the page uses March 2025 and says so. For the learner, the data is a single download and a spreadsheet\'s worth of rows.' },
        { kind: 'p', text: 'We would normally list the borough\'s libraries here too. Barnet Council\'s website answered our automated reader with a bot-protection page, and we do not try to get round such checks, so this page gives no library list; the council\'s own site is the place to find one.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Traffic jams from nowhere: four rules and a ring road',
      intro: 'Learners code a famous traffic model, the Nagel-Schreckenberg cellular automaton, and watch jams form on an empty road.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Boxes and cars', p: 'A circular road of 2,000 boxes, each 7.5 metres long. Every car has a speed from 0 to 5 boxes a second; 5 is about 84 mph.' },
          { h3: '2. Four rules, every second', p: 'Speed up by one if below the limit. Slow down so as not to hit the car ahead. With probability p, slow by one more for no reason. Then move.' },
          { h3: '3. Fill the road and measure', p: 'Try more and more cars, and for each density measure the flow, the number of cars an hour passing any point, and how many are stopped.' }
        ] },
        { kind: 'table', caption: 'Our run, 25 September 2026: one lane, flow in cars an hour', head: ['Cars per mile', 'Perfect drivers: flow', 'Random braking p = 0.3: flow', 'Random braking: cars stopped'], rows: [
          ['6.4', '540', '507', '0%'],
          ['17.2', '1,440', '1,343', '0%'],
          ['21.5', '1,800', '1,648', '0.4%'],
          ['25.7', '2,160', '1,679', '8.2%'],
          ['32.2', '2,700', '1,627', '19.0%'],
          ['42.9', '2,880', '1,568', '30.6%'],
          ['64.4', '2,520', '1,416', '43.7%']
        ] },
        { kind: 'p', text: 'With perfect drivers the road behaves as you would hope: flow grows steadily until the cars are close together, and nobody stops until beyond 32 cars a mile. Allow each driver a small chance of braking for no reason, and the road reaches its most productive point at about 26 cars a mile. Beyond it, adding cars lowers the flow, and at that same density about one car in twelve is standing still at any moment, although nothing is blocking the road. A cluster of stopped cars with nothing ahead of it is exactly what a driver meets as a jam with no visible cause.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'An assistant will write this simulation in a moment. What it cannot do for a learner is the part that makes it science: choosing to compare perfect drivers with imperfect ones, noticing that the jam needs no obstacle, and then checking the model against real sensor data before believing it. A learner who has done all three knows that a model is a claim to be tested, not an answer, which is true of every simulation in engineering, economics and climate science.' }
      ]
    },
    {
      id: 'realroad', tint: 'tint', eyebrow: 'Checking against the M1',
      h2: 'The same shape in real traffic: site M1/2116B, March 2025',
      intro: 'Each fifteen-minute reading gives a flow and an average speed; flow divided by speed gives the density. Grouping the readings by density shows the real road\'s curve.',
      body: [
        { kind: 'table', caption: 'M1/2116B southbound, March 2025, whole carriageway', head: ['Vehicles per mile', 'Readings', 'Typical flow, vehicles an hour', 'Typical speed'], rows: [
          ['0 to 20', '1,546', '450', '50 mph'],
          ['20 to 40', '1,103', '1,348', '51 mph'],
          ['40 to 60', '79', '2,080', '47 mph'],
          ['60 to 80', '28', '2,574', '38 mph'],
          ['80 to 120', '40', '2,682', '26 mph'],
          ['120 and above', '166', '2,414', '10 mph']
        ] },
        { kind: 'p', text: 'The real road climbs and then falls just as the model does: as it fills beyond about 80 to 120 vehicles a mile, flow drops back and speeds collapse to a crawl, and in March 2025 about one fifteen-minute slot in twelve averaged under 40 mph. The numbers are not the same as the model\'s, and should not be: the sensor counts every lane of the carriageway together, and real drivers, lorries and junctions are messier than four rules. What matches is the shape, a road that carries less once it is too full, and that is the lesson.' },
        { kind: 'p', text: 'National Highways, Barnet Council, Historic England, TfL and the ONS supplied the data here and have no tie to Modern Age Coders. The readings belong to National Highways; turning them into densities, building the model and working out each percentage was done by us on 25 September 2026, with the random seed written down so anyone can rerun it.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'From High Barnet to Golders Green, and no motorway needed',
      intro: 'Barnet has a motorway, a trunk road and the Northern line. An online lesson needs none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'High Barnet', p: 'TfL\'s open data lists the Northern line at High Barnet, in the north of the borough.' },
          { h3: 'North to south', p: 'A learner in Mill Hill and one in Golders Green can share a group from their own homes, whatever the M1 is doing.' },
          { h3: 'No queue to join', p: 'The traffic model shows how a road fills up. An online class never does: learners are placed in groups of five to ten by level.' }
        ] },
        { kind: 'spec', title: 'Barnet and the rest of London', p: 'Barnet is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, and links each as its page is published, including <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one simple rule to a model tested on real data',
    intro: 'Where a learner starts depends on what they show us in the free lesson, not on the year group printed on their school report.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Simple rules, big patterns', p: 'Children give sprites one rule each and watch lines, crowds and queues appear on their own.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Lists that move', p: 'Python where a list of cars moves step by step, and a count shows how many get through.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Simulate, then test', p: 'Cellular automata, random numbers with a seed and real sensor data, the core of a strong computing or maths project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Models as claims', p: 'Adults learn to treat a forecast as a claim to test, and to compare it with data before acting on it.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a traffic simulation in seconds. Why should a Barnet teenager learn to build and test one?',
    intro: 'Because a simulation that is never checked against the world is only a very detailed guess.',
    p1: 'Ask for a traffic model and an assistant will produce a tidy cellular automaton, perhaps with an animation. It will not decide for you which question to ask of it: what happens when drivers are imperfect, what the fundamental diagram looks like, whether real roads agree. In our run the model says that random braking alone cuts a lane\'s top flow by about two fifths and leaves cars standing still on an empty road; the M1 in Barnet shows the same rise and fall. Models of epidemics, markets and climate carry the same risk of looking finished before they have been tested.',
    p2: 'A learner who has built this model and held it up against National Highways\' data learns three lasting habits: change one thing at a time, fix the random seed so a result can be repeated, and compare shapes before numbers. The software can generate code without limit. Knowing what to test, and how to judge the answer, is the work people still do.',
    closer: 'Every useful model starts as someone\'s simple idea and survives only if it meets the data. A Barnet child who learns to code can be the one who builds that idea and has the discipline to test it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Edgware to Finchley, lessons without a commute',
    intro: 'In every part of the borough, the lesson is as near as the nearest desk.',
    cells: [
      { h3: 'Learn from home', p: 'Most learners join from home with a laptop or desktop, headphones and a steady connection.' },
      { h3: 'English school terms', p: 'We use the stages English schools use, from Key Stage 1 to sixth form, with GCSE and A level named plainly. All teaching is in English.' },
      { h3: 'A real first lesson', p: 'The free first lesson is genuine work with a teacher and ends with a recommendation of level and course, with no card needed.' },
      { h3: 'Level-matched groups', p: 'Classmates are chosen for being at the same stage, five to ten of them, drawn from well beyond Barnet so that a sensible hour is always available.' },
      { h3: 'Two sessions a week', p: 'A typical class runs two evenings a week and takes time off around half terms, holidays and exam season, by arrangement.' },
      { h3: 'UK times always', p: 'Teachers work from India; every invitation and reminder gives the time as it is in Barnet.' }
    ],
    spec: { title: 'A big borough, one matched group', p: 'Barnet is home to nearly 390,000 people, yet a strong coding group still needs five learners at the same level and hour, so ours reach well beyond it.' }
  },

  fees: {
    h2: 'Fees for Barnet families',
    intro: 'The first lesson is free, then there is one monthly fee, the same across the borough.',
    first: 'A full first lesson with a teacher at no charge, ending with a suggested level, course and time.',
    group: 'Around eight live lessons a month, in a group of five to ten at the same stage.',
    private: 'Around eight live lessons a month, one teacher and one learner.',
    closer: 'Families in Finchley, Hendon or anywhere in Barnet pay in US dollars, as do all families outside India; the site carries no pound prices. No money changes hands before the free lesson has happened and you have picked a course and a weekly time. How pauses, missed classes and a switch from group to private lessons work is written up on the pricing page.'
  },

  reviewsH2: 'In their own words: six Google reviews from families',

  book: {
    h2: 'Tell us about your learner',
    intro: 'Tell us roughly how old they are or which year they are in, and something they like doing. We might start with a Scratch road of cars, a first Python loop, or the traffic model described above.',
    success: 'Thank you. Your Barnet class request is with our team.'
  },

  faq: {
    h2: 'Barnet coding class questions',
    intro: 'About the borough, the traffic project and our lessons.',
    items: [
      { q: 'How many people live in Barnet?', a: 'The 2021 Census counted 389,344 usual residents in the London Borough of Barnet, according to Office for National Statistics table TS001.' },
      { q: 'Where does the M1 traffic data come from?', a: 'From National Highways\' WebTRIS service, which publishes fifteen-minute vehicle counts and average speeds from roadside sensors. We used site M1/2116B, on the southbound M1 inside Barnet, for March 2025.' },
      { q: 'What is the Nagel-Schreckenberg model?', a: 'A cellular automaton for traffic: a road divided into boxes, where each car speeds up, keeps a safe gap, sometimes slows at random, and moves. From those four rules, jams appear with no obstacle on the road.' },
      { q: 'Can traffic really jam with no cause?', a: 'In the model, yes. With a small chance of random braking, about one car in twelve is stopped at 26 cars a mile per lane, although nothing blocks the road. The M1 data shows real traffic slowing sharply once the road is very full, the same shape.' },
      { q: 'Why is the model\'s flow different from the M1\'s?', a: 'The model is one lane of identical cars; the sensor counts every lane of the carriageway together, with lorries and junctions. The two share a shape, rising and then falling as the road fills, not exact numbers.' },
      { q: 'When are lessons for Barnet learners?', a: 'Once the free lesson is over we offer a weekly time from the classes at the learner\'s level that still have room. The teaching happens from India, yet every time in our messages is Barnet time.' },
      { q: 'What does a learner need?', a: 'A laptop or desktop, headphones or speakers, and a steady internet connection. For the traffic project, Python and one download of public data are enough.' },
      { q: 'Is there a Modern Age Coders centre in Barnet?', a: 'No. There is no Barnet centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Barnet cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Across London, and the rest of the UK',
    html: 'All 32 boroughs and the City are gathered on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, each linked as its page appears, from <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> in the east to <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a> in the west. Teenagers drawn to machine learning can look at our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI classes</a>, while families comparing England with Scotland, Wales or Northern Ireland will find each system on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Barnet and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-brent-london', label: 'Brent' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bnt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bnt .cg-hero h1 { font-weight: 800; letter-spacing: -0.018em; line-height: 1.04; }
.cg-root.cg-bnt .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-bnt .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bnt .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-bnt .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.75rem); }
.cg-root.cg-bnt .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-bnt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnt .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-bnt .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-bnt .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Barnet. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000003): 389,344 usual residents (385,950 households, 3,394 communal). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 649 (I 2, II* 34, II 613); Grade I 1078866 Hampstead Garden Suburb Free Church, 1294714 CHURCH OF ST JUDE; II* includes 1064889 WATERLOW COURT, 1188513 CHURCH FARMHOUSE MUSEUM, 1191239 WYLDES FARM, several SOUTH SQUARE NW11 and NORTH SQUARE NW11 houses. National Highways WebTRIS site list (api/v1.0/sites), 25 September 2026, positions converted from WGS84 with the OS Helmert and tested against the Barnet BFC polygon: 66 sites (M1 13 active, 45 inactive; A1 5 active, 2 inactive; 1 other inactive). TfL Unified API StopPoint 940GZZLUHBT (High Barnet), 25 September 2026: Northern. Barnet Council libraries pages (barnet.gov.uk/libraries, /libraries/find-library) returned an Imperva "Pardon Our Interruption" bot check to curl on 25 September 2026: not circumvented, no library list used.',
    localProject: 'Nagel-Schreckenberg CA: ring L = 2,000 cells x 7.5 m, vmax 5 cells/s, p in {0, 0.3}, densities 0.03-0.45 of cells occupied, 4,000 s with 1,000 s warm-up, numpy default_rng(20260925); flow q = k x mean speed (spatial average). p = 0: 6.4/mile 540/h; 17.2 1,440; 21.5 1,800; 25.7 2,160; 32.2 2,700 (84 mph, 0 stopped); 42.9 2,880 (67.1 mph, 2.0% stopped); 64.4 2,520; 96.6 1,980. p = 0.3: 6.4 507; 17.2 1,343; 21.5 1,648 (0.4% stopped); 25.7 1,679 (8.2%); 32.2 1,627 (19.0%); 42.9 1,568 (30.6%); 64.4 1,416 (43.7%); 96.6 1,162 (55.6%). WebTRIS api/v1.0/reports/Daily, site 1429 = M1/2116B ("MIDAS site at M1/2116B ... Southbound", GPS ref 522416;187767), 01-31 March 2025: 2,972 rows, 2,962 with Total Volume and Avg mph; q = 4 x volume per 15 min, k = q / avg mph; medians by k band: 0-20 450/h 50 mph (n 1,546); 20-40 1,348 51 (1,103); 40-60 2,080 47 (79); 60-80 2,574 38 (28); 80-120 2,682 26 (40); 120+ 2,414 10 (166); 8.2% of intervals under 40 mph. Requests for January 2026 onward returned rows with empty values (March 2026 all 2,972 blank) and August 2026 returned 204, so March 2025 is used. Lesson family: traffic cellular automaton and the fundamental diagram, screened free 25 September 2026.',
    requiredMentions: [
      '389,344',
      'Nagel-Schreckenberg',
      'cellular automaton',
      'M1/2116B',
      'WebTRIS',
      'Hampstead Garden Suburb Free Church',
      'Wyldes Farm',
      'Waterlow Court',
      'Church Farmhouse Museum'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Barnet E09000003: 389,344 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000003&measures=20100' },
      { claim: 'National Highways WebTRIS: site list and daily 15-minute reports; site M1/2116B, March 2025.', url: 'https://webtris.nationalhighways.co.uk/api/v1.0/sites' },
      { claim: 'Historic England NHLE listed building points, inside the ONS boundary of Barnet on 25 September 2026: 649 (2 I, 34 II*, 613 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Barnet E09000003.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUHBT (High Barnet), 25 September 2026: Northern line.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUHBT' }
    ],
    rejectedClaims: [
      'Barnet Council library list: the council site served a bot check (Imperva) to our reader; not circumvented, so no libraries are named.',
      'Number of lanes at site M1/2116B and per-lane figures: not published in the data we read, so the page compares shapes, not per-lane values.',
      'The University of London Observatory at Mill Hill: UCL pages returned 403 and it is not on the Historic England list, so it is not mentioned.',
      'Individual Barnet state schools and grammar school admissions: not read at their own sites for this build and not used.',
      'Census ethnicity, religion or country of birth for Barnet: never a standout; used only to order the build.'
    ]
  }
};
