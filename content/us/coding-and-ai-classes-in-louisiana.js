'use strict';
// Louisiana (cg- state page, US cluster Phase 4, row 78). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Louisiana's published computer science figures, read with care: access rising from a low base, enrollment
// falling in the latest two years, and a policy layer we could not read at source. Plus a top-N project on BREC park
// data from Baton Rouge. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-louisiana/):
//  - doe.louisiana.gov sitemap and robots returned 403 (Cloudflare) on 17 October 2026; www.louisiana.gov and
//    bese.louisiana.gov also 403 on 18 October; legis.la.gov did not resolve or connect (timeout). None retried around.
//    So this page prints no Louisiana Department of Education or legislative wording.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (codeorg-cb-extract.txt): LA access 23% (2018-19),
//    23%, 29%, 32%, 35% (2022-23), 38.8% (2023-24), 39.3% (2024-25: 144 of 366, source "State Education Agency");
//    participation 2.3% (2020-21), no 2021-22, 3.7% (2022-23), 3.37% (2023-24), 2.58% (2024-25: 5,494 of 212,772).
//  - College Board, School Report of AP Exams by State 2023-24: LA schools with AP exams 243 (2023), 251 (2024);
//    public 180 then 189, non-public 63 then 62.
//  - IANA zone.tab: America/Chicago "Central (most areas)"; Rule US 2007: November 1, 2026 and March 14, 2027.
//  - Project: Open Data BR (data.brla.gov) "BREC Park Amenities" (phg8-g77c), attribution BREC, licence "Public
//    Domain", downloaded 18 October 2026: 177 rows, 43 YES/NO amenity columns, 1 row with no park name; CLASSIFICATION
//    Neighborhood 135, Conservation 14, Community 12, Special Facility 12, Golf Course 4. Our amenity counts: GREENWOOD
//    COMMUNITY PARK 16 on three rows (Golf Course, Special Facility, Community); CITY-BROOKS COMMUNITY PARK 15; PERKINS
//    ROAD COMMUNITY PARK 15; HIGHLAND ROAD COMMUNITY PARK 14; FOREST COMMUNITY PARK 13; HOOPER ROAD PARK 13; 16 named
//    rows with no amenity; most common amenity column PLAYGOUND (sic) 114, BASKETBALL OUTDOOR 88, PAVILION 85.
// Lesson family: top-N sorting and ranking (ties and duplicate rows).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'LOUISIANA', label: 'Louisiana', blurb: 'Coding and AI for Louisiana students: the published access and enrollment figures, read carefully, with a BREC park amenities ranking project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-louisiana',
  code: 'al',
  accent: '#1D6130',
  accentRationale: 'Louisiana: #1D6130, a deep bayou green from the allocation table, darker and cooler than the North Carolina green and apart from the US blues, with strong text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Louisiana',
    eyebrow: 'Louisiana, United States',
    schemaType: 'State',
    chain: [
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Louisiana',
  title: 'Coding and AI Classes in Louisiana | Live Online',
  description: 'Live online coding and AI classes for Louisiana students: published high school CS access and enrollment figures, Central Time classes, and a Baton Rouge parks task.',
  ogDescription: 'About four in ten Louisiana high schools offer computer science, and fewer than three students in a hundred take it. The figures, read carefully, and live classes for Louisiana.',
  twitterDescription: 'Louisiana coding and AI classes, live online, with a Python ranking project on BREC parks.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Louisiana Students',
    description: 'Scratch, Python, Java, AP Computer Science and AI for Louisiana students from elementary to high school, taught live online in level-matched batches or one to one.'
  },

  h1: 'Coding and AI classes in Louisiana',
  capsuleQ: 'How many Louisiana high schools teach computer science?',
  capsule: 'Fewer than half. Code.org&rsquo;s 2025 figures put it at 144 of 366 Louisiana high schools, or 39.3%, offering computer science in 2024 to 2025, up from 23% in 2018 to 2019, while just 2.58% of high school students were enrolled. Modern Age Coders gives Louisiana students a live online route in, starting with block coding for young children and reaching AP Computer Science A for juniors.',
  lead: 'Louisiana&rsquo;s computer science story, as the published data tells it, has two halves that pull against each other. The share of high schools offering a course has risen every year since 2019 to 2020, from under a quarter to almost four in ten. The share of students actually enrolled has not followed: after reaching 3.7% in 2022 to 2023 it was lower in each of the next two years. That leaves many Louisiana teenagers in a school with no computer science course, and many more in a school that has one but where few students take it. This page sets out those numbers as Code.org and the College Board publish them, explains what we could and could not verify about state policy, and ends with a ranking project on Baton Rouge park data that teaches sorting, ties and duplicate rows.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Louisiana.',

  picks: {
    eyebrow: 'Course picks for Louisiana',
    h2: 'Four ways into coding for Louisiana students',
    intro: 'Picked by grade and goal. The free first class confirms where your student should start.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Three months from zero to finished Scratch games, with loops, events and variables explained in plain words.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from the ground up, including the BREC park ranking project from this page.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles and the Create task, useful where a school has no computer science course.' },
      { course: 'game-development-masterclass-for-kids', band: 'Grades 3 to 7', note: 'Scratch, Roblox and Minecraft game projects for younger students who learn best by building games.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'The published figures',
      h2: 'Louisiana high schools with computer science, 2018 to 2025',
      intro: 'Every value below is a Louisiana row in the Code.org 2025 data sheet. The latest count names the state education agency as its source.',
      body: [
        { kind: 'table', caption: 'Share of Louisiana high schools offering computer science (Code.org, 2025)', head: ['Year', 'Louisiana high schools with a CS course'], rows: [
          ['2018 to 2019', '23%'],
          ['2019 to 2020', '23%'],
          ['2020 to 2021', '29%'],
          ['2021 to 2022', '32%'],
          ['2022 to 2023', '35%'],
          ['2023 to 2024', '38.8%'],
          ['2024 to 2025', '39.3%: 144 of 366 high schools']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Steady growth', p: 'After a flat first two years, the share rose in every year of the series, gaining sixteen points in six years. That is consistent movement, not a single jump.' },
          { h3: 'Still a minority', p: 'At 144 of 366, more Louisiana high schools lack a computer science course than offer one. For many families the question is not which course, but whether there is one at all.' },
          { h3: 'Growth is slowing', p: 'The last step, from 38.8% to 39.3%, is the smallest rise in the series since the flat start. One year cannot show a trend, but it is worth watching.' }
        ] },
        { kind: 'callout', h3: 'Where the figures come from', p: 'Code.org (2025). 2025 State of AI + CS Education, published data sheet, Louisiana rows. We quote the values; we do not republish the dataset, and we do not use its geography, gender or race tabs.' }
      ]
    },
    {
      id: 'enrollment', tint: 'deep', eyebrow: 'Who takes it',
      h2: 'Enrollment in Louisiana computer science has fallen two years running',
      intro: 'Offering a course and filling it are different measures. Here is the second one, with the College Board AP counts alongside.',
      body: [
        { kind: 'table', caption: 'Louisiana enrollment in high school computer science and AP schools', head: ['Measure', 'Louisiana', 'Source'], rows: [
          ['Students in CS, 2020 to 2021', '2.3%', 'Code.org participation series'],
          ['Students in CS, 2021 to 2022', 'Blank in the sheet', 'Code.org participation series'],
          ['Students in CS, 2022 to 2023', '3.7%', 'Code.org participation series'],
          ['Students in CS, 2023 to 2024', '3.37%', 'Code.org participation series'],
          ['Students in CS, 2024 to 2025', '5,494 of 212,772, or 2.58%', 'Code.org latest participation tab'],
          ['Schools with AP exams, 2023', '243 (180 public, 63 non-public)', 'College Board AP schools workbook'],
          ['Schools with AP exams, 2024', '251 (189 public, 62 non-public)', 'College Board AP schools workbook']
        ] },
        { kind: 'p', text: 'Put the two series side by side and the puzzle is clear. Between 2022 to 2023 and 2024 to 2025, the share of high schools offering computer science rose from 35% to 39.3%, yet the share of students enrolled fell from 3.7% to 2.58%. More schools list a course; fewer students, proportionally, sit in one. The data does not say why. Small elective sections, scheduling clashes and students not knowing the course exists are all possible, and none is proven by these numbers.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The denominator', p: 'The 212,772 figure is the tab&rsquo;s count of Louisiana high school students, taken from a national NCES table. Treat 2.58% as an estimate, not a census.' },
          { h3: 'AP schools grew', p: 'The College Board counted 251 Louisiana schools with AP exams in 2024, eight more than in 2023, with the increase among public schools.' },
          { h3: 'A practical step', p: 'Find out from your teenager&rsquo;s high school which computing electives actually ran this year, not just which appear in the catalog. If none did, the same material can be learned outside school.' }
        ] }
      ]
    },
    {
      id: 'policy', tint: 'tint', eyebrow: 'State policy',
      h2: 'Louisiana rules on computer science: what we could not verify',
      intro: 'A state page should quote the state. On 17 and 18 October 2026 the Louisiana sources would not load for us.',
      body: [
        { kind: 'p', text: 'Three Louisiana sites, the Department of Education, the state portal and the Board of Elementary and Secondary Education, blocked our requests with a 403, and the legislature&rsquo;s statute site timed out. Our rule is simple: no workarounds, and no second-hand summaries we have not seen in the original. That is why you will find no Louisiana diploma rule, standards document or offering mandate on this page. If a website tells you one exists, a Louisiana high school counselor is the person to confirm it for your child&rsquo;s cohort.' },
        { kind: 'callout', h3: 'What our classes are', p: 'Our lessons are tuition outside school. They do not give Louisiana course credit and they do not replace a school course. They add regular practice, larger projects and a teacher who can match the pace to one student or a small group at the same level.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Baton Rouge park has the most amenities? A top-N ranking in Python',
      intro: 'Open Data BR publishes BREC&rsquo;s park list with 43 yes-or-no amenity columns. Students count the yeses per park, sort, and discover why the top of a ranking needs checking.',
      body: [
        { kind: 'table', caption: 'BREC parks ranked by our count of amenity columns marked YES (our calculation from Open Data BR, downloaded 18 October 2026)', head: ['Rank', 'Park name in the data', 'Our amenity count'], rows: [
          ['1', 'GREENWOOD COMMUNITY PARK (appears on 3 rows)', '16'],
          ['2 (tie)', 'CITY-BROOKS COMMUNITY PARK', '15'],
          ['2 (tie)', 'PERKINS ROAD COMMUNITY PARK', '15'],
          ['4', 'HIGHLAND ROAD COMMUNITY PARK', '14'],
          ['5 (tie)', 'FOREST COMMUNITY PARK', '13'],
          ['5 (tie)', 'HOOPER ROAD PARK', '13']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count per row', p: 'The file has 177 rows. For each, students count how many of the 43 amenity columns say YES, a first use of a loop over columns or a sum across a row in pandas.' },
          { h3: '2. Sort and take the top', p: 'A naive top five returns the same park three times, because Greenwood Community Park is listed once as a golf course, once as a special facility and once as a community park.' },
          { h3: '3. Handle ties honestly', p: 'After removing the repeats, two parks tie on 15 and two more on 13. Students decide how to rank ties, and learn why sports tables write 2 (tie) rather than 2 and 3.' }
        ] },
        { kind: 'spec', title: 'Messy columns are part of the lesson', p: 'One row has no park name, 16 named rows have no amenity marked at all, and the most common amenity column is spelled PLAYGOUND, with 114 YES values. Real data arrives like this; cleaning it is not a chore before the work, it is the work.' },
        { kind: 'callout', h3: 'Our ranking, public data', p: 'The counts and ranks above are ours, from one download of the BREC Park Amenities dataset, which Open Data BR publishes with a Public Domain licence and attributes to BREC. A count of amenity types is not a measure of how good a park is, and BREC has not checked our results.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Central Time across Louisiana',
      intro: 'Louisiana keeps Central Time, the IANA zone America/Chicago, and our teaching team works on India time; here is how the two line up.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer gap', p: 'While Louisiana is on daylight saving time, clocks in India read 10 hours 30 minutes later than clocks in Baton Rouge and New Orleans.' },
          { h3: 'Winter gap', p: 'From November 1, 2026 the gap becomes 11 hours 30 minutes, and it returns to 10 hours 30 minutes when US clocks move forward on March 14, 2027.' },
          { h3: 'Always in Central', p: 'Bookings and reminders are written in Central Time; a Shreveport or Lafayette family reads them exactly as they are.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first game to AP Computer Science',
    intro: 'Grade ranges are guides; the free lesson sets the real level.',
    cols: [
      { band: 'Grades K to 5', h3: 'Games and logic', p: 'Block coding, simple games and a gentle introduction to how AI tools make guesses.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Into typed code', p: 'Python with drawings and games, or Roblox game coding in Luau for students who love building worlds.', courses: ['python-ai-kids-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Grades 9 to 10', h3: 'A full course', p: 'Python or Java at depth: the sequence a Louisiana student may not find at school.', courses: ['python-complete-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science A in Java, and machine learning built on data the student can explain.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for the park with the most amenities. Will it list Greenwood three times?',
    intro: 'It might, and only someone who checks the rows will notice.',
    p1: 'An AI assistant can write a sort-and-slice in a second. Run it on the BREC file and the top three places all go to one park, because the data lists it under three classifications. The code is not wrong; the question was not specific enough, and the data was not checked. A student who has built the ranking by hand spots that at once.',
    p2: 'That is the habit a computer science course is meant to build, and in Louisiana most students are not yet getting one. Learning to code means learning to ask what each row represents and whether the answer makes sense, so that AI tools become a faster way to work rather than a source of confident mistakes.',
    closer: 'Louisiana students who learn to check a ranking, not just produce one, are ready to use AI tools on their own terms.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Shreveport to the Gulf, one live class',
    intro: 'Where a school has no computer science course, an online class brings one to the kitchen table.',
    cells: [
      { h3: 'No course at school? No problem', p: 'A student whose high school is among the majority without computer science can follow a full course with us, live, every week.' },
      { h3: 'Planned around school', p: 'Lessons follow American grade levels and bend around the Louisiana school calendar and exam weeks. Homework and tests set by the school are done by the student alone.' },
      { h3: 'Level-matched batches', p: 'Each group holds fifteen to twenty learners who placed at roughly the same point, from Louisiana and elsewhere in the country.' },
      { h3: 'One-to-one option', p: 'A teacher of their own for students chasing an AP score, building toward a contest, or simply wanting to move at their own speed.' },
      { h3: 'Times that suit you', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'A free first lesson', p: 'One full class with a teacher on a real task, then a recommended level, course and time. Nothing to pay and no card needed.' }
    ],
    spec: { title: 'Online, from India', p: 'Modern Age Coders has no office or classroom in Louisiana and claims none. All teaching is live online from India; a student needs a computer, sound and a reliable connection.' }
  },

  fees: {
    h2: 'What classes cost for Louisiana families',
    intro: 'Three options, priced below, with nothing added later.',
    first: 'A full lesson free of charge, with a suggested level, course and time at the end.',
    group: 'A month of classes in a batch of fifteen to twenty students at the same stage.',
    private: 'A month of classes with one teacher for one student.',
    closer: 'Louisiana families pay the one US rate in US dollars, the same in Monroe as in Lake Charles. Billing starts only after the free lesson and once you agree the course and time; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What families have written about us on Google',

  book: {
    h2: 'Request a free class for a Louisiana student',
    intro: 'Tell us the grade and interests. A third grader might start with a Scratch game, a seventh grader with Python, a junior with the BREC park ranking.',
    success: 'Thank you. We will contact you soon about a class for your Louisiana student.'
  },

  faq: {
    h2: 'Louisiana coding and AI questions',
    intro: 'Answers drawn from Code.org, the College Board and Open Data BR, read in October 2026.',
    items: [
      { q: 'How many Louisiana high schools offer computer science?', a: 'The Code.org 2025 data counts 144 of 366 Louisiana high schools, or 39.3%, offering computer science in 2024 to 2025.' },
      { q: 'Has computer science access grown in Louisiana?', a: 'Yes. The Code.org series rises from 23% of high schools in 2018 to 2019 to 39.3% in 2024 to 2025, increasing in every year after 2019 to 2020.' },
      { q: 'How many Louisiana students take computer science?', a: 'Code.org reports 5,494 of 212,772 high school students, or 2.58%, enrolled in 2024 to 2025, down from 3.7% in 2022 to 2023.' },
      { q: 'Is computer science required to graduate in Louisiana?', a: 'We could not verify it. The Louisiana Department of Education and legislature sites did not load for us in October 2026, so we make no claim. Your school counselor can confirm the current rule.' },
      { q: 'How many Louisiana schools give AP exams?', a: 'The College Board counts 243 Louisiana schools with AP exams in 2023 and 251 in 2024, of which 189 were public schools.' },
      { q: 'What time zone are classes in?', a: 'Central Time, the IANA zone America/Chicago. US clocks change on November 1, 2026 and March 14, 2027, and class times stay fixed in Central Time.' },
      { q: 'When can Louisiana students take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Every time is confirmed in Central Time.' },
      { q: 'Do your classes give Louisiana school credit?', a: 'No. Credit is decided by the school. Our classes add a full programming sequence alongside school, and graded school work stays the student\'s own.' },
      { q: 'What does the BREC park project teach?', a: 'Top-N ranking. In our count of the 43 amenity columns, Greenwood Community Park scores 16 but appears on three rows, and two parks tie at 15, so students learn to remove duplicates and handle ties.' },
      { q: 'Does Modern Age Coders have a center in Louisiana?', a: 'No. We have no premises in Louisiana; every class is live online from India.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Louisiana students',
    html: 'Students preparing for AP can read about <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> and <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Younger builders can start with <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>, and families comparing costs can see <a class="cg-inline-link" href="/online-coding-classes-cost">what online coding classes cost</a>. Every state starts at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Louisiana and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/online-coding-classes-cost', label: 'Online class costs' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-al .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-al .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-al .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-al .cg-eyebrow { letter-spacing: 0.12em; font-weight: 720; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-al .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-al .cg-grid-3 { gap: clamp(0.85rem, 1.9vw, 1.6rem); }
.cg-root.cg-al .cg-table caption { font-weight: 720; text-align: left; }
.cg-root.cg-al .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-al .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-al .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Louisiana, read raw 17 and 18 October 2026: doe.louisiana.gov, www.louisiana.gov and bese.louisiana.gov returned 403; legis.la.gov did not connect; none retried around; no state policy wording printed. Code.org (2025): access 23% (2018-19) to 39.3% (144 of 366, 2024-25), source State Education Agency; participation 2.3%, 3.7%, 3.37%, 2.58% (5,494 of 212,772). College Board AP schools 243 (180 public, 63 non-public) and 251 (189 public, 62 non-public). IANA America/Chicago and US DST rule.',
    localProject: 'Open Data BR BREC Park Amenities (phg8-g77c, Public Domain, attribution BREC), downloaded 18 October 2026: 177 rows, 43 amenity columns, 1 unnamed row, 16 named rows with no amenity; classifications Neighborhood 135, Conservation 14, Community 12, Special Facility 12, Golf Course 4; our counts Greenwood Community Park 16 on three rows, City-Brooks and Perkins Road 15, Highland Road 14, Forest and Hooper Road 13; PLAYGOUND 114. Lesson family: top-N sorting with ties and duplicate rows.',
    requiredMentions: [
      '144 of 366',
      '5,494 of 212,772',
      '38.8%',
      '243 (180 public, 63 non-public)',
      '251 (189 public, 62 non-public)', 
      'GREENWOOD COMMUNITY PARK',
      'PLAYGOUND',
      '43 amenity columns'],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Louisiana access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Open Data BR: BREC Park Amenities (Public Domain).', url: 'https://data.brla.gov/d/phg8-g77c' },
      { claim: 'IANA tzdb: America/Chicago and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'Louisiana Department of Education (403 on 17 October 2026, recorded, not used).', url: 'https://doe.louisiana.gov/' }
    ],
    rejectedClaims: [
      'Any Louisiana graduation requirement, CS standards or required offering: not printed; LDOE, the state portal and BESE returned 403, the legislature did not connect, none retried around.',
      'Reasons for the fall in enrollment: not claimed; the data does not say why.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'The BREC gun-free-zone and other non-amenity datasets: not used.',
      'A park quality ranking: refused; only our amenity-type counts, labelled as ours.',
      'That our classes earn Louisiana school credit: refused.',
      'Any affiliation with LDOE, BREC, the City-Parish of Baton Rouge, Code.org or the College Board.'
    ]
  }
};
