'use strict';
// Minneapolis (cg- metro page, US cluster Phase 5, row 138). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: what parents in Minneapolis should look for in a kids coding class, shown through a project kids love:
// counting a whole summer of the city's scooter and e-bike rides in a pivot table. Sources read raw on 18 October 2026
// (copies in keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-minneapolis/):
//  - City of Minneapolis, Bicycling: "Minneapolis has 89 miles of trails, 36 miles of curb-protected bikeways and paths,
//    and over 140 miles of painted bike lanes."
//  - City of Minneapolis, Rent a scooter: rental hours "4 a.m. - 12 a.m. (Midnight)"; "Ordinance requires companies
//    disable scooters at midnight"; "If it becomes snowy and icy, the City may suspend operations"; "at most, 3,000
//    scooters"; "3 licensees operating"; no more than 34% of fleets downtown. (The poverty-area distribution clause is
//    not used.)
//  - City of Minneapolis, Community and neighborhoods: "our City's 83 residential neighborhoods".
//  - City of Minneapolis, City Council: "one of the 13 Council Members represents your ward".
//  - City of Minneapolis, City trees: "We've planted thousands of trees throughout the city since launching this program
//    in 2006."
//  - City of Minneapolis open data, Motorized Foot Scooter and eBike Trips 2024 (item 0607e3e32633409ca16f801ac240a524,
//    owner City_of_Minneapolis; licenseInfo: the City "has waived all copyright and related or neighboring rights to Open
//    Data", maps "for reference purposes only"; field notes: TripDuration in seconds, TripDistance in meters, StartTime
//    "rounded to the nearest half hour"). Queried 18 October 2026: returnCountOnly 804,546; vehicleType scooter 597,883,
//    bicycle 206,663; StartCenterlineType street 788,722, trail 15,824. Our monthly counts (scooter, bicycle): April
//    39,667 / 15,210; May 74,057 / 29,950; June 78,764 / 30,281; July 107,242 / 36,423; August 115,541 / 37,034;
//    September 131,851 / 40,912; October 50,761 / 16,853; none January to March or November to December; months sum to
//    804,546. Earliest StartTime 2024-04-04 15:30 UTC, latest 2024-10-15 00:00 UTC. Averages from outStatistics: scooter
//    2,288 m and 750 s, bicycle 2,802 m and 830 s; trail starts 4,567 m, street starts 2,377 m.
//  - Minnesota Revisor of Statutes, 120B.241 (Computer Science Education Advancement Program), 2023: high schools must
//    report CS course offerings and enrollment (read in full on the Minnesota state page; one sentence here).
//    education.mn.gov served a bot challenge, so nothing is quoted from MDE.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Access tabs only: MN 2023-2024, 275 of 799 (34.4%).
//  - IANA tzdb northamerica: America/Chicago; back 1 November 2026, forward 14 March 2027.
// Lesson family: pivot tables (crosstab of two categorical fields) and checking that the parts add back to the total.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MINNEAPOLIS', label: 'Minneapolis', blurb: 'What to look for in a kids coding class in Minneapolis, with a scooter and e-bike ride pivot table project.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-minneapolis',
  code: 'beki',
  accent: '#5C161C',
  accentRationale: 'Minneapolis: a deep muted cranberry, #5C161C, as allocated in alloc.tsv for row 138, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Minneapolis',
    eyebrow: 'Minneapolis, Minnesota',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Minnesota' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Minneapolis',
  title: 'Best Coding Classes for Kids in Minneapolis | Live Online',
  description: 'Choosing the best coding classes for kids in Minneapolis: what to look for, live online classes from age 6 on Central Time, and a scooter ride data project.',
  ogDescription: 'How Minneapolis parents can judge a kids coding class, plus live online Scratch, Python and game classes and a project on the city&rsquo;s 2024 scooter rides.',
  twitterDescription: 'Kids coding classes for Minneapolis families, live online, with a city data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Minneapolis Kids',
    description: 'Scratch, block coding, Python and game making for Minneapolis children aged 6 to 12, taught live online by a teacher in small level-matched groups or one to one.'
  },

  h1: 'The best coding classes for kids in Minneapolis',
  capsuleQ: 'What makes a coding class for kids in Minneapolis worth choosing?',
  capsule: 'The best coding classes for kids in Minneapolis have a live teacher, a group of children at the same level, and real projects a child finishes. Modern Age Coders teaches Scratch, block coding, Python and game making live online from age 6, in groups of fifteen to twenty or one to one, at times set in Central Time.',
  lead: 'Search for kids coding classes in Minneapolis and you will find camps, clubs, apps and online courses that look alike on the surface. The differences that matter are harder to see from a listing: whether a real person is teaching in real time, whether your child is placed by level rather than by age alone, and whether each month ends with something your child built and can explain. This page sets out a short checklist for judging any class, then shows how ours meet it, using a project made from the City of Minneapolis&rsquo;s own open data: every shared scooter and e-bike ride of the 2024 season, counted month by month in a pivot table that a ten-year-old can build.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Minneapolis.',

  picks: {
    eyebrow: 'Course picks for Minneapolis kids',
    h2: 'Four first courses for Minneapolis children',
    intro: 'Picked by age and interest; a free lesson with a teacher confirms the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Drag-and-drop programs that become animations and games, the gentlest start there is.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 7 to 11', note: 'Block coding with a steady climb in difficulty, from stories to small apps.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language, with the scooter ride pivot table as a highlight project.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 8 to 12', note: 'Coding inside a world children already love, with loops and logic doing the building.' }
    ]
  },

  sections: [
    {
      id: 'checklist', tint: '', eyebrow: 'How to choose',
      h2: 'Five questions to ask any kids coding class in Minneapolis',
      intro: 'Our own checklist, written for parents comparing options. It applies to every provider, including us.',
      body: [
        { kind: 'table', caption: 'A parent&rsquo;s checklist for judging a kids coding class (ours), with how Modern Age Coders answers each question', head: ['Ask this', 'Why it matters', 'Our answer'], rows: [
          ['Is a teacher live in every session?', 'Children ask questions constantly; a video cannot answer them', 'Yes, every class is taught in real time'],
          ['How are children grouped?', 'Age is a rough proxy; a seven-year-old reader and a nine-year-old beginner may fit the same group', 'By level, set in a free first lesson'],
          ['How big is the group?', 'Size decides how often a child gets help', 'Fifteen to twenty in a batch, or one to one'],
          ['What gets finished?', 'Finished projects build confidence and show progress', 'A working project in every unit'],
          ['Can I try before paying?', 'A real lesson tells you more than a brochure', 'Yes, the first full lesson is free']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Watch for screen time dressed as coding', p: 'Many apps let a child tap through puzzles for hours without writing a single line of their own. Ask what your child will make, not how many levels they will clear.' },
          { h3: 'Expect the teacher to explain', p: 'A good teacher asks a child to explain why a program works. If your child can say it out loud, the idea has stuck; if they cannot, it has not yet.' },
          { h3: 'Think about the long road', p: 'The strongest choice is a class with a next step: Scratch should lead somewhere, usually to Python, without starting over each time.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Scooter or e-bike? A pivot table of a whole Minneapolis summer',
      intro: 'The City of Minneapolis publishes every shared scooter and e-bike trip as open data. For 2024, we asked the city&rsquo;s server to count rides by month and vehicle type, which is exactly what a pivot table does.',
      body: [
        { kind: 'table', caption: 'Shared rides in Minneapolis, 2024 season, by month and vehicle (our counts from the city&rsquo;s Motorized Foot Scooter and eBike Trips 2024 data, queried 18 October 2026)', head: ['Month', 'Scooter rides', 'Bicycle rides', 'Month total', 'Scooter share'], rows: [
          ['April', '39,667', '15,210', '54,877', '72.3%'],
          ['May', '74,057', '29,950', '104,007', '71.2%'],
          ['June', '78,764', '30,281', '109,045', '72.2%'],
          ['July', '107,242', '36,423', '143,665', '74.6%'],
          ['August', '115,541', '37,034', '152,575', '75.7%'],
          ['September', '131,851', '40,912', '172,763', '76.3%'],
          ['October', '50,761', '16,853', '67,614', '75.1%'],
          ['Season', '597,883', '206,663', '804,546', '74.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rows and columns', p: 'A pivot table puts one category down the side (months) and another across the top (vehicle type), then counts what falls in each box. Kids build it first in a spreadsheet, then in Python with a dictionary of dictionaries.' },
          { h3: '2. Do the parts add up?', p: 'The server reported 804,546 trips in all. Our seven monthly totals add to exactly 804,546, and so do the two vehicle columns. When the parts match the whole, the table is trustworthy; when they do not, something is being missed.' },
          { h3: '3. Read the pattern', p: 'Rides climb from April to a September peak of 172,763, then drop sharply in October. There are no rides at all from November to March, and children can explain why from the city&rsquo;s own rule about snow and ice.' }
        ] },
        { kind: 'callout', h3: 'A rule you can find in the data', p: 'The city says operations may be suspended when it becomes snowy and icy, and the 2024 file runs from April 4 to October 15, with nothing outside that window. Children who notice the empty winter months and connect them to that rule are reading data like scientists.' },
        { kind: 'p', text: 'We ran these queries ourselves on 18 October 2026, so the counts are our results, not official statistics; Minneapolis waives copyright on this open data and offers it as reference material. The file also gives distance in meters and duration in seconds, so older children can go further: our averages show scooter rides around 2,288 meters and bicycle rides around 2,802, while the 15,824 trips that started on a trail averaged about 4,567 meters, almost twice the street average.' },
        { kind: 'p', text: 'One honest caveat belongs in every write-up. Start times are rounded to the nearest half hour and appear to be stored in UTC, so a ride just after midnight on the last day of a month could land in the next month. The effect on our table is tiny, but saying so is part of the skill.' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Minneapolis facts',
      h2: 'The city behind the project',
      intro: 'Figures from the City of Minneapolis&rsquo;s own pages, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Minneapolis, as the city describes itself', head: ['What', 'City of Minneapolis figure'], rows: [
          ['Trails', '89 miles'],
          ['Curb-protected bikeways and paths', '36 miles'],
          ['Painted bike lanes', 'Over 140 miles'],
          ['Residential neighborhoods', '83'],
          ['City Council', '13 Council Members, one for each ward'],
          ['Scooter fleet cap', 'At most 3,000 scooters, with 3 licensees operating'],
          ['Scooter rental hours', '4 a.m. to midnight; ordinance requires scooters to be disabled at midnight'],
          ['City tree planting program', 'Running since 2006']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A fleet cap to compare', p: 'With at most 3,000 scooters allowed, a curious child can work out roughly how many rides each scooter made in our table. It is a rough estimate, and learning to call it that is the point.' },
          { h3: 'Midnight, in code', p: 'The midnight shut-off is a rule a program can check. Older kids write an if statement that flags any ride starting after midnight, then discover why time zones make that harder than it looks.' },
          { h3: 'Miles of lanes', p: 'Trails, protected bikeways and painted lanes are three kinds of route. Children can draw them as a bar chart and ask which one most of those trail-start rides used.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Minnesota schools',
      h2: 'Where coding fits for a Minnesota child',
      intro: 'A short note on the state picture; the full detail lives on our Minnesota material and the state&rsquo;s own sources.',
      body: [
        { kind: 'p', text: 'Minnesota&rsquo;s 2023 Computer Science Education Advancement Program law, Minnesota Statutes section 120B.241, focuses on building capacity and on reporting: among other things it requires every high school to report its computer science course offerings and enrollment. It does not make coding a subject every elementary child takes, so for most Minneapolis kids, coding happens in clubs, camps or classes like ours. In the Code.org (2025) data, 275 of 799 Minnesota high schools, 34.4%, offered foundational computer science in 2023 to 2024 (Code.org (2025). 2025 State of AI + CS Education).' },
        { kind: 'table', mt: true, caption: 'Central Time and India time for a Minneapolis class, 2026 to 2027 (our arithmetic from the IANA tzdb America/Chicago rules)', head: ['Stretch of the year', 'Minneapolis clock', 'India is later by', 'A 9:00 am Saturday class is'], rows: [
          ['Until the end of October 2026', 'Central Daylight', '10 hours 30 minutes', '7:30 pm Saturday in India'],
          ['November 1, 2026 to March 13, 2027', 'Central Standard', '11 hours 30 minutes', '8:30 pm Saturday in India'],
          ['From March 14, 2027', 'Central Daylight', '10 hours 30 minutes', '7:30 pm Saturday in India']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Choosing a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Why weekend mornings help', p: 'Saturday and Sunday mornings in Minneapolis fall in the Indian evening, a comfortable time for our teachers, which is why young children often get their pick of morning slots.' },
          { h3: 'Two clock changes', p: 'We send a reminder in the week of November 1, 2026 and again before March 14, 2027, because the gap to India moves by one hour each time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to first Python',
    intro: 'Ages are a guide; the free lesson decides where your child begins.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and stories', p: 'Sequences, loops and events, with animated stories children narrate themselves.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 to 10', h3: 'Games and worlds', p: 'Game logic, scoring and variables, in Scratch and in Minecraft.', courses: ['minecraft-coding-for-kids-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 9 to 12', h3: 'Typed code', p: 'Python with drawings, quizzes and the scooter ride pivot table.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Building more', p: 'Roblox games in Luau and web pages, for children ready for bigger projects.', courses: ['roblox-game-coding-for-kids-lua-course', 'kids-ai-web-development-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Minneapolis child still learn to code when AI can write programs?',
    intro: 'Yes, because coding teaches a child to check an answer, not just to get one.',
    p1: 'Ask an AI tool for the busiest scooter month and it might say July, because summer sounds right. The city&rsquo;s data says September. A child who built the pivot table knows the answer and also knows how to prove it, which is a habit no tool can hand them.',
    p2: 'For younger children we keep AI simple and safe: they learn what it is, where it makes mistakes and why a person should check its work. They are never asked to sign up for adult-only services, and the coding itself is theirs from the first block.',
    closer: 'Learning to code at eight or nine is less about becoming a programmer than about learning to ask "how do I know that?", a question that serves a child in every subject.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Northeast to Nokomis, class without the commute',
    intro: 'Minneapolis children join from home, which matters most in January.',
    cells: [
      { h3: 'No winter driving', p: 'A class from the kitchen table means no icy evening drive across the river, whichever of the city&rsquo;s neighborhoods you live in.' },
      { h3: 'US grades, US calendar', p: 'Teachers plan around US grade levels and the Minnesota school year, and keep pace with what children meet at school.' },
      { h3: 'Try it on us', p: 'Your child spends a whole lesson with a teacher; afterwards you hear which group, course and hour would suit, and nobody asks for a card.' },
      { h3: 'Placed by level', p: 'Children join a batch of fifteen to twenty who showed a similar starting point in their trial, whether they live in Minnesota or several states away.' },
      { h3: 'Private if preferred', p: 'One teacher for one child, for those who need a slower pace, a faster one or a particular project.' },
      { h3: 'Central Time slots', p: 'Weekdays or weekends, flexible, and every time written in Central Time.' }
    ],
    spec: { title: 'Online, said plainly', p: 'All lessons are live and online from India. Modern Age Coders has no center in Minneapolis or anywhere in Minnesota and claims none, and is not connected with the City of Minneapolis, the Minneapolis Park and Recreation Board or the Minnesota Department of Education.' }
  },

  fees: {
    h2: 'What Minneapolis families pay',
    intro: 'A free start, then one monthly fee in US dollars.',
    first: 'A free lesson that ends with a recommended level, course and Central Time slot for your child.',
    group: 'A month of classes in a level-matched group of fifteen to twenty children.',
    private: 'A month of classes with one teacher for your child alone.',
    closer: 'Minneapolis pays the same US dollar fee as everywhere else in the country. Nothing is billed before the free lesson, and the pricing page explains holidays and make-up classes.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free coding class for your child',
    intro: 'Tell us your child&rsquo;s age and what they enjoy. A six-year-old might animate a story in Scratch; a ten-year-old might start the scooter ride pivot table.',
    success: 'Thank you. We will be in touch soon to arrange a free class for your child in Minneapolis.'
  },

  faq: {
    h2: 'Minneapolis parents&rsquo; questions',
    intro: 'What families in Minneapolis ask before a first class.',
    items: [
      { q: 'How do I choose the best coding class for my child in Minneapolis?', a: 'Look for a live teacher in every session, grouping by level, a group size you are comfortable with, finished projects and a free trial lesson. Our checklist on this page applies to any provider.' },
      { q: 'What age can my child start coding?', a: 'From age 6 with Scratch and block coding. Most children move to typed Python between 9 and 11, and the free lesson tells us when.' },
      { q: 'What is the scooter ride project?', a: 'Children count the City of Minneapolis 2024 scooter and e-bike trips by month and vehicle type in a pivot table, then check that the parts add up to the 804,546 total.' },
      { q: 'Which month had the most shared rides in 2024?', a: 'September, with 172,763 rides in our count of the city data, followed by August with 152,575. The season ran from April 4 to October 15, 2024.' },
      { q: 'Does Minnesota require coding in elementary school?', a: 'No. Minnesota Statutes 120B.241 builds capacity and requires high schools to report CS offerings and enrollment, but it does not add coding as a required elementary subject.' },
      { q: 'What time are classes for Minneapolis families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Central Time.' },
      { q: 'Will my child be using AI chatbots?', a: 'Not adult-only ones. Younger children learn what AI is and why its answers need checking, and they write their own code from the first lesson.' },
      { q: 'Is there a Modern Age Coders center in Minneapolis?', a: 'No. Every class is live online from India; a child needs a computer, a headset and a reliable connection at home.' },
      { q: 'Can siblings learn together?', a: 'Siblings at a similar level can share a group, and siblings at different levels are placed separately so each one moves at the right pace.' },
      { q: 'Where do I find the prices?', a: 'Just above the booking form there is a short fees block: the trial lesson costs nothing, then you see one monthly figure for a group place and one for private lessons, in US dollars.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Minneapolis families',
    html: 'Children who love games can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or look at <a class="cg-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes for kids</a>. For every US page in one place, start at <a class="cg-inline-link" href="/coding-classes-in-united-states">the United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Minneapolis and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
    { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes for kids' },
    { href: '/coding-and-ai-classes-in-minnesota', label: 'Minnesota' }
  ],

  personalityCss: `
.cg-root.cg-beki .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-beki .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.03; }
.cg-root.cg-beki .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-beki .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-beki .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.015em; }
.cg-root.cg-beki .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.9rem); }
.cg-root.cg-beki .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-beki .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-beki .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-beki .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Minnesota, read raw on 18 October 2026: Minnesota Statutes 120B.241 (2023 Computer Science Education Advancement Program; high schools report CS offerings and enrollment), one sentence only; education.mn.gov served a bot challenge, not quoted; Code.org (2025) raw sheet Access tabs (MN 2023-2024, 275 of 799, 34.4%); IANA America/Chicago and the US DST rule.',
    localProject: 'City of Minneapolis Motorized Foot Scooter and eBike Trips 2024 (copyright waived, reference use), queried 18 October 2026: 804,546 trips; scooter 597,883, bicycle 206,663; our monthly pivot April to October (September peak 172,763), months sum to the total; season April 4 to October 15, 2024; trail starts 15,824 averaging 4,567 m. Lesson family: pivot tables and checking parts against the total.',
    requiredMentions: [
      '804,546',
      '597,883',
      '172,763',
      '15,824',
      'Curb-protected bikeways and paths',
      'Over 140 miles',
      'ordinance requires scooters to be disabled at midnight',
      '13 Council Members',
      'At most 3,000 scooters, with 3 licensees operating',
      'Running since 2006',
      '4,567 meters',
      'April 4 to October 15'
    ],
    sources: [
      { claim: 'City of Minneapolis, Bicycling: miles of trails, protected bikeways and painted lanes.', url: 'https://www.minneapolismn.gov/getting-around/bicycling/' },
      { claim: 'City of Minneapolis, Rent a scooter: hours, midnight ordinance, snow and ice suspension, fleet cap, licensees.', url: 'https://www.minneapolismn.gov/getting-around/scooters/rent-a-scooter/' },
      { claim: 'City of Minneapolis, Community and neighborhoods: 83 residential neighborhoods.', url: 'https://www.minneapolismn.gov/resident-services/neighborhoods/' },
      { claim: 'City of Minneapolis, City Council: 13 Council Members and wards.', url: 'https://www.minneapolismn.gov/government/city-council/' },
      { claim: 'City of Minneapolis, City trees program since 2006.', url: 'https://www.minneapolismn.gov/government/programs-initiatives/environmental-programs/city-trees/' },
      { claim: 'City of Minneapolis open data: Motorized Foot Scooter and eBike Trips 2024.', url: 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Motorized_Foot_Scooter_and_eBike_Trips_2024/FeatureServer/0' },
      { claim: 'Minnesota Revisor of Statutes, section 120B.241.', url: 'https://www.revisor.mn.gov/statutes/cite/120B.241' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Minnesota access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Chicago and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Minnesota Department of Education pages: a bot challenge was served, not circumvented; nothing quoted.',
      'Minneapolis Park and Recreation Board facts: minneapolisparks.org returned 403, not retried.',
      'The city\'s poverty-area scooter distribution rule: income-related content, left out.',
      'Minneapolis parks acreage: already the Minnesota state page project, not repeated here.',
      'Rides per scooter as a fact: shown only as a rough exercise idea, no number printed.',
      'Any affiliation with the City of Minneapolis, the Park Board, MDE, Code.org or the College Board.'
    ]
  }
};
