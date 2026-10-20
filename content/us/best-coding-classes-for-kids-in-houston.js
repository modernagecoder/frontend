'use strict';
// Houston (cg- metro page, US cluster Phase 5, row 120). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: what a good coding class for a Houston child looks like, proved with a histogram of the city's own park
// sizes. Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-houston/
// and src/_shared-metros/tx/):
//  - City of Houston, Houston Parks and Recreation Department (HPARD), About Us: "HPARD stewards and manages over 380
//    developed parks, 172 greenspaces, and more than 25,000 acres of parkland and greenspace"; nationally accredited
//    through the NRPA Commission for Accreditation of Park and Recreation Agencies; "In 2023, HPARD and partners
//    revitalized 30 neighborhood parks, with a second campaign underway to enhance 25 more".
//  - City of Houston, City Council: "Sixteen Council Members, along with the Mayor and City Controller, are elected every
//    four years"; two terms of four years; "Five Council Members are elected At-Large ... the other eleven are elected to
//    geographic districts"; districts listed District A to District K.
//  - COHGIS, Houston Parks feature service (COH_Parks_view, layer 14), licence text: "COHGIS data is in the public domain
//    and may be copied without permission", with a no-warranty statement. Attributes downloaded 18 October 2026: 380
//    records; County Harris 378, Fort Bend 2; Park_Type Neighborhood Park 167, blank 30, Pocket Park 22; AcreSource GIS
//    Value 367, Survey 7, Parcel 4, Deed 2. OUR histogram of Park_Acres: under 1: 91; 1 to 5: 106; 5 to 10: 72; 10 to 25:
//    59; 25 to 50: 27; 50 to 100: 6; 100 to 500: 13; 500 and over: 6. Our median 4.75 acres; largest record 10,488.7.
//  - TEA, Technology Applications page: revised K-8 TEKS given final approval in 2022, implemented from 2024 to 2025
//    (19 TAC Chapter 126); TEKS Guide 101 webinars for grades K-2, 3-5 and 6-8 in August 2026. Legacy /coding-classes-in-texas
//    already covers the strands and the language-credit rule, so neither is repeated here.
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data tab: TX 2023-2024, 1,036 of 2,160 high
//    schools offering CS, source "State Education Agency and School Catalogs". Access tab only.
//  - IANA tzdb northamerica (src/_shared-tz): America/Chicago; US rule Sun>=8 March, Sun>=1 November.
// Lesson family: histograms and skewed distributions (why equal-width bins hide most of the data).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'HOUSTON', label: 'Houston', blurb: 'Live online coding for Houston kids, with a park-size histogram built on City of Houston GIS data.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-houston',
  code: 'bes',
  accent: '#365880',
  accentRationale: 'Houston: a muted bayou-water blue #365880 from the allocation table, contrast 6.92 on the paper and 5.95 on the deepest tint',
  pageType: 'city',
  place: {
    name: 'Houston',
    eyebrow: 'Houston, Texas',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Texas' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-texas', name: 'Texas' }],
  nav: [
    { label: 'Texas', href: '/coding-classes-in-texas' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Houston',
  title: 'Best Coding Classes for Kids in Houston | Live Online',
  description: 'What the best coding classes for Houston kids should give a child: a live teacher, real projects and a Python histogram built on the city\'s own park data.',
  ogDescription: 'How to judge a coding class for a Houston child, with a project that turns 380 City of Houston park records into a histogram. Live online, ages 6 and up.',
  twitterDescription: 'Coding classes for Houston kids, live online, with a park-data histogram.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Houston Kids',
    description: 'Scratch, Python, game building and early AI for Houston children from kindergarten to middle school, taught live online in small level-matched batches or one to one.'
  },

  h1: 'Best coding classes for kids in Houston',
  capsuleQ: 'What makes the best coding class for a Houston child?',
  capsule: 'A live teacher who checks your child\'s own code, a level set by a real first lesson, and finished projects rather than videos. Modern Age Coders teaches Houston kids from age 6 online, in level-matched groups of fifteen to twenty children or with a private teacher, from Scratch to Python, with projects such as a histogram of the city\'s 380 park records.',
  lead: 'Search for coding classes in Houston and you get a long list of camps, centers and apps, and very little help choosing between them. This page is our answer to that problem. It sets out what to look for in any class, shows the kind of project a child should finish, and builds one in full on a dataset the City of Houston publishes about its own parks. You will also find the short version of what Texas now expects schools to teach in technology applications, the Central Time arithmetic for class times, and what our classes cost.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Houston.',

  picks: {
    eyebrow: 'Where Houston kids start',
    h2: 'Four starting points, chosen by age',
    intro: 'Ages below are a starting guess; the trial lesson settles where your child actually begins.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Drag-and-drop blocks that turn into animations and simple games, with a teacher asking the child to explain each step.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 8 to 11', note: 'Full Scratch projects with scoring, levels and variables, the bridge between play and real programming.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed code in Python, then small data and AI projects such as the Houston parks histogram below.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 9 to 13', note: 'Games designed, coded and tested by the child, with the debugging habits that make later courses easier.' }
    ]
  },

  sections: [
    {
      id: 'judge', tint: '', eyebrow: 'How to choose',
      h2: 'Six questions that separate a strong class from a weak one',
      intro: 'Use these with any provider in Houston, including us. A good class answers every one of them without hesitation.',
      body: [
        { kind: 'table', caption: 'A checklist for judging a coding class for a child (our criteria)', head: ['Ask this', 'A strong answer', 'A warning sign'], rows: [
          ['Who reads my child\'s code?', 'A named teacher looks at the actual program in every class', 'Videos with a quiz at the end, and no person checking'],
          ['How is the level set?', 'A trial lesson with a real task, then a recommendation', 'Placement by age alone'],
          ['What does my child finish?', 'A game, an app or a data project they can show and explain', 'Badges, streaks and certificates without a working program'],
          ['How big is the group?', 'A stated number, with children at the same stage', 'No number given, or mixed levels in one room'],
          ['What happens when they get stuck?', 'The teacher asks questions until the child finds the bug', 'The answer is typed in for them'],
          ['Is there a path after this?', 'A next course that builds on the last one', 'One short camp and nothing after it']
        ] },
        { kind: 'p', text: 'We wrote this table from what we watch go right and wrong in first lessons. Price matters, but it is the last question, not the first: a cheap class that never reads a child&rsquo;s code is expensive in lost months. In our classes the batch is fifteen to twenty children at the same level, or one child with one teacher, and every project is the student&rsquo;s own.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ages 6 to 8', p: 'Short sessions, blocks rather than typing, and lots of talking. The goal is a child who can say what their program will do before they press go.' },
          { h3: 'Ages 9 to 11', p: 'Bigger Scratch builds, the first variables and loops that count, and an early look at typed Python for children who are ready.' },
          { h3: 'Ages 12 and up', p: 'Typed code as the default: Python, JavaScript, or Luau for Roblox, with data and game projects that take several weeks.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How big is a Houston park? A histogram from city data',
      intro: 'The City of Houston&rsquo;s GIS office (COHGIS) publishes a map layer of city parks. We downloaded its attribute table on 18 October 2026 and sorted the park sizes into bins, the way a child would in a first data project.',
      body: [
        { kind: 'table', caption: 'Houston park records by Park_Acres, in bins we chose (our calculation from the COHGIS Houston Parks layer, downloaded 18 October 2026)', head: ['Size band', 'Park records'], rows: [
          ['Under 1 acre', '91'],
          ['1 to under 5 acres', '106'],
          ['5 to under 10 acres', '72'],
          ['10 to under 25 acres', '59'],
          ['25 to under 50 acres', '27'],
          ['50 to under 100 acres', '6'],
          ['100 to under 500 acres', '13'],
          ['500 acres and over', '6']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count first', p: 'The layer held 380 park records on download day: 378 in Harris County and 2 in Fort Bend. A child checks that number before drawing anything, because a chart of the wrong rows is worse than no chart.' },
          { h3: '2. Try equal bins', p: 'With bins of 1,000 acres, almost every Houston park lands in the first bar and the chart says nothing. The largest single record, listed at 10,488.7 acres, stretches the axis so far that the small parks vanish.' },
          { h3: '3. Choose better bins', p: 'Bins that widen as they go (1, 5, 10, 25, 50, 100, 500) show the real shape: most parks are small, a few are enormous. Our median is about 4.75 acres, far below the average a big park drags upward.' }
        ] },
        { kind: 'callout', h3: 'The answer is ours, not the city&rsquo;s', p: 'These bins and the median are our own calculation from one download. Most acreage values carry the source label GIS Value (367 records), with a handful from a survey, a parcel or a deed, and the city states that COHGIS data is for general reference and comes with no warranty. A child who learns to write that sentence under a chart has learned something most adults skip.' },
        { kind: 'p', text: 'A second question uses the Park_Type column: 167 records are labelled Neighborhood Park, 22 Pocket Park, and 30 have no type at all. Counting the blanks before charting the rest is the habit we want. The first version of this project takes one or two classes in Python for a ten- or eleven-year-old; younger children do the same counting with sticky notes and a Scratch bar chart.' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Houston facts we used',
      h2: 'The numbers behind the project, from the city&rsquo;s own pages',
      intro: 'Official City of Houston figures, read on 18 October 2026, set beside what the data layer shows.',
      body: [
        { kind: 'table', caption: 'What the City of Houston publishes about its parks and its council', head: ['Topic', 'What the city says'], rows: [
          ['Developed parks', 'HPARD stewards and manages over 380 developed parks'],
          ['Greenspaces', '172 greenspaces, in addition to the developed parks'],
          ['Total parkland', 'more than 25,000 acres of parkland and greenspace'],
          ['Recent work', 'In 2023, HPARD and partners revitalized 30 neighborhood parks, with 25 more in a second campaign'],
          ['Accreditation', 'Nationally accredited through the NRPA Commission for Accreditation of Park and Recreation Agencies'],
          ['City Council', 'Sixteen Council Members, with the Mayor and City Controller, elected every four years'],
          ['Council seats', 'Five elected At-Large and eleven by district, from District A to District K']
        ] },
        { kind: 'p', text: 'Notice that the data layer&rsquo;s 380 records sit right beside the department&rsquo;s &ldquo;over 380 developed parks&rdquo;, while the 172 greenspaces may be counted elsewhere. Matching a dataset to the official description of it is a real research skill, and it is the kind of check we ask children to make out loud.' }
      ]
    },
    {
      id: 'texas', tint: '', eyebrow: 'What Texas schools teach',
      h2: 'Where school technology lessons stand in Texas',
      intro: 'One paragraph on the state picture; our Texas page covers it in depth.',
      body: [
        { kind: 'p', text: 'The Texas Education Agency (TEA) says the State Board of Education gave final approval in 2022 to revised technology applications standards for kindergarten through grade 8, implemented from the 2024 to 2025 school year and set out grade by grade in 19 TAC Chapter 126. In August 2026 TEA ran its TEKS Guide 101 webinars for teachers, split into grades K to 2, 3 to 5 and 6 to 8. For the full picture, including how computer science counts toward graduation, read our <a class="cg-inline-link" href="/coding-classes-in-texas">coding classes in Texas</a> page.' },
        { kind: 'table', mt: true, caption: 'Texas high schools offering computer science (Code.org, 2025, State of AI + CS Education)', head: ['Measure', 'Texas', 'Source as published'], rows: [
          ['High schools offering CS, 2023 to 2024', '1,036 of 2,160 (48.0%)', 'State Education Agency and School Catalogs']
        ] },
        { kind: 'p', text: 'So in 2023 to 2024 fewer than half of Texas high schools offered a computer science course, by Code.org&rsquo;s count. A Houston child who starts coding in elementary school arrives in high school with years of practice, whatever their campus timetable holds. Suggested citation: Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Fitting class around a Houston school day',
      intro: 'Houston keeps Central Time, listed in the IANA time zone database as America/Chicago. Our teachers work from India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Your choice of slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The gap to India', p: 'India time runs 10 hours 30 minutes ahead of Central Daylight Time and 11 hours 30 minutes ahead of Central Standard Time, since India keeps one clock all year.' },
          { h3: 'This winter&rsquo;s change', p: 'Houston clocks go back an hour on November 1, 2026 and ahead an hour on March 14, 2027. We confirm every class time in Central Time so nobody has to do the sum.' }
        ] },
        { kind: 'spec', title: 'A puzzle for older kids', p: 'Ask a twelve-year-old to work out what time an 8 a.m. India class lands in Houston on October 31 and again on November 2, 2026. Getting two different answers, and explaining why, is a first lesson in why programmers store time zones by name.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to real Python',
    intro: 'A typical route for a Houston child; the starting rung comes from the free lesson.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and stories', p: 'Sequences, events and simple loops, told as stories the child animates.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 8 to 10', h3: 'Scratch with purpose', p: 'Games with scores and levels, and early logic puzzles.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Typed code', p: 'Python basics, data counting like the park project, and Roblox scripting for game fans.', courses: ['python-ai-kids-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Ages 12 to 14', h3: 'Bigger builds', p: 'Multi-week games and web pages, ready for a middle school elective.', courses: ['game-development-masterclass-for-kids', 'javascript-course-for-teens-beginners-interactive-web'] }
    ]
  },

  ai: {
    eyebrow: 'Kids and AI',
    h2: 'Should a Houston child learn to code if AI can write programs?',
    intro: 'Yes, and the park histogram shows why in one picture.',
    p1: 'Ask an AI tool for a chart of Houston park sizes and it will happily draw the first, useless version with equal bins, one tall bar and a long empty tail. It will not notice that 30 parks have no type, or that the biggest record is a lease. A child who has built the chart by hand spots both in seconds.',
    p2: 'That is the skill coding teaches young children: checking. They learn that a computer does exactly what it is told, so every result needs a reason. With that habit in place, AI tools become something a child can question later rather than something they simply believe.',
    closer: 'We teach the checking first, with blocks and then Python, and bring in AI tools only when a child is old enough to use them under the provider&rsquo;s own age rules.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'How classes run',
    h2: 'From Katy to Kingwood, the same live class',
    intro: 'Houston traffic makes a cross-town class a commitment. An online one starts at the kitchen table.',
    cells: [
      { h3: 'No drive across town', p: 'A child logs in from home, so a weekday class does not cost an hour on the freeway after school.' },
      { h3: 'Grades your school uses', p: 'Teachers think in US grade levels and the Texas school calendar, and keep school assignments the child&rsquo;s own work.' },
      { h3: 'A free first lesson', p: 'Your child completes a real task with a teacher; you get a suggested level, course and time, and no card is asked for.' },
      { h3: 'Small level-matched batches', p: 'A group of fifteen to twenty young coders working at one level, some in Houston and some elsewhere in the US.' },
      { h3: 'One to one if you prefer', p: 'A single teacher for a single child, useful for shy beginners and fast movers alike.' },
      { h3: 'Times in Central Time', p: 'Weekdays or weekends, as you choose, always confirmed in Central Time.' }
    ],
    spec: { title: 'Online only', p: 'We have no building in Houston and do not claim one. Classes are live on a laptop or desktop with sound; a tablet works for the youngest block coders.' }
  },

  fees: {
    h2: 'Fees for Houston families',
    intro: 'The whole price list, in three lines.',
    first: 'One complete trial lesson at no cost, with a level and course suggested at the end.',
    group: 'A monthly fee for a batch of fifteen to twenty children at the same stage.',
    private: 'A monthly fee for one child with one teacher, at times you pick.',
    closer: 'Houston families pay one national rate in US dollars. Nothing is charged until after the free lesson and your agreement on course and time, and holiday weeks and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Parents and students in their own words',

  book: {
    h2: 'Book a free first lesson for your child',
    intro: 'Tell us your child&rsquo;s age and what they enjoy, a first Scratch animation for a six-year-old or the parks histogram for an eleven-year-old, and we set the task to match.',
    success: 'Thank you. We will be in touch shortly about a first lesson for your child in Houston.'
  },

  faq: {
    h2: 'Questions Houston parents ask',
    intro: 'Short answers, with the sources named where it matters.',
    items: [
      { q: 'What age can a Houston child start coding with you?', a: 'From age 6. The youngest start with drag-and-drop blocks and lots of talking; typed Python usually begins around age 10, depending on reading and typing.' },
      { q: 'How do I judge whether a coding class is any good?', a: 'Ask who reads your child\'s code, how the level is set, what your child will finish, how large the group is, and what happens when they get stuck. A strong class has a clear answer to each.' },
      { q: 'How many children are in a batch?', a: 'Fifteen to twenty children at the same level, or one to one if you prefer a teacher for your child alone.' },
      { q: 'What is the Houston parks project?', a: 'Children download the COHGIS Houston Parks layer, count its 380 records and turn the park sizes into a histogram, then explain why equal-width bins hide most of the parks.' },
      { q: 'Are the park numbers on this page official?', a: 'No. The bins and the median are our own calculation from a download on 18 October 2026. The official figures, such as over 380 developed parks, come from the Houston Parks and Recreation Department.' },
      { q: 'What do Texas schools teach about technology?', a: 'TEA says revised technology applications standards for kindergarten to grade 8 were approved in 2022 and implemented from the 2024 to 2025 school year. Our Texas page covers the high school rules.' },
      { q: 'When are classes for Houston families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Central Time.' },
      { q: 'Will daylight saving change my child\'s class time?', a: 'The Houston time stays as agreed. The US switch dates are November 1, 2026 and March 14, 2027, and we confirm the Central Time slot around each change.' },
      { q: 'Do you have a center in Houston?', a: 'No. Every class is live and online, taught from India, so you only need a computer, sound and a steady connection at home.' },
      { q: 'Where do I see the fees?', a: 'Near the bottom of this page: one trial lesson that costs nothing, then a monthly group fee or a monthly private fee. You are not charged before the trial.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More for Houston kids and parents',
    html: 'Game fans can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or <a class="cg-inline-link" href="/python-games-for-kids">Python games for kids</a>. Parents comparing stages can see <a class="cg-inline-link" href="/coding-classes-for-elementary-students">coding for elementary students</a> and <a class="cg-inline-link" href="/coding-milestones-by-age">coding milestones by age</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Houston, Texas and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-texas', label: 'Texas' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
    { href: '/video-game-coding-classes-for-kids', label: 'Video game coding' }
  ],

  personalityCss: `
.cg-root.cg-bes .cg-hero h1 { font-weight: 720; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-bes .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bes .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-bes .cg-table th { text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.78rem; }
.cg-root.cg-bes .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bes .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-bes .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Texas, read raw on 18 October 2026: TEA Technology Applications page (K-8 TEKS final approval 2022, implemented 2024-25, 19 TAC Chapter 126; TEKS Guide 101 webinars August 2026 for K-2, 3-5, 6-8); Code.org (2025) State of AI + CS Education, Most Recent Access Data: TX 2023-2024, 1,036 of 2,160, State Education Agency and School Catalogs; IANA America/Chicago and the US DST rule.',
    localProject: 'COHGIS Houston Parks layer (public domain, no warranty), attributes downloaded 18 October 2026: 380 records (Harris 378, Fort Bend 2); our histogram of Park_Acres in widening bins (91, 106, 72, 59, 27, 6, 13, 6); our median about 4.75 acres; largest record 10,488.7; Park_Type Neighborhood Park 167, Pocket Park 22, blank 30; AcreSource GIS Value 367. Lesson family: histograms and skewed distributions.',
    requiredMentions: [
      '172 greenspaces',
      'more than 25,000 acres',
      'revitalized 30 neighborhood parks',
      'District A to District K',
      '378 in Harris County',
      '10,488.7 acres',
      '4.75 acres',
      'TEKS Guide 101',
    ],
    sources: [
      { claim: 'City of Houston, HPARD About Us: over 380 developed parks, 172 greenspaces, more than 25,000 acres, accreditation, 2023 revitalization of 30 parks.', url: 'https://www.houstontx.gov/parks/aboutus.html' },
      { claim: 'City of Houston, City Council: sixteen members, five At-Large, eleven districts A to K, four-year terms.', url: 'https://www.houstontx.gov/council/' },
      { claim: 'COHGIS Houston Parks feature service (public domain licence text) used for the histogram.', url: 'https://services.arcgis.com/NummVBqZSIJKUeVR/arcgis/rest/services/COH_Parks_view/FeatureServer/14' },
      { claim: 'TEA Technology Applications: K-8 TEKS approved 2022, implemented 2024-25, TEKS Guide 101 webinars.', url: 'https://tea.texas.gov/academics/subject-area-resources/technology-applications' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Texas high school CS access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Chicago and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Official acreage of individual parks: the page prints only our bins and median from GIS values, labelled as ours.',
      'Any count of Houston schools or school names: not needed; none printed.',
      'Census income or population figures: excluded by the brief.',
      'The Texas strands and the computer-science-as-language credit rule: covered on /coding-classes-in-texas, not repeated.',
      'That our classes meet any Texas standard or requirement: refused.',
      'Any affiliation with the City of Houston, HPARD, TEA or Code.org.'
    ]
  }
};
