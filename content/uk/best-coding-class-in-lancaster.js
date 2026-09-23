'use strict';
// Lancaster (cg- city page, UK cluster Phase 4). Spine: is the Lune flooding more, or could it be chance? A
// permutation test on annual peak flows from the Environment Agency Hydrology daily maximum flow for the River Lune at
// Caton (station 9ad5d28c-7cfe-46db-b39d-58701689cd59, record from 1 January 1979; read 23 September 2026; scratchpad
// lan/perm.py). Water years (1 October to 30 September, named by the year they end). Excluded: 1979 and 2026 (under
// 90 percent coverage); 2015, 2024 and 2025 (peak day graded Estimated); 2022 (peak graded Suspect). 42 usable water
// years, 1980 to 2023. Largest peaks: 1,740 cubic metres per second on 5 December 2015; 1,400 on 31 January 1995; 1,200
// on 8 January 2005; 1,170 on 23 November 2017; 1,150 on 9 February 2020. First 21 years (1980 to 2000) mean 783.2,
// median 773.0; last 21 (2001 to 2023) mean 851.6, median 778.0; difference 68.4. Permutation test, 100,000 shuffles:
// one-sided p 0.2103, two-sided 0.4214; 95th percentile of shuffled differences 135.3. Without the water year holding
// December 2015: difference 24.0, one-sided p 0.367. Peaks above 1,000: 4 against 6. Trying every split point with at
// least 8 years each side (26 splits, 3,000 shuffles each): 1 gives one-sided p under 0.05.
// Lesson family: permutation test (null distribution by shuffling, one- and two-sided p, influence of one extreme,
// multiple comparisons). Screened 23 September 2026: permutation test appears only in passing (Glasnevin course
// note); distinct from Colchester survival and Oxford Markov chain.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Lancaster E07000121: TS001 142,934 usual residents,
// 134,704 in households, 8,230 communal; TS007A 10,707 aged 15 to 19 (7.5 percent, England 5.7), 12,778 aged 20 to 24
// (8.9, England 6.0), 7,955 aged 70 to 74 (5.6, England 5.0); TS068 33,065 students of 136,193 aged 5 and over (24.3
// percent, England 20.4); TS006 252.1 per square km (England 433.5). Lancaster Castle website, History: often known as
// John O' Gaunt's Castle; beginnings date back to Roman times on the hill overlooking the town and the River Lune;
// owned by the Duchy of Lancaster; until 2011 a fully functioning HM Prison. NHLE Grade I: Lancaster Castle 1194905
// (listed 18 February 1970); Priory and Parish Church of St Mary 1195068, Lancaster Canal Lune Aqueduct 1362451 and
// Ashton Memorial 1288429 (all listed 22 December 1953). Places in OS Open Names (Lancaster district): Morecambe,
// Heysham, Carnforth, Galgate, Caton, Bolton-le-Sands, Halton, Scotforth, Bowerham, Skerton, Hest Bank, Silverdale,
// Torrisholme, Overton.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LANCASTER', blurb: 'The city on the Lune, with a project that asks whether the river is flooding more or whether chance could explain it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-lancaster',
  code: 'lan',
  accent: '#8E2E29',
  accentRationale: 'Lancaster: a rose red for the county town, from the solver (6.62:1 on every paper tint, dE 6.7 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Lancaster',
    eyebrow: 'Lancaster, Lancashire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancaster' },
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lancaster, England',
  title: 'Best Coding Classes in Lancaster | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Lancaster learners aged 6 to 67, from Morecambe and Heysham to Carnforth. The first lesson costs nothing.',
  ogDescription: 'Coding and AI lessons for Lancaster, on a page that shuffles 42 years of River Lune flood peaks to ask whether the river is really rising.',
  twitterDescription: 'Lancaster learners aged six to sixty-seven can learn coding, Python and AI with us in live online lessons, with a free first lesson.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Lancaster Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics with real data, AI and mathematics taught live online in English to Lancaster children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Lancaster',
  capsuleQ: 'What are the best coding classes in Lancaster?',
  capsule: 'The Lancaster district had 142,934 usual residents at the 2021 census, and 8.9% of them were aged 20 to 24, against 6.0% across England. Lancaster Castle says its beginnings date back to Roman times, on the hill above the town and the River Lune, and that it was a working prison until 2011. Lancaster learners from six to sixty-seven can join our teachers in India in live video lessons, alone or in a class of five to ten at the same level, at times planned around the UK day. Lesson one costs nothing, and from then on families pay USD 100 a month for a group place or USD 150 for a teacher of their own.',
  lead: 'The River Lune at Caton, just upstream of Lancaster, has its flow measured every day. Our teenagers take the highest flow of each year from 1980 to 2023 and compare the two halves. The recent 21 years average 851.6 cubic metres per second at their peak, the earlier 21 years 783.2. Is the river flooding more? A permutation test answers without any formula: shuffle the 42 yearly peaks into random halves 100,000 times and see how often chance alone produces a gap that large. It does so about one time in five. Remove the single biggest flood, 1,740 cubic metres per second in December 2015, and the gap almost vanishes.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Lancaster.',

  picks: {
    eyebrow: 'Course picks for Lancaster',
    h2: 'Four courses for the Lune city',
    intro: 'Go with the course nearest to what the learner already likes; all four open with a free live lesson, booked without any payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards shuffling cards and running experiments in code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, enough to load decades of river data and shuffle it a hundred thousand times.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including telling a genuine change from a pattern chance could produce.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who need to know whether a change in their figures is real before anyone acts on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lancaster today',
      h2: 'A university city with the coast next door',
      intro: 'Census 2021 figures for the City of Lancaster district, which includes Morecambe, Heysham and Carnforth, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Lancaster district, Census 2021', head: ['Measure', 'Lancaster', 'England'], rows: [
          ['Usual residents', '142,934', '56,490,048'],
          ['Living in households', '134,704', 'Not compared'],
          ['Living in communal establishments', '8,230', 'Not compared'],
          ['Aged 15 to 19', '10,707 (7.5%)', '5.7%'],
          ['Aged 20 to 24', '12,778 (8.9%)', '6.0%'],
          ['Aged 70 to 74', '7,955 (5.6%)', '5.0%'],
          ['Students among residents aged 5 and over', '33,065 (24.3%)', '20.4%'],
          ['Usual residents per square kilometre', '252.1', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students and teenagers', p: 'In 2021, 8.9% of residents were aged 20 to 24 and 7.5% were 15 to 19, both well above England, and 24.3% of those aged five and over were studying.' },
          { h3: 'Older residents too', p: 'People aged 70 to 74 were 5.6% of the district, above England\'s 5.0%, in a district that runs from the city out to the Morecambe coast.' },
          { h3: 'Communal living', p: 'Student halls and other communal establishments housed 8,230 people in 2021, while 134,704 lived in ordinary households.' }
        ] },
        { kind: 'p', text: 'Our Lancaster groups draw on the whole district. A Year 4 child in Morecambe might be making a first game, a Year 12 student in Bowerham tackling A level Computer Science, and an adult in Carnforth learning Python for work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Castle, priory and aqueduct',
      h2: 'On the hill above the Lune',
      intro: 'From Lancaster Castle\'s own history page and Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Roman beginnings', p: 'Lancaster Castle, often called John O\' Gaunt\'s Castle, says its beginnings date back to Roman times, from a commanding position on the hill over the town and the River Lune.' },
          { h3: 'Until 2011', p: 'The castle is owned by the Duchy of Lancaster and was a fully functioning HM Prison until 2011; today it is open for tours and events.' },
          { h3: 'Four at Grade I', p: 'Historic England lists Lancaster Castle, the Priory and Parish Church of St Mary, the Ashton Memorial and the Lancaster Canal\'s Lune Aqueduct at Grade I.' }
        ] },
        { kind: 'p', text: 'The aqueduct matters for this page: it carries a canal over the very river our project measures. We have no connection with Lancaster Castle, the Duchy of Lancaster, Lancaster City Council, Historic England or the Environment Agency. The Lune is here because its daily flow record at Caton runs back to 1979, and a long record is exactly what you need to tell change from chance.' },
        { kind: 'spec', title: 'Where the flows come from', p: 'The Environment Agency\'s Hydrology service publishes the daily maximum flow of the Lune at Caton as open data from 1979, with a quality grade on every day. Water years run from 1 October to 30 September.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is the Lune flooding more, or could it be chance?',
      intro: 'A permutation test asks how surprising a result is by rebuilding the world where nothing changed: shuffle the labels, recompute, and repeat thousands of times.',
      body: [
        { kind: 'table', caption: 'River Lune at Caton, highest daily maximum flow in each water year, 42 usable years from 1980 to 2023, cubic metres per second', head: ['Comparison', 'Earlier 21 years (1980 to 2000)', 'Later 21 years (2001 to 2023)'], rows: [
          ['Average annual peak', '783.2', '851.6'],
          ['Middle (median) annual peak', '773.0', '778.0'],
          ['Years with a peak above 1,000', '4', '6']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean the years', p: 'Keep water years with at least 90% of days recorded and a peak graded good or unchecked. Six years fail, including 2015 and 2024, whose peak days were estimated, leaving 42.' },
          { h3: '2. Measure the gap', p: 'The later half averages 68.4 cubic metres per second more at its peak. But its middle value is almost the same, a sign that a few big years are doing the work.' },
          { h3: '3. Shuffle', p: 'Deal the 42 peaks into two random halves 100,000 times. A gap of 68.4 or more turned up in 21.0% of shuffles, so chance explains it comfortably.' }
        ] },
        { kind: 'callout', h3: 'One flood, and one trap', p: 'The biggest peak in the record, 1,740 cubic metres per second on 5 December 2015, sits in the later half. Take that one year out and the gap falls to 24.0, with chance producing it more than a third of the time. The second lesson is subtler. We tried every possible split year with at least eight years on each side, 26 splits in all, and one of them gave a result that looks significant at the usual 5% level. Search enough ways and something will always look surprising; the honest test fixes the question before looking.' },
        { kind: 'p', text: 'None of this proves the river is not changing. Forty-two years is short for floods, and a permutation test with 21 years a side can only detect large shifts. What the project shows is that this record, on its own, cannot tell a real rise from the luck of the draw, and that the other big years, 1,400 in January 1995, 1,200 in January 2005 and 1,150 in February 2020, are spread across both halves.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Change or chance?',
      h2: 'Five questions before claiming a trend',
      intro: 'Learned on the Lune, then used in medicine, sport, product testing, climate science and anywhere two groups of numbers look different.',
      body: [
        { kind: 'table', caption: 'Decisions behind a permutation test', head: ['Question', 'For the Lune peaks', 'What goes wrong if you skip it'], rows: [
          ['Which years are trustworthy?', 'Complete years with good or unchecked peaks: 42', 'Estimated peaks shaping the answer'],
          ['Was the question fixed first?', 'Two equal halves, chosen in advance', 'Hunting for the split that looks dramatic'],
          ['One-sided or two-sided?', 'One-sided p 0.21, two-sided 0.42, both reported', 'Picking whichever looks stronger'],
          ['How much does one value matter?', 'Rerun without the December 2015 year', 'A single storm read as a trend'],
          ['What could the test detect?', 'Only large shifts with 21 years a side', 'No difference read as proof of no change']
        ] },
        { kind: 'p', text: 'The second row is where most real mistakes happen. It is easy to look at a chart, spot where the numbers seem to jump and test exactly there. Doing so guarantees a surprising result sooner or later. Deciding the comparison before looking, and saying how many comparisons were tried, is what keeps a test honest.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Shuffling cards between two piles again and again, and counting how often the piles differ by as much as a real result.' },
          { h3: 'Teenagers', p: 'Four decades of Environment Agency flows in Python, a permutation test built from scratch, and a check of how one flood changes it.' },
          { h3: 'Adults', p: 'Testing whether a change in figures at work is real, with the question fixed first and every comparison counted.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Lancaster City Council, Lancaster Castle or Historic England. The flows, census tables and listing records are open data; the peaks, shuffles and p-values on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From shuffled cards to a permutation test',
    intro: 'Ages here are approximate; a learner\'s real starting rung is found in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Piles and chance', p: 'Dealing numbered cards into two piles, adding them up and seeing how much piles differ purely by luck.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Shuffles in code', p: 'Using Python\'s random module to shuffle a list and count how often a surprising result appears.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Permutation tests', p: 'A full permutation test on real river data, one- and two-sided p-values, and the effect of a single extreme year.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Evidence at work', p: 'Judging whether changes in real figures are genuine, with the question set in advance and the limits stated.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can spot trends in any chart. Why should a Lancaster teenager shuffle river data by hand?',
    intro: 'Because spotting a pattern is easy, and knowing whether chance could have made it is the real skill.',
    p1: 'AI tools are very good at finding patterns, including patterns that are not really there. A learner who has shuffled 42 years of Lune peaks and watched chance produce the same gap one time in five will ask the right question of any trend a tool reports: how often would this happen if nothing had changed?',
    p2: 'The split-point trap is one of the most common ways analysis goes wrong, by people and by automated tools alike. Seeing one of 26 splits look significant, on data with no clear change, is a lesson in why good practice fixes the question first and reports every attempt.',
    closer: 'So a Lancaster teenager should keep learning to code in 2026, beside a river with a long memory: machines will always find a pattern, but someone has to ask whether luck alone could have drawn it.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Morecambe, Skerton or Silverdale, straight from home',
    intro: 'The district reaches from the city to the Morecambe coast and the villages of the Lune valley. Online, each of them is equally close to the lesson.',
    cells: [
      { h3: 'City, coast and valley', p: 'A learner in Heysham and another in Caton can share a class without anyone crossing the Lune.' },
      { h3: 'Levels schools will recognise', p: 'A Lancashire pupil will find our levels familiar, since they track the English curriculum from Reception, through each Key Stage, to GCSE and A level, and all teaching is in English.' },
      { h3: 'Learning from the first minute', p: 'Even the free session is spent on a real task, and afterwards we suggest a level, a course and a regular slot; nobody asks for card details.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one stage, from Lancaster, around the UK and abroad, which keeps sensible times open at every level.' },
      { h3: 'Two lessons a week', p: 'Two fixed lessons weekly, about eight a month, with half terms and exams arranged with the teacher in advance.' },
      { h3: 'Teaching across the time gap', p: 'When it is 5 pm in Lancaster it is 9.30 pm for our teachers in summer and 10.30 pm in winter, because the clocks in India never change; they plan their working day around UK learners.' }
    ],
    spec: { title: 'Across north Lancashire and beyond', p: 'Families in Garstang, Kendal, Kirkby Lonsdale or Fleetwood join exactly the same classes, since every group is online and set by level.' }
  },

  fees: {
    h2: 'Lancaster lesson fees',
    intro: 'The first lesson is free, then there is one fee a month.',
    first: 'A full lesson with no charge, finishing with advice on level, course and a weekly time.',
    group: 'About eight live lessons a month, with five to ten learners at the same stage.',
    private: 'About eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Hest Bank and Torrisholme families pay in US dollars, just like every family outside India, and our site carries no pound prices anywhere. No invoice arrives until after the free lesson, once a course and a weekly time have been chosen, and our pricing page covers what happens with pauses, missed lessons or a change between group and one-to-one teaching.'
  },

  reviewsH2: 'What six families posted on Google, word for word',

  book: {
    h2: 'Book a free lesson for a Lancaster learner',
    intro: 'We choose the opening task to suit whoever is learning: a card-shuffling game for a young child, a short Python program that shuffles a list for a beginner, or four decades of Lune flows and a permutation test for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Lancaster learner.'
  },

  faq: {
    h2: 'Lancaster coding class questions',
    intro: 'What Lancaster families ask us most often.',
    items: [
      { q: 'How many people live in the Lancaster district?', a: 'Census 2021 counted 142,934 usual residents in the City of Lancaster district, which includes Morecambe, Heysham and Carnforth; 134,704 lived in households and 8,230 in communal establishments.' },
      { q: 'How does Lancaster compare with England?', a: 'It has many students and young adults: 8.9% of residents were aged 20 to 24 in 2021 (England 6.0%), and 33,065 of the 136,193 aged five and over were studying, 24.3% against 20.4%. Density was 252.1 residents per square kilometre.' },
      { q: 'What is a permutation test?', a: 'A way to judge whether a difference between two groups could be down to chance. You shuffle the group labels many times, recalculate the difference each time, and see how often shuffled data produces a gap as large as the real one.' },
      { q: 'Is the River Lune flooding more than it used to?', a: 'This record cannot say. Annual peaks at Caton averaged 851.6 cubic metres per second in 2001 to 2023 against 783.2 in 1980 to 2000, but shuffled data produced a gap that large about one time in five, and without the December 2015 flood the gap is only 24.0.' },
      { q: 'Where do the river flows come from?', a: 'From the Environment Agency\'s Hydrology open data: the daily maximum flow of the River Lune at Caton from 1979, using only complete water years whose peak day was graded good or unchecked.' },
      { q: 'What is special about Lancaster Castle?', a: 'Lancaster Castle says its beginnings date back to Roman times and that it was a working HM Prison until 2011; it is owned by the Duchy of Lancaster. Historic England lists it at Grade I. We are not connected with the castle.' },
      { q: 'When are Lancaster lessons held?', a: 'Weekday afternoons and evenings or weekends, at a UK time chosen in the free lesson. India is four and a half hours ahead of Lancaster during British Summer Time and five and a half hours ahead in winter.' },
      { q: 'Is there a Lancaster centre?', a: 'No. We have no Lancaster centre and no premises in the UK, since all lessons are live online. A learner needs a computer with sound and a good connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do lessons cost for a Lancaster learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners; one-to-one teaching on the same pattern costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How is a learner placed in a group?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The North West and beyond',
    html: 'Up the M6, the <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle page</a> maps Storm Desmond\'s rain from 99 gauges, and to the south <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> fits a traffic trend that one bad year cannot bend. <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> asks how long dry spells last. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lancaster and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-carlisle', label: 'Carlisle' },
    { href: '/best-coding-class-in-preston', label: 'Preston' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lan .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-lan .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-lan .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-lan .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lan .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-lan .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2.05rem); }
.cg-root.cg-lan .cg-table th { letter-spacing: 0.027em; }
.cg-root.cg-lan .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lan .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-lan .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Lancaster, Census 2021 via Nomis (E07000121): TS001 142,934 usual residents, 134,704 in households, 8,230 in communal establishments; TS007A 10,707 aged 15 to 19 (7.5 percent, England 5.7), 12,778 aged 20 to 24 (8.9 percent, England 6.0), 7,955 aged 70 to 74 (5.6 percent, England 5.0); TS068 33,065 students of 136,193 residents aged 5 and over (24.3 percent, England 20.4); TS006 252.1 per square kilometre (England 433.5). Lancaster Castle: beginnings in Roman times; owned by the Duchy of Lancaster; HM Prison until 2011. NHLE Grade I: Lancaster Castle 1194905, Priory 1195068, Lune Aqueduct 1362451, Ashton Memorial 1288429.',
    localProject: 'Is the Lune flooding more, or could it be chance? EA Hydrology, Lune at Caton, daily maximum flow from 1979; water years; 42 usable (1980 to 2023; excluded 1979, 2026 incomplete; 2015, 2024, 2025 estimated peaks; 2022 suspect). Top peaks 1,740 (5 December 2015), 1,400 (31 January 1995), 1,200 (8 January 2005). Earlier 21 mean 783.2, median 773.0; later 21 mean 851.6, median 778.0; difference 68.4. Permutation, 100,000 shuffles: one-sided p 0.21, two-sided 0.42. Without December 2015 year: 24.0, p 0.37. Peaks above 1,000: 4 and 6. 26 split points tried: 1 below 0.05. Lesson family: permutation test.',
    requiredMentions: [
      '142,934',
      '134,704',
      '33,065',
      '136,193',
      '252.1',
      'Lune',
      'Caton',
      'Ashton Memorial',
      'HM Prison',
      'Duchy of Lancaster',
      'Morecambe',
      'permutation test'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Lancaster: 142,934 usual residents; 134,704 in households; 8,230 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000121' },
      { claim: 'Nomis, Census 2021 TS007A: Lancaster and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000121,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Lancaster 33,065 students of 136,193 aged 5 and over (24.3 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000121,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, Lancaster 252.1 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000121,E92000001' },
      { claim: 'Environment Agency Hydrology: River Lune at Caton, daily maximum flow with quality grades.', url: 'https://environment.data.gov.uk/hydrology/id/measures/9ad5d28c-7cfe-46db-b39d-58701689cd59-flow-max-86400-m3s-qualified' },
      { claim: 'Lancaster Castle, History: Roman beginnings; Duchy of Lancaster; HM Prison until 2011.', url: 'https://www.lancastercastle.com/history/' },
      { claim: 'Historic England NHLE open data: Grade I Lancaster Castle, Priory, Lune Aqueduct and Ashton Memorial.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1194905' }
    ],
    rejectedClaims: [
      'A claim that the Lune is or is not flooding more: the test cannot distinguish change from chance on this record, and the page says so.',
      'The castle\'s history of trials and executions: not used, as grim crime history outside the page\'s purpose.',
      'Years whose peak day was estimated or suspect (2015, 2022, 2024, 2025): excluded rather than trusted.',
      'Lancaster City Council website: did not respond; the census and listing data are used instead.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Lancaster City Council, Lancaster Castle, the Duchy of Lancaster or Historic England.'
    ]
  }
};
