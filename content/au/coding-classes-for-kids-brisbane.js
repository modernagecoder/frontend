'use strict';
// Coding classes for kids in Brisbane (cg- city page, Australia cluster Phase 6, kids intent only:
// Prep to Year 8 and their parents). Teens and adults belong to best-coding-classes-in-brisbane.
// Spine: counting letters with a dictionary. From one OpenStreetMap Overpass query (snapshot
// 2026-10-07T12:58:00Z) for amenity=ferry_terminal in a rectangle we chose along the river (27.560 to 27.380
// degrees south, 152.950 to 153.130 east): 40 map entries carrying 26 distinct names (one blank). Many stops
// appear twice or three times (Bulimba three times), so the names were de-duplicated first. We set aside the
// blank name, Brisbane Cruise Terminal and Tangalooma Ferry Terminal, leaving 23 stop names along the river.
// Counted by us on 7 October 2026 (scratchpad au/c2): 245 letters; ignoring capitals, t 25, r 24, e 24, a 23,
// o 15; counting capitals separately, e 23 and t 23 tie (capital T in QUT Gardens Point and Teneriffe); first
// letters H, M and N tie on 3 names each; j, x and z never appear; Q appears 3 times, always as a capital.
// Lesson family: letter frequency with a dictionary, de-duplication before counting, case and ties.
// Screened free site-wide on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Brisbane (GCCSA 3GBRI):
// 2,526,238 people; median age 36; 674,188 families; 1.8 children in families with children; aged 0 to 4
// 150,503 (6.0%); 5 to 9 165,679 (6.6%; Australia 6.2%); 10 to 14 167,962 (6.6%); preschool 44,957.
// Queensland Department of Education future school dates (education.qld.gov.au): 2027 terms and holidays.
// India time offsets from the IANA time zone database (Australia/Brisbane has no daylight saving).
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BRISBANE KIDS', label: 'Kids in Brisbane', blurb: 'Coding for Brisbane children from Prep to Year 8, with a project that counts the letters in the river\'s ferry stop names.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-brisbane',
  code: 'kbne',
  accent: '#844026',
  accentRationale: 'Brisbane kids: a warm river-mud rust chosen by hand (HSV saturation 0.71, value 0.52), at least 10.8 RGB units from every accent in use and 6.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Brisbane',
    eyebrow: 'Brisbane, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Brisbane, for kids',
  title: 'Coding Classes for Kids in Brisbane | Prep to Year 8 Online',
  description: 'Live online coding classes for Brisbane kids in Prep to Year 8: Scratch, game making, first Python and AI basics with a real teacher, in groups or one to one.',
  ogDescription: 'Coding for Brisbane children, with a project that counts every letter in 23 river ferry stop names and finds a three-way tie.',
  twitterDescription: 'Coding classes for Brisbane kids, Prep to Year 8, live online. First lesson free.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Brisbane Children',
    description: 'Level-matched block coding, Scratch games, first Python and AI literacy for primary and lower secondary children across Greater Brisbane, taught live in English.'
  },

  h1: 'Coding classes for kids in Brisbane',
  capsuleQ: 'What are the best coding classes for kids in Brisbane?',
  capsule: 'Brisbane children in Prep to Year 8 do well with a live teacher, a handful of classmates at a similar stage and projects that use real local data. The 2021 Census counted 165,679 children aged 5 to 9 in Greater Brisbane. Lessons happen live online from age 6 upwards, and a trial lesson comes free of charge.',
  lead: 'Read the names of Brisbane\'s ferry stops out loud and you will hear a lot of Ts. Hawthorne, Teneriffe, Riverside, Howard Smith Wharves: is T really the most common letter, or does it only feel that way? A program can settle it in a few lines. Our young Brisbane coders take the 23 stop names along the river from OpenStreetMap, count every letter with a dictionary, and discover that the answer depends on a question they never thought to ask: does a capital T count the same as a small one?',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Brisbane.',

  picks: {
    eyebrow: 'Course picks for Brisbane kids',
    h2: 'Good first courses for a Brisbane child',
    intro: 'Matched to age and to what the child enjoys building. The free first lesson settles the level before anything else.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding from first sequences to small games, with plenty of talking about what each block will do.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch projects with variables and lists, including a letter counter that tallies the ferry stop names.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Ages 9 to 13', note: 'Roblox games written in Luau, with scores, timers and a server that checks what the player claims.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, where a dictionary turns a long list of names into a neat table of counts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Brisbane children in the Census',
      h2: 'A young city, with older children slightly ahead',
      intro: 'Taken from the ABS QuickStats summary for the Greater Brisbane capital city area. Each number is printed as published, with nothing added together by us.',
      body: [
        { kind: 'table', caption: 'Greater Brisbane children, Census 2021 (ABS QuickStats)', head: ['Census item', 'Brisbane figure'], rows: [
          ['Aged 0 to 4', '150,503, or 6.0% of residents'],
          ['Aged 5 to 9', '165,679, or 6.6% (Australia 6.2%)'],
          ['Aged 10 to 14', '167,962, or 6.6%'],
          ['People attending preschool', '44,957'],
          ['Families', '674,188'],
          ['Median age of residents', '36']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More children than average', p: 'Both the 5 to 9 and 10 to 14 bands were 6.6% of Greater Brisbane\'s residents, above the national 6.2% for 5 to 9 year olds. Brisbane has plenty of primary-age learners.' },
          { h3: 'A younger median', p: 'Half of Greater Brisbane\'s residents were 36 or younger at the Census, which matches what we hear from families: busy households, school runs and after-school sport.' },
          { h3: 'Room for siblings', p: 'Families with children had 1.8 children on average, so brothers and sisters often learn with us at the same time, usually in different groups set by level rather than age.' }
        ] },
        { kind: 'p', text: 'A habit we pass on to children early: each age band in a census table is adjusted on its own to protect privacy, so the bands do not have to add up exactly to the published total. We quote the published numbers and never invent a total by adding the pieces.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which letter is most common in Brisbane\'s ferry stop names?',
      intro: 'Every ferry stop name along the river in OpenStreetMap, counted letter by letter with a Python dictionary or a pair of Scratch lists.',
      body: [
        { kind: 'table', caption: 'What we counted on 7 October 2026 (our calculation from OpenStreetMap)', head: ['Question', 'Answer'], rows: [
          ['Map entries tagged as ferry terminals in our rectangle', '40'],
          ['Different names among them', '26, so many stops were listed more than once'],
          ['Stop names kept for counting', '23 river stops'],
          ['Letters in those 23 names', '245'],
          ['Most common letter, ignoring capitals', 't, 25 times'],
          ['Most common letter, counting capitals separately', 'a tie: e and t, 23 times each'],
          ['Letters that never appear', 'j, x and z']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count each stop once', p: 'Bulimba appears three times in the map data and many others twice, because a terminal can be drawn as both a point and a shape. Counting before removing repeats would give the wrong totals.' },
          { h3: '2. A box for every letter', p: 'A dictionary works like a row of labelled boxes. Each time the program meets a letter, it adds one to that letter\'s box, creating the box the first time it is needed.' },
          { h3: '3. Decide what counts as the same', p: 'Counted exactly as written, capital T in QUT Gardens Point and Teneriffe is a different symbol from small t, and e catches up to tie. Lower-case everything first and t wins with 25.' }
        ] },
        { kind: 'callout', h3: 'A three-way tie for first letters', p: 'Counting only the first letter of each name gives another surprise: H, M and N each start three names (Hawthorne, Holman Street, Howard Smith Wharves; Maritime Museum, Milton, Mowbray Park; New Farm Park, North Quay, Northshore Hamilton). A program that reports one winner has quietly made a choice about ties. Children decide whether to report all three, the first alphabetically or the first found, and write that rule down.' },
        { kind: 'p', text: 'The counts are ours, from an OpenStreetMap snapshot taken on 7 October 2026. OpenStreetMap is mapped by volunteers and a name may be missing or out of date. We set aside two large terminals, the Brisbane Cruise Terminal and the Tangalooma Ferry Terminal, and two entries with no name, so the list is the stops along the river only; the rectangle is our choice, not an official boundary.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Counting, three ways, at three ages',
      intro: 'One question, shrunk or stretched to fit: tally marks for the youngest, a dictionary by Year 8.',
      body: [
        { kind: 'table', caption: 'Letter counting, by stage', head: ['Year level', 'Activity', 'The idea underneath'], rows: [
          ['Prep to Year 2', 'Reads five stop names aloud and makes tally marks for each T they hear', 'Listening, counting and the difference between a sound and a letter'],
          ['Years 3 to 6', 'Uses two Scratch lists, one of letters and one of counts, and a loop that adds one each time', 'Lists, loops and keeping two lists in step'],
          ['Years 7 and 8', 'Writes a Python dictionary over all 23 names, then compares counts with and without capitals', 'Dictionaries, de-duplication with a set and deciding what counts as the same']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Spaces are not letters', p: 'Howard Smith Wharves has two spaces. Programs that count every character include them by mistake, so children learn to check whether a character is a letter before counting it.' },
          { h3: 'Capitals carry meaning', p: 'Q appears three times in the names and always as a capital: in QUT Gardens Point, North Quay and UQ St Lucia. Changing case to compare letters is fine; changing it in the names themselves is not.' },
          { h3: 'Checking the total', p: 'Every count added together must equal the 245 letters counted directly. If it does not, a letter was missed or counted twice, and the child goes looking for it.' }
        ] },
        { kind: 'p', text: 'This project has no link to Translink, RiverCity Ferries or OpenStreetMap, nor to the ABS, and none of them has approved it. Census figures are the Bureau\'s own; the letter counts are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'The Queensland school year',
      h2: 'Prep to Year 8 on the Queensland calendar',
      intro: 'Lessons follow Queensland\'s school year, so holidays and busy weeks are planned rather than missed.',
      body: [
        { kind: 'table', caption: 'Queensland state school terms in 2027, Queensland Department of Education', head: ['Term', 'Dates', 'Length'], rows: [
          ['Term 1', 'Wednesday 27 January to Thursday 25 March', '9 weeks'],
          ['Term 2', 'Monday 12 April to Friday 25 June', '11 weeks'],
          ['Term 3', 'Monday 12 July to Friday 17 September', '10 weeks'],
          ['Term 4', 'Tuesday 5 October to Friday 10 December', '10 weeks']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Prep is the first year', p: 'Queensland calls its first full-time school year Prep. Our youngest Brisbane learners are six, often in Prep or Year 1, and begin with blocks and pictures rather than typing.' },
          { h3: 'A long summer break', p: 'The department lists the 2027 to 2028 summer holidays as 44 days, from Saturday 11 December to Sunday 23 January. Some families keep one lesson a week going so skills do not fade.' },
          { h3: 'Same clock all year', p: 'Queensland does not use daylight saving, so Brisbane stays four and a half hours ahead of India time all year and lesson times never jump.' }
        ] },
        { kind: 'spec', title: 'A term table is a data puzzle too', p: 'Term 1 runs for 9 weeks and Term 2 for 11, so not every term is the same length. Children who try to work out the number of school days quickly meet the same questions programmers ask: is the last day included, and do staff days count?' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tally marks to a Python dictionary',
    intro: 'The bands are a starting guide. The free lesson decides the real level.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Blocks and patterns', p: 'Sequences, repeats and simple events, with lots of predicting before pressing go.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch with lists', p: 'Games and counters that use variables and lists, including the ferry stop letter tally.', courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Ages 10 to 12', h3: 'Games with rules', p: 'Roblox and Minecraft worlds with scoring, timers and fair-play checks.', courses: ['roblox-game-coding-for-kids-lua-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 12 to 14', h3: 'Typed code', p: 'Python dictionaries and loops on real data, with maths and coding side by side.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI tool can count letters, why should a Brisbane child learn how?',
    intro: 'Because the tool still has to be told whether a capital T counts, and a child who has never met that question will not think to ask it.',
    p1: 'An AI helper will happily write a letter counter. Whether its answer is t or a tie between e and t depends on choices it makes silently: lower-casing or not, counting spaces or not, removing repeated stops or not. Each choice is reasonable and each gives a different answer. A child who has built the counter by hand recognises those choices in someone else\'s code straight away.',
    p2: 'That is the real point of teaching young Brisbane coders: not to beat a computer, but to read a program and spot the decision hiding inside it. In our classes children use AI tools only in age-appropriate ways and always with a teacher, and they practise asking what a tool assumed before trusting what it says.',
    closer: 'Coding still matters in 2026 because someone has to decide what the question really is. A child who found the e and t tie by counting capitals separately has already started doing that.',
    blogAnchor: 'why children should still learn to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the bayside to the western suburbs, the same live lesson',
    intro: 'Greater Brisbane covers a lot of ground, and the school pick-up rush is busy enough without a drive to a class. Lessons come to your home instead.',
    cells: [
      { h3: 'Just a computer', p: 'A laptop or desktop, sound that works and a calm spot. Tablets are fine for the youngest children for a short while, but a keyboard helps soon after.' },
      { h3: 'Queensland words', p: 'Teachers use the year levels Brisbane children use at school, from Prep onwards, so lessons feel familiar.' },
      { h3: 'First lesson free', p: 'Your child finishes a small project in session one. Afterwards we recommend where to start and which weekday suits, and we never ask for card details.' },
      { h3: 'Matched groups', p: 'Five to ten children at the same stage, or one to one if that suits your child better.' },
      { h3: 'A steady rhythm', p: 'About eight lessons a month, usually two a week in a fixed slot that fits around sport and homework.' },
      { h3: 'Teachers on India time', p: 'Brisbane is four and a half hours ahead of India time all year, so a 4pm Brisbane lesson falls at 11:30am in India, in the middle of our teachers\' day.' }
    ],
    spec: { title: 'No daylight saving to worry about', p: 'Because Queensland keeps the same clock all year, a Brisbane lesson time agreed in March is still the same time in December. Times are always confirmed in Brisbane time.' }
  },

  fees: {
    h2: 'What coding classes cost for Brisbane kids',
    intro: 'Three prices and nothing tucked away.',
    first: 'A complete first lesson at no charge, finishing with a level, a course and a weekly time.',
    group: 'A month of teaching, usually eight lessons, with five to ten children at the same level.',
    private: 'Around eight lessons a month with one teacher and your child alone.',
    closer: 'Families outside India pay in US dollars at a single rate, so it makes no difference whether you live in the inner north or out past Ipswich. Nothing is charged until you have seen the trial and picked a slot. Holidays, absences and a change from group to private are all covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students, word for word',

  book: {
    h2: 'Tell us about your child',
    intro: 'A Prep child might start by guiding a character with blocks, a Year 5 child by counting letters in Scratch, and a Year 8 student by writing a dictionary in Python. Share your child\'s year level and a favourite hobby.',
    success: 'Thank you. We will be in touch soon about a class for your Brisbane child.'
  },

  faq: {
    h2: 'Questions from Brisbane parents',
    intro: 'What Brisbane families usually ask before booking.',
    items: [
      { q: 'What age can my child start coding in Brisbane?', a: 'Our live classes start at age 6, usually in Prep or Year 1. Younger learners begin with blocks and pictures, and typing comes later.' },
      { q: 'What is a dictionary in coding?', a: 'A dictionary is a way of storing pairs: a label and a value, such as a letter and how many times it has appeared. A program can look up a label instantly and change its value, which makes dictionaries ideal for counting.' },
      { q: 'What is the Brisbane ferry letters project?', a: 'Children take 23 ferry stop names along the river from OpenStreetMap, remove repeated entries, and count every letter with a dictionary. Ignoring capitals, t wins with 25; counting capitals separately, e and t tie on 23.' },
      { q: 'Why do the answers change with capitals?', a: 'Because to a computer a capital T and a small t are different symbols. QUT Gardens Point and Teneriffe contain capital Ts, so counting exactly as written moves two of t\'s 25 into a separate box.' },
      { q: 'Do you follow the Queensland school year?', a: 'Yes. We use Queensland year levels from Prep to Year 8 and plan around the Queensland state school terms, which in 2027 begin on Wednesday 27 January.' },
      { q: 'What time are lessons for Brisbane children?', a: 'After school on weekdays or on weekends, agreed during the free lesson and stated in Brisbane time. Brisbane has no daylight saving, so the time stays the same all year.' },
      { q: 'How do you keep young children safe online?', a: 'Every session is live with a teacher watching the whole group, no child is asked to open an account on a grown-up AI service, and a parent can stay in the room for as long as they like.' },
      { q: 'Is there a Modern Age Coders centre in Brisbane?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Brisbane kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Brisbane families',
    html: 'Teenagers and adults in Brisbane have their own page: <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">coding classes in Brisbane</a>. For the state picture see <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>. Parents of younger children can also read <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a> and <a class="cg-inline-link" href="/kids-coding-languages-australia">which coding language suits a child</a>. Everything else hangs off the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brisbane and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane, teens and adults' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Ages 9 and 10' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kbne .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-kbne .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-kbne .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-kbne .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-kbne .cg-grid-3 { gap: clamp(1rem, 2vw, 1.8rem); }
.cg-root.cg-kbne .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-kbne .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kbne .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-kbne .cg-callout { border-left-width: 5px; }
.cg-root.cg-kbne .cg-hero-grid { gap: clamp(1rem, 3vw, 2.4rem); }
`,

  dossier: {
    curriculumAuthority: 'Greater Brisbane, ABS Census 2021 QuickStats, GCCSA 3GBRI (read 7 October 2026): 2,526,238 people; median age 36; 674,188 families; average number of children per family, for families with children, 1.8; age 0 to 4: 150,503 (6.0 percent); age 5 to 9: 165,679 (6.6 percent; Australia 6.2); age 10 to 14: 167,962 (6.6 percent); Preschool: 44,957 (5.7 percent of people attending an educational institution). Queensland Department of Education, future school dates (education.qld.gov.au/about-us/calendar/future-dates): 2027 Term 1 Wednesday 27 January to Thursday 25 March (9 weeks), Term 2 Monday 12 April to Friday 25 June (11 weeks), Term 3 Monday 12 July to Friday 17 September (10 weeks), Term 4 Tuesday 5 October to Friday 10 December (10 weeks); Term 4 holidays Saturday 11 December to Sunday 23 January 2028 (44 days). IANA tz database: Australia/Brisbane UTC+10 with no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Letter frequency of Brisbane river ferry stop names. One OpenStreetMap Overpass query, snapshot 2026-10-07T12:58:00Z, amenity=ferry_terminal in 27.560 to 27.380 degrees south and 152.950 to 153.130 degrees east: 40 entries, 26 distinct names including one blank; repeats such as Bulimba (3), Sydney Street, Riverside, New Farm Park, Hawthorne (2 each). Excluded: blank names, Brisbane Cruise Terminal, Tangalooma Ferry Terminal. Kept 23 names, 245 letters. Case-insensitive: t 25, r 24, e 24, a 23, o 15. Case-sensitive: e 23, t 23 (capital T in QUT Gardens Point and Teneriffe). First letters: H, M, N 3 each. Never used: j, x, z. Q appears 3 times, all capitals (QUT Gardens Point, North Quay, UQ St Lucia). Lesson family: letter frequency with a dictionary, de-duplication with a set, case normalisation and tie rules.',
    requiredMentions: [
      '150,503',
      '167,962',
      '44,957',
      'Mowbray Park',
      'Howard Smith Wharves',
      'QUT Gardens Point',
      'Northshore Hamilton',
      '245 letters',
      'j, x and z'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Brisbane (3GBRI): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3GBRI' },
      { claim: 'OpenStreetMap via the Overpass API: amenity=ferry_terminal entries in the stated rectangle, snapshot 2026-10-07T12:58:00Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'Queensland Department of Education, future school dates: 2027 terms, term lengths and holidays.', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'IANA time zone database, Australia/Brisbane (no daylight saving) and Asia/Kolkata offsets.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Queensland Curriculum and Assessment Authority pages returned a Cloudflare 403 and were not circumvented, so no QCAA facts are used.',
      'Ferry timetables, routes or passenger numbers: not read, and not claimed.',
      'That the 23 names are every stop on the network: OpenStreetMap is incomplete and the rectangle is our choice.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, RiverCity Ferries, OpenStreetMap, the ABS or the Queensland Department of Education.'
    ]
  }
};
