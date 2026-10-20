'use strict';
// Indiana (cg- state page, US cluster Phase 4, row 74). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: almost nine in ten Indiana high schools offer computer science, yet about one student in eighteen takes it;
// and Indiana's own clocks are the most tangled in the US time zone database, which makes the state a natural home
// for a lesson on sets. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-indiana/):
//  - Indiana Department of Education: NOT READ. www.in.gov (and www.doe.in.gov, which redirects there) refused TCP
//    connections from our network on both days; media.doe.in.gov and api.iga.in.gov returned 403 and we stopped
//    (access-log.txt). No Indiana graduation, standards or offering rule is printed; the page says so.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): Most Recent Access
//    Data 2023-2024, 368 of 414 high schools (88.9%), State Education Agency; Access Percent over the Years 62%
//    (2018-19), 72%, 74%, 85%, 90.6% (2022-23), 88.9% (2023-24), no 2024-25 value; Most Recent Participation 18,146
//    of 325,663 (5.57%), matching the 2023-24 value 0.0557; trend 5.0% (2020-21), 6.6%, 6.6%, 5.57%; denominator NCES
//    Digest Table 203.04, Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Indiana schools with AP exams 418 (2023), 433 (2024).
//  - IANA tzdb northamerica (iana-lines.txt): "Since 1970, most of Indiana has been like America/Indiana/Indianapolis";
//    "Gibson, Jasper, Lake, LaPorte, Newton, Porter, Posey, Spencer, Vanderburgh, and Warrick counties have been like
//    America/Chicago"; "Dearborn and Ohio counties have been like America/New_York"; "Clark, Floyd, and Harrison
//    counties have been like America/Kentucky/Louisville"; "Shanks partitioned Indiana into 345 regions"; Federal
//    Register quote moving "Starke, Pulaski, Knox, Daviess, Martin, Pike, Dubois, and Perry Counties" to Central on
//    "April 2, 2006"; Pulaski back to Eastern March 2007; Daviess, Dubois, Knox and Martin back November 2007; Pike back
//    2007; "Switzerland County, Indiana, did not observe DST from 1973 through 2005."; America/Indiana/Indianapolis zone
//    lines EST without DST until 2006. zone1970.tab: "Central - IN (Perry)", "Central - IN (Starke)". India offsets ours.
//  - City of Indianapolis / Marion County open data, Indianapolis Greenways (gis.indy.gov OpenData_Recreation MapServer
//    layer 1, hub item cd1e489dfd7f499d874ae699f3d10d8e). Licence text: "There are no restrictions on the use of Data
//    ... any data derived from the Data must acknowledge the City of Indianapolis/Marion County, IN." returnCountOnly
//    105, all 105 downloaded 18 October 2026. Our sets (our-calcs-summary.txt): Existing 50 segments, 19 names;
//    Proposed-MDCAdpt 55 segments, 25 named (one blank); intersection 11; existing only 8; proposed only 14; union 33.
// Lesson family: set operations (intersection, difference, union), on greenway names and on tzdb county lists.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'INDIANA', label: 'Indiana', blurb: 'Coding and AI for Indiana students: high CS access but low enrollment, split time zones, and an Indianapolis greenways sets project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-indiana',
  code: 'aiin',
  accent: '#9E2C18',
  accentRationale: 'Indiana: #9E2C18, a muted brick red allocated for row 74, chosen to sit apart from the other Midwestern accents and well above 4.5:1 contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Indiana',
    eyebrow: 'Indiana, United States',
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
  routeLabel: 'Indiana',
  title: 'Coding and AI Classes in Indiana | Live Online Lessons',
  description: 'Live online coding and AI lessons for Indiana students: published CS access and enrollment figures, Eastern and Central lesson times, and an Indianapolis project.',
  ogDescription: 'Most Indiana high schools offer computer science, but few students take it. The published figures, Indiana time zones, and live online coding and AI lessons for Hoosier students.',
  twitterDescription: 'Indiana coding and AI lessons, live online, on Eastern or Central time.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Lessons for Indiana Students',
    description: 'Teacher-led online game coding, Python, problem solving, data structures and machine learning for Indiana students from third grade to twelfth grade, with the level set in a free trial lesson.'
  },

  h1: 'Coding and AI classes in Indiana',
  capsuleQ: 'Do most Indiana high schools offer computer science?',
  capsule: 'Yes. Code.org (2025) reports 368 of 414 Indiana high schools, 88.9%, offering foundational computer science in 2023 to 2024, but only 5.57% of high school students enrolled in it. Modern Age Coders closes that gap from the other side: live online coding and AI lessons for grades 3 to 12, on Eastern or Central time.',
  lead: 'Indiana is a state where the course is usually there and the students mostly are not. Close to nine in ten of its high schools offered computer science in 2023 to 2024, well above the 60% national figure in the same Code.org sheet, yet barely one high school student in eighteen was enrolled in it. Indiana is also, by the account of the people who maintain the world&rsquo;s time zone database, the most complicated state in the country to keep a clock in. This page sets out the published access and enrollment figures, explains Indiana&rsquo;s two time zones the way the database records them, and walks through a project on Indianapolis greenway data that teaches one of the cleanest ideas in programming: sets, and what they share.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a student in Indiana.',

  picks: {
    eyebrow: 'Courses for Indiana students',
    h2: 'Four lessons for students who want more than one elective',
    intro: 'Group or one-to-one, always live. The trial lesson is free and decides where a student begins.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Grades 3 to 6', note: 'Scratch, Roblox and Minecraft projects that teach loops, events and variables through games kids already know.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 8', note: 'A first typed language with turtle art, games and small AI experiments, before high school course choices arrive.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Grades 8 to 12', note: 'Lists, dictionaries and sets, then classic algorithms: the toolkit behind the greenway project below.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning from the ground up in Python, trained and tested on data the student can examine.' }
    ]
  },

  sections: [
    {
      id: 'gap', tint: '', eyebrow: 'The access gap',
      h2: 'Nearly every Indiana high school offers CS. Few students take it',
      intro: 'Indiana values from the Code.org 2025 State of AI + CS Education sheet and the College Board, read on 17 October 2026 and quoted as published.',
      body: [
        { kind: 'table', caption: 'Share of Indiana public high schools offering foundational computer science, by school year (Code.org, 2025; the newest row comes from the Most Recent Access Data tab)', head: ['School year', 'Indiana high schools offering CS'], rows: [
          ['2018 to 2019', '62%'],
          ['2019 to 2020', '72%'],
          ['2020 to 2021', '74%'],
          ['2021 to 2022', '85%'],
          ['2022 to 2023', '90.6%'],
          ['2023 to 2024', '88.9%, which is 368 of 414 high schools, from state education agency data']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Indiana', head: ['Measure', 'Indiana', 'Source and note'], rows: [
          ['High school students enrolled in computer science', '18,146 of 325,663, or 5.57%', 'Code.org (2025); the rate is its 2023 to 2024 value, and the enrollment base is the NCES Fall 2022 count'],
          ['Enrollment share, 2020 to 2021 through 2023 to 2024', '5.0%, 6.6%, 6.6%, 5.57%', 'Code.org (2025), participation trend'],
          ['Indiana schools giving AP exams, 2023 and 2024', '418, then 433', 'College Board, School Report of AP Exams by State, 2023-24']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The course is there', p: 'From 62% in 2018 to 2019 the offering share rose every year to a peak of 90.6% in 2022 to 2023. By then a student at most Indiana high schools could find computer science somewhere on the schedule.' },
          { h3: 'The seats are not full', p: 'Enrollment never passed 6.6% in the four years shown. Offering a course and filling it are different problems, and a single elective competes with everything else a schedule must hold.' },
          { h3: 'What families can do', p: 'Ask early. A student who has already written real programs in middle school is far more likely to choose the high school course, and to stay in it.' }
        ] },
        { kind: 'p', text: 'There is no 2024 to 2025 Indiana access value in the Code.org sheet, so the 2023 to 2024 figure is the newest one quoted. Please cite these figures as Code.org (2025). 2025 State of AI + CS Education; we print single Indiana values and leave the dataset with its publisher.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'State rules',
      h2: 'What this page does not tell you about Indiana&rsquo;s school rules, and why',
      intro: 'We only print a rule after reading it on the state&rsquo;s own website. For Indiana, that was not possible this time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The site we could not reach', p: 'The Indiana Department of Education publishes its rules on in.gov. On 17 and 18 October 2026 that site did not accept connections from our network, so we read none of its pages.' },
          { h3: 'So nothing is guessed', p: 'Rather than repeat a rule from a summary elsewhere, this page leaves out Indiana&rsquo;s graduation requirements, computer science standards and school offering rules entirely. We will add them once we can read them at the source.' },
          { h3: 'Where to ask', p: 'Your school counselor knows exactly which computer science courses your school runs, how they count toward a diploma, and whether a course can be taken in middle school.' }
        ] },
        { kind: 'callout', h3: 'How we handle a missing source', p: 'Every number on this page comes from a file we downloaded and read ourselves: the Code.org sheet, the College Board report, the time zone database and the city&rsquo;s greenway data. Where a primary source could not be read, the page says so instead of filling the gap.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Built, planned, or both? Indianapolis greenways as Python sets',
      intro: 'The City of Indianapolis and Marion County publish their greenway network as open data. Every segment carries a name and a status, and the two statuses make two sets.',
      body: [
        { kind: 'table', caption: 'Indianapolis Greenways layer, 105 segments downloaded 18 October 2026: names compared as sets (our calculations)', head: ['Set operation', 'Python', 'Our result'], rows: [
          ['Names on Existing segments (50 segments)', 'existing', '19 names'],
          ['Names on Proposed-MDCAdpt segments (55 segments, one unnamed)', 'proposed', '25 names'],
          ['Built in part and planned to grow', 'existing &amp; proposed', '11 names, including Fall Creek GW, Eagle Creek GW and Central Canal'],
          ['Built, with no planned extension listed', 'existing - proposed', '8 names, including Monon Trail and Pennsy Trail'],
          ['Planned only, nothing built under that name', 'proposed - existing', '14 names, including Nickel Plate and Interurban Tr'],
          ['Every named greenway', 'existing | proposed', '33 names']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the sets', p: 'Students read each segment&rsquo;s FULL_NAME and STATUS and add the name to one of two Python sets. Duplicates vanish on their own: Fall Creek GW has eight existing segments but is one member of the set.' },
          { h3: '2. Ask set questions', p: 'Intersection, difference and union each answer a plain-English question about the network. Checking that 19 plus 25 minus 11 equals 33 is a first lesson in testing your own code.' },
          { h3: '3. Spot the traps', p: 'Monon Trail is existing and Monon Rail is proposed; Vandalia Tr and Vandalia Trail both appear. Sets match exact strings, so students must decide whether those are the same path before trusting the answer.' }
        ] },
        { kind: 'callout', h3: 'Credit, and what the numbers are', p: 'Data from the City of Indianapolis/Marion County, IN, whose terms ask that derived data acknowledge them and which provides it as is, without warranty. The counts above are our own from one download. A name appearing in both sets suggests a greenway that is partly built, but only the city can say what is actually planned.' },
        { kind: 'p', text: 'Once the idea clicks, students reuse it on Indiana&rsquo;s clocks. The time zone database quotes the federal rule that moved eight counties, Starke, Pulaski, Knox, Daviess, Martin, Pike, Dubois and Perry, from Eastern to Central time on April 2, 2006, and then records six of them returning to Eastern in 2007. The difference of those two sets is Perry and Starke, exactly the two Indiana counties the database still lists on Central time with their own zones.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Indiana&rsquo;s clocks, as the time zone database records them',
      intro: 'Most of Indiana is on Eastern time, while a group of western counties and two others keep Central time. The IANA database explains the details.',
      body: [
        { kind: 'table', caption: 'Indiana in the IANA tzdb northamerica file (quoted county lists; the India offsets in the last column are our arithmetic)', head: ['Area', 'Zone in the database', 'India ahead by (summer, winter)'], rows: [
          ['Most of Indiana', 'America/Indiana/Indianapolis, Eastern', '9 h 30 min, 10 h 30 min'],
          ['Gibson, Jasper, Lake, LaPorte, Newton, Porter, Posey, Spencer, Vanderburgh and Warrick counties', 'Like America/Chicago, Central', '10 h 30 min, 11 h 30 min'],
          ['Perry and Starke counties', 'America/Indiana/Tell_City and America/Indiana/Knox, Central', '10 h 30 min, 11 h 30 min'],
          ['Dearborn and Ohio counties', 'Like America/New_York, Eastern', '9 h 30 min, 10 h 30 min'],
          ['Clark, Floyd and Harrison counties', 'Like America/Kentucky/Louisville, Eastern', '9 h 30 min, 10 h 30 min']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '345 regions', p: 'The database records that an earlier time zone reference partitioned Indiana into 345 regions, each with its own time history. Its maintainers note that most of that complexity happened before 1970.' },
          { h3: 'Daylight saving arrived late', p: 'The America/Indiana/Indianapolis entry stays on Eastern Standard Time all year until 2006 and only then follows the US daylight saving rule. Separately, Switzerland County did not observe DST from 1973 through 2005.' },
          { h3: 'Booking a lesson', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm each time in your county&rsquo;s zone.' }
        ] },
        { kind: 'spec', title: 'Why programmers love Indiana', p: 'A scheduling app that treats all of Indiana as one zone is wrong for Evansville or Gary. Code that stores a named zone such as America/Indiana/Indianapolis, never a fixed offset, also survives the US clock change on November 1, 2026 without a single edit.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From a first game to machine learning',
    intro: 'Bands are approximate; the trial lesson finds the real starting point.',
    cols: [
      { band: 'Grades 3 to 5', h3: 'Games first', p: 'Block code and game worlds, where loops and events feel like play.', courses: ['game-development-masterclass-for-kids', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Real syntax', p: 'Python and simple websites, so the high school course feels familiar, not foreign.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 9 to 10', h3: 'Structures and logic', p: 'Lists, sets, dictionaries and algorithms, with the greenway project as a first real dataset.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science A in Java and machine learning models a student builds and tests.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model can write the set code. Can it tell you what Monon Rail is?',
    intro: 'Writing three lines of Python is easy now; deciding whether the answer is right is still the job.',
    p1: 'Ask an assistant which Indianapolis greenways are both built and planned and it will produce correct set code in seconds. It will not stop to ask whether Monon Rail and Monon Trail are one path, or whether a blank name hides a real segment. Those questions only occur to someone who has handled the data.',
    p2: 'That is the case for learning to code even when AI writes much of it. A student who understands intersection and difference can read generated code, test it on a small example and spot when the data, not the code, is the problem.',
    closer: 'Indiana already offers the course in most high schools; the students who take it with real practice behind them are the ones who will use AI well.',
    blogAnchor: 'why we still teach students to write code themselves'
  },

  delivery: {
    eyebrow: 'Lessons online',
    h2: 'Gary to Evansville, the same live lesson',
    intro: 'Indiana stretches across two time zones and a lot of farmland. A screen closes the distance.',
    cells: [
      { h3: 'Right from home', p: 'A student in Fort Wayne and one in Bloomington can share a session without either family driving anywhere after school.' },
      { h3: 'Matched to US grades', p: 'Teachers plan in US grade levels and can connect projects to a school computer science course or AP. Work a school assesses is always completed by the student.' },
      { h3: 'Free trial first', p: 'A teacher gives a real task, watches how the student thinks, and suggests a course, level and time. No card is requested.' },
      { h3: 'Batch lessons', p: 'Fifteen to twenty students of a similar level, from Indiana and across the country.' },
      { h3: 'One-on-one', p: 'A teacher for one student, for those who want speed, extra help or focused AP work.' },
      { h3: 'Eastern or Central', p: 'Each time is confirmed in the zone your county uses, so nobody arrives an hour early.' }
    ],
    spec: { title: 'No Indiana office', p: 'There is no Modern Age Coders site in Indiana. Teachers teach live from India, and a student needs a computer, sound, a microphone and a dependable connection.' }
  },

  fees: {
    h2: 'Fees for Indiana families',
    intro: 'One free trial, then two monthly choices.',
    first: 'A complete trial lesson, free, that ends with a recommended course, level and time.',
    group: 'A monthly plan in a batch of fifteen to twenty students at one level.',
    private: 'A monthly plan with a dedicated teacher for one student.',
    closer: 'Families outside India pay a single rate in US dollars, the same in Indianapolis as in South Bend. Billing starts after the trial, once course and time are agreed; holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Request a free trial for an Indiana student',
    intro: 'Share the grade and interests. A third grader might begin with a Scratch game, a seventh grader with turtle art in Python, a high schooler with the greenway sets.',
    success: 'Thank you. We will contact you soon to set up a trial lesson for your Indiana student.'
  },

  faq: {
    h2: 'Indiana parents ask',
    intro: 'Answers drawn from the sources on this page; for school rules, your counselor is the authority.',
    items: [
      { q: 'What share of Indiana high schools offered computer science in 2023 to 2024?', a: 'Code.org (2025) reports 368 of 414 Indiana high schools, or 88.9%, using state education agency data.' },
      { q: 'How many Indiana high school students took computer science?', a: 'Code.org (2025) lists 18,146 of 325,663 high school students, or 5.57%, the value it gives for 2023 to 2024.' },
      { q: 'Why does this page not list Indiana graduation rules?', a: 'We print state rules only from the state\'s own site, and the Indiana Department of Education site could not be reached from our network on 17 and 18 October 2026. Ask your school counselor for the current rules.' },
      { q: 'Is all of Indiana on Eastern time?', a: 'No. Most of the state is on Eastern time, but the time zone database lists counties such as Lake, Porter, Vanderburgh, Perry and Starke on Central time.' },
      { q: 'Which time zone will you use for my lessons?', a: 'Your county\'s zone. Families in Central counties get Central times, and everyone else gets Eastern times.' },
      { q: 'When are lessons held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How many Indiana schools give AP exams?', a: 'The College Board counts 418 Indiana schools with AP exams in 2023 and 433 in 2024, across all AP subjects.' },
      { q: 'Do your lessons give Indiana school credit?', a: 'No. Credit comes from your school\'s own courses. Our lessons build skills and projects alongside them, and assessed school work stays the student\'s own.' },
      { q: 'Can my child start in elementary school?', a: 'Yes. Many begin in third grade with block-based games, then move to Python in middle school.' },
      { q: 'Where do I see the fees?', a: 'In the fees section above: a free trial lesson, then a monthly batch plan or a monthly one-to-one plan.' }
    ]
  },

  next: {
    eyebrow: 'Read next',
    h2: 'More for Indiana students and parents',
    html: 'Compare Indiana with other states in <a class="cg-inline-link" href="/high-school-computer-science-access-by-state">high school computer science access by state</a>. Middle schoolers can browse <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>, and competitive students can plan the year with our <a class="cg-inline-link" href="/us-coding-math-and-ai-competitions-calendar">US coding, math and AI competitions calendar</a>. For a state with a CS graduation requirement, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Indiana and the United States',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiin .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.6vw, 2.2rem); }
.cg-root.cg-aiin .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-aiin .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aiin .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-aiin .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.013em; }
.cg-root.cg-aiin .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aiin .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiin .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.6rem); }
.cg-root.cg-aiin .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aiin .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Indiana, read raw on 17 and 18 October 2026: Indiana Department of Education NOT READ (in.gov refused connections; media.doe.in.gov and api.iga.in.gov 403; access-log.txt), so no state rule is printed. Code.org (2025) access 368 of 414 (88.9%, 2023-24, state education agency), trend 62% to 90.6% to 88.9%, participation 18,146 of 325,663 (5.57%, 2023-24, NCES Fall 2022 denominator), participation trend 5.0%, 6.6%, 6.6%, 5.57%; College Board AP schools 418 (2023), 433 (2024); IANA tzdb Indiana section (most areas Indianapolis; ten counties like Chicago; Dearborn and Ohio like New York; Clark, Floyd, Harrison like Louisville; 345 regions; 2006 Federal Register move of eight counties; returns in 2007; Perry and Starke Central; Switzerland County no DST 1973 through 2005; Indianapolis EST until 2006).',
    localProject: 'City of Indianapolis/Marion County open data, Indianapolis Greenways (gis.indy.gov OpenData_Recreation layer 1; no restrictions on use, derived data must acknowledge the City of Indianapolis/Marion County, IN), 105 segments (returnCountOnly matched), downloaded 18 October 2026. Our sets: Existing 50 segments, 19 names; Proposed-MDCAdpt 55 segments, 25 named; intersection 11; existing only 8; proposed only 14; union 33. Second exercise on tzdb county lists: eight counties moved in 2006 minus six that returned in 2007 = Perry and Starke. Lesson family: set operations.',
    requiredMentions: [
      '368 of 414',
      '18,146 of 325,663',
      'Fall Creek GW',
      'Proposed-MDCAdpt',
      'Monon Rail',
      '345 regions',
      'Gibson, Jasper, Lake, LaPorte, Newton, Porter, Posey, Spencer',
      'America/Indiana/Tell_City',
      'did not observe DST from 1973 through 2005',
      'April 2, 2006'
    ],
    sources: [
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Indiana access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'IANA tzdb northamerica: Indiana zones, county lists and history.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'IANA tzdb zone1970.tab: Central - IN (Perry), Central - IN (Starke).', url: 'https://data.iana.org/time-zones/tzdb/zone1970.tab' },
      { claim: 'City of Indianapolis/Marion County: Indianapolis Greenways map service layer.', url: 'https://gis.indy.gov/server/rest/services/OpenData/OpenData_Recreation/MapServer/1' }
    ],
    rejectedClaims: [
      'Every Indiana Department of Education statement (graduation requirements, CS standards, school offering rules): not read, because www.in.gov refused connections from our network on 17 and 18 October 2026 and media.doe.in.gov returned 403; nothing from summaries elsewhere is substituted.',
      'Code.org Indiana access for 2024-25: the sheet has no value, so the 2023-24 figure is printed and labelled.',
      'The Code.org graduating-senior, gender and race figures for Indiana: not from the Access or Participation tabs, not used.',
      'What the Proposed-MDCAdpt status code stands for: not defined in the downloaded data, so it is printed literally and not expanded.',
      'That a greenway name in both sets is officially planned for extension: not claimed; only the city can say.',
      'Names of individual Indiana schools: not used; counts only.',
      'That our lessons earn Indiana credit: refused.',
      'Any affiliation with the Indiana Department of Education, Code.org, the College Board, IANA or the City of Indianapolis.'
    ]
  }
};
