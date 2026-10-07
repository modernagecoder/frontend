'use strict';
// Coding classes for kids in Newcastle NSW (cg- city page, Australia cluster Phase 6, kids intent only:
// Kindergarten to Year 8 and their parents). Teens and adults are served by the New South Wales page until a
// Newcastle teen/adult page exists.
// Spine: numbers stored as text. From one OpenStreetMap Overpass query (snapshot 2026-10-07T12:59:01Z) for
// amenity=bench in a rectangle we chose over central and coastal Newcastle (32.955 to 32.915 degrees south,
// 151.740 to 151.800 east): 191 benches. Two benches carry a seats tag, with values "3" (node 12693353736,
// which also has direction "240") and "6" (node 12822659424). OpenStreetMap stores every tag value as text.
// Run by us in Python on 7 October 2026: "3" + "6" gives "36"; int("3") + int("6") gives 9; sorted(["3", "6",
// "240"]) gives ["240", "3", "6"]; max of the three as text is "6". Lesson family: numbers stored as text,
// string concatenation versus addition, text ordering versus number ordering, converting with int();
// screened 7 October 2026 (Galway mentions a library concatenating a text column as one of four data traps;
// this page builds the whole lesson on it for children).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Newcastle - Maitland (Significant Urban
// Area 1025): 508,437 people; median age 39; 137,303 families; 1.8 children in families with children; aged
// 0 to 4 29,485 (5.8%); 5 to 9 31,908 (6.3%; Australia 6.2%); 10 to 14 31,667 (6.2%); preschool 11,755 (7.9% of
// people attending an educational institution). ABS Schools methodology 2025 (NSW: kindergarten; school from
// six). NSW Department of Education, 2027 school calendar. IANA: Australia/Sydney.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'NEWCASTLE KIDS', label: 'Kids in Newcastle', blurb: 'Coding for Newcastle children from Kindergarten to Year 8, and why 3 plus 6 can come out as 36.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-newcastle',
  code: 'kncl',
  accent: '#521C1C',
  accentRationale: 'Newcastle kids: a dark harbour-brick maroon chosen by hand (HSV saturation 0.66, value 0.32), at least 10.8 RGB units from every accent in use and 11.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Newcastle',
    eyebrow: 'Newcastle, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Newcastle NSW, for kids',
  title: 'Coding Classes for Kids in Newcastle NSW | Kindy to Year 8',
  description: 'Live online coding classes for Newcastle kids from Kindergarten to Year 8: Scratch, games, first Python and AI basics with a real teacher, in groups or one to one.',
  ogDescription: 'Coding for Newcastle children, with a bench-counting project that shows why a computer can turn 3 plus 6 into 36.',
  twitterDescription: 'Coding classes for Newcastle kids, Kindergarten to Year 8, live online. First lesson free.',
  ogImageCourse: 'mental-maths-mastery-kids',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Newcastle Children',
    description: 'Level-matched block coding, Scratch, mental maths with code and first Python for primary and lower secondary children across Newcastle and Lake Macquarie, taught live in English.'
  },

  h1: 'Coding classes for kids in Newcastle',
  capsuleQ: 'What are the best coding classes for kids in Newcastle?',
  capsule: 'Newcastle children from Kindergarten to Year 8 learn most from a live teacher, a small group ready for the same next step and projects about their own city. The Newcastle and Maitland urban area counted 31,908 children aged 5 to 9 in 2021. We teach online from age 6, with a first lesson at no cost.',
  lead: 'Ask a Year 4 child what 3 plus 6 is and you will get 9 before you finish the question. Ask a computer, and sometimes the answer is 36. That is not a broken computer. It is what happens when numbers are stored as text, and Newcastle\'s park benches give us a perfect example. OpenStreetMap records 191 benches across central and coastal Newcastle in the rectangle we chose, and two of them note how many people they seat: 3 and 6. Add them the wrong way and the total is 36. Our young Newcastle coders find out why, and learn the one small fix that makes it 9.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Newcastle.',

  picks: {
    eyebrow: 'Course picks for Newcastle kids',
    h2: 'Where a Newcastle child might begin',
    intro: 'Chosen to suit age and interests. The first lesson costs nothing and confirms the level.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Ages 6 to 10', note: 'Number sense first: knowing that 3 and 6 make 9 so firmly that 36 looks obviously wrong.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block programs with number blocks and word blocks, and the moment a child notices they behave differently.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch games that read answers typed by the player and have to decide whether they are words or numbers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python, where text, whole numbers and conversion between them are some of the first things learned.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newcastle children in the Census',
      h2: 'Thirty thousand children in each five-year band',
      intro: 'The ABS publishes 2021 Census QuickStats for the Newcastle and Maitland significant urban area. These are those published numbers, quoted as they appear.',
      body: [
        { kind: 'table', caption: 'Newcastle - Maitland children, ABS Census 2021', head: ['Figure', 'Newcastle - Maitland'], rows: [
          ['Children 0 to 4', '29,485 (5.8%)'],
          ['Children 5 to 9', '31,908 (6.3%; Australia 6.2%)'],
          ['Children 10 to 14', '31,667 (6.2%)'],
          ['People attending preschool', '11,755'],
          ['Families', '137,303'],
          ['Median age', '39']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A big share at preschool', p: 'Of the people in the area attending any educational institution, 7.9% were at preschool, the highest share among the eight areas on our kids pages. Many future coders are only a year or two away.' },
          { h3: 'Kindergarten to Year 1', p: 'New South Wales calls the first school year Kindergarten. Our youngest Newcastle learners are six and usually in Kindergarten or Year 1.' },
          { h3: 'Brothers and sisters', p: 'Families with children in the area had 1.8 of them on average, and siblings often learn with us at the same time in separate groups.' }
        ] },
        { kind: 'p', text: 'Census tables adjust each age band on its own for privacy, so the bands need not add up to the published total. We quote the published figures and never add pieces together to make a number of our own, a habit we pass on to the children.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does the computer say 3 plus 6 is 36?',
      intro: 'Two Newcastle park benches, the seat counts written on them in OpenStreetMap, and what happens when a program forgets those counts are stored as text.',
      body: [
        { kind: 'table', caption: 'What we found and ran on 7 October 2026 (our calculation from OpenStreetMap)', head: ['Question', 'Answer'], rows: [
          ['Benches mapped in our Newcastle rectangle', '191'],
          ['Benches that record how many people they seat', '2, seating 3 and 6'],
          ['Adding the two values exactly as stored', '"3" + "6" gives "36"'],
          ['Adding them after converting to whole numbers', '3 + 6 gives 9'],
          ['Sorting "3", "6" and "240" as text', '"240", "3", "6"'],
          ['The largest of the three, compared as text', '"6"']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Everything arrives as text', p: 'OpenStreetMap stores every value as text, even ones that look like numbers. To a program, the seat count "3" is the character 3, no different in kind from the letter a.' },
          { h3: '2. Plus means two things', p: 'For numbers, plus adds. For text, plus joins one piece onto the end of another. Joining "3" and "6" makes "36", which is exactly what the program was asked to do.' },
          { h3: '3. One word fixes it', p: 'Wrapping each value in int() turns the text into a whole number first. Now 3 plus 6 is 9, and the program agrees with every Year 4 child in Newcastle.' }
        ] },
        { kind: 'callout', h3: 'Why "240" sorts before "3"', p: 'One of the benches also records the direction it faces, 240. Put "3", "6" and "240" in order as text and you get "240", "3", "6", because text is ordered by its first character and 2 comes before 3. Ask for the largest and text comparison answers "6". Convert to numbers first and the order becomes 3, 6, 240, with 240 the largest, as any child would expect.' },
        { kind: 'p', text: 'These results are from our own Python run on an OpenStreetMap snapshot taken on 7 October 2026. OpenStreetMap is edited by volunteers; benches may be missing or have changed, and few record their seat count at all. The rectangle is our own choice, not a council boundary, and we make no claim about how many benches Newcastle has.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Words that look like numbers, from Kindergarten to Year 8',
      intro: 'The difference between a number and the symbol for a number is a big idea, so we bring it in gently and early.',
      body: [
        { kind: 'table', caption: 'Text and numbers at each stage', head: ['Stage', 'Activity', 'Understanding built'], rows: [
          ['Kindergarten to Year 2', 'Joins number cards side by side to make bigger numbers, then adds them with counters', 'A digit is a symbol; putting symbols together is not the same as adding'],
          ['Years 3 to 6', 'Builds a Scratch quiz where typed answers are checked, and spots when 10 and 010 are treated differently', 'Input, comparison and converting what a player types'],
          ['Years 7 and 8', 'Reads the Newcastle bench tags in Python, adds, sorts and finds the largest, before and after int()', 'Data types, conversion and testing results against common sense']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Check with common sense', p: 'A total of 36 seats on two benches should make anyone suspicious. Children learn that a quick reasonableness check catches many bugs before any fancy testing.' },
          { h3: 'Not everything converts', p: 'What if a tag said "three" or "3 to 4"? int() would stop with an error. Older children write code that reports such values instead of crashing.' },
          { h3: 'Same idea in spreadsheets', p: 'Numbers stored as text cause the same trouble in spreadsheets at school. Once children understand it in code, they recognise it everywhere.' }
        ] },
        { kind: 'p', text: 'Our project has no connection with the City of Newcastle, OpenStreetMap or the Australian Bureau of Statistics, and none of them has endorsed it. The census numbers are the ABS\'s; the bench results come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'School in New South Wales',
      h2: 'Kindergarten to Year 8 on the NSW calendar',
      intro: 'Newcastle families follow the New South Wales school year, and lessons are planned around it.',
      body: [
        { kind: 'table', caption: 'NSW public school terms for students in 2027, NSW Department of Education', head: ['Term', 'Students attend'], rows: [
          ['Term 1', 'Wednesday 3 February to Friday 9 April'],
          ['Term 2', 'Thursday 29 April to Friday 2 July'],
          ['Term 3', 'Tuesday 20 July to Friday 24 September'],
          ['Term 4', 'Tuesday 12 October to Monday 20 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'School from six', p: 'The ABS Schools methodology records that New South Wales children must attend school from the age of six, which is also the age our live classes begin.' },
          { h3: 'Development days', p: 'Each term starts with school development days for staff before students arrive, so the dates above are student days, as the department lists them.' },
          { h3: 'Holiday choices', p: 'Between terms, families choose whether lessons pause or carry on once a week. Short holiday projects keep skills fresh without crowding the break.' }
        ] },
        { kind: 'spec', title: 'Dates are text too', p: 'Type "3 February" into a program and it is just text, exactly like the bench seat counts. Before a program can count the days between two dates, it has to turn them into dates, the same idea as turning "3" into 3.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From number cards to data types',
    intro: 'Bands are a starting suggestion. The free lesson shows where your child really is.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Numbers and symbols', p: 'Counting, place value and first programs that use number blocks.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 to 10', h3: 'Scratch quizzes and games', p: 'Reading what the player types, checking answers and keeping scores.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Apps and worlds', p: 'Block-based apps and Minecraft projects that store and compare values.', courses: ['block-coding-app-development-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 12 to 14', h3: 'Python and types', p: 'Text, whole numbers, decimals and conversion, used on real Newcastle data.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI tool adds the numbers, does a Newcastle child need to understand data types?',
    intro: 'Yes, because the tool adds whatever it is given, and a seat count of 36 looks just as tidy on screen as a seat count of 9.',
    p1: 'AI tools and spreadsheets both work with data as it arrives. If the numbers came in as text, a quickly generated program may join them instead of adding them, or sort 240 before 3, and the output looks perfectly confident. A child who has met "3" plus "6" makes "36" will glance at the result and know something is off.',
    p2: 'We teach young Newcastle coders to expect the computer to do exactly what it was told, no more, and to check that what it was told is what they meant. AI tools appear in our lessons only in ways suited to the child\'s age, with a teacher present throughout.',
    closer: 'So, is coding still worth learning in 2026? For a child who wants to understand the answers a computer gives, more than ever. A Newcastle child who has fixed 36 into 9 already knows why.',
    blogAnchor: 'is learning to code still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Merewether, Maitland or Lake Macquarie, lessons at home',
    intro: 'The Newcastle area spreads from the coast to the Hunter, and a live online lesson means no driving after school.',
    cells: [
      { h3: 'Simple to set up', p: 'Any laptop or desktop with sound will do, and a parent beside a young child for the first lesson.' },
      { h3: 'NSW words', p: 'Teachers use NSW year names from Kindergarten onwards, so lessons sound like school.' },
      { h3: 'Free trial lesson', p: 'A genuine first lesson where your child builds something, then a suggested course and time. No card is ever requested.' },
      { h3: 'Children at the same stage', p: 'Groups of five to ten at a similar level, or private lessons instead.' },
      { h3: 'Two sessions most weeks', p: 'Around eight lessons a month in a regular slot that sits around sport and homework.' },
      { h3: 'Teachers on India time', p: 'Newcastle is four and a half hours ahead of India time in winter and five and a half hours ahead during daylight saving, so after-school lessons fall within our teachers\' daytime hours.' }
    ],
    spec: { title: 'Clock changes handled', p: 'NSW moves its clocks in early October and early April; India does not. Every lesson time is confirmed in Newcastle time so the change never catches anyone out.' }
  },

  fees: {
    h2: 'What coding classes cost for Newcastle kids',
    intro: 'Three prices and that is all.',
    first: 'One complete free lesson, ending with a level, a course and a time.',
    group: 'Around eight lessons a month with five to ten children at the same level.',
    private: 'Around eight lessons a month with your child learning one to one.',
    closer: 'Outside India, all families pay in US dollars at one rate, from the beaches to the Hunter. We invoice only once you have tried a lesson and chosen a course and slot; holidays, absences and moving between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students, unchanged',

  book: {
    h2: 'Tell us about your Newcastle learner',
    intro: 'A Kindergarten child might begin with number cards and blocks, a Year 4 child with a Scratch quiz, and a Year 8 student with the bench data in Python. Give us a year level and one thing your child loves.',
    success: 'Thank you. We will be in touch soon about a class for your Newcastle child.'
  },

  faq: {
    h2: 'Questions from Newcastle parents',
    intro: 'What Newcastle families usually ask first.',
    items: [
      { q: 'What age can my child start coding in Newcastle?', a: 'Live classes start at age 6, normally in Kindergarten or Year 1. Young children begin with blocks and pictures before they type.' },
      { q: 'What does it mean when a number is stored as text?', a: 'It means the computer is holding the characters that look like a number rather than the number itself. Text can be joined and sorted letter by letter, but not added or compared by size until it is converted, for example with int() in Python.' },
      { q: 'What is the Newcastle bench project?', a: 'Children take the 191 benches OpenStreetMap records in a rectangle over central and coastal Newcastle, find the two that list seat counts, 3 and 6, and see that adding them as stored gives "36" until they convert the values to numbers and get 9.' },
      { q: 'Is this too advanced for primary school?', a: 'Not at all. Younger children explore the same idea with number cards: putting a 3 next to a 6 makes 36, while adding three counters to six makes nine. Code comes later; the idea starts early.' },
      { q: 'Do you follow the NSW school year?', a: 'Yes. We use NSW year names from Kindergarten to Year 8 and plan around the NSW school terms, which in 2027 begin for students on Wednesday 3 February.' },
      { q: 'When are lessons for Newcastle children?', a: 'After school on weekdays or at weekends, agreed during the free lesson and stated in Newcastle time.' },
      { q: 'How do you keep children safe online?', a: 'Lessons are live with a teacher watching throughout, groups are small, children are never asked to join adult AI services, and parents may sit in on any lesson.' },
      { q: 'Is there a Modern Age Coders centre in Newcastle?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Newcastle kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Newcastle families',
    html: 'For the state picture, from Kindergarten to the HSC and the selective tests, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. Families with older students heading for senior school can read <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>. For younger children there is <a class="cg-inline-link" href="/coding-classes-for-7-and-8-year-olds-australia">coding for 7 and 8 year olds</a>, and everything else is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newcastle and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Ages 7 and 8' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kncl .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-kncl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-kncl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-kncl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.016em; }
.cg-root.cg-kncl .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.9rem); }
.cg-root.cg-kncl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kncl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kncl .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-kncl .cg-callout { border-left-width: 7px; }
.cg-root.cg-kncl .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.3rem); }
`,

  dossier: {
    curriculumAuthority: 'Newcastle - Maitland, ABS Census 2021 QuickStats, Significant Urban Area 1025 (read 7 October 2026): 508,437 people; median age 39; 137,303 families; average number of children per family, for families with children, 1.8; age 0 to 4: 29,485 (5.8 percent); age 5 to 9: 31,908 (6.3 percent; Australia 6.2); age 10 to 14: 31,667 (6.2 percent); Preschool: 11,755 (7.9 percent of people attending an educational institution; the other seven areas on our kids pages range from 5.7 to 7.1 percent). ABS Schools methodology 2025: kindergarten in New South Wales; New South Wales - children must attend school from the age of six. NSW Department of Education, 2027 calendar: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December; school development days listed separately. IANA tz database: Australia/Sydney UTC+10 and UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Numbers stored as text, Newcastle benches. One OpenStreetMap Overpass query, snapshot 2026-10-07T12:59:01Z, amenity=bench in 32.955 to 32.915 degrees south and 151.740 to 151.800 degrees east: 191 benches. Seats tag on node 12693353736 ("3", also direction "240", material metal) and node 12822659424 ("6"). Python run 7 October 2026: "3" + "6" == "36"; int("3") + int("6") == 9; sorted(["3", "6", "240"]) == ["240", "3", "6"]; max(["3", "6", "240"]) == "6"; sorted as integers 3, 6, 240. Lesson family: data types, string concatenation versus addition, lexicographic versus numeric ordering, int() conversion.',
    requiredMentions: [
      '29,485',
      '31,667',
      '11,755',
      '137,303',
      '191 benches',
      '"3" + "6" gives "36"',
      '"240", "3", "6"',
      'Merewether, Maitland or Lake Macquarie',
      'Thursday 29 April'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Newcastle - Maitland (SUA 1025): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1025' },
      { claim: 'ABS Schools methodology 2025: first year name and NSW compulsory school age.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'NSW Department of Education, 2027 school calendar for students and development days.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'OpenStreetMap via the Overpass API: amenity=bench in the stated rectangle, snapshot 2026-10-07T12:59:01Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Any total number of benches in Newcastle: OpenStreetMap is incomplete and our rectangle is not a council boundary.',
      'Shares of benches with or without backrests: most benches carry no backrest tag, so no share is stated.',
      'Which beaches, parks or suburbs the two tagged benches stand in: not checked against an official source, so not named.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Newcastle, OpenStreetMap, the ABS or the NSW Department of Education.'
    ]
  }
};
