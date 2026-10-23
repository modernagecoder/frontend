'use strict';
// Langley, British Columbia (cg- city page, Canada cluster Wave 2, row 155). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: BC Applied Design, Skills, and
// Technologies 6-7 (three modules a year; the Computational Thinking module: simple algorithms, visual programming such as
// Kodu and Scratch, visual representations), a two-way table project on the Township of Langley Parks layer (community by
// park type, read as JSON), BC's permanent UTC-7 from 2026, and the Beaver Computing Challenge as a contest built on math
// that every province teaches. Township of Langley data only; the City of Langley is a separate municipality.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/bc/adst-6-core.txt
// (curriculum.gov.bc.ca/curriculum/adst/6/core) and facts-schools-contests.md:
//  - "Students will experience a minimum of three modules of Applied Design, Skills, and Technologies 6-7 in each of Grades
//    6 and 7."; "Locally developed modules can be offered in addition to, or instead of, the modules in the provincial
//    curriculum."; Computational Thinking content "simple algorithms" with the elaboration "for sorting, searching, sequence,
//    selection, and repetition; specific statements to complete a simple task; cryptography and code breaking (e.g.,
//    cyphers)"; "visual programming" "for example, Kodu, Scratch"; visual representations "graphs, charts, network diagrams,
//    info graphics, flow charts, lists, tables, or arrays"; Big Idea "Complex tasks require the acquisition of additional
//    skills." BC K-5 coding: not claimed (no source fetched).
//  - BC time (facts-geo.md, BC Gov News 2026AG0013-000209, saved raw in src/geo/tz): "B.C. will adopt permanent, year-round
//    daylight saving time after clocks shift forward an hour on Sunday, March 8, 2026" and "the elimination of the next time
//    change, previously scheduled for Nov. 1, 2026". UTC-7 all year; India 12 h 30 ahead (our arithmetic).
//  - CEMC BCC: "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces.";
//    "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC."; "Monday, November 9, 2026 to Friday,
//    November 20, 2026"; "This contest is available in English only."; "Students may participate in at most one Beaver
//    Computing Challenge in a school year."; "all students must participate through their school."
//  - Place facts (Langley's own, 8+): Township of Langley (StatCan CSD 5915001) and City of Langley (5915002) are separate
//    municipalities, and places.tsv puts the Township in the Vancouver CMA (facts-geo.md; no population printed); area codes
//    604 with 236, 257, 672 and 778 overlaying (facts-geo.md section 4); Parks item "Parks and greenways that are dedicated
//    for public use and maintained by parks division.", accessInformation "TOL Geomatics", item modified 18 January 2024;
//    the layer returned 216 records; community values include Willoughby, Walnut Grove, Brookswood, Aldergrove, Murrayville,
//    Fort Langley, Willowbrook, Gloucester and Rural; Open Government License - Township of Langley: "including for
//    commercial purposes"; attribution "Contains information licensed under the Open Government License - Township of
//    Langley." (en dash in source); "All Township of Langley Open Data obtained prior to January 1, 2016 is issued under
//    the Creative Commons License". No park names printed (34 rows are school grounds that carry school names).
// Our own calculations (park_crosstab.py and page_script.py, python -I; outputs park_crosstab.out.txt, page_script.out.txt
// in ca/src-pilots/coding-classes-for-kids-in-langley-bc/): 216 rows; types Greenway Lot 78, Neighbourhood Park 56, School 34,
// Special Purpose Park 20, Community Park 8, Municipal Park 8, Regional Park 7, Cemetery 3, National Park 2; Neighbourhood
// Parks by community Walnut Grove 13, Willoughby 10, Aldergrove 8, Murrayville 7, Willowbrook 7, Rural 5, Brookswood 3, Fort
// Langley 2, Gloucester 1; Greenway Lots Willoughby 25, Walnut Grove 4, Aldergrove 2, Murrayville 1, none given 46; 46 rows
// have no community, all Greenway Lots, 45 of them with no status either; status Complete 161, In Progress 5, Conceptual 4;
// 163 distinct park names; Fort Langley rows include both National Park rows. India time arithmetic ours.
// Lesson family: a two-way table with nested dictionaries, reading JSON, and treating a missing value as its own category.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'with open("tol-parks.json", encoding="utf-8") as f:',
  '    parks = [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'table = {}',
  'for park in parks:',
  '    place = park["CommunityCode"] or "(none given)"',
  '    kind = park["ParkType"]',
  '    row = table.setdefault(place, {})',
  '    row[kind] = row.get(kind, 0) + 1',
  '',
  'for place, row in table.items():',
  '    print(place, row.get("Neighbourhood Park", 0), row.get("Greenway Lot", 0))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'LANGLEY', label: 'Langley', blurb: 'Coding for Langley children aged 6 to 12: BC ADST computational thinking, a Township of Langley parks table project, and the Beaver Computing Challenge.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-langley-bc',
  code: 'klb',
  accent: '#7A2212',
  accentRationale: 'Langley kids page: a deep barn red, #7A2212, allocated to this row by the Canada group so it is at least 6 RGB units from every site accent and 14 from other Canada accents; contrast 9.59 on the paper #FBF8F2, 9.02 on #F5F1E8 and 8.25 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Langley',
    eyebrow: 'Langley, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-canada', name: 'Canada' },
    { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }
  ],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Langley',
  title: 'Coding Classes for Kids in Langley, BC | Ages 6 to 12, Live',
  description: 'Live online coding for Langley kids aged 6 to 12: BC ADST computational thinking, a Township of Langley parks data project, and times on permanent Pacific time.',
  ogDescription: 'BC Grades 6 and 7 include computational thinking in ADST. See what that means for Langley children, a parks table project on Township data, and live online classes.',
  twitterDescription: 'Live coding for Langley children aged 6 to 12, from Scratch to Python, on BC time all year.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Langley Children Aged 6 to 12',
    description: 'Live online coding for Langley children from Kindergarten age to Grade 7: Scratch and visual programming, game design, then typed Python with a Township of Langley data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Langley, BC',
  capsuleQ: 'Is there a live coding class for Langley children aged 6 to 12?',
  capsule: 'Yes, online. Langley children from 6 to 12 study with Modern Age Coders in real-time lessons, sharing a teacher with fifteen to twenty classmates or having one all to themselves. Scratch Coding for Kids and Game Development for Kids suit younger beginners; Python and AI for Kids suits most from about 9. The first lesson is free.',
  lead: 'In British Columbia, coding gets a named home in Grades 6 and 7: the Computational Thinking module of Applied Design, Skills, and Technologies, one of the modules schools can choose. Its content list reads like a first computer science course, from sorting and searching to code breaking. Whether a Langley child meets it depends on the modules the school picks, and younger children may meet coding only now and then. Our classes give every child a steady path from the first Scratch project to typed Python. On this page: what BC&rsquo;s curriculum says, a real project on the Township of Langley&rsquo;s parks data, the clock news that matters for a BC family booking online classes, and the Beaver Computing Challenge.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Langley.',

  picks: {
    eyebrow: 'Courses for Langley children',
    h2: 'Four courses Langley children start with',
    intro: 'Pick by age and what the child enjoys; the free class settles the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Visual programming of the kind BC&rsquo;s ADST content names, with Scratch as the tool: sequences, repeats and choices built into games and animations.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, then Roblox and Minecraft, with rules designed on paper first, a natural fit for the design thinking at the heart of ADST.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with turtle art, games and real data, including the Township parks table below, for children ready to write their own lines.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'A wide first course with blocks, Scratch games, a small app and a first look at AI, grouped by age so every child is in the right room.' }
    ]
  },

  sections: [
    {
      id: 'adst', tint: '', eyebrow: 'Coding at school in Langley',
      h2: 'BC&rsquo;s Computational Thinking module: the coding a Langley child may meet in Grades 6 and 7',
      intro: 'Langley schools follow the British Columbia curriculum. We read the Applied Design, Skills, and Technologies (ADST) 6-7 page on curriculum.gov.bc.ca on 22 October 2026. The quotes are the ministry&rsquo;s; the right column is how we use them.',
      body: [
        { kind: 'align', rows: [
          { code: 'ADST 6-7', req: '&ldquo;Students will experience a minimum of three modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7.&rdquo;', ours: 'Computational Thinking is one module among many, so a Langley child may or may not take it in a given year. Our classes make sure the coding happens either way.' },
          { code: 'Computational Thinking', req: '&ldquo;simple algorithms&rdquo; for &ldquo;sorting, searching, sequence, selection, and repetition; specific statements to complete a simple task; cryptography and code breaking (e.g., cyphers)&rdquo;', ours: 'Code breaking is the hook we use with ten-year-olds. A Caesar cipher in Scratch teaches sequence, repetition and selection in one project, and children love sending secret messages.' },
          { code: 'Computational Thinking', req: '&ldquo;visual programming&rdquo;, &ldquo;for example, Kodu, Scratch&rdquo;', ours: 'Scratch is where most of our Langley beginners start. Dragging blocks lets a child think about the problem instead of spelling.' },
          { code: 'Computational Thinking', req: 'Visual representations of problems and data: &ldquo;graphs, charts, network diagrams, info graphics, flow charts, lists, tables, or arrays&rdquo;.', ours: 'The parks project below ends in a table, a two-way count. Children see that a table is a way of thinking, not just a way of drawing.' }
        ] },
        { kind: 'p', text: 'The ADST page adds that &ldquo;Locally developed modules can be offered in addition to, or instead of, the modules in the provincial curriculum.&rdquo; In practice, two Langley children in the same grade can have quite different years. One of the Big Ideas on the page is that &ldquo;Complex tasks require the acquisition of additional skills.&rdquo; We read that as permission to go deeper: a child who enjoyed visual programming at school can carry on into typed code with us. We have not found a primary source for coding in BC Kindergarten to Grade 5, so we make no claim about those grades. Older students head toward Computer Studies 10 and Computer Programming 11 and 12, covered on our <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a> page.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Design first', p: 'ADST is about design as much as code. Our project lessons begin with a sketch of what the program should do and who it is for, which mirrors the design cycle Langley students meet at school.' },
          { h3: 'History counts too', p: 'The same module lists the evolution of programming languages, with examples such as punch cards and Alan Turing. We tell those stories in class, because children remember people better than syntax.' },
          { h3: 'Homeschool in BC', p: 'Langley families who homeschool can read <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">homeschool coding and math in BC</a>, which sets out how live classes fit a home-learning plan.' }
        ] },
        { kind: 'callout', h3: 'Who we are', p: 'Modern Age Coders teaches live online coding beside school. We give no school marks and are not connected with the BC education ministry, any Langley school district, the Township of Langley or the City of Langley.' }
      ]
    },
    {
      id: 'parktable', tint: 'deep', eyebrow: 'Langley data project',
      h2: 'Which Langley community has the most neighbourhood parks? A two-way table from Township data',
      intro: 'The Township of Langley publishes a Parks layer through its open data service, with a community and a park type for every record. Our older kids turn it into a two-way table: communities down the side, park types across the top. The Township is a separate municipality from the City of Langley, so this covers the Township only. Every count below is ours, from the layer as downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Township of Langley Parks layer, our count of Neighbourhood Park and Greenway Lot records by community (216 records in all)', head: ['Community in the file', 'Neighbourhood parks', 'Greenway lots'], rows: [
          ['Walnut Grove', '13', '4'],
          ['Willoughby', '10', '25'],
          ['Aldergrove', '8', '2'],
          ['Murrayville', '7', '1'],
          ['Willowbrook', '7', '0'],
          ['Rural', '5', '0'],
          ['Brookswood', '3', '0'],
          ['Fort Langley', '2', '0'],
          ['Gloucester', '1', '0'],
          ['(no community given)', '0', '46']
        ] },
        { kind: 'p', text: 'Walnut Grove leads for neighbourhood parks with 13, while Willoughby has by far the most greenway lots. The layer arrives as JSON, the format many web services use, rather than a spreadsheet file, so reading it is a small lesson of its own: each record sits inside a feature, under attributes. A 12-year-old in our class writes the whole table in a few lines:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A dictionary in a dictionary', p: 'The outer dictionary is keyed by community; each value is another dictionary keyed by park type. Adding one to table[place][kind] fills in one cell of the two-way table.' },
          { h3: 'Missing is a category', p: '46 records have no community at all. Instead of crashing or vanishing, the or in the third line files them under (none given). All 46 turn out to be greenway lots.' },
          { h3: 'Read across and down', p: 'Down a column, children compare communities. Across a row, they see what each community is made of. Willoughby&rsquo;s row is mostly greenway; Willowbrook&rsquo;s is mostly neighbourhood parks.' }
        ] },
        { kind: 'callout', h3: 'What we leave out', p: 'The layer includes 34 school grounds, and their records carry school names. We count them but never print them, and we print no park names at all. Several other names in the file honour people. A good data project knows which columns to leave alone, and we say why out loud.' },
        { kind: 'p', text: 'The full list of types in our download: 78 greenway lots, 56 neighbourhood parks, 34 school grounds, 20 special purpose parks, 8 community parks, 8 municipal parks, 7 regional parks, 3 cemeteries and 2 national park records, both of them in Fort Langley. 161 records are marked Complete, 5 In Progress and 4 Conceptual, and 45 of the 46 records with no community also have no status. The Township describes the layer as &ldquo;Parks and greenways that are dedicated for public use and maintained by parks division.&rdquo; Contains information licensed under the Open Government License - Township of Langley (<a class="cg-inline-link" href="https://www.tol.ca/en/connect/open-data-licence.aspx">licence</a>). The Township does not endorse this page.' }
      ]
    },
    {
      id: 'bctime', tint: 'tint', eyebrow: 'BC time',
      h2: 'Langley no longer changes its clocks: what permanent Pacific time means for class times',
      intro: 'This is the change BC families most often miss. The clocks went forward on 8 March 2026 for the last time; the province chose to stay on daylight time for good, and its news release describes the time change &ldquo;previously scheduled for Nov. 1, 2026&rdquo; as eliminated.',
      body: [
        { kind: 'table', caption: 'Two Langley slots in India time. BC is at UTC-7 all year and India at UTC+5:30, so India is 12 hours 30 minutes ahead (our arithmetic)', head: ['Slot in Langley', 'India time, all year'], rows: [
          ['3:30 pm on a weekday', '4:00 am the following day'],
          ['8:30 am on a Saturday', '9:00 pm the same day'],
          ['10:00 am on a Sunday', '10:30 pm the same day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No November surprise', p: 'Langley clocks stay put on 1 November 2026. Ontario and Quebec still fall back that day, so Langley ends up two hours behind Toronto in winter, not three.' },
          { h3: 'One timetable all year', p: 'Because neither BC nor India changes its clocks now, a Langley class time converts the same way in every month. We still write every invitation in Pacific time.' },
          { h3: 'Langley numbers', p: 'Langley phones use 604, with 778, 236, 672 and the new 257 sharing the area. Type the ten digits in the form; the +1 is already set.' }
        ] },
        { kind: 'p', text: 'Mornings and early afternoons in Langley are the night in India, so our most practical slots for Langley children are after school and on weekend mornings, as above. For the whole country&rsquo;s 2026 time changes, see <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>.' }
      ]
    },
    {
      id: 'beaver', tint: '', eyebrow: 'A first contest',
      h2: 'The Beaver Computing Challenge for Langley children in Grade 6 and below',
      intro: 'CEMC at the University of Waterloo runs the Beaver Computing Challenge (BCC) in schools across Canada, BC included. It needs no coding. The facts in this section are taken from CEMC&rsquo;s contest pages as they read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Built on math every province teaches', p: 'The questions draw only on math taught &ldquo;across all Canadian provinces&rdquo;, in CEMC&rsquo;s words, so a Langley child starts on equal footing with a child in Ontario or Nova Scotia.' },
          { h3: 'This year&rsquo;s window', p: 'For the Americas, CEMC sets the 2026 contest between Monday 9 November and Friday 20 November. The youngest level, Grade 5/6, is open to any child in Grade 6 or lower; papers come in English only.' },
          { h3: 'Once a year, through school', p: 'CEMC says a student may write at most one BCC in a school year, and all students must participate through their school. Ask your child&rsquo;s teacher whether the school takes part.' }
        ] },
        { kind: 'p', text: 'BCC puzzles are about logic: ordering, searching, finding a rule. They line up neatly with the sorting, searching and selection in BC&rsquo;s Computational Thinking content. We do not copy CEMC questions; we write our own and label them as ours. A sample for a nine-year-old: five beavers stand in a line by height, and each turn you may swap two neighbours; what is the fewest swaps to sort them if they start in exactly the reverse order? Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers all three levels. CEMC and the University of Waterloo are independent bodies with no tie to our classes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks at 6 to a data table at 12',
    intro: 'The bands are a guide only; the free class places each child by skill.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Sequences', p: 'Short block programs, moving characters and spoken predictions before each run.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Games and ciphers', p: 'Repeats, choices and secret-code projects, the kind of algorithm work BC&rsquo;s ADST content lists.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Typed Python', p: 'Lists, dictionaries and the Township parks table, with clear rules about which data to print.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Age 12', h3: 'Towards Grade 8 and beyond', p: 'Functions, files and own projects, plus a teacher-led look at how AI learns from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Langley child bother with code when AI writes it?',
    intro: 'Yes, because knowing what to ask, and what to leave out, is still a human job.',
    p1: 'In the parks project, the important decisions were not in the code. They were choosing to keep missing communities as a category, and choosing never to print school names. A tool might have done neither. Children who have made those choices themselves understand that data work is full of judgement, not just typing.',
    p2: 'Adult chatbots are kept away from our under-13 learners. They find out how AI learns and fails through activities run by their teacher, and they spend most of the lesson solving problems themselves: breaking them down, trying a step, and checking it before moving on.',
    closer: 'BC&rsquo;s ADST content puts algorithms and code breaking in front of Grade 6 and 7 students because thinking in steps is the foundation, with or without AI.',
    blogAnchor: 'whether coding still matters for children'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for every Langley community',
    intro: 'A child in Fort Langley and a child in Aldergrove join the same class from home, with no drive along the Fraser Highway after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'Join a group of fifteen to twenty children at the same level, or book one-to-one lessons for a child who wants more attention or more speed.' },
      { h3: 'Right group, right pace', p: 'Children are grouped by age and level, and move on when they are ready rather than when a calendar says so.' },
      { h3: 'Families welcome', p: 'Parents can sit with younger children during class, and the teacher shares progress after each stage.' },
      { h3: 'At home', p: 'Any reasonably recent computer will do, as long as it has a real keyboard, a mouse, working audio and Wi-Fi that holds up for an hour. Tablets make typing code a chore.' },
      { h3: 'Free first lesson', p: 'A full lesson with a real teacher, after which we suggest a course and level. No card is asked for.' }
    ],
    spec: { title: 'No Langley centre', p: 'Modern Age Coders has no premises in Langley or anywhere in BC, and claims none. All classes are live online, taught from India by the teachers who also teach families in other countries.' }
  },

  fees: {
    h2: 'Coding class fees for Langley children',
    intro: 'Three lines, each with its currency printed beside the fee.',
    first: 'A free, complete live lesson that ends with our suggestion of a course, a level and a time.',
    group: 'The monthly fee for a seat in a group of fifteen to twenty children at the same level.',
    private: 'The monthly fee for one teacher and your child alone, on a schedule that suits you.',
    closer: 'Langley families pay what families pay across Canada. The free lesson comes first, and fees begin only when you decide to go on; the pricing page covers breaks and missed lessons.'
  },

  reviewsH2: 'In their own words: Google reviews of our classes',

  book: {
    h2: 'Book a free class for your Langley child',
    intro: 'A line about your child is enough to plan the first task. A six-year-old might start with a moving character, a nine-year-old with a secret-code project, and a twelve-year-old with the Township parks table.',
    success: 'Thank you. The team will contact you soon about a class for your child in Langley.'
  },

  faq: {
    h2: 'Questions from Langley families',
    intro: 'What Langley parents ask us most often.',
    items: [
      { q: 'Are there coding classes for kids in Langley, BC?', a: 'Yes. The classes happen live over the internet, so a Langley child logs in from home and learns with a teacher, either privately or with fifteen to twenty others.' },
      { q: 'Do Langley schools teach coding?', a: 'In Grades 6 and 7, BC schools offer at least three ADST modules a year, and Computational Thinking, which includes algorithms and visual programming such as Scratch, is one of the modules schools can choose.' },
      { q: 'Did BC stop changing its clocks?', a: 'Yes. BC moved to permanent daylight time at UTC-7 after the clocks went forward on 8 March 2026, so there is no change on 1 November 2026. Class times stay the same all year.' },
      { q: 'From what age can a Langley child join?', a: 'From 6. These kids classes cover ages 6 to 12; at 13 a child can carry on in a course designed for teenagers.' },
      { q: 'Does my child need typing skills?', a: 'No. Younger children use blocks in Scratch. Typing comes in when the child moves to Python, usually at 9 or 10.' },
      { q: 'What times work for Langley families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We write every time in Pacific time.' },
      { q: 'Can my child enter a coding contest?', a: 'Yes, through school. The Beaver Computing Challenge has a level for Grade 6 and younger, runs in November 2026 and needs no programming knowledge, only logical thinking.' },
      { q: 'Will my child use ChatGPT?', a: 'No. We do not use adult chatbots with children under 13. ChatGPT also needs a parent\'s permission for users under 18. Children learn how AI works through teacher-led activities.' },
      { q: 'Do you teach in the City of Langley as well as the Township?', a: 'Yes. Classes are online, so families in the City of Langley and the Township of Langley join the same way. The data project uses Township data only.' },
      { q: 'Where can I see the fees?', a: 'Look for the three fee cards further up this page. The opening lesson is free; the group and private options are billed monthly, and each card shows your currency.' }
    ]
  },

  next: {
    eyebrow: 'More for BC families',
    h2: 'Related pages for Langley and BC families',
    html: 'For the whole province, including teens, read <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>; for the country, <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Families who homeschool can see <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">homeschool coding and math in BC</a>, and contest-minded families the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Langley and BC',
  footerPlaces: [
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-klb .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.1rem); }
.cg-root.cg-klb .cg-hero h1 { font-weight: 700; letter-spacing: -0.008em; line-height: 1.1; }
.cg-root.cg-klb .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-klb .cg-eyebrow { letter-spacing: 0.07em; font-weight: 660; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-klb .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-klb .cg-align-code { font-weight: 650; letter-spacing: 0.02em; font-style: italic; }
.cg-root.cg-klb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-klb #parktable code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-klb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca and saved raw: Applied Design, Skills, and Technologies 6-7 (minimum of three modules in each of Grades 6 and 7; locally developed modules; the Computational Thinking module content: simple algorithms for sorting, searching, sequence, selection and repetition and code breaking, visual programming such as Kodu and Scratch, visual representations including flow charts and tables; the Big Idea on complex tasks). BC permanent UTC-7 from BC Gov News 2026AG0013-000209 (via facts-geo.md). CEMC Beaver Computing Challenge 2026 (concepts from every province, Grade 5/6 eligibility, dates, English only, once a year, through a school). Area codes from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'Township of Langley Open Data, Parks layer (ArcGIS feature service, Open Government License - Township of Langley, commercial use allowed), downloaded as JSON with curl on 22 October 2026 and tabulated with our scripts park_crosstab.py and page_script.py (python -I): 216 records; neighbourhood parks by community Walnut Grove 13, Willoughby 10, Aldergrove 8, Murrayville 7, Willowbrook 7, Rural 5, Brookswood 3, Fort Langley 2, Gloucester 1; greenway lots led by Willoughby 25; 46 records with no community, all greenway lots; 34 school-ground records counted but never named. Township only (the City of Langley is separate). Labelled as ours. Lesson family: a two-way table with nested dictionaries, reading JSON, and a missing value kept as its own category.',
    requiredMentions: [
      'Code breaking is the hook we use with ten-year-olds',
      'Willoughby has by far the most greenway lots',
      'Locally developed modules can be offered in addition to, or instead of',
      'Walnut Grove leads for neighbourhood parks with 13',
      'All 46 turn out to be greenway lots',
      'The layer includes 34 school grounds',
      'both of them in Fort Langley',
      'previously scheduled for Nov. 1, 2026',
      'Langley ends up two hours behind Toronto in winter',
      'two Langley children in the same grade can have quite different years'
    ],
    sources: [
      { claim: 'BC curriculum: Applied Design, Skills, and Technologies 6 (modules, Computational Thinking content, Big Ideas).', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC Gov News 2026AG0013-000209: permanent year-round daylight time from 8 March 2026, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 dates, eligibility, all-province math basis, once a year.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Township of Langley Parks item (description, licence link, TOL Geomatics).', url: 'https://www.arcgis.com/sharing/rest/content/items/93ae11e4d5f240ccad6387154ce8f685?f=json' },
      { claim: 'Township of Langley Parks feature service query (216 records).', url: 'https://services5.arcgis.com/frpHL0Fv8koQRVWY/arcgis/rest/services/Parks/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&f=json&resultRecordCount=1000' },
      { claim: 'Open Government License - Township of Langley (commercial use, attribution, pre-2016 data note).', url: 'https://www.tol.ca/en/connect/open-data-licence.aspx' },
      { claim: 'IANA tzdb northamerica: America/Vancouver from 2026.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Langley population figure: StatCan was not reachable live, so none is printed.',
      'City of Langley data: the City is a separate municipality; its site returned 403 on a second request and was not retried, so no City data is used.',
      'Park names: none printed; 34 records are school grounds carrying school names, and other names honour people.',
      'BC coding expectations for Kindergarten to Grade 5: no primary source was fetched, so none is claimed.',
      'That every Langley Grade 6 or 7 student takes Computational Thinking: rejected; schools choose modules.',
      'Any BC graduation numeracy or literacy assessment details: the BC government page was unreachable, so none appear.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Langley schools, school districts or private people: not used.',
      'Any affiliation with the Township of Langley, the City of Langley, the BC education ministry, CEMC or the University of Waterloo.'
    ]
  }
};
