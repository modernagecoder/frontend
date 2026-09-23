'use strict';
// Bangor, Wales (cg- city page, UK cluster Phase 4). Spine: did the sunshine change, or did the instrument? A regression
// discontinuity at the Met Office Valley station (Anglesey, 230800E 375800N, 10 m amsl; monthly from December 1930 to
// August 2026, 1,149 months; 1 month of sunshine missing, 1 estimated; read 23 September 2026; scratchpad met/rd.py).
// The file marks sunshine from an automatic Kipp and Zonen sensor with #, otherwise Campbell-Stokes recorder: last
// Campbell-Stokes month October 2001, first automatic month November 2001. Sunshine anomaly = hours minus the
// calendar-month mean over the Campbell-Stokes years. Local linear fit on each side of the switch, jump at the cut:
// bandwidth 36 months -17.2 hours per month; 60 months -18.1; 84 months -10.8; 120 months -19.5. Placebo cuts (every
// month at least 60 months from the switch and the ends, 908 cuts): mean +0.2, sd 12.5; 14.0 percent at least as large
// as the real jump at bandwidth 60. Plain five-year means: +3.9 before, -7.0 after (difference -10.9). For comparison,
// the same method at Camborne (switch July 2007) gave jumps from -7.8 to +10.8 depending on bandwidth, with 60 percent of
// placebo cuts as large.
// Lesson family: regression discontinuity (local linear fits either side of a cut-off, bandwidth sensitivity, placebo
// tests, instrument changes as a break in a record). Screened 23 September 2026: regression discontinuity, Campbell-
// Stokes and Kipp 0 hits; distinct from Swansea CUSUM (unknown change point) and Newport difference-in-differences.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Gwynedd W06000002: TS001 117,393 usual residents,
// 113,682 in households, 3,711 communal; TS007A 8,545 aged 20 to 24 (7.3 percent, Wales 6.0), 7,301 aged 70 to 74 (6.2,
// Wales 5.8); TS068 23,962 students of 112,045 aged 5 and over (21.4 percent, Wales 19.9); TS006 46.3 per square km
// (Wales 149.9). MSOAs (House of Commons Library names): Bangor City W02000010 8,615 residents, 2,261 in communal
// establishments, 5,082 students of 8,375 aged 5 and over (60.7 percent), 3,111.9 per square km; Bangor South W02000011
// 8,377 residents, 26.9 percent students, 1,265.2 per square km. Menai Heritage: Menai Suspension Bridge completed 30
// January 1826, designed by Thomas Telford; sixteen huge chains held up 579 feet of deck, allowing 100 feet of clear
// space beneath; Act of Parliament 1819, first stone laid 10 August 1819; first chain lifted 20 April 1825; Britannia
// Bridge by Robert Stephenson. Places in OS Open Names: Maesgeirchen, Hirael, Llandygai, Glasinfryn, Tregarth, Bethesda,
// Y Felinheli, Caernarfon (Gwynedd); Porthaethwy (Isle of Anglesey).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BANGOR', blurb: 'The student city on the Menai Strait, with a project that asks whether Anglesey\'s sunshine changed or only the instrument measuring it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-bangor-wales',
  code: 'bgw',
  accent: '#2E3B4C',
  accentRationale: 'Bangor: a slate blue-grey, from the solver (9.23:1 on every paper tint, dE 6.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Bangor',
    eyebrow: 'Bangor, Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Gwynedd' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bangor, Wales',
  title: 'Best Coding Classes in Bangor, Wales | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Bangor learners aged 6 to 67, from Hirael and Maesgeirchen to Bethesda. The first lesson is completely free.',
  ogDescription: 'Coding and AI lessons for Bangor, on a page that asks whether Anglesey\'s sunshine really fell in 2001 or whether the Met Office simply changed its instrument.',
  twitterDescription: 'Bangor learners from six to sixty-seven can study coding, Python and AI in live online lessons with us, beginning with a free one.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Bangor Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and research methods, AI and mathematics taught live online in English to Bangor children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Bangor, Wales',
  capsuleQ: 'What are the best coding classes in Bangor, Wales?',
  capsule: 'Gwynedd, the county that includes Bangor, had 117,393 usual residents at the 2021 census, and in the Bangor City area 60.7% of residents aged five and over were students. Menai Heritage records that Thomas Telford\'s suspension bridge over the Menai Strait was completed on 30 January 1826. Bangor learners aged six to sixty-seven join our teachers in India on live video, one to one or in a group of five to ten at the same level, at hours arranged around the Welsh school and working day. Lesson one costs nothing; from then on, families pay USD 100 a month for a group place or USD 150 for a teacher to themselves.',
  lead: 'Across the Menai Strait from Bangor, the Met Office station at Valley on Anglesey has counted hours of sunshine every month since the 1930s. In November 2001 it swapped its Campbell-Stokes sunshine recorder for an automatic Kipp and Zonen sensor. The record shows fewer sunny hours afterwards. Did Anglesey get duller, or did the new instrument simply count differently? Our teenagers use regression discontinuity: fit a line to the months just before the switch and another to the months just after, and measure the step between them. At every width they try, the step is downward, from 10.8 to 19.5 hours a month. Then they test whether an ordinary month could produce a step that big.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Bangor, Wales.',

  picks: {
    eyebrow: 'Course picks for Bangor',
    h2: 'Four courses for the city on the Strait',
    intro: 'Match the course to the learner\'s interests: each of these four opens with a free live lesson, and you can book it without giving any payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards experiments that change one thing and measure what happens.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to read ninety-five years of weather records and test for a break in them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including how to tell a real change from a change in the way something was measured.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who compare figures before and after a change at work, and need to know whether the change caused anything.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bangor today',
      h2: 'A student city in a spacious county',
      intro: 'Census 2021 figures for Gwynedd and for the two middle-layer areas the House of Commons Library names Bangor City and Bangor South, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Gwynedd and Bangor, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Gwynedd', '117,393', '21.4%', '46.3'],
          ['Bangor City', '8,615', '60.7%', '3,111.9'],
          ['Bangor South', '8,377', '26.9%', '1,265.2'],
          ['Wales', '3,107,494', '19.9%', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students in the centre', p: 'In the Bangor City area, 5,082 of the 8,375 residents aged five and over were studying, and 2,261 people lived in communal establishments such as halls.' },
          { h3: 'Young adults', p: 'Across Gwynedd, 7.3% of residents were aged 20 to 24 in 2021, against 6.0% in Wales, and 23,962 of the 112,045 aged five and over were students.' },
          { h3: 'Room to spare', p: 'At 46.3 residents per square kilometre, Gwynedd is far more thinly settled than Wales as a whole, with 113,682 people living in households.' }
        ] },
        { kind: 'p', text: 'Our Bangor groups draw on the city and the villages around it. One evening might bring together a Maesgeirchen eight-year-old on a first game, a Bangor Year 11 student working towards WJEC GCSE Computer Science and a Tregarth parent picking up Python for the office, each in a small group at their own pace.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The Menai Strait',
      h2: 'A bridge that joined Anglesey to the mainland',
      intro: 'From Menai Heritage, the trust that records the bridges over the Menai Strait.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '10 August 1819', p: 'After an Act of Parliament, the first stone of Thomas Telford\'s suspension bridge was laid, part of his work on the road between London and Holyhead.' },
          { h3: '30 January 1826', p: 'The Menai Suspension Bridge was completed. Menai Heritage records that sixteen huge chains held up 579 feet of deck, leaving 100 feet of clear space beneath.' },
          { h3: 'The Britannia Bridge', p: 'A second crossing followed, the Britannia Bridge engineered by Robert Stephenson, which Menai Heritage records alongside Telford\'s bridge and the people who built them.' }
        ] },
        { kind: 'p', text: 'Menai Heritage describes Telford\'s bridge as the biggest suspension bridge in the world at the time. We have no connection with Menai Heritage, Gwynedd Council or the Met Office. The bridges are on this page because the Valley weather station stands on Anglesey, the island they reach, and because a bridge, like a new instrument, changes what happens on one side of a line and not the other.' },
        { kind: 'spec', title: 'Where the sunshine data comes from', p: 'The Met Office publishes historic station data for Valley, 10 metres above sea level on Anglesey, with monthly sunshine totals. It marks hours measured by the automatic Kipp and Zonen sensor with a # and says the rest came from a Campbell-Stokes recorder.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Did the sunshine change, or did the instrument?',
      intro: 'Regression discontinuity looks for a sudden step at a known cut-off. Fit a trend on each side of the cut, using only months close to it, and measure the gap where the two lines meet the cut.',
      body: [
        { kind: 'table', caption: 'Valley, Anglesey: step in monthly sunshine (hours above or below that month\'s usual level) at the November 2001 switch to an automatic sensor', head: ['Months used on each side', 'Step at the switch'], rows: [
          ['36', '-17.2 hours a month'],
          ['60', '-18.1 hours a month'],
          ['84', '-10.8 hours a month'],
          ['120', '-19.5 hours a month']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Remove the seasons', p: 'Subtract each calendar month\'s average from the Campbell-Stokes years, so a dull December and a bright June can sit on the same line.' },
          { h3: '2. Fit either side', p: 'Take the months just before November 2001 and fit a straight line; do the same just after. The difference between the lines at the cut is the step.' },
          { h3: '3. Try other widths', p: 'A real effect should not vanish when you use a few more or fewer months. At Valley, every width gives a fall, between 10.8 and 19.5 hours a month.' }
        ] },
        { kind: 'callout', h3: 'Could an ordinary month do that?', p: 'We repeated the fit at 908 other months where nothing changed, placebo cut-offs, using 60 months each side. Their steps averaged almost zero, but 14.0% were at least as large as the real one. So the fall at the switch is consistent with the new sensor counting fewer hours, yet about one ordinary month in seven could show a step that big by chance. That is evidence, not proof. For contrast, at Camborne in Cornwall, which switched in July 2007, the step changed sign with the width and 60% of placebo cuts were as large: no sign of an effect at all.' },
        { kind: 'p', text: 'A plain before-and-after average tells a similar but blunter story: sunshine was 3.9 hours a month above normal in the five years before the switch and 7.0 below it in the five years after. The regression discontinuity is better because it looks only at the months nearest the change and allows for any slow trend, and the placebo test says honestly how surprising the step is.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Breaks in records',
      h2: 'Five questions before blaming a change',
      intro: 'Learned on Anglesey\'s sunshine, then used for policy changes, new school rules, price changes, software releases and any record where the method of measuring changed.',
      body: [
        { kind: 'table', caption: 'Decisions behind a regression discontinuity', head: ['Question', 'For Valley\'s sunshine', 'What goes wrong if you skip it'], rows: [
          ['Is the cut-off known in advance?', 'Yes: the file marks the switch', 'Hunting for the month with the biggest step'],
          ['How many months each side?', '36, 60, 84 and 120, all reported', 'A width chosen for the answer it gives'],
          ['What about seasons and trends?', 'Monthly averages removed, lines fitted', 'A slow trend mistaken for a step'],
          ['Could chance do it?', '908 placebo cut-offs', 'Ordinary variation reported as an effect'],
          ['Does a second case agree?', 'Camborne tested the same way', 'One station treated as the whole story']
        ] },
        { kind: 'p', text: 'The first row is what makes the method trustworthy here. Because the Met Office marks exactly when the instrument changed, the cut-off was fixed before looking at any sunshine figures. Searching the record for the most dramatic step and then explaining it would be a different, far weaker kind of evidence.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Measuring the same thing with two different rulers and discovering that the answer depends on the tool.' },
          { h3: 'Teenagers', p: 'Regression discontinuity in Python on ninety-five years of Met Office data, with several widths and a placebo test.' },
          { h3: 'Adults', p: 'Judging the effect of a change at work, with the cut-off fixed in advance and chance tested honestly.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, Menai Heritage or Gwynedd Council. The station data and census tables are published openly; the anomalies, fits and placebo tests on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two rulers to regression discontinuity',
    intro: 'Ages are only approximate here; the free lesson tells us which rung a learner is really on.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Measuring fairly', p: 'Measuring with different tools and noticing when the tool, not the thing, has changed the answer.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Before and after', p: 'Comparing averages before and after a change in Python, and asking what else might explain the difference.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Discontinuity designs', p: 'Local lines either side of a cut-off, bandwidth checks and placebo tests on real Met Office records.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Changes at work', p: 'Measuring whether a new policy or system really changed anything, with fair comparisons and stated limits.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI models learn from long records. Why should a Bangor teenager hunt for a break in one?',
    intro: 'Because a change in how data was collected can look exactly like a change in the world, and models cannot tell the difference on their own.',
    p1: 'If an AI system learned Anglesey\'s weather from this record without knowing about the new sensor, it could conclude the island had become duller in 2001. A learner who has tested the switch directly knows to ask how any dataset was collected, and when that changed, before trusting what a model learns from it.',
    p2: 'Regression discontinuity is also one of the most respected ways to measure cause and effect without a controlled experiment. Practising it on a real, well-documented instrument change, with placebo tests to keep it honest, builds the kind of judgement that AI tools cannot supply for you.',
    closer: 'So a Bangor teenager should keep learning to code in 2026, beside a strait that Telford bridged two centuries ago: data will keep pouring in, but someone has to notice when the way it was measured changed.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hirael, Maesgeirchen or Bethesda, and no trip across the Strait',
    intro: 'Bangor sits between the mountains and the Menai Strait, with villages up the valleys and across the water. Online, each of them is equally close to the lesson.',
    cells: [
      { h3: 'City, valley and island', p: 'A learner in Glasinfryn and another in Porthaethwy can share a class without anyone crossing a bridge.' },
      { h3: 'Welsh school years', p: 'We follow Welsh school years, the Curriculum for Wales and WJEC GCSE and A level course names; every lesson is taught in English.' },
      { h3: 'The free lesson teaches', p: 'The first session works through a real task and ends with our suggested level, course and weekly slot. We do not take card details.' },
      { h3: 'Classes by stage', p: 'Five to ten learners working at one level, from Bangor, the rest of the UK and abroad, so every stage has sensible times.' },
      { h3: 'Two lessons weekly', p: 'Two fixed lessons each week, about eight a month, with half terms and exam weeks planned with the teacher in advance.' },
      { h3: 'Evenings across time zones', p: 'At 5 pm in Bangor it is 9.30 pm for our teachers in India in summer and 10.30 pm in winter, as India keeps a single time all year; they arrange their evenings around families here.' }
    ],
    spec: { title: 'Across North Wales', p: 'Families in Caernarfon, Llandudno, Holyhead or Conwy join exactly the same groups, since every lesson is online and groups are set by level.' }
  },

  fees: {
    h2: 'Bangor lesson fees',
    intro: 'Nothing to pay for lesson one, then a single fee each month.',
    first: 'A full lesson free of charge, ending with advice on level, course and a weekly time.',
    group: 'Around eight live lessons a month, in a group of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month, with the teacher focused only on your learner.',
    closer: 'Families in Y Felinheli or Llandygai are billed in US dollars, like every family outside India, and our site shows no pound prices. We only start charging after the free lesson, when you have picked a course and a regular time together with us; how pausing, missed lessons and moving between a group and private teaching work is all laid out on the pricing page.'
  },

  reviewsH2: 'Six families\' Google reviews, as they wrote them',

  book: {
    h2: 'Book a free lesson for a Bangor learner',
    intro: 'What we teach first depends on who is learning: a two-rulers measuring game for a young child, a short Python program comparing averages before and after a change for a beginner, or the Valley sunshine record and a regression discontinuity for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Bangor learner.'
  },

  faq: {
    h2: 'Bangor coding class questions',
    intro: 'What Bangor families ask us most often.',
    items: [
      { q: 'How many people live in and around Bangor?', a: 'Census 2021 counted 117,393 usual residents in Gwynedd, the county that includes Bangor. The middle-layer areas the House of Commons Library names Bangor City and Bangor South had 8,615 and 8,377.' },
      { q: 'How does Gwynedd compare with Wales?', a: 'It is thinly settled, at 46.3 residents per square kilometre against 149.9, and has more young adults: 7.3% of residents were aged 20 to 24 in 2021, against 6.0% in Wales. In the Bangor City area, 60.7% of residents aged five and over were students.' },
      { q: 'What is regression discontinuity?', a: 'A way to measure the effect of a change that happens at a known cut-off. You fit a trend just before the cut and another just after, and the gap between them at the cut estimates the effect, then you test whether ordinary points could produce a gap that big.' },
      { q: 'Did the new sensor at Valley change the sunshine figures?', a: 'The record steps down at the November 2001 switch at every width we tried, by 10.8 to 19.5 hours a month, which fits a sensor that counts fewer hours. But 14.0% of placebo months showed a step as large, so it is evidence rather than proof.' },
      { q: 'Where does the sunshine data come from?', a: 'From the Met Office\'s historic station data for Valley on Anglesey, monthly since December 1930, which marks months measured by the automatic Kipp and Zonen sensor.' },
      { q: 'When was the Menai Suspension Bridge built?', a: 'Menai Heritage records that the first stone was laid on 10 August 1819 and the bridge was completed on 30 January 1826, designed by Thomas Telford. We are not connected with Menai Heritage.' },
      { q: 'When do Bangor lessons take place?', a: 'Bangor families usually choose an after-school slot, a weekday evening or a weekend morning, and we agree it in the free lesson. For our teachers in India the clock reads four and a half hours later than in Wales during British Summer Time, and five and a half hours later in winter.' },
      { q: 'Is there a centre in Bangor?', a: 'No. We have no Bangor centre and no premises anywhere in the UK, as every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Bangor lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable is USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Wales and beyond',
    html: 'In the south, the <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea page</a> hunts for the moment roadside air changed without knowing when, and <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> compares traffic before and after the Severn tolls ended. Learners taking <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> or <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a> have their own pages. For how our levels line up with Welsh schooling, see the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a>; the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads on to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bangor and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bgw .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.45rem); }
.cg-root.cg-bgw .cg-hero h1 { font-weight: 750; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-bgw .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-bgw .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bgw .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-bgw .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-bgw .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-bgw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bgw .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bgw .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Gwynedd, Census 2021 via Nomis (W06000002): TS001 117,393 usual residents, 113,682 in households, 3,711 in communal establishments; TS007A 8,545 aged 20 to 24 (7.3 percent, Wales 6.0), 7,301 aged 70 to 74 (6.2 percent, Wales 5.8); TS068 23,962 students of 112,045 residents aged 5 and over (21.4 percent, Wales 19.9); TS006 46.3 per square kilometre (Wales 149.9). MSOAs: Bangor City 8,615 residents, 2,261 communal, 60.7 percent students, 3,111.9 per square kilometre; Bangor South 8,377, 26.9 percent, 1,265.2. Wales 3,107,494. Menai Heritage: Telford; Act and first stone 1819; first chain 20 April 1825; completed 30 January 1826; sixteen chains, 579 feet of deck, 100 feet clearance; Britannia Bridge by Robert Stephenson.',
    localProject: 'Did the sunshine change, or did the instrument? Met Office Valley, monthly sunshine December 1930 to August 2026; Campbell-Stokes until October 2001, Kipp and Zonen from November 2001. Anomaly against Campbell-Stokes calendar-month means. Regression discontinuity, local linear each side: bandwidth 36 months -17.2 hours a month, 60 -18.1, 84 -10.8, 120 -19.5. Placebo cuts (908, bandwidth 60): mean +0.2, sd 12.5, 14.0 percent as large as the real step. Five-year means +3.9 before, -7.0 after. Camborne (switch July 2007): -7.8 to +10.8 by bandwidth, 60 percent of placebos as large. Lesson family: regression discontinuity.',
    requiredMentions: [
      '113,682',
      '23,962',
      '112,045',
      '3,111.9',
      'Menai',
      'Campbell-Stokes',
      'Kipp',
      'regression discontinuity',
      'Bethesda',
      '579 feet',
      'Hirael',
      'Maesgeirchen'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Gwynedd 117,393; Bangor City 8,615; Bangor South 8,377; Wales 3,107,494.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W06000002,W02000010,W02000011,W92000004' },
      { claim: 'Nomis, Census 2021 TS007A: Gwynedd and Wales five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W06000002,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: students aged 5 and over; Gwynedd 21.4 percent; Bangor City 60.7 percent; Wales 19.9 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W06000002,W02000010,W02000011,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: densities.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W06000002,W02000010,W02000011,W92000004' },
      { claim: 'House of Commons Library, MSOA Names: Bangor City, Bangor South.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Met Office historic station data, Valley: monthly sunshine with automatic-sensor months marked #.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/valleydata.txt' },
      { claim: 'Met Office historic station data, Camborne: comparison station, switch July 2007.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambornedata.txt' },
      { claim: 'Menai Heritage, Menai Suspension Bridge and timeline: 1819, 1825, 30 January 1826, 579 feet of deck, 100 feet clearance.', url: 'https://menaibridges.co.uk/history/menai-suspension-bridge/' }
    ],
    rejectedClaims: [
      'A definite conclusion that the sensor caused the fall: 14.0 percent of placebo cut-offs gave a step as large, so the page calls it evidence, not proof.',
      'Reasons why a Kipp and Zonen sensor might count differently from a Campbell-Stokes recorder: not taken from a fetched source, so not explained beyond the data.',
      'Bangor Cathedral\'s website: did not respond; no cathedral history is claimed.',
      'Welsh language and national identity figures: not used, in line with the cluster rules on identity data.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, Menai Heritage or Gwynedd Council.'
    ]
  }
};
