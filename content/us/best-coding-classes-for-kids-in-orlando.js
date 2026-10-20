'use strict';
// Orlando (cg- metro page, US cluster Phase 5, row 129, a "best" door). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: how does an Orlando parent choose a coding class for a child, and what can a child build from the city's own
// data? The project bins every recorded Orlando annexation by decade into a histogram. Sources read raw on
// 18 October 2026 (copies in keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-orlando/):
//  - City of Orlando open data portal (data.cityoforlando.net, Socrata), dataset "Orlando Annexations" (jg52-dz4p),
//    columns include annexationdate, effectivedate, year, legaldescriptionacres; no licence is stated on the dataset.
//    $select=count(*) returned 1012; all 1,012 rows downloaded with $limit=50000 (annex-attrs-2026-10-18.json);
//    grouped by year with $group=year (annex-by-year-2026-10-18.json). Our counts by decade: 1950s 83, 1960s 168,
//    1970s 178, 1980s 114, 1990s 112, 2000s 229, 2010s 80, 2020s (2020 to 2026) 48; years 1950 to 2026; top years
//    1973 (55) and 2002 (48); 78 of the 251 records before 1970 carry 0 in legaldescriptionacres.
//  - orlando.gov, Orlando History: "Orlando's history dates back to 1838"; a community "known as Jernigan";
//    "Jernigan had a post office, established May 30, 1850."; "In 1857, the U.S. Post Office adopted the name change.";
//    "The Town of Orlando was incorporated in 1875 with 85 inhabitants, 22 of whom were qualified voters.";
//    "There are four stories that are told." (on the name); "hub of Florida's citrus industry in the 19 th century";
//    "As of 2026, the city's population is 339,999 residents."
//  - orlando.gov, Parks & the Environment: "Orlando is home to more than 148 beautiful parks, gardens, recreation
//    areas, neighborhood centers and playgrounds."; "The City of Orlando trail network consists of over 40 miles";
//    "The GreenUp Orlando program was created in 1985 to increase the city's available tree canopy".
//  - orlando.gov, Lake Eola Park: "a sidewalk that circles the lake 0.9 miles in length"; Swan Boats "Tuesday - Sunday
//    10 a.m. - 7 p.m. Closed on Mondays".
//  - Florida Statutes s. 1007.2616 (Online Sunshine): "the term "computer science" means the study of computers and
//    algorithmic processes"; opportunities "may include coding instruction in elementary school and middle school";
//    subsection (5) "Elementary schools and middle schools may establish digital classrooms".
//  - Code.org (2025). 2025 State of AI + CS Education raw sheet, Most Recent Access Data: FL 2023-2024, 463 of 1,192.
//  - IANA tzdb northamerica: America/New_York; November 1, 2026 and March 14, 2027.
// Blocked: fldoe.org 403 on 18 October 2026 (not retried).
// Lesson family: binning dates by decade into a histogram (and what an unfinished bin means).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ORLANDO', label: 'Orlando', blurb: 'How to pick a coding class for an Orlando child, plus a kid-sized data project: how the city grew, decade by decade.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-orlando',
  code: 'bko',
  accent: '#242280',
  accentRationale: 'Orlando: #242280, a deep Lake Eola evening indigo from the allocation table, apart from the other US accents and readable on every paper colour',
  pageType: 'city',
  place: {
    name: 'Orlando',
    eyebrow: 'Orlando, Florida, United States',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Florida' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Orlando',
  title: 'Best Coding Classes for Kids in Orlando | Live Online',
  description: 'How to choose the best coding class for an Orlando child aged 6 to 12: live online Scratch, Python and AI, a city data project for kids, and Eastern Time slots.',
  ogDescription: 'What makes a coding class right for an Orlando kid, and a first data project on the city&rsquo;s own records: how Orlando grew, decade by decade, as a histogram.',
  twitterDescription: 'Choosing a coding class for an Orlando child, with a live online option and a city data project.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Orlando Kids',
    description: 'Blocks coding, Scratch, Roblox, Python and AI literacy for Orlando children from kindergarten to eighth grade, taught live online in small level-matched batches or one to one, on Eastern Time.'
  },

  h1: 'Coding classes for kids in Orlando',
  capsuleQ: 'What are the best coding classes for kids in Orlando?',
  capsule: 'The best coding class for an Orlando child is live, small enough for the teacher to see every screen, and placed by level rather than age. Modern Age Coders teaches kids aged 6 to 12 live online: blocks and Scratch, then Roblox games, Python and AI basics, in batches of fifteen to twenty or one to one, on Eastern Time. The first lesson is free.',
  lead: 'Orlando parents have a lot of choice: camps near the theme parks, after-school clubs, apps that promise to teach coding through games. This page is a buyer&rsquo;s guide written from the teacher&rsquo;s side of the screen. It sets out what to look for in a coding class for a young child, what Florida law says schools should offer, and what an eight-year-old can actually build from public data about their own city. Our Orlando project uses the City of Orlando&rsquo;s record of every annexation since 1950: 1,012 rows, one per piece of land the city took in. Sorted into decades and drawn as a histogram, it shows a child how their city grew, with a program they wrote themselves.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Orlando.',

  picks: {
    eyebrow: 'Course picks for Orlando kids',
    h2: 'Four first courses for young Orlando coders',
    intro: 'A starting point by grade. The free lesson checks the fit before anything is booked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 3', note: 'Drag-and-drop blocks, puzzles and short animations, so a young child learns sequences and loops by playing.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Grades 3 to 6', note: 'Real Luau code inside Roblox Studio, for children who already love the platform and want to build, not only play.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'A first typed language, with the annexation histogram as one of the early projects.' },
      { course: 'ai-literacy-for-kids-course', band: 'Grades 3 to 7', note: 'How AI works, where it goes wrong, and how a child can use it safely, explained with hands-on activities.' }
    ]
  },

  sections: [
    {
      id: 'choose', tint: '', eyebrow: 'A parent&rsquo;s checklist',
      h2: 'How to choose the best coding class for an Orlando kid',
      intro: 'Seven questions we would ask of any provider, including us. The right-hand column is our own answer, so you can compare like for like.',
      body: [
        { kind: 'table', caption: 'Questions to ask a kids coding class, and how Modern Age Coders answers them (our answers)', head: ['Question to ask', 'Why it matters', 'Our answer'], rows: [
          ['Is a teacher live in every lesson?', 'Young children get stuck in ways a video cannot see', 'Yes, every class is taught live'],
          ['How is a child placed?', 'Age is a poor guide; a nine-year-old can be a beginner or ready for Python', 'By level, after a free placement lesson'],
          ['How many children per teacher?', 'Small enough that every screen gets attention', 'Batches of fifteen to twenty, or one to one'],
          ['Does the child build something real?', 'A finished project is the motivation that lasts', 'Every unit ends with a project'],
          ['Is there a path to typed code?', 'Blocks are a start, not a destination', 'Blocks, then Scratch, then Python or Luau'],
          ['How is AI handled?', 'Children meet AI tools early and need rules for them', 'Taught as a topic, with age-appropriate tools only'],
          ['Can you try before paying?', 'A first lesson shows more than any brochure', 'Yes, the first lesson is free and needs no card']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Live beats recorded for under-tens', p: 'A six-year-old who drags the wrong block gives up in minutes on a video course. A live teacher spots the mistake on screen and turns it into the next step.' },
          { h3: 'Level beats age', p: 'Two Orlando third graders can be years apart in reading and patience. Placement by level keeps the quick one busy and the careful one confident.' },
          { h3: 'Projects beat points', p: 'Badges fade. A game a child can show their grandparents, or a chart of their own city, is what brings them back next week.' }
        ] }
      ]
    },
    {
      id: 'orlando', tint: 'tint', eyebrow: 'Orlando in its own words',
      h2: 'Little facts about Orlando a kid can turn into code',
      intro: 'From the City of Orlando&rsquo;s own website, read on 18 October 2026. Each fact comes with a tiny programming idea.',
      body: [
        { kind: 'table', caption: 'City of Orlando facts and a coding idea for each (facts from orlando.gov; ideas are ours)', head: ['What the city says', 'A small coding idea'], rows: [
          ['Orlando&rsquo;s history dates back to 1838', 'Subtract years: how old is the story of Orlando in 2026?'],
          ['The early settlement was known as Jernigan, with a post office established May 30, 1850', 'Store a date and print it in three formats'],
          ['In 1857, the U.S. Post Office adopted the name Orlando', 'Make a timeline list and sort it'],
          ['The Town of Orlando was incorporated in 1875 with 85 inhabitants, 22 of whom were qualified voters', 'Work out a percentage, then round it'],
          ['There are four stories that are told about where the name came from', 'A quiz game that picks a random story'],
          ['As of 2026, the city&rsquo;s population is 339,999 residents', 'Compare it with 85 people in 1875'],
          ['More than 148 parks, gardens, recreation areas, neighborhood centers and playgrounds', 'A list of favourite parks, with a search box'],
          ['A trail network of over 40 miles', 'A trip planner that adds up distances'],
          ['The Lake Eola sidewalk circles the lake 0.9 miles in length', 'How many laps make a 5K? Loop and count'],
          ['Swan Boats run Tuesday to Sunday and are closed on Mondays', 'An if statement: can we ride today?'],
          ['GreenUp Orlando was created in 1985 to increase the tree canopy', 'Draw a tree with turtle graphics, then a forest']
        ] },
        { kind: 'p', text: 'This is how we like to start with young children: with something they already know. A child who has walked around Lake Eola understands 0.9 miles in a way no textbook number can match. Asking how many laps make five kilometres needs a loop, a counter and a stopping rule, which are three of the most important ideas in programming, wrapped inside a question about a place they have been.' }
      ]
    },
    {
      id: 'florida', tint: '', eyebrow: 'Florida schools',
      h2: 'What Florida says young children should get',
      intro: 'Our plain-English reading of section 1007.2616 of the Florida Statutes, as published by the Florida Legislature and checked on 18 October 2026.',
      body: [
        { kind: 'p', text: 'Florida law defines computer science as &ldquo;the study of computers and algorithmic processes&rdquo;, including how hardware and software are designed, how they are used and how they affect society, and it says coding and programming are part of it. For younger children the statute is permissive rather than strict: school opportunities may include coding instruction in elementary school and middle school, and elementary and middle schools may set up digital classrooms where students practise skills such as coding and working with images. Firm course requirements start in middle and high school. Further up the ladder, fewer than half of Florida high schools had a foundational course in 2023 to 2024: 463 of 1,192, according to Code.org (2025), 2025 State of AI + CS Education. For an Orlando parent of an eight-year-old, that means early coding at school is possible but not guaranteed, which is where an outside class helps.' },
        { kind: 'callout', h3: 'A note on sources', p: 'The Florida Department of Education site refused our request on 18 October 2026, so we quote the statute itself. Ask your child&rsquo;s school what it offers in the elementary grades.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How did Orlando grow? A decade-by-decade histogram',
      intro: 'The City of Orlando publishes a record of every annexation, each time the city took in new land, with the year it happened. Children count them by decade and draw the bars themselves.',
      body: [
        { kind: 'table', caption: 'Orlando annexation records by decade (our count of the city&rsquo;s Orlando Annexations dataset, downloaded 18 October 2026)', head: ['Decade', 'Annexation records', 'Text bar, one # per 10 records'], rows: [
          ['1950s', '83', '########'],
          ['1960s', '168', '################'],
          ['1970s', '178', '#################'],
          ['1980s', '114', '###########'],
          ['1990s', '112', '###########'],
          ['2000s', '229', '######################'],
          ['2010s', '80', '########'],
          ['2020s, so far', '48', '####']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the rows', p: 'The dataset holds 1,012 records from 1950 to 2026. A child loads the year column and checks the first and last years before doing anything else, because checking the edges is how good programmers start.' },
          { h3: '2. Make the bins', p: 'Integer division does the magic: year // 10 * 10 turns 1973 into 1970 and 2002 into 2000. A dictionary then counts how many records land in each decade.' },
          { h3: '3. Draw the bars', p: 'Printing one # for every ten records gives the text histogram above. Older children redraw it with matplotlib and compare: does the picture tell the same story as the numbers?' }
        ] },
        { kind: 'p', text: 'The busiest single years in the file are 1973, with 55 records, and 2002, with 48. The 2000s bin is the tallest, at 229. Then comes the question we always ask: does the shortest bar mean Orlando stopped growing in the 2020s? No. That decade has only run from 2020 to 2026, so its bin is unfinished. Spotting an incomplete bin is a grown-up data skill, and nine-year-olds get it once they see it.' },
        { kind: 'callout', h3: 'Our counts, not official statistics', p: 'These are our counts of records in one download, not the city&rsquo;s official history of its growth. One annexation record can be a tiny lot or a large tract, so more records does not always mean more land, and 78 of the records before 1970 list zero acres, which most likely means the size was not recorded. The City of Orlando states no licence on this dataset; we link to it and quote counts only.' },
        { kind: 'p', text: 'That zero is a lesson for older kids too. If they add up the acres column, the early decades will look tiny, not because Orlando grew slowly but because the information is missing. A child who learns to ask whether zero means none or unknown has learned something many adults never do.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Eastern Time classes after school or at the weekend',
      intro: 'Orlando is on Eastern Time, and our teachers are in India, where clocks never change, so the gap shifts twice a year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Pick what suits your family', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'India time for parents', p: 'While Orlando is on daylight time, India time is 9 hours 30 minutes ahead. After the clocks fall back on November 1, 2026 it is 10 hours 30 minutes ahead, until March 14, 2027.' },
          { h3: 'A reminder before each change', p: 'Families get their class time restated in Eastern Time before the switch, so a slot after school in College Park or Lake Nona stays put.' }
        ] },
        { kind: 'spec', title: 'A clock puzzle for kids', p: 'Orlando sits in the America/New_York zone of the IANA time zone database. Older children write a tiny program that answers: if class starts at 5 p.m. in Orlando, what time is it for the teacher? Then they test it in March and in November.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From dragging blocks to typing Python',
    intro: 'Grades are rough guides. The free lesson finds the right first rung.',
    cols: [
      { band: 'Grades K to 2', h3: 'Blocks and puzzles', p: 'Sequences, loops and simple events, with short stories that move.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 2 to 4', h3: 'Games in Scratch and Minecraft', p: 'Variables, scores and conditions, in worlds children already enjoy.', courses: ['scratch-programming-complete-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 4 to 6', h3: 'Real code', p: 'Luau in Roblox or Python on its own, plus the annexation histogram.', courses: ['roblox-game-coding-for-kids-lua-course', 'python-ai-kids-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'AI and the web', p: 'Simple web pages, AI literacy and first projects with AI helpers.', courses: ['kids-ai-web-development-course', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should an Orlando child learn to code if AI can do it?',
    intro: 'Yes, for the same reason children still learn arithmetic after calculators.',
    p1: 'A child who asks an AI to draw the annexation histogram will get a picture. They will not know that the last bar is unfinished, or that the zeros in the acres column mean missing information. A child who wrote the twelve lines of Python that make the bars will notice both, because they saw every number go in.',
    p2: 'So we teach AI as part of coding, not instead of it. Children learn what an AI tool is, which ones are meant for their age, and how to check what it says. The tools come after the thinking, never before it.',
    closer: 'The aim for a young Orlando coder is simple: build things, ask questions, and never take a confident answer on trust.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Lake Nona to College Park, one classroom',
    intro: 'Orlando afternoons are busy enough without a drive across town to a coding club.',
    cells: [
      { h3: 'A class at the kitchen table', p: 'Two children on opposite sides of Orange County can share one lesson, each at home, with a parent nearby.' },
      { h3: 'Pitched at US grades', p: 'Teachers plan around US grade levels and the school year, and keep anything a child does for school their own work.' },
      { h3: 'Try it free', p: 'The first lesson is a full class with a teacher and a task, then a recommendation for level, course and time.' },
      { h3: 'Batches by stage', p: 'Fifteen to twenty children at the same level, from Orlando and around the US.' },
      { h3: 'Or one to one', p: 'A teacher of their own for a child who wants to go faster, or who learns better with full attention.' },
      { h3: 'Times in Eastern Time', p: 'Slots set in Eastern Time, on weekdays or weekends.' }
    ],
    spec: { title: 'Online, not a local center', p: 'Lessons are live and online, taught from India. There is no Modern Age Coders center in Orlando and we do not claim one. A child needs a laptop or desktop, sound and a steady internet connection; tablets work for some early blocks lessons only.' }
  },

  fees: {
    h2: 'Fees for Orlando families',
    intro: 'What a parent pays, in US dollars.',
    first: 'A free first class, with a teacher, a task and a suggested next step.',
    group: 'A month of live lessons in a batch of fifteen to twenty children at the same level.',
    private: 'A month of lessons, one teacher with one child.',
    closer: 'One rate applies across the US in US dollars, so Winter Park and Kissimmee families pay the same. No charge is made until after the free class, and holidays and missed lessons are covered on our pricing page.'
  },

  reviewsH2: 'Parents on Google, unedited',

  book: {
    h2: 'Book a free coding class for your Orlando child',
    intro: 'Tell us your child&rsquo;s grade and favourite game or hobby. A first grader might make a cat dance, a fourth grader might start a Roblox obby, and a sixth grader might draw the Orlando histogram.',
    success: 'Thank you. We will be in touch soon about a class for your Orlando child.'
  },

  faq: {
    h2: 'Orlando kids coding questions',
    intro: 'What Orlando parents ask us most.',
    items: [
      { q: 'What makes a coding class good for a young child?', a: 'A live teacher in every lesson, placement by level rather than age, a small group or one to one, and real projects. A free first lesson lets you check all four.' },
      { q: 'What age can my child start coding?', a: 'We teach children from about age 6. Younger ones start with blocks and puzzles; by around third or fourth grade many are ready for Scratch games or Roblox.' },
      { q: 'Are the classes in person in Orlando?', a: 'No. All classes are live and online, taught from India. There is no Orlando center, so children join from home.' },
      { q: 'What time are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always confirmed in Eastern Time.' },
      { q: 'What happens when the clocks change?', a: 'Your class keeps its Orlando time. Our teachers adjust, because India has no daylight saving, and we message the confirmed Eastern Time ahead of November 1, 2026 and again ahead of March 14, 2027.' },
      { q: 'What is the Orlando histogram project?', a: 'Children count the city\'s 1,012 annexation records by decade and draw a bar for each. In our 18 October 2026 count, the 2000s were the busiest decade with 229 records.' },
      { q: 'Do Florida elementary schools teach coding?', a: 'Florida Statutes section 1007.2616 says school opportunities may include coding in elementary and middle school, with firm course requirements from middle school. Ask your school what it offers.' },
      { q: 'Can my child learn about AI safely?', a: 'Yes. Our AI literacy course explains how AI works and where it goes wrong, and only uses tools suitable for the child\'s age. Children never need an adult-only account.' },
      { q: 'Will my child need a tablet or a computer?', a: 'A laptop or desktop works for every course. Some early blocks lessons run on a tablet, but typed code and Roblox Studio need a computer.' },
      { q: 'How do I find the prices?', a: 'Look for the fees panel just above the booking form: a no-cost first class, then a monthly group price and a monthly private price, shown in US dollars and payable only after that first class.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Orlando kids and families',
    html: 'Young game makers can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or look at <a class="cg-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes for kids</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> lists every US page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Orlando and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
    { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
    { href: '/coding-and-ai-classes-in-florida', label: 'Florida' }
  ],

  personalityCss: `
.cg-root.cg-bko .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bko .cg-hero h1 { font-weight: 780; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-bko .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-bko .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bko .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-bko .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.9rem); }
.cg-root.cg-bko .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bko .cg-table td { font-variant-numeric: tabular-nums; white-space: normal; }
.cg-root.cg-bko .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bko .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Florida, read 18 October 2026: Florida Statutes s. 1007.2616 on Online Sunshine (definition of computer science; coding instruction may be included in elementary and middle school; elementary and middle schools may establish digital classrooms). Code.org (2025) State of AI + CS Education raw sheet, Most Recent Access Data FL 2023-2024, 463 of 1,192. FLDOE returned 403. IANA America/New_York and the US DST rule.',
    localProject: 'City of Orlando "Orlando Annexations" (data.cityoforlando.net jg52-dz4p, no licence stated), downloaded 18 October 2026: 1,012 records, 1950 to 2026; our counts by decade 83, 168, 178, 114, 112, 229, 80, 48 (2020s partial); top years 1973 (55) and 2002 (48); 78 of 251 pre-1970 records list 0 acres. Lesson family: binning by decade into a histogram, and incomplete bins.',
    requiredMentions: [
      '1,012',
      'The 2000s bin is the tallest, at 229',
      'year // 10 * 10',
      '85 inhabitants, 22 of whom were qualified voters',
      'May 30, 1850',
      '339,999',
      'More than 148 parks',
      '0.9 miles',
      'GreenUp Orlando was created in 1985',
      '1973, with 55 records',
      'Lake Eola sidewalk'
    ],
    sources: [
      { claim: 'City of Orlando open data: Orlando Annexations dataset.', url: 'https://data.cityoforlando.net/resource/jg52-dz4p.json' },
      { claim: 'City of Orlando: Orlando History.', url: 'https://www.orlando.gov/Our-Government/News-and-Information/History' },
      { claim: 'City of Orlando: Parks & the Environment, and Lake Eola Park.', url: 'https://www.orlando.gov/Parks-the-Environment' },
      { claim: 'Florida Statutes s. 1007.2616, Computer science and technology instruction.', url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1007/Sections/1007.2616.html' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Florida access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'FLDOE guidance: fldoe.org returned 403 on 18 October 2026, not retried.',
      'A licence for the annexations dataset: none is stated, so the page links the source and quotes counts only.',
      'Land area added per decade: not printed, because early records list 0 acres where the size was not recorded.',
      'The Seminole Wars and fort history on the city page: not used (conflict content).',
      'The Lake Eola "Top 5" ranking: a third-party award, not repeated.',
      'Any affiliation with the City of Orlando, Orange County, Code.org or the College Board.'
    ]
  }
};
