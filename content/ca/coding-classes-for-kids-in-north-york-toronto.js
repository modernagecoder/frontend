'use strict';
// North York, Toronto (cg- city page, Canada cluster Wave 2, row 151). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: the Grade 4 Ontario coding
// expectations (repeating and nested events, loops, area as a coding context), an area-of-ice-pads project on two City
// of Toronto rink files filtered to the North York Community Council Area, and CEMC's free Problem of the Week and
// Courseware. Links up to /coding-and-ai-classes-in-toronto and sideways to the Scarborough kids page (row 150).
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g4-strands.txt
// (Ontario DCP content API; the API puts a stray space before commas, dropped in quotes) and facts-schools-contests.md:
//  - Grade 4 C3.1 "including code that involves sequential, concurrent, repeating, and nested events"; C3.2 "read and alter
//    existing code"; teacher notes "Loops make the code more readable and reduce the number of instructions that need to be
//    written.", "Loops can exist within loops, referred to as "nested loops".", "Code can be altered to be used for a new
//    situation."; contexts list includes "determining area, using whole numbers"; example "Repeat 4 times: Move 100 steps.
//    Turn 90 degrees."
//  - EQAO Grade 6 window "May 4 - June 8, 2027" (en dash in source). PPM 128 effective "September 1, 2024".
//  - CEMC POTW: "e-mailed to educators for use with their students from Grades 3 to 12"; "New problems are sent every
//    Thursday, and their solutions are sent one week later." Courseware: "Covering topics from Grades 4 to12 mathematics
//    and computer science" (missing space in source), "No registration is required to access these resources.",
//    "there is no certificate or other form of credential awarded". CEMC: "all students must participate through their school."
//  - Place facts (North York's own, 8+): the indoor and outdoor rink files each carry a "Community Council Area" column with
//    the value North York; 20 indoor rows and 13 outdoor rows carry it (our count); those rows sit in wards 6, 8, 15, 16, 17,
//    18, named in the City Wards file York Centre, Eglinton-Lawrence, Don Valley West, Don Valley East, Don Valley North,
//    Willowdale; indoor file notes "ice pad size according to Hockey Canada Line Markings diagrams approved by Hockey Canada"
//    and "Eight arenas in Toronto are operated by volunteer Arena Boards of Management (Arena Boards)."; outdoor file notes
//    "The City operates more than 50 locations with outdoor rinks and skating trails, consisting of approximately 70 ice pads
//    and skating trails."; refresh rates "As available" (indoor, last 2026-02-20) and "Annually" (outdoor, last 2026-05-27);
//    City overlay area codes 416, 437, 647, 942 (facts-geo.md section 4); Eastern time, UTC-5 from 1 November 2026, UTC-4
//    from 14 March 2027 (IANA tzdb 2026e). No populations. No rink, arena or sponsor names printed.
//  - Licence: Open Government Licence - Toronto (open.toronto.ca/open-data-licence/), commercial use granted; attribution
//    "Contains information licensed under the Open Government Licence - Toronto" (en dash in source). CKAN license_title reads
//    "License not specified"; the portal-wide licence covers portal data (as recorded for the Toronto pilot in opendata.tsv).
// Our own calculations (rinks_area.py and page_script.py, python -I; outputs rinks_area.out.txt, page_script.out.txt in
// ca/src-pilots/coding-classes-for-kids-in-north-york-toronto/): 33 North York rows (20 indoor, 13 outdoor: 12 ice pads and
// 1 skate trail); 26 with a length and width, 7 without (3 indoor, 4 outdoor); indoor size categories Regular(185X85) 14,
// Undersized(less than 185X85) 3, None 3; indoor operated by PFR 15, Arena Board 5; all 13 outdoor rows lit; boards Yes 7,
// No 5, blank 1; areas: 180 x 135 = 24,300 sq ft (2,258 m2, 1 pad), 180 x 120 = 21,600 (2,007 m2, 2), 185 x 85 = 15,725
// (1,461 m2, 18: 14 indoor, 4 outdoor), 180 x 80 = 14,400 (1,338 m2, 1), 289 x 49 = 14,161 (1,316 m2, 1), 160 x 73 = 11,680
// (1,085 m2, 1), 160 x 70 = 11,200 (1,041 m2, 1), 132 x 58 = 7,656 (711 m2, 1); longest pad (289 ft) is not the largest;
// 18 indoor locationids + 10 outdoor = 28, but 27 distinct (one location in both files). 1 ft = 0.3048 m. India time ours.
// Lesson family: multiplying two columns into a new value, skipping blanks with try/except, sorting, unit conversion.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'pads = []',
  'for name, lcol, wcol in [("indoor.csv", "Pad Length", "Pad Width"),',
  '                         ("outdoor.csv", "Pad Length (ft.)", "Pad Width (ft.)")]:',
  '    for row in csv.DictReader(open(name, encoding="utf-8")):',
  '        if row["Community Council Area"] == "North York":',
  '            try:',
  '                pads.append(int(row[lcol]) * int(row[wcol]))',
  '            except ValueError:',
  '                print("no size given, skipped")',
  '',
  'pads.sort(reverse=True)',
  'print(len(pads), "pads with a size")',
  'print("biggest:", pads[0], "square feet")',
  'print("in square metres:", round(pads[0] * 0.3048 ** 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'NORTH YORK', label: 'North York', blurb: 'Coding for North York children aged 6 to 12: Grade 4 loops, an ice-pad area project on City of Toronto rink files, and free CEMC problems.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-north-york-toronto',
  code: 'knyt',
  accent: '#22570D',
  accentRationale: 'North York kids page: a deep spruce green, #22570D, allocated to this row by the Canada group so it stays 6 RGB units from every site accent and 14 from other Canada accents; contrast 8.13 on the paper #FBF8F2, 7.64 on #F5F1E8 and 6.99 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'North York',
    eyebrow: 'North York, Toronto, Ontario',
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
  routeLabel: 'North York',
  title: 'Coding Classes for Kids in North York | Ages 6 to 12, Online',
  description: 'Live online coding for North York kids aged 6 to 12: Ontario Grade 4 loops explained, a rink-area project on City of Toronto data, and a free first class.',
  ogDescription: 'Grade 4 in Ontario brings loops inside loops. See what North York children are asked to code, a rink-size project built on City data, and live classes beside school.',
  twitterDescription: 'Live coding for North York children aged 6 to 12, built around what Ontario Grade 4 already asks.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for North York Children Aged 6 to 12',
    description: 'Small-step live online coding for North York children from Grade 1 to Grade 7: Scratch and block coding, loops and nested loops, then typed Python with real City data, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in North York',
  capsuleQ: 'Is there a live coding class for a North York child aged 6 to 12?',
  capsule: 'Yes. North York children aged 6 to 12 learn with Modern Age Coders live online, one to one or in a group of fifteen to twenty. Six to eight-year-olds usually start with Scratch Coding for Kids; from about 9, Python and AI for Kids. Each class has a live teacher, and the first one is free.',
  lead: 'Grade 4 is the year Ontario math stops asking a North York child to repeat an instruction and starts asking for a repeat inside a repeat. That jump, from a loop to a nested loop, is where many nine-year-olds either click or quietly give up. Our classes slow it down: draw it, act it out, code it, then break it on purpose. This page shows what the ministry asks in Grade 4, a real project on two City of Toronto rink files that a North York child can finish in an afternoon, the free CEMC problems worth knowing about, and how a live class fits a North York family&rsquo;s week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in North York.',

  picks: {
    eyebrow: 'Courses for North York children',
    h2: 'Where a North York child usually begins',
    intro: 'Pick by age and by how the child likes to work; the free class settles the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Loops first, then loops inside loops, built into games and patterns a child can see repeat on screen, the exact skill Grade 4 brings.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'A wide first course across blocks, Scratch games, a small app and a first look at AI, with children grouped by age.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for children ready to spell their instructions: turtle drawings, guessing games and the rink-area project below.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Puzzles, patterns and step-by-step reasoning for children who enjoy the math side of coding as much as the screen.' }
    ]
  },

  sections: [
    {
      id: 'grade4', tint: '', eyebrow: 'Grade 4 coding in North York',
      h2: 'Loops inside loops: the Ontario Grade 4 coding a North York child meets',
      intro: 'North York public schools follow the Ontario curriculum. We read the Grade 4 math expectations from the ministry&rsquo;s curriculum content service on 22 October 2026. The left column quotes the ministry; the right column is how we teach it.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 4, C3.1', req: 'The coding expectation now covers &ldquo;code that involves sequential, concurrent, repeating, and nested events&rdquo;.', ours: 'Nested is the new word. We begin with a child walking a square on the classroom floor, four sides, four turns, then ask what happens if the square itself is repeated six times around a point.' },
          { code: 'Grade 4, teacher notes', req: 'The ministry&rsquo;s example program: &ldquo;Repeat 4 times: Move 100 steps. Turn 90 degrees.&rdquo;', ours: 'Children type this in Scratch, predict the shape, and then change 90 to 60. The square becomes something else, and finding out why is the lesson.' },
          { code: 'Grade 4, teacher notes', req: '&ldquo;Loops make the code more readable and reduce the number of instructions that need to be written.&rdquo; And: &ldquo;Loops can exist within loops, referred to as &ldquo;nested loops&rdquo;.&rdquo;', ours: 'We count blocks before and after. In one of our exercises a star drawn with no loop takes forty blocks; with two loops it takes six. Children love seeing their own long program shrink.' },
          { code: 'Grade 4, C3.2', req: 'Children &ldquo;read and alter existing code&rdquo;, and the notes add: &ldquo;Code can be altered to be used for a new situation.&rdquo;', ours: 'Our favourite move: hand over a working program for one job and ask the child to bend it to a different one, such as turning a square drawer into a hexagon drawer.' }
        ] },
        { kind: 'p', text: 'One line in the Grade 4 notes matters for the project further down. Among the contexts the ministry suggests for coding, it lists &ldquo;determining area, using whole numbers&rdquo;. Area is length times width, and a nine-year-old who can multiply already has everything needed to write a program that does it a thousand times without getting tired. The <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding guide for Grades 1 to 8</a> covers the years before and after; here we stay with Grade 4, because it is the year North York parents most often tell us the homework stopped making sense.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'EQAO two years on', p: 'EQAO publishes 4 May to 8 June 2027 as the 2026 to 2027 window for Grade 6 Reading, Writing and Mathematics. A Grade 4 child is two school years away, and steady work on patterns and number now is the useful preparation.' },
          { h3: 'Blocks or text', p: 'The ministry&rsquo;s notes say coding can mix pseudocode, block-based and text-based programs, so classrooms in North York differ. Most of our Grade 4 children work in blocks and try typed Python when they are curious.' },
          { h3: 'Away from the phone', p: 'Ontario&rsquo;s cellphone memo, PPM 128, took effect on 1 September 2024 and keeps devices away in class. Our lessons happen at home on a laptop or desktop, which suits typing and drawing far better than a phone.' }
        ] },
        { kind: 'callout', h3: 'What we are, and are not', p: 'Modern Age Coders runs classes beside school. It is not a school, sets no report-card marks, and is not connected with the Ontario Ministry of Education, EQAO, any Toronto school board or the City of Toronto.' }
      ]
    },
    {
      id: 'rinks', tint: 'deep', eyebrow: 'North York data project',
      h2: 'Which North York ice pad has the most room to skate? Measuring the City&rsquo;s rink files',
      intro: 'Parks, Forestry &amp; Recreation publishes two rink lists as open data: one for indoor ice and one for outdoor artificial rinks. Both have a column called Community Council Area, and North York is one of its values. Our older kids keep those rows, multiply length by width, and rank the results. Every figure below is our own calculation from files downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Ice pad areas in the North York Community Council Area, our calculation from the City of Toronto Indoor Ice Rinks and Outdoor Artificial Ice Rinks files (lengths and widths in feet, as the files give them)', head: ['Pad size (feet)', 'Area in square feet', 'Area in square metres (rounded)', 'North York pads this size'], rows: [
          ['180 by 135 (outdoor)', '24,300', '2,258', '1'],
          ['180 by 120 (outdoor)', '21,600', '2,007', '2'],
          ['185 by 85 (14 indoor, 4 outdoor)', '15,725', '1,461', '18'],
          ['180 by 80 (indoor)', '14,400', '1,338', '1'],
          ['289 by 49 (outdoor)', '14,161', '1,316', '1'],
          ['160 by 73 (indoor)', '11,680', '1,085', '1'],
          ['160 by 70 (indoor)', '11,200', '1,041', '1'],
          ['132 by 58 (outdoor)', '7,656', '711', '1']
        ] },
        { kind: 'p', text: 'The indoor file lists 20 North York rows and the outdoor file 13, one of them a skate trail rather than a pad. Seven rows have no length or width at all, so the table covers 26 pads. The indoor file explains that sizes follow &ldquo;Hockey Canada Line Markings diagrams approved by Hockey Canada&rdquo;, which is why 185 by 85 turns up so often: the file labels it Regular(185X85), and three North York indoor pads carry the label Undersized(less than 185X85). Here is the program a 10- or 11-year-old writes, with the two downloads renamed indoor.csv and outdoor.csv:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two files, one loop', p: 'The files name their size columns differently, Pad Length in one and Pad Length (ft.) in the other. Rather than copy the loop twice, the child lists each file with its own column names and loops over that list.' },
          { h3: 'Blank sizes', p: 'Some rows hold an empty cell or the word None. Turning that into a number fails, and Python raises ValueError. The try and except lines catch it, print a note and move on: seven notes appear, and 26 areas remain.' },
          { h3: 'Rank and convert', p: 'Sorting from largest down puts 24,300 square feet first. One foot is exactly 0.3048 metres, so a square foot is 0.3048 squared square metres, and the program reports about 2,258.' }
        ] },
        { kind: 'callout', h3: 'The longest is not the largest', p: 'Ask a class which pad is biggest and someone points at the 289-foot one. It is the longest in North York, but at 49 feet wide its area is 14,161 square feet, smaller than a standard 185 by 85 pad. Children who see this have learned something about area that a worksheet rarely shows them.' },
        { kind: 'p', text: 'A second puzzle sits in the location numbers. The indoor North York rows use 18 different location IDs and the outdoor rows use 10, yet together there are only 27, because one site appears in both files with indoor ice and an outdoor pad. Counting places, not rows, means removing that repeat, and a Python set does it in one line. Other facts in the files are worth a class discussion: all 13 outdoor rows are marked as lit; 15 of the 20 indoor rows are run by the City&rsquo;s recreation division and 5 by an arena board, and the file notes that &ldquo;Eight arenas in Toronto are operated by volunteer Arena Boards of Management&rdquo;. The North York rows fall in wards 6, 8, 15, 16, 17 and 18, which the City&rsquo;s ward file names York Centre, Eglinton-Lawrence, Don Valley West, Don Valley East, Don Valley North and Willowdale. We use the Community Council Area as the City labels it and make no claim about older municipal boundaries. Contains information licensed under the Open Government Licence - Toronto (<a class="cg-inline-link" href="https://open.toronto.ca/open-data-licence/">licence</a>; <a class="cg-inline-link" href="https://open.toronto.ca/dataset/indoor-ice-rinks/">indoor rinks</a>; <a class="cg-inline-link" href="https://open.toronto.ca/dataset/outdoor-artificial-ice-rinks/">outdoor rinks</a>).' }
      ]
    },
    {
      id: 'cemc', tint: 'tint', eyebrow: 'Free problems from Waterloo',
      h2: 'Problem of the Week and Courseware: free CEMC material for North York children',
      intro: 'Waterloo&rsquo;s Centre for Education in Mathematics and Computing, known as CEMC, runs the school contests many Canadian students write, but for a Grade 3 or Grade 4 child its free weekly problems are often the better first step. Details are CEMC&rsquo;s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Two free CEMC resources, as CEMC describes them (University of Waterloo, read 22 October 2026)', head: ['Resource', 'Who it is for', 'How it works'], rows: [
          ['Problem of the Week', 'E-mailed to educators for use with students from Grades 3 to 12', 'New problems are sent every Thursday; solutions follow one week later'],
          ['Courseware', 'Covers topics from Grades 4 to 12 mathematics and computer science', 'No registration needed; no certificate or credential is awarded']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A teacher&rsquo;s resource', p: 'CEMC sends the weekly problem to educators, so the natural route is a North York teacher who already shares it. Ask whether the class receives it; many families never hear that it exists.' },
          { h3: 'One page, one week', p: 'A weekly problem suits a nine-year-old: one idea, a week to think, then a worked solution. We encourage children to write down a first guess before reading the answer, then compare.' },
          { h3: 'Contests come later', p: 'CEMC designs its contests for Grades 5 to 12, and says all students must participate through their school. For now, puzzles and code build the habits those contests reward.' }
        ] },
        { kind: 'p', text: 'We never reproduce CEMC problems in our classes. We write our own puzzles, label them as ours, and send families to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/potw">CEMC&rsquo;s Problem of the Week page</a> for the originals. A sample of ours, sized for Grade 4: a rink is 20 squares long and 9 squares wide; how many squares of ice is that, and how many more would a 21 by 9 rink have? Children solve it on paper, then write a two-line loop that prints the area of every rink from 15 to 25 squares long. Our <a class="cg-inline-link" href="/cemc-free-resources-guide">guide to free CEMC resources</a> lists the rest, and the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers the first contest most children can write. CEMC and the University of Waterloo have no link with Modern Age Coders.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'A North York weekday after school, a Saturday morning, and the India clock',
      intro: 'North York keeps Eastern time, which falls back on 1 November 2026 and springs forward on 14 March 2027. India keeps one clock all year. Two slots we often suggest look like this on both sides.',
      body: [
        { kind: 'table', caption: 'Sample North York slots and the matching time in India. Offsets: IANA tz database 2026e. Conversions: ours', head: ['North York slot', 'India time until 1 November 2026 (Eastern is UTC-4)', 'India time from 1 November 2026 to 14 March 2027 (UTC-5)'], rows: [
          ['Weekday, 4:30 pm', '2:00 am the following day', '3:00 am the following day'],
          ['Saturday, 9:30 am', '7:00 pm the same day', '8:00 pm the same day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Written in Eastern', p: 'Class invitations to North York families give the time in Eastern first. When the clocks move we send a fresh confirmation, so nobody arrives an hour early or late.' },
          { h3: 'Sized to the child', p: 'Six-year-olds get short, bright lessons with a stretch in the middle. By 11 or 12, most children happily stay with one project for a full hour.' },
          { h3: 'Phone numbers here', p: 'North York sits inside Toronto&rsquo;s 416 and 647 area, which 437 and 942 now share. Any of them works in the form; type the ten digits, since the +1 is already set.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first repeat at 6 to typed Python by 12',
    intro: 'Bands are approximate; the free class places a child by skill, not by birthday.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Steps and repeats', p: 'Short sequences, then the first repeat block, always with a guess said aloud before the green flag.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 and 9', h3: 'Nested loops', p: 'Patterns that repeat inside patterns, the Grade 4 idea, built into spinning designs and simple games.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'First real data', p: 'Typed Python, lists and the rink-area project, with mistakes caught and explained rather than hidden.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Bigger builds', p: 'Functions, files and a project of the child&rsquo;s own choosing, plus a gentle look at how AI tools work.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will AI make coding pointless for a North York child?',
    intro: 'No. It makes knowing what the code should do more valuable, not less.',
    p1: 'Take the rink project. A tool could write the area script in seconds, and it would happily rank the 289-foot pad near the top if asked for the longest. A child who multiplied the numbers by hand knows that long and large are different questions, and knows to check which one was asked. That judgement is the skill.',
    p2: 'Our under-13 students do not use adult chatbots. They learn what an AI model is, how it learns from examples and why it can be confidently wrong, through activities a teacher leads. The rest of the time they reason through problems themselves, one step at a time, and test the answer instead of trusting it.',
    closer: 'Ontario asks a Grade 4 child to read code and predict what it will do, and that habit of predicting and checking is exactly what working alongside AI requires.',
    blogAnchor: 'why children should still learn to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for every part of North York',
    intro: 'A child in Willowdale and a child near Don Mills join the same class from home, with no drive along the 401 at rush hour.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'Join a batch of fifteen to twenty children at the same stage, or book a teacher for your child alone, which suits a shy beginner or a child racing ahead.' },
      { h3: 'Same age, same room', p: 'We group children by age and level, so explanations and examples fit the room. Moving up happens when the child is ready.' },
      { h3: 'Families welcome', p: 'Parents can sit beside younger children during class. After each stage the teacher shares what the child built and what is planned next.' },
      { h3: 'The setup', p: 'A laptop or desktop with a keyboard and mouse, working sound and a reliable connection. Tablets are awkward for typed code, so we suggest a computer.' },
      { h3: 'The free class', p: 'A full lesson, taught as a lesson, that ends with a recommended course and level for your child. No payment details are asked for.' }
    ],
    spec: { title: 'No North York premises', p: 'Modern Age Coders has no office or classroom in North York or elsewhere in Toronto, and claims none. Every class is live online, taught from India by the same teachers who teach families in other countries.' }
  },

  fees: {
    h2: 'Fees for kids&rsquo; coding in North York',
    intro: 'There are three lines below, each with its currency printed next to it.',
    first: 'A real live lesson at no cost, which ends with a level, a course and a time we suggest.',
    group: 'The monthly fee for a seat in a batch of fifteen to twenty children at the same stage.',
    private: 'The monthly fee for lessons with one teacher and your child only, at times you choose.',
    closer: 'North York families pay what families pay everywhere in Canada. The first invoice comes after the free lesson, when you have chosen a course and a time; how missed classes and breaks work is set out on the pricing page.'
  },

  reviewsH2: 'Parents&rsquo; reviews of Modern Age Coders on Google',

  book: {
    h2: 'Book a free class for your North York child',
    intro: 'Tell us the age and what the child enjoys. A six-year-old might start with a dancing sprite, a nine-year-old with a spinning pattern, and an eleven-year-old with the rink files.',
    success: 'Thank you. The team will be in touch soon about a class for your child in North York.'
  },

  faq: {
    h2: 'Questions from North York parents',
    intro: 'What North York families ask us most.',
    items: [
      { q: 'Do you run coding classes for kids in North York?', a: 'Yes, live online. There is no North York classroom; your child joins from home with a teacher on screen, either in a batch of fifteen to twenty or one to one.' },
      { q: 'What does my child learn about coding in Grade 4?', a: 'Ontario Grade 4 math asks children to write and change code with repeating and nested events, which means loops and loops inside loops. It sits inside the math program rather than in a separate subject.' },
      { q: 'My child finds nested loops confusing. Can you help?', a: 'Yes, it is one of the most common sticking points we see. We draw the pattern on paper, act it out, then build it in Scratch one loop at a time until the inner and outer loops make sense.' },
      { q: 'How young can a North York child start?', a: 'Age 6, roughly Grade 1, is a good start. Our kids classes run to age 12, and older children move on to our teen courses.' },
      { q: 'Does my child need to type well first?', a: 'No. Younger children drag and drop blocks in Scratch. Typed Python comes later, usually around age 9 or 10, once reading and spelling are comfortable.' },
      { q: 'When are classes for North York families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are sent in Eastern time.' },
      { q: 'Is there a free math or coding challenge my child can try?', a: 'CEMC at the University of Waterloo e-mails a free Problem of the Week to educators for students from Grade 3 up. Ask your child\'s teacher whether the class receives it.' },
      { q: 'Will my child use ChatGPT or other chatbots?', a: 'No adult chatbots are used with our under-13 students. ChatGPT needs a parent\'s permission for anyone under 18. We teach young children how AI works with teacher-led activities instead.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard and mouse, sound, and a steady internet connection. A quiet corner helps younger children focus.' },
      { q: 'Where can I see what classes cost?', a: 'Scroll to the fees block above the reviews. The trial lesson is free, and the two monthly options, group and private, display in your own currency. Payment starts only once you decide to continue.' }
    ]
  },

  next: {
    eyebrow: 'More for Toronto families',
    h2: 'Related pages for North York and Toronto families',
    html: 'The city-wide page, which also covers teens and adults, is <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>. Scarborough families have their own page, <a class="cg-inline-link" href="/coding-classes-for-kids-in-scarborough-toronto">coding classes for kids in Scarborough</a>. For the province see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and for the whole country <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Parents with a child heading for Grade 6 may like <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 math practice</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North York and Toronto',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/coding-classes-for-kids-in-scarborough-toronto', label: 'Scarborough kids' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/cemc-free-resources-guide', label: 'Free CEMC resources' }
  ],

  personalityCss: `
.cg-root.cg-knyt .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-knyt .cg-hero h1 { font-weight: 680; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-knyt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-knyt .cg-eyebrow { letter-spacing: 0.1em; font-weight: 600; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-knyt .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-knyt .cg-align-code { font-weight: 650; letter-spacing: 0.03em; }
.cg-root.cg-knyt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-knyt #rinks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-knyt .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 4 C3.1 (sequential, concurrent, repeating and nested events), C3.2 (read and alter existing code), and Grade 4 teacher notes (loops make code more readable; nested loops; code altered for a new situation; the Repeat 4 times example; determining area, using whole numbers as a coding context). EQAO Grade 6 window 4 May to 8 June 2027; PPM 128 effective 1 September 2024. CEMC Problem of the Week (Grades 3 to 12, every Thursday) and Courseware (Grades 4 to 12, no registration, no credential). Area codes and Eastern offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'City of Toronto Open Data, Indoor Ice Rinks and Outdoor Artificial Ice Rinks (Parks, Forestry & Recreation; Open Government Licence - Toronto), downloaded with curl on 22 October 2026 and filtered to Community Council Area North York with our scripts rinks_area.py and page_script.py (python -I): 33 rows (20 indoor, 13 outdoor including 1 skate trail), 26 with a length and width; areas from 7,656 to 24,300 square feet; 18 pads at 185 by 85; the 289 by 49 pad is longest but smaller than 185 by 85; 27 distinct locations across the two files though the per-file counts are 18 and 10; three indoor pads labelled Undersized; all 13 outdoor rows lit. Labelled as ours. Lesson family: computing a new column from two others, skipping blanks with try and except, sorting and unit conversion.',
    requiredMentions: [
      'someone points at the 289-foot one',
      'determining area, using whole numbers',
      'three North York indoor pads carry the label',
      'Hockey Canada Line Markings diagrams approved by Hockey Canada',
      '24,300 square feet first',
      'smaller than a standard 185 by 85 pad',
      'together there are only 27',
      'seven notes appear, and 26 areas remain',
      'Eight arenas in Toronto are operated by volunteer Arena Boards of Management',
      'all 13 outdoor rows are marked as lit'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 4 math strands, C3 coding expectations and teacher notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_4___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: 2026-27 Grade 6 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Ontario PPM 128: personal mobile devices, effective 1 September 2024.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'CEMC Problem of the Week: Grades 3 to 12, sent every Thursday.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CEMC Courseware: Grades 4 to 12, no registration, no credential.', url: 'https://cemc.uwaterloo.ca/resources/courseware' },
      { claim: 'CEMC: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Toronto Open Data: Indoor Ice Rinks (Community Council Area, pad sizes, Hockey Canada note, Arena Boards).', url: 'https://open.toronto.ca/dataset/indoor-ice-rinks/' },
      { claim: 'City of Toronto Open Data: Outdoor Artificial Ice Rinks (Community Council Area, pad sizes, lighting).', url: 'https://open.toronto.ca/dataset/outdoor-artificial-ice-rinks/' },
      { claim: 'City of Toronto: Open Government Licence - Toronto (commercial use, attribution).', url: 'https://open.toronto.ca/open-data-licence/' },
      { claim: 'City of Toronto City Wards file (City Clerk\'s Office): names of wards 6, 8, 15, 16, 17 and 18.', url: 'https://open.toronto.ca/dataset/city-wards/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any North York or Toronto population figure: StatCan was not reachable live, so none is printed.',
      'That the North York Community Council Area matches the former City of North York: not sourced, so the page uses the City\'s label only.',
      'Rink, arena, park or sponsor names from the Public Name and Asset Name columns: left out, since some carry the names of people or companies.',
      'A count of rinks across the whole city or a total ice area: not printed; every figure is for North York rows only.',
      'Any comparison with NHL or international rink sizes: the files carry such labels elsewhere, but none applies to a North York row, so none is drawn.',
      'The live rink status feed: not used, since it changes through the day.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of North York schools, school boards or private people: not used.',
      'Any affiliation with the City of Toronto, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
