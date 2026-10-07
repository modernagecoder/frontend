'use strict';
// Coding classes for kids on the Gold Coast (cg- city page, Australia cluster Phase 6, kids intent only:
// Prep to Year 8 and their parents). Teens and adults are served by the Queensland page until a Gold Coast
// teen/adult page exists.
// Spine: a stem-and-leaf plot. From one OpenStreetMap Overpass query (snapshot 2026-10-07T16:38:38Z) for light
// rail route relations in 28.200 to 27.900 degrees south, 153.300 to 153.500 east: relation 6363673
// "L1 G:Link: Helensvale → Burleigh Heads" lists 27 stops. Straight-line gaps between neighbouring stops,
// measured by us on 7 October 2026 (haversine, R = 6,371,008.8 m): 26 gaps, shortest 340 m (Southport South to
// Broadwater Parklands), longest 3,008 m (Helensvale to Parkwood), median 823 m, mean 959.9 m; Helensvale to
// Burleigh Heads in a straight line 21,377 m. Stem-and-leaf (stem = hundreds of metres, leaf = tens):
// 3|4, 4|3 3 6, 5|1 2 5 8 8, 6|0, 7|7 8, 8|0 3 5, 9|5 7, 10|2 6, 11|9, 12|1, 13|0 8, 16|1, 21|1, 30|0.
// Lesson family: stem-and-leaf plots, median versus mean with a long tail; screened free site-wide (the phrase
// appears only in course syllabi) on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Gold Coast - Tweed Heads (Significant
// Urban Area 3007): 693,596 people; median age 40; 186,286 families; 1.8 children in families with children;
// aged 0 to 4 36,727 (5.3%); 5 to 9 41,429 (6.0%; Australia 6.2%); 10 to 14 42,914 (6.2%); preschool 12,741.
// Queensland Department of Education future school dates (2027 holidays). ABS Schools methodology 2025 (Qld:
// preparatory year; school from six years and six months). IANA: Australia/Brisbane, no daylight saving.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GOLD COAST KIDS', label: 'Kids on the Gold Coast', blurb: 'Coding for Gold Coast children from Prep to Year 8, drawing the gaps between G:link stops as a stem-and-leaf plot.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-gold-coast',
  code: 'kgcs',
  accent: '#941C3A',
  accentRationale: 'Gold Coast kids: a deep coral red chosen by hand (HSV saturation 0.81, value 0.58), at least 10.8 RGB units from every accent in use and 6.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Gold Coast',
    eyebrow: 'Gold Coast, Queensland, Australia',
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
  routeLabel: 'Gold Coast, for kids',
  title: 'Coding Classes for Kids on the Gold Coast | Prep to Year 8',
  description: 'Live online coding classes for Gold Coast kids from Prep to Year 8: Scratch, games, first Python and AI basics, taught by a real teacher in groups or one to one.',
  ogDescription: 'Coding for Gold Coast children, with a stem-and-leaf plot of the gaps between 27 G:link stops from Helensvale to Burleigh Heads.',
  twitterDescription: 'Coding classes for Gold Coast kids, Prep to Year 8, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Gold Coast Children',
    description: 'Level-matched block coding, Scratch games, maths through coding and first Python for primary and lower secondary children across the Gold Coast, taught live in English.'
  },

  h1: 'Coding classes for kids on the Gold Coast',
  capsuleQ: 'What are the best coding classes for kids on the Gold Coast?',
  capsule: 'Gold Coast children from Prep to Year 8 thrive with a live teacher, a small group at their own level and projects that use the coast they know. The Gold Coast and Tweed Heads urban area counted 41,429 children aged 5 to 9 in 2021. Classes are online from age 6, and the first one is free.',
  lead: 'Ride the G:link from Helensvale to Burleigh Heads and some stops arrive almost at once while others take a while. Children notice; a stem-and-leaf plot proves it. We measured the straight-line gap between each pair of neighbouring stops in OpenStreetMap, 26 gaps in all, and our young Gold Coast coders sort them into a plot that shows every number and the shape of the whole set at once. Most gaps sit between 400 and 1,000 metres. One stretches past 3 kilometres, and that single long gap is enough to pull the average well above the middle value.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child on the Gold Coast.',

  picks: {
    eyebrow: 'Course picks for Gold Coast kids',
    h2: 'Starting points for a Gold Coast child',
    intro: 'Matched to age and to what your child likes making. The first lesson is free and sets the level.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games with a gentle, supervised introduction to AI helpers, always explained and checked by the child.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch projects with lists and sorting, including a stem-and-leaf plot drawn by a sprite.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 14', note: 'Median, mean and spread worked out by code on real Gold Coast data, then explained in words.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'First programs with blocks: order, repeats and simple counting, for children just starting out.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gold Coast children in the Census',
      h2: 'More children aged 10 to 14 than under 5',
      intro: 'The ABS 2021 Census QuickStats for the Gold Coast - Tweed Heads significant urban area, quoted figure by figure.',
      body: [
        { kind: 'table', caption: 'Gold Coast - Tweed Heads, children in the 2021 Census (ABS)', head: ['Census line', 'Gold Coast - Tweed Heads'], rows: [
          ['Aged 0 to 4', '36,727 (5.3%)'],
          ['Aged 5 to 9', '41,429 (6.0%; Australia 6.2%)'],
          ['Aged 10 to 14', '42,914 (6.2%)'],
          ['People attending preschool', '12,741'],
          ['Families', '186,286'],
          ['Median age', '40']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Older children lead', p: 'Children aged 10 to 14 outnumbered those under 5 by several thousand in 2021, so the area has plenty of upper-primary and early high school learners ready for typed code.' },
          { h3: 'Prep first', p: 'Queensland calls the first year of school Prep. Our youngest Gold Coast learners are six, usually in Prep or Year 1, and start with blocks.' },
          { h3: 'Siblings together', p: 'Families with children averaged 1.8 of them, and brothers and sisters often join us at the same time, in separate groups by level.' }
        ] },
        { kind: 'p', text: 'Census bands carry their own small privacy adjustments, which means adding them up need not reproduce the published total. We print the published values and never make a total of our own from them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far apart are the G:link stops, and what does a stem-and-leaf plot show?',
      intro: 'Twenty-seven stops from Helensvale to Burleigh Heads in OpenStreetMap, 26 gaps measured between neighbours, sorted and drawn.',
      body: [
        { kind: 'table', caption: 'Gaps between neighbouring G:link stops, as a stem-and-leaf plot (our calculation from OpenStreetMap, 7 October 2026). Stem: hundreds of metres. Leaf: tens of metres. 5 | 8 means about 580 metres.', head: ['Stem (hundreds of metres)', 'Leaves (tens of metres)'], rows: [
          ['3', '4'],
          ['4', '3 3 6'],
          ['5', '1 2 5 8 8'],
          ['6', '0'],
          ['7', '7 8'],
          ['8', '0 3 5'],
          ['9', '5 7'],
          ['10', '2 6'],
          ['11', '9'],
          ['12', '1'],
          ['13', '0 8'],
          ['16', '1'],
          ['21', '1'],
          ['30', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Shortest and longest', p: 'The shortest gap is 340 metres, between Southport South and Broadwater Parklands. The longest is 3,008 metres, between Helensvale and Parkwood at the northern end.' },
          { h3: 'The middle value', p: 'With 26 gaps sorted, the middle sits between the 13th and 14th, 808 and 838 metres, so the median is 823 metres.' },
          { h3: 'The average', p: 'Add all 26 gaps and divide by 26 and you get 959.9 metres, well above the median, because a few long gaps in the north pull it up.' }
        ] },
        { kind: 'callout', h3: 'Why the plot beats a single number', p: 'A stem-and-leaf plot keeps every value while showing the shape. Most leaves bunch between stems 4 and 9, then the stems thin out and jump to 16, 21 and 30. That tail is why the mean and median disagree. A child who sees the plot can explain the difference without a formula: a few big gaps make the average look longer than a typical trip between stops.' },
        { kind: 'p', text: 'All gaps are our calculations from the stop positions in an OpenStreetMap snapshot taken on 7 October 2026. They are straight lines between stop points, not the distance along the track, and OpenStreetMap is mapped by volunteers. We make no claim about travel times or timetables. From Helensvale to Burleigh Heads in a straight line is 21,377 metres, less than the gaps added together, because the line bends.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Sorting numbers into a picture, at every age',
      intro: 'Stem-and-leaf plots grow from sorting and place value, so younger children can start with blocks and older ones finish with Python.',
      body: [
        { kind: 'table', caption: 'From sorting to stem-and-leaf, by year level', head: ['Year level', 'Task', 'Takeaway'], rows: [
          ['Prep to Year 2', 'Sorts number cards into rows by their tens digit', 'Place value and grouping'],
          ['Years 3 to 6', 'Builds a Scratch program that sorts a list of distances and prints each stem with its leaves', 'Sorting, splitting a number into parts and loops inside loops'],
          ['Years 7 and 8', 'Measures the G:link gaps in Python, draws the plot and compares mean with median', 'Distances from coordinates, sorted lists and choosing the right average']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Splitting a number', p: 'Turning 582 into a stem of 5 and a leaf of 8 uses whole-number division and remainders, which children meet in maths and then put to work in code.' },
          { h3: 'Empty stems matter', p: 'There are no gaps in the 1,400s or 1,500s, so those stems are missing. Older children argue about whether to show empty stems, and learn that showing them makes the gap in the data visible.' },
          { h3: 'Check the count', p: 'The plot must contain exactly 26 leaves, one per gap. If a leaf is missing or doubled, the child goes looking for the bug before trusting the picture.' }
        ] },
        { kind: 'p', text: 'This project belongs to us and has no link with Translink, the G:link operator, OpenStreetMap or the ABS; none of them has endorsed it. The census figures are the ABS\'s; the gaps and the plot are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'The Queensland school year',
      h2: 'Holidays and terms on the coast',
      intro: 'Gold Coast families follow Queensland\'s school calendar, and lessons are planned around its breaks.',
      body: [
        { kind: 'table', caption: 'Queensland state school holidays after each 2027 term, Queensland Department of Education', head: ['Holiday', 'Dates', 'Length'], rows: [
          ['After Term 1', 'Friday 26 March to Sunday 11 April', '17 days'],
          ['After Term 2', 'Saturday 26 June to Sunday 11 July', '16 days'],
          ['After Term 3', 'Saturday 18 September to Monday 4 October', '17 days'],
          ['After Term 4', 'Saturday 11 December to Sunday 23 January 2028', '44 days']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'When school becomes compulsory', p: 'The ABS Schools methodology records the Queensland rule: children must attend school from the age of six years and six months.' },
          { h3: 'Summer projects', p: 'The long summer break suits a bigger project. Some children keep one lesson a week going and finish a game over the holidays.' },
          { h3: 'No clock changes', p: 'Summer or winter, Gold Coast clocks sit exactly 4.5 hours in front of India time, because the state never switches to daylight saving.' }
        ] },
        { kind: 'spec', title: 'Holidays as data', p: 'The holiday lengths in the table, 17, 16, 17 and 44 days, make a tiny data set of their own. Ask a Year 6 child for the median and the mean and the long summer break plays the same role as the 3-kilometre G:link gap.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to plotting data',
    intro: 'The bands are a guide. The free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Order and groups', p: 'Sequencing, sorting and repeats with blocks, plus lots of talking about patterns.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch with data', p: 'Games and charts that sort lists and count items, with a careful first look at AI helpers.', courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Ages 10 to 12', h3: 'Averages and spread', p: 'Mean, median and range worked out by code and checked by hand.', courses: ['maths-through-coding', 'mental-maths-mastery-kids'] },
      { band: 'Ages 12 to 14', h3: 'First Python', p: 'Coordinates, distances and plots using real Gold Coast data.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI tool can find the average, why should a Gold Coast child learn to plot the data?',
    intro: 'Because an average on its own can mislead, and a child who has drawn the plot knows when to ask for the median too.',
    p1: 'Ask an AI tool for the typical gap between G:link stops and it may simply give the mean, 959.9 metres, and sound certain. The stem-and-leaf plot shows why that number is a little misleading: most gaps are shorter, and a handful of long ones in the north drag it up. A child who has built the plot will ask for the median, 823 metres, and explain the difference.',
    p2: 'We want young Gold Coast coders to treat a single number with healthy curiosity. In our lessons, AI tools appear only in age-appropriate ways and with a teacher present, and children practise asking what a summary hides as well as what it says.',
    closer: 'That is a strong reason to keep learning to code in 2026: it lets a child look behind a number. A Gold Coast child who has drawn 26 gaps as stems and leaves already does.',
    blogAnchor: 'the longer argument for learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Coomera to Coolangatta, one online classroom',
    intro: 'The Gold Coast runs a long way along the coast, and an online lesson keeps the afternoon free of the highway.',
    cells: [
      { h3: 'Equipment', p: 'A laptop or desktop with sound is ideal; for the very first lesson a parent nearby helps a young child settle.' },
      { h3: 'Queensland year names', p: 'Teachers use the words Gold Coast children hear at school, starting with Prep.' },
      { h3: 'A free first lesson', p: 'Your child completes a small project, then we suggest a course and a regular time. No card is needed.' },
      { h3: 'Small groups or one to one', p: 'Groups of five to ten children ready for the same next step, or private lessons if you prefer.' },
      { h3: 'Around eight lessons a month', p: 'Usually two a week at the same time, so coding becomes a steady habit.' },
      { h3: 'Teachers on India time', p: 'A 4pm lesson on the coast is 11:30am for our teachers in India, and that gap never moves.' }
    ],
    spec: { title: 'One time zone, all year', p: 'With no daylight saving in Queensland, a lesson booked for a Gold Coast afternoon in winter is at the same Gold Coast time in summer. We always confirm times in Gold Coast time.' }
  },

  fees: {
    h2: 'What coding classes cost for Gold Coast kids',
    intro: 'Three prices, clearly stated.',
    first: 'A free first lesson that ends with a level, a course and a time.',
    group: 'About eight lessons a month with five to ten children working at the same level.',
    private: 'About eight lessons a month, one teacher, one child.',
    closer: 'Families outside India pay in US dollars at one rate, from the northern suburbs to the southern beaches. There is no bill until after the trial, once you are happy with the course and time; holidays, missed lessons and switching between group and private are set out on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from families and learners, unedited',

  book: {
    h2: 'Tell us about your Gold Coast child',
    intro: 'A Prep child might start with blocks and patterns, a Year 5 child with a Scratch sorting project, and a Year 8 student with the G:link gaps in Python. A year level and a favourite interest are all we need.',
    success: 'Thank you. We will be in touch soon about a class for your Gold Coast child.'
  },

  faq: {
    h2: 'Questions from Gold Coast parents',
    intro: 'What Gold Coast families tend to ask first.',
    items: [
      { q: 'What age can my Gold Coast child start coding?', a: 'From age 6, which on the coast usually means Prep or Year 1. Blocks and pictures come first; the keyboard comes in once reading and confidence allow.' },
      { q: 'What is a stem-and-leaf plot?', a: 'A stem-and-leaf plot is a way of showing numbers in order where each number is split into a stem, such as its hundreds, and a leaf, such as its tens. It keeps every value while showing the shape of the whole set.' },
      { q: 'What is the G:link project?', a: 'Children take the 27 G:link stops from Helensvale to Burleigh Heads in OpenStreetMap, measure the 26 straight-line gaps between neighbours, and draw them as a stem-and-leaf plot. The median gap is 823 metres and the mean 959.9 metres.' },
      { q: 'Why are the mean and median different?', a: 'Because a few gaps are much longer than the rest, up to 3,008 metres between Helensvale and Parkwood. Long values pull the mean up but barely move the median.' },
      { q: 'Will lessons fit around Gold Coast school holidays?', a: 'They will. Teachers use Queensland year names from Prep to Year 8, and families choose whether lessons pause or continue through each break.' },
      { q: 'What time are lessons for Gold Coast children?', a: 'After school or at weekends, agreed in the free lesson and confirmed in Gold Coast time, which does not change during the year.' },
      { q: 'How do you keep children safe online?', a: 'Every session is live and led by a teacher, groups are small, children never need adult AI accounts, and parents are welcome to stay and watch.' },
      { q: 'Is there a Modern Age Coders centre on the Gold Coast?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Gold Coast kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Gold Coast families',
    html: 'Queensland as a whole, from Prep to senior school, is covered on <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>. Families further north can compare <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding classes for kids in Brisbane</a>. Children who love making games can start with <a class="cg-inline-link" href="/game-development-for-kids-australia">game development for kids</a>, and everything else is on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gold Coast and Queensland',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Ages 11 and 12' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kgcs .cg-hero h1 { font-weight: 800; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-kgcs .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-kgcs .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-kgcs .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-kgcs .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-kgcs .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kgcs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kgcs .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-kgcs .cg-callout { border-left-width: 5px; }
.cg-root.cg-kgcs .cg-hero-grid { align-items: start; }
`,

  dossier: {
    curriculumAuthority: 'Gold Coast - Tweed Heads, ABS Census 2021 QuickStats, Significant Urban Area 3007 (read 7 October 2026): 693,596 people; median age 40; 186,286 families; average number of children per family, for families with children, 1.8; age 0 to 4: 36,727 (5.3 percent); age 5 to 9: 41,429 (6.0 percent; Australia 6.2); age 10 to 14: 42,914 (6.2 percent); Preschool: 12,741 (6.1 percent of people attending an educational institution). Queensland Department of Education future school dates, 2027 school holidays: Term 1 Friday 26 March to Sunday 11 April (17 days); Term 2 Saturday 26 June to Sunday 11 July (16 days); Term 3 Saturday 18 September to Monday 4 October (17 days); Term 4 Saturday 11 December to Sunday 23 January 2028 (44 days). ABS Schools methodology 2025: preparatory in Queensland; Queensland - children must attend school from the age of six years and six months. IANA tz database: Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Stem-and-leaf of G:link stop gaps. One OpenStreetMap Overpass query, snapshot 2026-10-07T16:38:38Z, route=light_rail relations in 28.200 to 27.900 degrees south and 153.300 to 153.500 degrees east; relation 6363673 "L1 G:Link: Helensvale → Burleigh Heads", 27 stops in member order. Haversine gaps (R = 6,371,008.8 m), metres: 3008, 2115, 1615, 461, 1214, 1380, 587, 582, 340, 1065, 1308, 430, 558, 523, 438, 808, 1190, 838, 785, 976, 1025, 606, 518, 856, 956, 776. Sorted: min 340, max 3008, median 823 (808 and 838), mean 959.9. Helensvale to Burleigh Heads straight line 21,377 m. Stem-and-leaf (hundreds | tens) as printed. Lesson family: stem-and-leaf plots, mean versus median with a long tail.',
    requiredMentions: [
      '36,727',
      '42,914',
      '12,741',
      '186,286',
      '959.9',
      '823 metres',
      '3,008 metres',
      '21,377',
      'Broadwater Parklands'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Gold Coast - Tweed Heads (SUA 3007): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3007' },
      { claim: 'Queensland Department of Education, future school dates: 2027 holidays and their lengths.', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'ABS Schools methodology 2025: first year name and Queensland compulsory school age.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'OpenStreetMap via the Overpass API: G:link route relation 6363673 and its stop positions, snapshot 2026-10-07T16:38:38Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' }
    ],
    rejectedClaims: [
      'Travel times, timetables or distances along the track: our gaps are straight lines between stop points.',
      'Queensland Curriculum and Assessment Authority pages returned a Cloudflare 403 and were not circumvented, so no QCAA facts are used.',
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Which parts of the urban area lie in New South Wales: not stated on the QuickStats page we read, so not claimed.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the G:link operator, OpenStreetMap, the ABS or the Queensland Department of Education.'
    ]
  }
};
