'use strict';
// Sydney (cg- city page, Australia cluster Phase 1 preview; future hub for the Sydney suburb pages).
// Spine: the k-th value without sorting everything. From one OpenStreetMap Overpass query (snapshot
// 2026-10-07T08:03Z) for a rectangle we chose around the CBD and inner suburbs (33.84 to 33.92 degrees
// south, 151.17 to 151.24 degrees east): 885 nodes tagged highway=bus_stop and 24 tagged railway=station
// (the station tag also covers light rail stops such as Capitol Square). Distances measured by us on
// 7 October 2026 (scratchpad au/syd_qs.py) by the haversine formula from the Town Hall station node:
// median 2,781.6 m, farthest 6,029 m, 37 stops within 500 m, 128 within 1 km, ten nearest all within 214 m
// (nearest "Town Hall, Park St, Stand J" at 86 m). Comparison counts: Python sorted() on the shuffled list
// 7,496; on the already sorted list 884; quickselect with a random pivot on shuffled lists, 200 runs, mean
// 2,974 (min 1,476, max 6,151); quickselect taking the first element as pivot on the sorted list 293,709,
// against 391,170 comparisons for every pair; random pivot on the sorted list 3,790. Lesson family:
// selection (quickselect), pivot choice and the sorted-input trap; screened free site-wide on 7 October
// 2026 (quickselect: 0 hits in content/, claims and spent families).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats for Greater Sydney (GCCSA 1GSYD):
// 5,231,147 people, median age 37 (Australia 38), 1,380,176 families, 2,076,284 private dwellings,
// 2.7 people per household; flat or apartment 561,988 occupied private dwellings, 30.7% (Australia 14.2%);
// Professionals 711,729, 29.3% of employed people aged 15 and over (Australia 24.0%); aged 5 to 9
// 329,072 (6.3%). Bureau of Meteorology: the Capital City Observations feed IDN60901 names station 94768
// "Sydney - Observatory Hill"; Climate Data Online lists daily maximum temperature years for station 066062
// from 1859. NSW Government daylight saving page: starts Sunday 4 October 2026 at 2am AEST, ends Sunday
// 4 April 2027 at 3am AEDT. India time offsets checked against the IANA time zone database.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'SYDNEY', label: 'Sydney', blurb: 'Greater Sydney, its apartment-heavy inner city, and a project that finds the middle bus stop without sorting them all.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-sydney',
  code: 'syd',
  accent: '#182C98',
  accentRationale: 'Sydney: a deep harbour blue (HSV saturation 0.84, value 0.60), at least 15 RGB units from every accent already in content/, 4.8:1 or better on every paper tint',
  pageType: 'city',
  place: {
    name: 'Sydney',
    eyebrow: 'Sydney, New South Wales, Australia',
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
  routeLabel: 'Sydney, New South Wales',
  title: 'Best Coding Classes in Sydney | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes for Sydney learners from Kindergarten to adult, taught by a real teacher in small groups. First lesson free.',
  ogDescription: 'Coding and AI classes for Sydney, with a project that finds the middle of 885 inner-city bus stops without sorting the list.',
  twitterDescription: 'Sydney coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Sydney Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across Greater Sydney, taught live in English.'
  },

  h1: 'Coding classes in Sydney',
  capsuleQ: 'What are the best coding classes in Sydney?',
  capsule: 'For most Sydney families it is a live class with a real teacher, learners at the same level and projects built on real data. Greater Sydney counted 5,231,147 people at the 2021 Census, almost a third of its homes are apartments, and an online lesson saves the trip. We teach ages 6 to 67, Kindergarten to adult, privately or alongside a few learners at the same level, and the trial lesson is free.',
  lead: 'Stand outside Town Hall station and you are within a short walk of more bus stands than most towns have stops. Our project starts from that crowd. We took every stop OpenStreetMap records in a rectangle around the CBD and inner suburbs, 885 of them, measured how far each one is from Town Hall, and asked a simple question: which stop sits exactly in the middle of that list? The obvious method sorts all 885 distances and reads off the middle one. A sharper method, called quickselect, finds the same answer while ignoring most of the order. Our Sydney learners count how many comparisons each method needs, then discover the one input that turns quickselect from fast to dreadful: a list that is already sorted.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Sydney.',

  picks: {
    eyebrow: 'Course picks for Sydney',
    h2: 'Four starting points for a Sydney learner',
    intro: 'Picked by what the learner wants to make, then matched to a level in the free lesson. Every course starts with that lesson and no card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch games and animations, including a bus that leaves the stand only when the countdown says so.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from Stage 4 through to senior years, practised on lists of real places rather than invented numbers.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Searching, sorting and selection, with comparison counters on every algorithm so the speed claims are measured, not believed.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Scripts that pull open data, rank it and report the few rows that matter, without loading everything into a spreadsheet.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Sydney in the Census',
      h2: 'Five million people, and a third of homes in apartments',
      intro: 'From the Australian Bureau of Statistics 2021 Census QuickStats for the Greater Sydney capital city area. Every figure is for Greater Sydney, compared with Australia as a whole.',
      body: [
        { kind: 'table', caption: 'Greater Sydney at the 2021 Census, Australian Bureau of Statistics', head: ['Measure', 'Greater Sydney', 'Australia'], rows: [
          ['People', '5,231,147', 'Not compared'],
          ['Median age', '37', '38'],
          ['Families', '1,380,176', 'Not compared'],
          ['Private dwellings', '2,076,284', 'Not compared'],
          ['Occupied homes that are a flat or apartment', '561,988, or 30.7%', '14.2%'],
          ['Employed people working as professionals', '711,729, or 29.3%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Apartment living', p: '30.7% of Greater Sydney\'s occupied private dwellings were flats or apartments in 2021, more than double the national share of 14.2%.' },
          { h3: 'A professional workforce', p: 'Professionals made up 29.3% of employed Sydney residents aged 15 and over, against 24.0% across Australia.' },
          { h3: 'Plenty of school-age learners', p: 'The Census counted 329,072 Greater Sydney residents aged 5 to 9, 6.3% of the population, the age at which many of our Scratch learners begin.' }
        ] },
        { kind: 'p', text: 'One habit we keep, and teach. The age bands and dwelling types in a census table are each adjusted on their own to protect privacy, so their parts are never guaranteed to add up to the published total. This page quotes the published total and the published shares, and never adds the bands up to make a figure of its own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which bus stop is in the middle, and do we need to sort them all to find it?',
      intro: 'Every bus stop OpenStreetMap records in our inner-Sydney rectangle, measured from Town Hall station, and two ways to find the middle one.',
      body: [
        { kind: 'table', caption: 'What we measured from OpenStreetMap on 7 October 2026 (our calculation)', head: ['Measure', 'Figure'], rows: [
          ['Bus stops in the rectangle', '885'],
          ['Middle (median) distance from Town Hall station', '2,781.6 metres'],
          ['Stops within 500 metres of Town Hall', '37'],
          ['Stops within 1 kilometre', '128'],
          ['Nearest stop', 'Town Hall, Park St, Stand J, 86 metres away'],
          ['Farthest stop in the rectangle', '6,029 metres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Sort, then look', p: 'Python\'s built-in sort put the 885 shuffled distances in order with 7,496 comparisons. The middle value is then simply position 443.' },
          { h3: '2. Select, do not sort', p: 'Quickselect picks a pivot, splits the list into nearer and farther, and keeps only the side that holds the middle. Over 200 shuffled runs it averaged 2,974 comparisons.' },
          { h3: '3. Break it on purpose', p: 'Hand quickselect a list that is already sorted and let it always pivot on the first element. It needed 293,709 comparisons, close to checking every pair.' }
        ] },
        { kind: 'callout', h3: 'The sorted-list surprise, both ways round', p: 'An already sorted list is the worst case for naive quickselect, yet Python\'s own sort finished the same sorted list in just 884 comparisons, because its algorithm notices runs that are already in order. One input, opposite verdicts. Choosing the pivot at random fixed quickselect: 3,790 comparisons on the sorted list. That is the lesson in one line: how an algorithm performs depends on the data it meets, not only on its name.' },
        { kind: 'p', text: 'The figures are ours, measured on an OpenStreetMap snapshot taken on 7 October 2026. OpenStreetMap is mapped by volunteers, so a stop that exists may be missing or a removed one may linger; the rectangle is our own choice, not an official boundary. Distances are straight lines over the Earth\'s surface from the Town Hall station node, not walking routes. None of that changes the lesson, which is about counting the work an algorithm does on whatever list it is given.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Selecting instead of sorting',
      h2: 'Five habits for finding the one value you need',
      intro: 'First learned on 885 bus stops, then used on test marks, house listings, sensor readings and any list too long to sort for one answer.',
      body: [
        { kind: 'table', caption: 'How to pick a middle or a top-ten without wasted work', head: ['Habit', 'What it looks like', 'What it saves you from'], rows: [
          ['Ask what you actually need', 'One median, or the ten nearest, rather than the whole ordering', 'Sorting thousands of rows to read three'],
          ['Count the work', 'Put a counter inside every comparison and print it', 'Believing an algorithm is fast because it has a famous name'],
          ['Randomise the pivot', 'Choose the splitting value at random, not the first item', 'The sorted-input disaster of 293,709 comparisons'],
          ['Test the awkward inputs', 'Run on sorted, reversed and repeated values as well as shuffled ones', 'Code that works on demo data and stalls on real data'],
          ['Check against the slow way', 'Confirm the selected value equals the sorted list\'s middle', 'A fast answer that is quietly wrong']
        ] },
        { kind: 'p', text: 'The last habit is the one we insist on. Every quickselect run in our experiment was checked against the fully sorted list, and all 200 agreed. A faster method only earns its place once it has been shown to give the same answer as the obvious one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A card game: twenty numbered cards face down, and a race to find the middle card by splitting piles instead of laying every card out in order.' },
          { h3: 'Teenagers', p: 'The real 885 Sydney distances in Python, a comparison counter, quickselect written from scratch and then deliberately broken with a sorted list.' },
          { h3: 'Adults', p: 'Selecting the top or middle rows of a large open data file with a few lines of code, and knowing when sorting everything is still the right call.' }
        ] },
        { kind: 'p', text: 'We are not connected with Transport for NSW, OpenStreetMap, the Australian Bureau of Statistics or the Bureau of Meteorology, and no link with any of them is implied. Census figures are the Australian Bureau of Statistics\' own; the distances and comparison counts are our calculations from OpenStreetMap data.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'A weather station from 1859 and a transport hub in every direction',
      intro: 'Sydney\'s public data goes back a long way, and some of it is updated every half hour.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Observatory Hill', p: 'The Bureau of Meteorology publishes half-hourly readings from the station it names Sydney - Observatory Hill, and its Climate Data Online lists daily maximum temperature records for that site going back to 1859.' },
          { h3: 'Twenty-four stations in one rectangle', p: 'Our inner-Sydney rectangle holds 24 OpenStreetMap nodes tagged as stations, including Central Grand Concourse, Circular Quay, Wynyard and light rail stops such as Capitol Square.' },
          { h3: 'Stands by the letter', p: 'Several of the stops nearest Town Hall are named by stand letter on Park Street, Druitt Street and York Street, which is why the ten nearest stops all sit within 214 metres of the station.' }
        ] },
        { kind: 'spec', title: 'Why the stand letters matter to a programmer', p: 'A list of stop names looks tidy until you notice that Stand J, Stand H and Stand K on Park Street are different places with almost the same name. Real data is full of near-duplicates like these, and deciding whether two records are one place or two is a question every data project meets early.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From splitting a pile of cards to choosing an algorithm on purpose',
    intro: 'The age bands are a starting guide. The free lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Splitting and sorting', p: 'Programs that compare two numbers, swap them and repeat, and the surprise that some orders take longer than others.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lists of real places', p: 'Loading a list from a file, measuring distances and finding the nearest, the farthest and the middle.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Counting the work', p: 'Sorting and selection algorithms written by hand, comparison counters, and inputs chosen to break them.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Ranking data at scale', p: 'Picking the rows that matter from large files and choosing the right tool for the size of the job.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will write quickselect in seconds. Why should a Sydney teenager still learn how it works?',
    intro: 'Because the version an assistant hands over often pivots on the first element, and that choice needed 293,709 comparisons on our sorted list.',
    p1: 'Ask an assistant for a function that finds the median without sorting and you will usually get tidy, correct-looking quickselect. Correct is not the same as safe. If the code always takes the first item as its pivot, it runs well on shuffled data and grinds on data that arrives already in order, which real data often does: timestamps, IDs and anything exported from a sorted table. Nothing in the code warns you. Only a learner who has counted the comparisons knows to ask where the pivot comes from.',
    p2: 'That is the skill we are really teaching: reading generated code with a question in mind. A Sydney student who has seen 2,974 comparisons turn into 293,709 because of one line will check the pivot in any selection code, check the base case in any recursion and check the empty list in any loop, whether the code came from a classmate, a textbook or an AI tool.',
    closer: 'So the case for learning to code in 2026 is not that machines cannot write code. It is that someone still has to know which line to distrust, and a Sydney learner who has broken quickselect on purpose will spot it first.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Parramatta, Chatswood or Bondi, the same lesson at the same minute',
    intro: 'Greater Sydney stretches from the coast to the foot of the Blue Mountains, and a live online lesson reaches every part of it without a train or a toll.',
    cells: [
      { h3: 'No travel across the city', p: 'A learner in an apartment near Central and one in a house out west can share the same lesson from their own desks.' },
      { h3: 'Same words as school', p: 'A Kindergarten child, a Year 8 student in Stage 4 and an HSC candidate each hear the labels their own Sydney school uses. Lessons are in English.' },
      { h3: 'A proper first lesson', p: 'A real task with a real teacher, then a clear suggestion of level, course and weekly time. No card details at any point.' },
      { h3: 'Groups matched by level', p: 'Five to ten learners at the same stage, drawn from Sydney, the rest of Australia and other countries, so every level finds a workable time.' },
      { h3: 'Twice a week, usually', p: 'Roughly eight sessions each month in a fixed slot. Holiday breaks and exam fortnights are arranged with the teacher in advance.' },
      { h3: 'Teachers on India time', p: 'Sydney is four and a half hours ahead of India time in winter and five and a half ahead once daylight saving starts on Sunday 4 October 2026, so a 4pm Sydney class falls in the late morning of our teachers\' day.' }
    ],
    spec: { title: 'Daylight saving, written down once', p: 'NSW clocks go forward at 2am on Sunday 4 October 2026 and back at 3am on Sunday 4 April 2027. India does not change its clocks, so the gap to our teachers moves by one hour on those dates, and lesson times are always confirmed in Sydney time.' }
  },

  fees: {
    h2: 'What classes cost in Sydney',
    intro: 'Three numbers, no add-ons.',
    first: 'A complete lesson at no cost, ending with a level, a suggested course and a weekly time.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners at the same level.',
    private: 'The same monthly pattern of around eight lessons, with one teacher and one learner.',
    closer: 'Outside India every family pays in US dollars at a single rate, so the eastern suburbs and Western Sydney get the same bill and no Sydney price list exists. The first invoice follows the trial, once course and slot are agreed; the pricing page covers holidays off, missed sessions and changing from group to private lessons.'
  },

  reviewsH2: 'Unedited Google reviews from parents and learners',

  book: {
    h2: 'Tell us where the learner is starting',
    intro: 'We choose the first task to fit: a Scratch countdown for a younger child, a first Python list for a curious Year 7, or the 885 Sydney bus stops for a teenager who likes a puzzle.',
    success: 'Thank you. The team will be in touch shortly about a Sydney class.'
  },

  faq: {
    h2: 'Sydney coding class questions',
    intro: 'What Sydney families ask us first.',
    items: [
      { q: 'How many people live in Greater Sydney?', a: 'The 2021 Census counted 5,231,147 people in the Greater Sydney capital city area, with a median age of 37 against 38 for Australia.' },
      { q: 'What is quickselect?', a: 'Quickselect is an algorithm that finds the value at one position in a list, such as the middle, without sorting the whole list. It splits the list around a pivot and only keeps working on the side that contains the position it wants.' },
      { q: 'What is the Sydney bus stop project?', a: 'Learners take the 885 bus stops OpenStreetMap records in an inner-Sydney rectangle, measure each one\'s distance from Town Hall station and find the middle distance, 2,781.6 metres, first by sorting and then by quickselect, counting the comparisons each method needs.' },
      { q: 'Why did quickselect need 293,709 comparisons once?', a: 'Because it was given a list that was already sorted and told to pivot on the first element every time. Each split then removed only one value. With a random pivot the same list needed 3,790 comparisons.' },
      { q: 'Do you follow the NSW school stages?', a: 'Yes. We use the stage and year names Sydney schools use, from Kindergarten through Stages 1 to 5 to Year 11 and Year 12, and plan around the NSW school terms and the HSC.' },
      { q: 'What time are lessons for Sydney learners?', a: 'Late afternoon, evening or weekend, picked during the trial and always stated in Sydney time. India is four and a half hours behind Sydney in winter and five and a half behind once the clocks go forward.' },
      { q: 'Can lessons pause for school holidays and exams?', a: 'Yes. Breaks for NSW school holidays, exam weeks and family travel are agreed with the teacher, and the course is planned around the school year.' },
      { q: 'Is there a Modern Age Coders centre in Sydney?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Sydney coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Sydney and Australian learners',
    html: 'For the state picture, including the NSW stages, the HSC and the selective and opportunity class tests, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. Learners heading towards maths competitions can start with <a class="cg-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">Australian Mathematics Competition and AIO preparation</a>, and older learners interested in machine learning can see <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-australia">AI and machine learning classes in Australia</a>. Everything for Australian families hangs off the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sydney and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/online-maths-tutoring-australia', label: 'Maths in Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-syd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-syd .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-syd .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-syd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-syd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-syd .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-syd .cg-table caption { font-weight: 700; letter-spacing: 0.01em; text-align: left; }
.cg-root.cg-syd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-syd .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-syd .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Sydney, ABS Census 2021 QuickStats, GCCSA 1GSYD (read 7 October 2026): 5,231,147 people; median age 37 (New South Wales 39, Australia 38); 1,380,176 families; 2,076,284 private dwellings; average 2.7 people per household; dwelling structure, occupied private dwellings: flat or apartment 561,988 (30.7 percent; Australia 14.2 percent), separate house 1,020,631 (55.8 percent); occupation of employed people aged 15 and over: Professionals 711,729 (29.3 percent; Australia 24.0 percent); age 5 to 9: 329,072 (6.3 percent). Bureau of Meteorology: Capital City Observations IDN60901 header names station 94768 Sydney - Observatory Hill; Climate Data Online available-years list for station 066062, daily maximum temperature, begins 1859. NSW Government daylight saving page: starts Sunday 4 October 2026 at 2am AEST (clocks to 3am), ends Sunday 4 April 2027 at 3am AEDT (clocks to 2am). IANA tz database: Australia/Sydney UTC+10 and UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Quickselect on inner-Sydney bus stops. One OpenStreetMap Overpass query, snapshot 2026-10-07T08:03Z, rectangle 33.84 to 33.92 degrees south and 151.17 to 151.24 degrees east: 885 highway=bus_stop nodes and 24 railway=station nodes. Haversine distances (R = 6,371,008.8 m) from the Town Hall station node (-33.873567, 151.2068498), measured 7 October 2026: median 2,781.6 m; maximum 6,029 m; 37 stops within 500 m; 128 within 1 km; the ten nearest within 213.6 m, nearest Town Hall, Park St, Stand J at 86 m. Comparison counts: Python sorted() with a counting comparator on a shuffled list 7,496, on the sorted list 884; quickselect (Lomuto partition, random pivot) on 200 shuffled lists mean 2,974.1, min 1,476, max 6,151, all 200 equal to the sorted median; first-element pivot on the sorted list 293,709 (n(n-1)/2 = 391,170); random pivot on the sorted list 3,790. Lesson family: selection without sorting, pivot choice, adversarial (sorted) input; distinct from sorting pages, binary search, k-d trees and quadtrees.',
    requiredMentions: [
      '5,231,147',
      '1,380,176',
      '2,076,284',
      '561,988',
      '711,729',
      '2,781.6',
      '293,709',
      '7,496',
      'Town Hall, Park St, Stand J',
      'Observatory Hill'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Sydney (1GSYD): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1GSYD' },
      { claim: 'OpenStreetMap via the Overpass API: highway=bus_stop and railway=station nodes in the stated rectangle, snapshot 2026-10-07T08:03Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'Bureau of Meteorology Capital City Observations, station 94768 Sydney - Observatory Hill.', url: 'https://www.bom.gov.au/fwo/IDN60901/IDN60901.94768.json' },
      { claim: 'Bureau of Meteorology Climate Data Online, station 066062, daily maximum temperature available years from 1859.', url: 'https://www.bom.gov.au/jsp/ncc/cdio/wData/wdata?p_stn_num=066062&p_display_type=availableYears&p_nccObsCode=122' },
      { claim: 'NSW Government, daylight saving 2026 and 2027 start and end dates and times.', url: 'https://www.nsw.gov.au/about-nsw/daylight-saving' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology daily data downloads returned 403 to an automated request and were not circumvented, so no temperature figures are quoted.',
      'Any count of bus stops for all of Sydney: OpenStreetMap is incomplete and our rectangle is not an official boundary.',
      'Walking times or routes between stops: distances are straight lines from the Town Hall station node.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'School rankings, HSC results and selective school statistics: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, OpenStreetMap, the ABS, the Bureau of Meteorology or the NSW Department of Education.'
    ]
  }
};
