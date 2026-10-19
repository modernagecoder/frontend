'use strict';
// Alaska (cg- state page, US cluster Phase 4, row 64). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: in the largest and most spread-out state, distance is the defining fact of school life, and the published
// computer science access figure is the lowest in this batch. What do the numbers say, how far apart are Alaska
// communities really, and how does a live class cross that distance? Sources read raw on 17 and 18 October 2026
// (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-alaska/):
//  - education.alaska.gov: "Request Rejected" WAF page on home and robots.txt; akleg.gov (Alaska Administrative Code):
//    Cloudflare block; gov.alaska.gov: human verification; acpe.alaska.gov 403. Stopped for each host, nothing quoted.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): AK access 19%
//    (2018-19), 32%, 42%, 51% (2021-22), no value 2022-23 or 2023-24, 34.2% (2024-25); Most Recent Access 89 of 260,
//    2024-2025, source "School Course Catalogs and Teacher Surveys". Participation: no value in any year.
//  - College Board, School Report of AP Exams by State 2023-24: Alaska 59 schools (2023), 70 (2024); public 52, 63.
//  - IANA tzdb zone1970.tab: America/Anchorage "Alaska (most areas)", America/Juneau, America/Sitka,
//    America/Metlakatla "Alaska - Annette Island", America/Yakutat, America/Nome "Alaska (west)", America/Adak
//    "Alaska - western Aleutians". northamerica: Adak on -10 "H%sT" (Hawaii-Aleutian), the others -9 "AK%sT";
//    Metlakatla PST to 2015 Nov 1, AK time to 2018 Nov 4, PST to 2019 Jan 20, then AK time; Anchorage on -10 until
//    1983 Oct 30; comment cites the 1983 headline "Alaska's four time zones now two"; Sitka "celebrated two Sundays" in
//    1867 at the transfer from Russia.
//  - Alaska DOT&PF, Airports feature layer (AKDOT_GIS, public), downloaded 17 October 2026, count query 285; licence
//    text is a no-warranty disclaimer. Fields NAME, OWNER, STATUS, REGION, LAT_DD, LONG_DD, FAA_ID. Our results:
//    REGION Northern 118, Southcoast 87, Central 80; OWNER DOT&PF Controlled 237, Other Government 48; STATUS
//    Standard 135, SubStandard 83, Sea Plane Base 32; haversine miles (R 3,958.8) from ANC: median 396.8, 22 within
//    100, 86 beyond 500; FAI 260.3, OME 537.2, JNU 569.1, BRW 722.5, KTN 772.8, AKA 1,097.2, ADK 1,188.9 (farthest);
//    latitudes 51.88 to 71.28, longitudes -176.65 to -130.01, none east of 180.
// Lesson family: great-circle (haversine) distance between coordinates.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ALASKA', label: 'Alaska', blurb: 'Coding and AI for Alaska students under seven tz zone names, with a great-circle distance project on the state\'s 285 airports.' },
  market: US,
  slug: 'coding-and-ai-classes-in-alaska',
  code: 'aia',
  accent: '#994A45',
  accentRationale: 'Alaska: #994A45, a muted fireweed red-brown, allocated in alloc.tsv row 64 and distinct from the other US accents; clears 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Alaska',
    eyebrow: 'Alaska, United States',
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
  routeLabel: 'Alaska',
  title: 'Coding and AI Classes in Alaska | Live Online, Any Town',
  description: 'Live online coding and AI classes for Alaska students in any town: published CS access figures, Alaska time zones, and a Python project on airport distances.',
  ogDescription: 'About a third of Alaska high schools offer computer science in the 2025 Code.org data. Live online classes reach every community, from Anchorage to the Aleutians.',
  twitterDescription: 'Alaska coding and AI classes, live online, for students far from any coding school.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Alaska Students',
    description: 'Level-matched online Python, AI, game building and AP Computer Science Principles for Alaska students from elementary to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in Alaska',
  capsuleQ: 'How can an Alaska student learn coding if their school has no computer science course?',
  capsule: 'Online, live. Code.org (2025) found computer science in 89 of 260 Alaska high schools, or 34.2%, in 2024 to 2025, so many students have no class nearby. Modern Age Coders teaches Python, AI and AP Computer Science Principles live online to K-12 learners, either in level-matched groups or one to one, scheduled on Alaska time wherever the student lives.',
  lead: 'Alaska is the one state where "the nearest coding class" can be a flight away. The published share of high schools with a computer science course is about one in three, its time zone history is unusually tangled, and its own education department website turned our requests away. So this page leans on what we could read at the source: the Code.org access counts, College Board AP school totals, the IANA time zone records, and the state transportation department\'s airport list, which becomes a real Python project on great-circle distance.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Alaska.',

  picks: {
    eyebrow: 'Course picks for Alaska',
    h2: 'Four courses that travel well',
    intro: 'Each runs entirely online, so a student in Bethel and one in Ketchikan get the same teacher and the same projects.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 3 to 6', note: 'Python with turtle drawings, games and small AI experiments, a first step into typed code.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Full Python, including the airport distance project, with math the student can check on a map.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'For students whose school has no AP CSP section: the Create task and exam practice, taught live.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning from scratch in Python, with models trained, tested and questioned by the student.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'Access to computer science',
      h2: 'About one in three Alaska high schools offers a computer science course',
      intro: 'What the Code.org (2025) State of AI + CS Education data sheet and the College Board publish for Alaska, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Year-by-year access in Alaska, taken from the trend tab of the 2025 Code.org sheet', head: ['Year', 'High schools with a CS course'], rows: [
          ['2018 to 2019', '19%'],
          ['2019 to 2020', '32%'],
          ['2020 to 2021', '42%'],
          ['2021 to 2022', '51%'],
          ['2022 to 2023', 'No figure published'],
          ['2023 to 2024', 'No figure published'],
          ['2024 to 2025', '34.2%, or 89 of 260 high schools (Most Recent Access Data tab)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A different kind of source', p: 'For 2024 to 2025, the Alaska row credits "School Course Catalogs and Teacher Surveys" as its basis. Many other rows in the same tab rest on files supplied by a state agency instead.' },
          { h3: 'Why the drop may not be a drop', p: 'The series runs from 51% to 34.2% across a two-year gap with no data. The tab does not say which method produced the earlier years, so a change in how schools were counted cannot be ruled out.' },
          { h3: 'No enrollment count', p: 'The participation tabs hold no Alaska value for any year from 2020 to 2021 onward. How many Alaska students take computer science is simply not in this dataset.' }
        ] },
        { kind: 'table', mt: true, caption: 'Alaska schools giving at least one AP exam, from the College Board state-by-state AP school report covering 2023 and 2024', head: ['Exam year', 'Total', 'Public schools', 'Other schools'], rows: [
          ['2023', '59', '52', '7'],
          ['2024', '70', '63', '7']
        ] },
        { kind: 'p', text: 'Eleven more public schools gave AP exams in 2024 than in 2023, a rise of about a fifth by our arithmetic, and it is a reminder that a school can offer AP in some subjects without a computer science teacher on staff. Suggested citation for the access figures: Code.org (2025). 2025 State of AI + CS Education. Single Alaska values are quoted; the sheet itself is not reproduced.' },
        { kind: 'callout', h3: 'What we could not read', p: 'The Alaska Department of Education and Early Development website, the legislature\'s administrative code pages and two other state sites blocked automated requests when we checked in October 2026. We do not print Alaska\'s computer science standards or any diploma rule here, because we could not read them at the source.' }
      ]
    },
    {
      id: 'distance', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far is it from Anchorage? Great-circle distance on 285 Alaska airports',
      intro: 'The Alaska Department of Transportation and Public Facilities publishes its airports as a public map layer with latitude and longitude for each. Students turn those coordinates into distances with the haversine formula.',
      body: [
        { kind: 'table', caption: 'Straight-line distance from Anchorage\'s international airport (FAA code ANC), our haversine calculation in miles from the DOT&amp;PF Airports layer, downloaded 17 October 2026', head: ['Airport (FAA code)', 'Our distance from ANC'], rows: [
          ['Fairbanks International (FAI)', '260.3'],
          ['Nome (OME)', '537.2'],
          ['Juneau International (JNU)', '569.1'],
          ['Barrow (BRW)', '722.5'],
          ['Ketchikan International (KTN)', '772.8'],
          ['Atka (AKA)', '1,097.2'],
          ['Adak (ADK), the farthest in the layer', '1,188.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Check the download', p: 'The layer\'s count query returns 285, and the file holds 285 airports: 118 in the Northern region, 87 Southcoast and 80 Central. Every record has coordinates, so nothing is silently dropped.' },
          { h3: '2. Why not Pythagoras?', p: 'Latitude and longitude are angles on a sphere. A degree of longitude near Barrow covers far less ground than one near Ketchikan, so flat-map subtraction gives wrong answers. Haversine works on the sphere itself.' },
          { h3: '3. Summarize the spread', p: 'From ANC, our median distance to the other airports is 396.8 miles. Only 22 lie within 100 miles, while 86 are more than 500 miles away. Those three numbers describe Alaska better than a map does.' }
        ] },
        { kind: 'spec', title: 'The formula students write', p: 'Convert both points to radians; take a = sin squared of half the latitude difference, plus cos(lat1) times cos(lat2) times sin squared of half the longitude difference; the distance is 2R times arcsin of the square root of a, with R = 3,958.8 miles. Then test it: Lake Hood, next to ANC, should come out close to one mile, and it does.' },
        { kind: 'p', text: 'Two extensions keep strong students busy. First, the layer\'s longitudes run from -176.65 to -130.01, so no point here crosses the 180th meridian; students ask what their code would do if one did, and fix it before it happens. Second, a straight line is not a route: the DOT&amp;PF itself says it makes no warranty about the data, and a flight path, a ferry or a road can be much longer. Our numbers are a teaching result, not travel distances.' }
      ]
    },
    {
      id: 'zones', tint: 'tint', eyebrow: 'Class times',
      h2: 'Seven Alaska zone names in the time zone database, one class time',
      intro: 'Alaska keeps two official offsets today, but the IANA database tracks seven zone names for the state because their histories differ.',
      body: [
        { kind: 'table', caption: 'Alaska zones in the IANA tzdb (zone1970.tab and northamerica, read 17 October 2026)', head: ['Zone name', 'Area described', 'Offset today'], rows: [
          ['America/Anchorage', 'Alaska (most areas)', 'Alaska time, UTC minus 9 in winter'],
          ['America/Juneau, America/Sitka, America/Yakutat', 'The Juneau, Sitka and Yakutat areas', 'Alaska time'],
          ['America/Metlakatla', 'Annette Island', 'Alaska time since 2019, after spells on Pacific time'],
          ['America/Nome', 'Alaska (west)', 'Alaska time'],
          ['America/Adak', 'Western Aleutians', 'Hawaii-Aleutian time, UTC minus 10 in winter']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Most of the state', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Alaska time.' },
          { h3: 'The Aleutian exception', p: 'Students on Adak run an hour behind Anchorage. We confirm their slot on Hawaii-Aleutian time, so no one joins an hour late.' },
          { h3: 'The India gap, our sums', p: 'India is 13 hours 30 minutes ahead of Alaska Daylight Time and 14 hours 30 minutes ahead of Alaska Standard Time, by our arithmetic. Alaska changes clocks on November 1, 2026 and March 14, 2027.' }
        ] },
        { kind: 'p', text: 'The database notes are a history lesson in themselves. They record that when Alaska passed from Russia in 1867, Sitka workers "celebrated two Sundays" in one week as the calendar shifted, and they cite a 1983 newspaper headline, "Alaska\'s four time zones now two", from the year Anchorage moved from UTC minus 10 to the current Alaska offset. Metlakatla changed zones three times between 2015 and 2019. A program that hard-codes an offset for an Alaska student will be wrong somewhere; one that stores the zone name will not.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A path that works from any village or city',
    intro: 'Treat the grade ranges loosely. Where a student actually starts is decided in the no-cost first session.',
    cols: [
      { band: 'Grades K to 3', h3: 'Logic in blocks', p: 'Short block programs, patterns and puzzles that build sequencing and loops without typing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 6', h3: 'From blocks to Python', p: 'Games and drawings in Python, plus a first look at how AI tools make guesses from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 9', h3: 'Coordinates and code', p: 'Python with real data such as the airport layer, then web pages that show what the code found.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 10 to 12', h3: 'AP and machine learning', p: 'AP Computer Science Principles where the school has none, then models built and evaluated by hand.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can write the haversine function. Can it tell you the answer is wrong?',
    intro: 'Not reliably. Checking is a human skill, and Alaska data makes the case well.',
    p1: 'Ask an assistant for a distance function and it will usually produce one that runs. Whether it uses degrees where it needs radians, or miles where you wanted kilometers, only shows when someone tests it against a known answer, like the one mile from ANC to Lake Hood.',
    p2: 'Students who wrote the function themselves know where it can break: units, the 180th meridian, a missing coordinate. That knowledge lets them use AI tools for speed while staying in charge of correctness, which is the skill that will matter long after any particular tool changes.',
    closer: 'In a state where a third of high schools list a computer science course, a student who can build and check their own tools has an advantage that does not depend on the local timetable.',
    blogAnchor: 'the case for learning to code in the age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A live teacher, whatever the distance to the nearest road',
    intro: 'All a class needs is a connection good enough for video and sound.',
    cells: [
      { h3: 'Rural and remote families', p: 'Students in communities off the road system join exactly as students in Anchorage do. There is no travel and no relocation, just a scheduled video class.' },
      { h3: 'Batches by level', p: 'Groups of fifteen to twenty students at the same stage, mixed from across the US, led live by one teacher each session.' },
      { h3: 'One teacher, one student', p: 'A 1-on-1 plan suits students with unusual schedules, such as seasonal family work, or anyone preparing AP without a school course.' },
      { h3: 'Connection tips', p: 'Where bandwidth is tight, students can switch off their own camera and keep audio and screen sharing, which is what coding lessons depend on most.' },
      { h3: 'Your own work', p: 'Teachers know US grade levels and AP formats. Anything a school grades, and any project a student submits anywhere, stays the student\'s own work.' },
      { h3: 'First lesson free', p: 'A complete lesson with a real task, then a suggested level and course. Nothing is charged for it, and no card is requested.' }
    ],
    spec: { title: 'Taught online, from India', p: 'Our teachers work from India. Modern Age Coders has no office or learning center in Alaska and claims none, and we are not connected with the state education department or any Alaska district.' }
  },

  fees: {
    h2: 'Fees for families in Alaska',
    intro: 'The same three prices for every US household, shown in US dollars.',
    first: 'An opening lesson at no cost, finishing with our level and course suggestion.',
    group: 'A month of live classes in a batch of fifteen to twenty students at the same level.',
    private: 'A month of 1-on-1 classes, the same schedule with a teacher to yourself.',
    closer: 'A family in Juneau pays what a family in Fairbanks pays, in US dollars, with no remote-area surcharge. Payment starts only after the free lesson, once you have agreed a course and time; the pricing page covers breaks and missed classes.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Ask for a free lesson for an Alaska student',
    intro: 'Tell us the grade and what the student is curious about. Younger children usually open with a block puzzle; older students often ask to try the airport distance problem in their first hour.',
    success: 'Thank you. We will be in touch soon to set up a class for your Alaska student.'
  },

  faq: {
    h2: 'Questions from Alaska families',
    intro: 'Answers to what Alaska parents and students ask most.',
    items: [
      { q: 'What share of Alaska high schools offer computer science?', a: 'The 2025 Code.org sheet gives 89 of 260, or 34.2%, for 2024 to 2025, and it lists course catalogs and teacher surveys as where that count came from.' },
      { q: 'Why did the Alaska figure fall from 51% to 34.2%?', a: 'We cannot say. There is no published value for the two years in between, and the sheet does not show which method produced the older figures, so the change may partly reflect counting.' },
      { q: 'How many Alaska students take computer science?', a: 'The Code.org participation tabs contain no Alaska figure for any year, so we do not know and do not estimate it.' },
      { q: 'Does Alaska require computer science to graduate?', a: 'We could not check. The state education department site blocked our requests in October 2026, so ask your school or district for the current diploma rules.' },
      { q: 'Can a student in a rural community join live classes?', a: 'Yes, if the connection supports a video call. Audio and screen sharing matter most, so a student can turn off their camera when bandwidth is limited.' },
      { q: 'Which time zone are classes set in?', a: 'Alaska time for most students. Families on Adak in the western Aleutians, which uses Hawaii-Aleutian time, get their slot confirmed on that clock instead.' },
      { q: 'What are the class timing options?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can you prepare a student for AP Computer Science Principles?', a: 'Yes. We teach the course content, the Create performance task skills and exam practice, while the task itself remains the student\'s own work.' },
      { q: 'Do you have a location in Alaska?', a: 'No. All teaching is live online from India, and we do not claim any Alaska office or partnership with a school district.' },
      { q: 'Where do I find the fees?', a: 'In the fees section above: a free first lesson, then a monthly batch or monthly 1-on-1 plan, all priced in US dollars and billed only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Alaska students',
    html: 'For school-age options see <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a> and <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a>. Students without an AP section can read <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>, and builders can enter the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge</a>, which our guide explains.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Alaska and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'US hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' }
  ],

  personalityCss: `
.cg-root.cg-aia .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-aia .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-aia .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-aia .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aia .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-aia .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-aia .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-aia .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aia .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aia .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Alaska, read raw 17 and 18 October 2026. education.alaska.gov (Request Rejected), akleg.gov (Cloudflare), gov.alaska.gov (verification) and acpe.alaska.gov (403) blocked; nothing quoted from them. Code.org (2025): access 19%, 32%, 42%, 51%, no 2022-23 or 2023-24 value, 34.2% (89 of 260, School Course Catalogs and Teacher Surveys); no participation values. College Board AP schools 59 (2023), 70 (2024); public 52, 63. IANA tzdb: seven Alaska zone names, Adak on Hawaii-Aleutian time, Metlakatla history 2015 to 2019, 1983 "four time zones now two", 1867 "two Sundays".',
    localProject: 'Alaska DOT&PF Airports layer (AKDOT_GIS, public, no-warranty disclaimer), downloaded 17 October 2026, count 285: regions Northern 118, Southcoast 87, Central 80; our haversine miles from ANC: median 396.8, 22 within 100, 86 over 500, FAI 260.3, OME 537.2, JNU 569.1, BRW 722.5, KTN 772.8, AKA 1,097.2, ADK 1,188.9; longitudes -176.65 to -130.01. Lesson family: great-circle distance.',
    requiredMentions: [
      '89 of 260',
      'School Course Catalogs and Teacher Surveys',
      '19%',
      'Barrow (BRW)',
      'Only 22 lie within 100 miles',
      'celebrated two Sundays',
      'Alaska\'s four time zones now two',
      '1,188.9',
      '396.8',
      '118 in the Northern region',
      '3,958.8'
    ],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Alaska access, source label, no participation values.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'IANA tzdb zone1970.tab: Alaska zone names and areas.', url: 'https://data.iana.org/time-zones/tzdb/zone1970.tab' },
      { claim: 'IANA tzdb northamerica: Alaska zone rules, Metlakatla and Anchorage history, 1867 and 1983 notes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'Alaska DOT&PF: Airports feature layer.', url: 'https://services.arcgis.com/r4A0V7UzH9fcLVvv/arcgis/rest/services/Airports/FeatureServer' }
    ],
    rejectedClaims: [
      'Alaska CS standards, any CS graduation rule and the Alaska Administrative Code text: education.alaska.gov and akleg.gov blocked requests on 17 October 2026 (WAF and Cloudflare); not retried around.',
      'Code.org graduating-senior, gender, race and geography figures and the Code.org Alaska summary text: not used.',
      'A reading of the 51% to 34.2% change as a decline: refused, because the method for earlier years is not shown and two years are missing.',
      'Airport names that contain personal names: given by FAA code and town instead.',
      'Road, ferry or flight distances: not computed; only our straight-line haversine figures are printed, labelled as ours.',
      'Any affiliation with the Alaska Department of Education and Early Development, DOT&PF, Code.org or the College Board.'
    ]
  }
};
