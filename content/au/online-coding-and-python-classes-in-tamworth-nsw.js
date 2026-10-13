'use strict';
// Tamworth NSW (cg- regional city page, Australia cluster Phase 7, row 160). Slug carries -nsw because a UK
// Tamworth page already exists (best-coding-and-ai-classes-in-tamworth). Shaped page: Python for teenagers
// and adults. Spine: how many real climbs are on a hilly walk? Data: NSW Spatial Services, NSW Elevation and
// Depth Theme, Contour layer (MapServer layer 2), extracted 8 October 2026 along a straight-line transect
// through five named hill points from NSW_Physiography_Category layer 0 (Macpherson Hill 150.9588,-31.1003;
// Flagstaff Mountain 150.9667,-31.0857; Bald Hill 150.9579,-31.0757; Daves Hill 150.9501,-31.0643; Mount
// Daruka 150.9488,-31.0301). Transect 8,415 m; 871 contour crossings; elevations 560 to 830 m; first
// crossing 670 m, last 730 m. Our code (scratchpad au/r4/tam_rain.py): total ascent 1,416 m, descent
// 1,356 m, 221 reversals; rainflow counting 108 full cycles and 4 half cycles; ranges under 4 m 39 cycle
// equivalents, 4 to 10 m 44, 10 to 40 m 22, 40 to 100 m 2.5, 100 m and over 2.5; largest half cycles 270
// and 250 m, largest full cycle 208 m; weighted range sum 1,386 m (the mean of ascent and descent); ascent
// from cycles of 10 m or more 1,066 m, 20 m or more 878 m. Lesson family: rainflow counting (ASTM style
// three-point stack) on an elevation profile; screened 0 content hits 8 October 2026; claimed by AU-R4.
// Licence: Spatial Services applies CC BY 4.0, attribution "(c) Spatial Services", extraction date marked.
// Place facts: ABS Census 2021 QuickStats SUA 1032 Tamworth; NSW PlacePoints inside the SUA polygon; NSW
// Department of Education 2027 term dates; IANA tz 2026e Australia/Sydney (rule AN), Asia/Kolkata.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'TAMWORTH', label: 'Tamworth', blurb: 'Tamworth in the Peel Valley, five named hills east of town, and a rainflow count of how many real climbs a ridge walk contains.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-tamworth-nsw',
  code: 'tamn',
  accent: '#515230',
  accentRationale: 'Tamworth: a dry-grass olive (HSV saturation 0.41, value 0.32, hue 62), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 6.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Tamworth',
    eyebrow: 'Tamworth, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Tamworth, New South Wales',
  title: 'Online Coding and Python Classes in Tamworth NSW | Live Teacher',
  description: 'Live online Python and data classes for Tamworth teenagers and adults, built on real NSW map data and taught one to one or in small groups. First lesson free.',
  ogDescription: 'Python classes for Tamworth teens and adults, with a project that counts the real climbs on a ridge walk across five named hills.',
  twitterDescription: 'Tamworth Python classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Python and Data Classes for Tamworth Learners',
    description: 'Online Python, data handling and signal-style analysis for teenagers and adults in Tamworth and the Peel Valley, taught live in English at the learner\'s level.'
  },

  h1: 'Online coding and Python classes in Tamworth',
  capsuleQ: 'What are the best online coding and Python classes in Tamworth?',
  capsule: 'Ones where a Tamworth teenager or adult writes Python with a live teacher on real local data, starting from variables and loops and working up to the counting methods engineers use on stress and terrain. The 2021 Census put 43,874 people in the Tamworth urban area, 2,899 of them aged 15 to 19. Sessions happen on video, one to one or in a small level-matched group, and the first one is free.',
  lead: 'Ask a walking app how much climbing a route involves and it adds up every rise, however small. Engineers who study metal fatigue faced the same muddle decades ago: a load that wobbles up and down a thousand times is not the same as a thousand big swings. Their answer was rainflow counting, an algorithm that pairs each rise with the fall that matches it. We pointed it at the hills just east of Tamworth. Using the state\'s official contour lines, our Python profiled a straight line through Macpherson Hill, Flagstaff Mountain, Bald Hill, Daves Hill and Mount Daruka, then asked how many of its 1,416 metres of ascent belong to genuine climbs.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Tamworth.',

  picks: {
    eyebrow: 'Python courses for Tamworth',
    h2: 'Where a Tamworth learner can begin with Python',
    intro: 'All four reach the terrain project on this page sooner or later. A free trial lesson picks the right one; booking it needs no payment details.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, loops and functions learned by building small tools, then pointed at real contour data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Reading, cleaning and charting real datasets with Python, ending with a first model of their own.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python path for grown-ups, from syntax to testing, packaging and clean design.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripts that fetch, transform and report on data automatically, the everyday Python of working life.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tamworth by the numbers',
      h2: 'Houses, teenagers and the Peel Valley',
      intro: 'A short profile drawn from the 2021 Census for the Tamworth Significant Urban Area.',
      body: [
        { kind: 'table', caption: 'Tamworth urban area, headline counts from Census 2021', head: ['Item', 'Value'], rows: [
          ['Population', '43,874'],
          ['Median age', '37'],
          ['Families', '11,242'],
          ['Private dwellings', '19,242, with 2.4 people per household on average']
        ] },
        { kind: 'table', mt: true, caption: 'Tamworth against New South Wales and Australia, selected shares', head: ['Group', 'Tamworth', 'NSW', 'Australia'], rows: [
          ['Separate houses among occupied homes', '13,946, or 84.2%', '65.6%', '72.3%'],
          ['Flats or apartments among occupied homes', '368, or 2.2%', '21.7%', '14.2%'],
          ['Residents aged 15 to 19', '2,899, or 6.6%', '5.7%', '5.7%'],
          ['Professionals among employed residents', '3,608, or 18.5%', '25.8%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost all houses', p: 'Only 368 occupied homes were flats or apartments, a tenth of the New South Wales share, so most Tamworth learners study from a family house.' },
          { h3: 'Plenty of teenagers', p: 'Residents aged 15 to 19 make up 6.6% of the city, above both the state and national figure of 5.7%.' },
          { h3: 'Suburbs on the map', p: 'The urban area includes North, South, East and West Tamworth, Calala, Hillvue, Kingswood, Nemingha, Oxley Vale, Taminda and Westdale, according to state place data.' }
        ] },
        { kind: 'p', text: 'Census counts are lightly randomised by the bureau for privacy, which is why categories in a table may not sum to its total. Our pages copy the published totals rather than recomputing them from the parts.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many real climbs are on a ridge walk?',
      intro: 'A straight line through five named hills east of Tamworth, profiled from official contours and broken into climbs by rainflow counting.',
      body: [
        { kind: 'table', caption: 'The Tamworth hills transect (our measurements from the NSW contour layer, extracted 8 October 2026)', head: ['Measure', 'Value'], rows: [
          ['Length of the line through the five hill points', '8,415 m'],
          ['Contour crossings along it', '871'],
          ['Lowest and highest contour crossed', '560 m and 830 m'],
          ['Every rise added together', '1,416 m'],
          ['Every fall added together', '1,356 m'],
          ['Turning points where up becomes down or back', '221']
        ] },
        { kind: 'table', mt: true, caption: 'Rainflow cycles by height range (full cycle = 1, half cycle = 0.5; our calculation)', head: ['Height range of the cycle', 'Cycles'], rows: [
          ['Under 4 m', '39'],
          ['4 to 10 m', '44'],
          ['10 to 40 m', '22'],
          ['40 to 100 m', '2.5'],
          ['100 m or more', '2.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Profile', p: 'Intersect the line with every contour it crosses and sort the hits by distance. Each one gives a height at a known point along the way.' },
          { h3: 'Reversals', p: 'Keep only the points where the direction of travel flips from climbing to descending or back, collapsing any run that keeps going the same way.' },
          { h3: 'Rainflow', p: 'Push reversals onto a stack; whenever the newest range is at least as big as the one before it, pop a matched cycle and record its height.' }
        ] },
        { kind: 'callout', h3: '1,416 metres of ascent, but only 108 complete climbs', p: 'More than half the cycles, 83 of them, are under 10 metres: gullies a contour line wiggles across, not hills a walker would remember. Keep only cycles of 10 metres or more and the climbing drops to 1,066 metres; keep 20 metres or more and it falls to 878. The biggest single swing is a half cycle of 270 metres. Which number is right depends on the question, and rainflow lets you choose deliberately instead of by accident.' },
        { kind: 'p', text: 'The line joins map points for the five hills; it is not a walking track and crosses private land. Heights between contours are unknown, so a peak between two crossings counts as the higher contour. All figures are ours, computed from Spatial Services data under its Creative Commons Attribution licence.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Writing it in Python',
      h2: 'The stack that turns wiggles into cycles',
      intro: 'Rainflow counting fits in about twenty lines of Python, and each line guards against a different mistake.',
      body: [
        { kind: 'table', caption: 'Parts of the Tamworth rainflow program', head: ['Part', 'What our code does', 'If you skip it'], rows: [
          ['Sorting crossings', '871 contour hits ordered by distance along the line', 'Heights arrive out of order and every cycle is nonsense'],
          ['Collapsing runs', 'Equal or same-direction steps merged into one move', 'A steady climb is miscounted as many tiny cycles'],
          ['Stack comparison', 'Compare the newest range with the previous one', 'Cycles are paired with the wrong partners'],
          ['Leftover half cycles', 'Whatever stays on the stack counts half', 'The two biggest swings vanish from the totals'],
          ['A consistency check', 'Weighted ranges sum to 1,386 m, the mean of 1,416 and 1,356', 'A bug in the pairing goes unseen']
        ] },
        { kind: 'p', text: 'That final check is worth teaching on its own. Every full cycle climbs and descends its range once, and each half cycle does one or the other, so the weighted sum of ranges should sit exactly halfway between total ascent and total descent. When our program printed 1,386, the logic had passed a test it was not written to pass.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write a list of heights by hand, find its turning points with a loop, then run the full Tamworth profile through the same function.' },
          { h3: 'University students', p: 'Compare rainflow with simple threshold filters, and read how the method is used in fatigue analysis of bridges and aircraft parts.' },
          { h3: 'Adults', p: 'Query a public map service from Python, store the answer and build a small, reusable analysis anyone in the office can rerun.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of Spatial Services, the NSW Government, Tamworth Regional Council and the statistics bureau. The bureau provided the Census figures, and the transect, cycle counts and totals all came from our own Python run on the published contours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Tamworth',
      h2: 'School terms in 2027 and clocks that move twice a year',
      intro: 'Calendar facts a Tamworth family will want when choosing a lesson time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Middle of 2027', p: 'The NSW Department of Education lists Term 2 from Tuesday 27 April to Friday 2 July 2027 and Term 3 from Monday 19 July to Friday 24 September.' },
          { h3: 'Term 4 of 2027', p: 'The last term runs from Monday 11 October to Monday 20 December 2027. Staff development days fall inside those dates.' },
          { h3: 'Daylight saving', p: 'New South Wales clocks go forward on the first Sunday in October and back on the first Sunday in April, so the gap to India time changes twice a year.' }
        ] },
        { kind: 'spec', title: 'Name the clock', p: 'Because Tamworth moves between AEST and AEDT, a lesson booked for 5pm needs a stated time zone. We always confirm lesson times in Tamworth time and show the India time alongside.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a list of heights to fatigue-style analysis',
    intro: 'Ages are only a guide; the free lesson finds the right first rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and loops', p: 'Python that walks through a list of heights, finds the highest and lowest and spots where the direction changes.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Algorithms on real data', p: 'Stacks, sorting and counting rules tested on the Tamworth contours and on profiles learners draw themselves.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Signals and fatigue', p: 'Rainflow, filtering and spectra, with every result compared against an independent method.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Automation at work', p: 'Scripts that pull public data, check it and produce a clear report without manual copying.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a rainflow function on request. Why should a Tamworth learner be able to check it?',
    intro: 'Because a version that forgets the leftover half cycles still runs, still prints tidy numbers and quietly loses the two biggest swings on the route.',
    p1: 'Rainflow counting has several published variants, and chatbots blend them freely. One will drop the residue left on the stack; another will count every reversal pair as a full cycle; a third will skip collapsing same-direction steps. All three produce believable output. The Tamworth profile exposes them at once, because its largest swings, 270 and 250 metres, sit in that residue.',
    p2: 'A learner who has built the algorithm line by line carries a ready test: ranges weighted by cycle type must add up to the average of ascent and descent. Apply that to AI-written code and a subtle mistake becomes an obvious one, which is exactly the habit that makes a programmer trustworthy.',
    closer: 'An assistant can supply the code in a second; knowing the check that proves it right is what a Tamworth learner gains from writing it first.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Calala, Hillvue or Oxley Vale, one shared classroom online',
    intro: 'Every lesson is live on video, so where in Tamworth a learner lives makes no difference.',
    cells: [
      { h3: 'No travel', p: 'A student in Westdale and another in Nemingha can sit in the same group without anyone crossing town.' },
      { h3: 'NSW school language', p: 'Teachers refer to New South Wales stages and year levels and plan revision around the state\'s terms.' },
      { h3: 'Trial before anything else', p: 'The first lesson is a full teaching session that finishes with a recommended course and time; it involves no sales pitch and no card.' },
      { h3: 'Small groups', p: 'Groups hold fifteen to twenty learners matched by level, drawn from Tamworth and other places so a slot always fills.' },
      { h3: 'A steady rhythm', p: 'Two lessons a week, roughly eight a month, at the same time, with exam periods and holidays arranged in advance.' },
      { h3: 'Teachers in India', p: 'During daylight saving Tamworth runs five and a half hours ahead of India time, otherwise four and a half, so a 6pm lesson is 12:30pm or 1:30pm for the teacher.' }
    ],
    spec: { title: 'Two gaps a year', p: 'Lesson times stay fixed in Tamworth time across the April and October clock changes; only the hour on our side moves.' }
  },

  fees: {
    h2: 'Fees for Tamworth learners',
    intro: 'Three items make up the whole price list.',
    first: 'A full first lesson free, followed by a written suggestion of level, course and weekly time.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at the same stage.',
    private: 'Around eight one-to-one lessons a month on the same schedule, with a teacher just for you.',
    closer: 'Outside India every family pays in US dollars, so Calala and Kingswood pay the same as anywhere else in Australia. Payment starts only once the trial has fixed a course and a slot; holidays, missed sessions and switching formats are explained on the pricing page.'
  },

  reviewsH2: 'Families on Google about their lessons',

  book: {
    h2: 'Plan the first Python lesson',
    intro: 'Give us an age and something the learner enjoys. A Year 9 student might start by finding the highest point in a handful of heights; an adult might go straight to querying the contour service.',
    success: 'Thanks. Someone from the team will be in touch about a Tamworth lesson shortly.'
  },

  faq: {
    h2: 'Questions from Tamworth families',
    intro: 'The ones we hear most often from learners in the Peel Valley.',
    items: [
      { q: 'What is the population of Tamworth?', a: 'The Census counted 43,874 people in the Tamworth urban area in 2021. Their median age was 37.' },
      { q: 'What is rainflow counting?', a: 'Rainflow counting turns an up-and-down series, such as a load on a part or the height along a walk, into matched pairs of rises and falls called cycles. Each cycle has a height range, so small wiggles and big swings can be counted separately.' },
      { q: 'What did the Tamworth hills project find?', a: 'Along an 8,415 metre line through Macpherson Hill, Flagstaff Mountain, Bald Hill, Daves Hill and Mount Daruka, every rise adds to 1,416 metres. Rainflow finds 108 full cycles, 83 of them under 10 metres, and counting only cycles of 10 metres or more leaves 1,066 metres of real climbing.' },
      { q: 'Why Python for this kind of project?', a: 'Python reads map data, handles lists of numbers and expresses a stack-based algorithm in a few clear lines, so learners can see the method rather than fight the language.' },
      { q: 'Can Year 11 and 12 students in Tamworth join?', a: 'Yes. Teachers work in NSW stages and year levels and time help around the school terms. School assessment tasks remain the student\'s own work.' },
      { q: 'What times work for Tamworth learners?', a: 'Weekday afternoons and Saturday mornings are the usual choices, fixed during the trial and confirmed in Tamworth time. The gap to our teachers is five and a half hours during daylight saving and four and a half the rest of the year.' },
      { q: 'Do you teach primary school children too?', a: 'Yes, from age six, beginning with Scratch blocks and drawing games before any typed Python. The hills project suits older learners.' },
      { q: 'Is there a Modern Age Coders centre in Tamworth?', a: 'No. There are no premises in Australia and none is claimed; all lessons are live online. Learners need a laptop or desktop, sound and a reliable connection, and the phone number listed is Indian.', boiler: true },
      { q: 'What do Tamworth Python classes cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one on the same schedule. Course, format and time are agreed first.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched on level, pace and goals rather than age or suburb. Where no group fits the learner\'s time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Further reading for Tamworth learners',
    html: 'For the whole state, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. Senior students may want <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a> or <a class="cg-inline-link" href="/hsc-maths-advanced-tutoring">HSC Maths Advanced tutoring</a>. Younger family members can start at <a class="cg-inline-link" href="/game-development-for-kids-australia">game development for kids</a>, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australian coding hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tamworth and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-tamn .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-tamn .cg-hero h1 { font-weight: 750; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-tamn .cg-capsule { border-top: 3px solid var(--cg-accent); padding: 0.9rem 0 0.4rem; }
.cg-root.cg-tamn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-tamn .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-tamn .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.7rem); }
.cg-root.cg-tamn .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-tamn .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-tamn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-tamn .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Tamworth, ABS Census 2021 QuickStats, Significant Urban Area 1032 (read 8 October 2026): 43,874 people; median age 37; 11,242 families; 19,242 private dwellings; average 2.4 people per household; separate house 13,946 (84.2 percent; NSW 65.6; Australia 72.3); flat or apartment 368 (2.2 percent; NSW 21.7; Australia 14.2); aged 15 to 19 2,899 (6.6 percent; NSW 5.7; Australia 5.7); Professionals 3,608 (18.5 percent; NSW 25.8; Australia 24.0); Bachelor Degree level and above 5,400 (15.5 percent; NSW 27.8; Australia 26.3). NSW Spatial Services Features of Interest PlacePoint layer, points inside the ABS SUA 1032 polygon: Calala, East Tamworth, Hillvue, Kingswood, Nemingha, North Tamworth, Oxley Vale, South Tamworth, Taminda, Tamworth, West Tamworth, Westdale. NSW Department of Education 2027 term dates: Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December; school development days included. IANA tz 2026e: Australia/Sydney rule AN, daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Rainflow counting on an elevation profile. NSW Spatial Services, NSW Elevation and Depth Theme MapServer layer 2 (Contour), extracted 8 October 2026 (Creative Commons Attribution 4.0, attribution (c) Spatial Services), queried with a polyline through NSW_Physiography_Category layer 0 points Macpherson Hill (150.9588,-31.1003), Flagstaff Mountain (150.9667,-31.0857), Bald Hill (150.9579,-31.0757), Daves Hill (150.9501,-31.0643), Mount Daruka (150.9488,-31.0301). Projected equirectangular about 31.07 S. Leg ends 0, 1,781, 3,169, 4,632, 8,415 m. 871 distinct (distance, elevation) crossings; elevation 560 to 830 m; first 670, last 730. Sum of rises 1,416 m, falls 1,356 m; 221 reversals after collapsing same-direction runs. Three-point stack rainflow: 108 full and 4 half cycles; range bins (full=1, half=0.5) under 4 m 39, 4 to 10 m 44, 10 to 40 m 22, 40 to 100 m 2.5, 100 m and over 2.5; largest cycles half 270, half 250, full 208, half 170 m; weighted range sum 1,386 m; ascent from cycles >= 10 m 1,066 m, >= 20 m 878 m.',
    requiredMentions: [
      '43,874',
      '11,242',
      '19,242',
      '2,899',
      '3,608',
      'Flagstaff Mountain',
      'Daves Hill',
      '871',
      '1,066 metres',
      'Taminda'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Tamworth Significant Urban Area (1032): people, median age, families, dwellings, dwelling structure, age, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1032' },
      { claim: 'NSW Spatial Services, NSW Elevation and Depth Theme, Contour layer (Creative Commons Attribution 4.0, (c) Spatial Services).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme/MapServer/2' },
      { claim: 'NSW Spatial Services, NSW Physiography Category, named hill points.', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Physiography_Category/MapServer/0' },
      { claim: 'NSW Spatial Services licence statement on the Elevation and Depth Theme portal item.', url: 'https://portal.spatial.nsw.gov.au/portal/sharing/rest/content/items/ca62b4699e5d43119617a9dce5bbe0c4?f=json' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates (2027).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Walking-track distances or any claim that the transect is a public route: the line joins map points and crosses private land; the page says so.',
      'Peak heights of the five hills: only contour crossings were measured, so no summit height is claimed.',
      'Whether Tamworth schools follow the Eastern or Western division Term 1 dates: the department page does not say which towns are in each division, so only terms 2 to 4 are quoted.',
      'Peel River gauge data from WaterNSW: realtimedata.waternsw.com.au returned 403 to automated reads and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Spatial Services, the NSW Government, Tamworth Regional Council or the ABS.'
    ]
  }
};
