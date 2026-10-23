'use strict';
// Cambridge, Ontario (cg- city page, Canada cluster Wave 2, row 157). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: Ontario Grade 7 coding (a defined
// count and subprograms), a kilometres-of-bikeway project on the City of Cambridge Bikeway Network layer written as a
// function called once per type, and CEMC's Team Up Challenge (Grades 6 to 8) and CS Circles. Cambridge is in the
// Kitchener - Cambridge - Waterloo CMA; "Ontario" sits in the title and capsule because UK Cambridge pages exist.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g7-strands.txt
// (Ontario DCP content API; stray spaces before commas dropped) and facts-schools-contests.md:
//  - Grade 7 C3.1 "including code that involves events influenced by a defined count and/or subprogram and other control
//    structures"; notes "Sub-programs are used to assemble a complex program by writing portions of the code that can be
//    modularized.", "Sub-programs can be reused for multiple programs or can be called upon more than once from one main
//    program.", "One way to introduce the idea of a sub-program is to use a defined count.", "A defined count is used to
//    repeat an instruction either for a predefined number of times (e.g., 10 repeats) or until a condition has been met
//    (e.g., Number <= 100)."; the rectangle-area sub-program example.
//  - PPM 128: Grades 7 to 12 devices "stored out of view and powered off or set to silent mode during instructional time".
//  - CEMC Team Up Challenge: "an engaging and collaborative mathematics resource designed for students in Grades 6 to 8";
//    "grouping four students to work collaboratively to solve challenging math problems"; "Tuesday, June 1, 2027 or later".
//    CS Circles: site title "Computer Science Circles", "[Python Programming Tutorials]", "Computer Science Circles website
//    will remember which exercises you complete." CEMC: "all students must participate through their school."
//  - Place facts (Cambridge's own, 8+): Cambridge is in the Kitchener - Cambridge - Waterloo CMA (facts-geo.md; no
//    population printed); area codes 519 with 226, 548 and 382 (facts-geo.md section 4); City of Cambridge open data page:
//    "The City of Cambridge uses open data to improve citizen engagement and enhance the transparency and accountability of
//    our local government."; Bikeway Network layer (owner cambridge.ca), 1,541 features, spatial reference wkid 26917 (UTM
//    zone 17N, metres), field SHAPE.LEN; item modified 14 June 2026 (our conversion); all 1,541 pieces STATUS IN SERVICE;
//    Open Data Licence Version 2.0, "based on version 2.0 of the Open Government Licence - Canada", "including for
//    commercial purposes"; attribution "Contains information licensed under the Open Government Licence - City of
//    Cambridge." (en dashes in source); item access note "The City of Cambridge, ON assumes no legal responsibility for
//    works derived from this dataset."; Eastern time, UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA 2026e).
// Our own calculations (bikeway_lengths.py and page_script.py, python -I; outputs bikeway_lengths.out.txt,
// page_script.out.txt, extra.out.txt in ca/src-pilots/coding-classes-for-kids-in-cambridge-ontario/): kilometres by TYPE
// (sums of SHAPE.LEN, rounded): BIKE LANE 62.88, SIGNED ROUTE 43.51, MULTI-USE SECONDARY 39.27, PAVED SHOULDER 35.37,
// MULTI-USE PRIMARY 33.92, WIDE SHARED LANE 15.93, PARK 10.74; ASSET_TYPE BIKE_ON_ROAD 157.93 km, TRAIL 89.07 km; all pieces
// 247.0 km (our sum of raw lengths, not a City figure; rounded parts do not add exactly); pieces per type SIGNED ROUTE 323,
// BIKE LANE 266, MULTI-USE SECONDARY 343, MULTI-USE PRIMARY 164; shortest piece 0.03 m, longest 2,050.9 m, 71 pieces under
// 10 m; surface ASPHALT 1,253 pieces, GRANULAR 171, none recorded 47, WOOD PLANK 28. India time conversions ours.
// Lesson family: a function (sub-program) called once per category, summing decimals, metres to kilometres, rounding.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'with open("bikeway-network.json", encoding="utf-8") as f:',
  '    pieces = [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'def km_of(kind):',
  '    metres = 0',
  '    for piece in pieces:',
  '        if piece["TYPE"] == kind:',
  '            metres += piece["SHAPE.LEN"]',
  '    return round(metres / 1000, 1)',
  '',
  'for kind in ["BIKE LANE", "SIGNED ROUTE", "MULTI-USE SECONDARY", "MULTI-USE PRIMARY"]:',
  '    print(kind, km_of(kind), "km")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'CAMBRIDGE ON', label: 'Cambridge, Ontario', blurb: 'Coding for Cambridge, Ontario children aged 6 to 12: Grade 7 sub-programs, a bikeway kilometres project on City data, and the CEMC Team Up Challenge.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-cambridge-ontario',
  code: 'kco',
  accent: '#33702C',
  accentRationale: 'Cambridge, Ontario kids page: a moss green, #33702C, allocated to this row by the Canada group so it keeps 6 RGB units from every site accent and 14 from other Canada accents; contrast 5.67 on the paper #FBF8F2, 5.33 on #F5F1E8 and 4.88 on #EDE7DA, all above 4.5',
  pageType: 'city',
  place: {
    name: 'Cambridge',
    eyebrow: 'Cambridge, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-canada', name: 'Canada' },
    { slug: 'coding-classes-in-ontario', name: 'Ontario' }
  ],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cambridge, Ontario',
  title: 'Coding Classes for Kids in Cambridge, Ontario | Ages 6 to 12',
  description: 'Live online coding for kids aged 6 to 12 in Cambridge, Ontario: Grade 7 sub-programs explained, a City of Cambridge bikeway data project, and a free class.',
  ogDescription: 'Ontario Grade 7 brings sub-programs into math. See what Cambridge, Ontario children are asked to code, a bikeway project on City of Cambridge data, and our live classes.',
  twitterDescription: 'Live coding for children aged 6 to 12 in Cambridge, Ontario, from first blocks to Python functions.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Cambridge, Ontario Children Aged 6 to 12',
    description: 'Live online coding for children in Cambridge, Ontario from Grade 1 to Grade 7: Scratch and Minecraft coding, logic puzzles, then Python functions on a City of Cambridge data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Cambridge, Ontario',
  capsuleQ: 'Where can a child in Cambridge, Ontario, aged 6 to 12, learn to code live?',
  capsule: 'Online, with Modern Age Coders. Kids from 6 to 12 in Cambridge, Ontario code in real time with a teacher who sees their screen, privately or as part of a fifteen-to-twenty group. Scratch Coding for Kids and Minecraft Coding for Kids are common first courses; from about 9, Python and AI for Kids. The first class is free.',
  lead: 'Grade 7 is where Ontario math introduces the sub-program: a named piece of code you write once and use many times. Programmers call it a function, and it is the single biggest step between a child who can code and a child who can build. Cambridge sits in the same census metropolitan area as Waterloo, home of the university whose CEMC writes many of Canada&rsquo;s school contests, so local families often already know the contest names. What children usually lack is time to practise the ideas properly. Below are the Grade 7 coding expectations in the ministry&rsquo;s words, a project that measures the City of Cambridge&rsquo;s bikeway network with a function, two free CEMC options, and how our live classes fit a Cambridge family&rsquo;s week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Cambridge, Ontario.',

  picks: {
    eyebrow: 'Courses for Cambridge children',
    h2: 'Four starting courses for Cambridge, Ontario children',
    intro: 'Each suits a different age and kind of child. One free class shows which.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Scratch games built from custom blocks, Scratch&rsquo;s own version of a sub-program, so the Grade 7 idea arrives years early in friendly form.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 7 to 12', note: 'Programs that build inside Minecraft, where one well-named routine can raise a whole wall, a natural lesson in writing code once and reusing it.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with functions, games and real data such as the Cambridge bikeway file, for children ready to write their own lines.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic, patterns and careful reasoning, the habits that matter in CEMC problems and in any program longer than a few lines.' }
    ]
  },

  sections: [
    {
      id: 'grade7', tint: '', eyebrow: 'Grade 7 coding in Cambridge',
      h2: 'Sub-programs and a defined count: the Ontario Grade 7 coding a Cambridge child meets',
      intro: 'Cambridge public schools teach the Ontario curriculum. We copied the Grade 7 text from the ministry&rsquo;s online curriculum on 22 October 2026, and set our classroom approach beside each line.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 7, C3.1', req: 'Code &ldquo;that involves events influenced by a defined count and/or subprogram and other control structures&rdquo;.', ours: 'Two new ideas at once. We teach them one at a time: first a loop that runs a set number of times, then a named block of code the main program calls.' },
          { code: 'Grade 7, notes', req: 'A defined count repeats an instruction a set number of times, or, in the ministry&rsquo;s words, &ldquo;until a condition has been met&rdquo;.', ours: 'Children write both kinds and compare: repeat 10 times, and keep going until the total passes 100. Knowing which one a problem needs is half the work.' },
          { code: 'Grade 7, notes', req: '&ldquo;Sub-programs are used to assemble a complex program by writing portions of the code that can be modularized.&rdquo;', ours: 'We call them functions and give them good names. A program made of well-named functions reads almost like a list of instructions in English.' },
          { code: 'Grade 7, notes', req: 'The notes add that a sub-program can be reused across programs, or called more than once by the same main program.', ours: 'Our bikeway project calls the same function four times with four different inputs. Children see straight away why writing it once beats writing it four times.' }
        ] },
        { kind: 'p', text: 'The ministry&rsquo;s own example of a sub-program is one that finds the area of a rectangle and is then reused to work out surface area and volume. That is the shape of every good function: a small job, done well, used often. The notes also suggest that &ldquo;One way to introduce the idea of a sub-program is to use a defined count&rdquo;, which is the order we follow. Grade 7 is also where Ontario&rsquo;s cellphone memo, PPM 128, moves from the whole-day rule for younger children to a class-time rule: for Grades 7 to 12 it says devices are &ldquo;stored out of view and powered off or set to silent mode during instructional time&rdquo;. Our classes run at home on a computer, after school. The <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding guide for Grades 1 to 8</a> has the full ladder.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For ages 6 to 12', p: 'Most children on this page are younger than Grade 7. We teach the idea early through Scratch custom blocks, so by Grade 7 a sub-program feels familiar rather than new.' },
          { h3: 'Efficiency carries on', p: 'Grade 7 keeps the Grade 6 focus on efficient code. A function is often the most efficient choice, because a fix in one place fixes every call.' },
          { h3: 'Counting to a condition', p: 'A loop that runs until a condition is met is the start of real problem solving: keep doubling until the answer passes 1,000, and how many steps did it take?' }
        ] },
        { kind: 'callout', h3: 'What we are, and are not', p: 'Modern Age Coders teaches live online classes beside school. We give no report-card marks and have no connection with the Ontario Ministry of Education, EQAO, any Waterloo Region school board or the City of Cambridge.' }
      ]
    },
    {
      id: 'bikeways', tint: 'deep', eyebrow: 'Cambridge data project',
      h2: 'How many kilometres of bike lane does Cambridge have? Measuring the City&rsquo;s bikeway layer with a function',
      intro: 'The City of Cambridge publishes its Bikeway Network as open data: every piece of bike lane, signed route and trail, with its type and its length in metres. Our older kids write one function that adds up the length of any type, then call it for each type. The kilometres in this section are our arithmetic on the copy of the layer we downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Bikeway Network, City of Cambridge: our sum of SHAPE.LEN by TYPE, in kilometres (rounded to two decimals; the seven largest types shown)', head: ['Bikeway type in the file', 'Kilometres (our sum)', 'Pieces in the file'], rows: [
          ['BIKE LANE', '62.88', '266'],
          ['SIGNED ROUTE', '43.51', '323'],
          ['MULTI-USE SECONDARY', '39.27', '343'],
          ['PAVED SHOULDER', '35.37', '63'],
          ['MULTI-USE PRIMARY', '33.92', '164'],
          ['WIDE SHARED LANE', '15.93', '126'],
          ['PARK', '10.74', '145']
        ] },
        { kind: 'p', text: 'The layer holds 1,541 pieces, every one marked IN SERVICE. Its map projection measures in metres, so SHAPE.LEN is a length in metres and dividing by 1,000 gives kilometres. Added together, all the pieces come to about 247.0 km by our sum; that is our figure from the raw lengths, not a City total, and the rounded rows above will not add up to it exactly. Here is the program a 12-year-old writes, with the Grade 7 sub-program in the middle:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Write it once', p: 'km_of takes a type name, walks through the pieces, adds the lengths that match and returns kilometres. The four calls at the bottom reuse it, exactly as the Grade 7 notes describe.' },
          { h3: 'A trade-off to discuss', p: 'Each call walks the whole list again, four walks for four types. For 1,541 pieces that is instant. Children who did the Grade 6 efficiency work can say how to make it one walk, and when that would matter.' },
          { h3: 'Rounding at the end', p: 'The function rounds only after adding. Rounding each piece first would throw away a little every time, and 1,541 small losses add up. Bike lane comes out as 62.9 km either way here, but the habit matters.' }
        ] },
        { kind: 'callout', h3: 'A row is a piece, not a path', p: 'Why 266 pieces of bike lane? A lane is split wherever something changes, at a junction, a surface or a road segment. Our check found the shortest piece is 0.03 metres long, and 71 pieces are under 10 metres; the longest is about 2,051 metres. Counting rows tells you how the City stores the map, not how many routes a child could ride. Measuring length is the honest way to compare types.' },
        { kind: 'p', text: 'Two more questions a class can ask of the same file. Grouped by asset type, on-road bikeways come to about 157.9 km and trails to about 89.1 km in our sums. By surface, 1,253 pieces are asphalt, 171 granular and 28 wood plank, the boardwalk sort, while 47 have no surface recorded. We leave out street and trail names in class. The City says it &ldquo;uses open data to improve citizen engagement and enhance the transparency and accountability of our local government.&rdquo; Contains information licensed under the Open Government Licence - City of Cambridge (<a class="cg-inline-link" href="https://maps.cambridge.ca/images/opendata/Open%20data%20licence.pdf">licence</a>). The City of Cambridge assumes no responsibility for this page or our calculations.' }
      ]
    },
    {
      id: 'teamup', tint: 'tint', eyebrow: 'Free from Waterloo',
      h2: 'CEMC&rsquo;s Team Up Challenge and CS Circles: two free options for Cambridge children',
      intro: 'CEMC, at the University of Waterloo in the same census metropolitan area as Cambridge, offers more than contests. Two of its free resources suit children at the top of our age range. Details are taken from CEMC&rsquo;s pages on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Two CEMC resources, as described by CEMC (University of Waterloo)', head: ['Resource', 'CEMC&rsquo;s description', 'Timing or access'], rows: [
          ['Team Up Challenge', 'A collaborative mathematics resource for Grades 6 to 8, grouping four students to solve challenging math problems together', 'Tuesday 1 June 2027 or later, run by educators in class'],
          ['CS Circles (Computer Science Circles)', 'Python programming tutorials in the browser', 'The site remembers which exercises a learner completes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Math as a team', p: 'Team Up puts four students on one problem set. It is a resource educators run in class, so the route for a Cambridge child in Grade 6 is a teacher who chooses to use it.' },
          { h3: 'Python at your own pace', p: 'CS Circles teaches Python in short lessons with exercises checked in the browser. We point older children there for extra practice between our classes.' },
          { h3: 'Contests via the classroom', p: 'CEMC contests are ordered by schools, never by families, so a Cambridge child who wants to write one needs a teacher to sign the class up. Raise it early in the school year.' }
        ] },
        { kind: 'p', text: 'We never copy CEMC problems into our lessons. We write our own, label them ours, and send families to CEMC for the originals. One of ours, written for a Grade 6 or 7 child: write a function that takes a length in metres and returns it in kilometres rounded to one decimal; call it on 62,882 and on 9,999; why does the second answer look odd? (It rounds to 10.0.) Older teens in the region may later want the Python and AI classes we run for Waterloo-area teenagers. The <a class="cg-inline-link" href="/cemc-free-resources-guide">free CEMC resources guide</a> lists everything else CEMC offers at no cost, and we are not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'cambridgetime', tint: '', eyebrow: 'Class times',
      h2: 'Cambridge after school, Saturday late mornings, and India time',
      intro: 'Two of the slots we offer most, converted to India time. Cambridge falls back on 1 November 2026 and springs ahead on 14 March 2027; India does neither. Offsets come from the IANA tz database (2026e) and the sums are ours.',
      body: [
        { kind: 'table', caption: 'Two Cambridge slots in India time, 2026 to 2027', head: ['Cambridge slot', 'In India while Eastern is UTC-4', 'In India while Eastern is UTC-5 (1 November 2026 to 14 March 2027)'], rows: [
          ['4:15 pm, Monday to Friday', '1:45 am the next day', '2:45 am the next day'],
          ['11:00 am, Saturday', '8:30 pm', '9:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eastern on every invite', p: 'Cambridge families get every class time in Eastern, and a reminder before each clock change so the first class after it starts on time.' },
          { h3: 'Pace for each age', p: 'Our six-year-olds have short, lively sessions with movement built in. Eleven- and twelve-year-olds usually want a full hour to finish what they start.' },
          { h3: 'Local numbers', p: 'Cambridge phones use 519, with 226, 548 and 382 in the same area. The form already carries the +1, so key in the ten digits.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks at 6 to Python functions at 12',
    intro: 'Ages are a guide; the free class places a child by skill, not age.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Steps and repeats', p: 'Block programs, repeat blocks and stories, with a spoken guess before each run.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 and 9', h3: 'Custom blocks', p: 'Scratch custom blocks and Minecraft routines, the friendly first version of a sub-program.', courses: ['minecraft-coding-for-kids-course', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 and 11', h3: 'Python functions', p: 'def, parameters and return values, used on puzzles and on the Cambridge bikeway file.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Programs from parts', p: 'Bigger projects built from several functions, plus a teacher-led look at how AI systems work.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Is coding still worth it for a Cambridge child in the age of AI?',
    intro: 'Yes, because breaking a big job into small named parts is what people do and machines still need.',
    p1: 'The bikeway project is a small example. Deciding that the job needs one function called four times, that rounding belongs at the end, and that rows are not routes: none of that is typing. An AI tool can produce code, but a child who has designed functions knows whether the code it produced is organised sensibly, and can fix it when it is not.',
    p2: 'Children under 13 in our classes do not work with adult chatbots. A teacher shows them, with games and sorting activities, how a model picks up patterns from examples and where that goes wrong. Most of the time they work things out themselves: plan, write a small part, test it, then the next part.',
    closer: 'Grade 7 math in Ontario treats splitting a solution into named parts as something every child should learn, and a child who can do that can read, judge and repair what an AI hands back.',
    blogAnchor: 'why kids should keep learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for families across Cambridge, Ontario',
    intro: 'Children in Galt, Preston or Hespeler join the same live class from home, so there is no driving between them after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or private', p: 'Share a teacher with fifteen to twenty children at the same level, or have lessons alone, which helps a child who needs to go slower or faster.' },
      { h3: 'Same stage, same class', p: 'We group by age and level so explanations land. A child moves up when their work shows readiness, whatever the date.' },
      { h3: 'Parents in the room', p: 'You are welcome to watch, particularly with younger children. The teacher reports on progress after each stage.' },
      { h3: 'Equipment', p: 'A laptop or desktop, keyboard and mouse, working sound and a reliable connection. A tablet is not a good fit for typed code.' },
      { h3: 'First class free', p: 'A real lesson with a teacher, ending with a suggested course and level for your child. No payment details are taken.' }
    ],
    spec: { title: 'No Cambridge centre', p: 'Modern Age Coders has no premises in Cambridge or anywhere in Waterloo Region, and claims none. Every class is live online, taught from India by the teachers who also teach children in other countries.' }
  },

  fees: {
    h2: 'Fees for kids&rsquo; coding classes in Cambridge, Ontario',
    intro: 'Three options; each fee has its currency printed alongside.',
    first: 'A full live lesson without charge, after which we suggest a course, a level and a time.',
    group: 'The monthly fee for a place among fifteen to twenty children learning at the same stage.',
    private: 'The monthly fee for lessons with one teacher and your child, timed around your week.',
    closer: 'A Cambridge family pays exactly what a family in Halifax or Calgary pays. You decide after the free lesson whether to carry on, and only then is a course and weekly slot booked and billed; the pricing page covers holidays.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free class for your Cambridge child',
    intro: 'Let us know the age and interests. A six-year-old might begin with a repeating animation, a nine-year-old with a Minecraft routine, and a twelve-year-old with the bikeway layer.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Cambridge, Ontario.'
  },

  faq: {
    h2: 'Questions from Cambridge, Ontario families',
    intro: 'What parents in Cambridge ask us most.',
    items: [
      { q: 'Are there coding classes for kids in Cambridge, Ontario?', a: 'Yes, live online. We have no Cambridge premises; children learn from home with a teacher, one to one or in a group of fifteen to twenty.' },
      { q: 'Is this Cambridge in Ontario or in England?', a: 'This page is for Cambridge, Ontario, in the Kitchener, Cambridge and Waterloo area. Everything here follows the Ontario curriculum and Eastern time.' },
      { q: 'What is a sub-program in Grade 7 math?', a: 'It is a named piece of code that the main program can call, often more than once. Programmers call it a function. Ontario adds it to the Grade 7 coding expectations.' },
      { q: 'Can a younger child learn functions?', a: 'In a simple form, yes. Scratch custom blocks let children of 8 or 9 make their own named blocks, which is the same idea in a friendlier shape.' },
      { q: 'What age can my child start?', a: 'Six is a good starting age, around Grade 1. Our kids classes go up to 12, and teenagers move on to separate courses.' },
      { q: 'When do classes run for Cambridge families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Eastern time.' },
      { q: 'Is there free CEMC material my child can use?', a: 'Yes. CEMC\'s CS Circles teaches Python in the browser, and its Team Up Challenge is a classroom math resource for Grades 6 to 8 that teachers can run.' },
      { q: 'Will my child use ChatGPT?', a: 'No. Children under 13 do not use adult chatbots in our classes, and OpenAI needs a parent\'s permission for any user under 18. We teach how AI works through teacher-led activities.' },
      { q: 'Does my child need to type?', a: 'Not at first. Younger children use blocks, and typing comes with Python around age 9 or 10.' },
      { q: 'How do I see the fees?', a: 'The fees section on this page lists a free first class and two monthly options, group and private, each with the currency shown. You pay nothing before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for Cambridge, Ontario families',
    html: 'The province-wide picture is on <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and the national one on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. If your child enjoys CEMC material, the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and the <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss contest page</a> cover the next steps, and families who teach at home can see <a class="cg-inline-link" href="/homeschool-coding-and-math-ontario">homeschool coding and math in Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cambridge and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/cemc-free-resources-guide', label: 'Free CEMC resources' },
    { href: '/gauss-contest-preparation', label: 'Gauss contest' }
  ],

  personalityCss: `
.cg-root.cg-kco .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.5rem); }
.cg-root.cg-kco .cg-hero h1 { font-weight: 710; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-kco .cg-capsule { border-top: 1px solid var(--cg-accent); border-left: 4px solid var(--cg-accent); padding: 0.75rem 0.9rem; }
.cg-root.cg-kco .cg-eyebrow { letter-spacing: 0.11em; font-weight: 630; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-kco .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-kco .cg-align-code { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-kco .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kco #bikeways code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.52; padding: 0.95rem 1rem; border-top: 4px solid var(--cg-accent); }
.cg-root.cg-kco .cg-ladder-col { border-left: 2px solid var(--cg-accent); border-top: 2px solid var(--cg-accent); padding: 0.6rem 0 0 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 7 C3.1 (a defined count and/or subprogram), and the Grade 7 notes on sub-programs (modular code, reuse, introduction through a defined count, the rectangle-area example) and on defined counts (a predefined number of times or until a condition). PPM 128 Grades 7 to 12 rule. CEMC Team Up Challenge (Grades 6 to 8, groups of four, 1 June 2027 or later) and CS Circles (Python tutorials, progress remembered). Kitchener - Cambridge - Waterloo CMA membership and area codes from facts-geo.md; Eastern offsets from IANA tzdb 2026e.',
    localProject: 'City of Cambridge Open Data, Bikeway Network (Open Data Licence Version 2.0, based on OGL - Canada 2.0, commercial use allowed), downloaded as JSON with curl on 22 October 2026 and measured with our scripts bikeway_lengths.py and page_script.py (python -I): 1,541 pieces, all in service, lengths in metres (UTM 17N); bike lane 62.88 km, signed route 43.51, multi-use secondary 39.27, paved shoulder 35.37, multi-use primary 33.92; on-road 157.93 km and trail 89.07 km; about 247.0 km in all by our sum of raw lengths (not a City figure); shortest piece 0.03 m, 71 under 10 m. Labelled as ours. Lesson family: a function called once per category, summing decimals, metres to kilometres, rounding at the end.',
    requiredMentions: [
      'Sub-programs are used to assemble a complex program',
      'Children write both kinds and compare',
      'One way to introduce the idea of a sub-program is to use a defined count',
      'all the pieces come to about 247.0 km by our sum',
      'the shortest piece is 0.03 metres long',
      'Why 266 pieces of bike lane?',
      'km_of takes a type name',
      'grouping four students to solve challenging math problems',
      'Is this Cambridge in Ontario or in England?',
      'why does the second answer look odd'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 7 math strands, C3 coding expectations and sub-program notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_7___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Ontario PPM 128: Grades 7 to 12 devices during instructional time.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'CEMC contests overview: Team Up Challenge description and 2027 timing.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC Computer Science Circles: Python tutorials.', url: 'https://cscircles.cemc.uwaterloo.ca/' },
      { claim: 'City of Cambridge Bikeway Network layer query (1,541 features, SHAPE.LEN, TYPE, ASSET_TYPE).', url: 'https://maps.cambridge.ca/arcgispub03/rest/services/OpenData3/MapServer/2/query?where=1%3D1&outFields=*&returnGeometry=false&f=json' },
      { claim: 'City of Cambridge Open Data Licence Version 2.0 (commercial use, attribution).', url: 'https://maps.cambridge.ca/images/opendata/Open%20data%20licence.pdf' },
      { claim: 'City of Cambridge open data page (purpose statement).', url: 'https://www.cambridge.ca/mayor-city-council-government/open-data/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Cambridge population figure: StatCan was not reachable live, so none is printed.',
      'A City total for bikeway length: none was published in the layer; the 247.0 km figure is labelled as our own sum.',
      'Street, trail and route names and the ownership column: left out (names can honour people; ownership values name school boards).',
      'Play Structures, Splash Pads and Parks layers: their service answered "Could not find service" on 22 October 2026, so they were not used.',
      'That any route is safe or suitable for children to ride: not claimed; the file has no safety information and none is implied.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Cambridge schools, school boards or private people: not used.',
      'Any affiliation with the City of Cambridge, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
