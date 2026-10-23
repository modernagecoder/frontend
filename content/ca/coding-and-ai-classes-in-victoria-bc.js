'use strict';
// Victoria, British Columbia (cg- city page, Canada cluster Wave 2, row 111). Spec docs/superpowers/specs/2026-10-22-ca-cluster-
// design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from coding-classes-in-british-columbia (the
// ADST arrival question and module choice) or computer-programming-11-and-12-bc (CP 11, CP 12 and CS 11 in depth): this page
// owns the Grades 6 and 7 computational thinking module seen from a Victoria family, the two senior course families in one
// table, the BC permanent-time release, a City of Victoria tree inventory project and the COMC to CMO path.
// Spine: the provincial capital that stopped changing its clocks in 2026, a parks tree file that teaches validation rules
// (a 76 m cherry tree should be questioned, not averaged), and the two routes to senior computing in BC schools.
// Sources, read raw on 22 and 23 October 2026:
//  - BC curriculum (keyword-research-2026-09/ca/src/bc/, facts-schools-contests.md rows 66-73): ADST 6 "Students will experience
//    a minimum of three modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."; Computational
//    Thinking module "simple algorithms", "visual programming" "for example, Kodu, Scratch"; ADST 10-12 list Computer Studies
//    10, Web Development 10, Computer Programming 11 and 12, Computer Information Systems 11 and 12, Robotics 11 and 12;
//    Mathematics list Computer Science 11 and 12, Pre-calculus 11 and 12, Calculus 12, Foundations of Mathematics 11 and 12,
//    Statistics 12; Computer Science 11 big idea Decomposition "dividing complex problems into parts that are easier to
//    conceive, understand, and program", sample question "What makes one algorithm better than another algorithm?";
//    Computer Programming 11 content "programming language constructs to support input/output, logic, decision structure,
//    and loops".
//  - BC Gov News release 2026AG0013-000209, "Adopting permanent daylight saving time", Victoria, Monday, March 2, 2026 (saved
//    geo/tz/gov_2026AG0013-000209): "B.C. will adopt permanent, year-round daylight saving time after clocks shift forward an
//    hour on Sunday, March 8, 2026"; "the transition to Pacific time, the name of B.C.'s new time zone, will be complete";
//    "Pacific time will be set seven hours behind co-ordinated universal time (UTC-7)". Legislative Assembly of BC footer
//    "Parliament Buildings, Victoria BC" (geo/lang/capitals/BC.html). IANA tzdb 2026e America/Vancouver -7 all year.
//  - City of Victoria open data, Tree Species (Parks trees database) (hub item 36e90771770542baaa89afddce69195a, layer 15;
//    maps.victoria.ca/server/rest/services/OpenData/OpenData_Parks/MapServer/15), CSV downloaded with curl on 22 October 2026
//    (7,250,211 bytes, sha256 f4a2c7c9...4b18). Dataset description (hub-dataset.json): "Diameter at Breast Height (DBH) is in
//    centimetres. Tree Canopy Height and Width are in metres." Licence (hub page item 60eb753ce52d432484c7403d968c530e, saved
//    victoria-licence-item.json): "including for commercial purposes"; attribution "Contains information licensed under the
//    Open Government Licence – City of Victoria." (en dash in source; written with a hyphen here); non-endorsement clause.
//  - Canadian Mathematical Society (facts-schools-contests.md rows 166-178): COMC "open to any student with an interest in and
//    grasp of high school math", "it is 2.5 hours long", 2026 date Thursday 29 October with registration closed 22 October;
//    "Only students in the Competitive Division will be eligible for prize money and potential invitations to the CMO.";
//    Repechage discontinued as of 2026; about 100 to 120 COMC students invited to the CMO or CJMO in March ("100 – 120" in
//    source). CEMC CCC "Wednesday, February 17, 2027", through a school (rows 112, 115).
//  - facts-geo.md: Victoria CMA area codes 250, 778, 236, 672, 257 (CNAC via the Internet Archive); Saanich is in the Victoria
//    CMA; India ahead by 12 hours 30 minutes all year; Alberta UTC-6 all year; Ontario UTC-5 / UTC-4. No populations.
// Our own calculations (trees_page.py, the script printed on this page, and analysis.out.txt; python -I; in keyword-research-
// 2026-09/ca/src-pilots/coding-and-ai-classes-in-victoria-bc/): 34,965 rows; 490 common names (501 botanical); Garry oak 5,200
// (3,974 Park Trees), Cherry plum 1,814, Douglas fir 1,300, Field elm 1,080, Bigleaf maple 1,004; flags: height exactly 0 68,
// negative height 24 (lowest -4), trunk diameter 0 21, "cherry" in the name and over 20 m 5; tallest rows Redwood 112 m (DBH
// 171 cm), Japanese kwanzan cherry 76 m, Flowering Cherry 72 m, Japanese kwanzan cherry 56 m; medians: Japanese kwanzan cherry
// 6 m (771 rows), Flowering Cherry 6 m (288), Douglas fir 16 m with a maximum of 36 m, Redwood 17 m (10 rows, second tallest
// 30 m). Thresholds (0, 20 m for cherries) are ours. The four rules raise 118 flags on 100 distinct rows. TreeCategory Park Trees 13,996, Boulevard Tree 9,887.
// Lesson family: validation rules on numeric columns (range checks and per-category checks), and why outliers are flagged,
// not deleted.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'species = Counter()',
  'flags = Counter()',
  'tallest = []',
  '',
  'with open("tree-species.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        name = row["CommonName"]',
  '        height = float(row["Height"])',
  '        dbh = float(row["DiameterAtBreastHeight"])',
  '        species[name] += 1',
  '        if height &lt; 0:',
  '            flags["negative height"] += 1',
  '        if height == 0:',
  '            flags["height exactly 0"] += 1',
  '        if "cherry" in name.lower() and height &gt; 20:',
  '            flags["cherry over 20 m"] += 1',
  '        if dbh == 0:',
  '            flags["trunk diameter 0"] += 1',
  '        tallest.append((height, name, dbh))',
  '',
  'print("rows:", sum(species.values()), "names:", len(species))',
  'for name, n in species.most_common(5):',
  '    print(name, n)',
  'for problem, n in flags.most_common():',
  '    print("FLAG", problem, n)',
  'for height, name, dbh in sorted(tallest, reverse=True)[:4]:',
  '    print(height, "m", name, "trunk", dbh, "cm")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'VICTORIA BC', label: 'Victoria, BC', blurb: "Live online coding and AI for Victoria, British Columbia students, with a City of Victoria tree data project and BC's new year-round Pacific time." },
  market: CA,
  slug: 'coding-and-ai-classes-in-victoria-bc',
  code: 'avb',
  accent: '#4C3C0E',
  accentRationale: 'Victoria, British Columbia: a dark Garry-oak bark brown, #4C3C0E, allocated for this row and at least 14 RGB units from the other Canada accents; contrast 10.11 on the paper #FBF8F2 and above 8.7 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Victoria',
    eyebrow: 'Victoria, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Victoria, BC',
  title: 'Coding and AI Classes in Victoria, BC | Live Online, Ages 6 Up',
  description: 'Live online coding, Python and AI classes for Victoria, British Columbia students aged 6 to adult, on year-round Pacific time, with a Victoria tree data project.',
  ogDescription: 'Coding and AI for students in Victoria, British Columbia, taught live online, with a City of Victoria tree file that teaches students to question their data.',
  twitterDescription: 'Victoria, BC coding, Python and AI classes, live online on year-round Pacific time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Victoria, BC Students',
    description: 'Level-matched live online coding for Victoria, British Columbia students from age 6 to adult: blocks, Python, AI and machine learning, and Pre-calculus 12 support, taught in English on Pacific time.'
  },

  h1: 'Coding and AI classes in Victoria, British Columbia',
  capsuleQ: 'Where can a student in Victoria, BC learn coding and AI with a live teacher?',
  capsule: 'Students in Victoria, British Columbia, aged 6 to adult, learn coding, Python and AI with Modern Age Coders in live online lessons, either alongside 15 to 20 classmates or with a private teacher. Children start with Python and AI for Kids, teens with Python for Teens and then AI and machine learning. Classes keep BC&rsquo;s year-round Pacific time, and the first is free.',
  lead: 'It was from Victoria that British Columbia announced, on 2 March 2026, that it would stop changing its clocks, and the city&rsquo;s students now live on one Pacific time all year. School computing has a shape of its own here too. In Grades 6 and 7, BC students take at least three Applied Design, Skills, and Technologies modules each year, one possible focus being computational thinking with visual programming. In the senior grades, programming appears in two separate course families, one under ADST and one under Mathematics. This page explains both routes, walks through the checks we wrote for the City of Victoria&rsquo;s parks tree inventory, sets out the national math competition path open to Victoria students, and shows how class times work now that BC no longer falls back.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Victoria, BC.',

  picks: {
    eyebrow: 'Course picks for Victoria',
    h2: 'Four courses Victoria families start with',
    intro: 'By age and stage, then confirmed in the free first class. We teach beside school and grant no provincial credits.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with drawings, games and first AI ideas, the natural next step after Scratch or Kodu at school.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from scratch to files and real data, including the Victoria tree file used on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python where the student checks the data first, which is the whole lesson of the tree project.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12 math', note: 'Built around BC&rsquo;s Pre-calculus 12, running alongside the school course. We do not grant provincial credits; the school does.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding at school in Victoria',
      h2: 'Two routes to programming in a Victoria school',
      intro: 'Victoria schools follow the BC curriculum. The course pages on curriculum.gov.bc.ca were read in raw form on 22 October 2026. Anything in quotation marks is the province&rsquo;s wording; the right-hand column is our own plain reading.',
      body: [
        { kind: 'table', caption: 'Where programming appears in the BC curriculum for a Victoria student, from the ministry&rsquo;s course lists (read 22 October 2026). Summaries are ours', head: ['Stage', 'Course or module', 'Our summary'], rows: [
          ['Grades 6 and 7', 'ADST modules, at least three each year; one option is computational thinking', 'Simple algorithms and visual programming, with Kodu and Scratch named as examples'],
          ['Grade 10', 'Computer Studies 10, Web Development 10 (ADST)', 'A first proper look at computing and the web'],
          ['Grades 11 and 12, ADST route', 'Computer Programming 11 and 12, Computer Information Systems 11 and 12, Robotics 11 and 12', 'Applied programming: input and output, decisions and loops, then functions, methods and classes'],
          ['Grades 11 and 12, Mathematics route', 'Computer Science 11 and 12', 'Programming treated as mathematics: decomposition, algorithms and their correctness'],
          ['Grades 11 and 12, math beside it', 'Pre-calculus 11 and 12, Calculus 12, Foundations of Mathematics 11 and 12, Statistics 12', 'The senior math list a computing student usually chooses from']
        ] },
        { kind: 'p', text: 'The split matters for a Victoria teen. Computer Programming 11 is about building working programs with the constructs every language shares; the ministry lists &ldquo;input/output, logic, decision structure, and loops&rdquo;. Computer Science 11, filed under Mathematics, asks questions such as &ldquo;What makes one algorithm better than another algorithm?&rdquo; Many students would enjoy both, and few schools can timetable both for everyone. A student who has already written a few hundred lines of Python arrives at either course with the basics settled and time to think about the harder ideas.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ask which modules', p: 'Because ADST in Grades 6 and 7 is built from modules, two Victoria classes can have quite different years. It is worth asking the school whether the computational thinking module ran, and what the children made in it.' },
          { h3: 'Decomposition first', p: 'BC&rsquo;s Computer Science 11 defines decomposition as dividing complex problems into parts that are easier to conceive, understand and program. That is the first habit we teach, years before Grade 11.' },
          { h3: 'Pre-calculus 12 alongside', p: 'Computing students often carry Pre-calculus 12 in the same year. Our Grade 12 math course follows it closely, beside the school course rather than in place of it.' }
        ] },
        { kind: 'callout', h3: 'Alongside school only', p: 'Our classes run beside a Victoria student&rsquo;s school courses. We do not grant provincial credits, and every BC credit is earned through the school. We are not connected with the BC education ministry, the local school district or the City of Victoria.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Victoria data project',
      h2: 'Is there really a 76 m cherry tree in Victoria? A project on the city&rsquo;s tree file',
      intro: 'The City of Victoria publishes its parks department tree inventory as open data: species, trunk diameter and height for each tree it maintains. Our students write rules that catch impossible or doubtful values before they average anything. The counts are ours.',
      body: [
        { kind: 'table', caption: 'Our checks on the City of Victoria Tree Species file, downloaded 22 October 2026 (34,965 rows). Height in metres and trunk diameter in centimetres, per the dataset description; the thresholds are ours', head: ['Check (our rule)', 'Rows flagged', 'Why it deserves a second look'], rows: [
          ['Height exactly 0', '68', 'Probably not measured, recorded as 0'],
          ['Height below 0', '24', 'A height cannot be negative; the lowest is -4 m'],
          ['Trunk diameter 0', '21', 'A standing tree has a trunk'],
          ['Name contains &ldquo;cherry&rdquo; and height over 20 m', '5', 'Japanese kwanzan cherries in the file have a median height of 6 m'],
          ['Tallest row in the file', '1', 'A redwood at 112 m; the other nine redwoods have a median of 17 m and the next tallest is 30 m']
        ] },
        { kind: 'p', text: 'This script runs every check and prints the five commonest species and the four tallest rows. It needs Python 3 and the downloaded CSV, nothing else:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the units', p: 'The city&rsquo;s dataset description says trunk diameter at breast height is in centimetres and canopy height and width are in metres. Without that sentence, nobody could say whether 76 is suspicious.' },
          { h3: '2. Compare like with like', p: 'A range check catches negatives. A per-species check catches more: the 76 m and 56 m kwanzan cherries sit beside 771 kwanzan cherry rows with a median of 6 m, and above every Douglas fir in the file, whose tallest is 36 m.' },
          { h3: '3. Know the rule&rsquo;s limits', p: 'Matching the word &ldquo;cherry&rdquo; also catches cherry plum, a different tree, and misses a cherry spelled another way. Students see their own rule catch the wrong things, and fix it.' }
        ] },
        { kind: 'callout', h3: 'Flag, do not delete', p: 'The right response to a 112 m redwood is a note, not a silent delete. It may be a typing slip, perhaps a misplaced digit, or the tree may be recorded in the wrong field; the file cannot tell us which. A student whose rules raise 118 flags on 100 different rows, who explains each rule and leaves the decision visible has done honest data work.' },
        { kind: 'p', text: 'Most of the file is ordinary and lovely to explore. Garry oak is the commonest tree, with 5,200 rows, 3,974 of them park trees, followed by cherry plum (1,814) and Douglas fir (1,300). A good follow-up maps the Garry oaks by neighbourhood with the Area column. Contains information licensed under the Open Government Licence - City of Victoria (<a class="cg-inline-link" href="https://opendata.victoria.ca/pages/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://opendata.victoria.ca/datasets/36e90771770542baaa89afddce69195a_15">dataset page</a>). The City has not endorsed us or this page.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Victoria',
      h2: 'The national math path, and one computing contest, for Victoria students',
      intro: 'Two organisations run the contests Victoria students most often write: the Canadian Mathematical Society (CMS) and the University of Waterloo&rsquo;s CEMC. Facts below are from their pages, read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'COMC, every autumn', p: 'The CMS calls the Canadian Open Mathematics Challenge its premier national competition, open to any student with a grasp of high school math, and 2.5 hours long. The 2026 sitting is on Thursday 29 October, and registration closed on 22 October, so Victoria students should plan for autumn 2027.' },
          { h3: 'From COMC to the CMO', p: 'About 100 to 120 top COMC students are invited to the Canadian Mathematical Olympiad or its junior version in March. Since 2026 only students in the COMC&rsquo;s Competitive Division can win prizes or invitations, and the CMS has discontinued the Repechage round.' },
          { h3: 'The CCC for programmers', p: 'CEMC lists the 2027 Canadian Computing Competition for Wednesday 17 February 2027. Victoria students enter through a school, since CEMC accepts no individual registrations, and can write in Python, Java, C or C++.' }
        ] },
        { kind: 'p', text: 'For both organisations, we prepare students with original problems we write ourselves and label as ours, and send them to the organisers&rsquo; own archives for genuine past papers; CEMC&rsquo;s are at <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">its free past contests page</a>. The tree project is useful contest training in disguise: a careful competitor checks every value against the problem&rsquo;s limits before trusting it. Read more on <a class="cg-inline-link" href="/comc-canada-open-mathematics-challenge-guide">our COMC guide</a> and <a class="cg-inline-link" href="/canadian-math-olympiad-cmo-path">the path to the CMO</a>. Modern Age Coders is not connected with the CMS, CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Victoria&rsquo;s clock no longer changes, so neither do class times',
      intro: 'The BC government announced from Victoria on 2 March 2026 that the province would adopt permanent, year-round daylight saving time after clocks went forward on Sunday 8 March 2026. The release says the new zone is called Pacific time and sits seven hours behind UTC.',
      body: [
        { kind: 'table', caption: 'Victoria on year-round Pacific time (UTC-7) against India and three Canadian cities, 2026 to 2027. Offsets from the BC release and IANA tzdb 2026e; comparisons ours', head: ['Compared with', 'Winter, from 1 November 2026', 'Summer, from 14 March 2027'], rows: [
          ['India', '12 hours 30 minutes ahead of Victoria', '12 hours 30 minutes ahead of Victoria'],
          ['Calgary and Edmonton', 'An hour ahead', 'An hour ahead'],
          ['Toronto', 'Two hours ahead', 'Three hours ahead'],
          ['Halifax', 'Three hours ahead', 'Four hours ahead']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nothing moves on 1 November', p: 'Clocks in Victoria would once have gone back on 1 November 2026; under the province&rsquo;s decision they stay put. A Victoria class keeps the same local time through the winter while the gap to Toronto shrinks to two hours.' },
          { h3: 'What India time looks like', p: 'A 4 to 7 pm weekday class in Victoria runs 4:30 to 7:30 am the next day in India. A 9 am to noon Saturday class runs from 9:30 pm to 12:30 am. Our teachers keep both.' },
          { h3: 'Victoria area codes', p: 'Numbers on Vancouver Island use 250, 778, 236, 672 or 257. Enter the ten digits; the +1 for Canada is filled in for you.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch in Grade 6 to Computer Science 12 and AI',
    intro: 'A guide, not a rule; the free class decides where each student starts.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences, loops and events with visual tools, and a habit of saying the plan before running it.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Beyond the ADST module', p: 'Typed Python with conditions and functions, plus a first look at how AI learns from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 8 to 10', h3: 'Python with data', p: 'Files, lists and the Victoria tree file, with a first try at the CCC Junior for keen students.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'AI and Pre-calculus 12', p: 'Machine learning on real data, and support beside Pre-calculus 12, with no credit granted by us.', courses: ['ai-ml-masterclass-teens', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Victoria teen learn to code if AI can do it?',
    intro: 'Because the tool will average a 112 m redwood without blinking.',
    p1: 'Ask an AI assistant for the average height of Victoria&rsquo;s redwoods and it will compute one. Unless it is told to, it will not notice that one tree is recorded at 112 m while the rest have a median of 17 m. The arithmetic is perfect and the answer misleading. Seeing that takes someone who knows the data and has written the checks.',
    p2: 'That is what we train: think about the question, write the code, then doubt the output until it earns trust. Students use AI tools as they grow older, within each tool&rsquo;s age rules, to explain and review, and never to produce work they cannot defend.',
    closer: 'BC&rsquo;s Computer Science 11 asks how we know an algorithm is correct; that question is the skill, and no assistant can ask it for the student.',
    blogAnchor: 'our longer argument for learning to code alongside AI tools'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online classes work for Victoria families',
    intro: 'No ferry, no drive: a student in Saanich and one downtown share a teacher from home.',
    cells: [
      { h3: 'When classes run', p: TIMING },
      { h3: 'Across Greater Victoria', p: 'Families in Saanich and the rest of the region join the same classes on the same year-round Pacific clock.' },
      { h3: 'Shared or private lessons', p: 'Share a teacher with 15 to 20 students working at the same level, or book private lessons for a quicker pace, contest preparation or Pre-calculus 12.' },
      { h3: 'Planned in BC grades', p: 'Teachers plan by BC grade and know the ADST modules and the Grade 11 and 12 course families. Anything a school will grade is written by the student alone.' },
      { h3: 'Equipment', p: 'A computer with a microphone and a steady connection. Tablets suit young block coders; Python needs a keyboard.' },
      { h3: 'First class free', p: 'The trial is a genuine lesson, and at its close the teacher recommends a level, a course and a slot. We never ask for a card.' }
    ],
    spec: { title: 'No Victoria classroom', p: 'Modern Age Coders has no office or centre in Victoria. Every class is live online, taught from India in English.' }
  },

  fees: {
    h2: 'Fees for Victoria families',
    intro: 'Three options, displayed in your own currency.',
    first: 'A complete live lesson at no cost, ending with a suggested course and time.',
    group: 'The monthly fee for a class of 15 to 20 students at the same level.',
    private: 'The monthly fee for one-to-one lessons at times the family chooses.',
    closer: 'Victoria is charged exactly what the rest of Canada is charged. Nothing is billed until after the free lesson; missed classes and holidays are explained on the pricing page.'
  },

  reviewsH2: 'What families and students say about us on Google',

  book: {
    h2: 'Book a free class for a Victoria student',
    intro: 'Share the age and any coding the student has done. A Grade 2 child might build a short animation, a Grade 7 student who met Scratch in ADST a Python game, and a Grade 11 student the tree checks.',
    success: 'Thank you. The team will be in touch soon about a class for Victoria.'
  },

  faq: {
    h2: 'Victoria, BC coding and AI questions',
    intro: 'What families in Victoria ask us most.',
    items: [
      { q: 'Are there coding classes for kids in Victoria, BC?', a: 'There are, delivered over live video with no Victoria building involved. A six-year-old can start from the family computer, learning with a shared class or with a teacher alone.' },
      { q: 'What do Victoria students learn about coding in Grades 6 and 7?', a: 'BC students take at least three ADST modules in each of Grades 6 and 7. One option is computational thinking, with simple algorithms and visual programming such as Kodu or Scratch. Which modules run depends on the school.' },
      { q: 'Computer Programming 11 or Computer Science 11?', a: 'Both are BC courses. Computer Programming 11 sits under ADST and builds working programs; Computer Science 11 sits under Mathematics and treats algorithms more formally. We teach the Python both need.' },
      { q: 'Do your classes give a BC credit?', a: 'No, and we say so plainly: we do not grant provincial credits. A BC credit is earned only through a school course, which our lessons support from the side.' },
      { q: 'Can you help with Pre-calculus 12 in Victoria?', a: 'Yes. Our Grade 12 math course is built around BC Pre-calculus 12 and runs beside the school course, in a class or one to one.' },
      { q: 'Did class times change on 1 November 2026 in Victoria?', a: 'No. BC moved to permanent Pacific time at UTC-7 after clocks went forward on 8 March 2026, so Victoria did not fall back and booked classes keep their local time.' },
      { q: 'Which days and hours can a Victoria student book?', a: TIMING + ' We write every confirmation in Pacific time.' },
      { q: 'Can my child write the COMC or the CCC from Victoria?', a: 'Yes. The COMC is run by the Canadian Mathematical Society and the 2026 registration has closed, so plan for 2027. The CCC on Wednesday 17 February 2027 is entered through a school.' },
      { q: 'Will a 250 or 778 number work in the form?', a: 'It will. Any Vancouver Island number on 250, 778, 236, 672 or 257 is accepted once you key in its ten digits, leaving off the 1 at the front.' },
      { q: 'Where are the fees shown?', a: 'Further down this page, under fees, in whatever currency your browser reports: one free trial, then a monthly figure for shared classes and another for private lessons. Payment is never taken before the trial.' }
    ]
  },

  next: {
    eyebrow: 'More for BC',
    h2: 'Related pages for Victoria and BC students',
    html: 'Province-wide advice is on <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, and the national overview on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Senior students can read <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 in BC</a> and <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 help</a>, and every Canadian clock is on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Victoria and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
    { href: '/comc-canada-open-mathematics-challenge-guide', label: 'COMC guide' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-avb .cg-hero h1 { font-weight: 660; letter-spacing: -0.01em; line-height: 1.09; }
.cg-root.cg-avb .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-avb .cg-eyebrow { letter-spacing: 0.11em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-avb .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-avb .cg-table caption { font-weight: 620; text-align: left; }
.cg-root.cg-avb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-avb #trees code { display: block; white-space: pre; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 2px solid var(--cg-accent); }
.cg-root.cg-avb .cg-ladder-col { border-top: 1px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-avb .cg-callout { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'BC curriculum (curriculum.gov.bc.ca), read raw 22 October 2026 (ca/src/bc/): ADST 6-7 minimum three modules a year, computational thinking module (simple algorithms, visual programming, Kodu and Scratch); ADST 10-12 computing courses; Mathematics list with Computer Science 11 and 12, Pre-calculus 11 and 12, Calculus 12; CS 11 decomposition and algorithm questions; CP 11 constructs. BC Gov News release 2026AG0013-000209 (permanent Pacific time, UTC-7, after 8 March 2026). CMS COMC and CMO facts; CEMC CCC date and through-a-school rule. Victoria area codes and offsets from facts-geo.md.',
    localProject: 'City of Victoria open data, Tree Species (Parks trees database) (Open Government Licence - City of Victoria), CSV downloaded with curl on 22 October 2026 and checked with our script trees_page.py (python -I): 34,965 rows, 490 common names; Garry oak 5,200; flags height 0 (68), negative (24), DBH 0 (21), cherry over 20 m (5); tallest Redwood 112 m, kwanzan cherry 76 m, Flowering Cherry 72 m; kwanzan cherry median 6 m; Douglas fir max 36 m. Units from the dataset description. Thresholds labelled ours. Lesson family: validation rules on numeric columns, flag rather than delete.',
    requiredMentions: [
      'Garry oak is the commonest tree, with 5,200 rows',
      'median height of 6 m',
      'whose tallest is 36 m',
      '118 flags on 100 different rows',
      'the 76 m and 56 m kwanzan cherries',
      'the gap to Toronto shrinks to two hours',
      'Pacific time and sits seven hours behind UTC',
      'Matching the word',
      'Repechage round',
      'two Victoria classes can have quite different years'
    ],
    sources: [
      { claim: 'BC curriculum: ADST 6 core (modules, computational thinking).', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC curriculum: ADST course list for Grades 10 to 12.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC curriculum: Mathematics course list and Computer Science 11.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'BC Gov News: Adopting permanent daylight saving time (2 March 2026).', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'City of Victoria open data: Tree Species (Parks trees database), with units in the description.', url: 'https://opendata.victoria.ca/datasets/36e90771770542baaa89afddce69195a_15' },
      { claim: 'City of Victoria: Open Government Licence (commercial use, attribution, non-endorsement).', url: 'https://opendata.victoria.ca/pages/open-data-licence' },
      { claim: 'Canadian Mathematical Society: COMC and its 2026 changes; CMO invitations.', url: 'https://cms.math.ca/competitions/comc/' },
      { claim: 'CEMC Canadian Computing Competition: 2027 date and languages.', url: 'https://cemc.uwaterloo.ca/contests/ccc' }
    ],
    rejectedClaims: [
      'That Victoria has a 112 m redwood or a 76 m cherry: not claimed; the values are flagged as doubtful, not confirmed or corrected.',
      'Any explanation of why a value is wrong (typo, wrong field): offered only as possibilities; the file cannot say.',
      'Any Victoria population figure: StatCan was not reachable live.',
      'BC graduation numeracy and literacy assessments: not stated; the BC government page could not be read (connection reset).',
      'That our classes earn or count toward a BC credit: refused; we do not grant provincial credits.',
      'A total of trees per neighbourhood presented as an official count: not printed.',
      'CMS and CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Victoria schools or private people: not used (the school district is referred to generically).',
      'Any affiliation with the City of Victoria, the BC government, the CMS, CEMC or the University of Waterloo.'
    ]
  }
};
