'use strict';
// Inverness (cg- city page, UK cluster Phase 4, Scotland). Spine: how quickly do earthquakes get rarer as they get
// bigger, and what does a record miss? Gutenberg-Richter frequency-magnitude analysis on the British Geological Survey
// earthquake database (cgi-bin/get_events, CSV output, read 23 September 2026; UK box 49 to 63 N, 12 W to 5 E, 1970 to
// 2025, 12,827 events of which 489 flagged induced and left out; scratchpad inv/gr.py). Magnitudes as listed by BGS; the
// fetched pages did not state the scale. Within 100 km of Inverness (57.4778 N, 4.2247 W), tectonic, 1970 to 2025: 883
// events, largest 4.4 (Kintail, 10 August 1974), then 4.1 (Kintail, 27 November 1975), 4.0 (Kintail, 6 August 1974);
// counts at magnitude 2 or more 139, 3 or more 28, 4 or more 3. Magnitude of completeness by maximum curvature (mode of
// the histogram), by decade near Inverness: 1970s 3.4, 1980s 0.9, 1990s 0.3, 2000s 1.2, 2010s 1.0, 2020s 0.9. Events of
// magnitude 3 or more near Inverness: 1970s 25, 1980s 0, 1990s 1, 2000s 1, 2010s 0, 2020s 1. b-value by Aki-Utsu maximum
// likelihood, events since 2000: cutoff 1.5, 0.87 +/- 0.09 (95 events); cutoff 2.0, 1.03 +/- 0.16 (40). UK box since
// 2000: cutoff 1.5, 0.64 +/- 0.02 (1,649); 2.0, 0.69 +/- 0.02 (812); 2.5, 0.72 +/- 0.04 (372). UK box 1970 to 2025
// counts: 1,857 at 2 or more, 355 at 3 or more, 56 at 4 or more; largest 5.6 (Northern North Sea, 23 January 1989).
// Pre-1970 search (box 56.5 to 58.4 N, 6 to 2.5 W, 1700 to 1969), within 100 km: 40 events from 1768, smallest 2.0,
// median 3.2 (1970 to 2025: smallest -0.7, median 1.1); listed at Inverness: 13 August 1816 magnitude 5.1 (depth 18 km)
// and 4.7; 15 November 1890 magnitude 4.5; also 1901 5.0 within 100 km.
// Lesson family: Gutenberg-Richter law, magnitude of completeness, maximum-likelihood b-value, detection bias.
// Screened 23 September 2026: Gutenberg-Richter and b-value 0 hits in src/pages and content/uk.
// Heritage from Historic Environment Scotland (designations layer and portal, read raw): LB35153 Town Steeple, 2 Bridge
// Street and Church Street, Category A, added 21 May 1971: Alexander Laing following design by William Sibbald, 1791;
// octagonal spire with ball and weathercock. LB35330 Cathedral Church of St Andrew (Episcopal), Ness Walk, Category A:
// Alexander Ross, 1866-69. Other Category A listings in the centre include the Old High Church, Dunbar's Hospital, the
// Town House and Balnain House.
// Census: National Records of Scotland, Scotland's Census 2022 first results, rounded to the nearest hundred: Highland
// S12000017 235,400 usual residents (2011: 232,132), 111,700 households (2011: 102,091), 9.2 per square km, 14.7 percent
// aged 0 to 14, 61.6 percent 15 to 64, 23.7 percent 65 and over; Scotland 5,436,600, 69.8 per square km, 15.3, 64.6 and
// 20.1 percent. Places in OS Open Names (NH64): Inverness (City, Highland); Merkinch, Dalneigh, Culcabock, Raigmore,
// Clachnaharry, Scorguie, Lochardil, Smithton, Westhill, North Kessock, Bunchrew.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'INVERNESS', blurb: 'The city on the River Ness, with a project that asks how quickly earthquakes get rarer with size, and what the old record missed.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-inverness',
  code: 'inv',
  accent: '#301565',
  accentRationale: 'Inverness: a deep violet, from the solver (12.00:1 on every paper tint, dE 7.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Inverness',
    eyebrow: 'Inverness, Highland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Highland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Inverness',
  title: 'Best Coding Classes in Inverness | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Inverness learners aged 6 to 67, from Merkinch and Dalneigh to Culcabock and Raigmore. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Inverness, on a page that fits the Gutenberg-Richter law to the British Geological Survey\'s earthquake records around the city.',
  twitterDescription: 'Inverness learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Inverness Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and earth science data, mathematics and AI taught live online in English to Inverness children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Inverness',
  capsuleQ: 'What are the best coding classes in Inverness?',
  capsule: 'Highland, the council area around Inverness, had about 235,400 usual residents at Scotland\'s 2022 census, and only 9.2 people per square kilometre, figures rounded by National Records of Scotland. The British Geological Survey\'s earthquake database lists a magnitude 5.1 earthquake at Inverness on 13 August 1816. Anyone in Inverness from six to sixty-seven can join live video lessons led by a teacher in India, either one to one or in a class of five to ten learners at a single level, booked around the Scottish school day and working hours. Nothing is charged for the opening lesson; a place in a class then costs USD 100 each month, and private lessons USD 150.',
  lead: 'Since 1970 the British Geological Survey has recorded 883 earthquakes within 100 kilometres of Inverness, nearly all too small to feel. Only 28 reached magnitude 3, and 3 reached magnitude 4. Our Inverness project asks how quickly earthquakes become rarer as they grow, the pattern known as the Gutenberg-Richter law, and it meets a trap straight away: in the 1970s the records near Inverness hardly include anything below magnitude 3, not because small quakes stopped happening, but because the record of that decade did not capture them. Teenagers learn to find the magnitude a catalogue is complete above, then estimate the slope, called the b-value, only from data they can trust.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Inverness.',

  picks: {
    eyebrow: 'Course picks for Inverness',
    h2: 'Four courses for the city on the Ness',
    intro: 'Choose the course nearest to what the learner already likes. Each begins with a free live lesson, and booking it needs no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to a shaking-ground simulation with bigger and smaller tremors.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Powers of ten, logarithms and counting written as short programs, the mathematics behind every magnitude scale.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including fitting a law to a catalogue and spotting what the catalogue misses.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science for adults whose records improve over time and who need to separate real change from better detection.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Inverness today',
      h2: 'A city in a vast, thinly settled council area',
      intro: 'Inverness lies in the Highland council area. National Records of Scotland published the first 2022 census results by council area, each figure rounded to the nearest hundred.',
      body: [
        { kind: 'table', caption: 'Highland against Scotland: people counted in 2011 and, rounded, in 2022', head: ['Where', 'People in 2011', 'People in 2022 (to the nearest hundred)', 'People per square kilometre in 2022'], rows: [
          ['Highland', '232,132', '235,400', '9.2'],
          ['Scotland', '5,295,403', '5,436,600', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Households', p: 'Highland had about 111,700 households with at least one usual resident in 2022, against 102,091 at the 2011 census.' },
          { h3: 'Young and old', p: 'Children up to 14 made up 14.7% of Highland residents in 2022 (Scotland 15.3%), and people aged 65 or more 23.7% (Scotland 20.1%).' },
          { h3: 'Room to spare', p: 'At 9.2 residents per square kilometre, Highland is very thinly settled; Scotland as a whole averages 69.8.' }
        ] },
        { kind: 'p', text: 'National Records of Scotland rounds every 2022 figure to the nearest hundred on its own, so parts may not add exactly to totals, and we quote each as published. Our Inverness classes take in the city and the places around the Firth. A Dalneigh eight-year-old making a first game, an S5 pupil from Lochardil working towards Higher Computing Science and a North Kessock adult learning Python for work could each join a different class, placed by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Steeple and cathedral',
      h2: 'An 18th-century steeple and a riverside cathedral',
      intro: 'From Historic Environment Scotland\'s listing records, and from the British Geological Survey\'s earthquake database.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1791', p: 'Historic Environment Scotland dates the Town Steeple, at Bridge Street and Church Street, to Alexander Laing following a design by William Sibbald, with an octagonal spire topped by a ball and weathercock. It is listed at Category A.' },
          { h3: '1866 to 1869', p: 'The Cathedral Church of St Andrew on Ness Walk was built to the designs of Alexander Ross in these years, according to its Category A listing record.' },
          { h3: '13 August 1816', p: 'The British Geological Survey\'s database lists an earthquake at Inverness that day of magnitude 5.1, and another later the same evening. It also lists one of magnitude 4.5 on 15 November 1890.' }
        ] },
        { kind: 'p', text: 'Historic Environment Scotland also lists, at Category A, the Old High Church, Dunbar\'s Hospital, the Town House and Balnain House in the centre of the city. We quote the database\'s early entries exactly as it lists them. We have no connection with Historic Environment Scotland or the British Geological Survey, and the descriptions here are theirs.' },
        { kind: 'spec', title: 'Where the earthquake data comes from', p: 'The British Geological Survey publishes a searchable database of earthquakes in and around the UK, with date, time, position, depth, magnitude and a flag marking events it lists as induced. We downloaded every event from 1970 to 2025 in a box around the UK, 12,827 in all, and left out the 489 flagged as induced.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How quickly do earthquakes get rarer?',
      intro: 'The Gutenberg-Richter law says that the number of earthquakes at or above a magnitude falls by a steady factor for each step up the scale. Plotted on a logarithmic axis, the counts form a straight line, and its slope is the b-value. A b-value of 1 would mean ten times fewer earthquakes for each whole step of magnitude.',
      body: [
        { kind: 'table', caption: 'Earthquakes within 100 km of Inverness in the British Geological Survey database, by decade, and the smallest magnitude each decade records reliably', head: ['Decade', 'Earthquakes listed', 'Complete above about', 'Magnitude 3 or more'], rows: [
          ['1970s', '97', '3.4', '25'],
          ['1980s', '169', '0.9', '0'],
          ['1990s', '190', '0.3', '1'],
          ['2000s', '109', '1.2', '1'],
          ['2010s', '155', '1.0', '0'],
          ['2020s so far', '163', '0.9', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count by size', p: 'Group the 883 earthquakes since 1970 into steps of 0.1 magnitude. The smallest recorded is minus 0.7, far too small to feel; the largest, 4.4, was at Kintail on 10 August 1974.' },
          { h3: '2. Find completeness', p: 'Below a certain size, quakes go unrecorded, so counts fall instead of rising. The most common magnitude in each decade marks roughly where the record becomes complete: 3.4 in the 1970s, about 1 since.' },
          { h3: '3. Estimate b', p: 'Use only events above the completeness level and a maximum-likelihood formula. Since 2000, from magnitude 1.5 upwards, the b-value near Inverness is 0.87, give or take 0.09; from magnitude 2, it is 1.03, give or take 0.16.' }
        ] },
        { kind: 'callout', h3: 'What the 1970s row really shows', p: 'The 1970s look far more active near Inverness: 25 earthquakes of magnitude 3 or more, against 3 in the forty-odd years since. Most of them belong to a sequence at Kintail in 1974 and 1975. At the same time the decade\'s record barely includes anything smaller, while later decades are complete down to about magnitude 1. So the table shows two different things: a genuine burst of larger earthquakes, and a record that did not yet capture the small ones. Mixing the decades without checking completeness would give a wrong b-value.' },
        { kind: 'p', text: 'Going further back makes the point sharper. The database lists 40 earthquakes within 100 km of Inverness between 1768 and 1969, with a smallest magnitude of 2.0 and a median of 3.2; from 1970 to 2025 the median is 1.1. The early record captured only the quakes large enough to be noticed. Across the whole of the UK since 2000 the b-value comes out lower, between 0.64 and 0.72 depending on the cutoff, and the fact that it rises as the cutoff rises is itself a warning that the smallest events are still undercounted somewhere.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Records that improve',
      h2: 'Five checks before comparing old and new records',
      intro: 'Learned on Highland earthquakes, then used for bird counts, traffic counts, meteor sightings, website analytics and any record whose ability to detect things changes over time.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Inverness earthquake study', head: ['Question', 'For the earthquake records', 'What goes wrong if you skip it'], rows: [
          ['What is left out?', 'The 489 events flagged as induced', 'Events the database marks as induced mixed in'],
          ['Where is the record complete?', 'Completeness found decade by decade', 'Fewer small events read as a quieter Earth'],
          ['How is the slope estimated?', 'Maximum likelihood above the cutoff', 'A line through incomplete counts'],
          ['Does the answer depend on the cutoff?', 'Tried at 1.5, 2.0 and 2.5', 'One cutoff chosen for a pleasing result'],
          ['How big is the uncertainty?', 'Given with every b-value', 'A b of 1.03 from 40 events treated as exact']
        ] },
        { kind: 'p', text: 'The fifth row matters most near Inverness, where there are only 40 events of magnitude 2 or more since 2000. A b-value from so few earthquakes carries a wide margin, 0.16 either way, and the two estimates in the table overlap. The honest statement is that the local b-value is somewhere near 1, not that it is exactly 0.87 or 1.03.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Dropping pebbles of different sizes, counting how many of each size there are, and noticing the big ones are rare.' },
          { h3: 'Teenagers', p: 'Logarithms, histograms, maximum likelihood and completeness in Python, on 12,827 real British Geological Survey records.' },
          { h3: 'Adults', p: 'Comparing records collected with changing methods, and correcting for what the older methods could not detect.' }
        ] },
        { kind: 'p', text: 'We have no connection with the British Geological Survey, Historic Environment Scotland, National Records of Scotland or Highland Council. The earthquake database, listing records and census tables are published openly; the counts, completeness estimates and b-values on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting pebbles to the Gutenberg-Richter law',
    intro: 'The ages are a guide only; the free lesson shows where each learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Big and small', p: 'Sorting and counting things by size in block code, and charting how the biggest are the rarest.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Powers of ten', p: 'Place value, powers of ten and simple logarithms in Python, with a chart that turns a curve into a line.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Laws from data', p: 'The Gutenberg-Richter law, completeness and maximum likelihood on real British Geological Survey records.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Better detection', p: 'Separating real change from improved measurement in any record kept over many years.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI learns from historical records. Why should an Inverness teenager ask what those records missed?',
    intro: 'Because a model trained on the 1970s earthquake list would conclude small earthquakes near Inverness barely happened then, and it would be wrong.',
    p1: 'Every dataset records only what its instruments could detect. An AI system has no way to know that a record captured more over time unless someone tells it. A learner who has watched the completeness level fall from 3.4 to about 1 knows to ask how any record was collected before trusting a pattern in it.',
    p2: 'The b-value work adds a second habit: report the uncertainty. From 40 earthquakes, a b-value of 1.03 comes with a margin of 0.16. Stating that margin, rather than the neat single number, is exactly the judgement machines leave to people.',
    closer: 'So an Inverness teenager should keep learning to code in 2026, in a city where the geological record reaches back to 1816: AI can fit a law in seconds, but a person has to ask what the data could not see.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Merkinch, Culcabock or Smithton, in the same class',
    intro: 'Inverness learners live across the city and along the Firth, and in a council area of 9.2 people to the square kilometre distance can be a real obstacle. Online, it disappears.',
    cells: [
      { h3: 'City and firth', p: 'A learner in Clachnaharry and another in Westhill can share one class without a drive through the city.' },
      { h3: 'Scottish stages', p: 'Learners are placed by their stage in Scottish schooling, primary P1 to P7 and secondary S1 to S6 through National 5, Higher and Advanced Higher, with all teaching in English.' },
      { h3: 'Your free lesson', p: 'Rather than a presentation, the first session is a proper coding task; at the end the teacher recommends where to begin, which course fits and a weekly time. There is no card to give.' },
      { h3: 'Grouped by level', p: 'Each class holds five to ten learners working at one level; because they come from across the UK and beyond, there are workable times at every stage.' },
      { h3: 'A weekly habit', p: 'Two fixed lessons each week, about eight a month, with holidays and exam leave planned with the teacher.' },
      { h3: 'Teachers\' evenings', p: 'Because India keeps a single time zone year-round, a 5 pm Highland lesson begins at 21:30 for our teachers in summer and 22:30 in winter.' }
    ],
    spec: { title: 'Across the Highlands', p: 'Learners in Nairn, Dingwall, Beauly or Fort William join the same classes, since every lesson is online and classes are formed by level.' }
  },

  fees: {
    h2: 'Inverness lesson fees',
    intro: 'The first lesson is free, then a single fee each month.',
    first: 'A full lesson without charge, closing with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month in a class of five to ten learners at one level.',
    private: 'About eight live lessons a month, with a teacher for your learner alone.',
    closer: 'Families in Scorguie or Bunchrew pay in US dollars, like all families outside India, and our site lists no pound prices. Nothing is charged until the free lesson is over and you have agreed a course and a weekly time with us; the pricing page covers pauses, missed lessons and switching between group and one-to-one teaching.'
  },

  reviewsH2: 'Six family reviews from Google, as they wrote them',

  book: {
    h2: 'Book a free lesson for an Inverness learner',
    intro: 'The first lesson depends on the learner: a big-and-small counting game for a young child, a short Python program that counts values above a threshold for a beginner, or the British Geological Survey\'s earthquake records and the Gutenberg-Richter law for a teenager ready for real science.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Inverness learner.'
  },

  faq: {
    h2: 'Inverness coding class questions',
    intro: 'What Inverness families ask us most.',
    items: [
      { q: 'How many people live in Highland?', a: 'Scotland\'s Census 2022 counted about 235,400 usual residents in Highland, the council area around Inverness, rounded to the nearest hundred, against 232,132 in 2011. These are the council-area first results.' },
      { q: 'How does Highland compare with Scotland?', a: 'Highland has room to spare: 9.2 people to each square kilometre, where the Scottish figure is 69.8. Its population is also older, with 23.7% aged 65 and over in 2022 compared with 20.1% nationally.' },
      { q: 'What is the Gutenberg-Richter law?', a: 'A pattern in earthquake records: the number of quakes at or above a magnitude falls by a steady factor for every step up the scale. On a logarithmic plot it is a straight line, and its slope is called the b-value.' },
      { q: 'How many earthquakes happen near Inverness?', a: 'The British Geological Survey lists 883 within 100 kilometres of the city from 1970 to 2025, almost all too small to feel. Twenty-eight reached magnitude 3 and three reached magnitude 4, the largest being 4.4 at Kintail in 1974.' },
      { q: 'Where does the earthquake data come from?', a: 'From the British Geological Survey\'s searchable earthquake database, downloaded as a table of dates, positions, depths and magnitudes. We are not connected with the British Geological Survey.' },
      { q: 'How old is the Inverness Town Steeple?', a: 'Historic Environment Scotland dates it to 1791, built by Alexander Laing following a design by William Sibbald, and lists it at Category A.' },
      { q: 'When do Inverness lessons take place?', a: 'Inverness families usually pick a slot after school, on a weekday evening or at the weekend, confirmed in the free lesson. A teatime lesson in the Highlands is a late one for our teachers in India, whose clocks run four and a half hours ahead of Inverness from late March to late October, and five and a half hours ahead through the winter.' },
      { q: 'Is there an Inverness centre?', a: 'No. We have no centre in Inverness or anywhere else in the UK, because every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are Inverness lessons?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or address, with five to ten learners at the same stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scotland and beyond',
    html: 'Along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen page</a> packs every place name in the city into a few kilobytes, and in Fife <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> repairs Carnegie\'s autobiography with a Hamming code. Pupils revising can use our <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages, and families new to us will find how our stages fit the Curriculum for Excellence in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a>. Other cities are all reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Inverness and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-aberdeen', label: 'Aberdeen' },
    { href: '/best-coding-class-in-dunfermline', label: 'Dunfermline' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-inv .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-inv .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-inv .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.9rem 1rem; }
.cg-root.cg-inv .cg-eyebrow { letter-spacing: 0.16em; font-weight: 680; text-transform: uppercase; }
.cg-root.cg-inv .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-inv .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-inv .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-inv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-inv .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-inv .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded to the nearest hundred: Highland S12000017 235,400 (2011: 232,132), 111,700 households (2011: 102,091), 9.2 per square kilometre, 14.7 percent aged 0 to 14, 23.7 percent 65 and over; Scotland 5,436,600 (2011: 5,295,403), 69.8, 15.3 and 20.1 percent. HES LB35153 Town Steeple (Category A, 21 May 1971; Laing after Sibbald, 1791), LB35330 Cathedral Church of St Andrew (Category A; Alexander Ross, 1866-69); also Category A: Old High Church, Dunbar\'s Hospital, Town House, Balnain House. BGS database: Inverness 13 August 1816 magnitude 5.1 and 4.7; 15 November 1890 magnitude 4.5.',
    localProject: 'How quickly do earthquakes get rarer? BGS database 1970 to 2025, 12,827 events, 489 induced left out. Within 100 km of Inverness: 883; 139 at magnitude 2 or more, 28 at 3 or more, 3 at 4 or more; largest 4.4 Kintail 1974. Completeness by decade: 3.4, 0.9, 0.3, 1.2, 1.0, 0.9; magnitude 3 or more by decade 25, 0, 1, 1, 0, 1. b-value since 2000: 0.87 +/- 0.09 (cutoff 1.5, 95 events), 1.03 +/- 0.16 (2.0, 40). UK: 0.64, 0.69, 0.72 at cutoffs 1.5, 2.0, 2.5. Pre-1970 within 100 km: 40 events from 1768, smallest 2.0, median 3.2. Lesson family: Gutenberg-Richter law and completeness.',
    requiredMentions: [
      '235,400',
      'Gutenberg-Richter',
      'b-value',
      'Kintail',
      'Town Steeple',
      'Balnain',
      'Merkinch',
      'Dalneigh',
      'Culcabock',
      'Clachnaharry',
      'Scorguie',
      'Lochardil'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Highland and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'British Geological Survey, earthquake database search (CSV output): UK events 1970 to 2025 and historical events near Inverness.', url: 'https://www.earthquakes.bgs.ac.uk/earthquakes/dataSearch.html' },
      { claim: 'Historic Environment Scotland, LB35153 Town Steeple.', url: 'https://portal.historicenvironment.scot/designation/LB35153' },
      { claim: 'Historic Environment Scotland, LB35330 Cathedral Church of St Andrew (Episcopal).', url: 'https://portal.historicenvironment.scot/designation/LB35330' },
      { claim: 'Historic Environment Scotland, designations data (listed buildings layer): Category A listings in central Inverness.', url: 'https://inspire.hes.scot/arcgis/rest/services/HES/HES_Designations/MapServer' },
      { claim: 'Ordnance Survey, OS Open Names: Inverness and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'The magnitude scale used by the BGS database: not stated on the fetched pages, so the page says only magnitude as listed.',
      'Any claim that the 1816 earthquake damaged the Town Steeple, or a named fault through Inverness: not in the fetched records.',
      'An explanation of why the UK-wide b-value is below 1: not taken from a fetched source; the page notes only that it rises with the cutoff.',
      'A population figure for Inverness itself: the census first results are for council areas, so only Highland is quoted.',
      'A percentage growth for Highland since 2011: the 2022 figure is rounded, so both numbers are given without a derived rate.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the British Geological Survey, Historic Environment Scotland, National Records of Scotland or Highland Council.'
    ]
  }
};
