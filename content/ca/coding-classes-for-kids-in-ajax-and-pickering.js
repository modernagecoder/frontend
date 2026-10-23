'use strict';
// Ajax and Pickering (cg- city page, Canada cluster Wave 2, row 153). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: Ontario Grade 5 coding (conditional
// statements, Boolean conditions, minimum and maximum), a playground-age project on the Town of Ajax Playgrounds file (Ajax
// only: Pickering's portal had no parks or playground layer), and FIRST LEGO League as the robotics door for ages 4 to 14.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g5-strands.txt
// (Ontario DCP content API; stray spaces before commas dropped in quotes) and facts-schools-contests.md:
//  - Grade 5 C3.1 "including code that involves conditional statements and other control structures"; notes "A conditional
//    statement evaluates a Boolean condition, something that can be either true or false." and "Conditional statements, like
//    loops, can be nested to allow for a range of possible outcomes or to implement decision trees."; suggested situations
//    "determining the minimum and maximum values from a set of numbers" and a "Guess that Number" game (curly quotes in
//    source); example caption "Code to determine if guess was too high, too low, or correct."
//  - EQAO Grade 6 window "May 4 - June 8, 2027" (en dash in source). PPM 128 Grades 7 to 12 wording not used.
//  - FIRST Robotics Canada (firstroboticscanada.org, other-contests/firstroboticscanada.txt): FIRST LEGO League "introduces
//    STEM to children ages 4-14 through fun, exciting hands-on learning"; "The three divisions inspire youth to experiment and
//    grow their critical thinking, coding, and design skills through hands-on STEM learning and robotics."
//  - CEMC: "all students must participate through their school."; contests "for Grades 5 to 12".
//  - Place facts (Ajax and Pickering's own, 8+): Ajax and Pickering are in the Toronto CMA (StatCan 98-10-0003-01 via
//    facts-geo.md; no population printed); 905-belt area codes 289, 365, 742, 905 (facts-geo.md section 4); Town of Ajax
//    "Ajax Playgrounds" item: "Point file showing the location and details of Playgrounds within the Town of Ajax", item
//    modified 9 May 2021, owner Ajax_OpenData; 81 rows, TYPE Playground 73, Exercise Equipment 2, Skate Park 3, Splash Pad 3;
//    MODIFIED_DATE years blank 8, 2013 20, 2014 50, 2015 3; Town of Ajax - Open Data Licence v.1.0 "Ajax grants You a
//    worldwide, royalty-free, perpetual, non-exclusive licence to use the Information" and "Use the Information commercially";
//    credit optional, suggested "Contains public sector Information made available under The Corporation of the Town of
//    Ajax's Open Data Licence"; City of Pickering - Open Data Licence v.1.0 exists, but the Pickering hub search (268 items,
//    mostly Durham Region and conservation layers) showed no City of Pickering parks or playground dataset; Eastern time,
//    UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e). No location names, staff usernames or makers.
// Our own calculations (playground_ages.py and page_script.py, python -I; outputs playground_ages.out.txt, page_script.out.txt
// in ca/src-pilots/coding-classes-for-kids-in-ajax-and-pickering/): 73 playgrounds; install decades 1990s 2, 2000s 42, 2010s
// 27, 2020s 2; oldest 1999, newest 2020; age in 2026 (2026 minus INSTALL) under 10: 9, 10 to 19: 33, 20 or more: 31; youngest
// 6, oldest 27; mean 17.6, median 18; most common install years 2006 (9), 2002 and 2008 (7 each); NAME among playgrounds Main
// 54, Senior 18, Junior 1; 72 distinct LOCATION values among the 73 playgrounds. India time conversions ours.
// Lesson family: if, elif and else sorting numbers into bands, min and max, and mean against median.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'bands = {"under 10 years": 0, "10 to 19 years": 0, "20 years or more": 0}',
  'ages = []',
  'with open("ajax-playgrounds.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["TYPE"] != "Playground":',
  '            continue',
  '        age = 2026 - int(row["INSTALL"])',
  '        ages.append(age)',
  '        if age < 10:',
  '            bands["under 10 years"] += 1',
  '        elif age < 20:',
  '            bands["10 to 19 years"] += 1',
  '        else:',
  '            bands["20 years or more"] += 1',
  '',
  'print(bands)',
  'print("youngest", min(ages), "oldest", max(ages))',
  'print("mean", round(sum(ages) / len(ages), 1))',
  'ages.sort()',
  'print("median", ages[len(ages) // 2])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'AJAX AND PICKERING', label: 'Ajax and Pickering', blurb: 'Coding for Ajax and Pickering children aged 6 to 12: Grade 5 if-then decisions, a Town of Ajax playground-age project, and FIRST LEGO League.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-ajax-and-pickering',
  code: 'kap',
  accent: '#140E5C',
  accentRationale: 'Ajax and Pickering kids page: a deep indigo ink, #140E5C, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and other Canada accents by 14; contrast 15.89 on the paper #FBF8F2, 14.94 on #F5F1E8 and 13.67 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Ajax and Pickering',
    eyebrow: 'Ajax and Pickering, Durham Region, Ontario',
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
  routeLabel: 'Ajax and Pickering',
  title: 'Coding Classes for Kids in Ajax and Pickering | Ages 6 to 12',
  description: 'Live online coding for kids aged 6 to 12 in Ajax and Pickering: what Ontario Grade 5 asks about if-then code, a Town of Ajax playground project, free class.',
  ogDescription: 'Grade 5 in Ontario is the year of if-then code. See what Ajax and Pickering children learn, a playground-age project on Town of Ajax open data, and our live online classes.',
  twitterDescription: 'Live coding for Ajax and Pickering children aged 6 to 12, built on Ontario Grade 5 decisions in code.',
  ogImageCourse: 'minecraft-coding-for-kids-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Ajax and Pickering Children Aged 6 to 12',
    description: 'Live online coding for Ajax and Pickering children from Grade 1 to Grade 7: Scratch and Minecraft coding, if-then decisions and games, then typed Python with a Town of Ajax data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Ajax and Pickering',
  capsuleQ: 'Where can children in Ajax or Pickering, aged 6 to 12, learn coding live?',
  capsule: 'With Modern Age Coders, online. Children aged 6 to 12 from Ajax and Pickering learn live, one to one or alongside fifteen to twenty classmates. The six- to eight-year-olds tend to pick Scratch Coding for Kids or Minecraft Coding for Kids, and nine-year-olds and up often choose Python and AI for Kids. Every class has a teacher, and the first is free.',
  lead: 'By Grade 5, Ontario math wants children to write code that makes decisions: if this is true, do that, otherwise do something else. It is the moment a program stops being a list of steps and starts to look clever, and it is also the moment children discover how picky a computer is about less-than and less-than-or-equal. For many children in Ajax and Pickering, on the eastern edge of the Toronto area, this becomes the favourite part once it clicks. Below are the Grade 5 expectations in the ministry&rsquo;s words, a project built on the Town of Ajax&rsquo;s own playground file, a word on FIRST LEGO League for children who want robots, and how our live classes fit the Durham school week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Ajax or Pickering.',

  picks: {
    eyebrow: 'Courses for Ajax and Pickering children',
    h2: 'Four ways in for an Ajax or Pickering child',
    intro: 'Choose by age and by what already excites the child; the free class confirms the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Games where a sprite checks what it is touching and reacts, the friendliest way to meet if-then decisions before Grade 5 asks for them.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 7 to 12', note: 'Code that builds and reacts inside a Minecraft world, for children who would rather design a castle than a worksheet, moving from blocks toward real code.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with if, elif and else, guessing games and the playground project below, for children ready to write each line themselves.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'What AI is, how it decides, and why it can be wrong, taught with activities rather than adult chatbots, so children understand the tools around them.' }
    ]
  },

  sections: [
    {
      id: 'grade5', tint: '', eyebrow: 'Grade 5 coding in Ajax and Pickering',
      h2: 'If, then, else: the Ontario Grade 5 coding children in Ajax and Pickering meet',
      intro: 'Public schools in Ajax and Pickering follow the Ontario curriculum. On 22 October 2026 we pulled the Grade 5 math text straight from the ministry&rsquo;s curriculum service. Words in quotation marks are the ministry&rsquo;s; beside each is the way our teachers bring it to life.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 5, C3.1', req: 'Children write and run code &ldquo;that involves conditional statements and other control structures&rdquo;.', ours: 'A conditional is a fork in the road. We draw it as a fork first, with yes on one side and no on the other, before a single block is placed.' },
          { code: 'Grade 5, notes', req: '&ldquo;A conditional statement evaluates a Boolean condition, something that can be either true or false.&rdquo;', ours: 'We play true-or-false out loud: the number is bigger than 10, the sprite is touching blue. Children learn that a condition is a question with only two answers.' },
          { code: 'Grade 5, notes', req: '&ldquo;Conditional statements, like loops, can be nested to allow for a range of possible outcomes or to implement decision trees.&rdquo;', ours: 'Our playground project uses exactly this: three possible answers, so two questions asked in order. Children see why the order of the questions matters.' },
          { code: 'Grade 5, suggested situations', req: 'The ministry lists &ldquo;determining the minimum and maximum values from a set of numbers&rdquo; and a guessing game whose code decides &ldquo;if guess was too high, too low, or correct&rdquo;.', ours: 'The guessing game is a class favourite, and we build it in Scratch and then in Python. Finding the smallest and largest value comes up again in the Ajax data below.' }
        ] },
        { kind: 'p', text: 'Grade 5 is also where the ministry&rsquo;s notes start distinguishing a single equals sign, which stores a value, from a double one, which compares two values. Children who skip that distinction write programs that look right and quietly do the wrong thing, which is why we slow down here. By the end of the year most of our Grade 5 students can explain, in their own words, why age less than 20 and age less than or equal to 20 give different answers for a playground built in 2006. Our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">guide to Ontario coding from Grade 1 to Grade 8</a> shows the years either side.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Next year, EQAO', p: 'Grade 6 is an EQAO year. EQAO lists 4 May to 8 June 2027 for the 2026 to 2027 Grade 6 assessment, so a Grade 5 child sits it a year and a half from now.' },
          { h3: 'Decisions everywhere', p: 'Conditionals turn up across the Grade 5 math notes, from comparing areas of shapes to classifying angles. A child fluent in if-then has a tool for all of them.' },
          { h3: 'Blocks still welcome', p: 'The curriculum accepts block and text code, so many Grade 5 classrooms still use blocks. We let each child choose, and nudge confident ones toward Python.' }
        ] },
        { kind: 'callout', h3: 'Who we are', p: 'Modern Age Coders is a live online school that teaches beside regular school. It gives no report-card marks and is not connected with the Ontario Ministry of Education, EQAO, any Durham school board, the Town of Ajax or the City of Pickering.' }
      ]
    },
    {
      id: 'playgrounds', tint: 'deep', eyebrow: 'Ajax data project',
      h2: 'How old are the playgrounds in Ajax? Sorting the Town&rsquo;s file with if and else',
      intro: 'The Town of Ajax publishes its playgrounds as open data, a point file of play sites with an INSTALL year for each one. Pickering&rsquo;s open data hub, when we searched it on 22 October 2026, listed mostly Durham Region and conservation layers and no City of Pickering parks or playground file, so this project uses Ajax only. All figures in this section are counts we made ourselves from the Ajax download of that date.',
      body: [
        { kind: 'table', caption: 'Ajax playgrounds by age in 2026, our calculation (2026 minus the INSTALL year) from the Town of Ajax Playgrounds file; 73 rows have TYPE Playground', head: ['Age band in 2026', 'Playgrounds', 'What the code asks'], rows: [
          ['Under 10 years (installed 2017 or later)', '9', 'age &lt; 10'],
          ['10 to 19 years', '33', 'otherwise, age &lt; 20'],
          ['20 years or more (installed 2006 or earlier)', '31', 'everything left over']
        ] },
        { kind: 'p', text: 'The file has 81 rows: 73 playgrounds, 3 skate parks, 3 splash pads and 2 sets of exercise equipment. Install years run from 1999 to 2020, and 42 of the 73 playgrounds went in during the 2000s. The youngest is 6 years old in 2026 and the oldest 27. Written as Python, the Grade 5 decision tree looks like this, and children of 10 or 11 type it line by line in our class:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Skip what does not fit', p: 'The first if checks the TYPE column and uses continue to jump past skate parks, splash pads and exercise equipment. Only the 73 playgrounds reach the age questions.' },
          { h3: 'Ask in the right order', p: 'Is the age under 10? If not, is it under 20? If neither, it must be 20 or more. Swap the first two questions and every playground under 10 also passes the under-20 test first, so the counts go wrong.' },
          { h3: 'Mean and median', p: 'Our run printed a mean of 17.6 years and a median of 18. The two are close here, and children work out why: most install years cluster in one decade, with no extreme values pulling the mean.' }
        ] },
        { kind: 'callout', h3: 'A date that is not what it seems', p: 'Age here means years since the INSTALL date in the file. It is not the age of every swing or slide: parts can be replaced without the file changing. Most rows were last edited in 2013 or 2014, and the Town&rsquo;s record of the dataset was modified on 9 May 2021. A good data scientist asks how old the data is before trusting what it says about age.' },
        { kind: 'p', text: 'Some columns are never printed in our classes. Location names can name schools or people, and one column records a staff account, so we leave them out and teach why. The NAME column is safer and interesting: among the playgrounds it says Main 54 times, Senior 18 times and Junior once, which a class can turn into a pie chart. The most common install year is 2006, with 9 playgrounds. Data used under the Town of Ajax - Open Data Licence v.1.0, which allows commercial use. Contains public sector Information made available under The Corporation of the Town of Ajax&rsquo;s Open Data Licence. The Town does not endorse this page.' }
      ]
    },
    {
      id: 'robots', tint: 'tint', eyebrow: 'Robots and contests',
      h2: 'FIRST LEGO League and school contests: options for Ajax and Pickering children who want more',
      intro: 'Some children want to code something they can hold. Others want a contest. Here is what the organisers themselves say, read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'FIRST LEGO League', p: 'FIRST Robotics Canada says the league &ldquo;introduces STEM to children ages 4-14 through fun, exciting hands-on learning&rdquo;. Teams build and program LEGO robots, which suits children who think with their hands.' },
          { h3: 'What it builds', p: 'In FIRST&rsquo;s words, its three divisions help youth &ldquo;grow their critical thinking, coding, and design skills through hands-on STEM learning and robotics&rdquo;. Coding classes and a robotics team support each other well.' },
          { h3: 'CEMC contests', p: 'CEMC at the University of Waterloo designs its contests for Grades 5 to 12, and all students take part through their school. A Grade 5 child is at the starting line now.' }
        ] },
        { kind: 'p', text: 'We do not run robotics teams or sell kits; we teach the thinking and the code. A child who has written a nested if-else in our class arrives at a robotics table already knowing how to make a robot turn left only when its sensor sees a line. We teach with problems we write ourselves and label as ours. One of ours, for a Grade 5 child: a robot moves forward until it is less than 10 centimetres from a wall, then turns. Write the rule in plain words, then as an if-else, then predict what happens if the less-than becomes less-than-or-equal. For contests the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a> are the places to start. Modern Age Coders is not connected with FIRST Robotics Canada, CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'durhamtime', tint: '', eyebrow: 'Class times',
      h2: 'After school in Ajax and Pickering, a Saturday slot, and the time in India',
      intro: 'Ajax and Pickering run on Eastern time, which moves back an hour on 1 November 2026 and forward on 14 March 2027. India does not change its clocks, so the gap shifts.',
      body: [
        { kind: 'table', caption: 'Two common Durham slots in India time. UTC offsets from the IANA time zone database (2026e); conversions by Modern Age Coders', head: ['Slot in Ajax or Pickering', 'Eastern at UTC-4 (to 1 November 2026, and from 14 March 2027)', 'Eastern at UTC-5 (1 November 2026 to 14 March 2027)'], rows: [
          ['6:00 pm on a weekday', '3:30 am next day in India', '4:30 am next day in India'],
          ['10:30 am on a Saturday', '8:00 pm in India', '9:00 pm in India']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eastern time first', p: 'We always write class times for Ajax and Pickering families in Eastern time, and we reconfirm in the week before each clock change.' },
          { h3: 'Young learners', p: 'For six- and seven-year-olds, lessons are short and active. By 10 or 11 most children enjoy a full hour on a single project.' },
          { h3: '905 numbers', p: 'Ajax and Pickering use the 905 belt codes: 905, 289, 365 and 742. The booking form already holds the +1, so enter just the ten-digit number.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first steps at 6 to decision trees by 12',
    intro: 'Bands are a guide; the free class places a child by what they can do already.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Steps in order', p: 'Short sequences and simple games where order matters, told aloud before they are coded.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 and 9', h3: 'First decisions', p: 'If-touching, if-pressed: sprites and Minecraft builds that react to what happens around them.', courses: ['minecraft-coding-for-kids-course', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 and 11', h3: 'If, elif, else', p: 'Typed Python, guessing games, and the Ajax playground file sorted into bands.', courses: ['python-ai-kids-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Age 12', h3: 'Smarter programs', p: 'Nested decisions, simple functions, and a teacher-led look at how AI models choose an answer.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should an Ajax or Pickering child code when AI exists?',
    intro: 'Because every AI system is, underneath, a pile of decisions someone had to understand.',
    p1: 'In the playground project the hard part was not typing. It was deciding which question to ask first and noticing that an install year is not the same as the age of a slide. A tool can write the if-else; it cannot tell you whether the question was the right one. Children who have built decision trees by hand notice when an answer does not add up.',
    p2: 'Adult chatbots stay out of our classes for children under 13. Those children learn what AI is through activities their teacher runs, such as sorting cards into rules and seeing where the rules fail. The rest of the lesson they reason for themselves, step by step, and test what they built before believing it.',
    closer: 'Ontario puts if-then thinking into Grade 5 math, and that same thinking is what lets a person question an answer from a machine.',
    blogAnchor: 'should children still learn to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Ajax and Pickering homes',
    intro: 'Children on both sides of the town line join the same live class from home, so there is no drive along the 401 after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two formats', p: 'A batch of fifteen to twenty children at the same level, or one teacher and your child alone, for a quiet starter or a quick learner.' },
      { h3: 'Matched by stage', p: 'Groups are formed by age and level, and a child moves up when they are ready, not on a fixed date.' },
      { h3: 'Parents can join', p: 'You are welcome to sit with younger children. Teachers send a short update on what was built at the end of each stage.' },
      { h3: 'What to have ready', p: 'A laptop or desktop with keyboard and mouse, sound, and a steady connection. A tablet makes typed code hard, so a computer is better.' },
      { h3: 'Try it free', p: 'The first class is a real lesson with a real teacher. At the end we suggest a course and a level. No card is requested.' }
    ],
    spec: { title: 'No Ajax or Pickering centre', p: 'Modern Age Coders has no premises in Ajax, Pickering or anywhere in Durham Region, and claims none. All classes are live online, taught from India by the teachers who also teach children in other countries.' }
  },

  fees: {
    h2: 'What coding classes cost for Ajax and Pickering children',
    intro: 'Three lines, with each fee shown in its currency.',
    first: 'A full live lesson, free, ending with our suggestion of a course, a level and a time.',
    group: 'The monthly fee for a place in a group of fifteen to twenty children at the same stage.',
    private: 'The monthly fee for private lessons, one teacher with your child, at times that suit you.',
    closer: 'Families in Ajax and Pickering pay what families pay across Canada. We charge nothing before the free lesson, and only once you have chosen a course and a time; see the pricing page for missed lessons and school breaks.'
  },

  reviewsH2: 'What parents say about us on Google',

  book: {
    h2: 'Book a free class for your Ajax or Pickering child',
    intro: 'Tell us your child&rsquo;s age and interests. A six-year-old might start with a sprite that follows the mouse, a nine-year-old with a guessing game, and a twelve-year-old with the Ajax playground file.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Ajax or Pickering.'
  },

  faq: {
    h2: 'Questions from Ajax and Pickering families',
    intro: 'What parents in Ajax and Pickering ask us most.',
    items: [
      { q: 'Do you offer coding classes for kids in Ajax and Pickering?', a: 'Yes, live online. There is no local centre; children join from home with a teacher, in a group of fifteen to twenty or one to one.' },
      { q: 'What coding does Ontario teach in Grade 5?', a: 'Grade 5 math asks children to write and change code that uses conditional statements, the if-then and if-then-else decisions that let a program choose what to do.' },
      { q: 'What age can my child start?', a: 'Age 6, about Grade 1, is a comfortable start. Our kids classes go up to 12, and older children move on to teen courses.' },
      { q: 'My child loves Minecraft. Is that a good way in?', a: 'Often, yes. Minecraft coding lets children build and program inside a world they already enjoy, and it leads naturally to typed code later.' },
      { q: 'Can my child join a robotics team too?', a: 'Yes. FIRST LEGO League is for ages 4 to 14 according to FIRST Robotics Canada. We do not run teams, but our classes teach the coding and logic a team needs.' },
      { q: 'When do classes run for Durham families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are sent in Eastern time.' },
      { q: 'Does my child need to type already?', a: 'No. Younger children drag blocks into place. Typing comes later, usually around 9 or 10, when the child moves on to Python.' },
      { q: 'Will my child use ChatGPT in class?', a: 'No. Under-13s in our classes never work with adult chatbots. OpenAI asks for a parent\'s permission before anyone under 18 uses ChatGPT. Our younger students learn how AI works through activities their teacher leads.' },
      { q: 'Why is the data project only about Ajax?', a: 'The Town of Ajax publishes a playground file under an open licence. When we searched Pickering\'s open data hub, we found no City of Pickering parks or playground file, so the project uses Ajax data only.' },
      { q: 'How do I find the fees?', a: 'They are in the fees section of this page: a free first lesson, then a monthly group fee or a monthly private fee, displayed in your currency.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for Ajax and Pickering families',
    html: 'For the province as a whole, read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Families who work or study in the city may want <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>, and the national overview is <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. For a child approaching Grade 6, see <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Ontario Grade 6 math and coding help</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ajax, Pickering and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/ontario-grade-6-math-and-coding-help', label: 'Grade 6 math and coding' }
  ],

  personalityCss: `
.cg-root.cg-kap .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.4rem); }
.cg-root.cg-kap .cg-hero h1 { font-weight: 650; letter-spacing: -0.012em; line-height: 1.12; }
.cg-root.cg-kap .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding-block: 0.7rem; }
.cg-root.cg-kap .cg-eyebrow { letter-spacing: 0.09em; font-weight: 640; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-kap .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-kap .cg-align-code { font-weight: 700; font-style: italic; }
.cg-root.cg-kap .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kap #playgrounds code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.5; padding: 0.85rem 1rem; border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-kap .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 5 C3.1 (conditional statements and other control structures), the notes on Boolean conditions and nested conditionals, and the suggested situations (minimum and maximum values; a guessing game that decides too high, too low or correct). EQAO Grade 6 window 4 May to 8 June 2027. FIRST Robotics Canada on FIRST LEGO League (ages 4 to 14; critical thinking, coding and design skills). CEMC contests for Grades 5 to 12, through a school. Area codes and Eastern offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e); Toronto CMA membership from facts-geo.md (StatCan 98-10-0003-01 via the Internet Archive).',
    localProject: 'Town of Ajax Open Data, Ajax Playgrounds (Town of Ajax - Open Data Licence v.1.0, commercial use allowed), downloaded with curl on 22 October 2026 and analysed with our scripts playground_ages.py and page_script.py (python -I): 81 rows, 73 playgrounds; age in 2026 (2026 minus INSTALL) under 10: 9, 10 to 19: 33, 20 or more: 31; youngest 6, oldest 27; mean 17.6, median 18; 42 installed in the 2000s; most rows last edited 2013 to 2014; item modified 9 May 2021. Pickering has no parks or playground layer on its hub, so the project is Ajax only. Labelled as ours. Lesson family: if, elif and else bands, min and max, mean against median.',
    requiredMentions: [
      'A conditional statement evaluates a Boolean condition',
      'can be nested to allow for a range of possible outcomes or to implement decision trees',
      'determining the minimum and maximum values from a set of numbers',
      'every playground under 10 also passes the under-20 test first',
      '42 of the 73 playgrounds went in during the 2000s',
      'a mean of 17.6 years and a median of 18',
      'The youngest is 6 years old in 2026 and the oldest 27',
      'modified on 9 May 2021',
      'Main 54 times, Senior 18 times and Junior once',
      'no City of Pickering parks or playground file'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 5 math strands, C3 coding expectations and notes on conditional statements.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_5___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: 2026-27 Grade 6 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'FIRST Robotics Canada: FIRST LEGO League ages and aims.', url: 'https://www.firstroboticscanada.org/' },
      { claim: 'CEMC: contests for Grades 5 to 12, through a school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Town of Ajax Open Data: Ajax Playgrounds item (description, modified date, owner).', url: 'https://www.arcgis.com/sharing/rest/content/items/89d1d77d654e42dd8e5292d501a31498?f=json' },
      { claim: 'Town of Ajax Open Data: Ajax Playgrounds CSV download.', url: 'https://opendata.ajax.ca/api/download/v1/items/89d1d77d654e42dd8e5292d501a31498/csv?layers=27' },
      { claim: 'Town of Ajax - Open Data Licence v.1.0 (commercial use, optional credit statement).', url: 'https://townofajax.maps.arcgis.com/sharing/rest/content/items/22e2d8e248724d7cb0310dc2db675abd/data' },
      { claim: 'City of Pickering maps and open data page (portal searched; no parks or playground layer found).', url: 'https://pickering.ca/business-building-development/maps-and-open-data' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Ajax or Pickering population figure: StatCan was not reachable live, so none is printed.',
      'A Pickering data project: no City of Pickering parks or playground dataset was found on its open data hub on 22 October 2026, so none is claimed.',
      'Playground location names, equipment makers and the staff username column: left out (locations can name schools or people; one names a school).',
      'That a playground age equals the age of its equipment: rejected; the page explains INSTALL is the only date and parts can be replaced.',
      'Any ranking of playgrounds as safe or unsafe by age: not made; the file has no condition data.',
      'Robotics teams run by Modern Age Coders: none exist; the page says we teach the coding only.',
      'CEMC and FIRST fees: left out on purpose (currency-neutral page).',
      'Names of Ajax or Pickering schools, school boards or private people: not used.',
      'Any affiliation with the Town of Ajax, the City of Pickering, the Ontario Ministry of Education, EQAO, FIRST Robotics Canada, CEMC or the University of Waterloo.'
    ]
  }
};
