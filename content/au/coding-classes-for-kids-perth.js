'use strict';
// Coding classes for kids in Perth (cg- city page, Australia cluster Phase 6, kids intent only:
// Pre-primary to Year 8 and their parents). Teens and adults belong to
// online-coding-and-python-classes-in-perth-western-australia.
// Spine: reversing a list. From one OpenStreetMap Overpass query (snapshot 2026-10-07T12:58:00Z) for train
// route relations named like "Fremantle": relation 2033169 "Fremantle Line: Perth → Fremantle" lists 17
// stations from Perth to Fremantle; relation 14677731, named "Fremantle Line: Fremante → Perth" (sic), lists
// 17 stations back. Compared by us on 7 October 2026: the reversed outbound list matches the return list at
// 16 of 17 positions; the one mismatch (position 5) is "Cottlesloe" (sic) in the return list against "Cottesloe",
// and the return relation's own name spells Fremantle as "Fremante". Lesson family: reversing a list and
// comparing two lists position by position to catch a data typo; screened free site-wide on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Perth (GCCSA 5GPER):
// 2,116,647 people; median age 37; 570,121 families; 1.8 children in families with children; aged 0 to 4
// 129,598 (6.1%); 5 to 9 136,414 (6.4%; Australia 6.2%); 10 to 14 135,222 (6.4%); preschool 36,950.
// Department of Education WA, future term dates (Government Gazette): 2027 terms. ABS Schools methodology
// 2025: first year called pre-primary in Western Australia; start rule. IANA: Australia/Perth, no daylight saving.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'PERTH KIDS', label: 'Kids in Perth', blurb: 'Coding for Perth children from Pre-primary to Year 8, reversing the Fremantle line and catching a typo on the way home.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-perth',
  code: 'kper',
  accent: '#1C1E7E',
  accentRationale: 'Perth kids: a deep ocean blue chosen by hand (HSV saturation 0.78, value 0.49), at least 10.8 RGB units from every accent in use and 11.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Perth',
    eyebrow: 'Perth, Western Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Perth, for kids',
  title: 'Coding Classes for Kids in Perth | Pre-primary to Year 8',
  description: 'Live online coding classes for Perth kids from Pre-primary to Year 8: Scratch, games, first Python and AI basics, with a real teacher in small groups or one to one.',
  ogDescription: 'Coding for Perth children, with a project that reverses the Fremantle line and finds the one station that does not match.',
  twitterDescription: 'Coding classes for Perth kids, Pre-primary to Year 8, live online. First lesson free.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Perth Children',
    description: 'Level-matched block coding, Scratch and Roblox games, first Python and AI literacy for primary and lower secondary children across Greater Perth, taught live in English.'
  },

  h1: 'Coding classes for kids in Perth',
  capsuleQ: 'What are the best coding classes for kids in Perth?',
  capsule: 'Perth children from Pre-primary to Year 8 progress fastest with a live teacher, a small group at their own level and projects built on real Western Australian data. Greater Perth counted 136,414 children aged 5 to 9 in 2021. Our online classes take children from age 6, and the opening lesson is free.',
  lead: 'Ride the Fremantle line out to the coast and you pass seventeen stations. Ride it home and you pass the same seventeen, backwards. A program should be able to prove that: take the outbound list, reverse it, and check it against the list for the trip home. Our young Perth coders did exactly that with the station lists stored in OpenStreetMap. Sixteen stations matched perfectly. One did not, and the reason turned out to be one stray letter that nobody had noticed.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Perth.',

  picks: {
    eyebrow: 'Course picks for Perth kids',
    h2: 'Good places for a Perth child to begin',
    intro: 'Chosen by age and interest, then fine-tuned in the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding for beginners, from ordering instructions correctly to undoing them in reverse.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, Roblox and Minecraft, including a train game where the return journey runs the stations backwards.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python lists: adding, reversing, slicing and comparing them on real Perth data.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles about order, steps and checking, the thinking that sits underneath every program.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Perth children in the Census',
      h2: 'More young children than the national average',
      intro: 'Greater Perth figures from the 2021 Census QuickStats published by the ABS, quoted without any adding up of our own.',
      body: [
        { kind: 'table', caption: 'Children across Greater Perth, 2021 Census (ABS)', head: ['What was counted', 'Perth number'], rows: [
          ['Children aged 0 to 4', '129,598 (6.1%)'],
          ['Children aged 5 to 9', '136,414 (6.4%; Australia 6.2%)'],
          ['Children aged 10 to 14', '135,222 (6.4%)'],
          ['Attending preschool', '36,950'],
          ['Families', '570,121'],
          ['Median age', '37']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Above the national share', p: 'In 2021 children aged 5 to 9 were 6.4% of Greater Perth\'s people, compared with 6.2% nationally, and the 10 to 14 band matched that 6.4%.' },
          { h3: 'Pre-primary first', p: 'Western Australia calls the first school year Pre-primary. Our youngest Perth coders are six, typically in Pre-primary or Year 1, and begin with pictures and blocks.' },
          { h3: 'Two children, often', p: 'Perth families with children had 1.8 on average. Siblings regularly study with us, each placed in the group that suits their own progress.' }
        ] },
        { kind: 'p', text: 'One rule we show children from the start: census age bands are each adjusted separately to protect privacy, so they are not promised to sum to the published total. We report the published numbers and never construct a total from the pieces.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is the trip home just the trip out, reversed?',
      intro: 'The Fremantle line as two lists in OpenStreetMap, one for each direction, compared position by position after flipping one of them.',
      body: [
        { kind: 'table', caption: 'What we found on 7 October 2026 (our comparison of OpenStreetMap route data)', head: ['Check', 'Result'], rows: [
          ['Stations listed from Perth to Fremantle', '17'],
          ['Stations listed from Fremantle to Perth', '17'],
          ['Positions that match after reversing the outbound list', '16 of 17'],
          ['The mismatch', 'Cottesloe going out, but Cottlesloe on the way home'],
          ['A second slip in the same data', 'The return route is named Fremante instead of Fremantle'],
          ['First station out, last station home', 'Perth, both times'],
          ['The outbound list', 'Perth, City West, West Leederville, Subiaco, Daglish, Shenton Park, Karrakatta, Loch Street, Showgrounds, Claremont, Swanbourne, Grant Street, Cottesloe, Mosman Park, Victoria Street, North Fremantle, Fremantle']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Reverse the list', p: 'In Scratch, a loop reads the outbound list from the last item to the first. In Python, one short slice does the same job. Either way, Fremantle moves to the front and Perth to the back.' },
          { h3: '2. Compare position by position', p: 'Item 1 against item 1, item 2 against item 2, and so on. A loop counts how many pairs are identical and prints any pair that is not.' },
          { h3: '3. Read the odd one out', p: 'Position 4 shows Mosman Park against Mosman Park, then position 5 shows Cottesloe against Cottlesloe: the same station, with an extra letter in one list.' }
        ] },
        { kind: 'callout', h3: 'Why the computer was right to complain', p: 'To a person, Cottesloe and Cottlesloe look like the same word. To a program they are different strings, so the comparison fails. That is not the code being fussy; it is the code being honest. A list of names typed by people almost always contains a slip or two, and a reverse-and-compare check is one of the cheapest ways to find them.' },
        { kind: 'p', text: 'These comparisons are ours, made on an OpenStreetMap snapshot taken on 7 October 2026. OpenStreetMap is edited by volunteers, so the spelling slips we found may already have been corrected by the time you read this. We report only what the two route lists said that day and make no claim about timetables or which trains stop where.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Backwards and forwards at every age',
      intro: 'Reversing an order is one of the first ideas a young child can act out and one of the handiest a programmer uses.',
      body: [
        { kind: 'table', caption: 'Reversing and comparing, by year level', head: ['Year level', 'What children try', 'What it builds'], rows: [
          ['Pre-primary to Year 2', 'Line up toy carriages for the trip out, then rebuild the line for the trip home', 'Order, sequence and undoing steps'],
          ['Years 3 to 6', 'Read a Scratch list from the end with a counter that goes down instead of up', 'Lists, indexes and loops that count backwards'],
          ['Years 7 and 8', 'Reverse and compare the two Fremantle lists in Python, printing every mismatch', 'Slicing, comparing strings and testing real data']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Off by one', p: 'Counting down from 17 to 1 or from 16 to 0? Children meet the most common bug in programming, the one-step slip at the end of a list, and learn to check the first and last items every time.' },
          { h3: 'Same length first', p: 'Before comparing two lists, check they are the same length. If one had 18 stations, a position-by-position check would shift every name after the extra one.' },
          { h3: 'Report, do not fix', p: 'The program prints the mismatch rather than quietly changing a spelling. Deciding which spelling is correct is a job for a person who checks a source.' }
        ] },
        { kind: 'p', text: 'We have no connection with Transperth, the Public Transport Authority, OpenStreetMap or the Australian Bureau of Statistics, and none of them endorses this project. Census figures are the Bureau\'s; the list comparison is our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'The Western Australian school year',
      h2: 'Four terms on Perth time, with no clock changes',
      intro: 'Lessons fit around the Western Australian school year, and Perth\'s steady clock makes planning simple.',
      body: [
        { kind: 'table', caption: 'Western Australian public school terms in 2027, Department of Education (dates as published in the Government Gazette)', head: ['Term', 'From', 'To'], rows: [
          ['Term 1', 'Monday 1 February', 'Friday 9 April'],
          ['Term 2', 'Monday 26 April', 'Friday 2 July'],
          ['Term 3', 'Monday 19 July', 'Friday 24 September'],
          ['Term 4', 'Monday 11 October', 'Thursday 16 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'When children start', p: 'The ABS Schools methodology summarises the Western Australian rule: children must start school from the beginning of the year if they reach five years and six months during that year.' },
          { h3: 'Holidays by choice', p: 'Between terms, families decide whether lessons pause or continue. A single weekly lesson over a break keeps a project from going cold.' },
          { h3: 'The easiest time zone', p: 'Perth does not use daylight saving, so it stays two and a half hours ahead of India time all year. A 4pm Perth lesson is 1:30pm for our teachers.' }
        ] },
        { kind: 'spec', title: 'A term calendar is a list too', p: 'Write the four start dates in a list, reverse it, and you have the year counted down from December. Ask the program which term contains a given date and children quickly meet the question of whether the last day of a term is included.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From lining up carriages to reversing lists in Python',
    intro: 'Bands are a starting point. The free lesson finds the real one.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Order matters', p: 'Sequencing blocks, spotting the step that is in the wrong place and undoing moves in reverse.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch with lists', p: 'Games that store items in lists and read them forwards, backwards and in random order.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Worlds to build', p: 'Roblox and Minecraft projects with scores, inventories and simple rules.', courses: ['roblox-game-coding-for-kids-lua-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 12 to 14', h3: 'Python on real data', p: 'Lists, strings and comparisons applied to Perth maps and timetables, with maths alongside.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI tool have spotted Cottlesloe for a Perth child?',
    intro: 'Maybe, maybe not, and that uncertainty is exactly why the child needs to be able to check for themselves.',
    p1: 'AI tools are very good at reading past small spelling slips, which is helpful when you are chatting and unhelpful when you are checking data. A tool asked to compare the two station lists might decide Cottesloe and Cottlesloe are obviously the same and report a perfect match. The five-line program our children write cannot be that generous: different letters mean different strings, so it flags the slip every time.',
    p2: 'We want young Perth learners to know when to want a strict check and when a friendly guess is fine. In our lessons AI tools are used only in age-appropriate ways and with a teacher present, and children practise asking whether an answer was checked or simply assumed.',
    closer: 'That is why coding is still worth learning in 2026: it gives a child a way to check, not just a way to ask. A Perth child who found Cottlesloe by reversing a list already knows the difference.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Joondalup to Rockingham, one live classroom',
    intro: 'Greater Perth stretches a long way up and down the coast, and online lessons mean no one spends the afternoon in traffic.',
    cells: [
      { h3: 'What you need', p: 'A laptop or desktop with working sound. A parent nearby for the first lesson helps young children settle in.' },
      { h3: 'Western Australian terms', p: 'Teachers use the year names Perth children use, from Pre-primary onwards, so nothing sounds unfamiliar.' },
      { h3: 'A proper trial', p: 'One complete lesson to see how your child learns, followed by a course and time recommendation, with no card required.' },
      { h3: 'Groups', p: 'Fifteen to twenty children at the same stage, or one to one when that suits better.' },
      { h3: 'Regular rhythm', p: 'About eight lessons a month, normally two a week in the same slot.' },
      { h3: 'Teachers on India time', p: 'Perth is two and a half hours ahead of India time all year round, so after-school Perth lessons fall in the early afternoon of our teachers\' working day.' }
    ],
    spec: { title: 'One clock, all year', p: 'Because Western Australia keeps the same time all year, the gap to India never changes and a lesson booked for 4:30pm Perth time stays at 4:30pm Perth time from January to December.' }
  },

  fees: {
    h2: 'What coding classes cost for Perth kids',
    intro: 'Three prices and no fine print.',
    first: 'A full first lesson, free, finishing with a level, a course and a regular time.',
    group: 'Roughly eight lessons a month shared with fifteen to twenty children at the same level.',
    private: 'Roughly eight lessons a month with your child working one to one with the teacher.',
    closer: 'Outside India we charge everyone in US dollars at one rate, so it does not matter whether you are in the northern suburbs or down the coast towards Rockingham. The first invoice only follows the trial, once you are happy with the course and slot; the pricing page covers holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Unedited Google reviews from families and learners',

  book: {
    h2: 'Tell us about your Perth coder',
    intro: 'A Pre-primary child might start by putting blocks in order, a Year 4 child by reversing a Scratch list, and a Year 7 student by comparing station lists in Python. Mention the year level and something they love.',
    success: 'Thank you. We will be in touch soon about a class for your Perth child.'
  },

  faq: {
    h2: 'Questions from Perth parents',
    intro: 'What Perth families most often ask before the first lesson.',
    items: [
      { q: 'What age can my Perth child start coding?', a: 'Live classes start at age 6, which in Perth is usually Pre-primary or Year 1. The first lessons use blocks and pictures, with typing added later.' },
      { q: 'What does reversing a list mean in coding?', a: 'Reversing a list means putting its items in the opposite order, so the last becomes first. Programs reverse lists to undo steps, to read things from the end, or, as in our Perth project, to check a return journey against the outward one.' },
      { q: 'What is the Fremantle line project?', a: 'Children take the 17 Fremantle line stations stored in OpenStreetMap for each direction, reverse the outbound list and compare it with the return list. Sixteen positions match; the seventeenth reveals a spelling slip, Cottlesloe for Cottesloe.' },
      { q: 'Is a spelling mistake really a coding lesson?', a: 'Yes. Real data is typed by people and contains slips. Learning to compare lists exactly, print what differs and leave the decision to a person who checks is a skill used by every data-minded programmer.' },
      { q: 'Do you follow the Western Australian school year?', a: 'Yes. We use Western Australian year names from Pre-primary to Year 8 and plan around the public school terms, which in 2027 begin on Monday 1 February.' },
      { q: 'What time are lessons for Perth children?', a: 'After school on weekdays or at weekends, chosen in the free lesson and given in Perth time. With no daylight saving in Western Australia, the time never shifts.' },
      { q: 'Are online lessons safe for young children?', a: 'Lessons are live, small and supervised by the teacher throughout. We never ask children to make accounts on adult AI services, and parents can join any session.' },
      { q: 'Is there a Modern Age Coders centre in Perth?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Perth kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Perth families',
    html: 'Teenagers and adults in Perth have a separate page: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online coding and Python classes in Perth</a>. The state picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>, and families looking at the WA gifted tests can read <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">GATE and ASET maths practice</a>. For younger children see <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a>, and for everything else the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Perth and Western Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth, teens and adults' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Ages 9 and 10' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kper .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-kper .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-kper .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-kper .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-kper .cg-grid-3 { gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-kper .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kper .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kper .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-kper .cg-callout { border-left-width: 4px; }
.cg-root.cg-kper .cg-hero-grid { gap: clamp(1rem, 2.5vw, 2rem); }
`,

  dossier: {
    curriculumAuthority: 'Greater Perth, ABS Census 2021 QuickStats, GCCSA 5GPER (read 7 October 2026): 2,116,647 people; median age 37; 570,121 families; average number of children per family, for families with children, 1.8; age 0 to 4: 129,598 (6.1 percent); age 5 to 9: 136,414 (6.4 percent; Australia 6.2); age 10 to 14: 135,222 (6.4 percent); Preschool: 36,950 (5.8 percent of people attending an educational institution). Department of Education WA, future term dates (as published in the Western Australian Government Gazette), 2027: Term 1 Monday 1 February to Friday 9 April; Term 2 Monday 26 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Thursday 16 December. ABS Schools methodology 2025: Pre-Year 1 known as pre-primary in Western Australia; children must start school from the beginning of the year if they are to reach the age of five years and six months during the year. IANA tz database: Australia/Perth UTC+8 with no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Reverse-and-compare on the Fremantle line. One OpenStreetMap Overpass query, snapshot 2026-10-07T12:58:00Z: relation 2033169 "Fremantle Line: Perth → Fremantle", stop members in order (17): Perth, City West, West Leederville, Subiaco, Daglish, Shenton Park, Karrakatta, Loch Street, Showgrounds, Claremont, Swanbourne, Grant Street, Cottesloe, Mosman Park, Victoria Street, North Fremantle, Fremantle. Relation 14677731 "Fremantle Line: Fremante → Perth" (17): identical to the reversed outbound list except position 5, "Cottlesloe" against "Cottesloe". Reversed outbound vs return: 16 of 17 positions equal. Lesson family: reversing a list, position-by-position comparison and reporting (not fixing) data typos.',
    requiredMentions: [
      '129,598',
      '135,222',
      '36,950',
      'Cottlesloe',
      'Fremante',
      '16 of 17',
      'West Leederville',
      'Karrakatta',
      'Mosman Park against Mosman Park'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Perth (5GPER): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5GPER' },
      { claim: 'Department of Education WA, future term dates for public schools, 2027 (Government Gazette dates).', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'ABS Schools methodology 2025: first year name and Western Australian school start rule.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'OpenStreetMap via the Overpass API: Fremantle line route relations 2033169 and 14677731, snapshot 2026-10-07T12:58:00Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'School Curriculum and Standards Authority pages returned a Cloudflare 403 and were not circumvented, so no SCSA facts are used.',
      'Timetables, train frequencies or which services stop at Showgrounds: not read and not claimed.',
      'That the spelling slips are still in OpenStreetMap: volunteers may have corrected them after our 7 October 2026 snapshot.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transperth, the Public Transport Authority, OpenStreetMap, the ABS or the WA Department of Education.'
    ]
  }
};
