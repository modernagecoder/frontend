'use strict';
// Rhode Island (cg- state page, US cluster Phase 4, row 97). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Rhode Island expects every student to graduate with half a credit of computer science, proven against six
// state concepts. What does that ask for, what do the numbers show, and how far apart are Providence's street trees?
// Department host: ride.ri.gov returned 403 on 17 October 2026, so no RIDE page is quoted. A copy of a RIDE guidance
// PDF saved by an earlier session turned out to be a Cloudflare challenge page, not the PDF, and was discarded.
// Sources read raw 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-rhode-island/):
//  - CS4RI, CS Proficiency (canonical https://www.cs4ri.org/cs-proficiency; a fresh copy and the earlier copy agree):
//    "Readiness-Based Graduation Requirements set the default expectation that all students will graduate proficient in
//    computer science by earning, at minimum, 0.5 credits of computer science during their secondary school
//    experience(middle or high school)"; the 0.5 credit "must include the demonstration of proficiency based upon the
//    Rhode Island Standards for Computer Science"; "six RI CS proficiency statements" for the "six core concepts",
//    banded 6-8 and 9-12: Computational Thinking & Programming, Computing Systems & Networks, Cybersecurity, Data &
//    Analysis, Digital Literacy, Responsible Computing in Society.
//  - CS4RI, About: "CS4RI (Computer Science for Rhode Island) is a state initiative launched in 2016 by the Office of
//    Governor" (name not printed) and a partnership including the Rhode Island Department of Education; mission
//    "as early as kindergarten", "2018 CS Education Standards", "2018 CS CTE standards". CS4RI is a state initiative,
//    not the department itself; that is stated on the page.
//  - CS4RI, Standards: the standards were "endorsed by the Rhode Island Council for Elementary and Secondary Education"
//    and build on CSTA and Code.org work.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): RI access 86%
//    (2018-19, 2019-20, 2020-21), 80% (2021-22), 82.5% (2022-23), 79.4% (2023-24), no 2024-25 value; most recent
//    50 of 63 high schools, 2023-24, "State Education Agency"; participation 11.3% (2021-22), 18.35% (2022-23);
//    8,172 of 44,533 (2022-23; denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: RI 72 (2023), 78 (2024); public 55 and 59;
//    non-public 17 and 19.
//  - IANA tzdb northamerica: Rhode Island under US eastern time, America/New_York; US DST rule.
//  - City of Providence, Providence Tree Dataset (Socrata b77h-59tz, Open Data Commons Attribution License,
//    attribution Forestry Division), fetched with $limit=30000: count 27,250 = rows fetched. Metadata: 2006
//    inventory, "One hundred volunteers were trained", parks and other public property "not included". Our results:
//    191 species labels; Callery pear 3,283, honey locust 2,241, London plane 2,122; nearest other tree median 9.7 m,
//    mean 11.2 m; 74 trees within 0.5 m of another; 13 more than 100 m from any other; maximum 212 m; same-species
//    medians London plane 11.5 m, pin oak 13.9 m.
// Lesson family: nearest-point distance (haversine), spatial grids, and duplicate points as a data-quality signal.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'RHODE ISLAND', label: 'Rhode Island', blurb: 'Coding and AI for Rhode Island students working toward the half-credit CS proficiency expectation, with a Providence street tree distance project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-rhode-island',
  code: 'ari',
  accent: '#2F3D70',
  accentRationale: 'Rhode Island: #2F3D70, a Narragansett Bay navy allocated for row 97 in alloc.tsv, dark enough for text on the paper',
  pageType: 'city',
  place: {
    name: 'Rhode Island',
    eyebrow: 'Rhode Island, United States',
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
  routeLabel: 'Rhode Island',
  title: 'Coding and AI Classes in Rhode Island | Live Online',
  description: 'Live online coding and AI classes for Rhode Island students: the 0.5 credit CS proficiency expectation, six state CS concepts, and a Providence tree data project.',
  ogDescription: 'Rhode Island expects students to graduate proficient in computer science. The half-credit rule, the six concepts, the published numbers and live classes for RI.',
  twitterDescription: 'Rhode Island coding and AI classes, live online, built around the CS proficiency expectation.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Rhode Island Students',
    description: 'Block coding, Python, JavaScript, cybersecurity, AP Computer Science Principles and AI for Rhode Island students from kindergarten to twelfth grade, taught live online in English.'
  },

  h1: 'Coding and AI classes in Rhode Island',
  capsuleQ: 'What computer science does a Rhode Island student need to graduate?',
  capsule: 'At minimum half a credit. Under Rhode Island&rsquo;s Readiness-Based Graduation Requirements, the default expectation is that every student earns 0.5 credits of computer science in middle or high school and shows proficiency against the state CS standards. Modern Age Coders teaches Rhode Island students live online, from a first block program to AP Computer Science Principles.',
  lead: 'The smallest state has set one of the clearest expectations in the country. According to CS4RI, the state&rsquo;s computer science initiative, a Rhode Island student is expected to leave school proficient in computer science, and half a credit earned in sixth grade or in twelfth can carry that proof. Half a credit is a floor, not a ceiling. This page explains the six concepts that proficiency is measured against, what the published access and enrollment figures show, a distance-calculation project on the City of Providence street tree inventory, and how live online classes help a student go well past the minimum without leaving home in Woonsocket, Westerly or anywhere between.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Rhode Island.',

  picks: {
    eyebrow: 'Course picks for Rhode Island',
    h2: 'Four routes through the six concepts',
    intro: 'Each course leans on different concepts from the state list. The free lesson tells us which route suits your student.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Computational thinking from the very start: sequences, loops and events in blocks, ending in games a child built alone.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 6 to 9', note: 'Interactive web pages in JavaScript, a natural home for digital literacy and programming in the middle school band.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 9 to 12', note: 'Defensive, ethical security: passwords, networks and safe practice, matching the cybersecurity concept Rhode Island names.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, including the Create task, for students who want proficiency on a national scale.' }
    ]
  },

  sections: [
    {
      id: 'credit', tint: '', eyebrow: 'The half-credit expectation',
      h2: 'Rhode Island&rsquo;s computer science proficiency rule in plain terms',
      intro: 'As CS4RI states it, read on 17 October 2026. The Rhode Island Department of Education site refused our request that day, so its own guidance is not quoted here.',
      body: [
        { kind: 'table', caption: 'The CS proficiency expectation as CS4RI describes it', head: ['Question', 'Answer from CS4RI'], rows: [
          ['What is expected?', 'That all students graduate proficient in computer science'],
          ['Through which rules?', 'The Readiness-Based Graduation Requirements'],
          ['How much course time?', 'At minimum, 0.5 credits of computer science'],
          ['When can it be earned?', 'During secondary school, in middle or high school'],
          ['What must the credit show?', 'Proficiency based on the Rhode Island Standards for Computer Science'],
          ['Measured against what?', 'Six proficiency statements, one for each core concept, banded for grades 6 to 8 and 9 to 12']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Who CS4RI is', p: 'CS4RI describes itself as a state initiative launched in 2016 by the Governor&rsquo;s office, working in partnership with the Rhode Island Department of Education, schools, colleges and employers.' },
          { h3: 'A default, not a ceiling', p: 'The wording is a default expectation of at least half a credit. Districts decide how students meet it, and a determined student can take far more.' },
          { h3: 'Check with the school', p: 'The exact course that counts, and when a given class year is first affected, is set by the district and RIDE. We do not restate dates we could not read at the source.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far is each Providence street tree from its nearest neighbor?',
      intro: 'The City of Providence publishes its street tree inventory under an Open Data Commons Attribution licence, credited to the Forestry Division. With 27,250 points it is big enough to need a clever algorithm and small enough to run on a laptop.',
      body: [
        { kind: 'table', caption: 'Providence Tree Dataset: our results from the download of 17 October 2026 (27,250 trees, API count matched)', head: ['What we measured', 'Our result'], rows: [
          ['Distinct species labels', '191'],
          ['Most common labels', 'Callery pear 3,283, honey locust 2,241, London plane 2,122'],
          ['Median distance to the nearest other tree', '9.7 meters'],
          ['Mean distance to the nearest other tree', '11.2 meters'],
          ['Trees more than 100 meters from any other', '13, with the loneliest 212 meters from its neighbor'],
          ['Trees within half a meter of another tree', '74, a clue to duplicate records rather than twin trunks'],
          ['Median distance to the nearest tree of the same species', 'London plane 11.5 meters, pin oak 13.9 meters']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Distance on a sphere', p: 'Latitude and longitude are angles, not meters. Students write the haversine formula in Python and test it on two points they can check on a map.' },
          { h3: '2. Make it fast', p: 'Comparing every tree with every other means about 370 million pairs. Dropping trees into a grid of small squares and searching only nearby squares turns minutes into seconds.' },
          { h3: '3. Doubt the outliers', p: 'Seventy-four trees sit almost on top of another. Are they real, or the same tree entered twice? Students decide how to treat them and say what changed.' }
        ] },
        { kind: 'callout', h3: 'Ours, and dated', p: 'These distances are our own calculation from one download. The city&rsquo;s description says the inventory began in 2006 with trained volunteers and that trees in parks and on other public property were not included, so a large gap may simply be a park. None of these figures is an official City of Providence statistic.' },
        { kind: 'p', text: 'This is Data and Analysis, one of Rhode Island&rsquo;s six concepts, done properly: gather the data, compute something defensible, and explain its limits. A ninth grader can run the haversine step on a sample of a few hundred trees; an AP student can build the grid search and compare its answers with a slow brute-force check.' }
      ]
    },
    {
      id: 'concepts', tint: 'tint', eyebrow: 'The six concepts',
      h2: 'What Rhode Island means by proficient in computer science',
      intro: 'CS4RI lists six proficiency statements tied to the Rhode Island CS Education Standards, which it says were endorsed by the Rhode Island Council for Elementary and Secondary Education.',
      body: [
        { kind: 'table', caption: 'The six core concepts named by CS4RI, with a short paraphrase, and where each appears in our classes (third column ours)', head: ['Concept', 'In brief', 'In our classes'], rows: [
          ['Computational Thinking and Programming', 'Writing programs; breaking problems down, then testing and evaluating solutions', 'Every course, from blocks to Java'],
          ['Computing Systems and Networks', 'Troubleshooting hardware and software errors in networked devices', 'Setup, debugging and web projects'],
          ['Cybersecurity', 'Recognizing online risks and responding to security breaches', 'The teen cybersecurity course'],
          ['Data and Analysis', 'Gathering, analyzing and presenting data, aware of bias in collection', 'The Providence tree project above'],
          ['Digital Literacy', 'Choosing the right software tools and synthesizing digital information', 'Research and documentation habits in every project'],
          ['Responsible Computing in Society', 'Safe, ethical use of technology and its effects on people', 'Discussion in each AI unit']
        ] },
        { kind: 'p', text: 'CS4RI&rsquo;s mission statement aims for computer science instruction as early as kindergarten and for access that meets the 2018 CS Education Standards, with high school pathways meeting the 2018 CS CTE standards. Cybersecurity standing as a concept of its own is unusual among state frameworks, and it makes the state list a useful checklist even for families outside a school course.' }
      ]
    },
    {
      id: 'figures', tint: 'deep', eyebrow: 'Published figures',
      h2: 'Access, enrollment and AP in Rhode Island',
      intro: 'Quoted from Code.org and the College Board. Empty years stay empty.',
      body: [
        { kind: 'table', caption: 'Rhode Island high schools offering foundational CS, as a percentage, Code.org (2025)', head: ['Year', 'Rhode Island'], rows: [
          ['2018 to 2019', '86%'],
          ['2019 to 2020', '86%'],
          ['2020 to 2021', '86%'],
          ['2021 to 2022', '80%'],
          ['2022 to 2023', '82.5%'],
          ['2023 to 2024', '79.4%, which the latest count gives as 50 of 63 high schools'],
          ['2024 to 2025', 'Not published for Rhode Island']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Enrollment', p: 'Code.org reports 8,172 of 44,533 high school students in a CS course in 2022 to 2023, or 18.35%, up from 11.3% the year before. The base is NCES enrollment for fall 2022.' },
          { h3: 'AP schools', p: 'The College Board counts Rhode Island schools giving any AP exam at 72, then 78 between 2023 and 2024: public schools 55 and 59, non-public 17 and 19.' },
          { h3: 'Reading it', p: 'Access was already high in 2018 to 2019 and has hovered near four in five schools since. Enrollment is where the movement shows, which fits a rule that asks every student for a credit.' }
        ] },
        { kind: 'p', text: 'Citation for the access and enrollment figures: Code.org (2025). 2025 State of AI + CS Education. We print single Rhode Island values; the full dataset belongs to its publisher. The link we draw between the rule and the enrollment rise is our reading, not a finding either source states.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Clock',
      h2: 'Eastern Time in the Ocean State',
      intro: 'Rhode Island is in the IANA database&rsquo;s US eastern group, which uses the America/New_York zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Autumn 2026', p: 'Clocks in Providence fall back on Sunday, November 1, 2026. From then, India time runs ten and a half hours ahead of Rhode Island.' },
          { h3: 'Spring 2027', p: 'They spring forward on Sunday, March 14, 2027, and the difference shrinks to nine and a half hours for the summer.' },
          { h3: 'What families see', p: 'Every class time we send is written in Eastern Time first, so nobody has to do the arithmetic.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Course ladder',
    h2: 'Past the half credit, one rung at a time',
    intro: 'Suggested grade ranges only. The placement lesson decides the first rung.',
    cols: [
      { band: 'Grades K to 5', h3: 'Think like a programmer', p: 'Blocks, patterns and small games that a child can explain step by step.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'The proficiency band', p: 'Typed code, web pages and first datasets, aligned to the grade 6 to 8 statements.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Depth and security', p: 'Python in depth and defensive cybersecurity, two concepts many schools touch only briefly.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles and machine learning on data the student has examined.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Responsible computing is the part AI cannot do for you',
    intro: 'Rhode Island lists Responsible Computing in Society as a concept in its own right, and AI tools make it urgent.',
    p1: 'Ask an AI assistant for the average gap between Providence street trees and it will produce a number. Whether that number counts the 74 near-duplicate points, or knows that park trees were left out of the inventory, is another matter. Only someone who has handled the data can tell.',
    p2: 'We teach students to use AI the way the state concept describes technology: safely, ethically, and with an eye on who is affected. That means checking outputs against the source, citing what they used, and keeping graded school work their own. Students under 18 use only AI tools whose terms allow their age.',
    closer: 'A half-credit course can introduce these ideas; building real projects is how they stick.',
    blogAnchor: 'the case for learning to code now'
  },

  delivery: {
    eyebrow: 'Format',
    h2: 'From Newport to Pawtucket, the same live lesson',
    intro: 'In a state this compact, the hardest part of an after-school class is often the drive. Online removes it.',
    cells: [
      { h3: 'Taught live', p: 'The teacher sees the student&rsquo;s screen and code as they work, which is how small misunderstandings get fixed before they grow.' },
      { h3: 'School-aware', p: 'Lessons follow US grade levels and the school year, and can connect to a school CS course. The student&rsquo;s graded assignments stay their own work.' },
      { h3: 'Pick a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group batches', p: 'Between fifteen and twenty learners matched on level, from Rhode Island and across the US.' },
      { h3: 'One to one', p: 'A dedicated teacher for a student who wants speed, AP support or help with a particular project.' },
      { h3: 'Free start', p: 'The opening lesson costs nothing, uses a real task, and ends with a suggested course and level.' }
    ],
    spec: { title: 'No Rhode Island premises', p: 'We do not have, and do not claim, any center in Rhode Island. Teaching happens live online from India; a computer, sound and a dependable internet connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for Rhode Island families',
    intro: 'Three numbers, the same in every town.',
    first: 'A complete first lesson with no charge, followed by a recommendation for course, level and time.',
    group: 'One month of live lessons in a skill-matched batch of fifteen to twenty.',
    private: 'One month on the same schedule with a single teacher for a single student.',
    closer: 'Rhode Island families pay one rate in US dollars. We bill only after the free lesson and after you have agreed the course and time; the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'Parents and students reviewing us on Google',

  book: {
    h2: 'Ask for a free lesson in Rhode Island',
    intro: 'Give us a grade and an aim. A second grader might begin with a block game, an eighth grader with a web page, and a high schooler with the Providence tree distances.',
    success: 'Thank you. Someone from the team will contact you soon about a class for your Rhode Island student.'
  },

  faq: {
    h2: 'Rhode Island coding and AI questions',
    intro: 'Each answer names its source; our own views are marked.',
    items: [
      { q: 'How much computer science does Rhode Island expect for graduation?', a: 'CS4RI says the Readiness-Based Graduation Requirements set a default expectation of at least 0.5 credits of computer science, earned in middle or high school, with proficiency shown against the state CS standards.' },
      { q: 'Can a middle school course count?', a: 'Yes. CS4RI says the half credit can be earned during the secondary school experience, in middle or high school.' },
      { q: 'What are the six Rhode Island CS concepts?', a: 'Computational Thinking and Programming, Computing Systems and Networks, Cybersecurity, Data and Analysis, Digital Literacy, and Responsible Computing in Society.' },
      { q: 'When were the Rhode Island CS standards written?', a: 'CS4RI refers to the 2018 CS Education Standards and says they were endorsed by the Rhode Island Council for Elementary and Secondary Education.' },
      { q: 'How many Rhode Island high schools offer computer science?', a: 'Code.org (2025) reports 50 of 63 Rhode Island high schools, about 79.4%, offering foundational computer science in 2023 to 2024.' },
      { q: 'How many Rhode Island students take computer science?', a: 'Code.org reports 8,172 of 44,533 high school students, or 18.35%, enrolled in computer science in 2022 to 2023.' },
      { q: 'Do your classes meet the Rhode Island requirement?', a: 'No. Only school courses approved locally count. We add skill, speed and portfolio projects on the side, while anything a school grades remains the student\'s work.' },
      { q: 'When do classes run for Rhode Island students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern Time.', boiler: true },
      { q: 'Is there a Rhode Island office?', a: 'No. Modern Age Coders has no office or center in Rhode Island. All classes are live and online, taught from India.', boiler: true },
      { q: 'Where are the fees shown?', a: 'Scroll up to the fees panel. It shows three figures, for the no-cost opening lesson, a month in a group and a month one to one, and we bill nothing until after that opening lesson.' }
    ]
  },

  next: {
    eyebrow: 'Further reading',
    h2: 'Where Rhode Island students go next',
    html: 'For the national exam route, see <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Students who like building under a deadline can read about <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> shows how another state wrote CS into graduation.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rhode Island and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-ari .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-ari .cg-hero h1 { font-weight: 680; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-ari .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ari .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-ari .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-ari .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-ari .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ari .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Rhode Island, read raw on 17 October 2026: ride.ri.gov returned 403, so no RIDE page is quoted; CS4RI (state initiative, launched in 2016 by the Governor\'s office, partnership with RIDE) CS Proficiency page (Readiness-Based Graduation Requirements, at least 0.5 credits of CS in middle or high school, proficiency against the RI CS standards, six core concepts banded 6-8 and 9-12), About page (as early as kindergarten, 2018 CS Education Standards, 2018 CS CTE standards), Standards page (endorsed by the Rhode Island Council for Elementary and Secondary Education); Code.org (2025) access 86%, 86%, 86%, 80%, 82.5%, 79.4%, 50 of 63 in 2023-24, participation 11.3% and 18.35%, 8,172 of 44,533 in 2022-23; College Board AP schools 72 and 78 (public 55 and 59, non-public 17 and 19); IANA America/New_York.',
    localProject: 'City of Providence, Providence Tree Dataset (ODC Attribution, Forestry Division), fetched 17 October 2026: 27,250 trees (API count matched), 191 species labels; our nearest-neighbor results: median 9.7 m, mean 11.2 m, 74 within 0.5 m of another, 13 over 100 m, maximum 212 m; same-species medians London plane 11.5 m, pin oak 13.9 m. Lesson family: haversine distance, grid search, duplicate points.',
    requiredMentions: [
      '0.5 credits of computer science',
      'Readiness-Based Graduation Requirements',
      '2018 CS Education Standards',
      'Rhode Island Council for Elementary and Secondary Education',
      'launched in 2016',
      '50 of 63',
      '8,172 of 44,533',
      '72, then 78',
      '27,250',
      '9.7 meters',
      'Responsible Computing in Society'
    ],
    sources: [
      { claim: 'CS4RI: CS Proficiency as a Graduation Requirement, 0.5 credits, six core concepts.', url: 'https://www.cs4ri.org/cs-proficiency' },
      { claim: 'CS4RI: About, state initiative launched in 2016, partnership with RIDE, 2018 standards.', url: 'https://www.cs4ri.org/about' },
      { claim: 'CS4RI: Rhode Island K-12 CS Education Standards, endorsed by the Council.', url: 'https://www.cs4ri.org/standards' },
      { claim: 'Code.org (2025), State of AI + CS Education data: RI access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Providence: Providence Tree Dataset (ODC Attribution).', url: 'https://data.providenceri.gov/d/b77h-59tz' },
      { claim: 'IANA tzdb northamerica: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'RIDE pages and the RIDE CS graduation requirement guidance PDF: ride.ri.gov returned 403 on 17 October 2026; the earlier saved "ri-guidance.pdf" was a Cloudflare challenge page, so nothing from RIDE is quoted.',
      'The first graduating class bound by the 0.5 credit expectation: not stated on the CS4RI pages read, so not printed.',
      'CS4RI State of CS policy text: it reproduces Code.org 2020 summaries, so it is not used as a state source.',
      'CS4RI funding amounts and broadening-participation identity content: money and identity content are out of scope.',
      'The name of the governor who launched CS4RI: individuals are not named.',
      'A cause for the 2021-22 to 2022-23 enrollment rise: offered only as our reading, labelled as such.',
      'Tree addresses and ward-level breakdowns: not printed; counts and distances only.',
      'That our classes meet the Rhode Island requirement: refused.',
      'Any affiliation with RIDE, CS4RI, the City of Providence, Code.org or the College Board.'
    ]
  }
};
