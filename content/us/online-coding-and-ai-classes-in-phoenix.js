'use strict';
// Phoenix (cg- metro page, US cluster Phase 5, row 130). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a Phoenix family learning online deals with the one US metro whose clock never changes, so the page is
// built around time (Arizona has no daylight saving) and around the city's own parks data. Sources read raw on
// 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-phoenix/):
//  - City of Phoenix Parks and Recreation (phoenix.gov/administration/departments/parks.html): "more than 41,000 acres
//    of desert parks and mountain preserve land with more than 200 miles of trails, 187 parks, 33 community and
//    recreation centers, eight golf courses, and 29 pools"; "Encanto Park boasts 222-acres of lush oasis".
//  - City of Phoenix, Phoenix Public Library (phoenix.gov/administration/departments/library.html): "a system of 16
//    branch libraries, Burton Barr Central Library and a Bookmobile"; "nearly 2 million books, DVDs, CDs and video games".
//  - City of Phoenix open data, Parks Boundaries (phoenixopendata.com package parks-boundaries, licence "Creative Commons
//    Attribution"; ArcGIS item 3402e15ce47f4758963e1324c6907580 licenseInfo: subject to the City's Terms of Use;
//    service maps.phoenix.gov/pub/rest/services/Public/ParksOpenData/MapServer/10), attributes downloaded
//    17 October 2026: returnCountOnly 254; PROPERTY_TYPE Flatland Park 188, Non-Park 29, Specialty Area 19, Natural Area
//    17, blank 1; PARK_TYPE Neighborhood 86, Community 49, Pocket 28, Undeveloped Site 26, Regional 16, Mountain Preserve
//    15, Golf Course 6, Linear 5. Amenity columns (21 plus TRAILHEADS) take Yes, No, Unknown or blank. Yes counts:
//    PLAYGROUND 162, GRILL_PICNIC_AREA 162, DRINKING_FOUNTAINS 160, SHADE_STRUCTURES 146, BASKETBALL_COURTS 119,
//    RESTROOMS 101, SWIMMING_POOL 29, RECREATION_COMMUNITY_CENTER 33, TRAILHEADS 17, SPLASH_PADS 14, DOG_PARKS 12.
//    Our calculations: 48 records blank in all 21 amenity columns; amenity score (count of Yes across 22 columns)
//    highest 15 (Pecos Park, Encanto Park, Desert West Park, Aguila Park); 44 records score 0. Our cross-check: 29 pool
//    records and 33 centre records match the parks page; 6 Golf Course records against "eight golf courses" do not.
//  - Arizona Revised Statutes 15-701.01 (azleg.gov): "the governing board may approve a rigorous computer science course
//    that would fulfill a mathematics course required for graduation from high school", only if it "includes significant
//    mathematics content" and the school has "sufficient capacity, infrastructure and qualified staff".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Access tabs only: AZ 2023-2024, 278 of 643 high schools
//    (43.2%), source State Education Agency; 38% (2019-20), 36% (2020-21), no value for 2021-22, 2022-23 or 2024-25.
//  - IANA tzdb northamerica: "Arizona observed DST in 1967, but Arizona Laws 1968, ch. 183 (effective 1968-03-21)
//    repealed DST"; Zone America/Phoenix ends "-7:00 - MST". US rule: back 1 November 2026, forward 14 March 2027.
// Not used: azed.gov (Arizona Department of Education) returned 403 on every URL tried, so nothing is quoted from it.
// Lesson family: wide yes/no tables, counting across columns, and why a blank is not a No.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'PHOENIX', label: 'Phoenix', blurb: 'Live online coding and AI for Phoenix students, on a clock that never changes, with a city parks data project.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-phoenix',
  code: 'aip',
  accent: '#9E3454',
  accentRationale: 'Phoenix: a muted desert-bloom rose, #9E3454, as allocated in alloc.tsv for row 130, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Phoenix',
    eyebrow: 'Phoenix, Arizona',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Arizona' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Phoenix',
  title: 'Online Coding and AI Classes in Phoenix | Live, Ages 6 Up',
  description: 'Online coding and AI classes for Phoenix students, taught live: Arizona time with no clock change, the state CS rules, and a Python project on Phoenix parks data.',
  ogDescription: 'Live online coding and AI classes for Phoenix families: why Arizona time makes scheduling simple, what state law says about CS, and a parks data project.',
  twitterDescription: 'Phoenix coding and AI classes, live online, planned on Arizona time all year.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Phoenix Students',
    description: 'Small-group and one-to-one online classes in Scratch, Python, data science, AI and AP Computer Science for Phoenix students from elementary school to college, taught live in English.'
  },

  h1: 'Online coding and AI classes in Phoenix',
  capsuleQ: 'How do live online coding classes work for a family in Phoenix?',
  capsule: 'Modern Age Coders teaches coding and AI live online to Phoenix students from age 6, in level-matched batches or one to one. Arizona keeps Mountain Standard Time all year, so a Phoenix class time never shifts with daylight saving: India stays 12 hours 30 minutes ahead in every month. Courses run from Scratch and Python to machine learning and AP Computer Science.',
  lead: 'Most American families who learn with a teacher overseas have to recheck their class time twice a year. Phoenix families do not. Arizona repealed daylight saving in 1968, and the time zone database that every phone and laptop relies on still records Phoenix as plain Mountain Standard Time. That small fact shapes how we plan classes here, and it also makes a good first programming lesson. This page covers the Arizona rule that lets computer science count toward graduation, the figures published on how many Arizona high schools offer it, a data project built on the City of Phoenix parks inventory, and the courses a Phoenix student can take with us, from a first block game in second grade to AP Computer Science A.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Phoenix.',

  picks: {
    eyebrow: 'Course picks for Phoenix',
    h2: 'Four starting points for Phoenix students',
    intro: 'Pick by age and ambition; the free first lesson settles the exact level.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python with friendly projects, then simple AI ideas a child can test and explain.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Real tables, real questions: the Phoenix parks project below is the kind of work this course does every week.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning from first principles, with models trained, measured and questioned by the student.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java, the AP CS A free-response style and timed practice, alongside a school schedule.' }
    ]
  },

  sections: [
    {
      id: 'clock', tint: '', eyebrow: 'Arizona time',
      h2: 'The only big US metro where class time never moves',
      intro: 'What the IANA time zone database says about Phoenix, and what it means for a weekly class with a teacher in India.',
      body: [
        { kind: 'table', caption: 'Phoenix against India and two other US zones, 2026 to 2027 (our arithmetic from the IANA tzdb rules)', head: ['Period', 'Phoenix', 'India is ahead of Phoenix by', 'New York is ahead of Phoenix by'], rows: [
          ['Until October 31, 2026', 'MST, UTC minus 7', '12 hours 30 minutes', '3 hours'],
          ['November 1, 2026 to March 13, 2027', 'MST, UTC minus 7', '12 hours 30 minutes', '2 hours'],
          ['From March 14, 2027', 'MST, UTC minus 7', '12 hours 30 minutes', '3 hours']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why Phoenix stands still', p: 'The tzdb notes that Arizona observed daylight saving in 1967, then Arizona Laws 1968, ch. 183, effective March 21, 1968, repealed it. The America/Phoenix entry has ended in plain MST ever since.' },
          { h3: 'Who moves around you', p: 'In summer Phoenix shares the clock of Los Angeles; in winter it shares the clock of Denver. Relatives and school friends in other states drift an hour relative to Phoenix each spring and fall.' },
          { h3: 'What that means for class', p: 'India also keeps one time all year, so the gap between a Phoenix student and the teacher is fixed. A class confirmed for a Tuesday evening in October is still at the same Phoenix time in January.' }
        ] },
        { kind: 'p', text: 'A worked conversion, ours, not a published timetable: a lesson at 7:00 in the evening in Phoenix begins at 7:30 the next morning in India, in July and in December alike. The same lesson for a cousin in New York would sit at 10:00 in the evening in summer and 9:00 in winter. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
        { kind: 'spec', title: 'The clock as a coding exercise', p: 'Students who write a reminder script learn the difference between a fixed offset and a named zone. Storing UTC minus 7 happens to work for Phoenix, which is exactly why it is dangerous: the same code copied for a friend in Tucson works, and for a friend in Albuquerque breaks on November 1, 2026. Using America/Phoenix by name is the habit that survives.' }
      ]
    },
    {
      id: 'arizona', tint: 'deep', eyebrow: 'Arizona rules',
      h2: 'Where computer science fits in an Arizona diploma',
      intro: 'Arizona has no stand-alone computer science graduation requirement. State law instead lets a district count a demanding CS course as one of the required math courses.',
      body: [
        { kind: 'p', text: 'Arizona Revised Statutes 15-701.01 says the governing board may approve a rigorous computer science course that would fulfill a mathematics course required for graduation from high school. There are conditions: the course must include significant mathematics content, and the board must find that the school has sufficient capacity, infrastructure and qualified staff, including competent teachers of computer science. For an Arizona ninth grader, then, the useful question is whether the district runs a CS course approved to stand in for a math credit, and whether that swap suits the student&rsquo;s plans.' },
        { kind: 'table', mt: true, caption: 'Arizona high schools offering foundational computer science (Code.org, 2025, State of AI + CS Education, Access tabs)', head: ['School year', 'Share of Arizona high schools', 'Note'], rows: [
          ['2019 to 2020', '38%', 'As published'],
          ['2020 to 2021', '36%', 'As published'],
          ['2023 to 2024', '43.2%, 278 of 643 high schools', 'Most recent year in the data; source listed as the State Education Agency']
        ] },
        { kind: 'p', text: 'The data sheet has no Arizona value for 2021 to 2022, 2022 to 2023 or 2024 to 2025, so we do not fill the gap or draw a trend line through it. Read plainly, the published figures say that in 2023 to 2024 fewer than half of Arizona high schools offered a foundational computer science course. Suggested citation: Code.org (2025). 2025 State of AI + CS Education. We quote the Arizona values only and do not republish the dataset. We tried the Arizona Department of Education site for its standards pages and it refused automated requests, so nothing on this page is quoted from it.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'How many Phoenix parks have a splash pad? Ask the data, then check it',
      intro: 'The City of Phoenix publishes a Parks Boundaries layer on its open data portal under a Creative Commons Attribution licence. Each park row carries more than twenty yes-or-no amenity columns, which makes it a perfect first lesson in counting across a wide table.',
      body: [
        { kind: 'table', caption: 'Phoenix park records marked Yes for selected amenities (our counts from the city&rsquo;s Parks Boundaries data, downloaded 17 October 2026; 254 records in all)', head: ['Amenity column', 'Records marked Yes'], rows: [
          ['PLAYGROUND', '162'],
          ['GRILL_PICNIC_AREA', '162'],
          ['DRINKING_FOUNTAINS', '160'],
          ['SHADE_STRUCTURES', '146'],
          ['BASKETBALL_COURTS', '119'],
          ['RESTROOMS', '101'],
          ['RECREATION_COMMUNITY_CENTER', '33'],
          ['SWIMMING_POOL', '29'],
          ['TRAILHEADS', '17'],
          ['SPLASH_PADS', '14'],
          ['DOG_PARKS', '12']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the rows', p: 'A request with returnCountOnly told us the layer held 254 records on download day. They are not all parks: PROPERTY_TYPE splits them into 188 Flatland Park, 29 Non-Park, 19 Specialty Area and 17 Natural Area records, with one left blank.' },
          { h3: '2. Score each park', p: 'Students loop over the amenity columns and count how many say Yes, an amenity score. The top score in our run was 15 of 22, shared by Pecos Park, Encanto Park, Desert West Park and Aguila Park.' },
          { h3: '3. Read the blanks', p: 'Here is the trap. Most cells are not Yes or No but empty: 48 records are blank in all 21 amenity columns. Empty means nobody recorded it, not that the park lacks it, so a score of 0 is a statement about the data, not the park.' }
        ] },
        { kind: 'callout', h3: 'Check the data against the city&rsquo;s own words', p: 'The parks department page lists 29 pools and 33 community and recreation centers, and our counts of the SWIMMING_POOL and RECREATION_COMMUNITY_CENTER columns land on exactly 29 and 33. The same page says eight golf courses, yet only 6 records carry the Golf Course park type. A student who notices that, and asks whether the other two sit under another type, is doing real data work.' },
        { kind: 'p', text: 'Every number in this section is ours, computed from one download of the city&rsquo;s layer on 17 October 2026; the City of Phoenix publishes the data subject to its terms of use and may update it at any time. The Python involved is small: a csv.DictReader or a pandas DataFrame, a list of column names, and a sum of True values per row. The thinking is larger: deciding what to do with Unknown, which appears in a handful of cells, and writing one honest sentence about what the result does and does not show.' },
        { kind: 'p', text: 'Younger students do a lighter version: pick three amenities they care about, filter for parks that have all three, and then look the winners up on the city map. Older students go on to join the park points to the separate Playgrounds and Splash Pads layers in the same service and test whether the flags and the facility layers agree.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Learning around Phoenix',
      h2: 'What the city already offers, and where live classes add to it',
      intro: 'Facts from the City of Phoenix&rsquo;s own pages, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Phoenix public facilities, as the city describes them', head: ['What', 'City of Phoenix figure'], rows: [
          ['Desert parks and mountain preserve land', 'More than 41,000 acres'],
          ['Trails', 'More than 200 miles'],
          ['Parks', '187'],
          ['Community and recreation centers', '33'],
          ['Public pools', '29'],
          ['Golf courses', 'Eight'],
          ['Encanto Park', '222 acres'],
          ['Phoenix Public Library', '16 branch libraries, Burton Barr Central Library and a Bookmobile'],
          ['Library collection', 'Nearly 2 million books, DVDs, CDs and video games']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The library first', p: 'A library card and a branch with free computers is a fine start for a curious child. We often suggest families use the library for reading and research and keep our classes for guided, project-based programming.' },
          { h3: 'Parks as a data source', p: 'The 187 parks on the city page and the 254 records in the open data layer are both correct; they count different things. Learning to explain that difference is a computer science skill, not just a civic one.' },
          { h3: 'No travel across the valley', p: 'From Laveen to Desert Ridge, a class from home avoids a long evening drive. A laptop, a headset and a steady connection are all a student needs.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first block game to machine learning',
    intro: 'Ages and grades are a guide; the teacher sets the level after the free lesson.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Blocks and stories', p: 'Sequences, loops and events in a visual editor, finished as games a child can show the family.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 9 to 12', h3: 'Typed code arrives', p: 'Python with turtle drawings, small games and first data lists, at a pace that keeps the fun.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 7 to 10', h3: 'Data and the web', p: 'Tables, charts and web pages: the Phoenix parks project, then a site that shows its results.', courses: ['data-science-course-for-teens-python-data', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 10 to 12', h3: 'AP and AI', p: 'AP Computer Science A in Java, and machine learning models built and tested from scratch.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have caught the golf course gap?',
    intro: 'Probably not unless the student asked, which is the point of learning to code first.',
    p1: 'Ask a chatbot to count splash pads in a CSV and it will return a number in seconds. It will not, on its own, notice that blanks outnumber the Yes values, or that six golf course rows sit beside a city page that says eight. Those observations come from a student who has built the count and knows where each number came from.',
    p2: 'So our AI classes use assistants the way a careful analyst does: to draft code faster, never to decide what the result means. Teens learn to read the code an assistant produces, run it on a small sample they can check by hand, and write down what the output can honestly claim.',
    closer: 'A Phoenix student who can explain why 187 parks and 254 records are both true is ready to use AI tools without being fooled by them.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live classroom for the whole Valley',
    intro: 'Classes reach Phoenix homes the same way whichever part of the city you live in.',
    cells: [
      { h3: 'Home, not a center', p: 'A student in Ahwatukee and one in Maryvale can sit in the same small class, each at their own desk, with no drive in the evening heat.' },
      { h3: 'Planned on Arizona time', p: 'Every time we confirm is written in Phoenix time, and because Arizona does not change its clocks, it stays put through November and March.' },
      { h3: 'Free first lesson', p: 'A short real task with a teacher, then a suggested level, course and slot. No card is asked for at this step.' },
      { h3: 'Groups sorted by stage', p: 'A group holds fifteen to twenty learners who tested at a similar point, drawn from Arizona and further afield, so the pace suits everyone in the room.' },
      { h3: 'Or one teacher to one student', p: 'Private lessons for students who want speed, a specific project, or AP Computer Science A practice.' },
      { h3: 'Flexible days', p: 'Weekdays or weekends, flexible, with each slot agreed in Phoenix time before the course begins.' }
    ],
    spec: { title: 'Online only, said plainly', p: 'All teaching is live and online from India. Modern Age Coders has no office or classroom in Phoenix or anywhere in Arizona, and claims none. We are not connected with the City of Phoenix, the Phoenix Public Library or the Arizona Department of Education.' }
  },

  fees: {
    h2: 'Fees for Phoenix families',
    intro: 'Three lines, all in US dollars.',
    first: 'The first full lesson is free and ends with a recommended level, course and Phoenix class time.',
    group: 'One month of classes in a level-matched batch of fifteen to twenty students.',
    private: 'One month on the same rhythm with a teacher to yourself.',
    closer: 'Every family outside India pays the same US dollar rate, whether in central Phoenix or out in Buckeye. Nothing is billed before the free lesson, and the pricing page covers holidays and rescheduling.'
  },

  reviewsH2: 'Families writing about their classes on Google',

  book: {
    h2: 'Tell us about your Phoenix student',
    intro: 'We shape the first lesson around the learner: a block game for a second grader, a first Python loop for a sixth grader, or the parks amenity count for a high schooler.',
    success: 'Thank you. The team will contact you soon to arrange a class for Phoenix.'
  },

  faq: {
    h2: 'Phoenix coding and AI questions',
    intro: 'The questions Phoenix parents and students ask us most.',
    items: [
      { q: 'Does my Phoenix class time change when daylight saving starts or ends?', a: 'No. Arizona does not observe daylight saving, so a class time agreed in Phoenix time stays the same all year, and India remains 12 hours 30 minutes ahead.' },
      { q: 'Why is the time difference with New York different in winter?', a: 'New York moves its clocks and Phoenix does not. From November 1, 2026 to March 13, 2027 New York is 2 hours ahead of Phoenix; the rest of the year it is 3 hours ahead.' },
      { q: 'Does Arizona make every student take computer science?', a: 'Arizona has no separate CS graduation requirement. Under A.R.S. 15-701.01 a governing board may approve a rigorous computer science course to fulfill one required mathematics course.' },
      { q: 'What share of Arizona high schools teach CS?', a: 'Code.org (2025) counts 278 of 643 Arizona high schools, or 43.2%, offering foundational computer science in 2023 to 2024, the latest Arizona year in its data.' },
      { q: 'What is the Phoenix parks data project?', a: 'Students download the City of Phoenix Parks Boundaries layer, count amenities across its yes-or-no columns, and learn why a blank cell is not the same as a No.' },
      { q: 'What age can my child start?', a: 'From age 6 with visual block coding. Typed Python usually starts around 9 or 10, and the free lesson tells us which level fits.' },
      { q: 'What time are classes for Phoenix families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Phoenix time.' },
      { q: 'Can your classes count for Arizona school credit?', a: 'No. Credit comes from courses your district approves. What we teach sits beside the district course as extra practice and projects; homework a school grades is done by the student alone.' },
      { q: 'Is there a Modern Age Coders location in Phoenix?', a: 'No. Every class is live online from India, so all a student needs is a computer, a headset and a reliable internet connection.' },
      { q: 'Where are the prices listed?', a: 'Scroll to the fees block above the booking form: it lists the free trial lesson, a month in a group and a month of private teaching, in US dollars, and nothing is charged until after the trial.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Phoenix and US students',
    html: 'High schoolers aiming for AP can read <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and builders can look at the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>. For a national view, start at <a class="cg-inline-link" href="/coding-classes-in-united-states">coding classes across the United States</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Phoenix and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/coding-and-ai-classes-in-arizona', label: 'Arizona' }
  ],

  personalityCss: `
.cg-root.cg-aip .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-aip .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-aip .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aip .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aip .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-aip .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-aip .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-aip .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aip .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-aip .cg-spec { border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Arizona, read raw on 17 and 18 October 2026: A.R.S. 15-701.01 (a governing board may approve a rigorous CS course to fulfill a required mathematics course, with significant mathematics content and sufficient capacity, infrastructure and qualified staff); Code.org (2025) State of AI + CS Education raw sheet, Access tabs (AZ 2023-2024, 278 of 643, 43.2%; 38% 2019-20, 36% 2020-21); IANA tzdb America/Phoenix (Arizona Laws 1968, ch. 183, effective 1968-03-21, repealed DST; MST since). azed.gov returned 403, not used.',
    localProject: 'City of Phoenix Parks Boundaries open data (phoenixopendata.com, Creative Commons Attribution, subject to the City Terms of Use), downloaded 17 October 2026: 254 records (Flatland Park 188, Non-Park 29, Specialty Area 19, Natural Area 17); Yes counts PLAYGROUND 162, SHADE_STRUCTURES 146, SWIMMING_POOL 29, RECREATION_COMMUNITY_CENTER 33, SPLASH_PADS 14; our amenity score top 15 of 22; 48 records blank in all 21 amenity columns; cross-check against the parks page (29 pools and 33 centers match; 6 Golf Course records against eight). Lesson family: wide yes/no tables and blanks that are not No.',
    requiredMentions: [
      'Arizona Laws 1968, ch. 183',
      'Arizona keeps Mountain Standard Time all year',
      'Revised Statutes 15-701.01',
      'Pecos Park, Encanto Park, Desert West Park and Aguila Park',
      '254 records',
      '48 records are blank in all 21 amenity columns',
      'More than 41,000 acres',
      '16 branch libraries, Burton Barr Central Library and a Bookmobile',
      '222 acres',
      'Nearly 2 million books, DVDs, CDs and video games',
      'only 6 records carry the Golf Course park type'
    ],
    sources: [
      { claim: 'City of Phoenix Parks and Recreation: acres, trails, 187 parks, 33 centers, eight golf courses, 29 pools, Encanto Park 222 acres.', url: 'https://www.phoenix.gov/administration/departments/parks.html' },
      { claim: 'City of Phoenix, Phoenix Public Library: 16 branches, Burton Barr Central Library, Bookmobile, collection size.', url: 'https://www.phoenix.gov/administration/departments/library.html' },
      { claim: 'City of Phoenix open data: Parks Boundaries dataset and licence.', url: 'https://www.phoenixopendata.com/dataset/parks-boundaries' },
      { claim: 'City of Phoenix Parks Boundaries map service layer.', url: 'https://maps.phoenix.gov/pub/rest/services/Public/ParksOpenData/MapServer/10' },
      { claim: 'Arizona Revised Statutes 15-701.01: computer science course may fulfill a mathematics graduation course.', url: 'https://www.azleg.gov/ars/15/00701-01.htm' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Arizona access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: Arizona DST repeal and America/Phoenix.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Arizona Department of Education standards and guidance: azed.gov returned 403 to every request, not retried; nothing quoted.',
      'Code.org rural, suburban, gender and race figures for Arizona: not used.',
      'Navajo Nation daylight saving detail from the tzdb comments: not needed for Phoenix, left out.',
      'Official park counts beyond the parks page: the page prints our counts of the layer, labelled as ours.',
      'That our classes earn Arizona graduation credit: refused; only district-approved courses do.',
      'Any affiliation with the City of Phoenix, Phoenix Public Library, the Arizona Department of Education, Code.org or the College Board.'
    ]
  }
};
