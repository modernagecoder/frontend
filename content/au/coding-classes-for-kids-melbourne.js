'use strict';
// Coding classes for kids in Melbourne (cg- city page, Australia cluster Phase 6, kids intent only:
// Prep to Year 8 and their parents). Teens and adults belong to vibe-coding-and-ai-agents-classes-in-melbourne.
// Spine: the smallest-so-far variable. From one OpenStreetMap Overpass query (snapshot 2026-10-07T12:56:57Z)
// for a rectangle we chose around the inner city (37.850 to 37.770 degrees south, 144.900 to 145.000 east):
// 234 features tagged leisure=playground, 27 of them named, plus the State Library Victoria building
// (way 22820458). Straight-line distances from the library measured by us on 7 October 2026 (scratchpad
// au/c2/mel.py): nearest playground 805.5 m (no name in OpenStreetMap), then Flagstaff Gardens Playground
// 944.4 m, Museum Playground 947.4 m, an unnamed one at 965.1 m and ArtPlay Playground 1,074.3 m; farthest
// 6,800.5 m; none within 500 m; four within 1 km. A one-pass running minimum over the list in the order
// OpenStreetMap returned it changed its record 6 times (items 1, 3, 5, 22, 138 and 143). Starting the record
// at 0 reports 0 m and at 500 reports 500 m (no playground lies within 500 m).
// Lesson family: running minimum ("smallest so far") and the starting-value bug; screened free
// site-wide on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Melbourne (GCCSA 2GMEL):
// 4,917,750 people; median age 37; 1,299,184 families; 1.8 children on average in families with children;
// aged 0 to 4 290,649 (5.9%); aged 5 to 9 307,523 (6.3%; Australia 6.2%); aged 10 to 14 293,410 (6.0%);
// 107,797 people attending preschool (7.1% of people attending an educational institution). Victorian
// Government school term dates for 2027 (vic.gov.au). India time offsets from the IANA time zone database.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MELBOURNE KIDS', label: 'Kids in Melbourne', blurb: 'Coding for Melbourne children from Prep to Year 8, with a playground hunt that teaches the smallest-so-far trick.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-melbourne',
  code: 'kmel',
  accent: '#185422',
  accentRationale: 'Melbourne kids: a deep garden green chosen by hand (HSV saturation 0.72, value 0.33), at least 10.8 RGB units from every accent in use and 7.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Melbourne',
    eyebrow: 'Melbourne, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Melbourne, for kids',
  title: 'Coding Classes for Kids in Melbourne | Prep to Year 8 Online',
  description: 'Live online coding classes for Melbourne kids from Prep to Year 8: Scratch, games, Python and AI basics with a real teacher, in small groups or one to one.',
  ogDescription: 'Coding for Melbourne children, with a project that finds the nearest of 234 inner-city playgrounds using one simple variable.',
  twitterDescription: 'Coding classes for Melbourne kids, Prep to Year 8, live online. First lesson free.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Melbourne Children',
    description: 'Level-matched Scratch, game making, first Python and AI literacy for primary and lower secondary children across Greater Melbourne, taught live in English.'
  },

  h1: 'Coding classes for kids in Melbourne',
  capsuleQ: 'What are the best coding classes for kids in Melbourne?',
  capsule: 'For a Melbourne child in Prep to Year 8, look for a live teacher, a small group at the same level and projects the child can explain afterwards. Greater Melbourne had 307,523 children aged 5 to 9 at the 2021 Census. Our classes start at age 6, run online after school, and the first lesson costs nothing.',
  lead: 'Ask a Melbourne eight-year-old which playground is closest to the State Library and you will get a confident answer and an argument. We settled it with data. OpenStreetMap lists 234 playgrounds in a rectangle we drew around the inner city, and a child can find the nearest one with a single idea: keep a note of the smallest distance seen so far, and cross it out only when a smaller one turns up. That one variable is the heart of countless programs. Our young Melbourne coders run it in Scratch, then in Python, and then discover two things: in a list of 234 playgrounds the record only changed six times, and starting the record at the wrong number gives a confident wrong answer.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Melbourne.',

  picks: {
    eyebrow: 'Course picks for Melbourne kids',
    h2: 'Where a Melbourne child usually starts',
    intro: 'Chosen by age and by what the child likes making. The free first lesson confirms the level before anything is booked.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Sprites, loops and a first game, including a playground hunt where the cat remembers the closest swing it has found.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, Roblox and Minecraft, built and play-tested by the child rather than copied from a video.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed code: lists, loops and turtle drawings, then small programs that sort and search real Melbourne data.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 14', note: 'What AI is, what it gets wrong and how to check it, taught without signing a child up to adult chatbots.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Melbourne children in the Census',
      h2: 'Nearly three hundred thousand children in every five-year band',
      intro: 'From the Australian Bureau of Statistics 2021 Census QuickStats for the Greater Melbourne capital city area. Each figure is the published one; we have not added any of them together.',
      body: [
        { kind: 'table', caption: 'Children in Greater Melbourne at the 2021 Census, Australian Bureau of Statistics', head: ['Measure', 'Greater Melbourne'], rows: [
          ['Aged 0 to 4', '290,649, or 5.9% of residents'],
          ['Aged 5 to 9', '307,523, or 6.3% (Australia 6.2%)'],
          ['Aged 10 to 14', '293,410, or 6.0%'],
          ['People attending preschool', '107,797'],
          ['Average children in families with children', '1.8'],
          ['Median age of all residents', '37']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Scratch years', p: 'Children aged 5 to 9 made up 6.3% of Greater Melbourne\'s residents in 2021, a touch above the national 6.2%. That is the band where most of our Melbourne learners first meet Scratch.' },
          { h3: 'The jump to text', p: 'The 293,410 children aged 10 to 14 cover Years 5 to 8, where typed code such as Python starts to make sense and maths and coding begin to feed each other.' },
          { h3: 'Families, not just children', p: 'Families with children had 1.8 children on average. In practice that means siblings, and we often place brothers and sisters in different groups so each works at their own level.' }
        ] },
        { kind: 'p', text: 'A note we also teach the children. Census tables adjust each age band separately to protect privacy, so the bands are not promised to add up exactly to the total population. When a figure exists, we quote it; we never build our own total by adding the pieces.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which playground is nearest the State Library, and how often does the answer change?',
      intro: 'Every playground OpenStreetMap records in our inner-Melbourne rectangle, measured from the State Library Victoria building, then searched with one variable.',
      body: [
        { kind: 'table', caption: 'What we measured on 7 October 2026 (our calculation from OpenStreetMap)', head: ['Measure', 'Figure'], rows: [
          ['Playgrounds tagged in the rectangle', '234, of which 27 have a name'],
          ['Nearest playground to the State Library', '805.5 metres (it has no name in the map data)'],
          ['Next nearest', 'Flagstaff Gardens Playground at 944.4 m, Museum Playground at 947.4 m, then ArtPlay Playground at 1,074.3 m'],
          ['Playgrounds within 1 kilometre', '4'],
          ['Farthest in the rectangle', '6,800.5 metres'],
          ['Times the smallest-so-far value changed', '6, reading the list in the order the map returned it']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Start with the first', p: 'The first playground in the list was 4,341.8 metres away. With nothing to compare it to, it becomes the record: the smallest distance so far.' },
          { h3: '2. Compare, and maybe replace', p: 'Each new playground is compared with the record. Bigger or equal, ignore it. Smaller, write it down instead. A Scratch sprite can do this with one variable and one if block.' },
          { h3: '3. Notice how rarely it moves', p: 'Across all 234 playgrounds the record changed only six times: at the 1st, 3rd, 5th, 22nd, 138th and 143rd playground. After that, nothing beat 805.5 metres.' }
        ] },
        { kind: 'callout', h3: 'What if the record starts at the wrong number?', p: 'Beginners often start the record at a round number instead of the first distance. Start it at 0 and nothing is ever smaller, so the program reports a playground 0 metres away. Start it at 500 and the program reports 500 metres, because no playground in the list is that close: the nearest is 805.5 metres. Start it with the first playground\'s distance and the answer is right every time. One starting value, three different answers, and only one of them is true.' },
        { kind: 'p', text: 'These figures are ours, measured on an OpenStreetMap snapshot from 7 October 2026. OpenStreetMap is mapped by volunteers, so a playground may be missing or one that has gone may remain; the rectangle is our own choice and not a council boundary. Distances are straight lines from the library building, not walking routes, and the nearest playground happens to have no name in the data, which children find funny and which is a useful lesson in itself.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'From a pile of cards to a working search',
      intro: 'The same idea at three ages, so a Prep child and a Year 8 student can each meet it at the right size.',
      body: [
        { kind: 'table', caption: 'The smallest-so-far idea, by stage', head: ['Stage', 'What the child does', 'What it teaches'], rows: [
          ['Prep to Year 2', 'Turns over number cards one at a time and keeps only the smallest in a special spot', 'Comparing two numbers and remembering one of them'],
          ['Years 3 to 6', 'Builds a Scratch sprite that walks past playground signs and updates a variable called nearest', 'Variables, if blocks and loops working together'],
          ['Years 7 and 8', 'Writes the search in Python over all 234 distances and counts how often the record moves', 'Lists, loops and a first taste of measuring what a program does']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A bug worth making', p: 'Children often start the record at zero. Then nothing is ever smaller and the program proudly reports a playground zero metres away. Fixing it by starting with the first item is a lesson they remember.' },
          { h3: 'Ties and equal values', p: 'What if two playgrounds are the same distance? Using smaller rather than smaller-or-equal keeps the first one found. Children decide which rule they want and say why.' },
          { h3: 'Checking the answer', p: 'Older learners sort the whole list as a second opinion and confirm both methods agree on 805.5 metres before they trust either.' }
        ] },
        { kind: 'p', text: 'We are not connected with the State Library Victoria, OpenStreetMap or the Australian Bureau of Statistics, and none of them has endorsed this project. The Census figures are the Bureau\'s own; the playground distances and record counts are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'The Victorian school year',
      h2: 'Four terms, Prep to Year 8, planned around Melbourne\'s calendar',
      intro: 'Classes follow the Victorian school year, so holidays and busy weeks are agreed in advance rather than missed by surprise.',
      body: [
        { kind: 'table', caption: 'Victorian school terms in 2027, as published by the Victorian Government', head: ['Term', 'Start', 'Finish'], rows: [
          ['Term 1', 'Wednesday 27 January (students in government schools start Thursday 28 January)', 'Thursday 25 March'],
          ['Term 2', 'Monday 12 April', 'Friday 25 June'],
          ['Term 3', 'Monday 12 July', 'Friday 17 September'],
          ['Term 4', 'Monday 4 October', 'Friday 17 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Prep first', p: 'Victoria calls the first year of school Prep. Our youngest Melbourne learners are six, usually in Prep or Year 1, and start with picture-based coding before any typing.' },
          { h3: 'Holiday weeks', p: 'Families choose whether lessons continue through the holidays or pause. Many children keep one lesson a week going so a project is not forgotten over the break.' },
          { h3: 'Year 7 and 8', p: 'Secondary school brings bigger projects and more homework. We keep sessions to a steady weekly slot so coding stays enjoyable rather than another deadline.' }
        ] },
        { kind: 'spec', title: 'Why a calendar is a good coding lesson too', p: 'Term dates look simple until a child tries to count the school weeks between two of them. Is the end date included? What about the day students start later than staff? Questions like these are exactly the edge cases programmers learn to ask about.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From turning over cards to writing a search',
    intro: 'Bands are a guide. The free first lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Picture coding', p: 'Arrows, sequences and simple loops on screen, with lots of talking about what the program will do before it runs.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch games', p: 'Variables, scores and timers in games the child designs, including the playground hunt.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Bigger builds', p: 'Minecraft and Roblox projects, simple apps and a first look at how AI tools make guesses.', courses: ['minecraft-coding-for-kids-course', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 12 to 14', h3: 'First Python', p: 'Typed code, lists and loops on real data, with maths and coding taught side by side.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Melbourne child still learn to code when AI can write programs?',
    intro: 'Yes, because an AI helper can start the record at zero just as easily as a beginner can, and only a child who understands the idea will notice.',
    p1: 'Ask an AI tool for a program that finds the nearest playground and it will usually produce something tidy. Sometimes it sets the starting record to zero or to a fixed number such as 1,000, which quietly breaks when every playground is further away than that. Nothing on the screen says so. A child who has built the search by hand knows to look at that first line and ask what the record starts as.',
    p2: 'That habit of reading a program and asking one sharp question is what we are really teaching young Melbourne coders. It applies to code from a friend, a book or an AI tool, and it is far easier to build at nine than to learn at nineteen. Children use AI helpers only in age-appropriate ways in our classes, with a teacher present.',
    closer: 'Learning to code in 2026 is not about racing a computer. It is about knowing which line to check, and a child who has watched a record change six times in 234 playgrounds knows exactly where to look.',
    blogAnchor: 'our longer case for children learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Footscray, Box Hill or Frankston, one lesson on one screen',
    intro: 'Greater Melbourne is wide, and after-school traffic is no one\'s favourite activity. Live online lessons reach every suburb without a car trip.',
    cells: [
      { h3: 'At the kitchen table', p: 'A laptop or desktop, a working microphone and a parent nearby for the first session is all a young learner needs.' },
      { h3: 'School words, not new jargon', p: 'Teachers use the year names Melbourne children hear at school, from Prep to Year 8, so nothing feels foreign.' },
      { h3: 'A real first lesson', p: 'Your child builds something small but complete, then you get a suggested level, course and weekly time. No card details are asked for.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty children working at the same stage, so no one is left behind or held back. One to one is available instead.' },
      { h3: 'Twice a week as standard', p: 'Around eight lessons a month in a fixed slot, which suits most children better than one long weekend session.' },
      { h3: 'Teachers working on India time', p: 'Melbourne is four and a half hours ahead of India time in winter and five and a half hours ahead during daylight saving, so a 4pm Melbourne lesson sits in our teachers\' late morning or early afternoon.' }
    ],
    spec: { title: 'Clock changes, settled once', p: 'Victoria moves its clocks forward in early October and back in early April; India never changes its clocks. Lesson times are always confirmed in Melbourne time, so the change is ours to manage, not yours.' }
  },

  fees: {
    h2: 'What coding classes cost for Melbourne kids',
    intro: 'Three clear prices, nothing hidden underneath.',
    first: 'One full lesson with no charge, ending with a level, a course suggestion and a weekly time.',
    group: 'A month of lessons, usually eight, alongside fifteen to twenty children at the same level.',
    private: 'The same monthly rhythm of about eight lessons, with your child as the only learner.',
    closer: 'Families outside India pay in US dollars at one rate, so a child in the inner north and a child on the Mornington Peninsula pay the same. Nothing is invoiced until after the free lesson, once the course and time suit you; the pricing page explains holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'What parents and students say, unedited from Google',

  book: {
    h2: 'Tell us about your young coder',
    intro: 'A Prep child might start by guiding a sprite with arrows, a Year 4 child by building the playground hunt in Scratch, and a Year 7 student by writing a first Python loop. Tell us the age and what they enjoy.',
    success: 'Thank you. We will be in touch soon about a class for your Melbourne child.'
  },

  faq: {
    h2: 'Questions from Melbourne parents',
    intro: 'What Melbourne families tend to ask before the first lesson.',
    items: [
      { q: 'What age can my child start coding classes in Melbourne?', a: 'Our live classes start at age 6, usually Prep or Year 1. The youngest children begin with picture-based coding and simple loops before they type anything.' },
      { q: 'What is a running minimum in coding?', a: 'A running minimum is a variable that holds the smallest value seen so far while a program looks through a list. Each new value is compared with it and replaces it only if it is smaller, so one pass through the list finds the minimum.' },
      { q: 'What is the Melbourne playground project?', a: 'Children take the 234 playgrounds OpenStreetMap records in an inner-Melbourne rectangle, measure each one\'s distance from the State Library Victoria building and find the nearest, 805.5 metres away, by keeping a smallest-so-far record and counting how often it changes.' },
      { q: 'Does my child need to be good at maths first?', a: 'No. Coding and maths grow together. Comparing distances, counting and spotting patterns are part of the lessons, and many children find maths easier once they have used it to make something work.' },
      { q: 'Do you follow the Victorian school year?', a: 'Yes. We use Victorian year names from Prep to Year 8 and plan breaks around the Victorian school terms, which in 2027 start on Wednesday 27 January for schools.' },
      { q: 'When are lessons for Melbourne children?', a: 'After school on weekdays or on weekends, chosen during the free lesson and always stated in Melbourne time. Exact times depend on which groups suit your child\'s level.' },
      { q: 'Is it safe for my child to learn online?', a: 'Lessons are live with a teacher in a small group, children are not asked to create accounts on adult AI tools, and parents are welcome to sit in, especially for the first few sessions.' },
      { q: 'Is there a Modern Age Coders centre in Melbourne?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Melbourne kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Melbourne families',
    html: 'Older Melbourne students and adults have their own page: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents classes in Melbourne</a>. For the whole state, including Prep to Year 12 and the VCE, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>. Parents comparing options for younger children can read <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a> and <a class="cg-inline-link" href="/game-development-for-kids-australia">game development for kids</a>. Everything else hangs off the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Melbourne and Victoria',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne, teens and adults' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Ages 7 and 8' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kmel .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-kmel .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-kmel .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-kmel .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-kmel .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-kmel .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kmel .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kmel .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-kmel .cg-callout { border-left-width: 6px; }
.cg-root.cg-kmel .cg-hero-grid { align-items: start; }
`,

  dossier: {
    curriculumAuthority: 'Greater Melbourne, ABS Census 2021 QuickStats, GCCSA 2GMEL (read 7 October 2026): 4,917,750 people; median age 37; 1,299,184 families; average number of children per family, for families with children, 1.8; age 0 to 4: 290,649 (5.9 percent); age 5 to 9: 307,523 (6.3 percent; Victoria 6.2, Australia 6.2); age 10 to 14: 293,410 (6.0 percent); Preschool: 107,797 (7.1 percent of people attending an educational institution). Victorian Government school term dates 2027 (vic.gov.au/school-term-dates-and-holidays-victoria): Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz database: Australia/Melbourne UTC+10 and UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Running minimum on inner-Melbourne playgrounds. One OpenStreetMap Overpass query, snapshot 2026-10-07T12:56:57Z, rectangle 37.850 to 37.770 degrees south and 144.900 to 145.000 degrees east: 234 leisure=playground features (27 named) and State Library Victoria (way 22820458, centre -37.8097018, 144.965488). Haversine distances (R = 6,371,008.8 m) measured 7 October 2026: nearest 805.5 m (unnamed), Flagstaff Gardens Playground 944.4 m, Museum Playground 947.4 m, unnamed 965.1 m, ArtPlay Playground 1,074.3 m; farthest 6,800.5 m; 0 within 500 m; 4 within 1 km. Running minimum over the list in returned order: record changes at items 1 (4,341.8 m), 3 (2,744.3 m), 5 (1,289.0 m), 22 (947.4 m), 138 (944.4 m), 143 (805.5 m): 6 changes. Starting-value check: record initialised to 0 reports 0 m; initialised to 500 reports 500 m (no playground within 500 m); initialised to the first distance reports 805.5 m. Lesson family: running minimum (smallest so far) and the initial-value bug; record-counting theory deliberately left out (maths-tuition-in-oxford covers record years).',
    requiredMentions: [
      '290,649',
      '293,410',
      '107,797',
      '805.5',
      '4,341.8',
      '6,800.5',
      'Flagstaff Gardens Playground',
      'ArtPlay Playground',
      '138th and 143rd'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Melbourne (2GMEL): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2GMEL' },
      { claim: 'OpenStreetMap via the Overpass API: leisure=playground features and the State Library Victoria building in the stated rectangle, snapshot 2026-10-07T12:56:57Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'Victorian Government, school term dates and holidays, 2027 term dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, Australia/Melbourne and Asia/Kolkata offsets.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather station or temperature facts are used.',
      'Any count of playgrounds for all of Melbourne: OpenStreetMap is incomplete and our rectangle is not a council boundary.',
      'Walking times to playgrounds: distances are straight lines from the library building.',
      'The location or council of the unnamed nearest playground: the map data does not name it and we did not guess.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with State Library Victoria, OpenStreetMap, the ABS or the Victorian Department of Education.'
    ]
  }
};
