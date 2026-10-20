'use strict';
// Alabama (cg- state page, US cluster Phase 4, row 63). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Alabama moved from about half of its high schools offering computer science to nearly all of them in six
// years. What did the state set out to do, what do the published counts show, and what can a student build on
// Alabama data? Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-alabama/):
//  - ALSDE (alabamaachieves.org, alsde.edu): unreachable both days (DNS SERVFAIL, connect timeout), so no department
//    page is quoted; see rejectedClaims. The Alabama Legislature code site is a script-only app; not used.
//  - Office of the Governor, press release 27 September 2017: "Governor's Advisory Council for Computer Science
//    Education" created; it "will make recommendations to the Governor for the expansion of computer science education".
//  - Office of the Governor, 4 December 2017: joining the "Governors' Partnership for K-12 Computer Science"; members help
//    in "developing rigorous K-12 computer science standards, funding professional learning for K-12 computer science
//    teachers and putting computer science in every high school in the state."
//  - Office of the Governor, 26 July 2019: "The Computer Science for Alabama Act (HB216)" "phases in requirements for
//    public schools to offer courses in computer science"; funds "evidence-based computer science professional learning";
//    a pathway for teachers to be "properly trained and certified in computer science". Part of "Strong Start, Strong Finish".
//  - Office of the Governor, 23 October 2025: 2025-2026 Alabama Governor's App Challenge, "grades K through 12", apps
//    "written in any programming language and for any platform", "teams of up to three members", registration by
//    "January 19, 2026", school winners by grade band to the LEA Technology Coordinator by "January 30, 2026".
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): AL access 49%
//    (2018-19), 57%, 82%, 85%, 95% (2022-23), 94.2% (2023-24), 91.9% (2024-25); Most Recent Access 351 of 382,
//    2024-2025, source "State Education Agency". Participation 5.5% (2020-21), 6.9%, 7.0%, 7.87% (2023-24, no 2024-25
//    value); Most Recent Participation 17,488 of 222,089 (denominator NCES Digest Table 203.04, Fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: Alabama 306 schools (2023), 319 (2024); public 251, 265.
//  - IANA tzdb northamerica: Alabama on US Central (America/Chicago); comments say Phenix City, Lanett, Smiths Station
//    and Valley keep Eastern time unofficially ("We are in the Central time zone, but we do go by the Eastern time zone").
//  - City of Birmingham, City Parks feature layer (owner CityofBirminghamGIS), linked from the city open data package
//    "Birmingham City Parks Maps", licence "Creative Commons Attribution". Downloaded 18 October 2026, returnCountOnly 130.
//    Our results: 130 records, 120 distinct NAME values, 7 blank ADDRESS fields (counted, never printed), 8 records with
//    PROPERTY_A 0 (6 of them Rotary Trail pieces, plus Railroad Park and Henley Park), 10 rows repeating a NAME and
//    acreage already seen; naive PROPERTY_A sum 3,026.67, sum after dropping exact repeats 2,815.34; largest record
//    1,051.74 (34.7% of the naive sum); 18 nonzero records under 1; DEDICATED, MANAGED, PARK_TYPE are bare codes.
// Lesson family: missing and disguised-missing values (blanks, zeros that mean unknown, repeated rows, unlabelled codes).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ALABAMA', label: 'Alabama', blurb: 'Coding and AI for Alabama students, from the 2019 offering law to near-universal high school access, with a Birmingham parks data-cleaning project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-alabama',
  code: 'aa',
  accent: '#9E2151',
  accentRationale: 'Alabama: #9E2151, a muted camellia crimson for the state flower, allocated in alloc.tsv row 63 and clear of the other US accents; passes 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Alabama',
    eyebrow: 'Alabama, United States',
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
  routeLabel: 'Alabama',
  title: 'Coding and AI Classes in Alabama | Live Online, K to 12',
  description: 'Online coding and AI classes for Alabama students: how the state reached nine in ten high schools offering computer science, and a Birmingham parks data project.',
  ogDescription: 'Alabama went from 49% to over 90% of high schools offering computer science. What changed, what the counts say, and live online classes for Alabama students.',
  twitterDescription: 'Alabama coding and AI classes, live online, built around the state\'s computer science push.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Alabama Students',
    description: 'Level-matched online Scratch, Python, app building, data science and AP Computer Science for Alabama students in grades K to 12, taught live in English.'
  },

  h1: 'Coding and AI classes in Alabama',
  capsuleQ: 'Can an Alabama student take computer science at school, and what can they add outside it?',
  capsule: 'Very likely at school: Code.org (2025) counts 351 of 382 Alabama public high schools, or 91.9%, offering computer science in 2024 to 2025, after the Computer Science for Alabama Act (HB216) phased in course offerings. Modern Age Coders adds live online classes for grades K to 12, in a small batch or 1-on-1, from Scratch to Python data projects and AP Computer Science.',
  lead: 'Few states changed course as fast. In 2018 to 2019, fewer than half of Alabama\'s public high schools offered a computer science class; four school years later the published share was 95%. Along the way, the governor\'s office announced a 2017 advisory council, a national governors\' partnership and a 2019 law. This page sets out what those official announcements say, the access and enrollment counts as published, a Birmingham open data project that teaches the least glamorous and most useful skill in data work, and how our live classes run on Central Time for families anywhere in the state.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Alabama.',

  picks: {
    eyebrow: 'Course picks for Alabama',
    h2: 'Where an Alabama student can begin',
    intro: 'Four starting points sorted by grade; a teacher checks the fit in a no-cost trial lesson, and only then do you choose.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Grades 2 to 6', note: 'Small games built step by step, a natural first entry for the K to 12 Governor\'s App Challenge.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Grades 7 to 12', note: 'Design, build and test a real app, the kind of project a statewide app competition asks students to submit.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python with pandas on public data, starting with the Birmingham parks cleaning project on this page.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java, the AP Computer Science A exam format and free-response practice, alongside a school course.' }
    ]
  },

  sections: [
    {
      id: 'push', tint: '', eyebrow: 'The state push',
      h2: 'How Alabama set out to put computer science in every high school',
      intro: 'Alabama\'s own education department site could not be reached on 17 or 18 October 2026, so this timeline uses the governor\'s official announcements, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Computer science milestones announced by the Office of the Governor of Alabama', head: ['Date announced', 'What the governor\'s office said'], rows: [
          ['September 27, 2017', 'Creation of the Governor\'s Advisory Council for Computer Science Education, to make recommendations for the expansion of computer science education, including teacher training'],
          ['December 4, 2017', 'Alabama joined the Governors\' Partnership for K-12 Computer Science, whose members work toward K-12 standards, teacher professional learning and computer science in every high school'],
          ['July 26, 2019', 'The Computer Science for Alabama Act (HB216) phases in requirements for public schools to offer courses in computer science'],
          ['July 26, 2019', 'The same law funds evidence-based professional learning for K-12 computer science teachers and a clearer route to certification'],
          ['October 23, 2025', 'Students invited to the 2025-2026 Alabama Governor\'s App Challenge for grades K through 12']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An offering law, not a seat law', p: 'As the 2019 announcement describes it, HB216 phases in a duty on public schools to offer computer science. It is about whether a course exists, which is exactly what the access figures below measure.' },
          { h3: 'Teachers first', p: 'Both the 2017 council and the 2019 law put weight on training. A course on the timetable needs a qualified teacher in the room, and that supply takes years to build in rural districts.' },
          { h3: 'Part of a wider plan', p: 'The governor\'s office filed computer science under its "Strong Start, Strong Finish" education initiative, alongside early reading and workforce training, as one of three focus areas.' }
        ] },
        { kind: 'p', text: 'What we could not confirm: the current Alabama computer science standards document, its adoption year, and whether a computer science credit now counts toward a diploma. Those live on the department\'s site, which returned no answer when we checked. We would rather leave a gap than print a rule we have not read at its source.' }
      ]
    },
    {
      id: 'counts', tint: 'tint', eyebrow: 'The published counts',
      h2: 'From 49% to 95%: Alabama high schools offering computer science',
      intro: 'Access and participation figures from the Code.org (2025) State of AI + CS Education data sheet, plus College Board AP school counts, quoted as published.',
      body: [
        { kind: 'table', caption: 'Share of Alabama public high schools offering computer science, by school year (Code.org, 2025, Access Percent over the Years tab)', head: ['School year', 'Share offering CS'], rows: [
          ['2018 to 2019', '49%'],
          ['2019 to 2020', '57%'],
          ['2020 to 2021', '82%'],
          ['2021 to 2022', '85%'],
          ['2022 to 2023', '95%'],
          ['2023 to 2024', '94.2%'],
          ['2024 to 2025', '91.9%, which the Most Recent Access Data tab gives as 351 of 382 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Alabama, as published', head: ['Measure', 'Alabama', 'Where it comes from'], rows: [
          ['Students enrolled in a CS course, 2023 to 2024', '17,488 of 222,089 high school students, or 7.87%', 'Code.org (2025), Most Recent Participation Data tab; the student total is NCES Fall 2022'],
          ['Enrollment share, 2020 to 2021', '5.5%', 'Code.org (2025), Participation Percent over the Years tab'],
          ['Schools with AP exams, 2023', '306 (251 public)', 'College Board, School Report of AP Exams by State 2023-24'],
          ['Schools with AP exams, 2024', '319 (265 public)', 'College Board, School Report of AP Exams by State 2023-24']
        ] },
        { kind: 'p', text: 'The jump between 2019 to 2020 and 2020 to 2021, from 57% to 82%, is the largest single-year move in Alabama\'s series and lines up with the period after HB216 was signed. Correlation is not proof, and the sheet does not say why access dipped slightly after its 2022 to 2023 peak; a few schools closing, merging or changing their course lists could all move a share by a point or two.' },
        { kind: 'p', text: 'The harder number is enrollment. Even with a course in more than nine of ten high schools, 7.87% of high school students were taking one in 2023 to 2024, and the sheet has no 2024 to 2025 enrollment figure for Alabama yet. Access is the door; enrollment is who walks through it. Suggested citation: Code.org (2025). 2025 State of AI + CS Education. Only individual Alabama cells are reproduced here, never the full sheet.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Cleaning Birmingham\'s park list before trusting a single total',
      intro: 'The City of Birmingham publishes its parks layer as open data under a Creative Commons Attribution licence. Before any chart, students audit it for what is missing, repeated or unexplained.',
      body: [
        { kind: 'table', caption: 'What our audit of the Birmingham City Parks layer found (our counts, from one download on 18 October 2026)', head: ['Check', 'What we found', 'Why it matters'], rows: [
          ['Records in the layer', '130, matching the service\'s own count query', 'A download that silently stops at a page limit gives wrong totals'],
          ['Distinct park names', '120', 'Some parks are stored as several pieces'],
          ['Blank address field', '7 records', 'A blank is honest about being missing'],
          ['Acreage recorded as 0', '8 records, 6 of them pieces of Rotary Trail', 'A zero can quietly mean "not measured"'],
          ['Rows repeating a name and acreage', '10', 'Adding them double counts the same land'],
          ['Coded columns with no labels', 'DEDICATED, MANAGED, PARK_TYPE', 'A 10 or a 20 means nothing without the codebook']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count before you calculate', p: 'Students ask the service how many records exist, then check the download holds all 130. It is a one-line habit that catches truncated files before they mislead anyone.' },
          { h3: '2. Find the quiet gaps', p: 'Blank fields are easy to spot. Zeros are harder: Railroad Park and Henley Park both carry 0 in the acreage column, which is plainly a missing measurement, not an empty park.' },
          { h3: '3. Decide, then document', p: 'Drop repeats, mark zeros as unknown, leave codes uninterpreted. Every choice goes in a short note so another student could repeat the work and get the same answer.' }
        ] },
        { kind: 'callout', h3: 'Two totals, both ours, neither official', p: 'Summing the acreage column as downloaded gives 3,026.67. Dropping the 10 rows that repeat a name and acreage already counted gives 2,815.34. One record alone holds 1,051.74, about 34.7% of the naive total. These are our calculations from one download, not the City of Birmingham\'s published park acreage, and the gap between them is the lesson.' },
        { kind: 'p', text: 'Eighteen records with a real, nonzero acreage are under one acre, which raises a fair question for a follow-up: are those pocket parks, or pieces of larger parks stored separately? The data cannot answer it alone. A student who writes that sentence instead of guessing has learned more about data science than one who produced a tidy chart from untidy rows.' }
      ]
    },
    {
      id: 'appchallenge', tint: '', eyebrow: 'A state competition',
      h2: 'The Alabama Governor\'s App Challenge, as announced for 2025 to 2026',
      intro: 'A statewide programming competition run through Alabama schools, described in the governor\'s office announcement of October 23, 2025.',
      body: [
        { kind: 'table', caption: 'The 2025-2026 Alabama Governor\'s App Challenge, from the announcement', head: ['Rule', 'As announced'], rows: [
          ['Who can enter', 'Students in grades K through 12, regardless of coding experience, who meet the eligibility rules'],
          ['What counts as an entry', 'Computer programs or apps written in any programming language and for any platform'],
          ['Team size', 'Individuals, or teams of up to three members'],
          ['Registration', 'Teachers register students online by January 19, 2026'],
          ['School round', 'Participating schools pick a winner by grade band and send it to the LEA Technology Coordinator by January 30, 2026']
        ] },
        { kind: 'p', text: 'Those dates belong to the 2025 to 2026 cycle and have passed; a new cycle is normally announced through the governor\'s office and schools in the fall, so check the official challenge site for the current year. The structure is what helps when planning: a school-level round first, so a student needs a teacher who registers them, and an app in any language, so a Scratch game, a Python tool or a mobile app can all qualify. We help students design and build their own project; the entry and every line of it stay theirs, and we are not connected with the challenge or the governor\'s office.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Class times',
      h2: 'Central Time, with a twist on the eastern border',
      intro: 'Alabama runs on US Central Time, and our teachers work from India, so the conversion matters.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The official zone', p: 'Alabama sits in US Central time; in the IANA tz files its zone is America/Chicago. We confirm every class slot on that clock.' },
          { h3: 'The informal exception', p: 'The same database\'s notes record that Phenix City, Lanett, Smiths Station and Valley, near the state\'s eastern edge, keep Eastern time by local habit. Families there should tell us which clock they live by.' },
          { h3: 'India time, our arithmetic', p: 'By our calculation, India is 10 hours 30 minutes ahead of Central Daylight Time and 11 hours 30 minutes ahead of Central Standard Time. The next two clock changes fall on the first Sunday of November 2026 (November 1) and the second Sunday of March 2027 (March 14).' }
        ] },
        { kind: 'spec', title: 'A bug worth making on purpose', p: 'A reminder app that stores "UTC minus 6" for a Birmingham student is right all winter and an hour wrong all summer, and wrong all year for a family in Phenix City that keeps Eastern time. Students fix it by storing the zone name, America/Chicago or America/New_York, and letting the tz database do the work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Kindergarten blocks to AP Java, one rung at a time',
    intro: 'Grade bands are rough guides; the free lesson places each student.',
    cols: [
      { band: 'Grades K to 3', h3: 'Ideas before syntax', p: 'Sequences, loops and simple events in blocks, so a young child can explain what their program does.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 4 to 7', h3: 'Games and first apps', p: 'Playable games and small apps, the right size for a first statewide app challenge entry.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Grades 8 to 10', h3: 'Real code, real data', p: 'Python, data cleaning on Alabama open data and full apps with a design and testing plan.', courses: ['data-science-course-for-teens-python-data', 'complete-app-development-masterclass-for-teens'] },
      { band: 'Grades 11 and 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java, or models trained and tested on data the student has cleaned themselves.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why an AI assistant will not clean the Birmingham parks data for you',
    intro: 'It will clean it, quickly. Whether the result is right is a separate question only a person who understands the data can answer.',
    p1: 'Ask an AI tool to total the acreage in the Birmingham parks file and it will happily return a number. It will not, unless told, notice that six pieces of one trail carry zero acres or that one park appears twice. The answer looks finished and is quietly wrong.',
    p2: 'Students who have done the audit by hand have a checklist in their heads for every total they meet, whether a classmate or a model produced it. That judgment is what turns AI from a shortcut into a useful assistant, and it is learned by doing the slow version first.',
    closer: 'Alabama put a computer science course within reach of nearly every high schooler; the edge goes to the students who learn to check an answer, not just generate one.',
    blogAnchor: 'our essay on learning to code when AI writes code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Huntsville to Mobile Bay, the same live classroom',
    intro: 'Online teaching makes the distance between Alabama\'s cities and its rural counties irrelevant.',
    cells: [
      { h3: 'Your timetable', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch by level', p: 'Fifteen to twenty students working at the same stage, drawn from Alabama and other US states, with one teacher leading every session live.' },
      { h3: '1-on-1 by choice', p: 'A single teacher for a single student, useful for AP pacing, competition projects or a student who wants to move faster than any group.' },
      { h3: 'School work stays theirs', p: 'Teachers use US grade levels and can connect lessons to a school course or an app challenge, but graded assignments and competition entries are always the student\'s own.' },
      { h3: 'A free first lesson', p: 'One full lesson with a real task, then an honest recommendation of level and course. No card details are taken at that stage.' },
      { h3: 'What you need', p: 'A laptop or desktop, a microphone and speakers or a headset, and a steady internet connection. Tablets work for the youngest block coders.' }
    ],
    spec: { title: 'Online only, said plainly', p: 'Modern Age Coders teaches live over the internet from India. We have no classroom or office in Alabama and do not claim one, and we are not connected with the Alabama State Department of Education or any district.' }
  },

  fees: {
    h2: 'Fees for Alabama families',
    intro: 'Each figure below is a US dollar amount, and no extra charges appear later.',
    first: 'The opening lesson is free and ends with a suggested level, course and class time.',
    group: 'One month in a level-matched batch of fifteen to twenty students.',
    private: 'One month on the same rhythm with a teacher for one student only.',
    closer: 'A household in Montgomery and one in a small Black Belt town are charged identically, in US dollars. Billing begins once the trial lesson is done and you have said yes to a level and a time; holiday weeks and missed sessions are explained on our pricing page.'
  },

  reviewsH2: 'Families and students on Google',

  book: {
    h2: 'Book a free lesson for an Alabama student',
    intro: 'Tell us the grade and the goal. A first grader might start with a block puzzle, a ninth grader with the Birmingham parks audit, and an eleventh grader with an AP Computer Science A question.',
    success: 'Thank you. Our team will contact you soon about a class for your Alabama student.'
  },

  faq: {
    h2: 'Alabama questions, answered',
    intro: 'The questions Alabama parents and students most often send us.',
    items: [
      { q: 'What does the Computer Science for Alabama Act do?', a: 'According to the governor\'s office in July 2019, HB216 phases in requirements for public schools to offer computer science courses and funds professional learning and certification routes for computer science teachers.' },
      { q: 'How many Alabama high schools offer computer science?', a: 'In the 2025 Code.org data sheet, 351 of 382 Alabama public high schools, or 91.9%, had a computer science course in 2024 to 2025, with the state education agency named as the data source.' },
      { q: 'How many Alabama students actually take computer science?', a: 'The latest published figure is 17,488 of 222,089 high school students, or 7.87%, for 2023 to 2024. The student total behind that share comes from NCES for fall 2022.' },
      { q: 'Does a computer science credit count toward an Alabama diploma?', a: 'We could not confirm the current rule because the Alabama State Department of Education site did not respond when we checked in October 2026. Ask your school counselor for the rule that applies to your student.' },
      { q: 'Can my child enter the Alabama Governor\'s App Challenge?', a: 'The 2025 to 2026 challenge was open to students in grades K through 12, alone or in teams of up to three, with registration through a teacher. Check the official challenge site for the current cycle.' },
      { q: 'Will you build my child\'s app challenge entry?', a: 'No. We teach the skills and help a student plan and debug their own project, but the entry is their work. We are not connected with the challenge organizers.' },
      { q: 'What time zone do you schedule Alabama classes in?', a: 'Central Time, America/Chicago. Families in the few eastern border towns that keep Eastern time by habit should tell us, and we will confirm times on their clock.' },
      { q: 'When can classes take place?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Do you teach in person anywhere in Alabama?', a: 'No. Every class is live online with a teacher in India, and we do not claim any Alabama location. A computer, sound and a reliable connection are all a student needs.' },
      { q: 'Where are the prices?', a: 'The fees section of this page lists the free first lesson, the monthly batch and the monthly 1-on-1 option, all in US dollars, with billing only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More reading for Alabama students and parents',
    html: 'High schoolers comparing options can read <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a> and <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Younger builders preparing an app challenge entry may like <a class="cg-inline-link" href="/how-to-make-a-video-game-for-kids">how to make a video game for kids</a>, and competitive students can scan <a class="cg-inline-link" href="/coding-competitions-for-high-school-students">coding competitions for high school students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Alabama and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'All US pages' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-competitions-for-high-school-students', label: 'High school competitions' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aa .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-aa .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-aa .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-aa .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aa .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-aa .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-aa .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-aa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aa .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-aa .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Alabama, read raw 17 and 18 October 2026. ALSDE unreachable (DNS SERVFAIL, timeout), so no department page is quoted. Office of the Governor: advisory council (September 27, 2017); Governors\' Partnership for K-12 Computer Science (December 4, 2017); Computer Science for Alabama Act HB216 phasing in course offerings, PD funding and certification route (July 26, 2019); 2025-2026 Governor\'s App Challenge rules and dates (October 23, 2025). Code.org (2025) access trend 49% to 95% to 91.9%, 351 of 382; participation 17,488 of 222,089, 7.87% (2023-24). College Board AP schools 306 (2023), 319 (2024). IANA America/Chicago and the Phenix City Eastern-time comment.',
    localProject: 'City of Birmingham City Parks feature layer (CityofBirminghamGIS), listed on the city open data portal under Creative Commons Attribution, downloaded 18 October 2026: 130 records (count query 130), 120 distinct names, 7 blank address fields (counted only), 8 zero-acreage records (6 Rotary Trail pieces), 10 repeated name and acreage rows; our sums 3,026.67 naive and 2,815.34 after dropping repeats; largest record 1,051.74 (34.7%); 18 nonzero under one acre; unlabelled codes. Lesson family: missing and disguised-missing values.',
    requiredMentions: [
      'Computer Science for Alabama Act (HB216)',
      'September 27, 2017',
      'Governors\' Partnership for K-12 Computer Science',
      '351 of 382',
      '17,488 of 222,089',
      '306 (251 public)',
      'teams of up to three members',
      'January 19, 2026',
      'Phenix City, Lanett, Smiths Station and Valley',
      '2,815.34',
      '3,026.67'
    ],
    sources: [
      { claim: 'Office of the Governor: Governor\'s Advisory Council for Computer Science Education, 27 September 2017.', url: 'https://governor.alabama.gov/newsroom/2017/09/governor-ivey-creates-computer-science-education-advisory-council/' },
      { claim: 'Office of the Governor: Governors\' Partnership for K-12 Computer Science, 4 December 2017.', url: 'https://governor.alabama.gov/newsroom/2017/12/governor-ivey-joins-bipartisan-effort-to-provide-opportunities-for-computer-science-education-in-alabama/' },
      { claim: 'Office of the Governor: Computer Science for Alabama Act (HB216), 26 July 2019.', url: 'https://governor.alabama.gov/newsroom/2019/07/two-years-of-governor-iveys-strong-start-strong-finish-education-initiative-groundwork-laid-implementing-policy/' },
      { claim: 'Office of the Governor: 2025-2026 Alabama Governor\'s App Challenge, 23 October 2025.', url: 'https://governor.alabama.gov/newsroom/2025/10/governor-ivey-invites-alabama-students-to-participate-in-the-alabama-governors-app-challenge/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Alabama access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Birmingham: City Parks feature layer and the open data package licence.', url: 'https://data.birminghamal.gov/dataset/birmingham-city-parks-maps' },
      { claim: 'IANA tzdb northamerica: America/Chicago, Alabama Eastern-time towns comment, US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Alabama CS standards, their adoption year and any CS graduation credit rule: the ALSDE site (alabamaachieves.org, alsde.edu) did not resolve on 17 or 18 October 2026, so nothing is printed from it.',
      'Code.org graduating-senior, gender and race figures and the Code.org state summary text: not used (outside the Access and Participation tabs).',
      'A 2024-25 Alabama participation figure: the sheet has none; only the 2023-24 value is printed.',
      'Jobs and salary figures in the 2017 press release: not used (no job or salary claims).',
      'The name of the HB216 sponsor and other individuals: not needed; the law is cited by bill number.',
      'Official Birmingham park acreage: not read; only our sums from one download are printed, labelled as ours, and no address is printed.',
      'Meanings of the DEDICATED, MANAGED and PARK_TYPE codes: no codebook found, so they are left uninterpreted.',
      'Any affiliation with ALSDE, the Office of the Governor, the App Challenge, the City of Birmingham, Code.org or the College Board.'
    ]
  }
};
