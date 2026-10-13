'use strict';
// Maryborough, Queensland (cg- city page, Australia cluster Phase 7, row 177). Shaped page: AI and programming,
// leading with teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: how many digits does a computer need to add up a bus route? Data: Translink general transit feed
// specification feed for Maryborough and Hervey Bay (operator Wide Bay Transit; feed_start_date 20261007,
// feed_end_date 20261206), listed on data.qld.gov.au under Creative Commons Attribution 4.0, downloaded 7
// October 2026. Routes 701 to 707 serve Maryborough: 7 routes, 36 shapes, 80 trips, 244 stops. Shape lengths are
// sums of haversine segment lengths (R = 6,371,008.8 m; our calculation, scratchpad au/r6/py/mbq_float.py):
// 16,378 segments across the 36 shapes, median 49.7 m. Longest shape of route 705 (Maryborough - Hervey Bay -
// Maryborough): 1,220 points, math.fsum 102,231.220 m; float64 running sum differs by about 1e-10 m; float32
// 102,231.16 m (0.056 m short); float16 accumulator in metres overflows to inf, because float16 cannot hold any
// value above 65,504; the same sum in kilometres in float16 gives 101.812 km. Coordinates stored as float16 (grid
// spacing 0.01563 degrees of latitude and 0.125 degrees of longitude here) make the same shape 135,471.6 m long.
// Per route, longest shape, exact metres then float16 metres: 701 13,004.6 / 12,992; 702 15,079.4 / 15,080; 703
// 22,213.0 / 22,272; 704 18,584.3 / 18,608; 706 29,320.5 / 29,376; 707 70,325.2 / inf (70.312 km in float16 km).
// Lesson family: floating-point precision (float16 overflow and rounding, float32, float64, math.fsum) on
// measured lengths; screened free site-wide on 9 October 2026 ("float16", "fsum": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Maryborough Significant Urban Area (3012):
// 27,489 people; median age 47 (Queensland 38, Australia 38); 7,259 families; 12,282 private dwellings; 2.3 people
// per household; separate house 9,467 (88.4%; Queensland 74.8%; Australia 72.3%); flat or apartment 385 (3.6%;
// Queensland 12.5%); Technicians and Trades Workers 1,369 (14.8%; Queensland 13.7%); aged 10 to 14 1,654
// (6.0%); aged 15 to 19 1,576 (5.7%). Queensland Department of Education, 2027 term dates: Term 1 Wednesday 27
// January to Thursday 25 March; Term 4 Tuesday 5 October to Friday 10 December. IANA tz: Australia/Brisbane
// UTC+10 with no daylight saving; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// any route or stop name used only for a health facility.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MARYBOROUGH', label: 'Maryborough', blurb: 'AI and programming for Maryborough teens and adults, and a project that adds up bus routes in the low-precision numbers AI chips use.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-maryborough-qld',
  code: 'mbq',
  accent: '#62210F',
  accentRationale: 'Maryborough: a dark brick rust (HSV saturation 0.85, value 0.38, hue 12), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 9.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Maryborough',
    eyebrow: 'Maryborough, Queensland, Australia',
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
  routeLabel: 'Maryborough, Queensland',
  title: 'AI and Programming Classes in Maryborough, Queensland',
  description: 'Live online AI, machine learning and programming classes for Maryborough teenagers and adults, with a real teacher, in small groups or one to one. First lesson free.',
  ogDescription: 'AI and programming classes for Maryborough teens and adults, with a project that measures bus routes in the half-precision numbers AI hardware relies on.',
  twitterDescription: 'AI and programming classes in Maryborough, Queensland, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Maryborough Learners',
    description: 'Level-matched online classes in machine learning, numerical programming and Python for teenagers and adults in Maryborough and the Fraser Coast, taught live in English.'
  },

  h1: 'AI and programming classes in Maryborough',
  capsuleQ: 'What are the best AI and programming classes in Maryborough, Queensland?',
  capsule: 'Classes in which Maryborough teenagers and adults learn how artificial intelligence actually computes, writing Python with a teacher and testing ideas on real Queensland data. The 2021 Census counted 27,489 people in the Maryborough urban area, with a median age of 47. Every lesson is live on video, one to one or in a small group at the same level, and the first is free.',
  lead: 'Route 705 links Maryborough and Hervey Bay and back, and its path in the state\'s transit file is 1,220 points long. Add up the gaps between them and you get 102,231 metres. Do the same sum in half precision, the 16-bit numbers that many AI chips use to go fast, and the answer is not slightly wrong: it is infinity, because a 16-bit float cannot hold any number above 65,504. Store the map coordinates in half precision instead and the route grows by a third. Our Maryborough project makes these numbers in Python and shows why AI engineers think so hard about precision.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Maryborough, Queensland.',

  picks: {
    eyebrow: 'Course picks for Maryborough',
    h2: 'AI and programming courses that start from first principles',
    intro: 'Each one connects to the precision project below. The free trial lesson points to the right one, and no card is requested.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from the inside: data, models, training and the arithmetic that makes them run.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first line, including how numbers are stored and why that matters.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'A full machine learning course, from classic methods to neural networks and the hardware they run on.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Real data, careful calculation and models whose numbers can be checked.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Maryborough in the Census',
      h2: 'Nearly nine in ten homes are separate houses',
      intro: 'Figures the statistics bureau released for the Maryborough Significant Urban Area from the 2021 Census, compared with Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Maryborough urban area, 2021 Census QuickStats', head: ['Census figure', 'Maryborough'], rows: [
          ['Residents', '27,489'],
          ['Families', '7,259'],
          ['Private dwellings', '12,282'],
          ['Average household size', '2.3 people']
        ] },
        { kind: 'table', mt: true, caption: 'How Maryborough compares', head: ['Measure', 'Maryborough', 'Queensland', 'Australia'], rows: [
          ['Median age', '47', '38', '38'],
          ['Separate houses, share of occupied homes', '88.4% (9,467)', '74.8%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '3.6% (385)', '12.5%', '14.2%'],
          ['Technicians and trades workers, share of workers', '14.8% (1,369)', '13.7%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nine years older', p: 'Maryborough\'s median age of 47 was nine years above both the Queensland and the national median in 2021.' },
          { h3: 'Mostly houses', p: '9,467 occupied homes, 88.4%, were separate houses, against 74.8% across Queensland.' },
          { h3: 'Teenagers', p: 'The Census recorded 1,654 residents aged 10 to 14 and 1,576 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'One caution about these tables: the bureau randomly adjusts small census counts so individuals cannot be picked out, and as a result rows may not sum to the printed total. We use the published totals and percentages exactly as given and never total the rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much precision does it take to add up a bus route?',
      intro: 'Translink publishes the exact path of every Maryborough bus as a list of map points. We measured each route by adding the distances between its points, once with exact arithmetic and then in the lower-precision number formats used across computing and AI.',
      body: [
        { kind: 'table', caption: 'Route 705, its longest path: 1,220 points, the same sum in five formats (our calculation)', head: ['How the sum is done', 'Result', 'Error'], rows: [
          ['Exact sum (Python math.fsum)', '102,231.22 m', 'reference'],
          ['64-bit floats, ordinary running sum', '102,231.22 m', 'about a ten-billionth of a metre'],
          ['32-bit floats', '102,231.16 m', '0.056 m short'],
          ['16-bit floats, in metres', 'infinity', 'overflow above 65,504'],
          ['16-bit floats, in kilometres', '101.812 km', '419 m short']
        ] },
        { kind: 'table', mt: true, caption: 'Each Maryborough route\'s longest path, exact and in 16-bit metres (our calculation)', head: ['Route', 'Exact length', '16-bit result'], rows: [
          ['701', '13,004.6 m', '12,992 m'],
          ['702', '15,079.4 m', '15,080 m'],
          ['703', '22,213.0 m', '22,272 m'],
          ['704', '18,584.3 m', '18,608 m'],
          ['706', '29,320.5 m', '29,376 m'],
          ['707, to Aldershot, Torbanlea and Howard', '70,325.2 m', 'infinity (70.312 km in 16-bit kilometres)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Measure', p: 'Read the shape file, sort each path\'s points by sequence, and add the haversine distance between neighbours. A typical gap is about 50 metres.' },
          { h3: '2. Shrink the numbers', p: 'Repeat the sum with numpy float32 and float16 accumulators. Watch the 16-bit total stop growing smoothly, then jump to infinity on the long routes.' },
          { h3: '3. Rescale and compare', p: 'Switch the unit to kilometres and the 16-bit sum survives, but rounding still costs hundreds of metres. The exact sum and 64-bit floats agree to a fraction of a millimetre.' }
        ] },
        { kind: 'callout', h3: 'Why the long routes vanish into infinity', p: 'A 16-bit float spends only 10 bits on its digits, so between 32,768 and 65,504 it can only count in steps of 32. Adding a 50-metre segment rounds to a step of 32 or 64, and once the total passes 65,504 there is no larger number to hold it. Storing the coordinates themselves in 16 bits is worse in a different way: near Maryborough the format can only mark latitude every 0.0156 degrees and longitude every 0.125 degrees, so the route\'s points snap to a coarse grid and its length becomes 135,472 metres.' },
        { kind: 'p', text: 'All lengths here come from our own code on Translink\'s published shapes, measured as straight lines between consecutive points on a sphere. They are not official route distances and say nothing about how the buses are run.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Precision in AI',
      h2: 'What bus routes teach about how AI is computed',
      intro: 'Modern AI training and inference often use 16-bit and even 8-bit numbers, because they are faster and use less memory. The Maryborough project shows exactly what that trade costs and how engineers protect against it.',
      body: [
        { kind: 'table', caption: 'From the route experiment to real AI practice', head: ['Problem seen with the routes', 'In AI systems', 'The usual remedy'], rows: [
          ['16-bit sums overflow above 65,504', 'Gradients and activations can overflow', 'Loss scaling and careful ranges'],
          ['Small additions to a big total are rounded away', 'Tiny weight updates can be lost', 'Keep a 32-bit master copy of the weights'],
          ['Changing the unit rescued the sum', 'Normalising inputs keeps values in range', 'Scale data before training'],
          ['Coordinates snapped to a coarse grid', 'Quantised models lose fine detail', 'Choose the precision per layer']
        ] },
        { kind: 'p', text: 'Mixed-precision training, the common practice of computing in 16 bits while accumulating in 32, exists for precisely the reason our route totals failed. A learner who has watched route 707 turn into infinity understands that design choice far more clearly than one who has only read about it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the distance function, add up a route, then rerun it in three precisions and explain each difference.' },
          { h3: 'University students', p: 'IEEE 754 formats, compensated summation, loss scaling and quantisation in real model training.' },
          { h3: 'Adults', p: 'Understanding why AI tools trade accuracy for speed, and when that trade matters for your work.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Translink, the Queensland Department of Transport and Main Roads, Fraser Coast Regional Council or the Australian Bureau of Statistics. They publish the transit file and the census figures; the measurements and every precision result shown here are from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Maryborough',
      h2: 'Seven routes, 244 stops and a 2027 school year',
      intro: 'A few further facts from the transit feed and the Queensland calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The local network', p: 'Routes 701 to 707 serve Maryborough in the current feed, running 80 trips between them and calling at 244 different stops.' },
          { h3: 'Out of town', p: 'Route 707 continues to Aldershot, Torbanlea and Howard, and route 705 links Maryborough with Hervey Bay.' },
          { h3: 'School terms', p: 'Queensland\'s 2027 school year begins on Wednesday 27 January and Term 4 ends on Friday 10 December.' }
        ] },
        { kind: 'spec', title: 'A second precision puzzle to try', p: 'Instead of adding many small gaps to one big total, add them in pairs, then pairs of pairs, the way a tree is built. On route 705 in 16-bit kilometres, pairwise summation gives 102.25 km, within about 19 metres of the exact length, where the simple running sum lost 419 metres; each addition joins numbers of similar size. It is the same idea that keeps large AI computations stable.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From adding numbers to understanding AI hardware',
    intro: 'Treat the ages as a starting guide; the free lesson decides the actual level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Numbers in code', p: 'Python variables, loops and functions, measuring distances and adding them up on real map data.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Inside machine learning', p: 'How models train, why precision matters and how to test a calculation two ways.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Numerics for AI', p: 'Floating point, stability and the engineering choices behind fast model training.', courses: ['ai-ml-masterclass-complete-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'AI you can question', p: 'Reading claims about AI speed and accuracy with a clear sense of what is being traded away.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Maryborough learner care how many bits a number has?',
    intro: 'Because the speed of modern AI comes from using fewer bits, and the cost of that speed is invisible unless you know where to look.',
    p1: 'AI hardware is built to crunch huge numbers of 16-bit and 8-bit values, and that is a large part of why today\'s models are affordable to run. The catch is that low-precision arithmetic fails in ways that do not announce themselves: totals stop growing, small updates disappear, and occasionally a value becomes infinite and spoils everything after it.',
    p2: 'Learners who have added up a Maryborough bus route in four formats know what those failures look like and how engineers defend against them, with 32-bit accumulators, rescaling and pairwise sums. That knowledge turns AI from a black box into a machine they can reason about.',
    closer: 'In 2026 almost everyone uses AI and very few understand its arithmetic, and a Maryborough learner who does is the one trusted to make it work properly.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tinana to Granville, the same live lesson',
    intro: 'Maryborough\'s seven bus routes connect suburbs such as Tinana and Granville with the city centre, and an online class reaches every one of them without a trip.',
    cells: [
      { h3: 'Across the city', p: 'A teenager in Tinana and an adult in Granville can learn side by side without either of them catching a bus.' },
      { h3: 'Queensland years', p: 'Lessons follow Queensland\'s year levels and four terms, and senior students can link projects to the computing and maths subjects they take.' },
      { h3: 'A proper trial', p: 'The first lesson is a full class with real code. Afterwards you receive a recommended level, course and time, and no payment details are taken.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty learners at one stage, from Maryborough and further afield, so the group always has enough people.' },
      { h3: 'Two lessons a week', p: 'Fixed times twice weekly, about eight lessons a month, with breaks for school holidays and exams planned ahead.' },
      { h3: 'One steady time gap', p: 'Queensland does not use daylight saving, so a 5pm Maryborough lesson starts at 12:30pm in India all year round.' }
    ],
    spec: { title: 'No clock changes to plan around', p: 'Maryborough keeps Australian Eastern Standard Time throughout the year, four and a half hours ahead of India. Unlike families in New South Wales or Victoria, Maryborough learners never see their lesson time move in October or April.' }
  },

  fees: {
    h2: 'Maryborough class fees',
    intro: 'Three numbers explain the cost.',
    first: 'A full lesson at no charge, finished with a suggested level, course and lesson time.',
    group: 'Close to eight lessons a month with fifteen to twenty learners at one level.',
    private: 'Close to eight lessons a month with a teacher working one to one.',
    closer: 'Families outside India are billed in US dollars, so a learner in Tinana and one in Granville pay the same and there is no Maryborough price list. We charge nothing until the trial has fixed a course and a weekly time, and the pricing page sets out breaks, absences and changes of format.'
  },

  reviewsH2: 'What our families write on Google',

  book: {
    h2: 'What would the learner like to explore?',
    intro: 'An age and an interest are enough for us to plan a first lesson. A Year 9 student might start by measuring one short route in Python; an adult might begin with the full precision experiment.',
    success: 'Thank you. We will be in touch soon about a Maryborough class.'
  },

  faq: {
    h2: 'Maryborough AI and programming questions',
    intro: 'The questions Maryborough learners and families usually ask first.',
    items: [
      { q: 'How many people live in Maryborough, Queensland?', a: 'The 2021 Census QuickStats record 27,489 residents in the Maryborough Significant Urban Area. The median age was 47, against 38 for Queensland.' },
      { q: 'What is half precision, or float16?', a: 'Half precision is a way of storing numbers in 16 bits. It is fast and compact, which is why AI hardware uses it, but it keeps only about three decimal digits and cannot store values above 65,504.' },
      { q: 'What is the Maryborough bus route project?', a: 'Learners measure the length of each Maryborough bus route from Translink\'s published map points, then repeat the sums in 64-bit, 32-bit and 16-bit numbers. Route 705\'s 102,231-metre path turns into infinity in 16-bit metres and grows to 135,472 metres when its coordinates are stored in 16 bits.' },
      { q: 'Is this an official route distance?', a: 'No. The lengths are our own calculation of straight lines between published points, made to study arithmetic. They are not timetabled distances and say nothing about the bus service.' },
      { q: 'Do you help senior Queensland students?', a: 'Yes. Year 11 and 12 learners studying computing or maths in Queensland get lessons matched to their year and terms. Assessed school work must be the student\'s own; we teach methods and never produce marked work.' },
      { q: 'What time are lessons?', a: 'Times are set at the trial and written in Maryborough time. Because Queensland has no daylight saving, the gap to our teachers in India is always four and a half hours.' },
      { q: 'Can younger children learn with you?', a: 'Yes, from age six. Younger learners begin with Scratch and drawing programs; the precision project on this page is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Maryborough?', a: 'No, and none is claimed. Every lesson is live and online, and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Maryborough classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Fraser Coast and Queensland learners',
    html: 'Neighbours on the coast can read about <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hervey-bay">vibe coding and AI agents classes in Hervey Bay</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bundaberg">online coding and Python classes in Bundaberg</a>. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland page</a> covers the state, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a> links every other place and topic.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Maryborough and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-hervey-bay', label: 'Hervey Bay' },
    { href: '/online-coding-and-python-classes-in-bundaberg', label: 'Bundaberg' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mbq .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mbq .cg-hero h1 { font-weight: 790; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-mbq .cg-capsule { border-left: 5px double var(--cg-accent); padding: 0.4rem 0 0.4rem 1rem; }
.cg-root.cg-mbq .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mbq .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-mbq .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-mbq .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mbq .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mbq .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-mbq .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Maryborough (Queensland), ABS Census 2021 QuickStats, Significant Urban Area 3012 (read 9 October 2026): 27,489 people; median age 47 (Queensland 38, Australia 38); 7,259 families; 12,282 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 9,467 (88.4 percent; Queensland 74.8; Australia 72.3), semi-detached, row or terrace house, townhouse 693 (6.5 percent), flat or apartment 385 (3.6 percent; Queensland 12.5; Australia 14.2); occupation: Technicians and Trades Workers 1,369 (14.8 percent; Queensland 13.7; Australia 12.9); aged 10 to 14 1,654 (6.0 percent); aged 15 to 19 1,576 (5.7 percent). Queensland Department of Education, future dates (read raw): 2027 Term 1 Wednesday 27 January to Thursday 25 March, Term 2 Monday 12 April to Friday 25 June, Term 3 Monday 12 July to Friday 17 September, Term 4 Tuesday 5 October to Friday 10 December. IANA tz database: Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Floating-point precision on measured route lengths. Translink GTFS, Maryborough and Hervey Bay feed (Wide Bay Transit; feed_start_date 20261007, feed_end_date 20261206), Creative Commons Attribution 4.0 via data.qld.gov.au, downloaded 7 October 2026. Routes 701 to 707 (route_short_name): 7 routes, 36 shapes, 80 trips, 244 distinct stops in stop_times. Segment lengths by haversine (R = 6,371,008.8 m) between consecutive shape points sorted by shape_pt_sequence: 16,378 segments, median 49.7 m, maximum 1,432.3 m. Route 705 longest shape H7050163: 1,220 points; math.fsum 102,231.220 m; float64 running sum differs by about 1.3e-10 m; numpy float32 accumulator 102,231.16 m (0.056 m short); float16 accumulator in metres overflows to inf; float16 accumulator in kilometres 101.812 km; coordinates rounded to float16 (spacing 0.01563 degrees at 25.5, 0.125 at 152.7) give 135,471.6 m. Longest shape per route, fsum m / float16 m: 701 13,004.6 / 12,992; 702 15,079.4 / 15,080; 703 22,213.0 / 22,272; 704 18,584.3 / 18,608; 705 102,231.2 / inf (101.812 km in float16 km); 706 29,320.5 / 29,376; 707 70,325.2 / inf (70.312 km). float16 spacing 8 at 8,192 and 32 at 32,768; maximum finite value 65,504. Pairwise (tree) summation of the route 705 segments in float16 kilometres: 102.25 km (exact 102.231).',
    requiredMentions: [
      '27,489',
      '12,282',
      '9,467',
      '1,654',
      '102,231',
      '65,504',
      '135,472 metres',
      'Torbanlea',
      'Mixed-precision training'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Maryborough Significant Urban Area (3012): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3012' },
      { claim: 'Translink general transit feed specification feeds, including Maryborough and Hervey Bay, published under Creative Commons Attribution 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates from 2027.', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'NumPy documentation, finfo and float16: largest finite half-precision value 65,504.', url: 'https://numpy.org/doc/stable/reference/generated/numpy.finfo.html' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Official route lengths or timetabled distances: not published in the feed; all lengths are our straight-line sums between shape points.',
      'Route and headsign names that refer to health facilities: not printed, under the cluster rules; routes are named by number and by town.',
      'Maryborough heritage and history claims (founding dates, buildings): not verified at a primary source, so none is given beyond the census and feed facts.',
      'Queensland senior syllabus details from QCAA: the QCAA site returned a Cloudflare 403 and was not used.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Department of Transport and Main Roads, Fraser Coast Regional Council or the ABS.'
    ]
  }
};
