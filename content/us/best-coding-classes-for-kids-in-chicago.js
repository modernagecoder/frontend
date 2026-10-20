'use strict';
// Chicago (cg- metro page, US cluster Phase 5, row 123). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: what to look for in a coding class for a Chicago child, shown through a group-by project on the CTA 'L' stop
// list from the City of Chicago Data Portal. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-chicago/):
//  - City of Chicago Data Portal, "CTA - System Information - List of 'L' Stops" (8pix-ypme), attribution Chicago Transit
//    Authority, rows updated 19 November 2025: "location and basic service availability information for each place on
//    the CTA system where a train stops"; columns stop_id, station_name, map_id and one true/false column per line.
//    OUR group-by on 18 October 2026: 302 stop records; 144 distinct map_id stations; 108 distinct station names;
//    stations per line (a station counts for a line if any of its stops is flagged): Red 33, Blue 33, Green 31, Brown 27,
//    Purple 26, Pink 22, Orange 16, Yellow 3, total 191; 122 stations on one line, 22 on two or more; Clark/Lake on six;
//    stop records per line Red 66, Blue 66; direction_id N 104, S 104, E 47, W 47.
//  - City of Chicago, Data Terms of Use: data "as is", no warranty; derivative uses include the disclaimer "This site
//    provides applications using data that has been modified for use from its original source, www.cityofchicago.org ...".
//  - City of Chicago, Facts and Statistics page: 50 wards, 77 community areas, 100 neighborhoods; 600 parks, 500
//    playgrounds, 29 beaches, 26 miles of open lakefront (Source: Park District); 303 miles of bike lanes, 13,000+ bike
//    racks (Source: DPD).
//  - City of Chicago Data Portal, Libraries - Locations (x8fc-8rcq): 82 records.
//  - isbe.net and ilga.gov did not resolve on 18 October 2026 (DNS failure, retried twice): no Illinois rule printed.
//  - Code.org (2025), State of AI + CS Education, Most Recent Access Data: IL 2023-2024, 418 of 721 (58.0%), source
//    "State Education Agency". Access tab only.
//  - IANA tzdb northamerica: America/Chicago (the zone is named for the city), US DST rule.
// Lesson family: group-by and counting with overlapping groups (by ID, by name, by line).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'CHICAGO', label: 'Chicago', blurb: 'Live online coding for Chicago kids, with a group-by project on the CTA L stop list.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-chicago',
  code: 'bek',
  accent: '#61270F',
  accentRationale: 'Chicago: a dark muted brick #61270F from the allocation table, contrast 10.97 on the paper and 9.44 on the deepest tint',
  pageType: 'city',
  audience: 'kids',
  place: {
    name: 'Chicago',
    eyebrow: 'Chicago, Illinois',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Illinois' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Chicago',
  title: 'Best Coding Classes for Kids in Chicago | Live Online',
  description: 'How to spot the best coding classes for Chicago kids, and a project to prove it: grouping the CTA L stop list by line in Python. Live online, from age 6.',
  ogDescription: 'Which L line stops at the most stations? Chicago kids answer it in Python from the city data portal, live online with a teacher. Scratch to Python, age 6 up.',
  twitterDescription: 'Coding for Chicago kids, live online, with a CTA L data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Chicago Kids',
    description: 'Blocks, Scratch, Python, game design and early AI for Chicago children aged 6 to 14, taught live online in level-matched batches or one to one.'
  },

  h1: 'Best coding classes for kids in Chicago',
  capsuleQ: 'What do the best coding classes for Chicago kids have in common?',
  capsule: 'A live teacher, a level chosen after a real first lesson, and projects a child finishes and can explain. Modern Age Coders teaches Chicago kids online from age 6, in groups of fifteen to twenty matched by level or privately, from Scratch to Python, with projects like grouping the CTA L stop list by line.',
  lead: 'Chicago parents have plenty of options for coding: park district programs, library makerspaces, summer camps and online courses. The hard part is knowing which ones teach a child to think. This page gives you a short test for any class, then shows a project we use with Chicago kids built on the city&rsquo;s own data portal: which L line stops at the most stations? The answer is less obvious than it looks, and finding out why is the lesson. Further down: Central Time scheduling and our fees.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Chicago.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Where a Chicago child usually begins',
    intro: 'These are first suggestions by age. A free trial lesson tells us where your child really fits.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Colourful blocks that make characters move and talk, with a teacher asking what each block will do.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 8 to 11', note: 'Complete Scratch games with scores, timers and levels, built and debugged by the child.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real typed Python, lists and counting, leading to small data projects such as the L stop list.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 8 to 12', note: 'Coding inside Minecraft for children who learn best through a game they already love.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: '', eyebrow: 'A test for any class',
      h2: 'Five things to ask before you sign up',
      intro: 'Whether it is a park program, a camp or us, these questions sort a strong coding class from a weak one quickly.',
      body: [
        { kind: 'table', caption: 'Our five-question test for a child&rsquo;s coding class', head: ['Question', 'What you want to hear'], rows: [
          ['Does a teacher look at my child&rsquo;s actual code?', 'Yes, during the class, and the child explains it back'],
          ['How do you decide the level?', 'From a real first task, not from age or grade alone'],
          ['What will my child have made after a month?', 'A specific project you can see working'],
          ['How many children per teacher, and at what level?', 'A clear number, with children grouped by stage'],
          ['What comes next?', 'A follow-on course that builds on the same skills']
        ] },
        { kind: 'p', text: 'We use the same test on ourselves. Our batches are fifteen to twenty children at one level, or one child with one teacher; every project is the child&rsquo;s own; and each course leads to a next one, so a seven-year-old in Scratch has a route to Python by middle school. Cost belongs at the end of the list, once you know what you are paying for.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For the youngest', p: 'Six- and seven-year-olds need short tasks, lots of talking and a teacher who is patient with mouse skills. Typing comes later.' },
          { h3: 'For the middle years', p: 'Children of eight to eleven can hold a multi-week Scratch project in their heads and start to plan before they build.' },
          { h3: 'For older kids', p: 'From about eleven, typed Python opens up data projects like the one below, and game projects in Python or Roblox.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which L line stops at the most stations?',
      intro: 'The City of Chicago Data Portal publishes the CTA&rsquo;s list of L stops, with a true or false column for each line. We downloaded it on 18 October 2026 and grouped it, the way a ten- or eleven-year-old does in class.',
      body: [
        { kind: 'table', caption: 'Stations per L line (our group-by on the CTA List of L Stops, downloaded 18 October 2026; a station counts if any of its stops serves the line)', head: ['Line', 'Stations'], rows: [
          ['Red', '33'],
          ['Blue', '33'],
          ['Green', '31'],
          ['Brown', '27'],
          ['Purple', '26'],
          ['Pink', '22'],
          ['Orange', '16'],
          ['Yellow', '3']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Stops or stations?', p: 'The file has 302 rows, but a row is a stop, often one platform direction. Grouping by the map_id column gives 144 stations. Children who count rows instead get Red and Blue at 66 each, double the real figure.' },
          { h3: 'IDs or names?', p: 'There are only 108 different station names, because names repeat on different lines. Grouping by name merges stations that are miles apart, so the ID is the safer key.' },
          { h3: 'Why the totals disagree', p: 'Add up the line column and you get 191, not 144. That is because 22 stations serve two or more lines; Clark/Lake serves six. A station can belong to more than one group.' }
        ] },
        { kind: 'p', text: 'In Python the core is a dictionary of sets: for each stop, add its map_id to the set for every line flagged true, then print the size of each set. A younger child can do the same with a printed list and colored pencils, ticking each station once per line. Either way, the child ends with a ranking and a sentence that explains why the numbers do not add up.' },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The counts above are ours, from one download of a dataset the Chicago Transit Authority supplies to the portal. They are a teaching result, not an official station count. The city publishes its data as is, and asks that derived work include this note: &ldquo;This site provides applications using data that has been modified for use from its original source, www.cityofchicago.org, the official website of the City of Chicago. The City of Chicago makes no claims as to the content, accuracy, timeliness, or completeness of any of the data provided at this site.&rdquo;' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Chicago in numbers',
      h2: 'What the city says about itself',
      intro: 'From the City of Chicago&rsquo;s Facts and Statistics page and data portal, read on 18 October 2026. Each one is a ready-made counting question for a child.',
      body: [
        { kind: 'table', caption: 'Official Chicago figures, with the source the city names', head: ['Figure', 'What it counts', 'Source named by the city'], rows: [
          ['50 wards', 'City Council wards', 'City of Chicago, Facts and Statistics'],
          ['77 community areas', 'Official community areas', 'City of Chicago, Facts and Statistics'],
          ['600 parks', 'Parks in the city', 'Park District'],
          ['500 playgrounds', 'Playgrounds', 'Park District'],
          ['29 beaches', 'Beaches along the lake', 'Park District'],
          ['26 miles of open lakefront', 'Lakefront length', 'Park District'],
          ['303 miles of bike lanes', 'Bike lanes', 'DPD'],
          ['82 library location records', 'Rows in the Libraries - Locations dataset (our count)', 'City of Chicago Data Portal']
        ] },
        { kind: 'p', text: 'These are the city&rsquo;s round figures, quoted as published, so they are a good contrast with the exact counts in the L project. A sharp child will ask how 600 parks and 77 community areas could be grouped together, which is the same group-by question in a new setting, and a natural second project once the data is found.' }
      ]
    },
    {
      id: 'illinois', tint: '', eyebrow: 'Illinois schools',
      h2: 'Computer science in Illinois high schools',
      intro: 'One published figure, and a note on what we could not read.',
      body: [
        { kind: 'p', text: 'Code.org&rsquo;s 2025 data reports that 418 of 721 Illinois high schools, or 58.0%, offered computer science in 2023 to 2024, with the State Education Agency as the source (Code.org (2025). 2025 State of AI + CS Education). We tried to read the Illinois State Board of Education&rsquo;s own pages on 18 October 2026 to summarize the state&rsquo;s rules, but its site did not load for us that day, so we print no state rule here rather than repeat one second hand. For other states&rsquo; requirements, see our <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a> example and the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What 58.0% means', p: 'Roughly four in ten Illinois high schools did not list a computer science course in that year. A child who starts young does not depend on which campus they end up at.' },
          { h3: 'In elementary school', p: 'Many children meet coding first through short units or clubs. Our classes give them a steady weekly habit on top.' },
          { h3: 'Later on', p: 'High schoolers can move on to AP Computer Science Principles or A with us, alongside or instead of a school course.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Chicago is the name of its own time zone',
      intro: 'In the IANA time zone database, Central Time is stored as America/Chicago, so every Central city borrows Chicago&rsquo;s name.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Times to suit you', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Our teachers in India', p: 'India time is 10 hours 30 minutes ahead of Chicago in summer and 11 hours 30 minutes ahead in winter, because India never changes its clocks.' },
          { h3: 'Switch dates', p: 'Chicago goes back to standard time on November 1, 2026 and returns to daylight time on March 14, 2027. Class times are confirmed in Central Time.' }
        ] },
        { kind: 'spec', title: 'For curious kids', p: 'Ask an older child to find America/Chicago in a Python time zone list and count how many other US states share it. Discovering that a zone name is a key in a database, not just a place, is a small but real programming idea.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to Python projects',
    intro: 'A common route for Chicago kids; the free lesson sets where yours starts.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences and events through animated stories.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 8 to 10', h3: 'Scratch', p: 'Full games with variables, scores and levels.', courses: ['scratch-programming-complete-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 10 to 12', h3: 'Python', p: 'Typed code, lists and dictionaries, data counting like the L project.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 12 to 14', h3: 'Bigger builds', p: 'Longer games and first web pages, ready for middle school electives.', courses: ['game-development-masterclass-for-kids', 'roblox-game-coding-for-kids-lua-course'] }
    ]
  },

  ai: {
    eyebrow: 'Kids and AI',
    h2: 'If AI can answer questions, why should a Chicago kid learn to count in code?',
    intro: 'Because the L project has a trap that a quick answer falls into.',
    p1: 'Ask a chatbot how many stations the Red Line has and you may get a number with no way to check it. A child who grouped the CTA file knows the answer depends on whether you count stops or stations, and by ID or by name. That child can judge any answer, including one from AI.',
    p2: 'Coding shows children that a machine follows instructions to the letter, which makes them careful about what they ask and what they accept. It is the foundation for using AI well when they are older and the tools allow it.',
    closer: 'We keep young children on code and data first, and introduce AI tools only within each provider&rsquo;s own age limits.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Rogers Park to Hyde Park, one live class',
    intro: 'Chicago winters make an evening trip across the city hard work. An online class needs only a warm room and a computer.',
    cells: [
      { h3: 'No travel in January', p: 'A child joins from home, so snow, traffic and the L schedule never cancel a lesson.' },
      { h3: 'Fits the school year', p: 'Teachers plan around US grades and the school calendar; homework and school projects remain the child&rsquo;s own.' },
      { h3: 'Try it free', p: 'One full lesson with a teacher and a real task, then a suggested course and time. No card needed.' },
      { h3: 'Level-matched groups', p: 'Batches of fifteen to twenty children at one stage, from Chicago and other US cities.' },
      { h3: 'Private lessons', p: 'One teacher for one child, for shy beginners or children who want to move fast.' },
      { h3: 'Central Time always', p: 'Weekdays or weekends, chosen by you, confirmed in Central Time.' }
    ],
    spec: { title: 'Online only', p: 'Modern Age Coders has no Chicago location and claims none. Classes are taught live online from India and need a laptop or desktop with sound; a tablet can work for the youngest.' }
  },

  fees: {
    h2: 'Fees for Chicago families',
    intro: 'Three prices, nothing else.',
    first: 'A full trial lesson at no cost, with a course and level suggested afterwards.',
    group: 'A monthly fee for a batch of fifteen to twenty children at the same level.',
    private: 'A monthly fee for private lessons, one child and one teacher.',
    closer: 'Chicago families pay in US dollars, at the rate used across the country. You are billed only after the trial lesson, once course and time are agreed; the pricing page sets out what happens on holidays and missed days.'
  },

  reviewsH2: 'What families have written about us',

  book: {
    h2: 'Book a free trial lesson',
    intro: 'Tell us your child&rsquo;s age and interests: a first block story for a six-year-old, a Scratch game for a nine-year-old, or the L stop project for an eleven-year-old.',
    success: 'Thank you. We will contact you shortly about a trial lesson for your child in Chicago.'
  },

  faq: {
    h2: 'Chicago parents&rsquo; questions',
    intro: 'Plain answers to what we are asked most.',
    items: [
      { q: 'How young can my Chicago child start?', a: 'Age 6. Young children use blocks and talk through each step; typed Python usually starts around 10 or 11.' },
      { q: 'What should I look for in a kids coding class?', a: 'A teacher who reads your child\'s code, a starting point chosen after a genuine first task, a project your child finishes, a clear group size, and a next course to move on to.' },
      { q: 'What is the CTA L project?', a: 'Children download the List of L Stops from the City of Chicago Data Portal and group it by line, learning why 302 stop rows become 144 stations and why the line totals add up to more than that.' },
      { q: 'Are the station counts official?', a: 'No. They are our own counts from a download on 18 October 2026. The city provides its data as is and makes no claims about its completeness.' },
      { q: 'Do Illinois high schools offer computer science?', a: 'Code.org reports 418 of 721 Illinois high schools offering it in 2023 to 2024. We could not read the state board\'s site on 18 October 2026, so we do not summarize the state rules.' },
      { q: 'How many children are in a group?', a: 'Fifteen to twenty at the same level. If you prefer, your child can have a private teacher instead.' },
      { q: 'When are Chicago classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Central Time.' },
      { q: 'Does daylight saving move the class?', a: 'No, the Chicago time stays the same. The changes on November 1, 2026 and March 14, 2027 shift India time, and we handle that on our side.' },
      { q: 'Is there a Chicago classroom?', a: 'No. We teach live online from India only, so your child learns from home.' },
      { q: 'How do I find the prices?', a: 'They are in the fees block on this page: a trial lesson at no charge, and two monthly choices, group or private. Payment begins after the trial.' }
    ]
  },

  next: {
    eyebrow: 'More to explore',
    h2: 'Further reading for Chicago parents',
    html: 'Younger children can try <a class="cg-inline-link" href="/ai-literacy-for-elementary-students">AI literacy for elementary students</a> or <a class="cg-inline-link" href="/scratch-not-working-help">Scratch help</a>. Game lovers can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>, and parents can check <a class="cg-inline-link" href="/coding-milestones-by-age">coding milestones by age</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chicago and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
    { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
    { href: '/python-games-for-kids', label: 'Python games' },
    { href: '/coding-classes-in-illinois', label: 'Illinois' }
  ],

  personalityCss: `
.cg-root.cg-bek .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-bek .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bek .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-bek .cg-table th { font-weight: 700; letter-spacing: 0.04em; }
.cg-root.cg-bek .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bek .cg-grid-3 { gap: clamp(0.8rem, 2.2vw, 1.6rem); }
.cg-root.cg-bek .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Illinois, 18 October 2026: isbe.net and ilga.gov did not resolve (DNS, retried twice), so no state rule is printed; Code.org (2025) State of AI + CS Education, Most Recent Access Data: IL 2023-2024, 418 of 721 (58.0%), State Education Agency; IANA America/Chicago and the US DST rule.',
    localProject: 'City of Chicago Data Portal, CTA List of L Stops (8pix-ypme), downloaded 18 October 2026: 302 stop records, 144 map_id stations, 108 distinct names; our stations per line Red 33, Blue 33, Green 31, Brown 27, Purple 26, Pink 22, Orange 16, Yellow 3 (total 191); 22 stations on two or more lines; Clark/Lake on six. Terms: as is, derivative-use disclaimer quoted. Lesson family: group-by with overlapping groups.',
    requiredMentions: [
      '302 rows',
      '144 stations',
      '108 different station names',
      'Clark/Lake serves six',
      '77 community areas',
      '26 miles of open lakefront',
      '303 miles of bike lanes',
      '82 library location records',
    ],
    sources: [
      { claim: 'City of Chicago Data Portal: CTA List of L Stops, used for the group-by.', url: 'https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme' },
      { claim: 'City of Chicago: Data Terms of Use and derivative-use disclaimer.', url: 'https://www.chicago.gov/city/en/narr/foia/data_disclaimer.html' },
      { claim: 'City of Chicago: Facts and Statistics (wards, community areas, parks, beaches, lakefront, bike lanes).', url: 'https://www.chicago.gov/city/en/about/facts.html' },
      { claim: 'City of Chicago Data Portal: Libraries - Locations, Contact Information, and Usual Hours.', url: 'https://data.cityofchicago.org/resource/x8fc-8rcq.json' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Illinois access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Chicago and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Illinois computer science rules: isbe.net and ilga.gov did not resolve on 18 October 2026, so nothing is printed second hand.',
      'Chicago population figure on the facts page: not used (no census-style figures).',
      'An official count of L stations: not read; only our counts, labelled as ours.',
      'Names of schools or of individuals: none printed.',
      'Any affiliation with the City of Chicago, the CTA, the Park District or Code.org.'
    ]
  }
};
