'use strict';
// Abbotsford, British Columbia (cg- city page, Canada cluster Wave 2, row 156). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: BC ADST 6-7 Robotics and Digital
// Literacy module content (sense, think, act; judging search results), a top-five neighbourhoods project on the City of
// Abbotsford Parks file (space-only blanks, sorting by value, a plausibility check on the area column), BC's permanent
// UTC-7, and the Math Kangaroo Fraser Valley Contest at UFV's Abbotsford campus on 21 March 2027.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/bc/adst-6-core.txt
// (curriculum.gov.bc.ca/curriculum/adst/6/core) and facts-schools-contests.md:
//  - ADST 6-7: at least three modules in each of Grades 6 and 7 (paraphrased, quoted on the Langley page); Robotics content
//    "a robot is a machine capable of carrying out a complex series of actions automatically"; sense "the parts of the robot
//    that allow it to gather information about its environment that guides its behaviour"; think "the part of the robot
//    that determines the robot's behaviour" (curly apostrophe in source); act "the parts of the robot that do the work";
//    "programming and logic for robotics components"; Digital Literacy "search techniques, how search results are selected
//    and ranked" and criteria "accuracy, timeliness, appropriateness, credibility, and bias". The source sets each robot
//    part off with an em dash; the page quotes the words only.
//  - BC time (BC Gov News 2026AG0013-000209 via facts-geo.md, raw in src/geo/tz): "Pacific time will be set seven hours
//    behind co-ordinated universal time (UTC-7), matching the current offset used during daylight saving time."
//  - Math Kangaroo (UFV host-centre page, other-contests/ufv-canadian-math-kangaroo.txt): "The Fraser Valley Contest will
//    take place on Sunday, March 21, 2027 at the Abbotsford Campus of the University of the Fraser Valley."; "Students from
//    grades 1 to 12 are welcome to write the contest, with different versions for grades 1-2, 3-4, 5-6, 7-8, 9-10, and
//    11-12!"; Grades 1-2 "18 multiple-choice questions, arranged in increasing difficulty, to be answered in 45 minutes";
//    Grades 3-4 24 questions in 60 minutes; Grades 5-12 30 questions in 75 minutes. Fees on that page are 2026 figures: not used.
//  - Place facts (Abbotsford's own, 8+): Abbotsford is in the Abbotsford - Mission CMA (facts-geo.md; no population
//    printed); area codes 604 with 236, 257, 672, 778; City of Abbotsford Parks item: "collection of all known naturally
//    designated parks and recreation areas in the City of Abbotsford. These areas are dedicated for public use and maintained
//    by the parks division."; item modified 4 June 2026 (our conversion of the epoch value); owner Data_Abbotsford; 238 rows;
//    21 named DCC Park Neighbourhood values; licence: "The Information Provider grants you a worldwide, royalty-free,
//    perpetual, non-exclusive licence to use the Information, including for commercial purposes"; attribution (source
//    spelling) "Contains information licenced under the Open Government Licence - City of Abbotsford." (en dash in source);
//    "This Open Government Licence is based on version 2.0 of the Open Government Licence - Canada".
// Our own calculations (neighbourhood_parks.py and page_script.py, python -I; outputs neighbourhood_parks.out.txt,
// page_script.out.txt, extra.out.txt in ca/src-pilots/coding-classes-for-kids-in-abbotsford/): top neighbourhoods by park
// records TOWNLINE HILL 21, UPPER TEN OAKS 19, LOWER SUMAS MOUNTAIN 18, MATSQUI PRAIRIE 15, WEST CLEARBROOK 15; 43 records
// with no neighbourhood: 36 empty and 7 a single space; types OPEN SPACE 129, NEIGHBOURHOOD 64, COMMUNITY 25, REGIONAL 15,
// CITY WIDE 5; Area (m2) times 10,000 is within 10% of the drawn Shape__Area for 218 records and not for 15; 30 records
// without a name, 42 named UNDEVELOPED GREEN SPACE; 181 distinct Park ID values. India time arithmetic ours.
// Lesson family: strip() to catch space-only blanks, sorting a dictionary by value with a key function, top five, and a
// plausibility check comparing two columns.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'counts = {}',
  'blank = 0',
  'with open("abbotsford-parks.csv", encoding="utf-8-sig") as f:',
  '    for park in csv.DictReader(f):',
  '        hood = park["DCC Park Neighbourhood"].strip()',
  '        if hood == "":',
  '            blank += 1',
  '        else:',
  '            counts[hood] = counts.get(hood, 0) + 1',
  '',
  'top = sorted(counts.items(), key=lambda pair: pair[1], reverse=True)',
  'for hood, n in top[:5]:',
  '    print(hood, n)',
  'print("no neighbourhood:", blank)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'ABBOTSFORD', label: 'Abbotsford', blurb: 'Coding for Abbotsford children aged 6 to 12: BC robotics and digital literacy ideas, a City parks data project, and the Fraser Valley Math Kangaroo.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-abbotsford',
  code: 'ka',
  accent: '#57330D',
  accentRationale: 'Abbotsford kids page: a dark harvest brown, #57330D, allocated to this row by the Canada group so it stays 6 RGB units from every site accent and 14 from other Canada accents; contrast 10.51 on the paper #FBF8F2, 9.89 on #F5F1E8 and 9.04 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Abbotsford',
    eyebrow: 'Abbotsford, British Columbia',
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
  routeLabel: 'Abbotsford',
  title: 'Coding Classes for Kids in Abbotsford, BC | Ages 6 to 12',
  description: 'Live online coding for Abbotsford kids aged 6 to 12: BC robotics and digital literacy ideas, a City of Abbotsford parks project, and the Fraser Valley Kangaroo.',
  ogDescription: 'BC ADST names robots that sense, think and act. See how Abbotsford children can code toward that, a parks project on City of Abbotsford data, and our live classes.',
  twitterDescription: 'Live online coding for Abbotsford children aged 6 to 12, on BC time all year, from blocks to Python.',
  ogImageCourse: 'problem-solving-and-computational-thinking-for-kids',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Abbotsford Children Aged 6 to 12',
    description: 'Live online coding for Abbotsford children from Grade 1 to Grade 7: blocks and Scratch, problem solving and logic, AI literacy, then typed Python with a City of Abbotsford data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Abbotsford',
  capsuleQ: 'Can an Abbotsford child aged 6 to 12 learn coding with a live teacher?',
  capsule: 'Yes. Modern Age Coders runs live online coding lessons for Abbotsford children aged 6 to 12, privately or in a class of fifteen to twenty. Coding for Kids is the usual first course; puzzle lovers often add Problem Solving and Computational Thinking, and from about 9 most move to Python and AI for Kids. The first lesson is free.',
  lead: 'British Columbia&rsquo;s Grade 6 and 7 technology curriculum describes a robot in three words: it senses, it thinks, it acts. The thinking part is code, and it is the part a child can start on long before touching a robot. In Abbotsford, families are also a short drive from the Fraser Valley&rsquo;s own Math Kangaroo sitting, which gives younger children a real contest to aim at. Our live online classes take children from first blocks to typed Python at a steady pace. Below: what BC&rsquo;s ADST content says about robots and about judging what we find online, a parks project on the City of Abbotsford&rsquo;s own data, how BC&rsquo;s new permanent clock affects class times, and the Kangaroo date for 2027.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Abbotsford.',

  picks: {
    eyebrow: 'Courses for Abbotsford children',
    h2: 'Four first courses for Abbotsford children',
    intro: 'Pick by age and temperament; the free class tells us which suits your child.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Blocks, Scratch games, a small app and a first look at AI, in age-matched groups: the broad start most Abbotsford children take.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic puzzles, patterns and step-by-step reasoning, the habits behind both coding and contests such as Math Kangaroo.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with games, turtle art and real data such as the Abbotsford parks file, for children ready to write each line.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI senses, decides and gets things wrong, taught with activities instead of adult chatbots, which fits BC&rsquo;s robot ideas neatly.' }
    ]
  },

  sections: [
    {
      id: 'robots', tint: '', eyebrow: 'Coding at school in Abbotsford',
      h2: 'Sense, think, act: BC&rsquo;s robotics and digital literacy content for Abbotsford children',
      intro: 'Abbotsford schools teach the British Columbia curriculum. In Grades 6 and 7, Applied Design, Skills, and Technologies (ADST) is taught through modules, at least three a year, chosen by the school. Two modules from the ADST 6-7 page, read on curriculum.gov.bc.ca on 22 October 2026, say a good deal about coding. Quotes are the curriculum&rsquo;s; the right column is ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'Robotics', req: 'A robot is &ldquo;a machine capable of carrying out a complex series of actions automatically&rdquo;, and the module includes &ldquo;programming and logic for robotics components&rdquo;.', ours: 'Automatically is the key word. We show children that the robot only seems clever because someone wrote every rule it follows, then let them write the rules.' },
          { code: 'Robotics: sense', req: 'The sense parts are &ldquo;the parts of the robot that allow it to gather information about its environment that guides its behaviour&rdquo;.', ours: 'In Scratch, a sprite senses with &ldquo;touching colour&rdquo; and key presses. Children build a sprite that stops at a wall, the simplest sense-and-react loop there is.' },
          { code: 'Robotics: think and act', req: 'Think is &ldquo;the part of the robot that determines the robot&rsquo;s behaviour&rdquo;; act is &ldquo;the parts of the robot that do the work&rdquo;.', ours: 'We split every project into the same three boxes on paper: what it notices, what it decides, what it does. Most bugs live in the middle box.' },
          { code: 'Digital Literacy', req: 'Learning &ldquo;how search results are selected and ranked&rdquo;, judged for &ldquo;accuracy, timeliness, appropriateness, credibility, and bias&rdquo;.', ours: 'Children who have sorted data themselves understand ranking from the inside. Our parks project below sorts and ranks, and we ask who decided what counts as first.' }
        ] },
        { kind: 'p', text: 'The same ADST page lists visual programming such as Scratch and simple algorithms under its Computational Thinking module, so an Abbotsford child might meet coding through robots, through computational thinking, or not at all in a given year, depending on the modules the school chooses. We have found no primary source for coding in BC Kindergarten to Grade 5 and claim nothing about those grades. Teenagers have Computer Studies 10 and Computer Programming 11 and 12 ahead of them, which our <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a> page explains.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No robot needed', p: 'We do not sell kits. Sense, think and act can all be practised on screen first, and children who later join a robotics club arrive knowing how to write the thinking part.' },
          { h3: 'Search with judgement', p: 'BC asks children to weigh search results for accuracy and bias. We teach the same habit with code: before trusting an answer, check where it came from and how it was sorted.' },
          { h3: 'Learning at home', p: 'Abbotsford families who homeschool can read <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">homeschool coding and math in BC</a> for how live classes fit a home plan.' }
        ] },
        { kind: 'callout', h3: 'Who we are, and are not', p: 'Modern Age Coders teaches live online coding beside school and gives no school marks. We are not connected with the BC education ministry, the Abbotsford school district, the City of Abbotsford or the University of the Fraser Valley.' }
      ]
    },
    {
      id: 'parksdata', tint: 'deep', eyebrow: 'Abbotsford data project',
      h2: 'Which Abbotsford neighbourhoods have the most park records? A top five from the City&rsquo;s file',
      intro: 'The City of Abbotsford publishes its parks as open data, a file of every park and recreation area with a name, a type and a neighbourhood. Our older kids count records by neighbourhood, sort the counts and print the top five. Every figure below is ours, from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Park records per neighbourhood in the City of Abbotsford Parks file (column DCC Park Neighbourhood), our count, top five of 21 named neighbourhoods', head: ['Rank', 'Neighbourhood as written in the file', 'Park records'], rows: [
          ['1', 'TOWNLINE HILL', '21'],
          ['2', 'UPPER TEN OAKS', '19'],
          ['3', 'LOWER SUMAS MOUNTAIN', '18'],
          ['4 (tied)', 'MATSQUI PRAIRIE', '15'],
          ['4 (tied)', 'WEST CLEARBROOK', '15']
        ] },
        { kind: 'p', text: 'The file has 238 records. 43 have no neighbourhood, and they hide a trap: 36 cells are truly empty, but 7 contain a single space. A program that checks only for empty text counts the spaces as a neighbourhood whose name is a space. Calling strip() first removes the space, so all 43 are counted as blank. Here is the program a 12-year-old writes in our class:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Sorting by the count', p: 'counts.items() gives pairs such as (TOWNLINE HILL, 21). The key function tells sorted to compare the second item of each pair, the number, and reverse puts the biggest first.' },
          { h3: 'Slicing the top', p: 'top[:5] keeps the first five pairs. Two neighbourhoods tie on 15, and children notice that the order between them comes from the file, not from any rule. Ties deserve a mention.' },
          { h3: 'Records are not parks', p: 'Count what the file counts. 42 records are named UNDEVELOPED GREEN SPACE and 30 have no name at all, and there are 181 distinct Park ID values among the 238 records, so a record is not always a separate park.' }
        ] },
        { kind: 'callout', h3: 'Check the units with a second column', p: 'One column is labelled Area (m2), square metres. A second column, Shape__Area, holds the area of the drawn shape. For 218 records the drawn area is about 10,000 times the labelled value, which is what you would see if the labelled numbers were hectares, since one hectare is 10,000 square metres. Our reading is that the label is wrong and the values are hectares; 15 records do not fit the pattern. Comparing one column against another is a habit worth more than any single answer.' },
        { kind: 'p', text: 'By type, the file holds 129 open space records, 64 neighbourhood parks, 25 community parks, 15 regional parks and 5 city-wide parks. Some columns record staff account names, and some park names honour people, so in class we print neighbourhoods, types and counts only. The City describes the layer as a &ldquo;collection of all known naturally designated parks and recreation areas in the City of Abbotsford&rdquo;. Contains information licenced under the Open Government Licence - City of Abbotsford (the City&rsquo;s spelling; <a class="cg-inline-link" href="https://opendata-abbotsford.hub.arcgis.com/pages/city-of-abbotsford-open-data-licence">licence</a>). The City does not endorse this page.' }
      ]
    },
    {
      id: 'kangaroo', tint: 'tint', eyebrow: 'A contest close to home',
      h2: 'Math Kangaroo in the Fraser Valley: Sunday 21 March 2027 at UFV&rsquo;s Abbotsford campus',
      intro: 'Math Kangaroo is an international math contest that children can write from Grade 1. The Fraser Valley sitting is hosted in Abbotsford. These details come from the University of the Fraser Valley&rsquo;s host-centre page, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Math Kangaroo formats by grade, as listed on the UFV host-centre page (2027 Fraser Valley Contest)', head: ['Grades', 'Questions', 'Time'], rows: [
          ['1 and 2', '18 multiple-choice, in increasing difficulty', '45 minutes'],
          ['3 and 4', '24 multiple-choice, in increasing difficulty', '60 minutes'],
          ['5 to 12 (versions for 5-6, 7-8, 9-10, 11-12)', '30 multiple-choice, in increasing difficulty', '75 minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Local and early', p: 'The UFV page says the Fraser Valley Contest takes place on Sunday 21 March 2027 at the Abbotsford Campus of the University of the Fraser Valley. Students from Grade 1 to Grade 12 are welcome.' },
          { h3: 'Short for little ones', p: 'A Grade 1 child faces 18 questions in 45 minutes, a gentle first taste of a contest room. Questions get harder as they go, so finishing every one is not the aim.' },
          { h3: 'Fees and sign-up', p: 'The UFV page still shows last year&rsquo;s fees and deadlines, so we do not repeat them. Check the page directly when 2027 registration details appear.' }
        ] },
        { kind: 'p', text: 'Kangaroo questions reward the same habits as coding: read carefully, try a small case, look for the pattern, check the answer. We never reproduce contest questions; we write our own and label them ours. One of ours for a Grade 3 child: a kangaroo jumps 3 squares forward and 1 back, again and again; after how many jumps does it first land on square 10? Children act it out, then write a loop that counts the jumps. More on preparation is on <a class="cg-inline-link" href="/math-kangaroo-canada-preparation">Math Kangaroo Canada preparation</a>. We have no connection with Math Kangaroo Canada or the University of the Fraser Valley.' }
      ]
    },
    {
      id: 'pacific', tint: '', eyebrow: 'BC time',
      h2: 'Abbotsford on permanent Pacific time: class times that no longer move',
      intro: 'BC&rsquo;s government release on the 2026 change says: &ldquo;Pacific time will be set seven hours behind co-ordinated universal time (UTC-7), matching the current offset used during daylight saving time.&rdquo; Abbotsford&rsquo;s clocks did not fall back this autumn, and India never changes its clock.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekday, 4:00 pm', p: 'With Abbotsford at UTC-7 and India at UTC+5:30, India is 12 and a half hours ahead. A 4:00 pm class in Abbotsford is 4:30 am the next day in India, in every month of the year (our arithmetic).' },
          { h3: 'Saturday, 9:30 am', p: 'A Saturday 9:30 am class is 10:00 pm the same day in India; an 8:00 am Sunday class is 8:30 pm. Weekend mornings are our easiest slots for BC children.' },
          { h3: 'Abbotsford numbers', p: 'Local numbers use 604, with 778, 236, 672 and 257 in the same area. The +1 is already in the form, so type the ten digits.' }
        ] },
        { kind: 'p', text: 'One knock-on effect: with Ontario back on standard time from 1 November 2026, Abbotsford is two hours behind Toronto through the winter and three hours behind in summer. Families with cousins or classes in the east should check twice. We write every invitation in Pacific time. The full picture for every province is on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks at 6 to sorted data at 12',
    intro: 'Bands are approximate; the free class places a child by what they can already do.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Notice and react', p: 'Block programs where a sprite senses a key or a colour and responds, said aloud before it runs.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Logic and patterns', p: 'Puzzles, loops and decisions, with contest-style problems we write ourselves.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 and 11', h3: 'Python and data', p: 'Typed Python, dictionaries and the Abbotsford parks top five, blanks and all.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'How machines decide', p: 'Bigger programs, plus a teacher-led look at how AI senses, decides and errs.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'With AI everywhere, why should an Abbotsford child learn to code?',
    intro: 'Because sense, think and act describes AI systems too, and the think part is where mistakes hide.',
    p1: 'A program that skipped strip() would have reported a neighbourhood whose name is a space, and looked sure of itself. An AI system can be just as confident about a wrong answer. Children who have found such a bug with their own eyes learn to ask how an answer was produced before they trust it, which is the digital literacy BC asks for.',
    p2: 'We keep adult chatbots out of lessons for children under 13. Instead, teacher-led activities show how AI learns from examples and why it fails. Most of each class is the child&rsquo;s own thinking: splitting a problem into steps, trying one, and testing it.',
    closer: 'BC puts judging search results for accuracy and bias into Grade 6 and 7 technology, and that judgement grows fastest in children who build things themselves.',
    blogAnchor: 'why coding still pays off for kids'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Abbotsford families',
    intro: 'A child near Clearbrook and a child out on Sumas Prairie join the same class from home, with no drive into town after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two ways to learn', p: 'A class of fifteen to twenty children at one level, or private lessons with one teacher, for a child who wants more time or a faster track.' },
      { h3: 'With the right group', p: 'Children are placed by age and stage, so the pace suits the room. They move up when their work shows they are ready.' },
      { h3: 'Parents are welcome', p: 'You can sit in, especially with younger children, and the teacher tells you what was built after each stage.' },
      { h3: 'The kit', p: 'A computer with a keyboard and mouse, sound, and a connection steady enough for video. Phones and tablets are not suited to typed code.' },
      { h3: 'Begin free', p: 'The first lesson is a full class with a real teacher, ending with a suggested course and level. No card needed.' }
    ],
    spec: { title: 'No Abbotsford centre', p: 'Modern Age Coders has no premises in Abbotsford or anywhere in the Fraser Valley, and claims none. All teaching is live online, from India, by the teachers who also teach children in other countries.' }
  },

  fees: {
    h2: 'What coding classes cost for Abbotsford children',
    intro: 'Three options, and the currency is shown beside each fee.',
    first: 'A complete live lesson at no cost, after which we suggest a course, a level and a time.',
    group: 'The monthly fee for a place in a class of fifteen to twenty children at the same stage.',
    private: 'The monthly fee for private lessons, your child and one teacher, at times you pick.',
    closer: 'Abbotsford families pay the same as families across Canada. The free lesson always comes first; you are charged only after choosing a course and a time, and the pricing page explains breaks and missed lessons.'
  },

  reviewsH2: 'Families on Google about Modern Age Coders',

  book: {
    h2: 'Book a free class for your Abbotsford child',
    intro: 'A few words about your child help us plan. A six-year-old might start with a sprite that stops at a wall, a nine-year-old with a logic puzzle, and a twelve-year-old with the Abbotsford parks file.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Abbotsford.'
  },

  faq: {
    h2: 'Abbotsford parents ask',
    intro: 'The questions Abbotsford families send us most.',
    items: [
      { q: 'Do you have coding classes for kids in Abbotsford?', a: 'Yes, taught live online. Your child joins from home, either one to one or in a class of fifteen to twenty, so there is no centre to travel to.' },
      { q: 'Do Abbotsford schools teach coding?', a: 'In Grades 6 and 7, BC schools teach ADST through modules they choose. Robotics and Computational Thinking are among them and both involve programming, but not every child takes them every year.' },
      { q: 'Is my child too young at 6?', a: 'No. Six is a fine age to start with blocks and simple sense-and-react games. Our kids classes continue to age 12.' },
      { q: 'Does my child need a robot kit?', a: 'No. We teach the thinking and coding side on screen. Children who later join a robotics club already know how to program the decisions a robot makes.' },
      { q: 'When is Math Kangaroo in the Fraser Valley?', a: 'The UFV host-centre page lists Sunday 21 March 2027 at the Abbotsford Campus of the University of the Fraser Valley, open to Grades 1 to 12.' },
      { q: 'What times are classes for Abbotsford?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are written in Pacific time.' },
      { q: 'Will BC time changes affect class times?', a: 'Not any more. BC stays on UTC-7 all year from 2026, so an Abbotsford class time converts the same way every month.' },
      { q: 'Will my child use ChatGPT in class?', a: 'No. Children under 13 do not use adult chatbots in our lessons, and anyone under 18 needs a parent\'s permission to use ChatGPT. We teach young children about AI through teacher-led activities.' },
      { q: 'Does my child need to type?', a: 'Not to start. Younger children use blocks. Typing comes with Python, usually around age 9 or 10.' },
      { q: 'How can I see the fees?', a: 'Use the fees section on this page. It shows the free first lesson and the two monthly options, group and private, in your currency, and nothing is billed before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for BC families',
    h2: 'Related pages for Abbotsford and BC families',
    html: 'For the whole province, read <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, and for Canada <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Families neighbouring to the west can see <a class="cg-inline-link" href="/coding-classes-for-kids-in-langley-bc">coding classes for kids in Langley</a>. Contest-minded families will find <a class="cg-inline-link" href="/math-kangaroo-canada-preparation">Math Kangaroo Canada preparation</a> and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a> useful.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Abbotsford and BC',
  footerPlaces: [
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-for-kids-in-langley-bc', label: 'Langley kids' },
    { href: '/math-kangaroo-canada-preparation', label: 'Math Kangaroo' },
    { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' }
  ],

  personalityCss: `
.cg-root.cg-ka .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3vw, 2.2rem); }
.cg-root.cg-ka .cg-hero h1 { font-weight: 690; letter-spacing: -0.014em; line-height: 1.07; }
.cg-root.cg-ka .cg-capsule { border-left: 3px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.7rem 0.9rem; }
.cg-root.cg-ka .cg-eyebrow { letter-spacing: 0.08em; font-weight: 620; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-ka .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-ka .cg-align-code { font-weight: 680; letter-spacing: 0.03em; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-ka .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ka #parksdata code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 5px solid var(--cg-accent); }
.cg-root.cg-ka .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca and saved raw: Applied Design, Skills, and Technologies 6-7 Robotics content (definition of a robot; sense, think and act parts; programming and logic for robotics components) and Digital Literacy content (how search results are selected and ranked; accuracy, timeliness, appropriateness, credibility and bias), plus the module structure and the Computational Thinking module. BC permanent UTC-7 from BC Gov News 2026AG0013-000209 (via facts-geo.md). Math Kangaroo Fraser Valley Contest 21 March 2027 at UFV Abbotsford Campus and the grade formats, from the UFV host-centre page. Area codes from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'City of Abbotsford Open Data, Parks (Open Government Licence - City of Abbotsford, commercial use allowed), downloaded with curl on 22 October 2026 and analysed with our scripts neighbourhood_parks.py and page_script.py (python -I): 238 records; top neighbourhoods TOWNLINE HILL 21, UPPER TEN OAKS 19, LOWER SUMAS MOUNTAIN 18, MATSQUI PRAIRIE 15, WEST CLEARBROOK 15; 43 with no neighbourhood (36 empty, 7 a single space); 129 open space, 64 neighbourhood parks; Area (m2) behaves like hectares against Shape__Area for 218 records; 181 distinct Park IDs. Labelled as ours. Lesson family: strip() for space-only blanks, sorting by value with a key function, top five, and a two-column plausibility check.',
    requiredMentions: [
      'a machine capable of carrying out a complex series of actions automatically',
      'the parts of the robot that allow it to gather information about its environment',
      'Most bugs live in the middle box',
      '36 cells are truly empty, but 7 contain a single space',
      'TOWNLINE HILL',
      'Two neighbourhoods tie on 15',
      'there are 181 distinct Park ID values among the 238 records',
      'the drawn area is about 10,000 times the labelled value',
      'Sunday 21 March 2027 at the Abbotsford Campus',
      'Abbotsford is two hours behind Toronto through the winter'
    ],
    sources: [
      { claim: 'BC curriculum: Applied Design, Skills, and Technologies 6 (Robotics, Digital Literacy and Computational Thinking content; modules).', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC Gov News 2026AG0013-000209: permanent year-round daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'University of the Fraser Valley: Canadian Math Kangaroo host-centre page (2027 date, formats by grade).', url: 'https://ufv.ca/math/contests/canadian-math-kangaroo' },
      { claim: 'City of Abbotsford Parks item (description, owner, modified date).', url: 'https://www.arcgis.com/sharing/rest/content/items/b3b8d59e891645e89232402fdac9023d?f=json' },
      { claim: 'City of Abbotsford Parks CSV download.', url: 'https://opendata-abbotsford.hub.arcgis.com/api/download/v1/items/b3b8d59e891645e89232402fdac9023d/csv?layers=193' },
      { claim: 'City of Abbotsford Open Data Licence (commercial use, attribution, based on OGL - Canada 2.0).', url: 'https://opendata-abbotsford.hub.arcgis.com/pages/city-of-abbotsford-open-data-licence' },
      { claim: 'IANA tzdb northamerica: America/Vancouver from 2026.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Abbotsford population figure: StatCan was not reachable live, so none is printed.',
      'Park names, locations and the staff account columns: left out (some names honour people; account names identify staff).',
      'That the Area (m2) column is in square metres: rejected after comparing it with Shape__Area; the page labels its reading as ours.',
      'Math Kangaroo 2027 fees and deadlines: the UFV page shows 2026 figures, so none are given.',
      'BC coding expectations for Kindergarten to Grade 5: no primary source was fetched, so none is claimed.',
      'That every Abbotsford Grade 6 or 7 student takes Robotics or Computational Thinking: rejected; schools choose modules.',
      'Names of Abbotsford schools, the school district or private people: not used.',
      'Any affiliation with the City of Abbotsford, the BC education ministry, Math Kangaroo Canada or the University of the Fraser Valley.'
    ]
  }
};
