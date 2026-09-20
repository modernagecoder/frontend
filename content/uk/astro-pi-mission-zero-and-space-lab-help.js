'use strict';
// Astro Pi Mission Zero and Mission Space Lab help (ag- competition spoke, UK cluster Phase 2).
// Facts read at astro-pi.org on 20 September 2026:
//  - "Astro Pi is an ESA Education project run in collaboration with the Raspberry Pi Foundation";
//    "A free challenge where kids run their code in space."
//  - Two missions: Mission Zero, "Send a personalised image to the astronauts on the International Space
//    Station!", about one hour, under 19; Mission Space Lab, "Run your program on board the
//    International Space Station", two to six hours, under 19.
//  - Mission Zero: "Age 19 and under", "Up to 4 young people" per team, supervised by a mentor who may
//    be a teacher, educator, parent or code club leader; the task is a Python program that shows a
//    personalised, nature-inspired image on an Astro Pi computer aboard the ISS, using a colour and
//    luminosity sensor reading to set the background colour; written in a web browser with no special
//    hardware needed.
//  - Mission Zero 2026/27 timeline: launched 14 September 2026; deadline "22 March 2027, 12:00 noon
//    CET"; programs run in May 2027; certificates in June 2027, each showing where the ISS was when the
//    program ran, with exact start and end times, and signed by an ESA astronaut.
// Spine: the deadline is an hour earlier than it looks. Our computation of 20 September 2026: 22 March
// 2027 is a Monday, and both the UK and continental Europe change their clocks on the last Sunday of
// March, which is 28 March 2027, six days later. So on the deadline day the UK is still on winter time
// and CET is one hour ahead, and "12:00 noon CET" is 11am in the UK. A British class that submits at
// half past eleven UK time on the day has missed it.
// Lesson family: a deadline published in another country's local time, and whether the clocks have
// changed yet. Screened on 20 September 2026: distinct from a date is not a string (Balbriggan), from
// calendar conventions (Hoorn) and from the GPS leap-second offset (Surrey).
// No Astro Pi material is reproduced; the organiser publishes its own guides.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'ASTRO PI', label: 'Astro Pi Mission Zero and Space Lab', blurb: 'Write Python that runs on the International Space Station, and mind a deadline set in another time zone.' },
  slug: 'astro-pi-mission-zero-and-space-lab-help',
  code: 'apz',
  accent: '#495979',
  accentRationale: 'Astro Pi: a muted slate-blue from the solver (5.70:1 on every paper tint), lighter than the British Mathematical Olympiad slate and clear of the UK hub blue',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Astro Pi Mission Zero and Space Lab help',
  title: 'Astro Pi Mission Zero Help | Run Python on the Space Station',
  description: 'Help with Astro Pi Mission Zero and Mission Space Lab: teams of four, aged under 19, an hour of Python, and a March deadline that falls at 11am UK time.',
  ogDescription: 'Astro Pi runs a child\'s Python program on the International Space Station. The Mission Zero deadline is noon CET, which on that date is 11am in Britain.',
  twitterDescription: 'Astro Pi Mission Zero help: an hour of Python, code that runs on the ISS, and a deadline in CET.',
  pageName: 'Astro Pi Mission Zero and Space Lab Help',
  webPageDescription: 'Guidance for UK schools and families taking part in the ESA Education Astro Pi challenge, covering Mission Zero and Mission Space Lab, eligibility, team size, the timeline and the time-zone trap in the deadline.',
  courseDescription: 'Live online Python classes for children and teenagers under 19 taking part in Astro Pi, from a first program to code that reads sensors.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Astro Pi',
  navLinks: [
    { href: '#missions', label: 'Two missions' },
    { href: '#deadline', label: 'The deadline trap' },
    { href: '#practise', label: 'Getting it done' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Under 19 &middot; Deadline 22 March 2027',
  h1: 'Astro Pi Mission Zero and Space Lab help',
  lede: 'A child writes a short Python program at a kitchen table in Cardiff, and a few weeks later it runs on a computer aboard the International Space Station while the station is somewhere over the Pacific. That is not a metaphor and it is not a competition in the usual sense: there is no ranking, no pass mark and nothing to win. Astro Pi Mission Zero takes about an hour, it is free, and every entry that follows the rules runs in space and comes back with a certificate saying where the station was at the time. This page covers both missions, what the Python actually has to do, and the one detail that has cost British schools an entry: the deadline is not set in UK time.',
  secondaryCta: { href: '#deadline', label: 'See why the deadline is 11am' },
  wa: 'Hello Modern Age Coders, my child is doing Astro Pi Mission Zero and I would like a free Python class.',
  heroNote: 'Quoted from the organiser with the date we read it &middot; No Astro Pi material reproduced &middot; Nothing promised beyond what the organiser offers',
  spec: [
    ['Organisers', 'ESA Education and the Raspberry Pi Foundation'],
    ['Cost', 'Free'],
    ['Age', '19 and under'],
    ['Mission Zero', 'About one hour'],
    ['Mission Space Lab', 'Two to six hours'],
    ['Team', 'Up to four young people'],
    ['Language', 'Python, in a browser'],
    ['Deadline', '22 March 2027, noon CET']
  ],
  capsuleQ: 'In short',
  capsule: '"Astro Pi is an ESA Education project run in collaboration with the Raspberry Pi Foundation", described by the organisers as "a free challenge where kids run their code in space". There are two missions, both for young people aged "19 and under". Mission Zero takes about an hour: a team of "up to 4 young people", supervised by a mentor who may be a teacher, educator, parent or code club leader, writes a Python program that shows a personalised, nature-inspired image on an Astro Pi computer aboard the International Space Station, using a colour and luminosity sensor reading to set the background colour. It is written in a web browser with no special hardware. Mission Space Lab takes two to six hours and runs a longer program on the station. The 2026/27 Mission Zero cycle launched on 14 September 2026, closes on "22 March 2027, 12:00 noon CET", runs in May 2027 and issues certificates in June, each signed by an ESA astronaut and showing where the station was. We teach the Python. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an Astro Pi entrant',
    lede: 'Mission Zero needs about an hour of Python. Mission Space Lab needs rather more.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'APZ / 01', title: 'Python and AI for kids', note: 'The right starting point for most Mission Zero entrants: a first typed language, taught so that the program can be read back before it runs.' },
      { course: 'python-complete-masterclass-teens', code: 'APZ / 02', title: 'Python from start to finish', note: 'For Mission Space Lab: files, loops, sensors and structure, which is where a longer program needs real technique.' },
      { course: 'scratch-programming-complete-course', code: 'APZ / 03', title: 'Scratch for kids', note: 'For a younger child who wants to take part but has never written a line: the logic first, the typing after.' }
    ]
  },

  sections: [
    {
      id: 'missions', tint: 'tint', eyebrow: 'The two missions',
      h2: 'An hour in space, or an afternoon',
      lede: 'Facts read at the organiser\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'Astro Pi as its organisers describe it', head: ['', 'Mission Zero', 'Mission Space Lab'], rows: [
          ['What it is', '"Send a personalised image to the astronauts on the International Space Station!"', '"Run your program on board the International Space Station"'],
          ['How long', 'About one hour', 'Two to six hours'],
          ['Age', '"Age 19 and under"', 'Under 19'],
          ['Team', '"Up to 4 young people", with a mentor', 'A team with a mentor'],
          ['Written in', 'Python, in a web browser, no special hardware', 'Python, with more of it'],
          ['The task', 'A personalised, nature-inspired image, with a colour and luminosity sensor reading setting the background colour', 'A longer program that runs on the station'],
          ['Cost', 'Free', 'Free']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Mission Zero is the one to start with, and its design is unusually generous. There is no competition in it: every entry that follows the rules and meets the deadline is run on the station, and every participant receives a certificate showing the location of the ISS when their program ran, with the exact start and end times, signed by an ESA astronaut.',
            'That means a child cannot fail at Mission Zero except by missing the deadline or breaking a rule. For a nine-year-old who has never finished anything technical, that is a rare and valuable thing.'
          ],
          right: [
            'The sensor reading is the detail that makes it real programming rather than a drawing exercise. The program asks the Astro Pi computer what the colour and light levels are and uses the answer to set the background, so the image that appears depends on conditions aboard the station at the moment it runs.',
            'Mission Space Lab is the longer sibling, two to six hours, for teams who want to write a program that does something with the station\'s sensors rather than show a picture. It suits a school club with a term rather than an afternoon.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://astro-pi.org/" rel="noopener" target="_blank">Astro Pi</a> and its <a class="ag-inline-link" href="https://astro-pi.org/mission-zero" rel="noopener" target="_blank">Mission Zero pages</a>, read 20 September 2026. Modern Age Coders is not connected with ESA Education or the Raspberry Pi Foundation.' }
      ]
    },
    {
      id: 'deadline', tint: 'deep', eyebrow: 'The method',
      h2: 'The deadline is an hour earlier than it looks',
      lede: 'The organiser publishes the Mission Zero deadline as "22 March 2027, 12:00 noon CET". For a British school that sentence needs converting, and the conversion is not the one most people assume.',
      body: [
        { kind: 'p', html: 'The instinct is to think that noon in Europe is around eleven in Britain in winter and around noon in summer, and to guess that March is close enough to summer not to matter. It matters. The precise question is whether the clocks have changed by the deadline day, and the answer is no, by six days.' },
        { kind: 'table', caption: 'Our computation of 20 September 2026', head: ['Question', 'Answer', 'Why it matters'], rows: [
          ['What day is 22 March 2027?', 'A Monday', 'A school day, so the deadline falls in lesson time'],
          ['When do the clocks change?', 'The last Sunday of March, which in 2027 is 28 March', 'Both the UK and continental Europe change on the same day'],
          ['So on 22 March 2027?', 'The UK is still on winter time and CET is one hour ahead of it', 'The gap between the two is one hour, not zero'],
          ['What is noon CET in the UK?', '11am', 'A class submitting at 11.30 UK time on the day has missed it']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why this catches people', p: 'Deadlines in another country\'s local time look harmless. The error only appears on the day, when there is no time left to fix it, and it is invisible to anyone reading the date alone.' },
          { h3: 'The rule to teach', p: 'When a deadline is published in someone else\'s time, convert it once, in writing, and check whether a clock change falls between now and then. Both halves matter.' },
          { h3: 'What we would actually do', p: 'Treat the deadline as the Friday before. Nothing about Mission Zero requires the last hour, and a program submitted early still runs in May.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is a small thing that teaches a large one. Almost every system a young programmer will ever touch stores times in one zone and shows them in another, and almost every bug in that area comes from assuming the offset is fixed when it changes twice a year on dates that differ between countries.',
            'A child who has converted one real deadline by hand, and checked the clock-change date rather than assuming it, has met the whole problem in ten minutes.'
          ],
          right: [
            'It also shows why we date every fact on these pages. The conversion above is true for the 2027 cycle, and the equivalent sentence for a later year depends on where that year\'s deadline falls relative to the last Sunday in March. Check it again rather than trusting this paragraph in 2029.',
            'The related trap on our <a class="ag-inline-link" href="/coding-classes-in-surrey">Surrey page</a> is the same family from the other end: GPS satellites keep a clock that ignores leap seconds, so their midnight is eighteen seconds off UTC.'
          ] },
        { kind: 'source', html: 'The conversion is ours, computed on 20 September 2026 from the deadline the organiser publishes. The last Sunday of March 2027 is the 28th; 22 March 2027 is a Monday.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'Getting it done',
      h2: 'One hour, one mentor, four children',
      lede: 'Mission Zero is designed to be completed in a single session, and the things that stop it are rarely the programming.',
      body: [
        { kind: 'table', caption: 'What a first Mission Zero session needs', head: ['Need', 'Why', 'The thing that goes wrong'], rows: [
          ['A mentor over 18', 'The organiser requires a teacher, educator, parent or code club leader to supervise and submit', 'Children working alone and having nobody to submit the entry'],
          ['A browser and an hour', 'The code is written in a web browser with no special hardware', 'Waiting for equipment that is not needed'],
          ['An idea for the image', 'The entry is a personalised, nature-inspired image, so the design takes as long as the code', 'Half the hour spent choosing a picture'],
          ['The sensor line understood', 'The background colour comes from a colour and luminosity reading taken on the station', 'Copying the line without knowing what it does'],
          ['A submission well before the day', 'The deadline is noon CET, which is 11am UK time on 22 March 2027', 'Submitting on the morning of the deadline']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a class of thirty, the sensible shape is teams of up to four with one mentor and one hour, and a rule that the image is sketched on paper before anybody opens a browser. The programming part of Mission Zero is genuinely short; the deciding part is knowing what you want it to look like.',
            'For a child doing it at home, a parent counts as the mentor, which is worth knowing because many families assume a school has to be involved.'
          ],
          right: [
            'For Mission Space Lab, treat it as a project rather than a session. Two to six hours of work is a half term of a lunchtime club, and it rewards a team that can plan and test rather than one that can type quickly.',
            'Either way, the certificate is the point. A child who can say that a program they wrote ran on the International Space Station, and show where the station was at the time, has something no exam gives them.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from first Python to a program worth sending up',
    lede: 'Mission Zero needs rung two. Everything above it is for the longer mission and for what comes after.',
    table: { caption: 'From a first line to a program that reads the world', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Ages 7 to 10', '1. Sequence and repetition', 'Can predict what a short program will do before running it'],
      ['Ages 9 to 12', '2. First Python', 'Writes and fixes a dozen lines, including a colour and a loop'],
      ['Ages 11 to 14', '3. Input from the world', 'Uses a sensor reading or a data file to change what a program does'],
      ['Ages 13 to 18', '4. A project that finishes', 'Plans, tests and completes something over several sessions']
    ] },
    left: { h3: 'If March is close', ps: [
      'Do Mission Zero this week rather than next month. It takes an hour and the deadline is 11am UK time on 22 March 2027.',
      'Sketch the image on paper first. It is the half of the task that actually takes the time.'
    ] },
    right: { h3: 'After the certificate', ps: [
      'Mission Space Lab is the same idea with a term behind it, and it suits a club.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> has everything else open to a UK child this year, including several with no age floor.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Python courses for a young space programmer',
    lede: 'Sorted by what a child can write alone today, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'Before Python', sub: 'Ages 6 to 10', courses: [
        { code: 'APZ / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Sequence, loops and colour, without typing.' },
        { code: 'APZ / A / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Building things that move, before anything is typed.' },
        { code: 'APZ / A / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'The number sense a first program leans on.' }
      ] },
      { num: 'II', h3: 'Mission Zero level', sub: 'Ages 9 to 13', courses: [
        { code: 'APZ / B / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, taught patiently.' },
        { code: 'APZ / B / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Colour, coordinates and patterns, in code.' },
        { code: 'APZ / B / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'Real code, in a world a child already knows the rules of.' }
      ] },
      { num: 'III', h3: 'Mission Space Lab level', sub: 'Ages 12 to 18', courses: [
        { code: 'APZ / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Files, structure and sensors, properly.' },
        { code: 'APZ / C / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'What to do with readings once you have them.' },
        { code: 'APZ / C / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'For a program that has to finish in time.' }
      ] },
      { num: 'IV', h3: 'Where it leads', sub: 'Beyond the challenge', courses: [
        { code: 'APZ / D / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and checked against reality.' },
        { code: 'APZ / D / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Somewhere to publish what you build.' },
        { code: 'APZ / D / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The qualification, with the exam board the school entered.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short weekly Python, at an hour a ten-year-old can think in',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For primary and lower secondary children.' },
      { time: 'Later weekday evening', l: 'For older students working on the longer mission.' },
      { time: 'Weekend morning', l: 'For a full session on one project.' }
    ],
    cells: [
      { h3: 'Predict before running', p: 'Children say what a program will do before they run it, which is how a short program gets understood rather than copied.' },
      { h3: 'Sensors explained', p: 'We teach what a sensor reading actually is, so the line that sets a background colour is not magic.' },
      { h3: 'Five to ten children', p: 'Enough for ideas to cross the room, few enough that every screen gets looked at.' },
      { h3: 'Our own examples', p: 'Written by us. The organiser publishes its own guides and we do not copy them.' },
      { h3: 'One to one when useful', p: 'For a child far ahead of their year, or one working on Mission Space Lab.' },
      { h3: 'We do not submit', p: 'A mentor submits an Astro Pi entry. We teach the Python and have no role in the challenge.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four projects our students finished and put online, none of them entries for anything. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews families left on our Google profile, printed word for word.',

  fees: {
    h2: 'Fees',
    lede: 'US dollars, charged monthly, at one rate for every country except India. No sign-up fee and no term to commit to.',
    free: ['A whole lesson, taught not pitched', 'An honest answer about the right level', 'Nothing asked for but a phone number'],
    group: ['Five to ten children at one level', 'The same teacher every week', 'Code looked at line by line', 'A certificate at the end'],
    one: ['A teacher working with one child', 'Shaped around what they are making', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'Astro Pi questions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'What is Astro Pi?', a: 'The organisers describe it as "an ESA Education project run in collaboration with the Raspberry Pi Foundation" and "a free challenge where kids run their code in space". There are two missions, Mission Zero and Mission Space Lab.' },
      { q: 'What does Mission Zero involve?', a: 'About an hour of work: a Python program that shows a personalised, nature-inspired image on an Astro Pi computer aboard the International Space Station, with a colour and luminosity sensor reading setting the background colour. It is written in a web browser and needs no special hardware.' },
      { q: 'Who can take part?', a: 'Young people aged 19 and under, in teams of up to four, supervised by a mentor who may be a teacher, educator, parent or code club leader.' },
      { q: 'When is the deadline?', a: 'The organiser gives 22 March 2027 at 12:00 noon CET for the 2026/27 Mission Zero cycle, which launched on 14 September 2026.' },
      { q: 'What is that in UK time?', a: '11am. Both the UK and continental Europe change their clocks on the last Sunday of March, which in 2027 is the 28th, six days after the deadline, so on the day CET is one hour ahead of UK time.' },
      { q: 'Is it a competition?', a: 'Not in the usual sense. There is no ranking or pass mark: every entry that follows the rules and meets the deadline is run on the station.' },
      { q: 'What do participants get?', a: 'A certificate showing the location of the ISS when their program ran, with the exact start and end times, signed by an ESA astronaut. The organiser says programs run in May 2027 and certificates follow in June.' },
      { q: 'Does my child need to know Python already?', a: 'A little helps and an hour is enough for most children with a mentor beside them. A child who has never typed code can still take part; the programming is short and the image design takes as long.' },
      { q: 'What is Mission Space Lab?', a: 'The longer mission, two to six hours, in which a team writes a program that runs on board the station. It suits a school club with a term rather than a single session.' },
      { q: 'Can you submit an entry for us?', a: 'No. A mentor submits an Astro Pi entry and we have no role in the challenge. We teach the Python behind it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other things a young programmer can enter',
    lede: 'Challenges with no ranking, contests with one, and the whole year in a table.',
    items: [
      { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge', p: 'Teams of three, hidden tests, January and March.' },
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'November, free, and no programming at all.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for UK children', p: 'What a primary-age child learns first, and in what order.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free Python lesson',
    lede: 'Tell us your child\'s age and whether they have written any code. The free lesson builds something small and real, and we say afterwards what we saw.',
    readFirst: 'Rather read first? Each syllabus sits on its own <a class="ag-inline-link" href="/courses">course page</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'Message us on WhatsApp if you want a quick answer; it costs a UK mobile nothing. The number belongs to India, which we never hide, and we run no office in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Challenges', links: [
        { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge' },
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge' }
      ] },
      { h4: 'Learning Python', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the Python; ESA runs the computer'
  },

  personalityCss: `
.ag-root.ag-apz .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-apz .ag-capsule { border-left-width: 3px; border-radius: 0 11px 11px 0; }
.ag-root.ag-apz .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-apz .ag-table caption { text-align: left; font-weight: 600; font-size: 0.94em; }
.ag-root.ag-apz .ag-table th { letter-spacing: 0.008em; }
.ag-root.ag-apz .ag-spec dt { letter-spacing: 0.105em; }
.ag-root.ag-apz .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-apz .ag-slots { gap: 1.28rem; }
`,

  mustMention: ['ESA Education project run in collaboration with the Raspberry Pi Foundation', '12:00 noon CET', 'Up to 4 young people', '28 March', 'signed by an ESA astronaut', '14 September 2026', 'colour and luminosity']
};
