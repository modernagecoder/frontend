'use strict';
// New York City (cg- metro page, US cluster Phase 5, row 114). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a New York City parent searching for the best coding class for a child: what to ask any provider, a top-N
// project on the city's own street tree census, the New York State rules in one paragraph, and Eastern Time.
// Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-new-york-city/):
//  - NYC Open Data, "2015 Street Tree Census - Tree Data" (dataset uvpi-gqnh), metadata from /api/views/uvpi-gqnh.json:
//    agency "Department of Parks and Recreation (DPR)"; "Date Made Public" 6/3/2016; description: "the third decadal
//    street tree census and largest citizen science initiative in NYC Parks' history", "Data collection ran from May
//    2015 to October 2016", "there are 666,134 trees planted along NYC's streets".
//  - Our SoQL aggregates on the same dataset, run 18 October 2026 (ours, not official): 683,788 records; status Alive
//    652,173, Stump 17,654, Dead 13,961; by borough Queens 250,551, Brooklyn 177,293, Staten Island 105,318, Bronx
//    85,203, Manhattan 65,423; top species London planetree 87,014, honeylocust 64,264, Callery pear 58,931, pin oak
//    53,185, Norway maple 34,189, then 31,619 records with no species name, littleleaf linden 29,742, cherry 29,279;
//    132 distinct species names; Manhattan top three honeylocust 13,176, Callery pear 7,297, ginkgo 5,859; Queens top
//    three London planetree 31,111, pin oak 22,610, honeylocust 20,290. Our arithmetic: Alive plus Dead = 666,134,
//    the published total, so the published figure leaves out stumps.
//  - NYC.gov Terms of Use: materials distributed "AS IS" and "AS AVAILABLE" without warranties.
//  - NYSED, Computer Science and Digital Literacy FAQ: "To comply with a 2018 law requiring the development of
//    Computer Science Standards"; standards approved by the Board of Regents "at the December 2020 Regents meeting";
//    banded "Grades K-1, 2-3, 4-6, 7-8, and 9-12"; "Phase IV, Full Implementation, begins September 1, 2024"; computer
//    science "can be counted either as elective credit or as the third unit of credit in Math or Science"; graduation
//    requirement decisions left to the Regents' graduation measures review; schools "must determine locally" how to teach
//    the standards in elementary grades.
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data tab: NY 2023-2024, 674 of 1,360 high
//    schools offering CS (49.6%), source "State Education Agency". Access tab only.
//  - IANA tzdb: zone.tab "America/New_York Eastern (most areas)"; northamerica Rule US 2007 max Mar Sun>=8 and Nov Sun>=1,
//    so November 1, 2026 and March 14, 2027.
// Lesson family: top-N ranking with a blank category, and checking a computed total against a published one.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NEW YORK CITY', label: 'New York City', blurb: 'Coding classes for New York City kids, with a five-borough street tree census project and the questions to ask any provider.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-new-york-city',
  code: 'bkny',
  accent: '#6B1D32',
  accentRationale: 'New York City: #6B1D32, a deep brownstone burgundy from the allocation table, muted and well clear of the North Carolina green, contrast above 4.5 on every paper',
  pageType: 'city',
  audience: 'kids',
  place: {
    name: 'New York City',
    eyebrow: 'New York City, New York',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'New York' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-united-states', name: 'United States' },
    { slug: 'coding-classes-in-new-york', name: 'New York' }
  ],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'New York State', href: '/coding-classes-in-new-york' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'New York City',
  title: 'Best Coding Classes for Kids in New York City | Live Online',
  description: 'How to choose the best coding class for a New York City kid: five questions to ask, a street tree census project across all five boroughs, and live classes.',
  ogDescription: 'Choosing a coding class for a child in New York City: the questions that matter, a five-borough tree census project in Python, and live online classes on Eastern Time.',
  twitterDescription: 'Coding classes for NYC kids, live online, with a street tree census project.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for New York City Kids',
    description: 'Scratch, Python, game design and AI literacy for New York City children in elementary and middle school, taught live online by a real teacher, in small batches or one to one.'
  },

  h1: 'The best coding classes for kids in New York City, and how to tell',
  capsuleQ: 'What is the best coding class for a kid in New York City?',
  capsule: 'The best one is live, level-matched and ends in a project your child can explain. Modern Age Coders teaches NYC kids from age 6 live online: Scratch and game design first, then Python, in batches of fifteen to twenty or one to one, with no commute across the boroughs. The first class is free, and our older students analyse the city&rsquo;s own street tree census.',
  lead: 'New York City parents have more coding options than almost anyone in the country, from after-school clubs in a community-center basement to weekend programs in Midtown. Plenty of choice, and very little help comparing it. So this page does three things. It lists the questions that separate a class that teaches from a class that entertains, it shows the kind of project a city kid can do with data New York itself publishes, and it sets out, briefly, what New York State asks schools to teach. Read it, then judge us by the same questions.',
  wa: 'Hello Modern Age Coders, I am looking for a coding class for my child in New York City.',

  picks: {
    eyebrow: 'Where NYC kids usually start',
    h2: 'Four starting points, by age and interest',
    intro: 'A short placement lesson decides the real level, so treat the ages as a first guess rather than a rule.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Drag-and-drop blocks to a finished game or animation, the gentlest first step for a first or second grader.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 8 to 11', note: 'Three months of Scratch that end in real games with scoring, levels and sound, built and shown by the child.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'The step from blocks to typed Python, with turtle drawings, small games and a first look at how AI makes guesses.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 9 to 13', note: 'For the kid who lives in Roblox or Minecraft: designing levels and rules, then coding them for real.' }
    ]
  },

  sections: [
    {
      id: 'choose', tint: '', eyebrow: 'Choosing a class',
      h2: 'Five questions that sort NYC coding classes quickly',
      intro: 'Ask any provider these, ourselves included. A good class has a plain answer to each; a weak one changes the subject.',
      body: [
        { kind: 'table', caption: 'Questions to ask a coding class for kids in New York City (the right-hand column is our own answer)', head: ['Question', 'Why it matters', 'How Modern Age Coders answers'], rows: [
          ['Is the teacher live, or is it video?', 'Children under twelve stall on recorded lessons the moment something breaks', 'Every class is live, with the teacher watching the child&rsquo;s screen'],
          ['How is my child placed?', 'Age alone puts a confident nine-year-old and a nervous one in the same room', 'A free placement lesson with a real task sets the level'],
          ['What does my child finish with?', 'A finished project is proof of learning that a certificate is not', 'A game, an animation or a data project the child presents'],
          ['How many children per teacher?', 'Group size decides how often your child gets help', 'Batches of fifteen to twenty at one stage, or one to one'],
          ['What happens when they get stuck?', 'Being stuck is where most of the learning happens', 'The teacher asks questions instead of typing the fix']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'In person or online?', p: 'A Manhattan studio class is wonderful if it is two blocks away. For a family in Bay Ridge or Jamaica it can mean ninety minutes of subway for sixty minutes of coding. Online removes the trip, not the teacher.' },
          { h3: 'Fun or depth?', p: 'Both, but in that order for young children. A seven-year-old who enjoys the first month stays for the second, which is where loops and variables start to stick.' },
          { h3: 'Camp or year-round?', p: 'A summer week in July is a good taste. Skills that last come from a steady weekly rhythm through the school year, with the same teacher.' }
        ] },
        { kind: 'p', text: 'There is no official ranking of coding classes for kids in New York City, and we do not claim a place on one. The questions above are a fair way to compare any program, including a school club, a library session or a paid course.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which street tree does New York City plant most? A top-ten project on the 2015 census',
      intro: 'NYC Parks ran the TreesCount! 2015 Street Tree Census with volunteers and staff, and the city publishes every record on NYC Open Data. Our students rank the species, then find the trap hidden in the ranking.',
      body: [
        { kind: 'table', caption: 'The most common species in the 2015 Street Tree Census, citywide (our count from NYC Open Data, dataset uvpi-gqnh, queried 18 October 2026)', head: ['Rank', 'Species (spc_common)', 'Records'], rows: [
          ['1', 'London planetree', '87,014'],
          ['2', 'honeylocust', '64,264'],
          ['3', 'Callery pear', '58,931'],
          ['4', 'pin oak', '53,185'],
          ['5', 'Norway maple', '34,189'],
          ['(blank)', 'no species recorded', '31,619'],
          ['6', 'littleleaf linden', '29,742'],
          ['7', 'cherry', '29,279']
        ] },
        { kind: 'table', mt: true, caption: 'Census records by borough (our count, same query date)', head: ['Borough', 'Records'], rows: [
          ['Queens', '250,551'],
          ['Brooklyn', '177,293'],
          ['Staten Island', '105,318'],
          ['Bronx', '85,203'],
          ['Manhattan', '65,423']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Step 1: count', p: 'The whole dataset held 683,788 records when we queried it. Students ask the city&rsquo;s API to group by the spc_common column and count, which returns 132 different species names.' },
          { h3: 'Step 2: rank', p: 'Sorting the counts gives London planetree first with 87,014 records. A ten-year-old can do this in Python with a dictionary and a sort, then compare the answer for their own borough.' },
          { h3: 'Step 3: spot the blank', p: 'Sixth in the raw ranking is not a tree at all. 31,619 records have no species name, because a stump or a dead tree has none to record. Leaving it in would give a wrong top ten.' }
        ] },
        { kind: 'p', text: 'The dataset description on NYC Open Data says the data shows 666,134 trees planted along NYC&rsquo;s streets. Our query found 683,788 records, so which is right? Both. When students split the records by the status column, there are 652,173 alive, 13,961 dead and 17,654 stumps, and our sum of the alive and dead records comes to exactly 666,134. The published figure counts trees; the file also holds stumps. Finding that out by checking, instead of assuming, is the lesson.' },
        { kind: 'p', text: 'Boroughs give the project a second round. In Manhattan the top three are honeylocust (13,176), Callery pear (7,297) and ginkgo (5,859); in Queens they are London planetree (31,111), pin oak (22,610) and honeylocust (20,290). A child from Astoria and a child from the Upper West Side get different answers from the same code, which is exactly how they learn that a query is a question, not a fact.' },
        { kind: 'callout', h3: 'What these numbers are', p: 'Every count in this section is ours, from a query on 18 October 2026. The census describes trees between May 2015 and October 2016, the city made it public on 6/3/2016, and the City of New York offers its online material as is, without warranties. We teach with it; we do not speak for NYC Parks.' }
      ]
    },
    {
      id: 'state', tint: 'tint', eyebrow: 'New York State rules',
      h2: 'What New York State asks schools to teach, in one paragraph',
      intro: 'From the New York State Education Department (NYSED) computer science FAQ, read on 18 October 2026.',
      body: [
        { kind: 'p', text: 'A 2018 state law required computer science standards, and the Board of Regents approved the Computer Science and Digital Fluency Standards at the December 2020 Regents meeting, banded K-1, 2-3, 4-6, 7-8 and 9-12. NYSED says Phase IV, Full Implementation, began September 1, 2024, and that elementary schools decide locally whether to teach the standards inside other subjects or as separate classes. In high school, computer science can count as elective credit or as the third unit of credit in Math or Science; whether it becomes a graduation requirement is left to the Regents&rsquo; review of graduation measures. For the full New York State picture, read our <a class="cg-inline-link" href="/coding-classes-in-new-york">New York State page</a>.' },
        { kind: 'p', text: 'One published number sits beside that: in the 2023 to 2024 school year, 674 of 1,360 New York high schools offered computer science, according to Code.org (2025). 2025 State of AI + CS Education, which lists the State Education Agency as its source. That is about half. For a younger child in the city, the practical reading is simple: what happens in elementary school depends on the school, so a weekly class at home is the reliable part.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time, after school or on the weekend',
      intro: 'Our teachers work from India, and every NYC class time is set and confirmed in Eastern Time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Your schedule first', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The India gap', p: 'While New York is on daylight time, India runs nine and a half hours ahead; in winter the gap grows to ten and a half, because India has no clock change.' },
          { h3: 'Two dates to note', p: 'Clocks in New York fall back on November 1, 2026 and spring forward on March 14, 2027. We send the new times before each change, so nobody logs in an hour early.' }
        ] },
        { kind: 'spec', title: 'America/New_York, a zone with a name', p: 'The IANA time zone database lists New York City under America/New_York, on Eastern time like the rest of New York State. Older kids who build a class reminder learn why a program should store that name, not a fixed offset, if it is still to be right in March.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From first blocks in first grade to Python in middle school',
    intro: 'Ages overlap on purpose. A child moves up when the work says so, not when a birthday does.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and stories', p: 'Sequencing, repeat loops and events, in short sessions with lots of making and showing.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Real games in Scratch', p: 'Variables, scoring and levels, plus the habit of testing a game on a friend before calling it done.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Typed code', p: 'Python basics, turtle graphics and the first small data projects, including the tree census.', courses: ['python-ai-kids-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Ages 12 to 14', h3: 'Bigger builds', p: 'Websites, AI literacy and longer Python projects, ready for high school computer science.', courses: ['kids-ai-web-development-course', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Kids and AI',
    h2: 'Should a NYC kid learn to code when chatbots write code?',
    intro: 'Yes, and the tree census shows why in one example.',
    p1: 'Ask a chatbot for the most common street tree in New York and it may give a confident answer. Ask it how many trees the census found and it may quote 666,134, or count rows and say 683,788. Only a child who has run the query knows why both numbers exist and which one answers the question asked.',
    p2: 'That is what coding gives a young child that tapping a chat box does not: the experience of making something, being wrong, finding out why, and fixing it. AI tools are worth learning later, as helpers. For under-thirteens we keep them out of the way and teach the thinking first.',
    closer: 'A kid who can check a number is better prepared for a city full of numbers than one who can only ask for them.',
    blogAnchor: 'why coding still matters'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Five boroughs, no commute',
    intro: 'Class happens at the kitchen table, so it fits around school pickup, swim practice and the rest of a city week.',
    cells: [
      { h3: 'Any borough, same class', p: 'A child in Riverdale and one on Staten Island can sit in the same live batch, each at home with a laptop.' },
      { h3: 'A teacher who watches', p: 'Screens are shared, so the teacher sees where a block or a line of code went wrong and asks about it.' },
      { h3: 'Placement before payment', p: 'The free first lesson ends with a level, a course and a time. Nothing is billed until a family says yes.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children at the same stage, or one teacher for one child at times the family picks.' },
      { h3: 'Parents can see the work', p: 'Projects are shared at the end of each unit, so a parent sees the game, not just a progress bar.' },
      { h3: 'Grades, not years', p: 'Teachers use US grade levels and the school calendar, and plan around school breaks.' }
    ],
    spec: { title: 'No Manhattan studio', p: 'We have no classroom anywhere in New York City and do not claim one. Every lesson is live online from India; a child needs a computer, headphones and a steady connection.' }
  },

  fees: {
    h2: 'Fees for New York City families',
    intro: 'The same three numbers for every borough.',
    first: 'One full placement lesson, free, with a recommended course and class time at the end.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty children.',
    private: 'A month of one-to-one classes with a single teacher, at times you choose.',
    closer: 'New York families pay in US dollars at the same rate as every other US family. We bill only after the free lesson, once a course and a time are agreed, and the pricing page covers holidays and missed classes.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Book a free class for your New York City child',
    intro: 'Tell us your child&rsquo;s age and what they enjoy. A six-year-old gets a block puzzle; an eleven-year-old might rank the trees on their own street.',
    success: 'Thank you. We will be in touch shortly to set up a free class for your child in New York City.'
  },

  faq: {
    h2: 'Questions New York City parents ask',
    intro: 'Short answers to what families in the five boroughs ask before a first class.',
    items: [
      { q: 'What is the best age to start coding in New York City?', a: 'Six is a good start for block coding with a live teacher. Most children move to typed Python somewhere between ten and twelve, once reading and typing are comfortable.' },
      { q: 'Are your classes in person anywhere in NYC?', a: 'No. Every class is live online with a real teacher, so there is no studio to travel to in any borough.' },
      { q: 'How do I know which class is right for my child?', a: 'Book the free placement lesson. The teacher gives a real task, watches how your child works, and recommends a level, a course and a time.' },
      { q: 'What time are classes for New York families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Every time is confirmed in Eastern Time.' },
      { q: 'Does New York State require computer science in school?', a: 'NYSED says schools have taught to the Computer Science and Digital Fluency Standards in full since September 1, 2024, but computer science is not currently a graduation requirement in its own right.' },
      { q: 'What is the street tree census project?', a: 'Students query the 2015 Street Tree Census on NYC Open Data, rank the species, and work out why the published total of 666,134 trees differs from the number of records.' },
      { q: 'Does my child need to know how to type?', a: 'Not for block coding. Typed languages come later, and by then most children have picked up enough typing from school.' },
      { q: 'How big are the groups?', a: 'Batches have fifteen to twenty children at the same level. Families who want a teacher to themselves can choose one-to-one classes instead.' },
      { q: 'Do you use AI chatbots with young children?', a: 'Not as a shortcut. Under-thirteens learn to build and debug on their own first; AI comes in later as a topic to understand, not a tool to copy from.' },
      { q: 'Are you connected with NYC Parks or the city schools?', a: 'No. We use public data that the City of New York publishes and we follow the state standards, but we are not connected with NYC Parks, NYSED or any school.' }
    ]
  },

  next: {
    eyebrow: 'Keep reading',
    h2: 'More for New York families',
    html: 'For the statewide picture, including the Regents changes, see <a class="cg-inline-link" href="/coding-classes-in-new-york">coding classes in New York State</a>. Game-minded kids can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>, and families comparing the whole country can start at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States page</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'New York and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-new-york', label: 'New York State' },
    { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding for kids' },
    { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding for kids' }
  ],

  personalityCss: `
.cg-root.cg-bkny .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; max-width: 22ch; }
.cg-root.cg-bkny .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bkny .cg-eyebrow { letter-spacing: 0.16em; font-size: 0.76rem; text-transform: uppercase; font-weight: 700; }
.cg-root.cg-bkny .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-bkny .cg-table caption { text-align: left; font-weight: 700; padding-bottom: 0.5rem; }
.cg-root.cg-bkny .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkny .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-bkny .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bkny .cg-faq-item h3 { font-weight: 700; }
`,

  dossier: {
    curriculumAuthority: 'New York State, read raw on 18 October 2026: NYSED Computer Science and Digital Literacy FAQ (2018 law; standards approved December 2020; bands K-1, 2-3, 4-6, 7-8, 9-12; Phase IV full implementation from September 1, 2024; elective or third unit of Math or Science credit; graduation requirement left to the graduation measures review). Code.org (2025) Most Recent Access Data: NY 2023-2024, 674 of 1,360 high schools, State Education Agency. IANA America/New_York and the US DST rule.',
    localProject: 'NYC Open Data 2015 Street Tree Census, dataset uvpi-gqnh (NYC Parks), queried with SoQL on 18 October 2026: 683,788 records; Alive 652,173, Dead 13,961, Stump 17,654 (our Alive plus Dead equals the published 666,134); by borough Queens 250,551 to Manhattan 65,423; top species London planetree 87,014, honeylocust 64,264, Callery pear 58,931; 31,619 records with no species; 132 species names; borough top threes for Manhattan and Queens. All counts ours. Lesson family: top-N ranking with a blank category, and reconciling a computed total with a published one.',
    requiredMentions: [
      '683,788 records',
      '666,134 trees',
      '87,014',
      '31,619 records have no species name',
      '17,654 stumps',
      'Queens',
      '250,551',
      'ginkgo (5,859)',
      '132 different species names',
      'May 2015 and October 2016',
    ],
    sources: [
      { claim: 'NYC Open Data: 2015 Street Tree Census, Tree Data (metadata, description, agency, date made public).', url: 'https://data.cityofnewyork.us/api/views/uvpi-gqnh.json' },
      { claim: 'NYC Open Data SoQL endpoint used for our counts.', url: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json' },
      { claim: 'NYC.gov Terms of Use: materials provided as is.', url: 'https://www.nyc.gov/main/terms-of-use' },
      { claim: 'NYSED Computer Science and Digital Literacy FAQ: 2018 law, December 2020 approval, bands, full implementation, credit rules.', url: 'https://www.nysed.gov/standards-instruction/computer-science-digital-literacy-faq' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: NY high school access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'NYC Open Data portal overview and terms page (opendata.cityofnewyork.us): blocked by a Cloudflare check, not retried; the NYC.gov terms of use are quoted instead.',
      'NYC Parks pages (nycgovparks.org): returned an empty 202 challenge, not retried; no Parks page facts are printed.',
      'NYC public school counts and computer science program claims: the schools.nyc.gov pages we tried returned 404 or no body, so none are printed.',
      'Tree health and condition fields: not used.',
      'Any ranking of coding classes in New York City: none exists that we could verify, and none is claimed.',
      'Any affiliation with NYC Parks, the City of New York, NYSED or Code.org.'
    ]
  }
};
