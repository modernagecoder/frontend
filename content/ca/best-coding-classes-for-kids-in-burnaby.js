'use strict';
// Burnaby (cg- city page, Canada cluster Wave 2, row 117). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" stays in the title and meta. The body is an age-by-age
// guide to choosing a kids' class, ranks no provider and never says we are the best.
// Spine: what to look for at ages 6-7, 8-9 and 10-12; the keyboarding and digital-literacy content in BC's ADST 6-7
// modules; a City of Burnaby open data project that reads ArcGIS JSON and refuses to guess an unexplained code; the
// Beaver Computing Challenge levels; Pacific time with no November change.
// Sources, read raw on 22 October 2026. BC curriculum from ca/src/bc/adst-6-core.html (curriculum.gov.bc.ca/curriculum/adst/6/core);
// time from ca/facts-geo.md and ca/src/geo/tz/gov_2026AG0013-000209; CEMC from ca/src/cemc; data and licence in
// ca/src-pilots/best-coding-classes-for-kids-in-burnaby/ (SOURCES.txt):
//  - BC ADST 6-7: module headings Computers and Communications Devices, Digital Literacy, Computational Thinking;
//    "effective and efficient keyboarding techniques"; "strategies for identifying and troubleshooting simple hardware and
//    software problems"; Digital Literacy "Internet safety" including "privacy and security (secured connections,
//    passwords, personal information)"; criteria for evaluating search results "accuracy, timeliness, appropriateness,
//    credibility, and bias"; "Students will experience a minimum of three modules" (module rule, paraphrased here).
//  - BC Gov News 2026AG0013-000209: "the transition to Pacific time, the name of B.C.'s new time zone, will be complete"
//    (curly apostrophe in source); Nov. 1, 2026 "when clocks would usually be turned back, but now will remain the same".
//  - CEMC BCC (cemc/bcc.html): levels "Grade 6 or below" (5/6), "Grade 8 or below" (7/8), "Grade 10 or below" (9/10);
//    "12 multiple-choice questions out of a total of 60 (Grade 5/6)."; "15 multiple-choice questions out of a total of
//    90 (Grade 7/8 and Grade 9/10)."; "Time allowed for completion is 45 minutes."; dates "Monday, November 9, 2026 to
//    Friday, November 20, 2026"; 2025 Number of Contestants (table values, never summed): 14 260 (5/6), 16 344 (7/8),
//    7827 (9/10). How contests work: "all students must participate through their school".
//  - facts-geo.md: Burnaby is in the Vancouver CMA; area codes 236, 257, 604, 672, 778; America/Vancouver UTC-7 all year;
//    India 12 hours 30 minutes ahead (IANA tzdb 2026e). No populations used.
//  - City of Burnaby open data, "Drinking Water Fountains" (ArcGIS item de473779d52f4054a1c62d978ed9240b, fountains_item.json):
//    description "Locations of drinking water fountains, bottle filling stations, and self closing taps." and "Updated as
//    required."; accessInformation "City of Burnaby"; licenseInfo https://data.burnaby.ca/pages/open-government-licence;
//    item modified 25 August 2023; service gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData2/MapServer/1, live count
//    {"count":151}; dataset page https://data.burnaby.ca/datasets/burnaby::drinking-water-fountains (HTTP 200).
//    fountains.json 21,923 bytes, sha256 2505a205...52efcb39.
//  - Licence (burnaby_ogl_item_data.json, data.burnaby.ca/pages/open-government-licence): "Open Government Licence - City of
//    Burnaby" (en dash in source), "based on version 2.0 of the Open Government License - British Columbia"; "The
//    Information Provider grants you a worldwide, royalty-free, perpetual, non-exclusive licence to use the Information,
//    including for commercial purposes"; fallback attribution "Contains information licensed under the Open Government
//    Licence - British Columbia." (dash garbled in the saved copy); non-endorsement clause.
// Our own calculations (page_script.py, checks.py, python -I; outputs *.out.txt): 151 rows; TYPE DF 84, ST 46, DDF 14,
// BF 5, blank 2 (the 2 blank-type rows also have no SITE); 66 named sites; 36 sites with one row, 7 with five or more;
// 6 site names in mixed case and 60 in capitals; 27 rows carry a note. Meanings for DF, BF and ST are our reading of the
// description, labelled as such; DDF is left unexplained. Site names are not printed (some name schools).
// Lesson family: reading nested JSON, decoding codes with a lookup table, and refusing to guess an unexplained code.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'meaning = {',
  '    "DF": "drinking fountain (our reading)",',
  '    "BF": "bottle filling station (our reading)",',
  '    "ST": "self-closing tap (our guess)",',
  '}',
  '',
  'with open("fountains.json", encoding="utf-8") as f:',
  '    data = json.load(f)',
  '',
  'counts = {}',
  'for feature in data["features"]:',
  '    code = feature["attributes"]["TYPE"]',
  '    if code is None:',
  '        code = "(blank)"',
  '    counts[code] = counts.get(code, 0) + 1',
  '',
  'for code, n in sorted(counts.items(), key=lambda pair: -pair[1]):',
  '    print(code, n, meaning.get(code, "not explained in the file"))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BURNABY', label: 'Burnaby', blurb: 'An age-by-age guide to choosing a kids\' coding class in Burnaby, BC keyboarding and digital literacy at school, and a City of Burnaby fountains data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-burnaby',
  code: 'bkib',
  accent: '#992E49',
  accentRationale: 'Burnaby kids page: a muted raspberry, #992E49, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14, and is no relative of the retired purple; contrast 6.97 on the paper #FBF8F2, 6.56 on #F5F1E8 and 6.00 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Burnaby',
    eyebrow: 'Burnaby, British Columbia',
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
  routeLabel: 'Burnaby',
  title: 'Best Coding Classes for Kids in Burnaby | An Age-by-Age Guide',
  description: 'What the best coding classes for kids in Burnaby look like at ages 6 to 7, 8 to 9 and 10 to 12, what BC schools cover, and a Burnaby open data project.',
  ogDescription: 'An age-by-age guide to choosing a coding class for a Burnaby child, the keyboarding and digital literacy BC schools teach, and a fountains project on City of Burnaby data.',
  twitterDescription: 'Choosing a kids\' coding class in Burnaby, age by age, with a City of Burnaby data project.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Burnaby Children Aged 6 to 12',
    description: 'Live online coding for Burnaby children aged 6 to 12: blocks and Scratch first, then typing and Python, web pages and real JSON data, taught in a class of 15 to 20 or one to one.'
  },

  h1: 'Coding classes for kids in Burnaby',
  capsuleQ: 'What should a Burnaby parent look for in a coding class, at each age from 6 to 12?',
  capsule: 'At 6 or 7, short lessons with blocks and lots of talking; at 8 or 9, real projects and the first typing; from 10 to 12, typed code, data and a teacher who expects reasons. Modern Age Coders teaches Burnaby children live online at every one of those stages, in a class of 15 to 20 or one to one, from Coding for Kids to Python and AI for Kids. The first lesson is free.',
  lead: 'A coding class that suits a twelve-year-old can bore a six-year-old, and one built for a six-year-old can make an eleven-year-old feel babysat. So rather than one checklist, this page gives Burnaby parents three: what a good class looks like for ages 6 and 7, for 8 and 9, and for 10 to 12. It also sets out what British Columbia&rsquo;s ADST modules ask of children in Grades 6 and 7, where keyboarding and internet safety sit beside programming, and it walks through a project our older students run on a City of Burnaby open data file. That file includes a code nobody explains, and the lesson is not to guess. We name no other provider and make no ranking; use the guide on any class, including ours.',
  wa: 'Hello Modern Age Coders, I am in Burnaby and would like a free coding lesson for my child.',

  picks: {
    eyebrow: 'Course picks for Burnaby children',
    h2: 'Four courses for Burnaby kids, by age',
    intro: 'One for each stage in the guide below, plus a web course for children who want to make pages. The free lesson checks the fit.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 and 7', note: 'Short, lively lessons with blocks: characters that move, repeat and respond, and a child who explains each step out loud.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 8 and 9', note: 'A full game built over weeks, with the first steps toward typing, which BC&rsquo;s Grade 6 and 7 modules also care about.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 12', note: 'Typed Python and real data, including the Burnaby fountains file on this page, read straight from JSON.' },
      { course: 'kids-ai-web-development-course', band: 'Ages 9 to 12', note: 'Real web pages in HTML and CSS, with lessons on what is safe to put online, which echoes BC&rsquo;s digital literacy module.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: '', eyebrow: 'An age-by-age guide',
      h2: 'What a good kids&rsquo; coding class looks like at 6, at 9 and at 12',
      intro: 'Our guide, for Burnaby families. Children develop at different speeds, so read the bands loosely and look at your own child. The same tests apply to any provider, us included.',
      body: [
        { kind: 'table', caption: 'Choosing a coding class by age: what to look for and what should worry you (our guide, October 2026)', head: ['Age', 'Look for', 'Be wary of', 'Ask the provider'], rows: [
          ['6 and 7', 'Lessons of modest length, blocks or pictures instead of typing, a teacher who keeps the child talking and moving', 'Long lectures, long videos, or a child left alone with a tablet for most of the session', 'How long is a lesson, and how often does my child speak in it?'],
          ['8 and 9', 'A project that grows over several weeks, simple loops and decisions, and a gentle start on typing', 'A new disconnected toy every lesson, or Python forced before reading and typing are comfortable', 'What will my child have finished after a term, and when does typing begin?'],
          ['10 to 12', 'Typed code, real files, being asked why a program works, and the occasional unsolved problem', 'Copying from the teacher&rsquo;s screen, or a promise that AI will write the code for them', 'Can my child change a program on their own when the rule changes?'],
          ['Every age', 'One regular teacher, a stated group size, and a monthly fee written down before the trial', 'Vague answers on size, teacher or fee', 'What is the most children a class can have?']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mixed ages are a warning sign', p: 'A group that mixes a six-year-old with an eleven-year-old forces the teacher to aim at the middle, which suits neither. Ask how groups are formed before you book.' },
          { h3: 'Typing is a real milestone', p: 'Moving from blocks to typed code is mostly about typing comfort, not cleverness. Many children are ready around 9 or 10; some sooner, some later. A good teacher waits for the signs.' },
          { h3: 'The ten-minute look', p: 'In a trial lesson, sit nearby for the first ten minutes. If your child is speaking, guessing and trying things, the class is working; if they are watching, it is not yet.' }
        ] }
      ]
    },
    {
      id: 'adst', tint: 'tint', eyebrow: 'BC schools',
      h2: 'Keyboarding, safety and searching: the side of ADST that sits beside coding',
      intro: 'Burnaby schools follow BC&rsquo;s curriculum, where Grade 6 and 7 students take at least three Applied Design, Skills, and Technologies modules a year, chosen by the school. We read the module content on curriculum.gov.bc.ca on 22 October 2026. The quotes are BC&rsquo;s; the notes are ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'Devices', req: 'The Computers and Communications Devices module lists &ldquo;effective and efficient keyboarding techniques&rdquo; and strategies for troubleshooting simple hardware and software problems.', ours: 'Typing and fixing small problems are part of the curriculum. A child who types well moves into Python sooner and with less frustration.' },
          { code: 'Safety', req: 'The Digital Literacy module includes &ldquo;Internet safety&rdquo;, covering privacy and security such as secured connections, passwords and personal information.', ours: 'We reinforce the same rule in our web lessons: a child&rsquo;s name, school and photo do not go on a public page.' },
          { code: 'Searching', req: 'Digital Literacy also asks children to judge search results by &ldquo;accuracy, timeliness, appropriateness, credibility, and bias&rdquo;.', ours: 'The same five tests work on an answer from an AI tool. We teach children to apply them before trusting any output.' },
          { code: 'Choice', req: 'Schools choose which modules to run, and can develop their own.', ours: 'Two Burnaby classrooms can have very different years, so it is worth asking your child&rsquo;s teacher which modules are planned.' }
        ] },
        { kind: 'p', text: 'We are a live online class that works beside school, not a school. We have no connection with the BC education ministry, the Burnaby school district or the City of Burnaby, and we grant no school credit or marks.' }
      ]
    },
    {
      id: 'fountains', tint: 'deep', eyebrow: 'Burnaby data project',
      h2: 'Where can you refill a water bottle in Burnaby? Reading the City&rsquo;s fountain file',
      intro: 'The City of Burnaby publishes its drinking water fountains as open data. Our students aged about 10 to 12 read it as JSON, count the fountain types and meet a code that the file never explains. The counts are ours.',
      body: [
        { kind: 'table', caption: 'Our count of TYPE codes in the City of Burnaby Drinking Water Fountains file, downloaded 22 October 2026 (151 rows). Meanings are our reading of the dataset description, not the City&rsquo;s legend', head: ['Code in the file', 'Rows', 'What we think it means'], rows: [
          ['DF', '84', 'Drinking fountain (our reading)'],
          ['ST', '46', 'Self-closing tap (our guess; the description mentions them)'],
          ['DDF', '14', 'Not explained anywhere in the file or its description'],
          ['BF', '5', 'Bottle filling station (our reading)'],
          ['No code at all', '2', 'These two rows have no site either']
        ] },
        { kind: 'p', text: 'Our script reads the JSON with Python&rsquo;s standard library. Each fountain is a feature, and its details sit inside an attributes dictionary. The lookup table gives a meaning only where we have a reason; anything else prints &ldquo;not explained in the file&rdquo;:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why DDF stays unexplained', p: 'The City&rsquo;s description names three kinds of fixture: drinking water fountains, bottle filling stations and self-closing taps. The file uses four codes. We could guess what DDF stands for, but a guess printed as fact is how bad data spreads, so the script says plainly that it does not know.' },
          { h3: 'Where they are', p: 'The 149 rows that name a site spread over 66 sites. 36 sites have a single fixture and 7 have five or more, so a few large parks hold many of them while most sites have one.' },
          { h3: 'Messy names', p: 'Of those 66 site names, 60 are written in capitals and 6 in mixed case. Before grouping by site, a careful student makes the case match, or the same place could be counted twice.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot promise', p: 'The description says the data is &ldquo;Updated as required&rdquo;, and the catalogue record was last changed in August 2023. A fountain in the file may be switched off for winter, or a new one may be missing. Our students write the download date and this warning under every chart.' },
        { kind: 'p', text: 'Data source: City of Burnaby open data, <a class="cg-inline-link" href="https://data.burnaby.ca/datasets/burnaby::drinking-water-fountains">Drinking Water Fountains</a>, published under the Open Government Licence - City of Burnaby (<a class="cg-inline-link" href="https://data.burnaby.ca/pages/open-government-licence">licence</a>), which is based on the BC licence: contains information licensed under the Open Government Licence - British Columbia. The City does not endorse this page or our classes, and we do not print the file&rsquo;s site names.' }
      ]
    },
    {
      id: 'beaver', tint: '', eyebrow: 'A first contest',
      h2: 'The Beaver Computing Challenge levels a Burnaby child can enter',
      intro: 'CEMC at the University of Waterloo runs the Beaver Computing Challenge across Canada, including BC schools. It tests logic, not programming. These figures come from CEMC&rsquo;s contest page, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Beaver Computing Challenge 2026: levels, format and last year&rsquo;s turnout, from CEMC (the turnout figures are CEMC&rsquo;s 2025 table and are not added together)', head: ['Level', 'Who may write it', 'Questions', 'Writers in 2025'], rows: [
          ['Grade 5/6', 'Grade 6 or below', '12 multiple choice, out of 60', '14 260'],
          ['Grade 7/8', 'Grade 8 or below', '15 multiple choice, out of 90', '16 344'],
          ['Grade 9/10', 'Grade 10 or below', '15 multiple choice, out of 90', '7827']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'When and how long', p: 'Every level lasts 45 minutes, and the 2026 window runs from Monday 9 November to Friday 20 November 2026.' },
          { h3: 'Only through school', p: 'CEMC says all students must take part through their school, so a Burnaby parent should ask the teacher rather than look for a sign-up form.' },
          { h3: 'Our practice', p: 'We write our own logic puzzles and label them as ours. CEMC keeps its past contests free online; we point families to them instead of copying them.' }
        ] },
        { kind: 'p', text: 'Read more in our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a>. CEMC and the University of Waterloo are not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Class times',
      h2: 'Burnaby is on Pacific time all year now. Here is what that means for classes',
      intro: 'BC sprang forward on 8 March 2026 for the last time. The province described 1 November 2026 as the day when clocks would usually be turned back, but now will remain the same, completing the move to &ldquo;Pacific time, the name of B.C.&rsquo;s new time zone&rdquo;.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The gap to India', p: 'Pacific time is UTC-7 and India is UTC+5:30, so India is 12 hours 30 minutes ahead of Burnaby every day of the 2026 to 2027 school year. A 4:00 pm weekday class in Burnaby is 4:30 am the next morning in India; a 10:00 am Saturday class is 10:30 pm Saturday in India.' },
          { h3: 'Nothing to re-check in November', p: 'Families in Ontario, Quebec and the Atlantic provinces still change clocks on 1 November 2026 and 14 March 2027. Burnaby families do not, so a weekly class time stays exactly where it is.' },
          { h3: 'Burnaby phone numbers', p: 'Burnaby numbers use 604 or 778, with 236, 672 and 257 overlaying them. Enter the ten digits in the form; the +1 is filled in.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A Burnaby child&rsquo;s path from blocks to JSON',
    intro: 'These ages match the guide above but are only a starting point. Your child&rsquo;s free lesson decides the real one.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Talk and blocks', p: 'Short block programs, predicting what happens, and explaining it in their own words.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'A real project', p: 'A game that grows over weeks, plus the first steady typing practice.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Typed code', p: 'Python with loops, decisions and dictionaries, and a web page made by hand.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Age 12', h3: 'Real data', p: 'Reading JSON like the Burnaby fountains file, and saying what the data cannot show.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI tool can read the fountain file, why should a Burnaby child learn to?',
    intro: 'Because the tool will happily guess what DDF means, and present the guess as fact.',
    p1: 'Ask an AI assistant to summarise the Burnaby fountains file and it may well tell you what DDF stands for, confidently. The file never says. A child who has written the lookup table, and chosen to leave DDF unexplained, has learned the habit that matters most with AI: separating what the data says from what someone filled in.',
    p2: 'So our children&rsquo;s classes teach thinking before tools: read the data, decide what is known, write the code, check it. Children learn how AI works and how it fails, using the same five tests BC asks them to apply to search results. They do not hand their thinking to a chatbot. For home use, OpenAI requires a parent&rsquo;s permission before anyone under 18 uses ChatGPT.',
    closer: 'BC already asks Grade 6 and 7 students to judge sources for accuracy and bias; an AI answer is just one more source to judge.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online classes fit a Burnaby family&rsquo;s week',
    intro: 'Classes happen at home, live, with one teacher who knows your child. Nobody has to cross the city to get there.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 children grouped by age and level, or private lessons that follow one child&rsquo;s pace.' },
      { h3: 'Equipment', p: 'A laptop or desktop with a keyboard, so the typing practice BC values happens naturally. Headphones help in a busy home.' },
      { h3: 'Nearby cities', p: 'Children in Vancouver, Coquitlam, Surrey and Richmond join the same classes on the same Pacific clock.' },
      { h3: 'Parents can watch', p: 'Sit in on any lesson. We would rather you judge the teaching than our description of it.' },
      { h3: 'Free first lesson', p: 'A real lesson, ending with a recommended course and level. No card required.' }
    ],
    spec: { title: 'Online only', p: 'Modern Age Coders has no Burnaby premises and claims none. Every class is live online, taught from India.' }
  },

  fees: {
    h2: 'Fees for kids&rsquo; coding classes in Burnaby',
    intro: 'Three options; the currency code appears next to each fee.',
    first: 'A full live lesson, free, ending with a suggested course for your child&rsquo;s age.',
    group: 'The monthly fee for a place in a class of 15 to 20 children of a similar age and level.',
    private: 'The monthly fee for private lessons with one teacher.',
    closer: 'Burnaby families pay the same monthly fee as families anywhere in Canada. You are not charged until after the free lesson, once a course and a time are settled; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Book a free coding lesson for your Burnaby child',
    intro: 'Tell us your child&rsquo;s age or grade. A seven-year-old might build a short block animation; an eleven-year-old might read their first JSON file.',
    success: 'Thank you. The team will be in touch soon about a lesson for your child in Burnaby.'
  },

  faq: {
    h2: 'Burnaby parents&rsquo; questions about coding for kids',
    intro: 'What Burnaby families ask us most.',
    items: [
      { q: 'Are there coding classes for kids in Burnaby?', a: 'Ours are live online rather than in a Burnaby building. Your child learns at home with a real teacher, in a class of 15 to 20 grouped by age, or one to one.' },
      { q: 'What should a coding class for a 6-year-old look like?', a: 'Short sessions, blocks instead of typing, and a teacher who keeps the child talking and trying. Avoid long videos and lessons where the child mostly watches.' },
      { q: 'When should my child move from Scratch to Python?', a: 'When typing is comfortable, often around 9 or 10. BC also lists keyboarding in its Grade 6 and 7 technology modules, which helps.' },
      { q: 'Do Burnaby schools teach coding?', a: 'BC teaches it through ADST. In Grades 6 and 7 each child takes at least three ADST modules a year, chosen by the school, and coding sits in some of them.' },
      { q: 'Is it safe for my child to make websites?', a: 'Yes, with rules. Our web lessons follow the same idea as BC\'s digital literacy module: no names, schools or photos of children on public pages.' },
      { q: 'Can my child try a contest?', a: 'The Beaver Computing Challenge has levels for Grade 6 or below and Grade 8 or below, written through school. CEMC lists the 2026 window as 9 to 20 November 2026.' },
      { q: 'What time are classes in Burnaby?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Pacific time, which no longer changes in November.' },
      { q: 'Will my child use AI tools?', a: 'They learn how AI works and how to check its answers, but they write their own code. Children under 18 need a parent\'s permission to use ChatGPT.' },
      { q: 'How do I compare kids\' coding classes in Burnaby?', a: 'Use the age-by-age table on this page: look at lesson length, how groups are formed, when typing starts, and whether your child explains their own code.' },
      { q: 'What do classes cost?', a: 'See the fees section above: a free first lesson, then a monthly fee for a class place or for private lessons. Nothing is charged before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for BC families',
    h2: 'More pages for Burnaby and British Columbia',
    html: 'Start with <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a> or the national <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. For the years after elementary school, see <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12</a>. Families comparing types of class across the country can read <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada</a>, and every province&rsquo;s clocks are set out in the <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">2026 time zone guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burnaby and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/computer-programming-11-and-12-bc', label: 'BC Computer Programming 11 and 12' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' }
  ],

  personalityCss: `
.cg-root.cg-bkib .cg-hero h1 { font-weight: 690; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-bkib .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bkib .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-bkib .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-bkib .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkib .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkib #ages .cg-table td:first-child { font-weight: 700; white-space: nowrap; }
.cg-root.cg-bkib #fountains code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkib .cg-align-code { font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-bkib .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca (ADST 6-7 core, saved raw): the three-module rule with school choice; Computers and Communications Devices (keyboarding techniques, troubleshooting); Digital Literacy (Internet safety, privacy and security; judging search results by accuracy, timeliness, appropriateness, credibility and bias). BC Gov News 2026AG0013-000209 on permanent Pacific time (UTC-7). CEMC Beaver Computing Challenge 2026 levels, formats, dates and the 2025 turnout table (not summed); through-a-school rule. Burnaby area codes and the Vancouver CMA from facts-geo.md.',
    localProject: 'City of Burnaby open data, Drinking Water Fountains (Open Government Licence - City of Burnaby, based on OGL-BC 2.0), JSON downloaded 22 October 2026 (21,923 bytes, 151 rows) and counted with our script page_script.py (python -I): DF 84, ST 46, DDF 14, BF 5, blank 2; 66 named sites, 36 with one fixture, 7 with five or more; 60 site names in capitals and 6 in mixed case. Meanings of DF, BF and ST are labelled as our reading; DDF left unexplained; site names not printed. Labelled as ours. Lesson family: nested JSON, a lookup table, and refusing to guess a code.',
    requiredMentions: [
      'Not explained anywhere in the file or its description',
      '36 sites have a single fixture and 7 have five or more',
      'effective and efficient keyboarding techniques',
      'accuracy, timeliness, appropriateness, credibility, and bias',
      'Open Government Licence - City of Burnaby',
      'Pacific time, the name of B.C.&rsquo;s new time zone',
      '14 260',
      'Coquitlam, Surrey and Richmond',
      '60 are written in capitals and 6 in mixed case'
    ],
    sources: [
      { claim: 'BC curriculum, ADST 6-7 core: module rule, keyboarding, troubleshooting, Internet safety, search-result criteria.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC Gov News: permanent Pacific time, UTC-7, no change on 1 November 2026.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 levels, formats, dates and 2025 turnout.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Burnaby open data: Drinking Water Fountains dataset.', url: 'https://data.burnaby.ca/datasets/burnaby::drinking-water-fountains' },
      { claim: 'Open Government Licence - City of Burnaby (commercial use, attribution, non-endorsement).', url: 'https://data.burnaby.ca/pages/open-government-licence' },
      { claim: 'IANA tzdb northamerica: America/Vancouver on UTC-7 all year.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Burnaby population figure: StatCan was not reachable live.',
      'What DDF stands for: refused; neither the file nor its description says.',
      'Site names from the fountain file: not printed, because some name schools.',
      'That every fountain in the file works today: refused; the record was last changed in August 2023 and is updated as required.',
      'A total of BCC writers across levels: refused; CEMC publishes the levels separately and we do not add them.',
      'Any ranking of Burnaby coding providers, or that Modern Age Coders is the best: refused.',
      'Any affiliation with the City of Burnaby, the Burnaby school district, the BC education ministry, CEMC or the University of Waterloo.'
    ]
  }
};
