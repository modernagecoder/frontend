'use strict';
// Oshawa and Whitby (cg- city page, Canada cluster Wave 2, row 154). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: Ontario Grade 6 coding (efficient
// code, C3.2 efficiency, flow charts) and Grade 6 Science A2.1, a park-size project on the Town of Whitby Parks file that
// is efficient by design (one pass, a dictionary of lists, a set for repeats; mean against median), and the CEMC Gauss
// contest as the next step for Grade 6 children. Whitby data only: the Oshawa licence PDF could not be reached.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g6-strands.txt
// and api-scitech-g6-strands.txt (Ontario DCP content API; stray spaces before commas dropped) and facts-schools-contests.md:
//  - Grade 6 C3.1 "by writing and executing efficient code"; C3.2 "describe how changes to the code affect the outcomes and
//    the efficiency of the code"; notes "Efficient code may involve using the instructions to solve a problem, using the
//    smallest amount of space to store program data, and/or executing as fast as possible.", "A flow chart can be used to plan
//    and organize thinking.", "Efficient code can be altered more easily than inefficient code to adapt to new mathematical
//    situations.", and the probability example "the number of trials can be increased by changing the number of repeats
//    rather than writing additional lines of code for each of the new trials."; Science and Technology (2022) Grade 6 A2.1
//    "with a focus on obtaining input in different ways for a variety of purposes".
//  - EQAO Grade 6 window "May 4 - June 8, 2027" (en dash in source).
//  - CEMC Gauss: "Students in Grades 7 and 8." / "Motivated students in lower grades are welcome to write the contest.";
//    "Monday, May 10, 2027 to Friday, May 21, 2027"; ordering deadline "Thursday, April 22, 2027"; "25 multiple-choice
//    questions."; "Time allowed for completion is 60 minutes."; "all students must participate through their school."
//  - Place facts (Oshawa and Whitby's own, 8+): Oshawa, Whitby and Clarington are in the Oshawa CMA (facts-geo.md; no
//    population printed); area codes 289, 365, 742, 905; Town of Whitby Parks layer (owner WhitbyGIS) item text: "A point
//    feature layer of parks within Town of Whitby.", "Classifications included: LOCAL, TOWN PARK, DISTRICT, PARKETTE,
//    WATERFRONT", "Classifications not included: OPENSPACE, FACILITY, FEATURE DISPLAY, STORM WATER POND, CEMETERY",
//    "Updated December 2025."; metadata PDF "Annually. Last updated October 2024." and AREA1_HECT "Area of park in hectares";
//    Open Government Licence - The Corporation of the Town of Whitby: "including for commercial purposes", attribution
//    "Contains information licensed under the Open Government Licence - The Corporation of the Town of Whitby." (en dash in
//    source); Oshawa licence PDF: connect failed, one attempt (FAILED-oshawa-licence.txt); Eastern time, UTC-5 from 1 November
//    2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e). No park names printed.
// Our own calculations (park_class_sizes.py and page_script.py, python -I; outputs park_class_sizes.out.txt,
// page_script.out.txt, extra.out.txt in ca/src-pilots/coding-classes-for-kids-in-oshawa-and-whitby/): 128 rows, 127 parks
// after removing one repeated ID (PK67-01, two identical DISTRICT rows); one ID with a stray leading space; by CLASS: LOCAL 55
// (mean 1.78 ha, median 1.65), PARKETTE 33 (0.39, 0.39), DISTRICT 21 (5.65, 4.70), WATERFRONT (TOWN) 11 (6.20, 3.52), TOWN
// PARK 3 (10.95, 2.14; sizes 0.06, 2.14, 30.66), OFFLEASH 2, FACILITY 1, LEASED TOWN LANDS 1; 48 parks under 1 hectare;
// Playspace listed at 90 of 127 parks, Splashpad 18; 25 parks list no amenity. India time conversions ours.
// Lesson family: one pass with a dictionary of lists instead of one pass per group, a set to drop repeats, mean against
// median with an outlier.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv, statistics',
  '',
  'sizes = {}',
  'seen = set()',
  'with open("whitby-parks.csv", encoding="utf-8-sig") as f:',
  '    for park in csv.DictReader(f):',
  '        pid = park["FACILITYID"].strip()',
  '        if pid in seen:',
  '            continue',
  '        seen.add(pid)',
  '        sizes.setdefault(park["CLASS"], []).append(float(park["AREA1_HECT"]))',
  '',
  'for kind, ha in sizes.items():',
  '    print(kind, len(ha), round(statistics.mean(ha), 2), round(statistics.median(ha), 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'OSHAWA AND WHITBY', label: 'Oshawa and Whitby', blurb: 'Coding for Oshawa and Whitby children aged 6 to 12: Grade 6 efficient code, a Town of Whitby park-size project, and the road to the Gauss contest.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-oshawa-and-whitby',
  code: 'kow',
  accent: '#5C3439',
  accentRationale: 'Oshawa and Whitby kids page: a muted mulberry brown, #5C3439, allocated to this row by the Canada group so it sits at least 6 RGB units from every site accent and 14 from other Canada accents; contrast 9.88 on the paper #FBF8F2, 9.29 on #F5F1E8 and 8.50 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Oshawa and Whitby',
    eyebrow: 'Oshawa and Whitby, Durham Region, Ontario',
    schemaType: 'Place',
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
  routeLabel: 'Oshawa and Whitby',
  title: 'Coding Classes for Kids in Oshawa and Whitby | Ages 6 to 12',
  description: 'Coding classes for Oshawa and Whitby kids aged 6 to 12, live online: Ontario Grade 6 efficient code, a Whitby park-size data project, and a free first lesson.',
  ogDescription: 'Ontario Grade 6 asks for efficient code. See what that means for Oshawa and Whitby children, a park-size project on Town of Whitby open data, and our live classes.',
  twitterDescription: 'Live coding for Oshawa and Whitby children aged 6 to 12, from first blocks to efficient Python.',
  ogImageCourse: 'roblox-game-coding-for-kids-lua-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Oshawa and Whitby Children Aged 6 to 12',
    description: 'Live online coding for Oshawa and Whitby children from Grade 1 to Grade 7: block coding, Roblox and C++ for confident starters, then efficient Python on a Town of Whitby data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Oshawa and Whitby',
  capsuleQ: 'Can a child in Oshawa or Whitby, aged 6 to 12, join a live coding class?',
  capsule: 'Yes. Modern Age Coders runs live online coding for children aged 6 to 12 in Oshawa and Whitby, privately or in a group of fifteen to twenty. Coding for Kids and Roblox Game Coding suit younger starters; Python and AI for Kids or C++ for Kids suit children from about 9. A teacher leads each lesson, and the first is free.',
  lead: 'Ontario adds one word to the Grade 6 coding expectation: efficient. A Grade 6 child in Oshawa or Whitby is no longer asked only to make a program work, but to make it work without wasted steps. That is a grown-up idea, the same one professional programmers argue about, and it is easier to understand with a real file than with a worksheet. This page sets out the Grade 6 expectations in the ministry&rsquo;s words, a park-size project on the Town of Whitby&rsquo;s open data that is efficient by design, the Gauss contest that Grade 7 brings, and how live online classes fit a Durham family&rsquo;s evenings and weekends.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Oshawa or Whitby.',

  picks: {
    eyebrow: 'Courses for Oshawa and Whitby children',
    h2: 'Four starting courses for Oshawa and Whitby children',
    intro: 'Choose by age and interest; the free class tells us where your child fits.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'The broad first course: block coding, Scratch games, a simple app and a look at AI, in groups sorted by age.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Ages 8 to 12', note: 'Real scripts that make Roblox games behave, for children who already play and want to build, with plans drawn on paper before any code.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python, from turtle art to small data projects such as the Whitby parks file, with the Grade 6 focus on doing it efficiently.' },
      { course: 'cpp-programming-for-kids-course', band: 'Ages 9 to 12', note: 'First real C++ for children who enjoy precision and puzzles, a strong base for later contest work such as the CCC.' }
    ]
  },

  sections: [
    {
      id: 'grade6', tint: '', eyebrow: 'Grade 6 coding in Oshawa and Whitby',
      h2: 'Efficient code: the Ontario Grade 6 coding a child in Oshawa or Whitby meets',
      intro: 'Schools in Oshawa and Whitby teach the Ontario curriculum. The Grade 6 math and science wording below was downloaded from the ministry&rsquo;s curriculum service on 22 October 2026. The ministry&rsquo;s words are quoted on the left, and our classroom version sits on the right.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 6, C3.1', req: 'Children solve problems &ldquo;by writing and executing efficient code&rdquo;, with conditions and other control structures.', ours: 'We ask two questions of every program: does it work, and could it do the same job with less? Children enjoy finding the line nobody needed.' },
          { code: 'Grade 6, C3.2', req: 'Children &ldquo;describe how changes to the code affect the outcomes and the efficiency of the code&rdquo;.', ours: 'We time programs. A version that reads a file once and a version that reads it eight times give the same answer, but one is clearly slower on a big file.' },
          { code: 'Grade 6, notes', req: '&ldquo;Efficient code may involve using the instructions to solve a problem, using the smallest amount of space to store program data, and/or executing as fast as possible.&rdquo;', ours: 'Space and speed are both on the list. Our Whitby project uses a set to remember IDs it has seen, a classic speed trick children can explain in one sentence.' },
          { code: 'Grade 6, notes', req: '&ldquo;A flow chart can be used to plan and organize thinking.&rdquo;', ours: 'Before typing, children draw boxes for steps and diamonds for decisions. A flow chart that fits on a page usually means a program that fits in their head.' }
        ] },
        { kind: 'p', text: 'The notes make a point we repeat often: &ldquo;Efficient code can be altered more easily than inefficient code to adapt to new mathematical situations.&rdquo; Their example is a probability simulation, where the number of trials goes up &ldquo;by changing the number of repeats rather than writing additional lines of code for each of the new trials&rdquo;. In our class that becomes a coin-flip program: one loop flips 10 coins, and changing one number makes it flip 10,000. Grade 6 science adds its own coding expectation, to write and run code &ldquo;with a focus on obtaining input in different ways for a variety of purposes&rdquo;, so our Grade 6 students also read input from the keyboard and from a file. More on the year is on <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Ontario Grade 6 math and coding help</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The EQAO year', p: 'Grade 6 children write EQAO Reading, Writing and Mathematics in the window EQAO lists for 4 May to 8 June 2027. We teach coding, not test drills, though the reasoning carries over.' },
          { h3: 'Two subjects, one skill', p: 'Coding sits in both Grade 6 math and Grade 6 science in Ontario. Children who code comfortably meet it twice in the same year without it feeling new.' },
          { h3: 'Ready for text', p: 'By Grade 6 most children can type well enough for Python. We still let block lovers stay in blocks until they choose to switch.' }
        ] },
        { kind: 'callout', h3: 'What we are', p: 'Modern Age Coders teaches live online classes alongside school. It does not set school marks and has no link with the Ontario Ministry of Education, EQAO, any Durham school board, the City of Oshawa or the Town of Whitby.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Whitby data project',
      h2: 'How big is a typical Whitby park? An efficient program on the Town&rsquo;s parks file',
      intro: 'The Town of Whitby publishes a points file of its parks, with a class for each (LOCAL, PARKETTE, DISTRICT and so on) and an area in hectares. Oshawa publishes open data too, but its licence document would not load when we tried on 22 October 2026, so this project uses Whitby data only. Every figure below is our own calculation from the Whitby download of that day.',
      body: [
        { kind: 'table', caption: 'Whitby parks by CLASS, our calculation from the Town of Whitby Parks file (area column AREA1_HECT, which the metadata defines as area of park in hectares; one repeated ID counted once)', head: ['Class in the file', 'Parks', 'Mean area (ha)', 'Median area (ha)'], rows: [
          ['LOCAL', '55', '1.78', '1.65'],
          ['PARKETTE', '33', '0.39', '0.39'],
          ['DISTRICT', '21', '5.65', '4.70'],
          ['WATERFRONT (TOWN)', '11', '6.20', '3.52'],
          ['TOWN PARK', '3', '10.95', '2.14'],
          ['OFFLEASH', '2', '1.19', '1.19'],
          ['FACILITY', '1', '9.28', '9.28'],
          ['LEASED TOWN LANDS', '1', '14.39', '14.39']
        ] },
        { kind: 'p', text: 'The download has 128 rows but 127 parks: one ID appears twice with identical details, and another starts with a stray space, so the program strips spaces before comparing. 48 parks are under one hectare. The efficient part is the shape of the loop. A beginner might loop through the whole file once for each of the eight classes, eight passes. This program makes one pass, dropping each park into a list for its class as it goes, which is the Grade 6 idea of fewer wasted steps. A 12-year-old in our class writes:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A set for repeats', p: 'Checking whether an ID is in a set takes about the same time however many IDs it holds. Checking a long list means walking along it. For 128 rows either works; for a million, only one does.' },
          { h3: 'One mean that misleads', p: 'TOWN PARK has three parks: about 0.06, 2.14 and 30.66 hectares. Their mean is 10.95, larger than two of the three. The median, 2.14, describes the middle park far better.' },
          { h3: 'Typical is a choice', p: 'For PARKETTE the mean and median are both 0.39, because the sizes are even. Children learn to check both, and to say which one they used and why.' }
        ] },
        { kind: 'callout', h3: 'The file and its description disagree', p: 'The Town&rsquo;s description lists five classes as included and says FACILITY is not included. The file holds a FACILITY row anyway, plus OFFLEASH and LEASED TOWN LANDS rows, and spells waterfront as WATERFRONT (TOWN). The dataset page says it was updated in December 2025, while the attached metadata says it was last updated in October 2024. Neither is wrong on purpose; they were written at different times. We teach children to report what the file actually contains and to note the mismatch.' },
        { kind: 'p', text: 'There is a friendlier question in the AMENITIES column. Splitting it on commas, our count found Playspace listed at 90 of the 127 parks and Splashpad at 18, while 25 parks list no amenity at all. Park names are in the file, but several honour people, so in class we work with IDs and classes only. Contains information licensed under the Open Government Licence - The Corporation of the Town of Whitby. The Town does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'gauss', tint: 'tint', eyebrow: 'Next year&rsquo;s contest',
      h2: 'The Gauss contest: the math contest an Oshawa or Whitby Grade 6 child can aim for',
      intro: 'CEMC&rsquo;s Gauss Mathematics Contest is the math contest CEMC sets for the youngest grades, written in Grades 7 and 8. The rules below are copied from CEMC&rsquo;s Gauss page as it stood on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Gauss Mathematics Contest 2027, as published by CEMC at the University of Waterloo', head: ['What', 'CEMC says'], rows: [
          ['Who writes it', 'Students in Grades 7 and 8; motivated students in lower grades are welcome'],
          ['When', 'Monday 10 May to Friday 21 May 2027'],
          ['Ordering deadline for schools', 'Thursday 22 April 2027'],
          ['Format', '25 multiple-choice questions in 60 minutes'],
          ['How to enter', 'Through a school; all students participate through their school']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger writers allowed', p: 'Because CEMC welcomes motivated students below Grade 7, a keen Grade 6 child can sometimes write Gauss in May 2027 if the school agrees. Ask early in the spring.' },
          { h3: 'Why coders do well', p: 'Gauss questions reward careful counting, patterns and checking cases, the same habits efficient code needs. Neither requires memorised tricks.' },
          { h3: 'Practice without copying', p: 'CEMC keeps ten years of past contests free online. We send families there and teach with our own problems, labelled as ours, rather than reproducing CEMC papers.' }
        ] },
        { kind: 'p', text: 'One of our problems, for a Grade 6 child: a park is 1.65 hectares and a parkette is 0.39 hectares; how many parkettes, side by side, would cover about the same land as the park? Children estimate first, then check with a two-line program, then ask whether rounding up or down makes more sense. The <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss contest preparation page</a> goes further, and the <a class="cg-inline-link" href="/cemc-free-resources-guide">free CEMC resources guide</a> lists the practice material. We are independent of CEMC and the University of Waterloo.' }
      ]
    },
    {
      id: 'evenings', tint: '', eyebrow: 'Class times',
      h2: 'Durham evenings, Sunday mornings, and the clock in India',
      intro: 'Oshawa and Whitby keep Eastern time, back an hour on 1 November 2026 and forward on 14 March 2027. India does not change its clock. Our conversions use the offsets in the IANA time zone database, release 2026e.',
      body: [
        { kind: 'p', text: 'A 7:00 pm weekday class in Whitby is 4:30 am the next morning in India while Eastern time is UTC-4, which it is until 1 November 2026 and again from 14 March 2027. In the winter months between, at UTC-5, the same class is 5:30 am in India. A 9:00 am Sunday class is 6:30 pm in India in summer time and 7:30 pm in winter. Our teachers plan around those hours, which is why early-evening and weekend-morning slots are the easiest to offer.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Always in Eastern', p: 'Oshawa and Whitby families receive every class time in Eastern. The week before a clock change we confirm the next lesson again.' },
          { h3: 'Fits the age', p: 'Our youngest learners get short, lively sessions. Grade 6 children usually prefer a full hour, enough time to build and fix one program.' },
          { h3: 'Durham area codes', p: 'Oshawa and Whitby numbers start 905, 289, 365 or 742. The form adds the +1 for you; type the remaining ten digits.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks at 6 to efficient code at 12',
    intro: 'These are rough bands; the free class places your child by skill.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Blocks and stories', p: 'Short block programs, animated stories and games where the child predicts each step.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Games with rules', p: 'Roblox and Scratch games with scores, loops and decisions, planned on paper first.', courses: ['roblox-game-coding-for-kids-lua-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 and 11', h3: 'Typed code', p: 'Python or C++, lists, files and the Whitby parks project, with a first look at efficiency.', courses: ['python-ai-kids-masterclass', 'cpp-programming-for-kids-course'] },
      { band: 'Age 12', h3: 'Faster and cleaner', p: 'Sets, dictionaries, timing programs, and puzzle practice that points toward Gauss and later the CCC.', courses: ['cpp-programming-for-kids-course', 'problem-solving-and-computational-thinking-for-kids'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can code, why should an Oshawa or Whitby child learn?',
    intro: 'Because efficient, correct code still needs someone who understands it.',
    p1: 'An AI tool asked for the average size of a Whitby town park will happily report 10.95 hectares. A child who has seen the three numbers behind it knows that figure describes almost no real park, and knows to ask for the median. Spotting a misleading answer is a human job, and it starts with having done the work yourself.',
    p2: 'Our students under 13 are not given adult chatbots. They learn how AI systems are trained and why they make mistakes through activities their teacher leads, and they spend most of each class reasoning: planning with a flow chart, writing a step, testing it, and fixing what breaks.',
    closer: 'Ontario asks Grade 6 children to judge the efficiency of their own code, and judging work, not just producing it, is what keeps people useful next to AI.',
    blogAnchor: 'is learning to code still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes across Oshawa and Whitby',
    intro: 'Children north of Taunton Road and children near the lake join the same class from home, with no drive to a centre after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or one to one', p: 'A group of fifteen to twenty children working at one level, or a private teacher for a child who needs a gentler or a faster pace.' },
      { h3: 'Sorted by stage', p: 'We place children with others of a similar age and skill. Moving up happens when the work shows they are ready.' },
      { h3: 'Parents welcome', p: 'You can sit in, especially with younger children, and the teacher reports on progress at the end of each stage.' },
      { h3: 'What you need', p: 'A laptop or desktop, a keyboard and mouse, speakers or headphones, and a stable internet connection.' },
      { h3: 'Start with a free lesson', p: 'A genuine lesson, not a sales pitch, ending with our suggested course and level. No payment details at this stage.' }
    ],
    spec: { title: 'No Durham centre', p: 'Modern Age Coders has no classroom in Oshawa, Whitby or anywhere in Durham Region, and claims none. Lessons are live online, taught from India by the same teachers who teach children in other countries.' }
  },

  fees: {
    h2: 'Fees for kids&rsquo; coding classes in Oshawa and Whitby',
    intro: 'Three options; each fee shows its currency next to it.',
    first: 'A complete live lesson at no cost, after which we recommend a course, level and time.',
    group: 'The monthly fee for a seat in a group of fifteen to twenty children at a shared level.',
    private: 'The monthly fee for one-to-one lessons with a teacher, scheduled around your family.',
    closer: 'Oshawa and Whitby families pay the same as families elsewhere in Canada. The free lesson always comes first, and fees start only when you choose to continue; the pricing page explains breaks and missed classes.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free class for your Oshawa or Whitby child',
    intro: 'Tell us your child&rsquo;s age and what they like. A six-year-old might begin with a moving story, a nine-year-old with a Roblox obstacle, and a twelve-year-old with the Whitby parks file.',
    success: 'Thank you. The team will contact you soon about a class for your child in Oshawa or Whitby.'
  },

  faq: {
    h2: 'Oshawa and Whitby parents ask',
    intro: 'Common questions from families in Oshawa and Whitby.',
    items: [
      { q: 'Are there coding classes for kids in Oshawa and Whitby?', a: 'Yes, live online. We have no local premises, so children join from home with a teacher, either one to one or in a group of fifteen to twenty.' },
      { q: 'What is efficient code in Grade 6?', a: 'Ontario Grade 6 math asks children to write efficient code and to describe how changes affect a program\'s efficiency. In practice that means no wasted steps, sensible loops and good use of decisions.' },
      { q: 'Is coding part of Grade 6 science as well?', a: 'Yes. The 2022 Ontario science curriculum asks Grade 6 students to write and run code in investigations, with a focus on getting input in different ways.' },
      { q: 'At what age can my child start?', a: 'Six is a good age, roughly Grade 1. Our kids classes run to 12, and older children continue in our teen courses.' },
      { q: 'Is Roblox coding real coding?', a: 'Yes. Roblox games are scripted in Luau, a real programming language. Children write code that controls how a game behaves, and the skills carry over to other languages.' },
      { q: 'When are classes for Durham families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in Eastern time.' },
      { q: 'Can a Grade 6 child write the Gauss contest?', a: 'Gauss is for Grades 7 and 8, but CEMC says motivated students in lower grades are welcome. Entry is through a school, and CEMC lists 10 to 21 May 2027 for the contest.' },
      { q: 'Will my child use AI chatbots?', a: 'No. We do not give adult chatbots to children under 13, and OpenAI requires a parent\'s permission for anyone under 18 to use ChatGPT. Children learn about AI through teacher-led activities.' },
      { q: 'Why does the data project use only Whitby?', a: 'The Town of Whitby publishes its parks file under an open government licence. We could not load Oshawa\'s licence document when we checked, so we did not use Oshawa data.' },
      { q: 'Where are the fees?', a: 'Just above the parent reviews. You will see that the opening lesson costs nothing, followed by two monthly plans, group and private, priced in the currency of your country.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Other pages for Oshawa and Whitby families',
    html: 'For all of Ontario, read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and for the whole country <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Families who commute west may find <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a> useful. For the Grade 6 assessment, see <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 math practice</a>; for home learners, <a class="cg-inline-link" href="/homeschool-coding-and-math-ontario">homeschool coding and math in Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oshawa, Whitby and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/ontario-grade-6-math-and-coding-help', label: 'Grade 6 math and coding' },
    { href: '/gauss-contest-preparation', label: 'Gauss contest' }
  ],

  personalityCss: `
.cg-root.cg-kow .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-kow .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-kow .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding-inline: 0.9rem; }
.cg-root.cg-kow .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-kow .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-kow .cg-align-code { font-weight: 700; letter-spacing: 0.04em; }
.cg-root.cg-kow .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kow #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.55; padding: 0.9rem 1.1rem; border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); }
.cg-root.cg-kow .cg-ladder-col { border-top: 1px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding-block: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 6 C3.1 (efficient code), C3.2 (effect of changes on outcomes and efficiency), and the Grade 6 notes on efficient code, flow charts, adapting efficient code and the probability-trials example; Science and Technology (2022) Grade 6 A2.1 (obtaining input in different ways). EQAO Grade 6 window 4 May to 8 June 2027. CEMC Gauss 2027 (Grades 7 and 8, younger welcome, 10 to 21 May 2027, ordering 22 April 2027, 25 questions, 60 minutes, through a school). Oshawa CMA membership and area codes from facts-geo.md; Eastern offsets from IANA tzdb 2026e.',
    localProject: 'Town of Whitby Open Data, Parks (Open Government Licence - The Corporation of the Town of Whitby, commercial use allowed), downloaded with curl on 22 October 2026 and analysed with our scripts park_class_sizes.py and page_script.py (python -I): 128 rows, 127 parks after one repeated ID; one ID with a stray space; LOCAL 55 (mean 1.78 ha, median 1.65), PARKETTE 33 (0.39, 0.39), DISTRICT 21 (5.65, 4.70), WATERFRONT (TOWN) 11 (6.20, 3.52), TOWN PARK 3 (10.95, 2.14); 48 under 1 hectare; Playspace at 90 parks. Description and metadata disagree with the file and with each other on classes and update date. Oshawa licence unreachable, so Whitby only. Labelled as ours. Lesson family: one pass with a dictionary of lists, a set for repeats, mean against median.',
    requiredMentions: [
      'one ID appears twice with identical details',
      'Efficient code can be altered more easily than inefficient code',
      'with a focus on obtaining input in different ways for a variety of purposes',
      'The download has 128 rows but 127 parks',
      'Their mean is 10.95, larger than two of the three',
      'Playspace listed at 90 of the 127 parks',
      'The file holds a FACILITY row anyway',
      'last updated in October 2024',
      'describes the middle park far better',
      '48 parks are under one hectare'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 6 math strands, C3 coding expectations and efficiency notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Grade 6 Science and Technology strands, A2.1 coding expectation.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'EQAO: 2026-27 Grade 6 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC Gauss Mathematics Contest: 2027 dates, deadline, format, eligibility.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'CEMC: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Town of Whitby Parks item (description, classes included and excluded, Updated December 2025).', url: 'https://www.arcgis.com/sharing/rest/content/items/fa9584c26e20401083665a6fd4ec9568?f=json' },
      { claim: 'Town of Whitby Parks metadata PDF (update frequency, last updated October 2024, AREA1_HECT in hectares).', url: 'https://whitby.maps.arcgis.com/sharing/rest/content/items/e1fe736c80fc4441a87b3fe4e2ac4703/data' },
      { claim: 'Open Government Licence - The Corporation of the Town of Whitby (commercial use, attribution).', url: 'https://whitby.maps.arcgis.com/sharing/rest/content/items/223810efc31c40b3aff99dd74f809a97/data' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Oshawa or Whitby population figure: StatCan was not reachable live, so none is printed.',
      'An Oshawa data project: the City of Oshawa licence PDF failed to connect on 22 October 2026 (one attempt, not retried), so no Oshawa dataset is used.',
      'Park names and addresses: left out, since several parks are named after people.',
      'A total park area for Whitby: not printed; only per-class means and medians appear.',
      'That the description or the metadata is the correct one: the page reports both and the file contents without choosing.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Oshawa or Whitby schools, school boards or private people: not used.',
      'Any affiliation with the City of Oshawa, the Town of Whitby, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
