'use strict';
// New Hampshire (cg- state page, US cluster Phase 4, row 89). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: almost every New Hampshire high school in Code.org's count offers computer science, but the count comes from
// course catalogs and teacher surveys and no enrollment figure is published, so what can a family actually verify,
// and what should they ask their school? Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-new-hampshire/):
//  - NH Department of Education, www.education.nh.gov: home page and sitemap returned 403 "Access Denied" (Akamai
//    edge) to curl; per the brief we stopped for that host. NH General Court statute pages (gencourt.state.nh.us and
//    gc.nh.gov, RSA 193-E:2-a) also returned 403 "Web Page Blocked". No NH rule, standard or requirement is therefore
//    stated on this page (saved: nh-doe-home-403.html, rsa-193-E-2-a.html).
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): NH access 49%
//    (2018-19), 67%, 78%, 82%, 81%, 94.8% (2023-24), 93.7% (2024-25); most recent 2024-2025, 89 of 95 high schools,
//    primary data source "School Course Catalogs and Teacher Surveys"; participation tabs: "-" in every year, and "-"
//    for the most recent enrollment counts.
//  - College Board, School Report of AP Exams by State 2023-24: NH total AP schools 108 (2023), 108 (2024); public 81,
//    81; non-public 27, 27.
//  - IANA tzdb northamerica: New Hampshire listed under "US eastern time, represented by New York"; comment from Dave
//    Cantor (2004-11-02) that a Mount Washington Observatory staff member said the station "was on Eastern Standard
//    Time and didn't change their clocks for Daylight Saving"; US rule gives November 1, 2026 and March 14, 2027.
//  - NH Recreational Trails (NH GRANIT, nhgeodata.unh.edu CSD_RecreationResources/FeatureServer/2), attributes
//    downloaded 17 October 2026: 15,791 segment records. Licence/use text: "an approximation of recreational trails
//    for planning use only", "Coverage and attributes should not be construed as complete". OUR set results: 6,364
//    distinct raw trailname values, 6,306 after trimming and upper-casing; blank name on 3,413 segments; 255 distinct
//    towns; county values include "(Maine)", "(Vermont)" and "ALBANY"; hiking flag has 5 distinct values (Y, N, NA,
//    UNKNOWN, blank); among named trails (case-folded): hiking Y 3,547, cross-country ski Y 817, mountain bike Y 886,
//    hiking and ski 726, ski not hiking 91, hiking or ski 3,638, all three 437; 831 names occur in more than one town;
//    CONNECTICUT RIVER PADDLERS' TRAIL 26 towns, CONNECTOR TRL 25, BLUE TRL 24, RED TRL 20.
// Lesson family: sets and distinct values (union, intersection, difference, normalising before deduplicating).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NEW HAMPSHIRE', label: 'New Hampshire', blurb: 'Coding and AI for New Hampshire students: what the published access figures show and a sets project on the state trail inventory.' },
  market: US,
  slug: 'coding-and-ai-classes-in-new-hampshire',
  code: 'anh',
  accent: '#225680',
  accentRationale: 'New Hampshire: #225680, a lake-water blue allocated for row 89 in alloc.tsv, clear of the North Carolina green and the nearby New England accents, with AA contrast on all paper tones',
  pageType: 'city',
  place: {
    name: 'New Hampshire',
    eyebrow: 'New Hampshire, United States',
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
  routeLabel: 'New Hampshire',
  title: 'Coding and AI Classes in New Hampshire | Live Online',
  description: 'Live online coding and AI classes for New Hampshire students, with the published high school access figures, AP school counts and a Python trail data project.',
  ogDescription: '89 of 95 New Hampshire high schools offered computer science in 2024 to 2025, by catalog and survey count. What that means, what to ask, and live online classes.',
  twitterDescription: 'New Hampshire coding and AI classes, live online, with a GRANIT trail data project.',
  ogImageCourse: 'mysql-mastery-for-teens',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for New Hampshire Students',
    description: 'Scratch, Python, SQL, AP Computer Science Principles and AI for New Hampshire students from elementary school through grade 12, taught live online in English.'
  },

  h1: 'Coding and AI classes in New Hampshire',
  capsuleQ: 'How many New Hampshire high schools offer computer science?',
  capsule: 'Nearly all of them in the latest count: Code.org (2025) reports 89 of 95 New Hampshire high schools, or 93.7%, offering computer science in 2024 to 2025, up from 49% in 2018 to 2019. No enrollment figure is published for the state. Modern Age Coders adds live online classes for New Hampshire students, from Scratch in elementary school to SQL and AP Computer Science Principles.',
  lead: 'On paper, New Hampshire is close to the top of the access charts. In six school years the published share of high schools offering computer science nearly doubled, and in 2023 to 2024 it touched 94.8%. Two details make that picture less simple than it looks. The figures come from school course catalogs and teacher surveys rather than from state enrollment records, and no published number says how many New Hampshire students actually sat in those classes. This page walks through what the access data shows and what it leaves out, gives a short list of questions to put to a high school, explains a set-operations project on the state&rsquo;s own trail inventory, and describes how our live online classes fit around a New Hampshire school week.',
  wa: 'Hello Modern Age Coders, we are in New Hampshire and would like a free coding or AI lesson for our child.',

  picks: {
    eyebrow: 'Course picks for New Hampshire',
    h2: 'Four courses for New Hampshire students, by stage',
    intro: 'Pick by age and interest; the free first lesson checks the level before any course begins.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Scratch from the first sprite to finished games, with loops, events and variables explained as the child builds.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 8', note: 'Python through turtle art, small games and simple AI ideas, the bridge from blocks to typed code.' },
      { course: 'mysql-mastery-for-teens', band: 'Grades 9 to 12', note: 'SQL from SELECT to joins, where DISTINCT, UNION and INTERSECT turn the set logic of the trail project into queries.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, including the Create performance task and the end-of-course exam.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: '', eyebrow: 'The published numbers',
      h2: 'From 49% to 93.7%: New Hampshire high schools offering computer science',
      intro: 'The state&rsquo;s access trend as Code.org publishes it in its 2025 State of AI + CS Education data, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'New Hampshire high schools offering computer science, each school year, Code.org (2025)', head: ['School year', 'Published share'], rows: [
          ['2018 to 2019', '49%'],
          ['2019 to 2020', '67%'],
          ['2020 to 2021', '78%'],
          ['2021 to 2022', '82%'],
          ['2022 to 2023', '81%'],
          ['2023 to 2024', '94.8%'],
          ['2024 to 2025', '93.7%, 89 of 95 high schools']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How it was counted', p: 'Code.org lists the primary source for the New Hampshire figure as school course catalogs and teacher surveys, not a state education agency data return.' },
          { h3: 'The six schools', p: 'In 2024 to 2025, six of the 95 high schools in the count were not recorded as offering a course. The data does not name them and neither do we.' },
          { h3: 'The missing column', p: 'Every year of the participation tab is blank for New Hampshire, so there is no published count of how many high schoolers took computer science.' }
        ] },
        { kind: 'p', text: 'A catalog listing proves a course exists on paper. It does not prove the course ran that year, how many sections it had, or whether it was introductory or advanced. That is why a near-universal access figure can sit alongside families who tell us their student could not fit the only computer science section into a timetable already full of required classes.' },
        { kind: 'callout', h3: 'Source for this table', p: 'Code.org (2025). 2025 State of AI + CS Education. Single New Hampshire values are quoted from its Access and Participation tabs; we do not republish the dataset.' }
      ]
    },
    {
      id: 'ap', tint: 'deep', eyebrow: 'AP in New Hampshire',
      h2: 'Schools giving AP exams, and what that count does and does not say',
      intro: 'The College Board&rsquo;s state-by-state school report counts schools where students sat at least one AP exam, across every AP subject.',
      body: [
        { kind: 'table', caption: 'New Hampshire schools with AP exams (College Board, School Report of AP Exams by State, 2023-24)', head: ['Year', 'All schools', 'Public', 'Non-public'], rows: [
          ['2023', '108', '81', '27'],
          ['2024', '108', '81', '27']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Flat on both lines', p: 'The total, the public count and the non-public count were identical in 2023 and 2024, which is unusual in a report where most states move by a few schools each year.' },
          { h3: 'All subjects, not just CS', p: 'A school appears here if students took any AP exam, so this is a ceiling on where AP computer science could be tested, not a count of where it was.' },
          { h3: 'More schools than the CS count', p: 'The AP report covers 108 schools while the access count covers 95 high schools, because it includes non-public schools and uses its own rules.' }
        ] },
        { kind: 'p', text: 'For a New Hampshire student aiming at AP Computer Science Principles or AP Computer Science A, the practical question is simpler than either dataset: does my school offer the course and the exam this year, and if not, can I sit the exam elsewhere? Our AP classes follow the College Board course framework so that a student preparing outside school is ready either way.' }
      ]
    },
    {
      id: 'ask', tint: 'tint', eyebrow: 'What to ask',
      h2: 'Five questions for a New Hampshire high school counselor',
      intro: 'We could not read the state department&rsquo;s own pages on the day this page was checked, so here is our checklist for getting the answers from the school itself. The questions are ours.',
      body: [
        { kind: 'table', caption: 'Our checklist for New Hampshire families (not official guidance)', head: ['Question', 'Why it matters'], rows: [
          ['Which computer science courses run this year, not just appear in the catalog?', 'The access figure is built from catalogs and surveys, so a listed course may not have run'],
          ['Does a computer science course count toward any graduation credit here?', 'Credit rules are set and explained by the state and the district; ask for the written policy'],
          ['Is AP Computer Science Principles or A offered, and is the exam given on site?', 'The AP report counts schools by any AP exam, not by subject'],
          ['Can a student take an approved online course if the timetable clashes?', 'Many districts allow it; the counselor knows which providers are approved'],
          ['Is there a club, competition team or capstone that uses coding?', 'Projects outside class are often where students go deepest']
        ] },
        { kind: 'callout', h3: 'Why the state rules are not on this page', p: 'On 17 October 2026 the New Hampshire Department of Education website and the state legislature&rsquo;s statute pages both refused our automated requests with an access-denied response. We do not repeat rules we could not read at the source, so this page states no New Hampshire requirement, standard or adoption date. Check the department&rsquo;s site directly for those.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many trails can you hike and ski? Sets on the NH GRANIT trail inventory',
      intro: 'NH GRANIT, the state&rsquo;s geographic data clearinghouse, publishes NH Recreational Trails as open data. Its attribute table is a natural first lesson in sets: distinct values, unions, intersections and differences.',
      body: [
        { kind: 'table', caption: 'Set results on named trails, case-folded (our calculation from NH Recreational Trails, downloaded 17 October 2026)', head: ['Set expression', 'Meaning', 'Distinct trail names'], rows: [
          ['H', 'Trails with a hiking segment marked Y', '3,547'],
          ['S', 'Trails with a cross-country ski segment marked Y', '817'],
          ['B', 'Trails with a mountain bike segment marked Y', '886'],
          ['H &amp; S', 'Hike and ski', '726'],
          ['S - H', 'Ski but never marked for hiking', '91'],
          ['H | S', 'Hike or ski', '3,638'],
          ['H &amp; S &amp; B', 'All three activities', '437']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count distinct', p: 'The layer has 15,791 segment records but 6,364 different trail names. Trimming spaces and upper-casing cuts that to 6,306, the first lesson in why you normalise before you deduplicate.' },
          { h3: '2. Inspect a flag', p: 'The hiking column holds five distinct values, not two: Y, N, NA, UNKNOWN and a blank. Students decide which ones mean yes before building any set.' },
          { h3: '3. Combine sets', p: 'With Python sets, hiking &amp; ski and ski minus hiking are one line each. The table above is the result; checking that 3,547 + 817 - 726 = 3,638 proves the union.' }
        ] },
        { kind: 'callout', h3: 'A name is not a trail', p: 'There are 831 named trails that appear in more than one town, and some are not one trail at all: BLUE TRL turns up in 24 towns and RED TRL in 20. Blank names cover 3,413 segments. The counts above are ours, from one download, and the data publisher describes the layer as an approximation for planning use only whose coverage should not be treated as complete.' },
        { kind: 'p', text: 'One more distinct-values surprise makes a good discussion: the county column lists the ten New Hampshire counties plus (Maine), (Vermont) and ALBANY, which is a town rather than a county. Spotting values that do not belong to the set you expected is a skill students use in every data project afterwards, and in SQL it becomes a SELECT DISTINCT query.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time for the Granite State',
      intro: 'The IANA time zone database lists New Hampshire under US eastern time, the America/New_York zone, and our teachers work from India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer and winter gaps', p: 'India is 9 hours 30 minutes ahead of New Hampshire during daylight saving time and 10 hours 30 minutes ahead in standard time.' },
          { h3: 'This year&rsquo;s changes', p: 'Clocks go back on November 1, 2026 and forward on March 14, 2027; every class time is written down in Eastern Time.' },
          { h3: 'Fitted to the week', p: 'Classes are placed after the school day, around sports seasons and before homework, then fixed in writing.' }
        ] },
        { kind: 'spec', title: 'The summit that kept one clock', p: 'A 2004 comment in the IANA database records a Mount Washington Observatory staff member saying the station stayed on Eastern Standard Time without changing clocks for daylight saving. Students model that as a fixed UTC offset beside America/New_York and watch the two drift apart on November 1, 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Scratch sprite to SQL and AP',
    intro: 'Grade bands are a guide; the free lesson finds the real starting point.',
    cols: [
      { band: 'Grades K to 3', h3: 'Logic through play', p: 'Blocks, sequences and simple loops, with stories and games the child can explain to a parent.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 6', h3: 'Toward typed code', p: 'Python turtle drawings and small games, plus Minecraft coding for students who learn best by building worlds.', courses: ['python-ai-kids-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 7 to 9', h3: 'Real programs and pages', p: 'Python with files, lists and sets, and first websites styled by hand.', courses: ['python-complete-masterclass-teens', 'frontend-development-masterclass-for-teens'] },
      { band: 'Grades 10 to 12', h3: 'Data, databases and AP', p: 'SQL on real datasets and AP Computer Science Principles, with the trail project as a portfolio piece.', courses: ['mysql-mastery-for-teens', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why a New Hampshire student who can code checks the AI&rsquo;s count',
    intro: 'A distinct-count question is easy to ask an AI tool and easy for it to get wrong.',
    p1: 'Ask a chatbot how many trails in New Hampshire allow both hiking and skiing and it will produce a tidy number. It cannot know that the state layer has five versions of yes and no, a few hundred names that differ only in capitals, and thousands of unnamed segments. A student who built the sets can.',
    p2: 'That is the practical meaning of AI literacy: knowing which assumptions sit under an answer. Students who have cleaned and combined the data themselves can read an AI response, see what it must have assumed, and test it, rather than copying the figure into a report.',
    closer: 'High schools across New Hampshire list computer science; the habit worth building on top is questioning a count before trusting it.',
    blogAnchor: 'should students still learn to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Seacoast to the North Country, the same live lesson',
    intro: 'New Hampshire towns can be an hour apart over mountain roads, and an online class makes that distance irrelevant.',
    cells: [
      { h3: 'From any town', p: 'A student in Nashua and one in Berlin share one teacher in real time, each at a desk at home.' },
      { h3: 'Fits the school year', p: 'Teachers work in US grades and plan around New Hampshire school calendars. Any work a school marks stays the student&rsquo;s own.' },
      { h3: 'First lesson free', p: 'A real lesson with a teacher, then a written suggestion for course, level and time. We never ask for card details here.' },
      { h3: 'Level-matched groups', p: 'Batches of fifteen to twenty learners, grouped by stage rather than age, from New Hampshire and beyond.' },
      { h3: 'Private lessons', p: 'One teacher for one student, for AP work, SQL projects or simply a faster pace.' },
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Taught online from India', p: 'All teaching is live over video. Modern Age Coders has no center in New Hampshire and claims none. A computer, a headset and a stable connection are enough.' }
  },

  fees: {
    h2: 'Fees for New Hampshire families',
    intro: 'A free lesson, then a choice of two monthly plans.',
    first: 'One whole lesson free, with a recommended level, course and time afterwards.',
    group: 'Monthly live classes in a level-matched batch of fifteen to twenty.',
    private: 'Monthly one-to-one classes with your own teacher.',
    closer: 'Every US family pays one rate in US dollars, from Portsmouth to Littleton. Nothing is billed before the free lesson or before you agree to a course and time; see the pricing page for missed classes and holidays.'
  },

  reviewsH2: 'What families have said on Google',

  book: {
    h2: 'Ask for a free lesson for a New Hampshire student',
    intro: 'Tell us the grade and what they enjoy. A third grader might start with a Scratch game, a sixth grader with Python turtle art, and a high schooler with the trail sets project.',
    success: 'Thank you. We will contact you soon about a class for your New Hampshire student.'
  },

  faq: {
    h2: 'New Hampshire coding and AI questions',
    intro: 'Common questions from New Hampshire parents and students.',
    items: [
      { q: 'How many New Hampshire high schools offer computer science?', a: 'Code.org (2025) reports 89 of 95, or 93.7%, in 2024 to 2025, counted from school course catalogs and teacher surveys.' },
      { q: 'How has New Hampshire access changed?', a: 'The published share rose from 49% in 2018 to 2019 to 94.8% in 2023 to 2024, then 93.7% in 2024 to 2025.' },
      { q: 'How many New Hampshire students take computer science?', a: 'No figure is published. Code.org\'s participation data is blank for New Hampshire in every year, so we do not estimate one.' },
      { q: 'Is computer science a graduation requirement in New Hampshire?', a: 'We could not verify it: the New Hampshire Department of Education site refused our requests on 17 October 2026. Ask your school counselor for the written district and state policy.' },
      { q: 'How many New Hampshire schools give AP exams?', a: 'The College Board reports 108 schools with AP exams in both 2023 and 2024, 81 public and 27 non-public, across all AP subjects.' },
      { q: 'What time are classes for New Hampshire?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. New Hampshire is on Eastern Time, and we confirm every time in it.' },
      { q: 'Can online classes replace a school computer science course?', a: 'No. School credit comes from courses your district approves. Our classes add depth and projects beside them, and graded school work stays the student\'s own.' },
      { q: 'What does the trail project teach?', a: 'Sets. Using the 15,791 records in the NH GRANIT trail layer, students count distinct names, then find trails marked for hiking and skiing with intersections, unions and differences.' },
      { q: 'Is there a class for a student who already knows Python?', a: 'Yes. Teens who know Python can move to SQL, where the same set ideas become DISTINCT, UNION and INTERSECT, or to AP Computer Science Principles.' },
      { q: 'Do you have a location in New Hampshire?', a: 'No. Teaching is live online from India, so students anywhere from Keene to Conway join the same way.' }
    ]
  },

  next: {
    eyebrow: 'More for US students',
    h2: 'Where New Hampshire students go from here',
    html: 'Younger students can browse <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>; older ones can read <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a> and <a class="cg-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>. Competitive programmers have <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>, and families curious how another state wrote computer science into law can read about <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>.',
    waLabel: 'Send us a WhatsApp message'
  },

  footerHeading: 'New Hampshire and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-anh .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-anh .cg-hero h1 { font-weight: 680; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-anh .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-anh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 620; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-anh .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.008em; }
.cg-root.cg-anh .cg-grid-3 { gap: clamp(0.85rem, 2.4vw, 2rem); }
.cg-root.cg-anh .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-anh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-anh .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'New Hampshire, read 17 October 2026: NH Department of Education (www.education.nh.gov) returned 403 Access Denied, and the NH General Court statute pages (gencourt.state.nh.us, gc.nh.gov) returned 403, so no state rule, standard or adoption date is stated. Remaining verified facts: Code.org (2025) access 49% (2018-19), 67%, 78%, 82%, 81%, 94.8% (2023-24), 93.7% (2024-25), 89 of 95 high schools, source School Course Catalogs and Teacher Surveys, participation not published; College Board AP schools 108 (2023) and 108 (2024), public 81, non-public 27; IANA tzdb lists New Hampshire under America/New_York, with the 2004 Mount Washington Observatory comment.',
    localProject: 'NH Recreational Trails (NH GRANIT, nhgeodata.unh.edu), attributes downloaded 17 October 2026: 15,791 segment records; 6,364 distinct names, 6,306 after trimming and case-folding; 3,413 blank-name segments; 255 towns; county values include (Maine), (Vermont) and ALBANY; hiking flag with 5 distinct values; our sets on named trails: hiking 3,547, ski 817, bike 886, hiking and ski 726, ski not hiking 91, union 3,638, all three 437; 831 names in more than one town (BLUE TRL 24 towns, RED TRL 20), labelled as ours. Lesson family: sets and distinct values.',
    requiredMentions: [
      '89 of 95', 
      '49% in 2018 to 2019',
      '94.8%',
      '108 schools with AP exams',
      '81 public and 27 non-public',
      'Mount Washington Observatory',
      '15,791', 
      '3,638',
      'BLUE TRL'],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: New Hampshire access trend, 89 of 95, data source, blank participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'NH GRANIT: NH Recreational Trails feature service and its use statement.', url: 'https://nhgeodata.unh.edu/hosting/rest/services/Hosted/CSD_RecreationResources/FeatureServer/2' },
      { claim: 'IANA tzdb northamerica: New Hampshire on US eastern time, Mount Washington comment, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'New Hampshire Department of Education: returned 403 on 17 October 2026; cited so readers can check rules directly.', url: 'https://www.education.nh.gov/' }
    ],
    rejectedClaims: [
      'Any New Hampshire CS graduation requirement, CS standard, adoption year or required offering: not stated; the NH Department of Education and NH General Court sites returned 403 and were not retried around.',
      'Code.org policy flags and state advocacy page text for New Hampshire: not used as a source for state rules.',
      'A New Hampshire CS enrollment estimate: refused; Code.org publishes none.',
      'Code.org size, urban, rural, gender and ethnicity figures: not used.',
      'Comparing the AP school count with the access count as if one were a subset of the other: refused; different populations and rules.',
      'Official trail counts or lengths: not read; only our set results from one download, labelled as ours.',
      'Names of individual New Hampshire schools: not needed; counts only.',
      'Any affiliation with the NH Department of Education, NH GRANIT, Code.org or the College Board.'
    ]
  }
};
