'use strict';
// Scarborough, Toronto (cg- city page, Canada cluster Wave 2, row 150). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: the Grade 1 and Grade 2 coding
// expectations a Scarborough child meets first, a City of Toronto recreation file filtered to the Scarborough district,
// and the junior CEMC contest (Beaver Computing Challenge 5/6). Links up to /coding-and-ai-classes-in-toronto.
// Sources, read raw on 22 October 2026. Curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// (raw files in ca/src/ontario and ca/src/cemc); geography from ca/facts-geo.md; data and licence in
// ca/src-pilots/coding-classes-for-kids-in-scarborough-toronto/ (SOURCES.txt lists bytes and sha256):
//  - Ontario DCP API, Elementary Mathematics (2020): Grade 1 C3.2 "read and alter existing code, including code that involves
//    sequential events, and describe how changes to the code affect the outcomes"; Grade 2 C3.1 "including code that involves
//    sequential and concurrent events"; Grade 2 teacher notes "Students will develop code to move multiple objects from one
//    location to another on a grid at the same time" and "Changing the sequence of instructions in code can sometimes produce
//    the same outcome and can sometimes produce a different outcome" (api-math-g1-strands.txt, api-math-g2-strands.txt).
//  - EQAO: Grade 3 window "May 4 - June 8, 2027" (en dash in source). PPM 128: Grade 6 and below devices "stored out of view
//    and powered off or set to silent mode through out the full instructional day" (typo in source).
//  - CEMC BCC: "Monday, November 9, 2026 to Friday, November 20, 2026"; "Students in Grade 6 or below are eligible to
//    participate in the Grade 5/6 BCC."; "12 multiple-choice questions out of a total of 60 (Grade 5/6)."; "Time allowed
//    for completion is 45 minutes."; "only require familiarity with concepts covered in the mathematics curriculum";
//    "It is not possible for students to individually register for a contest"; past contests "from the last 10 years".
//  - Place facts (Scarborough's own, 8+): City Wards file (City Clerk's Office) names six wards 20 to 25, Scarborough
//    Southwest, Scarborough Centre, Scarborough-Agincourt, Scarborough North, Scarborough-Guildwood, Scarborough-Rouge Park;
//    the Parks, Forestry & Recreation Locations file has a District column whose values include Scarborough (384 rows,
//    our count); the dataset refresh_rate is "Weekly", last refreshed 2026-10-15; its notes say "Drop-In Course is a program
//    offered within PFR facilities where registration is not required."; datastore field note for Age Min "minimum allowable
//    age in months"; Toronto city overlay area codes 416, 437, 647, 942 (facts-geo.md section 4, CNAC); Eastern time,
//    UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e). No populations used. No facility names printed.
//  - Licence: Open Government Licence - Toronto (open.toronto.ca/open-data-licence/), commercial use granted, Information
//    Provider "means the City of Toronto", attribution statement "Contains information licensed under the Open Government
//    Licence - Toronto" (en dash in source), non-endorsement clause.
// Our own calculations (count_dropins.py and page_script.py, python -I, outputs count_dropins.out.txt, page_script.out.txt):
// 7,039 Drop-in rows at Scarborough locations, dated 15 October to 26 November 2026, at 39 locations; sessions an N-year-old
// fits by age (Age Min <= N, Age Max blank or >= N): age 6 639 at 22 locations, 7 1,052, 8 1,052, 9 1,070, 10 1,100 (23
// locations each), 11 1,125, 12 1,131 (24 locations); age 9 by day Saturday 191, Thursday 174, Friday 154, Sunday 150,
// Wednesday 144, Monday 137, Tuesday 120; age 9 by section Swim 558, Skate 365, Sports 89, Hobbies and Interests 46, Arts 6,
// Early Years 6; 273 of the age 9 rows name a caregiver or family in the title; 315 start at 3 pm or later on a weekday;
// 5,185 Scarborough rows have no Age Max. India time conversions are ours, from the offsets above.
// Lesson family: joining two tables on a key, then filtering by a numeric range and counting by weekday.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'district = {}',
  'with open("locations.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        district[row["Location ID"]] = row["District"]',
  '',
  'age = 9',
  'days = {}',
  'with open("dropin.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if district.get(row["Location ID"]) != "Scarborough":',
  '            continue',
  '        low = int(row["Age Min"])',
  '        high = 120 if row["Age Max"] == "None" else int(row["Age Max"])',
  '        if age in range(low, high + 1):',
  '            day = row["DayOftheWeek"]',
  '            days[day] = days.get(day, 0) + 1',
  '',
  'print(sum(days.values()), days)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SCARBOROUGH', label: 'Scarborough', blurb: 'Coding for Scarborough children aged 6 to 12: the first Ontario coding expectations, a City of Toronto drop-in data project and the Beaver Computing Challenge.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-scarborough-toronto',
  code: 'kst',
  accent: '#524925',
  accentRationale: 'Scarborough kids page: a muted olive bark, #524925, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and other Canada accents by 14; contrast 8.47 on the paper #FBF8F2, 7.97 and 7.29 on the two paper tints',
  pageType: 'city',
  place: {
    name: 'Scarborough',
    eyebrow: 'Scarborough, Toronto, Ontario',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Toronto' },
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-canada', name: 'Canada' },
    { slug: 'coding-classes-in-ontario', name: 'Ontario' },
    { slug: 'coding-and-ai-classes-in-toronto', name: 'Toronto' }
  ],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Toronto', href: '/coding-and-ai-classes-in-toronto' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Scarborough',
  title: 'Coding Classes for Kids in Scarborough | Ages 6 to 12, Live',
  description: 'Live online coding classes for Scarborough children aged 6 to 12: what Grades 1 and 2 ask, the Beaver Computing Challenge, and a City drop-in data project.',
  ogDescription: 'Scarborough children start coding in Grade 1 math. See what Ontario asks of them, a City of Toronto data project sized for kids, and live classes that go further.',
  twitterDescription: 'Coding for Scarborough kids aged 6 to 12, live online, built on what Ontario schools already ask.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Scarborough Children Aged 6 to 12',
    description: 'Level-matched live online coding for Scarborough children from Grade 1 to Grade 7: block coding and Scratch, then typed Python, small games and first data projects, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Scarborough',
  capsuleQ: 'Where can a Scarborough child aged 6 to 12 learn to code with a real teacher?',
  capsule: 'Modern Age Coders runs live online coding classes for Scarborough children aged 6 to 12, in a batch of fifteen to twenty or one to one. Younger children begin with Coding for Kids or Scratch; from about 9, Python and AI for Kids. A teacher watches every screen, and the first class is free.',
  lead: 'In Scarborough, as everywhere in Ontario, a child is asked to write code in math class from Grade 1. By Grade 2 the ministry wants two things happening at once on the screen. What a classroom of thirty rarely has is the time for each child to get it wrong, look closely and fix it while someone asks why. That is the hour we give. Below we set out the first two years of Ontario coding in the ministry&rsquo;s words, a small data project on the City of Toronto&rsquo;s own recreation file filtered to Scarborough, the one CEMC contest built for children of this age, and how our live classes fit around a Scarborough school week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Scarborough.',

  picks: {
    eyebrow: 'Course picks for Scarborough children',
    h2: 'Four starting points for a Scarborough child',
    intro: 'Each matches an age band, and the free class checks the fit before anything is booked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Our broadest first course: blocks, Scratch games, a first app and a gentle look at AI, grouped by age so a six-year-old and an eleven-year-old never share a room.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Sprites that move together, which is exactly the Grade 2 idea of concurrent events, then loops, scores and a finished game the child can show the family.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with turtle drawings, guessing games and simple smart projects, for children who already think in steps and want real code.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, then Roblox and Minecraft worlds, planned on paper first so the child designs the rules rather than copying them.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding at school in Scarborough',
      h2: 'Grade 1 and Grade 2: the coding a Scarborough child meets first',
      intro: 'Scarborough public schools teach the Ontario curriculum. We read the coding expectations from the ministry&rsquo;s curriculum service on 22 October 2026. Quoted words are the ministry&rsquo;s; the right-hand column is what we do with them.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 1, C3.2', req: 'Children &ldquo;read and alter existing code, including code that involves sequential events, and describe how changes to the code affect the outcomes&rdquo;.', ours: 'We hand a six-year-old a short program that almost works, ask what it will do before it runs, and let the child change one block at a time. Saying the prediction aloud is the habit we are after.' },
          { code: 'Grade 2, C3.1', req: 'Writing and running code, &ldquo;including code that involves sequential and concurrent events&rdquo;.', ours: 'Concurrent means two things at once: a cat and a dog sprite crossing the stage together. In our Scratch classes the child times them so they meet in the middle, and works out why they did not.' },
          { code: 'Grade 2, teacher notes', req: 'The ministry&rsquo;s own example: &ldquo;Students will develop code to move multiple objects from one location to another on a grid at the same time&rdquo;.', ours: 'We use a squared grid on paper first, then the screen. Counting squares turns the code into arithmetic a Grade 2 child already knows.' },
          { code: 'Grade 2, teacher notes', req: '&ldquo;Changing the sequence of instructions in code can sometimes produce the same outcome and can sometimes produce a different outcome.&rdquo;', ours: 'A favourite puzzle in our classes: swap two lines, then decide whether anything changed. Children learn that order sometimes matters and sometimes does not, and to test rather than guess.' }
        ] },
        { kind: 'p', text: 'Grades 3 to 7 keep building on this ladder, with repeating events, nesting, conditions, efficient code and subprograms, and our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">guide to Ontario coding from Grade 1 to Grade 8</a> sets out each year. The point for a Scarborough parent is that coding at school is part of math, assessed alongside everything else, and squeezed into a strand that shares the year with number, geometry and data. Children who enjoy it usually want more of it than the timetable allows.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'EQAO in Grade 3', p: 'EQAO lists the 2026 to 2027 Grade 3 Reading, Writing and Mathematics assessment for 4 May to 8 June 2027. We do not coach to it; the counting and pattern work in early coding sits comfortably beside it.' },
          { h3: 'Phones in the younger grades', p: 'Under Ontario&rsquo;s PPM 128, from Grade 6 down, personal devices stay out of view and silent through the whole school day. Our classes happen after school, at home, on a laptop or desktop.' },
          { h3: 'Blocks, then typing', p: 'The ministry allows block-based and text-based coding, so Scarborough classrooms vary. We start most children under 9 in blocks and move them to Python when reading and typing are no longer the hard part.' }
        ] },
        { kind: 'callout', h3: 'Who we are, and are not', p: 'Modern Age Coders teaches alongside school; it is not a school and gives no report-card marks. We are not connected with the Ontario Ministry of Education, EQAO, the Toronto school boards or the City of Toronto.' }
      ]
    },
    {
      id: 'dropins', tint: 'deep', eyebrow: 'Scarborough data project',
      h2: 'What can a 9-year-old drop in to this week in Scarborough? Counting the City&rsquo;s own file',
      intro: 'The City of Toronto publishes its recreation schedule as open data. Our older kids, around ages 10 to 12, join two of its tables, keep only Scarborough, and count the sessions a child of a given age can join. Every number below is our count, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our count of drop-in sessions at locations whose District is Scarborough, from the City of Toronto file downloaded 22 October 2026 (sessions dated 15 October to 26 November 2026)', head: ['Child&rsquo;s age', 'Sessions open to that age', 'Scarborough locations offering one'], rows: [
          ['6', '639', '22'],
          ['7', '1,052', '23'],
          ['8', '1,052', '23'],
          ['9', '1,070', '23'],
          ['10', '1,100', '23'],
          ['11', '1,125', '24'],
          ['12', '1,131', '24']
        ] },
        { kind: 'p', text: 'The file is Registered Programs and Drop In Courses Offering, published by Parks, Forestry &amp; Recreation and refreshed weekly. Its notes say a drop-in &ldquo;is a program offered within PFR facilities where registration is not required&rdquo;. Two of its tabs matter here: Drop-in, one row per session, and Locations, one row per place, with a District column. Our download held 7,039 drop-in rows at Scarborough locations, spread over 39 of them. Here is the script a 10-year-old can type, using nothing but the Python standard library:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Join the tables', p: 'A session row only gives a Location ID. The child builds a small dictionary from Locations, ID to District, then looks each session up in it. That is a join, the same idea a database uses, written in four lines.' },
          { h3: '2. Filter by age', p: 'Each row has Age Min and Age Max. A blank maximum means no upper limit, so the script treats it as 120. A session fits a 9-year-old when 9 sits inside the range, which Python checks with range.' },
          { h3: '3. Count by day', p: 'Every fitting row adds one to its weekday. For age 9 we got Saturday 191, Thursday 174, Friday 154, Sunday 150, Wednesday 144, Monday 137 and Tuesday 120: 1,070 in all, swim and skate making up most of them.' }
        ] },
        { kind: 'callout', h3: 'The trap in the data dictionary', p: 'The City&rsquo;s field note for Age Min says &ldquo;minimum allowable age in months&rdquo;. The values tell a different story: ranges such as 0 to 5, 6 to 12 and 13 to 18, and a youth council open from 13 to 24. Those only make sense as years, so we read them as years and say so. Spotting that a label and its data disagree is a real skill, and children enjoy catching a grown-up file being wrong.' },
        { kind: 'p', text: 'What the counts do not say matters as much. 273 of the sessions open to a 9-year-old name a caregiver or family in the title, so an adult has to come too. A count of sessions is not a count of places on the ice, and the file is a snapshot: change the download date and the numbers move. A good next step for the class is the after-school question: of the 1,070, how many start at 3 pm or later on a weekday? Our answer was 315. Data used under the Open Government Licence - Toronto. Contains information licensed under the Open Government Licence - Toronto (<a class="cg-inline-link" href="https://open.toronto.ca/open-data-licence/">licence</a>, <a class="cg-inline-link" href="https://open.toronto.ca/dataset/registered-programs-and-drop-in-courses-offering/">dataset page</a>). The City does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'A first contest',
      h2: 'The Beaver Computing Challenge: a first contest for Scarborough children in Grades 5 and 6',
      intro: 'Most CEMC contests start in Grade 7. The Beaver Computing Challenge (BCC) has a level for younger children, and it needs no coding at all. Details below are CEMC&rsquo;s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Beaver Computing Challenge, Grade 5/6 level, 2026, as published by CEMC at the University of Waterloo', head: ['What', 'CEMC says'], rows: [
          ['Who can enter', 'Students in Grade 6 or below'],
          ['When', 'Monday 9 November to Friday 20 November 2026 (North and South America)'],
          ['Format', '12 multiple-choice questions, out of a total of 60'],
          ['Time', '45 minutes'],
          ['Coding needed', 'None: questions only require familiarity with concepts covered in the mathematics curriculum'],
          ['How to enter', 'Through a school; a student cannot register alone']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Puzzles, not programs', p: 'BCC questions read like logic stories: a beaver sorting logs, a path through a maze, a rule to discover. A Scarborough Grade 5 child who has spent a term predicting what code will do is well prepared without ever opening a contest paper.' },
          { h3: 'Ask the school early', p: 'CEMC says it is not possible for students to register individually. If your child&rsquo;s school has not ordered the BCC, ask the teacher; schools that already run CEMC contests often add it.' },
          { h3: 'Practise on our puzzles', p: 'CEMC keeps past contests from the last ten years free online. We point families there and teach with puzzles of our own, written for our classes and labelled as ours, rather than copying CEMC material.' }
        ] },
        { kind: 'p', text: 'For a child heading toward Grade 7, the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers all three levels, and the <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss contest page</a> covers the Grade 7 and 8 math contest that usually comes next. We are not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Scarborough after-school hours, India hours, and the clock change on 1 November 2026',
      intro: 'Scarborough runs on Eastern time, which moves twice a year. Our teachers work from India, which never changes its clocks. Here is what two typical children&rsquo;s slots mean on both sides.',
      body: [
        { kind: 'table', caption: 'Two sample Scarborough class slots in India time, 2026 to 2027 (offsets from the IANA time zone database, release 2026e; conversions ours)', head: ['Period', 'Eastern offset', '5:00 pm on a weekday in Scarborough', '10:00 am on a Sunday in Scarborough'], rows: [
          ['To 1 November 2026', 'UTC-4', '2:30 am the next day in India', '7:30 pm in India'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '3:30 am the next day in India', '8:30 pm in India'],
          ['From 14 March 2027', 'UTC-4', '2:30 am the next day in India', '7:30 pm in India']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Times sent in Eastern', p: 'Every invitation we send a Scarborough family is written in Eastern time. Before each clock change we confirm the next class again, so a child never logs on an hour early.' },
          { h3: 'Short for small children', p: 'For six- and seven-year-olds we keep lessons short and lively, with a break to stand up. Older children, nearer 12, can hold a full hour on one project.' },
          { h3: 'Scarborough numbers', p: 'Scarborough is inside the City of Toronto&rsquo;s 416 and 647 area, with 437 and 942 sharing it. Any of them works in the form; type ten digits, as the +1 is already filled in.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From moving sprites at 6 to typed Python at 12',
    intro: 'Ages are a guide, not a rule; the free class places each child by what they can already do.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Order and timing', p: 'Short block programs, two sprites at once, and saying what will happen before pressing go.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Loops and games', p: 'Repeats, scores and simple rules, built into a game the child designs on paper first.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Typed code', p: 'Python with turtle drawings and guessing games, and a first look at data like the Scarborough file.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Age 12', h3: 'Ready for more', p: 'Functions, files and bigger projects, plus puzzles that prepare for Gauss and, later, the CCC.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Scarborough child learn to code when AI can write code?',
    intro: 'Yes, and for the same reason children still learn to add when calculators exist.',
    p1: 'The drop-in project above shows why. A tool can produce the script, but only a child who understands it notices that the age field says months and the numbers say years, or that a session needing a caregiver is not one a child can attend alone. Knowing what to doubt comes from having built the loop by hand.',
    p2: 'Children under 13 in our classes do not use adult chatbots. They learn what AI is, how a model guesses from examples, and where it goes wrong, through age-appropriate tools and activities a teacher runs. Above all they practise thinking a problem through, step by step, and checking the answer rather than copying one.',
    closer: 'Ontario put coding into Grade 1 math to teach step-by-step reasoning, and that reasoning is the part no tool can do on a child&rsquo;s behalf.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes from home, for every corner of Scarborough',
    intro: 'Online means a child near the lake and a child up by the Rouge share one teacher, with no drive across the district at rush hour.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty children of a similar age and level, or a teacher to themselves for a shy starter or a fast one.' },
      { h3: 'Grouped by age', p: 'Six-year-olds learn with six-year-olds. Examples, pace and jokes are pitched at the room, and a child moves up when ready, not on a calendar.' },
      { h3: 'Parents can watch', p: 'Families are welcome to sit in, especially for younger children. Teachers share what the child built and what comes next after each stage.' },
      { h3: 'What a child needs', p: 'A laptop or desktop with a keyboard, a mouse for the youngest, sound, and a steady connection. Tablets work poorly for typed code.' },
      { h3: 'Start free', p: 'The first class is a real lesson, not a sales call, and it ends with a suggested course and level. No card is needed.' }
    ],
    spec: { title: 'No Scarborough centre', p: 'Modern Age Coders has no premises in Scarborough or anywhere in Toronto and claims none. Every class is live and online, taught from India, with the same teachers who teach families in other countries.' }
  },

  fees: {
    h2: 'What kids&rsquo; coding classes cost in Scarborough',
    intro: 'Three lines, and each fee shows its currency beside it.',
    first: 'A full live lesson at no charge, ending with a level, a course and a time we suggest for your child.',
    group: 'The monthly fee for a place in a batch of fifteen to twenty children at one stage.',
    private: 'The monthly fee for one teacher and your child alone, at times that suit the family.',
    closer: 'Scarborough families pay the same as every other family in Canada. Nothing is charged until after the free lesson, once a course and a slot are agreed; the pricing page covers missed classes and holidays.'
  },

  reviewsH2: 'What parents have written about us on Google',

  book: {
    h2: 'Tell us about your Scarborough child',
    intro: 'We plan the first task by age: two sprites racing for a six-year-old, a maze game for an eight-year-old, or the drop-in file for a twelve-year-old who likes numbers.',
    success: 'Thank you. The team will contact you soon about a class for your child in Scarborough.'
  },

  faq: {
    h2: 'Scarborough parents ask',
    intro: 'Questions we hear most often from families in Scarborough.',
    items: [
      { q: 'Are there coding classes for kids in Scarborough?', a: 'Yes, live and online. We have no Scarborough premises; your child joins from home with a real teacher, in a batch of fifteen to twenty children or one to one.' },
      { q: 'What age can my child start?', a: 'Six is a good age to start, which is about Grade 1, when Ontario math first asks children to read and change simple code. Our kids classes run to age 12.' },
      { q: 'Do Scarborough schools already teach coding?', a: 'Yes. Coding is part of the Ontario math curriculum from Grade 1, and by Grade 2 children write code with two things happening at the same time. It is one strand among many, so time for each child is limited.' },
      { q: 'Does my child need to know how to type?', a: 'No. Children under about 9 start with blocks they drag and drop. Typing comes later, when the child moves on to Python.' },
      { q: 'Is Scratch or Python better for a 7-year-old?', a: 'Scratch, for most children. It lets a 7-year-old build moving stories and games without spelling errors getting in the way. We move children to Python when they are ready, often around 9 or 10.' },
      { q: 'What time are classes for Scarborough families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always given in Eastern time.' },
      { q: 'Can my child enter a coding contest at this age?', a: 'Children in Grade 6 or below can write the Grade 5/6 Beaver Computing Challenge, which CEMC runs from 9 to 20 November 2026. It needs no coding, and entry goes through the school.' },
      { q: 'Will my child use ChatGPT in class?', a: 'No. Children under 13 in our classes do not use adult chatbots. ChatGPT needs a parent\'s permission for anyone under 18, and we teach young children about AI with age-appropriate activities instead.' },
      { q: 'Do you teach at a centre in Scarborough?', a: 'No. Every class is online, so there is nothing to drive to. Children need a computer with a keyboard and sound, and a steady internet connection.' },
      { q: 'How do I see the fees?', a: 'The fees section on this page lists the free first class, the monthly batch fee and the monthly one-to-one fee, each with its currency shown. Nothing is billed before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Toronto families',
    h2: 'Other pages for Scarborough and Toronto families',
    html: 'For the whole city, including teens and adults, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>. The province is covered on <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and the country on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Parents of Grade 3 and Grade 6 children may want <a class="cg-inline-link" href="/eqao-grade-3-math-practice">EQAO Grade 3 practice</a> and <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 practice</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Scarborough and Toronto',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-kst .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2rem); }
.cg-root.cg-kst .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-kst .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-kst .cg-eyebrow { letter-spacing: 0.08em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-kst .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-kst .cg-align-code { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-kst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kst #dropins code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-kst .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 1 C3.2 (read and alter existing code), Grade 2 C3.1 (sequential and concurrent events) and two Grade 2 teacher notes (moving multiple objects on a grid at the same time; changing the sequence of instructions); EQAO Grade 3 window 4 May to 8 June 2027; PPM 128 rule for Grade 6 and below. CEMC Beaver Computing Challenge 2026 (Grade 5/6 eligibility, dates, 12 questions out of 60, 45 minutes, no coding needed, through a school). Area codes and Eastern time offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'City of Toronto Open Data, Registered Programs and Drop In Courses Offering (Parks, Forestry & Recreation; Open Government Licence - Toronto), Drop-in and Locations tabs downloaded with curl on 22 October 2026 and joined by Location ID with our script count_dropins.py (python -I): 7,039 Drop-in rows at locations whose District is Scarborough, sessions dated 15 October to 26 November 2026, 39 locations; sessions an N-year-old fits by age: 6 639, 7 1,052, 8 1,052, 9 1,070, 10 1,100, 11 1,125, 12 1,131; age 9 by weekday Saturday 191 to Tuesday 120; 273 age 9 rows need a caregiver or family; 315 start at 3 pm or later on a weekday; Age Min field note says months while the values read as years. Labelled as ours. Lesson family: a join on a key, a numeric range filter and a weekday count.',
    requiredMentions: [
      'sequential and concurrent events',
      'move multiple objects from one location to another on a grid',
      'minimum allowable age in months',
      'Scarborough locations offering one',
      'Saturday 191, Thursday 174',
      '273 of the sessions open to a 9-year-old',
      'Our answer was 315',
      'Monday 9 November to Friday 20 November 2026',
      '12 multiple-choice questions, out of a total of 60',
      '3:30 am the next day in India'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 1 and Grade 2 math strands, C3 coding expectations and teacher notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_2___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: 2026-27 Grade 3 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Ontario PPM 128: personal mobile devices, Grade 6 and below rule.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 dates, Grade 5/6 eligibility, format, no coding needed.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: students cannot register individually; past contests free.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Toronto Open Data: Registered Programs and Drop In Courses Offering dataset page.', url: 'https://open.toronto.ca/dataset/registered-programs-and-drop-in-courses-offering/' },
      { claim: 'City of Toronto CKAN API: package metadata (weekly refresh, notes) and the Drop-in field notes.', url: 'https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=registered-programs-and-drop-in-courses-offering' },
      { claim: 'City of Toronto: Open Government Licence - Toronto (commercial use, attribution, non-endorsement).', url: 'https://open.toronto.ca/open-data-licence/' },
      { claim: 'City of Toronto City Wards file (City Clerk\'s Office): the six Scarborough wards, 20 to 25.', url: 'https://open.toronto.ca/dataset/city-wards/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Scarborough or Toronto population figure: StatCan was not reachable live, so none is printed.',
      'The 1998 amalgamation date: no City of Toronto page was fetched raw, so the page relies on the City files that list Scarborough as a district.',
      'Names of recreation centres, parks or rinks: left out, since some carry the names of people or schools.',
      'That the Age Min and Age Max values are months: rejected after reading the values; the page explains the mismatch and reads them as years.',
      'A count of places or spots in sessions: the file lists sessions, not capacity, so no capacity figure is given.',
      'Any total of drop-ins across all ages or the whole city: not printed; each count is for one age and Scarborough only.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Scarborough schools, school boards or private people: not used.',
      'Any affiliation with the City of Toronto, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
