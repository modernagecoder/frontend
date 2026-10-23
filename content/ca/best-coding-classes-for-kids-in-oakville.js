'use strict';
// Oakville (cg- city page, Canada cluster Wave 2, row 116). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12), with the searches "coding for kids oakville" and "robotics
// classes oakville". "Best" sits in the title and meta only. The body helps a family decide between robotics and coding,
// names and ranks no provider, and never claims we are the best. We teach programming, not robot hardware, and say so.
// Spine: Grade 6 efficient code in Ontario math and coding in Grade 6 science, a robotics-or-coding decision guide,
// a Town of Oakville open data project that cleans messy age labels, and the Grade 6 EQAO window.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/facts-schools-contests.md (raw
// files ca/src/ontario); FIRST quotes from ca/src/other-contests/firstroboticscanada.html(.txt); geography from
// ca/facts-geo.md; data and licence in ca/src-pilots/best-coding-classes-for-kids-in-oakville/ (SOURCES.txt):
//  - Ontario DCP API, Elementary Mathematics (2020), Grade 6: C3.1 "by writing and executing efficient code, including code
//    that involves conditional statements and other control structures"; C3.2 "describe how changes to the code affect the
//    outcomes and the efficiency of the code". Science and Technology (2022), Grade 6: A2 "use coding in investigations and
//    to model concepts, and assess the impact of coding and of emerging technologies on everyday life"; A2.1 "write and
//    execute code in investigations and when modelling concepts, with a focus on obtaining input in different ways".
//  - EQAO: Grade 6 Reading, Writing and Mathematics "May 4 - June 8, 2027" (en dash in source).
//  - FIRST Robotics Canada (firstroboticscanada.org): FIRST LEGO League "introduces STEM to children ages 4-14 through fun,
//    exciting hands-on learning"; FIRST Tech Challenge "Teams design, build, and program robots to compete in an alliance
//    format against other teams."; robots "can be coded using a variety of levels of Java-based programming".
//  - facts-geo.md: Oakville is in the Toronto CMA (98-10-0003-01); the 905 belt overlay 289/365/742/905 covers Halton
//    (CNAC via the Internet Archive); America/Toronto UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA 2026e).
//    No populations used.
//  - Town of Oakville open data, "Recreation and Culture Drop in Programs" (ArcGIS item e2fa873b4c784544a50d1b48bdb880e4,
//    item_e2fa873b4c784544a50d1b48bdb880e4.json): snippet "A list of drop-in programs offered by the Town of Oakville.";
//    accessInformation "2024 Town of Oakville"; item modified 13 May 2024; live count query {"count":200}; dataset page
//    https://portal-exploreoakville.opendata.arcgis.com/datasets/e2fa873b4c784544a50d1b48bdb880e4_0 (HTTP 200).
//    drop_in_programs.csv 60,479 bytes, sha256 cad623cb...5326ba822. The FEE column is never printed.
//  - Licence (oakville_open_data_licence.txt; https://www.oakville.ca/town-hall/plans-strategies/open-data/open-data-licence/):
//    "The Information Provider grants you a worldwide, royalty-free, perpetual, non-exclusive licence to use the Information,
//    including for commercial purposes"; attribution "Contains information licensed under the Open Government Licence -
//    Town of Oakville." (em dash in source, written here as a hyphen); "Information Provider" means the Corporation of the
//    Town of Oakville; non-endorsement clause.
// Our own calculations (page_script.py, checks.py, python -I; outputs page_script.out.txt, checks.out.txt, checks2.out.txt):
// 200 rows; 27 distinct raw AGES labels, 25 after trimming spaces and lower-casing; "50+ " with a trailing space on 52
// rows; "All Ages" 35 and "All ages" 1; "13-17" 1 and "13 to 17" 1; "Grades 6 to 12" 11 rows; one row titled Test with
// AGES "Test"; 188 rows parsed into an age range, 12 skipped; rows that fit a 9-year-old 44 (Recreational Swimming 15,
// Recreational Skating 13, Drop-in Sports 8, Oakville Museum 4, Drop-in Fitness Classes 2, Drop-in Art Studios 1,
// Drop-in Arts Studio 1); age 6 46, age 12 51; section labels "Senior Services" 57 and "Seniors Services" 1, "Drop-in Art
// Studios" 6 and "Drop-in Arts Studio" 1. Our efficient-code example prints 5050 twice (run 22 October 2026).
// Lesson family: cleaning messy text labels into numbers before filtering, and noticing near-duplicate categories.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const EFFICIENT = [
  'total = 0',
  'for n in range(1, 101):',
  '    total = total + n',
  'print(total)',
  'print(100 * 101 // 2)'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'def age_range(label):',
  '    text = label.strip().lower().replace("-", " to ")',
  '    if text == "all ages":',
  '        return (0, 120)',
  '    if text.endswith("+"):',
  '        return (int(text[:-1]), 120)',
  '    if text.endswith("years and under"):',
  '        return (0, int(text.split()[0]))',
  '    if " to " in text and not text.startswith("grades"):',
  '        low, high = text.split(" to ")',
  '        return (int(low), int(high))',
  '    return None',
  '',
  'fits = {}',
  'skipped = []',
  'with open("drop_in_programs.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        span = age_range(row["AGES"])',
  '        if span is None:',
  '            skipped.append(row["AGES"].strip())',
  '            continue',
  '        if span[0] <= 9 <= span[1]:',
  '            section = row["SECTION_HEADER"]',
  '            fits[section] = fits.get(section, 0) + 1',
  '',
  'print(fits)',
  'print(sorted(set(skipped)), len(skipped))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'OAKVILLE', label: 'Oakville', blurb: 'Robotics or coding for an Oakville child aged 6 to 12: Grade 6 coding in Ontario math and science, and a Town of Oakville data-cleaning project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-oakville',
  code: 'bkio',
  accent: '#2A2A52',
  accentRationale: 'Oakville kids page: a muted ink indigo, #2A2A52, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14, far from the retired purple; contrast 12.77 on the paper #FBF8F2, 12.01 on #F5F1E8 and 10.99 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Oakville',
    eyebrow: 'Oakville, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Oakville',
  title: 'Best Coding Classes for Kids in Oakville | Coding or Robotics?',
  description: 'Choosing the best coding classes for kids in Oakville, ages 6 to 12: robotics or coding, Grade 6 code in Ontario math and science, and a Town data project.',
  ogDescription: 'Robotics club or coding class? A guide for Oakville families with children aged 6 to 12, built on Ontario Grade 6 math and science and a Town of Oakville open data project.',
  twitterDescription: 'Oakville kids: robotics or coding, what Grade 6 asks, and a Town of Oakville data project.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Oakville Children Aged 6 to 12',
    description: 'Live online coding for Oakville children from Grade 1 to Grade 7: block coding, Scratch and Minecraft, then typed Python and data cleaning, taught in a group or one to one.'
  },

  h1: 'Coding classes for kids in Oakville',
  capsuleQ: 'Should an Oakville child aged 6 to 12 start with robotics or with coding?',
  capsule: 'If your child loves building with their hands, a school or club robotics team is a fine first step; if they want to make games, apps or solve puzzles, start with coding, which every robot needs anyway. Modern Age Coders teaches coding to Oakville children aged 6 to 12 live online, in groups of 15 to 20 or one to one, from Coding for Kids to Python and AI for Kids. We do not sell robot kits. The first class is free.',
  lead: 'Oakville parents often search for robotics and coding in the same breath, and providers blur the two. A robotics class spends much of its time on parts: motors, sensors, wheels and the kit that holds them. A coding class spends its time on the instructions. Both are worthwhile, and they ask different things of a child. This page helps you decide which your child needs first, using what Ontario already asks of an Oakville student in Grade 6 math and science, where code must be efficient and must read input in different ways. It then shows a project our older students run on a Town of Oakville open data file, where the real work is cleaning messy text before anything can be counted. We teach the coding side only, and we rank no other provider.',
  wa: 'Hello Modern Age Coders, we live in Oakville. Could my child try a free coding class?',

  picks: {
    eyebrow: 'Course picks for Oakville children',
    h2: 'Four coding courses for Oakville kids, robot-free',
    intro: 'Each matches an age and an interest. The free class settles which one fits.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Blocks that make characters move, repeat and react, the same control ideas a younger robotics kit uses, without the parts to buy.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 8 to 12', note: 'Code that builds and changes a Minecraft world, for children who love construction but would rather build on screen.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python, from loops and if statements to the Oakville age-label project on this page.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic puzzles and step-by-step plans, the thinking a robotics team needs before anyone touches a motor.' }
    ]
  },

  sections: [
    {
      id: 'decide', tint: '', eyebrow: 'Robotics or coding?',
      h2: 'Robotics club or coding class: a decision guide for Oakville families',
      intro: 'This is our own guide, written for families with a child aged 6 to 12. It compares the two kinds of activity, not any provider, and you can use it with any class you are considering.',
      body: [
        { kind: 'table', caption: 'Robotics or coding first? A comparison for children aged 6 to 12 (our guide, October 2026)', head: ['Question', 'Robotics team or club', 'Coding class'], rows: [
          ['What fills most of the time?', 'Building and adjusting the robot, then programming it', 'Writing, testing and changing programs'],
          ['What does the child need at home?', 'Usually a kit, or time at a school or club where the kit lives', 'A laptop or desktop with a keyboard'],
          ['Which children light up?', 'Children who love taking things apart and working in a team', 'Children who love games, stories, puzzles and making their own rules'],
          ['How deep does the code go?', 'As deep as the robot needs; often blocks for younger teams', 'As deep as the child can go: blocks, then Python, then real data'],
          ['What carries over?', 'Teamwork, mechanical sense, debugging in the physical world', 'Loops, conditions and functions, which every robot also runs on'],
          ['What is the honest catch?', 'Less time typing code; the kit can become the lesson', 'No motors or sensors to touch, unless a project adds them']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Robotics through FIRST', p: 'FIRST Robotics Canada says FIRST LEGO League introduces STEM to children aged 4 to 14, and that FIRST Tech Challenge teams design, build and program robots, which can be coded at several levels of Java-based programming. These run through schools and community teams.' },
          { h3: 'Where we fit', p: 'We do not run robotics teams or sell kits. We teach the programming that sits underneath a robot, and children who also join a school or club team often find the coding part of it comes more easily.' },
          { h3: 'Four questions for any class', p: 'How many children per group? Will one teacher stay with them? What will my child have built in eight weeks? Is the monthly fee written down before the trial? Ask robotics and coding providers alike.' }
        ] }
      ]
    },
    {
      id: 'grade6', tint: 'tint', eyebrow: 'Grade 6 in Ontario',
      h2: 'Efficient code and input: what Grade 6 asks of an Oakville student',
      intro: 'Oakville schools teach the Ontario curriculum, in which Grade 6 asks for code in two subjects. We pulled both from the Ontario curriculum&rsquo;s own data service on 22 October 2026. Quotes are the ministry&rsquo;s; the reading of them is ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'Math C3.1', req: 'Students solve problems by writing and executing &ldquo;efficient code&rdquo;, with conditional statements and other control structures.', ours: 'Working code is no longer the finish line. A Grade 6 student is asked whether the code does its job without wasted steps.' },
          { code: 'Math C3.2', req: 'Students describe how changes affect &ldquo;the outcomes and the efficiency of the code&rdquo;.', ours: 'Two programs can print the same answer; one may take far longer. Children learn to compare, not just to finish.' },
          { code: 'Science A2', req: 'Students &ldquo;use coding in investigations and to model concepts&rdquo; and assess the impact of coding on everyday life.', ours: 'Code turns up in science class too, as a tool for experiments and models.' },
          { code: 'Science A2.1', req: 'Code in investigations, &ldquo;with a focus on obtaining input in different ways&rdquo;.', ours: 'This is the expectation closest to robotics: reading a sensor, a keyboard or a file is all input.' }
        ] },
        { kind: 'p', text: 'A small example of efficiency, written by us for Grade 6 students. Both lines of output are 5050, the sum of the whole numbers from 1 to 100, but the first takes a hundred additions and the second takes one multiplication and one division:<code class="cg-mt-2">' + EFFICIENT + '</code>Asking why the shortcut works, and when a loop is still the better choice, is exactly the conversation C3.2 wants.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'EQAO in Grade 6', p: 'EQAO lists the Grade 6 provincial assessment window for 2026 to 2027 as 4 May to 8 June 2027. We do not run test preparation for it; careful reasoning about patterns and code is useful there anyway.' },
          { h3: 'Robots and A2.1', p: 'If your child&rsquo;s class builds a robot, A2.1 is often the reason: input from a sensor, a decision, an output. The same three steps appear when a Python program reads a file.' },
          { h3: 'Not a school', p: 'We teach beside school, not instead of it, and give no report-card marks. We are not linked to the Ontario Ministry of Education, EQAO, the Halton school boards or the Town of Oakville.' }
        ] }
      ]
    },
    {
      id: 'dropin', tint: 'deep', eyebrow: 'Oakville data project',
      h2: 'How many Oakville drop-in programs suit a 9-year-old? First, clean the labels',
      intro: 'The Town of Oakville publishes its recreation and culture drop-in programs as open data, with an AGES column. Before our students aged about 10 to 12 can filter by age, they have to turn messy words into numbers. All counts here are ours, not the Town&rsquo;s.',
      body: [
        { kind: 'table', caption: 'What the AGES column looks like: our count of the Town of Oakville Recreation and Culture Drop in Programs file, downloaded 22 October 2026 (200 rows)', head: ['What we found', 'Rows', 'What the cleaning step does'], rows: [
          ['&ldquo;50+ &rdquo; with a trailing space', '52', 'strip() removes the space, so it matches &ldquo;50+&rdquo;'],
          ['&ldquo;All Ages&rdquo; and &ldquo;All ages&rdquo;', '35 and 1', 'lower() makes them one label'],
          ['&ldquo;13-17&rdquo; and &ldquo;13 to 17&rdquo;', '1 and 1', 'Replacing the hyphen with &ldquo; to &rdquo; makes them one shape'],
          ['&ldquo;8 years and under&rdquo; and similar', '9', 'Read as 0 up to the first number'],
          ['&ldquo;Grades 6 to 12&rdquo;', '11', 'Skipped: grades are not ages, and guessing would be wrong'],
          ['A row whose age label is simply &ldquo;Test&rdquo;', '1', 'Skipped: a leftover test entry, not a program']
        ] },
        { kind: 'p', text: 'Our script, standard library only. The function <b>age_range</b> returns a (lowest, highest) pair or None, and the main loop counts programs a 9-year-old fits:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What it found', p: 'Of the 200 rows, 188 turn into an age range and 12 are skipped. Of the 188, 44 fit a 9-year-old: 15 recreational swimming, 13 recreational skating, 8 drop-in sports, 4 museum programs, 2 fitness classes and 2 art studios.' },
          { h3: 'Messy categories too', p: 'Those two art rows sit under two different headings, Drop-in Art Studios and Drop-in Arts Studio. Likewise Senior Services has 57 rows and Seniors Services has 1. Cleaning is never only about one column.' },
          { h3: 'Change the age', p: 'Swap the 9 for 6 and the count is 46; for 12 it is 51. A child who changes one number and predicts the result before running it is doing the Grade 6 expectation in miniature.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'The catalogue record says 2024 Town of Oakville and was last modified in May 2024, so this is a snapshot, not today&rsquo;s schedule. A row is a program listing, not a time slot or a place available. Before a family plans a week around it, they should check the Town&rsquo;s current listings. Writing that sentence is part of the assignment.' },
        { kind: 'p', text: 'Data source: Town of Oakville open data, <a class="cg-inline-link" href="https://portal-exploreoakville.opendata.arcgis.com/datasets/e2fa873b4c784544a50d1b48bdb880e4_0">Recreation and Culture Drop in Programs</a>. Contains information licensed under the Open Government Licence - Town of Oakville (<a class="cg-inline-link" href="https://www.oakville.ca/town-hall/plans-strategies/open-data/open-data-licence/">licence</a>). The Town does not endorse this page or our classes. We do not reproduce the file&rsquo;s fee column.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Oakville class times on Eastern time, with India time beside them',
      intro: 'Oakville follows Eastern time. Clocks go back on 1 November 2026 and forward on 14 March 2027, while India, where our teachers are, stays on one offset. Conversions below are ours, from the IANA time zone database (release 2026e).',
      body: [
        { kind: 'table', caption: 'Two Oakville slots, before and after the 1 November 2026 change (our conversions)', head: ['Oakville slot', 'Oakville on UTC-4 (until 1 November 2026 and from 14 March 2027)', 'Oakville on UTC-5 (1 November 2026 to 14 March 2027)'], rows: [
          ['Weekday at 6:00 pm', 'India 3:30 am, the following day', 'India 4:30 am, the following day'],
          ['Saturday at 8:30 am', 'India 6:00 pm, Saturday', 'India 7:00 pm, Saturday']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'You never convert', p: 'We write every Oakville class time in Eastern time. Ahead of each clock change, families receive the next session time again, in writing.' },
          { h3: 'Young children, shorter lessons', p: 'For children of six and seven we keep sessions brisk, with a pause to move; older children settle into one longer project.' },
          { h3: 'Oakville phone numbers', p: 'Oakville is part of the 905 overlay, shared with 289, 365 and 742. The form below takes the ten digits; there is no need to add the leading 1.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'An Oakville child&rsquo;s path from blocks to clean data',
    intro: 'Grades and ages here are approximate. The free class shows the right starting rung.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'First control', p: 'Characters that move, repeat and react to a key press, built in blocks.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Worlds and rules', p: 'Minecraft and Scratch projects where the child writes the rules of the world.', courses: ['minecraft-coding-for-kids-course', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 and 11', h3: 'Typed and efficient', p: 'Python loops and conditions, and comparing two programs that give the same answer.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Messy real data', p: 'Cleaning labels like the Oakville file before trusting a count.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should an Oakville child learn to clean data when AI can do it?',
    intro: 'Because the cleaning rules are decisions, and somebody has to make them.',
    p1: 'An AI tool asked to count programs for a 9-year-old might quietly turn &ldquo;Grades 6 to 12&rdquo; into ages 6 to 12, or keep the row called Test. Either choice changes the answer, and neither is announced. A child who has written <b>age_range</b> by hand knows those rows exist and decides, on purpose, what to do with them.',
    p2: 'Our classes for children put that judgment first: look at the data, decide the rule, write it, check it. Children learn how AI tools work and how they fail, and they use what they learn to question answers rather than accept them. At home, remember that OpenAI&rsquo;s rules require a parent&rsquo;s permission for anyone under 18 using ChatGPT.',
    closer: 'Ontario asks Grade 6 students to judge whether code is efficient; judging whether an answer is right comes before that.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Our live online coding classes for Oakville children',
    intro: 'No kit and no drive across town: a teacher, a laptop and a project, live every week.',
    cells: [
      { h3: 'Pick your times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'A class of 15 to 20 children at one stage, or private lessons with a teacher who follows your child&rsquo;s pace.' },
      { h3: 'At home', p: 'A laptop or desktop, a keyboard, sound and a reliable connection. No robot kit to buy and nothing to assemble.' },
      { h3: 'Same teacher weekly', p: 'Your child&rsquo;s group keeps one regular teacher, who knows which mistakes your child tends to make.' },
      { h3: 'Halton and beyond', p: 'Families in Burlington, Milton and Mississauga join the same Eastern time classes as Oakville children.' },
      { h3: 'Try it free', p: 'The first class is a real lesson that closes with a suggested course and level. No card is taken.' }
    ],
    spec: { title: 'No Oakville centre, no robots', p: 'Modern Age Coders has no location in Oakville and runs no robotics teams. We teach coding live online, from India.' }
  },

  fees: {
    h2: 'What coding classes cost for Oakville children',
    intro: 'Three options, each with its currency code shown.',
    first: 'A free live class that ends with a suggested course and level.',
    group: 'The monthly fee for a place in a class of 15 to 20 children at the same stage.',
    private: 'The monthly fee for private lessons with one teacher.',
    closer: 'An Oakville family pays the same monthly fee as any family in Canada, with no kit to buy on top. The first charge comes only after the free class, once a course and time are chosen; holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'Parents and students on Google',

  book: {
    h2: 'Book a free coding class for your Oakville child',
    intro: 'Tell us the grade or age and whether your child is more of a builder or a game maker. We will set the first task to match.',
    success: 'Thank you. We will be in touch shortly about a class for your child in Oakville.'
  },

  faq: {
    h2: 'Oakville parents ask',
    intro: 'Questions Oakville families send us about coding and robotics.',
    items: [
      { q: 'Do you have robotics classes in Oakville?', a: 'No. We teach coding, not robot hardware. For building robots, look at school or community teams such as FIRST LEGO League, which FIRST Robotics Canada describes for ages 4 to 14. Our coding classes pair well with a team.' },
      { q: 'Do you have coding classes for kids in Oakville?', a: 'Yes, live online. Children join from home with a real teacher, in a group of 15 to 20 or one to one. We have no Oakville building.' },
      { q: 'Should my child do robotics or coding first?', a: 'Builders who love working with their hands often enjoy robotics first; children who love games, stories and puzzles usually prefer coding. Every robot runs on code, so coding is never wasted.' },
      { q: 'What age is right to start?', a: 'Six, with blocks. Ontario math asks for simple code from Grade 1, and these courses run up to age 12.' },
      { q: 'What does Grade 6 ask about coding in Ontario?', a: 'Grade 6 math asks for efficient code and for explaining how changes affect efficiency. Grade 6 science asks students to use code in investigations, with a focus on getting input in different ways.' },
      { q: 'Does my child need a robot kit or special software?', a: 'No kit. A laptop or desktop with a browser is enough; the teacher sets up free tools in the first class.' },
      { q: 'What time are classes for Oakville families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Can my child enter a competition?', a: 'Robotics competitions run through FIRST teams. For logic and math, CEMC contests such as the Beaver Computing Challenge are written through your child\'s school.' },
      { q: 'How do I compare classes in Oakville?', a: 'Ask the same four questions of each: group size, whether one teacher stays, what your child will build in eight weeks, and the monthly fee in writing.' },
      { q: 'How much are the classes?', a: 'The fees section on this page shows the free first class and the monthly fees for a group place and for private lessons. You pay nothing before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for Oakville and Ontario',
    html: 'For the province, see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> and the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. Grade 6 families can use the <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Grade 6 math and coding page</a> and <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 math practice</a>. The <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers a first contest, and nearby Toronto has <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">its own page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oakville and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/ontario-grade-6-math-and-coding-help', label: 'Grade 6 math and coding' },
    { href: '/eqao-grade-6-math-practice', label: 'EQAO Grade 6 practice' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' }
  ],

  personalityCss: `
.cg-root.cg-bkio .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-bkio .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-bkio .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-bkio .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-bkio .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkio .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkio #grade6 code, .cg-root.cg-bkio #dropin code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkio #decide .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-bkio .cg-align-code { font-weight: 700; }
.cg-root.cg-bkio .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 6 C3.1 (efficient code with conditional statements) and C3.2 (efficiency of the code); Science and Technology (2022) Grade 6 A2 and A2.1 (coding in investigations, obtaining input in different ways); EQAO Grade 6 window 4 May to 8 June 2027. FIRST Robotics Canada on FIRST LEGO League (ages 4 to 14) and FIRST Tech Challenge (design, build and program; Java-based programming). Oakville in the Toronto CMA and the 905 overlay; Eastern time offsets (facts-geo.md; IANA tzdb 2026e).',
    localProject: 'Town of Oakville open data, Recreation and Culture Drop in Programs (Open Government Licence - Town of Oakville), CSV downloaded 22 October 2026 (60,479 bytes, 200 rows) and cleaned with our script page_script.py (python -I): 27 raw AGES labels, 25 after strip and lower; 50+ with a trailing space on 52 rows; All Ages 35 and All ages 1; 13-17 and 13 to 17 once each; Grades 6 to 12 on 11 rows and one Test row skipped; 188 rows parsed; 44 fit a 9-year-old (swimming 15, skating 13, sports 8, museum 4, fitness 2, art studios 1 plus 1 under a second heading); 46 fit age 6 and 51 age 12. Fee column never printed. Labelled as ours. Lesson family: cleaning messy labels into numbers.',
    requiredMentions: [
      'A row whose age label is simply &ldquo;Test&rdquo;',
      'Drop-in Art Studios and Drop-in Arts Studio',
      'Of the 200 rows, 188 turn into an age range',
      'Open Government Licence - Town of Oakville',
      'with a focus on obtaining input in different ways',
      'print(100 * 101 // 2)',
      'Robotics club or coding class: a decision guide',
      'Swap the 9 for 6 and the count is 46',
      'Burlington, Milton and Mississauga'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 6 math strands (C3.1 efficient code, C3.2 efficiency).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Grade 6 Science and Technology strands (A2, A2.1 coding).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'EQAO: 2026-27 assessment windows, including Grade 6.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'FIRST Robotics Canada: FIRST LEGO League ages, FIRST Tech Challenge description and Java-based programming.', url: 'https://www.firstroboticscanada.org/' },
      { claim: 'Town of Oakville open data: Recreation and Culture Drop in Programs dataset.', url: 'https://portal-exploreoakville.opendata.arcgis.com/datasets/e2fa873b4c784544a50d1b48bdb880e4_0' },
      { claim: 'Town of Oakville Open Data Licence (commercial use, attribution statement, non-endorsement).', url: 'https://www.oakville.ca/town-hall/plans-strategies/open-data/open-data-licence/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Oakville population figure: StatCan was not reachable live.',
      'That we teach robotics hardware or run robotics teams: refused; we teach the programming side.',
      'Any ranking of Oakville coding or robotics providers, or that Modern Age Coders is the best: refused.',
      'Program fees and program names from the Town file: not reproduced (currency-neutral page; fees column never printed).',
      'That the drop-in file is the current schedule: refused; the catalogue record dates from May 2024.',
      'Turning Grades 6 to 12 into ages: refused in the script on purpose.',
      'That our classes improve EQAO results or report-card marks: refused.',
      'Any affiliation with the Town of Oakville, the Halton school boards, the Ontario Ministry of Education, EQAO or FIRST Robotics Canada.'
    ]
  }
};
