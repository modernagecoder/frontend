'use strict';
// Howth, Fingal, County Dublin (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: Fingal County Council open data on
// data.fingal.ie (Pedestrian Footfall Summit / Balscadden / Baily / Red Rock Howth Walk 2019 2020
// 2022, with 2021 and 2023 rows; the 2024-2025 files), their disclaimer text; Irish Rail's Howth
// station page; Irish Lights' Baily lighthouse page. Spine: exact repeats in counted data as a
// signal that figures were filled in rather than measured. Scratchpad hth/rep.js.
// 207 neighbouring-month pairs with a real count (> 1) on both sides; 13 exact repeats (Baily 10:
// 2019 Jan-Feb 10,685, Aug-Sep-Oct 19,796, Nov-Dec 4,964, 2020 May to Nov 11,600 x7; Summit 2021
// Feb-Mar 2,017; Balscadden 2019 Feb-Mar 27,316; Red Rock 2019 May-Jun 9,799). Other 194 changes:
// median 3,109, smallest 10, 7 under 100; tie rate if as likely as any change under 100: 7/194/199
// per pair, 0.038 expected in 207. Baily 2020: 81,200 of 128,271 (63.3%) in the repeated run.
// 2023: Summit and Balscadden identical in July 39,036, November 25,316 and December-to-15th
// 6,598; Balscadden May and August 2023 both 49,489. Balscadden January 2024 (only filled month
// of the 2024-2025 files for Summit, Balscadden, Baily) 24,810 = January 2019. Red Rock 2024-2025
// download returned "being generated" on 20 September 2026. Summit 2021 June and July = 0 with
// "No figures due to gorse fires" in the Yearly_Totals column; 2023 April to June = 0 with "no
// data"; 2022 April "N/A", June "N/a". Red Rock 2020 April 0, May 1, June 0. Published yearly
// totals equal the sums of months (not the lesson; reconciliation is owned elsewhere).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'HOWTH', blurb: 'Walkers counted on the paths over Howth Head, and seven months in a row that came out at exactly 11,600.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-howth-dublin',
  code: 'hth',
  accent: '#2F3922',
  accentRationale: 'Howth: a dark heather green for the head, from the widened solver search, clear of the Navan and Carlow olives',
  pageType: 'district',
  place: {
    name: 'Howth',
    eyebrow: 'Howth, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fingal' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-fingal', name: 'Fingal' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Fingal', href: '/coding-classes-in-fingal' },
    { label: 'Clontarf', href: '/coding-classes-in-clontarf-dublin' }
  ],
  routeLabel: 'Howth, County Dublin, Ireland',
  title: 'Coding Classes in Howth, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Howth learners aged 6 to 67, in small same-level groups or one to one. The first lesson is free of any charge.',
  ogDescription: 'Coding and AI classes for Howth, with a data project on the cliff-walk counters and what exact repeats in a count really mean.',
  twitterDescription: 'Live online coding, Python, AI and maths for Howth, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Howth',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Howth, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Howth',
  capsuleQ: 'What are the best coding classes in Howth?',
  capsule: 'Howth learners are taught by a teacher in live video lessons, in a small group at the same level or one to one, usually twice a week, and anybody from six to sixty-seven can sign up. Nobody needs to travel. The first lesson is free; each month after that is USD 100 in a group or USD 150 for one-to-one teaching.',
  lead: 'Fingal County Council counts walkers on the paths over Howth Head and publishes monthly totals for four counters: Summit, Balscadden, Baily and Red Rock. Read them closely and some numbers turn up twice. On the Baily path the count for May 2020 was 11,600, and so was June, and every month after it to November. In a real count of thousands of walkers, two months landing on exactly the same figure is rare, and seven in a row is not chance. This page teaches a learner to find repeats like these, measure how unlikely they are, and decide what they mean for any total built on them.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Howth.',

  picks: {
    eyebrow: 'Courses for Howth',
    h2: 'Four first courses for Howth',
    intro: 'Choose by age to start; in the free first lesson the teacher checks the level and suggests a different course when one fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a spot-the-difference game: which numbers in a list look copied rather than counted.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python that reads a small table, turns text like 15,049 into numbers and flags the odd ones.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real council files in Python: cleaning, repeat detection, and totals reported with and without doubtful months.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who inherit spreadsheets from others and need to know which figures were actually measured.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Counted or copied? Repeated figures in the Howth walk files',
      intro: 'The data is Fingal County Council\'s monthly footfall for its four counters on the Howth walks, from 2019 to 2023, published as open data. The table lists every repeat longer or stranger than a single pair.',
      body: [
        { kind: 'table', caption: 'Repeated counts in the Howth walk files', head: ['Where', 'When', 'Count'], rows: [
          ['Baily', 'May to November 2020, seven months', '11,600 each'],
          ['Baily', 'August to October 2019, three months', '19,796 each'],
          ['Summit and Balscadden, the same month', 'July 2023', '39,036 on both'],
          ['Summit and Balscadden, the same month', 'November 2023', '25,316 on both'],
          ['Balscadden, five years apart', 'January 2019 and January 2024', '24,810 both times']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How rare a repeat should be', p: 'Across the four counters there are 207 pairs of neighbouring months with a real count on both sides. In 194 of them the count changed, by a median of 3,109 walkers, and only 7 of those changes were smaller than 100. Even if an exact tie were as likely as any change under 100, about 0.04 of the 207 pairs would match. Thirteen do.' },
          { h3: 'What a repeat does to a total', p: 'Baily\'s published total for 2020, 128,271, contains the seven months at 11,600, which make up 63.3 percent of it. The yearly totals in these files equal the sums of their months, so every repeated figure passes straight into the year.' },
          { h3: 'Two trails, one number', p: 'In 2023 the Summit and Balscadden columns carry identical figures for July, for November, and for December up to the 15th, at 6,598. Two counters on different paths agreeing to the last walker three times is not something counting produces.' }
        ] },
        { kind: 'callout', h3: 'Treat an exact repeat as a question, not a measurement', p: 'In counted data, an exact repeat is a fingerprint. It can come from a figure copied in to fill a gap, a formula dragged down a spreadsheet, or a counter stuck on one reading, and the file alone cannot say which. What it can say is that the repeated months are not independent counts. A careful program flags them, reports totals with and without them, and says plainly which months were measured.' },
        { kind: 'p', text: 'The learner\'s program reads the four CSV files from Fingal\'s open data site, turns text such as "15,049" into numbers, and treats N/A and N/a as missing rather than crashing on them. It compares each month with the one before, collects exact repeats, searches the whole table for the same figure turning up anywhere else, and measures how small ordinary month-to-month changes get, which is what makes the thirteen repeats stand out. It then separates zeros that mean nobody walked from zeros that mean nobody counted. Summit\'s June and July 2021 are stored as 0 with the words "No figures due to gorse fires" written into the column for yearly totals, and April to June 2023 as 0 beside "no data". Added up without care, both look like months in which nobody climbed the hill.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Words in a number column', p: 'Summit\'s April and June 2022 hold the text N/A and N/a, and the notes about gorse fires sit in the column meant for yearly totals. A program that expects a number in every cell either stops or quietly skips them.' },
          { h3: 'What the council says', p: 'Fingal\'s own note on these datasets says the figures are estimates of total trips rather than individual visitors, and that distance from the counter beam, overgrown vegetation and occasional malfunctions can affect them. The repeats are a reason to read that note twice.' },
          { h3: 'The newest files', p: 'In the 2024 to 2025 files for Summit, Balscadden and Baily only one month has a figure: Balscadden, January 2024, at 24,810, the same as January 2019. The Red Rock file for those years was not yet available to download on 20 September 2026.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Howth, named',
      h2: 'Howth by its lighthouse, its station and its counters',
      intro: 'Every line is taken from the organisation responsible.',
      body: [
        { kind: 'table', caption: 'Named places on Howth Head', head: ['Place', 'What its own source says'], rows: [
          ['Howth station', 'Howth DART Station, Dublin 13, D13 N8K7'],
          ['Baily Lighthouse', '41 metres above high water, range 18 nautical miles'],
          ['Summit counter', '53.370956 N, 6.054537 W'],
          ['Red Rock counter', '53.36833 N, 6.091938 W']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The lighthouse', p: 'Irish Lights says the Baily light was first lit on 17 March 1814, 41 metres above high water, and now shows one white flash every 15 seconds. Its keepers were withdrawn on 24 March 1997, and Irish Lights records Baily as the last Irish lighthouse to be automated.' },
          { h3: 'The station', p: 'Irish Rail gives step-free access by gate and ramp from the road, sheltered bike parking with 7 spaces and 5 lockers, a free car park with 10 spaces, and staffing from 05:45 to 00:21 on weekdays.' },
          { h3: 'The counters', p: 'Fingal publishes a position for each counter. Balscadden is the furthest north of the four and Red Rock the furthest west, with Summit and Baily on the southern side of the head.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Howth, since the page prints only what named bodies publish about the place. The counts are trips past a sensor, not people, and the page does not say how any repeated figure came about; it only shows that the file cannot be treating them as fresh counts.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'What a Howth learner does across a week',
      intro: 'The usual week has two lessons, each led live by the teacher from the first minute to the last.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and puzzle games, spotting patterns that look too neat to be true.' },
          { h3: 'Teenagers', p: 'Teenagers take on Python, websites, AI projects and real council spreadsheets like the walk counts, with the checking done in code.' },
          { h3: 'Adults', p: 'Adults may start with no background at all; the first lesson settles the course.' }
        ] },
        { kind: 'p', text: 'Footfall figures are Fingal County Council\'s open data; the repeat counts, change sizes, tie rates and shares were worked out by us on 20 September 2026. Station and lighthouse details come from Irish Rail and Irish Lights.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spot-the-difference to data forensics',
    intro: 'Bands give a starting point only; the first lesson fixes the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Too neat to be true', p: 'Block-coded games that hunt for copied numbers in a list.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Cleaning a table', p: 'Python that turns text into numbers and marks cells it cannot read.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Repeat detection', p: 'Neighbouring-month comparisons, tie rates and totals with and without doubtful months.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Inherited spreadsheets', p: 'Deciding which figures in someone else\'s file were measured and which were filled in.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how busy the Howth walks were',
    intro: 'It will add up the months. It may not look at them first.',
    p1: 'Give an AI assistant the Baily file and ask how many walkers used the path in 2020, and it will likely report the published total of 128,271, or add up the months and reach the same figure. The arithmetic is fine. Nearly two thirds of that total rests on one number repeated seven times, and an answer that does not say so hands on a guess as if it were a count.',
    p2: 'The learner who has done this project first asks what the table actually contains: which months repeat, which zeros stand for missing data, which cells hold words. After that, an assistant can help write the checks and the two totals, one with every month and one with only the months that look counted.',
    closer: 'Adding up a column is easy. Knowing which cells deserve to be added is the skill.',
    blogAnchor: 'why learning to code is worth starting young'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Howth',
    intro: 'At a glance.',
    cells: [
      { h3: 'Live teaching', p: 'The teacher leads every lesson in real time and checks each learner\'s code while it is being written.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one level, joining from Howth, other parts of Ireland or abroad.' },
      { h3: 'Two fixed days', p: 'The same two days each week, about eight lessons over a month.' },
      { h3: 'Term breaks', p: 'Holidays, mid-term weeks and exam time are built into the plan.' },
      { h3: 'At the desk', p: 'A laptop or desktop, a microphone, headphones or speakers, and broadband steady enough for a video call.' },
      { h3: 'One-to-one option', p: 'Private lessons for a learner who is ahead, needs more time, or can only do hours no group runs.' }
    ],
    spec: { title: 'Wholly online', p: 'We have no premises in Howth, in Fingal or anywhere in Ireland. Lessons run live on video and are the same from any home.' }
  },

  fees: {
    h2: 'Fees for Howth',
    intro: 'Without fuss.',
    first: 'A free opening lesson with a check of the learner\'s level.',
    group: 'One month in a same-level group of five to ten, about eight live lessons.',
    private: 'One month of private lessons on the same schedule.',
    closer: 'The US dollar fee is the same for every family outside India and is paid monthly. Nothing is owed for the free lesson, the monthly charge starts with the course, and the pricing page explains how holidays, missed lessons and a switch between group and private lessons work.'
  },

  reviewsH2: 'What families wrote on Google, unedited',

  book: {
    h2: 'Book a free first lesson in Howth',
    intro: 'Send the learner\'s age and interests, and we will build the first lesson around them. They could leave with a small game, a program that works, or a list of numbers they have caught repeating.',
    success: 'Thank you. We will be in touch soon to book the lesson.'
  },

  faq: {
    h2: 'Howth coding class questions',
    intro: 'Questions Howth families bring to us.',
    items: [
      { q: 'Does Modern Age Coders have a centre in Howth?', a: 'No. Lessons are live on video, and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The phone number shown here is an Indian number.', boiler: true },
      { q: 'What is the walk counter project?', a: 'The learner reads Fingal\'s monthly footfall files for the Summit, Balscadden, Baily and Red Rock counters and hunts for exact repeats: 13 among 207 pairs of neighbouring months, where chance would give about 0.04, including seven months in a row at 11,600 on the Baily path in 2020.' },
      { q: 'Is the page saying the council made the figures up?', a: 'No. It shows that some figures repeat in a way real counts would not, and it quotes the council\'s own note that the figures are estimates affected by conditions and malfunctions. How the repeats arose is not something the file can tell us.' },
      { q: 'Why is there no population figure for Howth?', a: 'District pages here print only what named organisations publish about the place itself, in this case Fingal County Council, Irish Rail and Irish Lights, and none of them gives a head count for Howth.' },
      { q: 'When do lessons happen?', a: 'On weekdays after school and into the evening, and in the daytime at weekends. Lesson times are set in Irish time. The teachers are based in India, which runs four and a half hours ahead of Howth in summer and five and a half in winter, so we only offer times that suit both.' },
      { q: 'Are there classes for adults?', a: 'Yes, for anyone up to sixty-seven, beginners too. After the free lesson an adult chooses between a same-level group and lessons on their own.' },
      { q: 'Will my child be in a group with other children from Howth?', a: 'Not necessarily; we group by level, so the others may be anywhere in Ireland or outside it.' },
      { q: 'What do coding classes in Howth cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than age or address. When no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dublin Bay from Howth',
    html: 'Across the bay, <a class="cg-inline-link" href="/coding-classes-in-clontarf-dublin">Clontarf</a> has a project on the Dublin Port tide gauge. The <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page covers the county, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every other county, town and district.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Howth, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/coding-classes-in-clontarf-dublin', label: 'Clontarf' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-hth .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 3.18vw, 2.51rem); }
.cg-root.cg-hth .cg-hero h1 { font-weight: 720; letter-spacing: -0.0188em; line-height: 1.06; }
.cg-root.cg-hth .cg-capsule { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.12rem; }
.cg-root.cg-hth .cg-eyebrow { letter-spacing: 0.129em; font-weight: 640; text-transform: uppercase; }
.cg-root.cg-hth .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0137em; }
.cg-root.cg-hth .cg-grid-3 { gap: clamp(1.03rem, 2.94vw, 2.27rem); }
.cg-root.cg-hth .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-hth .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-hth .cg-table td:nth-child(3) { font-weight: 620; }
.cg-root.cg-hth .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-hth .cg-callout { border-left-width: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Howth, named sources only (owner rule for districts), read 20 September 2026. Fingal County Council open data (data.fingal.ie; ArcGIS items Summit 16c4298158e549908306c90cfd8a1ddb, Balscadden 08242af0aed14a64b768e758016c4334, Baily afd3f5de93fb49a9baed8195f0799009, Red Rock e66766bbf91f45fd92e6adc28a024da3; 2024-2025 items Summit 36fe5ad3fb26465daca5e991da79d974, Balscadden 2596de05117741a0bf35e66b02b18ef7, Baily b1503e1861164764ac4224e6ada73e14, Red Rock 1a9c179775c94d25aeb093b945d828c8 returned "Up to date download file is being generated"), CSV columns Year, Month, Total or Footfall, Yearly_Total(s), Lat, Long, (Note), OBJECTID; counter positions Summit 53.370956 -6.054537, Balscadden 53.385513 -6.049716, Baily 53.366883 -6.055968, Red Rock 53.36833 -6.091938. Dataset disclaimer: "Please Note that figures are estimates of total \'trips\' rather than individual visitors. The accuracy of the recorded counts can be affected by a number of factors including distance of pedestrians from counter beam, overgrowth of vegetation or occasional malfunctions such as accidental damage or vandalism." Our arithmetic (hth/rep.js), 2019 to 2023: 207 neighbouring-month pairs with a count above 1 on both sides; 13 exact repeats: Baily 2019 January-February 10,685, August-September-October 19,796, November-December 4,964, 2020 May to November 11,600 (seven months); Summit 2021 February-March 2,017; Balscadden 2019 February-March 27,316; Red Rock 2019 May-June 9,799. The other 194 changes: median 3,109, smallest 10, 7 under 100; if a tie were as likely as any change under 100 (7/194 spread over 199 values), 0.038 ties expected in 207 pairs. Baily 2020 total 128,271, of which 81,200 (63.3%) in the repeated run; Baily 2019 57.6%. Summit and Balscadden 2023: July 39,036 both, November 25,316 both, "December 15/12" 6,598 both; Balscadden 2023 May and August 49,489 both. Balscadden 2024-2025 file: only January 2024 filled, 24,810 (January 2019 in the earlier file: 24,810). Summit: 2021 June and July 0 with "No figures due to gorse fires" in the yearly-totals column; 2022 April "N/A", June "N/a"; 2023 April to June 0 with "no data". Red Rock 2020 April 0, May 1, June 0. Yearly totals equal the sums of months. Irish Rail, Howth station: "Howth DART Station, Howth, Dublin 13 Eircode D13 N8K7"; "Monday to Friday: 05:45 - 00:21"; "You can use the sheltered bike parking in Howth station. There are 5 lockers at the moment"; "Bike Parking Available - 7"; "Platform Access Via gate and ramp from the road"; "Car Park Details Operated by Iarnrod Eireann Spaces : 10 Price : Free". Irish Lights, Baily: "established, 134 feet (41m) above high water, on 17th March 1814"; "Height of Light MHWS: 41 metres Character: Fl W 15s Range: 18 nautical miles"; "The Lighthouse Keepers were withdrawn from Baily on 24th March 1997"; "Baily was the last Irish Lighthouse to be unwatched".',
    localProject: 'Counted or copied? From Fingal County Council\'s monthly footfall for four Howth walk counters (2019 to 2023), the learner finds 13 exact repeats among 207 neighbouring-month pairs where ordinary changes have a median of 3,109 and a generous tie rate gives 0.04; seven straight months at 11,600 on the Baily path supply 63.3 percent of its 2020 total; two different counters match exactly three times in 2023; Balscadden January 2024 repeats January 2019. Side lessons: zeros that mean no data (gorse fires, "no data"), words in number columns, notes in the wrong column, totals with and without doubtful months. Lessons: an exact repeat is a question, not a measurement; measure how small real changes get before judging a tie; report which months were measured. New family site-wide: REPEATED VALUES AS AN ANOMALY SIGNAL (fill-down, copy-forward, repeated value had no prior hits; checked by regex on content/ie and by parsing the global dossiers). Not reconciliation (owned by Birmingham, Kuala Belait and others) and not cross-channel identity (Castletroy).',
    requiredMentions: [
      '207 pairs',
      '3,109',
      '11,600',
      '63.3 percent',
      '128,271',
      '39,036',
      '25,316',
      '24,810',
      'D13 N8K7',
      '17 March 1814',
      '18 nautical miles',
      '24 March 1997'
    ],
    sources: [
      { claim: 'Fingal County Council, Pedestrian Footfall Baily Howth Walk (monthly, 2019 to 2023).', url: 'https://data.fingal.ie/datasets/FingalCoCo::pedestrian-footfall-baily-howth-walk-2019-2020-2022' },
      { claim: 'Fingal County Council, Pedestrian Footfall Summit Howth Walk (monthly, 2019 to 2023), including the gorse fire and no data notes.', url: 'https://data.fingal.ie/datasets/FingalCoCo::pedestrian-footfall-summit-howth-walk-2019-2020-2022' },
      { claim: 'Fingal County Council, Pedestrian Footfall Balscadden Howth Walk (monthly, 2019 to 2023) and the dataset disclaimer that figures are estimates of trips.', url: 'https://data.fingal.ie/datasets/FingalCoCo::pedestrian-footfall-balscadden-howth-walk-2019-2020-2022' },
      { claim: 'Fingal County Council, Pedestrian Footfall Red Rock Howth Walk (monthly, 2019 to 2023).', url: 'https://data.fingal.ie/datasets/FingalCoCo::pedestrian-footfall-red-rock-howth-walk-2019-2020-2022' },
      { claim: 'Fingal County Council, Pedestrian Footfall Counts Balscadden Howth Walk 2024 to 2025 (January 2024 the only filled month).', url: 'https://data.fingal.ie/datasets/FingalCoCo::pedestrian-footfall-counts-balscadden-howth-walk-2024-2025-fcc' },
      { claim: 'Irish Rail, Howth station: D13 N8K7; weekday staffing 05:45 to 00:21; 7 bike spaces and 5 lockers; step-free access by gate and ramp; free car park of 10 spaces.', url: 'https://www.irishrail.ie/en-ie/station/howth' },
      { claim: 'Irish Lights, Baily: established 17 March 1814, 41 metres above high water; Fl W 15s; range 18 nautical miles; keepers withdrawn 24 March 1997; the last Irish lighthouse to be unwatched.', url: 'https://www.irishlights.ie/tourism/our-lighthouses/baily.aspx' }
    ],
    rejectedClaims: [
      'Any claim about how or why the figures repeat, or that anyone made them up: the file cannot say, and the council\'s own disclaimer calls them estimates.',
      'Reconciliation of totals as the lesson: owned by Birmingham, Kuala Belait and others; noted only that totals equal the sums of months.',
      'Cross-channel identity as the lesson: Castletroy owns it; the Summit and Balscadden matches are reported as repeats.',
      'The Howth tide gauges and residuals: Clontarf owns residuals; Douglas owns aliasing.',
      'Any population figure for Howth and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
