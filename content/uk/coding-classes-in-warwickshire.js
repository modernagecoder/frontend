'use strict';
// Warwickshire (cg- county index, UK cluster Phase 7, row 218). Five districts under Warwickshire County Council
// (Coventry is in the West Midlands county). Spine: the 45-degree rule and the assumptions it hides. Warwick Castle
// (warwick-castle.com, read raw 26 September 2026): "Britain's largest working siege machine"; "The Warwick Castle
// Trebuchet weighs 22 tonnes and is almost 60 feet tall"; the show is "Set on the bank of the River Avon". Rugby
// School history page: "In 1823, a student and foundationer, William Webb Ellis (1816-1825), with a fine disregard for
// the rules of football, took the ball in his arms and ran with it, originating the game of rugby football"; school
// founded 1567. Our run (scratchpad war/proj.py, 26 September 2026): RK4 at 1 ms steps, launch speed 40 m/s (our
// teaching value, not the castle's), flat ground. No air, release at ground: best 45.0 degrees, 163.1 m (matches
// v^2/g). No air, release 15 m up: best 42.6 degrees (analytic 42.58), 177.5 m. Stone (our values: 15 kg, 0.25 m
// sphere, Cd 0.47, air 1.225): ground 44.1 degrees 146.0 m; 15 m up 41.4 degrees 159.3 m. Light ball (2 kg, 0.2 m):
// ground 41.8 degrees 107.4 m; 15 m up 38.1 degrees 118.3 m, and 45 degrees there gives 116.1 m (flat maximum).
// Lesson family: projectile motion and optimising the launch angle (the 45-degree rule's hidden assumptions, checked
// against the analytic case); screened 26 September 2026 (projectile: 0 hits); distinct from Euler drift on a
// pendulum (Leidschendam-Voorburg).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (596,773, our sum); ONS built-up areas with our OA
// check (Coventry and Tamworth excluded as neighbours' towns; Nuneaton spans North Warwickshire and Nuneaton and
// Bedworth). Warwickshire County Council term dates: both URLs tried returned 404; none printed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WARWICKSHIRE', blurb: 'Five districts, nineteen towns, and the Warwick Castle trebuchet as the excuse for a lesson on why 45 degrees is not always best.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-warwickshire',
  code: 'wks',
  accent: '#585C3C',
  accentRationale: 'Warwickshire: a castle-moss olive from the solver (5.62:1 on the darkest paper tint), the only olive among the UK county accents',
  pageType: 'governorate',
  place: {
    name: 'Warwickshire',
    eyebrow: 'County of Warwickshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Coventry', href: '/best-coding-class-in-coventry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Warwickshire',
  title: 'Coding Classes in Warwickshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, game making and maths classes across Warwickshire, from Nuneaton and Rugby to Leamington Spa, Warwick and Stratford-upon-Avon.',
  ogDescription: 'Coding classes for every Warwickshire town, and a project inspired by the Warwick Castle trebuchet: simulate a throw and find out when 45 degrees stops being the optimal angle.',
  twitterDescription: 'Warwickshire coding, Python, games and maths classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'a-level-maths-course-pure-mechanics-statistics',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Warwickshire',
    description: 'Ability-placed online coding, Python, game development, data and mathematics for children, teenagers and adults across the five Warwickshire districts, taught live in English.'
  },

  h1: 'Coding classes in Warwickshire',
  capsuleQ: 'What are the best coding classes in Warwickshire?',
  capsule: 'Warwickshire is five districts with 596,773 residents at the 2021 Census, and Coventry, though it sits in the middle of the map, is not one of them. The county\'s largest towns are Nuneaton and Rugby, then Royal Leamington Spa, Warwick, Bedworth, Stratford-upon-Avon and Kenilworth, with market towns and villages between. Every family gets the same kind of class wherever they are. Lessons are taught live over video by teachers in India, with each learner placed by what they can already do rather than their age, from 6 up to 67, either in a group of five to ten or one to one. Coding, Python, game making, data and maths are all taught. The Warwickshire project comes from Warwick Castle\'s trebuchet. The opening lesson is free, and after that it is USD 100 per month for a group place or USD 150 for private teaching.',
  lead: 'Every physics textbook says the same thing: to throw something as far as possible, launch it at 45 degrees. Warwick Castle has a 22-tonne trebuchet, almost 60 feet tall, which it calls Britain\'s largest working siege machine, and the obvious question a curious teenager asks on seeing it is how far it throws. This page\'s project goes one step further and asks what angle it should throw at. The answer is not 45 degrees, and the reason is the lesson. The textbook rule assumes a throw from ground level with no air. Neither is true of a trebuchet, and a short simulation shows exactly how much each assumption matters.',
  wa: 'Hello Modern Age Coders, we would like a free lesson for a learner in Warwickshire.',

  picks: {
    eyebrow: 'Courses for Warwickshire',
    h2: 'Courses Warwickshire families choose first',
    intro: 'A nine-year-old in Kenilworth who wants to build a physics game, a Year 7 in Bedworth trying Python for the first time, a sixth former in Leamington taking A level Maths with mechanics, and an engineer in Rugby moving into data. All four start with a free lesson.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Real games in Scratch, then Roblox and Minecraft worlds, including a physics puzzle game where things fly and fall.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python for children, with loops and arithmetic enough to move a ball across a screen step by step.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level Maths for Edexcel, AQA and OCR, with a mechanics strand that includes kinematics and projectiles.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Python, statistics and SQL, then machine learning done honestly, for adults changing direction into data.' }
    ]
  },

  sections: [
    {
      id: 'warwickshire', tint: '', eyebrow: 'The county today',
      h2: 'Five districts, 596,773 people and a city in the middle that belongs elsewhere',
      intro: 'District totals are the 2021 Census on Nomis. Town sizes are the ONS built-up areas, which we cross-checked by adding up census output areas inside the county.',
      body: [
        { kind: 'table', caption: 'Warwickshire\'s five districts and boroughs, usual residents at Census 2021, largest first', head: ['District or borough', 'Usual residents', 'Main towns'], rows: [
          ['Warwick', '148,453', 'Royal Leamington Spa, Warwick, Kenilworth, Whitnash'],
          ['Stratford-on-Avon', '134,725', 'Stratford-upon-Avon, Southam, Wellesbourne, Alcester, Shipston-on-Stour'],
          ['Nuneaton and Bedworth', '134,197', 'Nuneaton, Bedworth, Bulkington'],
          ['Rugby', '114,363', 'Rugby, Cawston'],
          ['North Warwickshire', '65,035', 'Atherstone, Coleshill, Polesworth and Dordon']
        ] },
        { kind: 'p', text: 'Look at a map and Coventry sits in the middle of Warwickshire, but since 1974 it has been part of the West Midlands county, and it has <a class="cg-inline-link" href="/best-coding-class-in-coventry">its own page</a>. What is left is a county of mid-sized towns in two clusters: Nuneaton, Bedworth and Rugby to the north and east, and Leamington, Warwick, Kenilworth and Stratford to the south. A child in Atherstone and a child in Shipston-on-Stour both live in Warwickshire, and are about as far apart as it is possible to be within it.' },
        { kind: 'table', caption: 'Warwickshire towns by ONS built-up area, Census 2021, largest first; Coventry and Tamworth reach over the boundary and are left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Nuneaton', '88,815', 'Wellesbourne', '7,020'],
          ['Rugby', '78,120', 'Coleshill', '6,745'],
          ['Royal Leamington Spa', '51,310', 'Cawston', '6,470'],
          ['Warwick', '36,680', 'Alcester', '6,425'],
          ['Bedworth', '31,090', 'Studley', '6,040'],
          ['Stratford-upon-Avon', '28,120', 'Shipston-on-Stour', '5,850'],
          ['Kenilworth', '22,235', 'Bidford-on-Avon', '5,825'],
          ['Whitnash', '8,915', 'Bulkington', '5,670'],
          ['Atherstone', '8,665', 'Polesworth and Dordon', '7,555'],
          ['Southam', '8,110', '', '']
        ] },
        { kind: 'p', text: 'Every one of those nineteen rows matches our own count to within rounding. The two towns we left out are the interesting ones. The Coventry built-up area has 2,848 of its 344,285 residents inside Warwick district, and the Tamworth built-up area has 322 in North Warwickshire, so both are neighbours\' towns that happen to touch the county. Nuneaton, on the other hand, runs across two Warwickshire councils, North Warwickshire and Nuneaton and Bedworth, without leaving the county at all.' },
        { kind: 'callout', h3: 'Term dates and the 11 plus', p: 'Neither address we tried for Warwickshire County Council\'s term dates existed on 26 September 2026, so we print no calendar; academies may set their own dates anyway, and we agree breaks with each family. The county\'s grammar school tests have <a class="cg-inline-link" href="/11-plus-maths-tuition-warwickshire">a separate maths page</a>. Nothing here is advice about choosing or applying to schools.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Warwickshire project',
      h2: 'When is 45 degrees not the optimal angle?',
      intro: 'A simulation of a thrown object, checked against the one case a textbook can solve exactly, then used on the cases it cannot.',
      body: [
        { kind: 'p', text: 'The learner writes a loop that moves a thrown object forward in tiny steps of time, a thousandth of a second each: at every step gravity pulls it down, air pushes back against its motion, and its position updates. When it hits the ground, the loop stops and reports the distance. Then a second loop tries every launch angle from 5 to 80 degrees and keeps the winner. Before trusting any of it, the learner runs the one case with a known answer. With no air and a launch from ground level at 40 metres a second, physics says the optimal angle is 45 degrees and the range is 163.1 metres. The simulation must say the same, and ours does.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: the optimal launch angle at 40 metres a second, as each assumption is removed', head: ['What is being thrown, and from where', 'Optimal angle', 'Distance at optimum', 'Distance at 45 degrees'], rows: [
          ['No air, launched from the ground', '45.0 degrees', '163.1 m', '163.1 m'],
          ['No air, launched 15 metres up', '42.6 degrees', '177.5 m', '176.9 m'],
          ['A 15 kg stone, from the ground', '44.1 degrees', '146.0 m', '145.9 m'],
          ['A 15 kg stone, 15 metres up', '41.4 degrees', '159.3 m', '158.3 m'],
          ['A light 2 kg ball, 15 metres up', '38.1 degrees', '118.3 m', '116.1 m']
        ] },
        { kind: 'p', text: 'Two separate effects push the optimal angle down. Launching from a height means the object is already falling-distance ahead, so a flatter throw that spends less time climbing wins; the exact formula gives 42.58 degrees for our 15 metres, and the simulation agrees. Air resistance hurts most when the object is moving fastest and flying longest, which again favours a lower, quicker path, and it hurts a light, bulky object far more than a heavy, compact one. Put both together with a light ball and the optimal angle falls to 38.1 degrees.' },
        { kind: 'p', text: 'The last column holds the most useful surprise. Even when 45 degrees is wrong, it is not very wrong: for the heavy stone thrown from 15 metres it loses one metre in 159. The distance curve is flat near its peak, so small errors in angle cost little, while errors in launch speed cost a lot. Engineers exploit that constantly. A learner who can see it in their own table has understood something about optimisation that no formula states on its own.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Move a ball across a Scratch or Python screen in small steps with gravity pulling it down, and try different angles by hand.' },
          { h3: 'Ages 13 to 16', p: 'Write the time-step loop, check it against 163.1 metres with no air, then add a launch height and find the new optimal angle.' },
          { h3: 'Ages 16 and up', p: 'Add air resistance, compare heavy and light objects, and plot distance against angle to see how flat the top of the curve is.' }
        ] },
        { kind: 'callout', h3: 'What these numbers are', p: 'The launch speed, the stone and the ball are values we chose for teaching, not measurements of the Warwick Castle trebuchet, which does not publish them. Only the castle\'s 22 tonnes and almost 60 feet are its own figures. The simulation ignores wind, spin and the way a real trebuchet releases its load, and it is offered as a lesson in modelling, not as a claim about any real machine.' }
      ]
    },
    {
      id: 'castle', tint: 'deep', eyebrow: 'Why Warwickshire',
      h2: 'A siege engine on the Avon and a game invented in Rugby',
      intro: 'Two Warwickshire stories about things that fly, in the words of the places that tell them.',
      body: [
        { kind: 'table', caption: 'From Warwick Castle\'s and Rugby School\'s own pages', head: ['Source', 'What it says'], rows: [
          ['Warwick Castle', 'The trebuchet is "Britain\'s largest working siege machine", it "weighs 22 tonnes and is almost 60 feet tall", and its show is set on the bank of the River Avon.'],
          ['Warwick Castle', 'The trebuchet "was used to hurl huge projectiles to breach the castle walls", with large rocks and stones as the main ammunition.'],
          ['Rugby School', 'In 1823 William Webb Ellis, "with a fine disregard for the rules of football, took the ball in his arms and ran with it, originating the game of rugby football", in the school\'s account.'],
          ['Rugby School', 'Founded in 1567 by the will of Lawrence Sheriff.']
        ] },
        { kind: 'p', text: 'Almost 60 feet is about 18.3 metres, which is why our table tries a launch from 15 metres: a trebuchet releases its load high above the ground, and that height alone moves the optimal angle. Rugby, meanwhile, is a reminder that the most memorable moments in a game come from somebody ignoring the obvious rule. Strong learners treat a rule like "always 45 degrees" the same way: as something to test, not something to obey.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Warwick Castle, Rugby School or Warwickshire County Council, and nothing on this page implies one. Their facts are theirs; the simulation, the chosen values and any mistakes in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> has a page of its own, <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> is the next county north-east, and <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> lies to the south. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing through the levels',
    h2: 'From a ball that falls on screen to a model you can trust',
    intro: 'The free lesson finds the starting point. School year is a hint, not a rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Things that fall', p: 'Scratch games with gravity and bouncing, where children discover that motion on screen is just small changes repeated.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 13', h3: 'Steps in time', p: 'Python loops that update position and speed, and the first idea of checking a program against a known answer.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Models and mechanics', p: 'Projectiles, forces and optimisation in code and in A level Maths, with every model tested before it is believed.', courses: ['a-level-maths-course-pure-mechanics-statistics', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Models at work', p: 'Adults build models from data in Python, and learn how to say what a model assumes as well as what it predicts.', courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and physical models',
    h2: 'Ask an AI for the optimal throwing angle and it may say 45 degrees. Who notices it is wrong?',
    intro: 'The person who knows which assumptions that answer quietly made.',
    p1: 'A chatbot asked for the optimal angle to throw something as far as possible will very often answer 45 degrees, because that is what most texts say. Asked to write a simulation, it will usually produce working code. What it rarely does unprompted is point out that the famous answer assumes ground-level launch and no air, so that for a trebuchet, a javelin or a garden hose the true answer is lower. The machine repeats the common case; the question was about a particular one.',
    p2: 'A Warwickshire student who has built the simulation, checked it against 163.1 metres and then watched the optimal angle fall to 38.1 degrees will spot the problem immediately. They ask from what height, through what air, with what object, and they know to test any model against a case with a known answer before believing it. That is the working habit of every engineer, and of every good user of AI tools.',
    closer: 'So a Warwickshire teenager should learn to code in 2026 because someone needs to know when the famous answer does not fit the question actually being asked.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Atherstone to Shipston-on-Stour, without the drive',
    intro: 'The county stretches a long way north to south. Online lessons make that distance irrelevant.',
    cells: [
      { h3: 'From your own desk', p: 'A bedroom in Southam, a kitchen in Bulkington, a study in Alcester. The teacher shares a screen and the learner codes.' },
      { h3: 'UK school terms, in English', p: 'Key Stages, GCSE options and A levels are named as Warwickshire schools name them, and all teaching is in English.' },
      { h3: 'Free first lesson', p: 'A complete lesson of real work with a plain recommendation afterwards. Nobody asks for payment details.' },
      { h3: 'Classmates at your level', p: 'Groups of five to ten learners at the same stage, gathered from many places, so the pace suits everyone.' },
      { h3: 'Breaks you agree', p: 'Usually two lessons a week, paused for your school\'s own holidays, which can differ between schools and academies.' },
      { h3: 'Always in UK time', p: 'Teachers are in India, 4.5 hours ahead during British Summer Time and 5.5 hours ahead in winter. Each lesson time is confirmed in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Two clusters of towns at opposite ends of the county, and no big city of its own, mean few places have enough learners at one stage on one evening. Level-based groups let a Coleshill learner and a Stratford learner study together.' }
  },

  fees: {
    h2: 'Fees in Warwickshire',
    intro: 'Every Warwickshire town pays the same, and so does every country outside India.',
    first: 'A full lesson of real work, ending in a suggested level and course.',
    group: 'Around eight lessons each month in a group of five to ten at one level.',
    private: 'Around eight lessons each month with one teacher for one learner.',
    closer: 'Fees are in US dollars, which is what we charge families everywhere except India, and there is no list in pounds. Payment starts only after the free lesson has settled a course and a weekly time; how pausing, missing a lesson and switching between group and private work is explained on the pricing page.'
  },

  reviewsH2: 'Google reviews, in families\' own words',

  book: {
    h2: 'Ask for your free lesson',
    intro: 'Let us know an age or school year and one interest. The first lesson could be a Scratch physics game, a first Python loop, or the throwing simulation on this page.',
    success: 'Thank you. We have your Warwickshire request.'
  },

  faq: {
    h2: 'Warwickshire questions',
    intro: 'About the county, the trebuchet project and our lessons.',
    items: [
      { q: 'How many people live in Warwickshire?', a: 'The five Warwickshire districts and boroughs had 596,773 usual residents at the 2021 Census, from ONS data on Nomis. Warwick district was the largest at 148,453 and North Warwickshire the smallest at 65,035.' },
      { q: 'Is Coventry in Warwickshire?', a: 'Not for local government. Coventry is part of the West Midlands county, even though it sits in the middle of Warwickshire on the map, and it has its own page with us.' },
      { q: 'What are the largest towns in Warwickshire?', a: 'By ONS built-up area: Nuneaton 88,815, Rugby 78,120, Royal Leamington Spa 51,310, Warwick 36,680 and Bedworth 31,090. The table on this page lists nineteen towns above five thousand residents.' },
      { q: 'What is the trebuchet project?', a: 'Learners simulate a thrown object step by step, check the simulation against the textbook case of 45 degrees and 163.1 metres, then find how the optimal angle falls when the throw starts high up or meets air resistance, down to 38.1 degrees for a light ball.' },
      { q: 'How big is the Warwick Castle trebuchet?', a: 'Warwick Castle says it weighs 22 tonnes and is almost 60 feet tall, and calls it Britain\'s largest working siege machine. The speeds and objects in our project are our own teaching values, not the castle\'s.' },
      { q: 'Do you have a classroom in Warwick, Leamington or Rugby?', a: 'No. Every lesson is live online, so a learner in Wellesbourne and one in Nuneaton share the same class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. The youngest start with Scratch and games, most begin typed Python at ten to twelve, and teenagers and adults go on to maths, data, AI and software. The free lesson decides where each learner begins.' },
      { q: 'Can you help with A level Maths mechanics?', a: 'Yes. Our A level Maths course covers Pure, Mechanics and Statistics for Edexcel, AQA and OCR, and its mechanics strand includes kinematics and projectiles.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After it, a group place is USD 100 a month and private lessons USD 150 a month, with no joining fee and no set term.' },
      { q: 'When are Warwickshire school holidays?', a: 'Dates come from the county council for its schools and from academies for theirs. We could not find the county\'s term-dates page when we checked, so we fit breaks around the dates your school gives you.' }
    ]
  },

  next: {
    eyebrow: 'Around the UK',
    h2: 'Other pages near Warwickshire',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> for the city in the middle, or the neighbouring county of <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>. <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> is south along the M40, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the full list.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Warwickshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/11-plus-maths-tuition-warwickshire', label: 'Warwickshire 11 plus' }
  ],

  personalityCss: `
.cg-root.cg-wks .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-wks .cg-hero h1 { font-weight: 700; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-wks .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-wks .cg-eyebrow { letter-spacing: 0.21em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-wks .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.013em; }
.cg-root.cg-wks .cg-table caption { font-weight: 700; letter-spacing: 0.012em; }
.cg-root.cg-wks .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wks .cg-table th { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-wks .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-wks .cg-callout { border-left-width: 9px; border-radius: 0 3px 3px 0; }
`,

  dossier: {
    curriculumAuthority: 'Warwickshire (five districts under Warwickshire County Council; Coventry is in the West Midlands county). ONS Census 2021 TS001 via Nomis: Warwick 148,453; Stratford-on-Avon 134,725; Nuneaton and Bedworth 134,197; Rugby 114,363; North Warwickshire 65,035; total 596,773 (our sum). ONS Census 2021 built-up areas (published; the nineteen printed agree with our OA sums within rounding): Nuneaton 88,815 (North Warwickshire, Nuneaton and Bedworth); Rugby 78,120; Royal Leamington Spa 51,310; Warwick 36,680; Bedworth 31,090; Stratford-upon-Avon 28,120; Kenilworth 22,235; Whitnash 8,915; Atherstone 8,665; Southam 8,110; Polesworth and Dordon 7,555; Wellesbourne 7,020; Coleshill 6,745; Cawston 6,470; Alcester 6,425; Studley 6,040; Shipston-on-Stour 5,850; Bidford-on-Avon 5,825; Bulkington 5,670. Excluded: Coventry BUA 344,285 (2,848 in Warwick district), Tamworth BUA 76,090 (322 in North Warwickshire). Warwick Castle: "Britain\'s largest working siege machine"; "The Warwick Castle Trebuchet weighs 22 tonnes and is almost 60 feet tall"; "Set on the bank of the River Avon"; "The trebuchet was used to hurl huge projectiles to breach the castle walls. Large rocks and stones were the main ammunition." Rugby School history: "Rugby was founded in 1567 by the will of Lawrence Sheriff"; "In 1823, a student and foundationer, William Webb Ellis (1816-1825), with a fine disregard for the rules of football, took the ball in his arms and ran with it, originating the game of rugby football".',
    localProject: 'Projectile motion and the launch angle. RK4 integration at 1 ms, quadratic drag a = -k|v|v with k = 0.5 rho Cd A / m; launch speed 40 m/s (teaching value). Check: no air, ground release, best 45.0 degrees, 163.1 m = v^2/g. No air, 15 m release: best 42.6 degrees (analytic atan(v / sqrt(v^2 + 2gh)) = 42.58), 177.5 m, 45 degrees gives 176.9. Stone (15 kg, 0.25 m sphere, Cd 0.47, air 1.225 kg/m3; k 0.000942 per m): ground 44.1 degrees 146.0 m (45: 145.9); 15 m up 41.4 degrees 159.3 m (45: 158.3). Light ball (2 kg, 0.2 m): ground 41.8 degrees 107.4 m (45: 106.8); 15 m up 38.1 degrees 118.3 m (45: 116.1). Almost 60 feet = 18.29 m. Teaching values stated as ours on the page, not the castle\'s. AI angle: assistants repeat 45 degrees, the textbook case, without naming its assumptions. Lesson family: projectile motion and launch-angle optimisation, checked against the analytic case; distinct from Euler drift on a pendulum (Leidschendam-Voorburg).',
    requiredMentions: [
      '596,773',
      '22 tonnes',
      'almost 60 feet',
      '163.1 metres',
      '42.58 degrees',
      '38.1 degrees',
      'fine disregard for the rules of football',
      'Polesworth and Dordon',
      'Shipston-on-Stour',
      '41.4 degrees'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five Warwickshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Warwickshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Warwick Castle: the trebuchet, 22 tonnes, almost 60 feet tall, Britain\'s largest working siege machine.', url: 'https://www.warwick-castle.com/explore/shows/shows-attractions/the-legend-of-the-trebuchet/' },
      { claim: 'Rugby School history: founded 1567; William Webb Ellis in 1823.', url: 'https://www.rugbyschool.co.uk/about/history/' }
    ],
    rejectedClaims: [
      'Warwickshire County Council term dates: both URLs tried returned 404 on 26 September 2026; no calendar printed.',
      'Rugby pitch and goal dimensions: World Rugby Law 1 gives field lengths in text but the crossbar height only in a diagram, so the planned kicking project was dropped.',
      'The trebuchet\'s throwing range, counterweight or projectile mass: not published on the castle page, so every speed and mass in the project is labelled as our teaching value.',
      'Shakespeare text analysis: text similarity was already used on the Bath page, so no Stratford text project is attempted.',
      'Coventry and Tamworth as Warwickshire towns: both built-up areas lie almost entirely in neighbouring counties.',
      'Named Warwickshire schools\' computing provision: Rugby School is cited only for its account of the game\'s origin, not for any teaching claim.'
    ]
  }
};
