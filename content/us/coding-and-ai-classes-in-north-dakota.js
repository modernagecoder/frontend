'use strict';
// North Dakota (cg- state page, US cluster Phase 4, row 92). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: North Dakota treats cybersecurity as a partner of computer science in law, standards and graduation, so what
// does HB 1398 require and when, what do the May 2025 standards add (AI included), and what do the published figures
// say, given that North Dakota's count includes cybersecurity? Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-north-dakota/):
//  - NDDPI, Bill Breakdown HB 1398 (Computer Science and Cybersecurity), v1.0, 26 April 2023 (PDF on nd.gov/dpi):
//    NDCC 15.1-21-01 elementary and middle schools provide instruction in computer science including cybersecurity;
//    NDCC 15.1-21-02 high schools provide instruction in or make available one unit of computer science or
//    cybersecurity; both from 2023-2024; CS and cybersecurity integration plan approved by the school board from
//    2024-2025; NDCC 15.1-21-02.2 graduation: through July 31, 2025 a unit may satisfy one of three science
//    requirements; after July 31, 2025 students are required to take one unit of computer science or cybersecurity,
//    which may satisfy one of three science requirements, waived if the student completed the integration plan; in
//    effect 2025-2026; previously one unit of CS could satisfy one of three math requirements; adult course grants
//    Jul 01, 2023 to Jun 30, 2025. (PDF text drops ligatures, so these are paraphrased, not quoted.)
//  - NDDPI, Computer Science and Cybersecurity page: "The North Dakota 68th Legislative Assembly (2023)" amended
//    15.1-21-01, 15.1-21-02 and 15.1-21-02.2; integration plan text incl. "a single exposure in the upper grades is
//    not sufficient", "Schools may choose to require an approved CSC course", Library Media Specialist example,
//    transfer-student question.
//  - NDDPI, Computer Science & Cybersecurity content standards page: standards revised, "fully implement the new
//    standards in 2026-2027"; crosswalk between 2025 and 2019 standards.
//  - NDDPI, Computer Science and Cybersecurity Content Standards K-12, May 2025 (PDF): committee began "July 2024",
//    completed "May 2025", "five multi-day sessions"; five concepts Computing Devices and Systems, Algorithms and
//    Computational Thinking, Impacts of Computing, Digital Citizenship, Security; grade level K-8, spans 9-10 and
//    11-12; code "2.NI.1"; "K.NI.3 Understand that while AI may respond like a human, it is a machine."; 9-10.NI.3
//    generative AI models; State Superintendent's foreword: "one of the first states in the nation to require all
//    students to learn computer science and cybersecurity throughout their K-12 experience".
//  - Code.org (2025) raw sheet (Access and Participation tabs only): row "ND**", 75% (2022-23), 84.09% (2023-24);
//    footnote: North Dakota "is the only state with a computer science and cybersecurity graduation requirement. For
//    this page, we include cybersecurity."; most recent 2023-2024, 148 of 176, "State Education Agency"; participation
//    16.07% (2023-24), 5,492 of 34,185 (denominator NCES Digest Table 203.04, Fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: ND 44 (2023), 47 (2024); public 35, 41; non-public 9, 6.
//  - IANA tzdb northamerica and zone.tab: eastern North Dakota on America/Chicago, southwestern North Dakota on
//    America/Denver; America/North_Dakota/Center (Oliver County, mountain to central 1992-10-25),
//    America/North_Dakota/New_Salem (Morton County 2003-10-26, except around Mandan), America/North_Dakota/Beulah
//    (Mercer County, Nov. 7, 2010); US rule gives November 1, 2026 and March 14, 2027.
//  - NDGISHUB Landmarks NDDOT feature service (State of North Dakota GIS hub), downloaded 17 October 2026: 104,829
//    records, 223 FEATURE_DESC values (server group-by). Licence text: compiled "according to conventional
//    cartographic standards", "not intended to constitute final or formal publication", no guarantee of freedom from
//    errors. OUR seeded sample (Python random.Random(2026), first 100, 400, 1600 of a 1,600-record sample): Farm Unit
//    full 33,904 (32.34%), sample 30.00%, 31.50%, 33.25%; Wind Turbine full 1,218 (1.16%), sample 0.00%, 1.25%, 1.38%;
//    Grain Elevator full 182 (0.17%), sample 0, 0, 0.19%. Only these neutral categories are printed.
// Lesson family: random sampling versus the full count (estimation error, rare categories).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NORTH DAKOTA', label: 'North Dakota', blurb: 'Coding, cybersecurity and AI for North Dakota students under HB 1398, with a sampling project on the state landmark dataset.' },
  market: US,
  slug: 'coding-and-ai-classes-in-north-dakota',
  code: 'and',
  accent: '#803248',
  accentRationale: 'North Dakota: #803248, a muted prairie-rose wine allocated for row 92 in alloc.tsv, well apart from the North Carolina green and the neighbouring state accents, with AA contrast on every paper tone',
  pageType: 'city',
  place: {
    name: 'North Dakota',
    eyebrow: 'North Dakota, United States',
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
  routeLabel: 'North Dakota',
  title: 'Coding, Cyber and AI Classes in North Dakota | Live Online',
  description: 'Live online coding, cybersecurity and AI classes for North Dakota students, with the HB 1398 graduation unit, the May 2025 standards and two time zones explained.',
  ogDescription: 'North Dakota students now need a unit of computer science or cybersecurity to graduate. The law, the 2025 standards, the published figures, and live online classes.',
  twitterDescription: 'North Dakota coding, cyber and AI classes, live online, built around HB 1398.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Cybersecurity and AI Classes for North Dakota Students',
    description: 'Computer science, cybersecurity, Python and AI literacy for North Dakota students from kindergarten to grade 12, taught live online in English.'
  },

  h1: 'Coding, cybersecurity and AI classes in North Dakota',
  capsuleQ: 'Is computer science a graduation requirement in North Dakota?',
  capsule: 'Yes, with cybersecurity as an equal option. After HB 1398, passed by the 68th Legislative Assembly in 2023, students graduating after July 31, 2025 take one unit of computer science or cybersecurity, which can count as one of their three science units, unless they completed their school&rsquo;s integration plan. Modern Age Coders teaches both subjects live online, from kindergarten AI literacy to picoCTF practice.',
  lead: 'Most states that write computer science into law treat it alone. North Dakota pairs it with cybersecurity at every level: in the century code that approves schools, in the content standards the department rewrote in 2025, and in the unit a student needs to graduate. The pairing changes what a class should look like. A ninth grader in Fargo or Minot is expected to understand how a network moves data and how that same network is attacked and defended. This page lays out HB 1398 year by year as the Department of Public Instruction (NDDPI) summarizes it, explains the May 2025 standards and how they bring artificial intelligence in from kindergarten, reads the published access figures with the caveat they need, and shows a sampling project on a North Dakota dataset of more than a hundred thousand mapped landmarks.',
  wa: 'Hello Modern Age Coders, we live in North Dakota and would like a free coding or cybersecurity lesson for our student.',

  picks: {
    eyebrow: 'Course picks for North Dakota',
    h2: 'Four routes that cover both halves of the requirement',
    intro: 'Cybersecurity sits beside programming here, as it does in North Dakota law. The free lesson settles the right level first.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Grades 3 to 8', note: 'What AI is and is not, in the spirit of the kindergarten standard that a machine can sound human without being one.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Programming foundations for the computer science route, ending with the landmark sampling project in Python.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Defensive, white-hat security: networks, passwords, threats and safe habits, matching the cybersecurity route of HB 1398.' },
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', band: 'Grades 9 to 12', note: 'Capture-the-flag and CyberPatriot practice for students who want to test their security skills in competition.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'HB 1398',
      h2: 'North Dakota&rsquo;s computer science and cybersecurity law, year by year',
      intro: 'NDDPI published a Bill Breakdown of HB 1398 on 26 April 2023, and its current Computer Science and Cybersecurity page names the sections the 68th Legislative Assembly amended. We read both on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'HB 1398 changes to the North Dakota Century Code, as summarized by NDDPI', head: ['Section', 'What changed', 'From'], rows: [
          ['NDCC 15.1-21-01', 'To be approved, elementary and middle schools provide instruction in computer science, including cybersecurity', '2023 to 2024'],
          ['NDCC 15.1-21-02', 'To be approved, high schools provide instruction in, or make available, one unit of computer science or cybersecurity', '2023 to 2024'],
          ['Integration plan', 'Elementary, middle and high schools develop a computer science and cybersecurity integration plan approved by the school board', '2024 to 2025'],
          ['NDCC 15.1-21-02.2, through July 31, 2025', 'One unit of computer science or cybersecurity may satisfy one of the three science requirements', '2023 to 2024'],
          ['NDCC 15.1-21-02.2, after July 31, 2025', 'Students are required to take one unit of computer science or cybersecurity, which may satisfy one of the three science requirements', '2025 to 2026'],
          ['New section of 15.1-26', 'NDDPI grants for computer operations and cybersecurity courses for adults', 'July 1, 2023 to June 30, 2025']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The waiver', p: 'NDDPI&rsquo;s breakdown says the graduation unit is waived for a student who has completed the school&rsquo;s computer science and cybersecurity integration plan, so the plan is a second route to the same goal.' },
          { h3: 'From math to science', p: 'Before HB 1398, the breakdown notes, one unit of computer science could stand in for one of three math requirements. The new law moves the substitution to science.' },
          { h3: 'Either subject counts', p: 'A unit of cybersecurity meets the requirement just as a unit of computer science does. Families can choose the route that suits the student rather than the one a neighboring state would pick.' }
        ] },
        { kind: 'p', text: 'The department&rsquo;s guidance on integration plans argues that a single exposure in the upper grades is not sufficient to build a foundation, and asks schools to map the standards across every grade. Schools may choose to require an approved course as part of the plan, or have a qualified staff member, such as a licensed library media specialist, help classroom teachers deliver the standards. One question NDDPI tells schools to answer is what happens to a student who transfers in during eleventh grade after everyone else took the ninth grade course.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'The May 2025 standards',
      h2: 'Five concepts, written grade by grade, with AI from kindergarten',
      intro: 'NDDPI&rsquo;s committee began in July 2024 and finished the revised Computer Science and Cybersecurity Content Standards in May 2025, after five multi-day sessions. The department asks schools to fully implement them in 2026 to 2027.',
      body: [
        { kind: 'table', caption: 'The five concepts of the 2025 North Dakota Computer Science and Cybersecurity Content Standards, and where our classes meet them (right column ours)', head: ['Concept', 'Sample sub-concepts in the standard', 'In our classes'], rows: [
          ['Computing Devices and Systems', 'Networks and Internet, Hardware and Software, Artificial Intelligence', 'How a program runs, then how devices talk over a network'],
          ['Algorithms and Computational Thinking', 'Step-by-step solutions, patterns, programs', 'Every coding course, from blocks to Python and Java'],
          ['Impacts of Computing', 'Ethical use, technological impacts, impacts of AI', 'A who-does-this-affect discussion in every AI unit'],
          ['Digital Citizenship', 'Balancing media use, responsible online behavior', 'Account safety and source checking in kids classes'],
          ['Security', 'Protecting networks, devices and data', 'The defensive cybersecurity course and CTF practice']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade by grade to eighth', p: 'Kindergarten through grade 8 each have their own standards; high school is written in two spans, grades 9-10 and 11-12. A code such as 2.NI.1 means grade 2, Networks and Internet, standard 1.' },
          { h3: 'AI starts at five', p: 'The first AI standard is for kindergarten: K.NI.3 Understand that while AI may respond like a human, it is a machine. By 9-10.NI.3, students explain how generative AI models process inputs and produce outputs.' },
          { h3: 'No device required', p: 'The committee wrote the standards so that districts are not required to use any specific hardware or software, which keeps them workable in large and very small districts alike.' }
        ] },
        { kind: 'callout', h3: 'In the department&rsquo;s words', p: 'The State Superintendent&rsquo;s foreword to the May 2025 standards describes North Dakota as one of the first states in the nation to require all students to learn computer science and cybersecurity throughout their K-12 experience. We quote that as the department&rsquo;s own statement from 2025, not as a ranking we have checked.' },
        { kind: 'p', text: 'The 2025 document replaces the 2019 standards, and NDDPI publishes a crosswalk between the two. A student in grade 6 this year may therefore meet AI and security content their older sibling never saw at that age; classes outside school can fill the gap for students who started under the earlier version.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published numbers',
      h2: 'North Dakota&rsquo;s access and enrollment figures, cybersecurity included',
      intro: 'Code.org&rsquo;s State of AI + CS Education data flags North Dakota with a footnote, and that footnote changes how the numbers should be read.',
      body: [
        { kind: 'table', caption: 'North Dakota high schools offering computer science or cybersecurity, as published by Code.org (2025)', head: ['School year', 'Published value'], rows: [
          ['2018 to 2019 through 2021 to 2022', 'No value published'],
          ['2022 to 2023', '75%'],
          ['2023 to 2024', '84.1%, 148 of 176 high schools (state education agency data)'],
          ['2024 to 2025', 'No value published']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP, North Dakota', head: ['Measure', 'Value', 'Source'], rows: [
          ['High school students in CS, 2023 to 2024', '5,492 of 34,185, or 16.07%', 'Code.org (2025); student total from NCES, Fall 2022'],
          ['Schools with AP exams, 2023', '44 (35 public, 9 non-public)', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '47 (41 public, 6 non-public)', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'The footnote says North Dakota is the only state with a computer science and cybersecurity graduation requirement, and that for this state the access figure includes cybersecurity. So 148 of 176 counts high schools offering either subject. Because other states are measured on computer science alone, we do not set North Dakota&rsquo;s figure beside any other state&rsquo;s; it answers a different question.' },
        { kind: 'p', text: 'Both access years published predate the July 31, 2025 change to the graduation rule and the 2026 to 2027 standards rollout, so they show the state shortly after HB 1398 took effect in schools, not after the graduation unit applied to a full class. The AP count rose by three schools between 2023 and 2024.' },
        { kind: 'callout', h3: 'Citation', p: 'Code.org (2025). 2025 State of AI + CS Education. Individual North Dakota values are quoted from its Access and Participation tabs; the dataset itself is not republished here. AP counts: College Board, School Report of AP Exams by State, 2023-24.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can 400 random points describe 104,829? A sampling project on North Dakota data',
      intro: 'The state GIS hub publishes Landmarks NDDOT, a point layer of mapped features across North Dakota. It is big enough that sampling becomes a real question, and the server can still give the full count to check against.',
      body: [
        { kind: 'table', caption: 'Our seeded random samples against the full count, Landmarks NDDOT downloaded 17 October 2026 (sample results are ours; full counts from a server group-by)', head: ['Feature type', 'Full count', 'Share of all', 'Sample of 100', 'Sample of 400', 'Sample of 1,600'], rows: [
          ['Farm Unit', '33,904', '32.34%', '30.00%', '31.50%', '33.25%'],
          ['Wind Turbine', '1,218', '1.16%', '0.00%', '1.25%', '1.38%'],
          ['Grain Elevator', '182', '0.17%', '0.00%', '0.00%', '0.19%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Draw the sample', p: 'Students fetch all 104,829 object IDs, then use random.Random(2026).sample to pick 1,600 of them, so anyone rerunning the code gets the same draw.' },
          { h3: '2. Estimate, then check', p: 'They estimate each feature type&rsquo;s share from the first 100, 400 and 1,600 picks, and compare with the true share from a group-by over all 223 feature types.' },
          { h3: '3. Spot the rare-case trap', p: 'Farm units are close at every size. A sample of 100 finds no wind turbines and 400 finds no grain elevators at all, which is how rare things vanish from small surveys.' }
        ] },
        { kind: 'callout', h3: 'What these numbers are', p: 'The sample percentages are ours, from one seeded draw on one day. A different seed gives different numbers, and that variation is the lesson. The state says the layer follows conventional cartographic standards, is not a final or formal publication, and is not guaranteed free from errors.' },
        { kind: 'p', text: 'For an extension, students list feature types that look like data-entry quirks, such as a type called Asterisk with 3,334 records and a lower-case railway crossing label, and discuss whether to clean or keep them. Estimation, error and messy categories are the Algorithms and Computational Thinking and Impacts of Computing concepts of the 2025 standards, practised on a map of the student&rsquo;s own state.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Central or Mountain: North Dakota&rsquo;s two time zones',
      intro: 'The IANA time zone database puts eastern North Dakota on Central Time and southwestern North Dakota on Mountain Time, and keeps three zones of its own for counties that switched.',
      body: [
        { kind: 'table', caption: 'North Dakota entries in the IANA tz database (northamerica and zone.tab, read 17 October 2026)', head: ['Zone', 'Where', 'History noted in the database'], rows: [
          ['America/Chicago', 'Eastern North Dakota', 'US Central Time'],
          ['America/Denver', 'Southwestern North Dakota', 'US Mountain Time'],
          ['America/North_Dakota/Center', 'Oliver County', 'Moved from mountain to central time on 1992-10-25'],
          ['America/North_Dakota/New_Salem', 'Morton County, rural', 'Moved to central time on 2003-10-26, except around Mandan, already central'],
          ['America/North_Dakota/Beulah', 'Mercer County', 'Moved to central time at the November 7, 2010 change']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'India and Central', p: 'India is 10 hours 30 minutes ahead of Central Daylight Time and 11 hours 30 minutes ahead of Central Standard Time.' },
          { h3: 'India and Mountain', p: 'For families on Mountain Time, India is 11 hours 30 minutes ahead in summer and 12 hours 30 minutes ahead in winter.' },
          { h3: 'The clock changes', p: 'Both zones go back an hour on November 1, 2026 and forward on March 14, 2027. We confirm every class time in the family&rsquo;s own zone.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a kindergarten AI question to a cybersecurity competition',
    intro: 'Bands follow the shape of the 2025 standards, grade by grade then two high school spans. The free lesson sets the start point.',
    cols: [
      { band: 'Grades K to 4', h3: 'Blocks, safety and AI basics', p: 'Sequences and loops in blocks, safe accounts, and what makes a machine different from a person.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 5 to 8', h3: 'First real code', p: 'Python with turtle graphics and games, and the first look at how networks carry data.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Grades 9 to 10', h3: 'The graduation unit', p: 'Either route: programming and data, or defensive cybersecurity, alongside the school&rsquo;s own unit.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 11 to 12', h3: 'Compete and specialize', p: 'Capture-the-flag practice, AP Computer Science Principles, and machine learning tested on real data.', courses: ['picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'North Dakota writes AI into security, so students should too',
    intro: 'The 2025 standards treat AI as part of computing devices, algorithms, impacts, citizenship and security at once.',
    p1: 'An AI model can summarize a dataset in a sentence. Ask it what share of North Dakota landmarks are wind turbines and it may give a confident figure from nowhere. A student who has drawn a sample of 100 and found zero turbines knows exactly how a plausible number can be badly wrong.',
    p2: 'The same instinct protects systems. The 2025 standards note that AI can strengthen threat detection while adding risks such as adversarial attacks and privacy concerns. Students who build and test their own code learn to treat an AI answer as a claim to verify, which is the core habit of security work.',
    closer: 'North Dakota asks graduates to understand both how computers work and how they are defended; writing code and checking AI output against real data covers both.',
    blogAnchor: 'is learning to code still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Red River Valley to the Badlands, one live class',
    intro: 'North Dakota has long distances between towns and some very small districts, and live online classes are the same everywhere in the state.',
    cells: [
      { h3: 'Rural or city, same class', p: 'A student near Williston and one in Grand Forks join the same lesson from home, with no long drive in winter weather.' },
      { h3: 'Mapped to NDDPI standards', p: 'Teachers plan around the five 2025 concepts and the HB 1398 routes. School-assessed work always remains the student&rsquo;s own.' },
      { h3: 'Try a lesson free', p: 'A complete first lesson, then a written recommendation for level, course and time. No card details are requested.' },
      { h3: 'Batches by level', p: 'Each batch holds fifteen to twenty learners sorted by level, drawn from North Dakota and other states.' },
      { h3: 'One-to-one', p: 'A dedicated teacher for a student preparing for a competition or moving faster than a group allows.' },
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online only', p: 'Every class is live over video, taught from India. There is no Modern Age Coders building in North Dakota and none is claimed. Students need a computer, a headset and a dependable internet connection.' }
  },

  fees: {
    h2: 'What North Dakota families pay',
    intro: 'Start free, then pick a monthly format.',
    first: 'A full lesson at no charge, with a suggested level, course and class time at the end.',
    group: 'A month of live classes in a batch of fifteen to twenty students at one level.',
    private: 'A month of classes with one teacher for one student.',
    closer: 'Fees are charged in US dollars at a single rate for every state, so Bismarck and Dickinson families pay alike. Billing begins only after the free lesson, once you agree to a course and a time; holiday and missed-class rules are on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free lesson for a North Dakota student',
    intro: 'Share the grade and the interest. A first grader might meet a friendly robot puzzle, a seventh grader a Python game, and a high schooler the landmark sampling project or a first capture-the-flag challenge.',
    success: 'Thank you. We will be in touch shortly to set up a class for your North Dakota student.'
  },

  faq: {
    h2: 'North Dakota coding, cyber and AI questions',
    intro: 'Answers for North Dakota families, drawn from NDDPI&rsquo;s own pages.',
    items: [
      { q: 'Do North Dakota students need computer science to graduate?', a: 'NDDPI says students graduating after July 31, 2025 must take one unit of computer science or cybersecurity, which may count as one of three science units, unless they completed the school integration plan.' },
      { q: 'Does cybersecurity count instead of computer science?', a: 'Yes. Under NDCC 15.1-21-02.2 as amended by HB 1398, a unit of either computer science or cybersecurity meets the graduation requirement.' },
      { q: 'What is a computer science and cybersecurity integration plan?', a: 'A school-board-approved plan, required from 2024 to 2025, that maps the standards across grades. NDDPI says completing it waives the separate graduation unit.' },
      { q: 'When do the new North Dakota standards take effect?', a: 'NDDPI finished the revised standards in May 2025 and asks schools to fully implement them in 2026 to 2027. They replace the 2019 standards.' },
      { q: 'Do the North Dakota standards include AI?', a: 'Yes. The first is K.NI.3, which asks kindergartners to understand that AI may respond like a human but is a machine. High school standards cover generative AI models.' },
      { q: 'How many North Dakota high schools offer computer science?', a: 'Code.org (2025) reports 148 of 176 high schools in 2023 to 2024, a figure that includes cybersecurity for North Dakota only, so it is not comparable with other states.' },
      { q: 'Which time zone are classes in?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm times in Central or Mountain Time, whichever your part of North Dakota uses.' },
      { q: 'Can your classes satisfy the graduation unit?', a: 'No. The unit comes from courses your school offers or makes available, and NDDPI lists approved routes. Our classes build skills beside them; assessed school work is the student\'s own.' },
      { q: 'Is the cybersecurity course safe for teens?', a: 'It is defensive and ethical by design, matching the Security concept of the 2025 standards: protecting networks, devices and data, never attacking systems the student does not own.' },
      { q: 'What does the sampling project teach?', a: 'Using 104,829 records from the state Landmarks NDDOT layer, students see how sample estimates compare with the full count, and why a sample of 100 can miss rare features entirely.' }
    ]
  },

  next: {
    eyebrow: 'More for US students',
    h2: 'Next steps for North Dakota students',
    html: 'Security-minded students can read <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a>, <a class="cg-inline-link" href="/picoctf-for-beginners">picoCTF for beginners</a> and <a class="cg-inline-link" href="/cyberpatriot-preparation">CyberPatriot preparation</a>. For the AP route there are <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles classes</a>, and for a contrast with a state that chose computer science alone, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North Dakota and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/picoctf-for-beginners', label: 'picoCTF for beginners' },
    { href: '/cyberpatriot-preparation', label: 'CyberPatriot' }
  ],

  personalityCss: `
.cg-root.cg-and .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.8vw, 2.2rem); }
.cg-root.cg-and .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-and .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-and .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-and .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-and .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-and .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-and .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-and .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-and .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'North Dakota, read raw on 17 October 2026: NDDPI Bill Breakdown HB 1398 v1.0, 26 April 2023 (NDCC 15.1-21-01 and 15.1-21-02 instruction from 2023-24; integration plan from 2024-25; NDCC 15.1-21-02.2 graduation unit after July 31, 2025, science substitution, waiver via plan, from 2025-26; earlier math substitution; adult grants July 1, 2023 to June 30, 2025); NDDPI Computer Science and Cybersecurity page (68th Legislative Assembly 2023; integration plan guidance); NDDPI CSC standards page (full implementation 2026-2027; crosswalk 2025 and 2019); May 2025 CSC Content Standards (July 2024 to May 2025, five multi-day sessions, five concepts, K-8 by grade, spans 9-10 and 11-12, K.NI.3, 9-10.NI.3, superintendent foreword); Code.org (2025) ND** footnote (cybersecurity included), 75% (2022-23), 148 of 176 (2023-24), 5,492 of 34,185; College Board AP schools 44 (2023), 47 (2024); IANA America/Chicago, America/Denver and three America/North_Dakota zones.',
    localProject: 'NDGISHUB Landmarks NDDOT (State of North Dakota GIS hub), downloaded 17 October 2026: 104,829 records, 223 feature types; our seeded samples (random.Random(2026); n = 100, 400, 1,600) vs full shares: Farm Unit 32.34% (30.00, 31.50, 33.25), Wind Turbine 1.16% (0.00, 1.25, 1.38), Grain Elevator 0.17% (0.00, 0.00, 0.19); data quirks Asterisk 3,334 and lower-case railway crossing; labelled as ours. Lesson family: random sampling versus the full count.',
    requiredMentions: [
      '68th Legislative Assembly',
      'NDCC 15.1-21-02.2',
      'July 31, 2025',
      'one of the three science requirements',
      'K.NI.3 Understand that while AI may respond like a human, it is a machine.',
      'five multi-day sessions',
      '148 of 176',
      '5,492 of 34,185',
      'America/North_Dakota/Beulah',
      '104,829',
      'random.Random(2026)'],
    sources: [
      { claim: 'NDDPI: Bill Breakdown HB 1398 (Computer Science and Cybersecurity), 26 April 2023.', url: 'https://www.nd.gov/dpi/sites/www/files/documents/SAO/Credentials/GENERALBill%20BreakdownHB1398.pdf' },
      { claim: 'NDDPI: Computer Science and Cybersecurity page, 68th Legislative Assembly and integration plan guidance.', url: 'https://www.nd.gov/dpi/education-programs/computer-science-and-cybersecurity' },
      { claim: 'NDDPI: Computer Science & Cybersecurity content standards page, implementation year and crosswalk.', url: 'https://www.nd.gov/dpi/districtsschools/north-dakota-education-content-standards/computer-science-cybersecurity' },
      { claim: 'NDDPI: Computer Science and Cybersecurity Content Standards K-12, May 2025.', url: 'https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/Computer%20Science%20and%20Cybersecurity%20Standards%20MAY2025.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: North Dakota access (with cybersecurity) and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'State of North Dakota GIS hub: Landmarks NDDOT feature service.', url: 'https://services1.arcgis.com/GOcSXpzwBHyk2nog/arcgis/rest/services/NDGISHUB_Landmarks_NDDOT/FeatureServer' },
      { claim: 'IANA tzdb northamerica: North Dakota zones and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Comparing North Dakota access with any other state: refused; Code.org includes cybersecurity for North Dakota only.',
      'Whether the participation figure also includes cybersecurity: the footnote sits on the access tab only, so the page does not say either way.',
      'That North Dakota is first or only in the nation: only quoted as the State Superintendent&rsquo;s 2025 foreword and the Code.org footnote, attributed.',
      'Verbatim quotes from the HB 1398 breakdown PDF: its extracted text drops letters, so its rules are paraphrased, not quoted.',
      'Landmark categories involving dwellings, religion or dumps: not printed; only neutral feature types are shown, as counts.',
      'That our classes satisfy the graduation unit or the integration plan: refused.',
      'Names of individual North Dakota schools or standards committee members: not printed.',
      'Any affiliation with NDDPI, NDIT EduTech, the state GIS hub, Code.org or the College Board.'
    ]
  }
};
