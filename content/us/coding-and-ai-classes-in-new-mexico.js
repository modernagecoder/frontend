'use strict';
// New Mexico (cg- state page, US cluster Phase 4, row 91). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: New Mexico does not require a computer science credit, but HB171 now says schools must offer it, the state
// has moved its standards onto the 2026 CSTA PK-12 standards, and about half of high schools offer a course. What does
// that mean for a family, and where do live classes fit? Sources read raw 17 to 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-new-mexico/):
//  - NM PED Math and Science Bureau, Computer Science page: instruction "draws directly from the Computer Science
//    Teachers Association (CSTA) PK-12 Computer Science Standards (2026)", reflecting "the growing role of artificial
//    intelligence and data literacy"; delivery through "standalone courses, integrated instruction, or career and
//    technical education pathways"; access "regardless of location or background"; self-paced educator course
//    "Computer Science Education for All". NM PED Adopted Content Standards page lists the 2026 CSTA PK-12 standards.
//  - NM PED Computer Science Strategic Plan (PDF): task force "in the fall of 2019"; plan completed "in June of 2021";
//    vision "New Mexico guarantees a K-12 computer science education to ALL students"; goal lines "Adopt CS standards
//    Dec 2018", "Allow CS to satisfy core graduation requirement Apr 2018", "All high schools offer CS courses
//    Aug 2021-Aug 2023", "30 individuals are enrolled in a CS teacher prep program".
//  - NM PED Graduation Requirements page and HB171 Graduation Manual (April 2026): cohort 2029 = "Students entering
//    high school in SY 2025-26"; elective two-unit pathway "provided that financial literacy and computer science shall
//    be offered as electives"; "Removal of Algebra 2 as a requirement"; two units set by each local board. Cohort 2029
//    flyer: "24 units"; "Algebra 2, Financial Literacy, and Computer Science shall be offered."
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet: NM 2023-2024, 126 of 235 high schools offer CS
//    (53.6%), source "State Education Agency"; access 23% (2018-19), 32%, 44%, 41%, 50%, 53.6%; participation 2.5%
//    (2020-21), 3.0%, 3.3% (2022-23); most recent participation count 3,335 of 101,654 (3.28%), denominator NCES Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: New Mexico schools with AP exams 122 (2023), 119 (2024).
//  - IANA tzdb: New Mexico listed under US mountain time, America/Denver; US DST rule Sun>=8 March, Sun>=1 November.
//  - City of Albuquerque, "Bikeways Existing in 2024" feature layer (item c134082b09cf4cb7aa68d9ea83e9de56, City
//    "as is" no-warranty licence text saved), attributes downloaded 18 October 2026. Our counts: 3,540 records;
//    MaintainedBy codes CABQ_SM 1,905, CABQ_PM 706, BERNCO 315, HOA 275, NMDOT 169, null 68, CABQ_OS 34, PRIVATE 24,
//    BERNCO_OS 14, others under 15; the layer's own coded-value domain has 12 MaintainedBy codes and no CABQ_PM,
//    Corrales, Los Ranchos or CABQ_Aviation (726 records between them); SurfaceMaterial values Gravel (5) and UNK (1)
//    are outside its domain; PathType uses 10 of 12 domain values; PhysicalJurisdiction spelled two ways
//    ("CITY OF ALBUQUERQUE" 3,010, "City Of Albuquerque" 92).
// Lesson family: decoding coded fields with a lookup dictionary (and handling codes the dictionary does not know).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NEW MEXICO', label: 'New Mexico', blurb: 'Coding and AI for New Mexico students under HB171 and the 2026 CSTA standards, with an Albuquerque bikeway decoding project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-new-mexico',
  code: 'anm',
  accent: '#201452',
  accentRationale: 'New Mexico: #201452, a deep twilight indigo from the allocation table for a state known for its night skies, passing 4.5:1 on every paper and far from the North Carolina green #276910',
  pageType: 'city',
  place: {
    name: 'New Mexico',
    eyebrow: 'New Mexico, United States',
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
  routeLabel: 'New Mexico',
  title: 'Coding and AI Classes in New Mexico | Live Online Lessons',
  description: 'Live online coding and AI classes for New Mexico students: what HB171 says about computer science, the 2026 CSTA standards, and an Albuquerque bikeway data project.',
  ogDescription: 'New Mexico schools must now offer computer science as an elective, and the state teaches to the 2026 CSTA standards. The rules, the access figures, and live online classes.',
  twitterDescription: 'New Mexico coding and AI classes, live online, from HB171 electives to AP and real city data.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for New Mexico Students',
    description: 'Live online computational thinking, AI literacy, Python and AP Computer Science Principles for New Mexico students from third grade to twelfth grade, placed by level after a free lesson.'
  },

  h1: 'Coding and AI classes in New Mexico',
  capsuleQ: 'Is computer science required to graduate in New Mexico?',
  capsule: 'No single computer science credit is required. Under HB171, for students entering high school in 2025 to 2026, New Mexico high schools must offer computer science as an elective within a two-unit pathway, and the state now teaches to the 2026 CSTA PK-12 standards. Modern Age Coders runs live online classes for New Mexico students, from computational thinking in third grade to AP Computer Science Principles.',
  lead: 'New Mexico has taken the long road with computer science: a task force in 2019, a five-year strategic plan in 2021, and now a graduation law, HB171, that names computer science as an elective every high school must offer, starting with the class of 2029. In the same period the Public Education Department switched its standards to the newest national set, the 2026 CSTA PK-12 standards, which give artificial intelligence and data literacy a larger place. This page explains each of those pieces from the department&rsquo;s own documents, shows how access has grown from under a quarter of high schools to more than half, and describes how our live online classes reach a student in Las Cruces, Gallup or Taos as easily as one in Albuquerque.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a student in New Mexico.',

  picks: {
    eyebrow: 'Course picks for New Mexico',
    h2: 'Four courses New Mexico families start with',
    intro: 'Picked by grade and interest; the teacher confirms the right level during the free first lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades 3 to 6', note: 'Patterns, decomposition and step-by-step logic, the foundations the CSTA standards build on in elementary school.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 14', note: 'How AI systems learn from data and where they go wrong, matching the new weight on AI in the 2026 standards.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Real typed code and data work, including the Albuquerque bikeway decoding project described below.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP CSP, the Create performance task and the exam, a strong fit for an HB171 elective pathway.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'HB171 and graduation',
      h2: 'Where computer science sits in New Mexico&rsquo;s graduation rules',
      intro: 'From the PED&rsquo;s HB171 Graduation Manual (April 2026) and the cohort 2029 flyer, read in October 2026.',
      body: [
        { kind: 'table', caption: 'New Mexico graduation requirements beginning with cohort 2029, as PED summarizes them', head: ['Item', 'What PED says'], rows: [
          ['Who it covers', 'Cohort 2029, the students entering high school in SY 2025-26'],
          ['Total', '24 units, including 4 in English, 4 in math, 3 in science and 4 in social studies'],
          ['Electives', '5.5 elective units that must include a two-unit pathway concentration of the student&rsquo;s choice'],
          ['Computer science', 'Financial literacy and computer science shall be offered as electives'],
          ['What must be offered', 'The flyer states: Algebra 2, Financial Literacy, and Computer Science shall be offered.'],
          ['Algebra 2', 'Removal of Algebra 2 as a requirement, although it must still be offered as a math course'],
          ['Local units', 'Two units set by each local school board or governing body']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Offered, not required', p: 'HB171 guarantees that a New Mexico high schooler can find computer science on the timetable. It does not make every student take it, so taking it is a choice families make.' },
          { h3: 'A pathway, not a one-off', p: 'Because electives must include a two-unit concentration, a student who chooses computer science can build two connected units, for example an introduction followed by AP Computer Science Principles.' },
          { h3: 'Earlier cohorts', p: 'Students in cohorts 2025 to 2028 follow the earlier requirements listed on the PED graduation page; the HB171 changes start with those who entered ninth grade in 2025 to 2026.' }
        ] },
        { kind: 'p', text: 'The idea is older than the law. The PED&rsquo;s computer science strategic plan lists a goal to allow CS to satisfy a core graduation requirement dated April 2018, and a goal for all high schools to offer CS courses between August 2021 and August 2023. HB171 now writes the offering into the graduation rules themselves.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'Standards and the plan',
      h2: 'New Mexico now teaches to the 2026 CSTA standards',
      intro: 'The PED Math and Science Bureau says New Mexico&rsquo;s computer science instruction draws directly from the CSTA PK-12 Computer Science Standards (2026).',
      body: [
        { kind: 'table', caption: 'Milestones in New Mexico computer science policy, from PED documents', head: ['When', 'Milestone', 'Source'], rows: [
          ['December 2018', 'Date given in the plan for the goal to adopt CS standards', 'PED Computer Science Strategic Plan'],
          ['Fall 2019', 'A computer science task force brought together to shape a state vision', 'Strategic Plan introduction'],
          ['June 2021', 'Strategic plan completed, a five-year plan of actions', 'Strategic Plan introduction'],
          ['2025 to 2026', 'First HB171 cohort enters high school with CS as a required offering', 'HB171 Graduation Manual'],
          ['2026', 'Instruction based on the CSTA PK-12 standards (2026), listed among adopted standards', 'PED Computer Science and Adopted Content Standards pages']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'AI moves to the front', p: 'The bureau says the 2026 standards reflect current shifts in the field, including the growing role of artificial intelligence and data literacy, with grade-level expectations from pre-K to twelfth grade.' },
          { h3: 'Three ways to teach it', p: 'Schools may deliver computer science through standalone courses, integrated instruction, or career and technical education pathways, depending on local context and student needs.' },
          { h3: 'A stated promise', p: 'The plan&rsquo;s vision statement reads: New Mexico guarantees a K-12 computer science education to ALL students. The bureau adds that access should hold regardless of location or background.' }
        ] },
        { kind: 'callout', h3: 'Teachers are part of the plan', p: 'The strategic plan sets a goal of 30 individuals enrolled in a CS teacher preparation program and the PED offers a self-paced course, Computer Science Education for All. Growing the number of qualified teachers is how a state with many small, remote schools makes an offered course real.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Access figures',
      h2: 'Just over half of New Mexico high schools offer computer science',
      intro: 'Six school years of New Mexico access data, then participation and AP counts, each quoted exactly.',
      body: [
        { kind: 'table', caption: 'New Mexico access trend: percent of public high schools with a CS course (Code.org, 2025)', head: ['Year', 'Percent offering CS'], rows: [
          ['2018 to 2019', '23%'],
          ['2019 to 2020', '32%'],
          ['2020 to 2021', '44%'],
          ['2021 to 2022', '41%'],
          ['2022 to 2023', '50%'],
          ['2023 to 2024', '53.6%, or 126 of 235 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Participation and AP in New Mexico', head: ['Measure', 'New Mexico', 'Where it comes from'], rows: [
          ['Students enrolled in a high school CS course', '3,335 of 101,654, or 3.28%', 'Code.org (2025), most recent participation tab'],
          ['Yearly participation rate', '2.5%, 3.0%, then 3.3% for 2022 to 2023', 'Code.org (2025), participation series'],
          ['AP schools, 2023', '122', 'College Board AP report by state'],
          ['AP schools, 2024', '119', 'College Board AP report by state']
        ] },
        { kind: 'p', text: 'Access more than doubled in five years, yet roughly one student in thirty was enrolled in a computer science course in the latest participation count. The College Board figures also dipped slightly, from 122 schools with AP exams to 119. HB171&rsquo;s required offering is aimed at the first gap; families who want depth now, rather than when their school&rsquo;s course arrives, are the students our classes serve.' },
        { kind: 'callout', h3: 'How to cite these figures', p: 'Code.org (2025). 2025 State of AI + CS Education. We quote single New Mexico values from its data sheet, which names the state education agency as the access source and NCES Fall 2022 as the student total; we do not republish the dataset.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What does CABQ_PM mean? Decoding Albuquerque&rsquo;s bikeway data',
      intro: 'Albuquerque&rsquo;s 2024 bikeway layer stores who maintains each segment as a short code. Students turn the codes into words with a Python dictionary, and discover what happens when the data uses a code the dictionary has never seen.',
      body: [
        { kind: 'table', caption: 'Maintainer codes in the Bikeways Existing in 2024 layer, decoded with the layer&rsquo;s own domain (our counts, download of 18 October 2026)', head: ['Code in the data', 'Label from the layer&rsquo;s domain', 'Records'], rows: [
          ['CABQ_SM', 'CABQ Street Maintenance', '1,905'],
          ['CABQ_PM', 'No label: not in the domain', '706'],
          ['BERNCO', 'Bernalillo County', '315'],
          ['HOA', 'Homeowner&rsquo;s Association', '275'],
          ['NMDOT', 'New Mexico Dept. of Transportation', '169'],
          ['(empty)', 'No value recorded', '68'],
          ['CABQ_OS', 'CABQ Open Space', '34']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the lookup', p: 'The layer&rsquo;s metadata lists 12 maintainer codes with plain-English names. Students copy them into a dictionary, then replace each code in the 3,540 records with its label.' },
          { h3: '2. Meet the KeyError', p: 'The program crashes. Four codes in the data, CABQ_PM, Corrales, Los Ranchos and CABQ_Aviation, are missing from the domain, and between them they cover 726 records. Using dict.get() with a default keeps the program running and counts the unknowns.' },
          { h3: '3. Clean what is fixable', p: 'Jurisdiction names come in two spellings, CITY OF ALBUQUERQUE (3,010) and City Of Albuquerque (92). Converting to one case before counting merges them; surface values Gravel and UNK, also outside their domain, are flagged rather than guessed.' }
        ] },
        { kind: 'callout', h3: 'Our counts, the city&rsquo;s data', p: 'All numbers in this section are ours, from one download of a static 2024 copy of the network. The City of Albuquerque provides the data as is, with no guarantee of completeness or accuracy, and we do not guess what an undocumented code such as CABQ_PM stands for.' },
        { kind: 'p', text: 'Path types show the same idea from the other side: the domain lists 12 kinds of path, but only 10 appear in the data, with bike lanes the most common at 1,228 records. A lookup table tells you what could exist; only counting tells you what does. That distinction, between a schema and the records in it, is one of the most useful things a teenager can learn before working with any real database.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Mountain Time across New Mexico',
      intro: 'One time zone for the whole state makes scheduling simple, with the twice-yearly clock change to keep in mind.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone', p: 'The IANA time zone database lists New Mexico under US mountain time, represented by America/Denver, from Farmington to Hobbs.' },
          { h3: 'India and Mountain Time', p: 'India runs 11 hours 30 minutes ahead of Mountain Daylight Time and 12 hours 30 minutes ahead of Mountain Standard Time, and does not change its clocks.' },
          { h3: 'Changeover dates', p: 'New Mexico falls back on November 1, 2026 and springs forward on March 14, 2027. Lesson times are always confirmed in Mountain Time.' }
        ] },
        { kind: 'spec', title: 'Code that knows the calendar', p: 'Students who write a lesson reminder using the America/Denver zone, rather than a fixed seven-hour offset, find that their program is still right on the morning after November 1, 2026. It is a small taste of why real software leans on shared databases like IANA tzdb.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first logic puzzles to an HB171 pathway',
    intro: 'Grades are a guide; the free lesson places each student.',
    cols: [
      { band: 'Grades 3 to 5', h3: 'Thinking in steps', p: 'Puzzles, patterns and block programs that build computational thinking before any typing.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'AI and first code', p: 'How AI learns from data, then Python games and small programs.', courses: ['ai-literacy-for-kids-course', 'python-ai-kids-masterclass'] },
      { band: 'Grades 9 to 10', h3: 'A pathway with substance', p: 'Python and web development that make a two-unit elective pathway worth choosing.', courses: ['python-complete-masterclass-teens', 'frontend-development-masterclass-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science Principles, then models trained and tested on real data.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'New Mexico&rsquo;s standards now put AI front and center. What should students learn?',
    intro: 'How AI works, and how to check its output against the data.',
    p1: 'Give an AI assistant the Albuquerque bikeway table and ask who maintains the most segments. It may answer confidently and invent a meaning for CABQ_PM, a code the city&rsquo;s own metadata does not define. A student who has built the lookup knows the honest answer is that the label is unknown.',
    p2: 'That habit of checking a claim against the data is what the 2026 CSTA standards mean by data literacy. Our classes teach students to build models and tools themselves first, so that AI later becomes a helper they can audit rather than an authority they trust blindly.',
    closer: 'New Mexico promises computer science to every student; the most valuable part of that promise is learning to ask where an answer came from.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Four Corners to the Bootheel, the same live lesson',
    intro: 'New Mexico is the fifth-largest state by area, and many families live a long drive from any coding program.',
    cells: [
      { h3: 'Rural and small-town students', p: 'A student in Silver City, Clovis or Española joins the same live class as one in Rio Rancho, with no travel and no waiting list for a local club.' },
      { h3: 'When it suits you', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Pathway-friendly', p: 'Teachers know US grade levels and can plan a sequence that complements a school computer science elective rather than repeating it.' },
      { h3: 'Batch of peers', p: 'A batch of fifteen to twenty students working at the same level, drawn from New Mexico and other states.' },
      { h3: 'Private option', p: 'One teacher and one student, for those aiming at AP Computer Science Principles or a project portfolio on their own timeline.' },
      { h3: 'Honest work', p: 'We explain concepts and coach problem solving; school assignments and AP tasks remain entirely the student&rsquo;s own.' }
    ],
    spec: { title: 'Online only', p: 'Modern Age Coders has no center in New Mexico and claims none. All lessons are taught live from India over video, so a laptop or desktop, a headset and a dependable internet connection are enough.' }
  },

  fees: {
    h2: 'Fees for New Mexico students',
    intro: 'Free to start, then one of two monthly options.',
    first: 'One complete lesson at no charge, with a recommended level and course at the end.',
    group: 'Monthly lessons in a batch of fifteen to twenty students at the same stage.',
    private: 'Monthly lessons with a teacher working with one student only.',
    closer: 'Fees are charged in US dollars at the same rate in Santa Fe as in Roswell. You pay nothing before the free lesson, and the pricing page explains how holidays and missed lessons are handled.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Request a free lesson for a New Mexico student',
    intro: 'Share the grade and the goal. A fourth grader might start with a logic puzzle game, an eighth grader with an AI literacy activity, and a high schooler with the Albuquerque bikeway decoding task.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your New Mexico student.'
  },

  faq: {
    h2: 'New Mexico coding and AI questions',
    intro: 'Answers based on New Mexico Public Education Department documents and the published data.',
    items: [
      { q: 'Is computer science a graduation requirement in New Mexico?', a: 'No single computer science credit is required. Under HB171, starting with cohort 2029, high schools must offer computer science as an elective, and students choose a two-unit elective pathway.' },
      { q: 'Who is cohort 2029?', a: 'PED defines cohort 2029 as students entering high school in SY 2025-26, so the ninth graders of fall 2025 are the first class under the HB171 requirements.' },
      { q: 'How many units does a New Mexico diploma need under HB171?', a: 'The cohort 2029 flyer lists 24 units, with 5.5 elective units that must include a two-unit pathway and two units set by the local school board.' },
      { q: 'Which computer science standards does New Mexico use?', a: 'PED says New Mexico instruction draws directly from the CSTA PK-12 Computer Science Standards (2026), which give more weight to artificial intelligence and data literacy.' },
      { q: 'Does New Mexico have a computer science plan?', a: 'Yes. A task force met from fall 2019 and the PED completed a five-year computer science strategic plan in June 2021, with goals for standards, teacher endorsement and course access.' },
      { q: 'How many New Mexico high schools offer computer science?', a: 'Code.org (2025) reports 126 of 235 New Mexico high schools, or 53.6%, offering computer science in 2023 to 2024, up from 23% in 2018 to 2019.' },
      { q: 'How many New Mexico students take computer science?', a: 'The most recent Code.org count is 3,335 of 101,654 high school students, or 3.28%. Its yearly participation series ends at 3.3% for 2022 to 2023.' },
      { q: 'What time are classes for New Mexico families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. All of New Mexico is on Mountain Time, and times are confirmed in it.' },
      { q: 'Can your classes count as the HB171 computer science elective?', a: 'No. Elective units come from school courses. Our classes add depth, projects and AP Computer Science Principles preparation alongside a school pathway.' },
      { q: 'Are you connected with the New Mexico PED?', a: 'No. We are an independent online school and are not connected with the PED, the City of Albuquerque, Code.org or the College Board.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Where New Mexico students go next',
    html: 'Students choosing a pathway can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> with <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. For a project with an audience, see the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>, and for a state where computer science became compulsory, read about <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>.',
    waLabel: 'Send us a WhatsApp message'
  },

  footerHeading: 'New Mexico and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'US overview' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/congressional-app-challenge-guide', label: 'App Challenge guide' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-anm .cg-hero-grid { align-items: end; gap: clamp(0.9rem, 2.8vw, 2.2rem); }
.cg-root.cg-anm .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.04; }
.cg-root.cg-anm .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-anm .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-anm .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-anm .cg-grid-3 { gap: clamp(0.8rem, 2.2vw, 1.6rem); }
.cg-root.cg-anm .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-anm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anm .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-anm .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'New Mexico, read raw 17 to 18 October 2026: NM PED Math and Science Bureau CS page (CSTA PK-12 standards 2026; AI and data literacy; standalone, integrated or CTE delivery; regardless of location or background; Computer Science Education for All); PED Adopted Content Standards page (2026 CSTA standards listed); PED Computer Science Strategic Plan (task force fall 2019; plan June 2021; vision guarantees K-12 CS to ALL students; goal lines Adopt CS standards Dec 2018, CS satisfy core graduation requirement Apr 2018, all high schools offer CS Aug 2021 to Aug 2023, 30 enrolled in CS teacher prep); HB171 Graduation Manual April 2026 and cohort 2029 flyer (SY 2025-26 entrants; 24 units; 5.5 electives with two-unit pathway; CS and financial literacy offered as electives; Algebra 2 removed as requirement; two local units); Code.org (2025) 126 of 235, 53.6%, trend from 23%; participation 3,335 of 101,654, 3.28%, series 2.5% to 3.3%; College Board 122 (2023), 119 (2024); IANA America/Denver.',
    localProject: 'City of Albuquerque Bikeways Existing in 2024 feature layer (City as-is no-warranty licence), attributes downloaded 18 October 2026: our counts on 3,540 records; maintainer codes decoded with the layer domain (CABQ_SM 1,905; BERNCO 315; HOA 275; NMDOT 169; CABQ_OS 34; null 68); CABQ_PM 706 and three other codes outside the domain, 726 records; jurisdiction spelled two ways (3,010 and 92); Gravel and UNK outside the surface domain; 10 of 12 path types used, bike lanes 1,228. All labelled ours. Lesson family: decoding coded fields with a lookup dictionary.',
    requiredMentions: [
      'HB171',
      'SY 2025-26',
      'computer science shall be offered as electives',
      'two-unit pathway concentration',
      'CSTA PK-12 Computer Science Standards (2026)',
      'June 2021',
      'guarantees a K-12 computer science education to ALL students',
      '126 of 235',
      '3,335 of 101,654',
      'CABQ_PM',
      '3,540 records'],
    sources: [
      { claim: 'NM PED Math and Science Bureau: Computer Science page, CSTA 2026 standards, delivery models.', url: 'https://web.ped.nm.gov/bureaus/math-and-science-bureau/computer-science/' },
      { claim: 'NM PED Computer Science Strategic Plan: task force, completion June 2021, vision, goal lines.', url: 'https://web.ped.nm.gov/wp-content/uploads/2024/12/PED-Computer-Science-Strategic-Plan-FINAL.pdf' },
      { claim: 'NM PED HB171 Graduation Manual (April 2026): electives, CS offered, Algebra 2, local units.', url: 'https://web.ped.nm.gov/wp-content/uploads/2026/04/Graduation-Manual-HB171-April-2026.pdf' },
      { claim: 'NM PED cohort 2029 graduation flyer: 24 units, CS shall be offered.', url: 'https://web.ped.nm.gov/wp-content/uploads/2025/05/Cohort-2029-Graduation-Requirements-Flyer-May.2025.pdf' },
      { claim: 'NM PED Graduation Requirements page: cohorts and entry years.', url: 'https://web.ped.nm.gov/bureaus/college-and-career-readiness-bureau/graduation/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: New Mexico access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Albuquerque: Bikeways Existing in 2024 feature service.', url: 'https://services.arcgis.com/CWv1abTnC3urn4bV/arcgis/rest/services/Bikeways_Existing_in_2024/FeatureServer' },
      { claim: 'IANA tzdb northamerica: New Mexico under US mountain time, America/Denver.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That New Mexico adopted CS standards in December 2018: the plan table gives that date for the goal, but the status column did not extract cleanly, so only the date is quoted as the plan states it.',
      'Whether all New Mexico high schools met the August 2023 offering goal: not claimed; Code.org shows 53.6% in 2023 to 2024.',
      'A year for the 3,335 participation count: the Code.org most recent tab gives no year, so none is attached.',
      'The meaning of CABQ_PM and the other undocumented maintainer codes: not guessed.',
      'Bikeway lengths: the layer length field is in map units, so no miles are printed.',
      'That our classes satisfy an HB171 elective or pathway: refused; only school courses do.',
      'Any affiliation with NM PED, the City of Albuquerque, Code.org or the College Board.'
    ]
  }
};
