'use strict';
// Charlotte (cg- metro page, US cluster Phase 5, row 132, a "best" door). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a Charlotte child learns that a percentage is only as honest as its denominator, using the city's own bus stop
// inventory. Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-charlotte/):
//  - City of Charlotte open data (data.charlottenc.gov), Bus Stops (item 2ccefa27c30b4f0f9335777413cc3924, owner
//    CharlotteNC; licenseInfo https://creativecommons.org/licenses/by-nc-sa/4.0/; description "Feature class contains all
//    active bus stops for the Charlotte Area Transit System"; "Last Updated: 04/13/2026"). returnCountOnly 2,849;
//    outStatistics: Shelter 299, Bench 352, both 14, neither 2,212; Trans_P "transfer point" 433, of which Shelter 103,
//    Bench 82, either 180; Sidewalk "sidewalk" 2,172, blank 677 (13 of those with a shelter); trashcans 0: 1,804,
//    1: 654, 2: 81, 3: 5, blank 305. Our percentages: shelters 10.5% of all stops, 23.8% of transfer points; bench or
//    shelter 22.4% of all stops, 41.6% of transfer points.
//  - Same portal, counts of other city layers (same licence): Council Districts 7 records; LYNX Blue Line Stations 26
//    (15 Blue Line Station, 11 Blue Line Extension Station; ParknRide Yes 11); LYNX Gold Line Stops 17, all Operating;
//    Libraries 30, all Existing (24 with City "Charlotte, NC"); CATS Park and Ride Lots 53 (Bus 41, Rail 12);
//    Historic Districts 8, all Local.
//  - Charlotte Douglas International Airport, About CLT (cltairport.com): "In 2025, CLT welcomed 53.6 million passengers -
//    its second busiest year on record - and handled 574,193 aircraft operations."; "nonstop air service to more than 194
//    destinations"; ACI 2025 rankings "seventh busiest airport worldwide and for arrivals and departures".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Most Recent Access Data: NC 2024-2025, 513 of 735.
//  - IANA tzdb northamerica: America/New_York; 1 November 2026 and 14 March 2027.
// Blocked (403, not retried): www.charlottenc.gov, www.mecknc.gov, parkandrec.mecknc.gov, www.cmlibrary.org,
// www.ridetransit.org (redirects to charlottenc.gov). Mecklenburg County open data hubs returned 401 (private org).
// Licence note: the city's layers are CC BY-NC-SA 4.0. The page prints only a few aggregate counts we computed, with
// attribution, and republishes no data; students download the data themselves from the city portal.
// Lesson family: filtering on category attributes and computing percentages of a subset, with the denominator stated.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'CHARLOTTE', label: 'Charlotte', blurb: 'Live online coding for Charlotte kids aged 6 to 12, with a CATS bus stop percentages project on city data.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-charlotte',
  code: 'best',
  accent: '#4E5499',
  accentRationale: 'Charlotte: a muted slate periwinkle, #4E5499, as allocated in alloc.tsv for row 132, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Charlotte',
    eyebrow: 'Charlotte, North Carolina',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'North Carolina' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Charlotte',
  title: 'Best Coding Classes for Kids in Charlotte | Live Online',
  description: 'Live online coding classes for Charlotte kids aged 6 to 12: Scratch, games and Python taught by a real teacher, plus a kid-sized data project on CATS bus stops.',
  ogDescription: 'What the best coding classes for Charlotte kids have in common, and a first data project that teaches a child to ask: percent of what?',
  twitterDescription: 'Charlotte kids: live online coding, from Scratch to Python, with a bus stop data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Charlotte Kids',
    description: 'Scratch, block coding, game making and first Python for Charlotte children aged 6 to 12, taught live online in small level-matched groups or one to one.'
  },

  h1: 'Best coding classes for kids in Charlotte',
  capsuleQ: 'What makes the best coding class for a child in Charlotte?',
  capsule: 'The best coding classes for Charlotte kids are taught live by a teacher who can see the child&rsquo;s screen, are matched to the child&rsquo;s level, and end each week with something the child built. Modern Age Coders runs exactly that online for ages 6 to 12, from Scratch and block games to first Python, in small groups or one to one on Eastern Time.',
  lead: 'A seven-year-old does not need a programming language so much as a reason to keep going: a cat that moves when told, a game a sibling can lose at, a question with an answer the child worked out. That is what separates a good class from a video playlist. This page sets out what we think the best coding classes for Charlotte children look like and how ours meet that bar, then shows a first data project built on the City of Charlotte&rsquo;s own bus stop inventory. It is small enough for a fourth grader, and it teaches one of the most useful ideas in all of computing: before you trust a percentage, ask what it is a percentage of.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Charlotte.',

  picks: {
    eyebrow: 'Course picks for Charlotte kids',
    h2: 'Four first courses for ages 6 to 12',
    intro: 'Pick by age and temperament; the free trial confirms the right level before anything is booked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Drag-and-drop blocks for little hands: sequences, loops and a finished mini game by the end of the unit.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch from first sprite to full games with scores, levels and sound, shared with the family.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 9 to 12', note: 'Game design thinking and building for kids who already love playing and want to make their own.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First typed code in Python, with the Charlotte bus stop count as an early real-world task.' }
    ]
  },

  sections: [
    {
      id: 'bar', tint: '', eyebrow: 'What good looks like',
      h2: 'Five things the best kids&rsquo; coding classes in Charlotte share',
      intro: 'Our view, from teaching children online: a short list a parent can check during any trial lesson, ours included.',
      body: [
        { kind: 'table', caption: 'Signs of a strong coding class for ages 6 to 12, and how our classes handle each (both columns are ours)', head: ['What to look for', 'Why it matters for a young child', 'How we do it'], rows: [
          ['A live teacher who sees the screen', 'Children get stuck in small places, a missing block or a typo, and quit if nobody notices', 'Screens are shared in every lesson, and the teacher steps in within the minute'],
          ['A finished thing every week', 'A child who shows a working game at dinner wants to come back', 'Each lesson closes with something that runs, however small'],
          ['Placement by level, not age', 'Two nine-year-olds can be years apart in coding', 'A free trial with a real task decides the group'],
          ['Typed code when ready, not before', 'Pushing syntax too early turns fun into spelling tests', 'Blocks first, then Python once reading and patience allow'],
          ['Honest progress reports', 'Parents should know what was learned, not just attended', 'Short notes on what the child can now do on their own']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ages 6 to 8', p: 'Short sessions, big buttons and lots of talking aloud. The goal is confidence with sequences and repeats, and the joy of making a character obey.' },
          { h3: 'Ages 8 to 10', p: 'Scratch projects grow into real games with variables for score and lives. This is when many children first debug their own mistakes without help.' },
          { h3: 'Ages 10 to 12', p: 'Some children are ready for Python. They meet lists, loops over data and their first real question about their own city, such as the bus stop project below.' }
        ] },
        { kind: 'p', text: 'School matters too. North Carolina has made computer science part of what students need for a diploma, and our <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> explains that rule, while the 2025 Code.org data counts 513 of 735 high schools in the state offering the subject in 2024 to 2025. For a child in elementary school, though, the point is simpler: an early start makes that later course feel familiar rather than new.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Kid-sized data project',
      h2: 'How many Charlotte bus stops have a shelter? Percent of what?',
      intro: 'The City of Charlotte publishes every active CATS bus stop on its open data portal, with a column for shelters, benches and more. We asked the server to count them on 18 October 2026 and turned the answers into a lesson about denominators.',
      body: [
        { kind: 'table', caption: 'CATS bus stops with a shelter or a bench (our counts and percentages from the City of Charlotte Bus Stops layer, 18 October 2026)', head: ['Group of stops', 'How many stops', 'With a shelter', 'With a bench or a shelter'], rows: [
          ['All active stops', '2,849', '299, or 10.5%', '637, or 22.4%'],
          ['Stops marked as a transfer point', '433', '103, or 23.8%', '180, or 41.6%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the whole', p: 'First question: how many stops are there? The server answered 2,849. That number is the denominator, the bottom of every fraction that follows, and children write it down before anything else.' },
          { h3: '2. Filter a group', p: 'Next, keep only the stops whose Shelter column says Shelter. There are 299. Divide by 2,849 and you get about 10.5%, roughly one stop in ten.' },
          { h3: '3. Change the bottom', p: 'Now keep only transfer points, where riders change buses: 433 stops, 103 of them sheltered. Same city, same shelters, yet the share jumps to 23.8% because the bottom of the fraction changed.' }
        ] },
        { kind: 'callout', h3: 'The sentence we want every child to be able to say', p: 'Saying "23.8% of stops have shelters" would be wrong; the true sentence is "23.8% of transfer-point stops have shelters". Children who learn to name the group behind a percentage at ten are hard to fool with a chart at fifteen.' },
        { kind: 'p', text: 'Younger children do the same lesson with paper slips: one slip per stop in a small sample, sorted into piles, counted, then written as a fraction. Older ones write it in Python with a list of dictionaries and a filter, and then try a bonus question: 14 stops have both a bench and a shelter, so why does "bench or shelter" come to 637 and not 299 plus 352? Working out that the 14 would otherwise be counted twice is a real piece of logic.' },
        { kind: 'p', text: 'All of these numbers are ours, worked out from the city&rsquo;s layer on 18 October 2026; the city notes that the stop file is updated over time, so a later count may differ. The City of Charlotte publishes the layer under a Creative Commons Attribution NonCommercial ShareAlike licence. We quote only a handful of totals with credit to the city, we do not copy or resell the data, and students download it themselves from the city&rsquo;s portal.' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Charlotte by the numbers',
      h2: 'More counts a Charlotte kid can check on the city portal',
      intro: 'Record counts in other City of Charlotte open data layers on 18 October 2026, plus figures from Charlotte Douglas International Airport&rsquo;s own page.',
      body: [
        { kind: 'table', caption: 'Charlotte facts from official sources (layer record counts are ours, read from the city portal)', head: ['What', 'Figure', 'Where it comes from'], rows: [
          ['City council districts', '7', 'Council Districts layer'],
          ['LYNX Blue Line stations', '26, of which 11 are listed with park and ride', 'LYNX Blue Line Stations layer'],
          ['LYNX Gold Line stops', '17, all listed as Operating', 'LYNX Gold Line Stops layer'],
          ['CATS park and ride lots', '53: 41 bus and 12 rail', 'CATS Park and Ride Lots layer'],
          ['Libraries in the county layer', '30, all listed as Existing', 'Libraries layer'],
          ['Local historic districts', '8', 'Historic Districts layer'],
          ['Airport passengers in 2025', '53.6 million, its second busiest year on record', 'Charlotte Douglas International Airport'],
          ['Aircraft operations in 2025', '574,193', 'Charlotte Douglas International Airport'],
          ['Nonstop destinations', 'More than 194', 'Charlotte Douglas International Airport']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A count is a claim', p: 'Every row above is a number someone could check. That habit, asking where a number came from, is worth more to a young coder than any single language.' },
          { h3: 'Trains as a project', p: 'Children who enjoyed the bus stops can repeat the method on the 26 Blue Line stations: what share list a park and ride? The denominator is now 26, small enough to count by hand and check.' },
          { h3: 'From airport to arcade', p: 'The airport page says CLT was ranked seventh busiest worldwide for arrivals and departures in 2025. A game about landing planes at a busy airport makes a cheerful first Scratch project.' }
        ] }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Eastern Time',
      h2: 'A Saturday morning in Charlotte is evening for our teachers',
      intro: 'Charlotte keeps Eastern Time, listed as America/New_York in the IANA time zone database, and India stays on one time all year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Your choice of slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The gap', p: 'India runs 9 hours 30 minutes ahead of Charlotte in summer time and 10 hours 30 minutes ahead in winter time. So a 9:00 am Saturday lesson in Charlotte is 6:30 pm in India in October and 7:30 pm once the clocks go back.' },
          { h3: 'The two Sundays', p: 'Clocks fall back on November 1, 2026 and spring forward on March 14, 2027. We confirm every class again in Eastern Time the week before each Sunday.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to first Python',
    intro: 'Ages are a guide only; the teacher places each child after the free trial.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Blocks and sequences', p: 'Move, repeat and react, with a story or tiny game at the end of each lesson.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 7 to 9', h3: 'Scratch games', p: 'Sprites, events and scores, building games other children want to play.', courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Ages 9 to 11', h3: 'Bigger builds', p: 'Game design, simple apps and the first look at how AI tools work, at a child&rsquo;s level.', courses: ['game-development-masterclass-for-kids', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 10 to 12', h3: 'Typed code', p: 'Python with turtle drawings, lists and the bus stop percentages project.', courses: ['python-ai-kids-masterclass', 'roblox-game-coding-for-kids-lua-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Charlotte kid learn to code when AI can write code?',
    intro: 'Yes, for the same reason children still learn arithmetic in the age of calculators.',
    p1: 'An AI chatbot could tell a child that 23.8% of stops have shelters, and the child would have no way to see the missing words "of transfer points". Children who have filtered the list themselves know exactly which group the number describes, because they chose it.',
    p2: 'Our youngest students do not use adult AI tools at all. Older children learn, in a supervised class, what AI is, how it makes mistakes and why a person must check its answers, with tools whose own terms allow their age.',
    closer: 'Coding gives a child the power to ask a precise question and check the answer; that is the skill AI makes more valuable, not less.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Ballantyne to University City, class happens at home',
    intro: 'No carpool across I-485: a Charlotte child joins from the family computer.',
    cells: [
      { h3: 'A teacher, live', p: 'Every lesson is taught in real time, with the child&rsquo;s screen visible to the teacher, so small mistakes are fixed before they become big frustrations.' },
      { h3: 'Parents in the loop', p: 'Short notes after lessons say what the child built and can now do alone, in plain words.' },
      { h3: 'Free trial lesson', p: 'A real first task with a teacher, then a suggested level, course and time. No card is asked for.' },
      { h3: 'Groups at one level', p: 'Fifteen to twenty children at a similar stage, from Charlotte and the rest of the US, learning side by side.' },
      { h3: 'Or a private teacher', p: 'One-to-one lessons for a shy beginner, a fast learner or a family with an unusual timetable.' },
      { h3: 'Eastern Time slots', p: 'Weekdays or weekends, flexible, each one written in Eastern Time.' }
    ],
    spec: { title: 'Online only', p: 'Classes are live and online from India. Modern Age Coders has no center in Charlotte or anywhere in North Carolina and claims none, and is not connected with the City of Charlotte, CATS or Charlotte Douglas International Airport.' }
  },

  fees: {
    h2: 'Fees for Charlotte families',
    intro: 'One free lesson, then a clear monthly fee in US dollars.',
    first: 'A free trial with a teacher that ends with a recommended level, course and Eastern Time slot.',
    group: 'A month of lessons in a group of fifteen to twenty children at the same stage.',
    private: 'A month of one-to-one lessons with a single teacher.',
    closer: 'Charlotte families pay the same US dollar fee as families anywhere in the country. You are billed only after the trial, once you have chosen a course; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Parents on Google about their children&rsquo;s classes',

  book: {
    h2: 'Book a free coding trial for your Charlotte child',
    intro: 'Tell us the age and what they love. A six-year-old might start with a dancing character, a ten-year-old with a Scratch racer or the bus stop count.',
    success: 'Thank you. We will be in touch shortly to arrange a free trial for your child in Charlotte.'
  },

  faq: {
    h2: 'Charlotte parents ask',
    intro: 'Common questions before a first coding class.',
    items: [
      { q: 'What age can my Charlotte child start coding?', a: 'From age 6, with block coding. Scratch usually suits ages 7 to 11, and typed Python often starts around 9 or 10, depending on reading and patience.' },
      { q: 'Are the classes live or recorded?', a: 'Live. A teacher teaches every lesson in real time and can see the child\'s screen, which is how small mistakes get fixed before they spoil the fun.' },
      { q: 'What is the Charlotte bus stop project?', a: 'Children count City of Charlotte bus stops with shelters, turn the counts into percentages, and learn that 23.8% of transfer points is a different claim from 10.5% of all stops.' },
      { q: 'Why does the denominator matter?', a: 'Because a percentage only means something once you know the group. Of 2,849 stops, 299 have shelters; of 433 transfer points, 103 do. Same shelters, different question.' },
      { q: 'What time are classes for Charlotte kids?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time.' },
      { q: 'Will class times change when the clocks change?', a: 'Only on the India side. Your Eastern Time slot is checked again before November 1, 2026 and March 14, 2027, since India keeps one clock all year.' },
      { q: 'Does my child need a special computer?', a: 'A laptop or desktop with a keyboard, a mouse if possible, sound and a reliable connection. Tablets are hard for typed code, so we suggest a computer.' },
      { q: 'Do young children use AI tools in class?', a: 'Not adult ones. Children learn what AI is and how it can be wrong, and any tool used is one whose own terms allow the child\'s age.' },
      { q: 'Do you have a center in Charlotte?', a: 'No. All lessons are live online from India, so there is nothing to drive to and no building to find.' },
      { q: 'How much do classes cost?', a: 'The fees section on this page shows the free trial, the monthly group option and the monthly private option in US dollars, and nothing is billed before the trial.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Charlotte families',
    html: 'Families thinking ahead to high school can read about <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">coding and AI classes across North Carolina</a>. Young game makers can try <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> lists every US page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Charlotte and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
  ],

  personalityCss: `
.cg-root.cg-best .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-best .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.03; }
.cg-root.cg-best .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-best .cg-eyebrow { letter-spacing: 0.09em; font-weight: 720; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-best .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-best .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.9rem); }
.cg-root.cg-best .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-best .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-best .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-best .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'North Carolina, one sentence only, linking /coding-and-ai-classes-in-north-carolina; Code.org (2025) raw sheet Most Recent Access Data, NC 2024-2025, 513 of 735; IANA America/New_York and the US DST rule. charlottenc.gov, mecknc.gov, cmlibrary.org and ridetransit.org returned 403.',
    localProject: 'City of Charlotte Bus Stops (data.charlottenc.gov, CC BY-NC-SA 4.0, aggregate counts only, attributed), queried 18 October 2026: 2,849 stops; Shelter 299 (10.5%); bench or shelter 637 (22.4%); both 14; transfer points 433, sheltered 103 (23.8%), bench or shelter 180 (41.6%). Lesson family: filtering on category attributes and percentages of a subset with the denominator stated.',
    requiredMentions: [
      '2,849',
      '299, or 10.5%',
      '103, or 23.8%',
      '180, or 41.6%',
      '14 stops have both a bench and a shelter',
      '26, of which 11 are listed with park and ride',
      '53: 41 bus and 12 rail',
      '53.6 million',
      '574,193',
      'More than 194'
    ],
    sources: [
      { claim: 'City of Charlotte open data: Bus Stops layer (CATS), licence CC BY-NC-SA 4.0.', url: 'https://services.arcgis.com/9Nl857LBlQVyzq54/arcgis/rest/services/Bus_Stops/FeatureServer/0' },
      { claim: 'City of Charlotte open data portal: Council Districts, LYNX stations and stops, Park and Ride Lots, Libraries, Historic Districts.', url: 'https://data.charlottenc.gov/' },
      { claim: 'Charlotte Douglas International Airport, About CLT: 2025 passengers, operations, destinations, ACI ranking.', url: 'https://www.cltairport.com/airport-info/about-clt/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: North Carolina access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'City of Charlotte, Mecklenburg County, Charlotte Mecklenburg Library and CATS web pages: 403 on 18 October 2026, not retried; no facts taken from them.',
      'Republishing the bus stop data: not done; CC BY-NC-SA 4.0 data, so only a few aggregate counts are quoted with attribution.',
      'Ridership (Avg_Board, Avg_Alight) and stop addresses: not used; counts of stop features only.',
      'Council member names and emails in the Council Districts layer: not printed.',
      'Repeating the North Carolina graduation rule in detail: left to the North Carolina page.',
      'Any affiliation with the City of Charlotte, CATS, Mecklenburg County or Charlotte Douglas International Airport.'
    ]
  }
};
