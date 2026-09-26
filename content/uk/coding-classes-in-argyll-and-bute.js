'use strict';
// Argyll and Bute (cg- council area page, UK cluster Phase 7, row 258). One council. Spine: how unusual was that winter,
// here and inland? Data: Met Office historic station data (read raw 26 September 2026): Tiree (Lat 56.500, Lon -6.880,
// 12 m amsl; records from 1928) and Braemar (Aberdeenshire) for contrast; January mean temperature taken as (tmax +
// tmin) / 2, provisional months excluded. Our analysis (scratchpad arg/norm.py), Januaries 1961 to 2025 (65 each):
// Tiree mean 5.52 C, standard deviation 1.13; Braemar mean 1.27, sd 1.79. January 1963: Tiree 2.15 (3.37 C below its
// mean, z -2.97), Braemar -4.65 (5.92 C below, z -3.31). January 1979: Tiree 2.70 (z -2.49), Braemar -2.95 (z -2.36).
// January 2010: Tiree z -1.47, Braemar z -1.57. Warmest both places 1989 (Tiree 7.95, z +2.14; Braemar 5.40, z +2.31).
// Share within one sd: 71 per cent at both; within two sd: Tiree 94, Braemar 95 (normal model 68 and 95). Tiree May
// sunshine: 99 Mays, mean 222.9 hours, highest 1975 at 329.1.
// Lesson family: the normal distribution, standard deviation and z-scores to compare unusualness across places;
// screened (normal distribution: 0 hits; z-score appears once for composite indicators in Skerries, a different lesson).
// Place facts: NRS, Scotland's Census 2022 rounded estimates (14 September 2023): Argyll and Bute S12000035 86,000;
// 41,900 households; 12.5 per square kilometre; ages 0 to 14 11,600 (13.5 per cent) and 65+ 23,300 (27.1 per cent) by
// our addition (Scotland 15.3 and 20.1). NRS mid-2020 locality estimates. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ARGYLL AND BUTE', blurb: 'Helensburgh, Oban, Dunoon and the islands, and a Tiree lesson on measuring how unusual a winter really was.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-argyll-and-bute',
  code: 'agb',
  accent: '#3C4D5C',
  accentRationale: 'Argyll and Bute: a sea-loch slate from the solver (7.03:1 on the darkest paper tint), greyer than the Northumberland and Staffordshire blues',
  pageType: 'governorate',
  place: {
    name: 'Argyll and Bute',
    eyebrow: 'Argyll and Bute',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Argyll and Bute',
  title: 'Coding Classes in Argyll and Bute | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Argyll and Bute, from Helensburgh, Oban and Dunoon to Campbeltown, Rothesay, Lochgilphead and the islands.',
  ogDescription: 'Coding classes for all of Argyll and Bute, and a Tiree project: use 65 Januaries of Met Office data and z-scores to compare how unusual a cold winter was on the island and inland.',
  twitterDescription: 'Argyll and Bute coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Argyll and Bute',
    description: 'Ability-placed online coding, Python, statistics and mathematics for children, teenagers and adults across Argyll and Bute, taught live in English.'
  },

  h1: 'Coding classes in Argyll and Bute',
  capsuleQ: 'What are the best coding classes in Argyll and Bute?',
  capsule: 'Argyll and Bute is one council area of sea lochs, peninsulas and islands, where Scotland\'s Census 2022 found about 86,000 people in roughly 41,900 households, at just 12.5 people per square kilometre. Helensburgh is the largest town, then Oban, Dunoon, Campbeltown and Rothesay. We teach every lesson live over video from India, so an island is no barrier, and we place each learner by ability, from Primary 1 to S6 and adults. Ages 6 to 67 join groups of five to ten or have one-to-one lessons in coding, Python, statistics and maths. The Argyll and Bute project uses the Met Office record from Tiree. Trying us is free for one lesson; afterwards a group seat is USD 100 per month and private tuition USD 150 per month.',
  lead: 'The Met Office keeps a long weather record from Tiree, low and flat in the Atlantic, and another from Braemar, high in the Cairngorms. Both felt the famous cold of January 1963, but Tiree dropped 3.4 degrees below its usual January while Braemar dropped 5.9. Which was the more unusual winter? Comparing degrees alone is unfair, because Braemar\'s Januaries always swing more than Tiree\'s. This page\'s project fixes that with one of the most useful ideas in statistics: the standard deviation, and the z-score, which measures how unusual a value is in its own place\'s terms. Then it checks whether the familiar bell curve really describes 65 years of Januaries.',
  wa: 'Hello Modern Age Coders, we are in Argyll and Bute and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Argyll and Bute',
    h2: 'Where Argyll and Bute learners start',
    intro: 'A P5 pupil on Bute who loves recording the weather, an S2 in Oban curious about averages, an S5 in Helensburgh taking Higher Maths, and an adult in Campbeltown learning to handle data. Each starts with a free lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with averages, spread and graphs built from real numbers.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built step by step, including standard deviation and the normal curve.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults who work with figures.' }
    ]
  },

  sections: [
    {
      id: 'argyll-and-bute', tint: '', eyebrow: 'Argyll and Bute in figures',
      h2: 'About 86,000 people across mainland, lochs and islands',
      intro: 'Headline numbers are from the 2022 census, which the National Records of Scotland rounds to hundreds in its first results; town sizes are NRS estimates for localities in mid-2020.',
      body: [
        { kind: 'table', caption: 'Argyll and Bute localities above 2,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Helensburgh', '13,230'],
          ['Oban', '8,140'],
          ['Dunoon', '7,660'],
          ['Campbeltown', '4,500'],
          ['Rothesay', '4,310'],
          ['Garelochhead', '3,650'],
          ['Lochgilphead', '2,280'],
          ['Cardross', '2,070']
        ] },
        { kind: 'p', text: 'With 12.5 residents per square kilometre, Argyll and Bute is far more thinly settled than Scotland as a whole, at 69.8. Adding up the census age bands ourselves, roughly one resident in seven or eight (13.5 per cent) is under 15, while 27.1 per cent are 65 or older; the Scottish figures are 15.3 and 20.1 per cent. Smaller places include Rhu, Sandbank, Kilcreggan, Rosneath, Ardrishaig, Innellan, Tarbert, Port Bannatyne and Tobermory. Argyll and Bute Council sets school term dates, which we did not read; we plan breaks around each family\'s.' },
        { kind: 'callout', h3: 'Across the water', p: 'Many Argyll and Bute families look to <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> for city life. For Scottish exams, see our <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> pages.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Argyll and Bute project',
      h2: 'How unusual was that January?',
      intro: 'Sixty-five Januaries on an island and in the mountains, one bell curve, and a fair way to compare.',
      body: [
        { kind: 'p', text: 'The learner downloads the Met Office monthly records for Tiree and Braemar and works out each January\'s mean temperature as the average of the daily maximum and minimum. For 1961 to 2025 there are 65 Januaries at each. Tiree\'s average January is 5.52 °C, with a standard deviation of 1.13 degrees; Braemar\'s is 1.27 °C with a standard deviation of 1.79. The standard deviation measures how far a typical January strays from the average, and the sea keeps Tiree\'s swings smaller.' },
        { kind: 'table', caption: 'Cold Januaries compared, our calculation from Met Office station data, 26 September 2026', head: ['January', 'Tiree: below average', 'Tiree z-score', 'Braemar: below average', 'Braemar z-score'], rows: [
          ['1963', '3.37 °C', '−2.97', '5.92 °C', '−3.31'],
          ['1979', '2.82 °C', '−2.49', '4.22 °C', '−2.36'],
          ['2010', '1.67 °C', '−1.47', '2.82 °C', '−1.57']
        ] },
        { kind: 'p', text: 'A z-score divides how far a value is from the average by the standard deviation, so it says how unusual the value is by local standards. In 1963 Braemar fell almost twice as many degrees as Tiree, yet the z-scores are close, −3.31 against −2.97: for each place it was an extreme January, roughly three standard deviations below normal. In 1979 the order even flips: Tiree\'s smaller drop in degrees was slightly the more unusual. Raw differences and fair comparisons can tell different stories.' },
        { kind: 'p', text: 'Is the bell curve a good description? For a normal distribution, about 68 per cent of values fall within one standard deviation of the average and about 95 per cent within two. At both stations 71 per cent of Januaries fall within one, and 94 to 95 per cent within two, which is close. Close is not perfect, though, and a learner who plots the values will see that a normal curve is a model to be checked, not a law of nature.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Record the temperature every day for two weeks, find the average, and mark the days that were far from it.' },
          { h3: 'Ages 12 to 15', p: 'Load the Tiree file in Python, compute each January\'s mean, the average and the standard deviation, and plot a histogram.' },
          { h3: 'Ages 15 and up', p: 'Compute z-scores for both stations, test the 68 and 95 per cent rules, and discuss why coastal and mountain places differ.' }
        ] },
        { kind: 'callout', h3: 'The Met Office\'s records and our sums', p: 'The monthly temperatures come from the Met Office\'s historic station data for Tiree and Braemar. The January means, standard deviations, z-scores and percentages are our own calculations. Station records can include estimated values and changes over time, which the Met Office marks in its files.' }
      ]
    },
    {
      id: 'tiree', tint: 'deep', eyebrow: 'Why Tiree',
      h2: 'An Atlantic island with a record since 1928',
      intro: 'The Argyll and Bute link, from the station file itself.',
      body: [
        { kind: 'table', caption: 'The two stations in the Met Office historic data files', head: ['Station', 'What the file shows'], rows: [
          ['Tiree', 'Latitude 56.500, longitude −6.880, 12 metres above sea level; sunshine records from 1928.'],
          ['Braemar', 'In the Cairngorms of Aberdeenshire, used here as an inland contrast.'],
          ['Tiree in May', 'Across 99 Mays the average sunshine is 222.9 hours; the sunniest in the file was 1975, with 329.1 hours.'],
          ['Both stations', 'January 1989 was the warmest of 1961 to 2025, and January 1963 the coldest.']
        ] },
        { kind: 'p', text: 'Standard deviations and z-scores are among the most used tools in science and data work: exam boards use similar ideas to compare papers, doctors use them to judge growth charts, and weather services use them to call a month unusual. An Argyll and Bute student who has used them to compare an island and a mountain valley understands why a fair comparison needs the spread as well as the average.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Met Office and Argyll and Bute Council. The records are the Met Office\'s; our analysis and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> lie east, <a class="cg-inline-link" href="/coding-classes-in-highland">Highland</a> to the north. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From weather diaries to real statistics',
    intro: 'The free lesson settles the starting point. The school stage suggests; ability decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Counting and charts', p: 'Block coding games that count, collect and draw simple charts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Averages in Python', p: 'Typed Python with lists of numbers, averages and graphs.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Statistics properly', p: 'Spread, distributions and z-scores, alongside National 5 and Higher Maths.', courses: ['statistics-probability-maths-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Data for work', p: 'Spreadsheets, statistics and Python for adults who report on figures.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fair comparison',
    h2: 'An AI will tell you which winter was colder. Will it ask colder for where?',
    intro: 'A fair comparison needs the spread as well as the average.',
    p1: 'Ask an assistant which place had the more severe January in 1963 and it may simply compare the degrees: Braemar fell further, so Braemar was worse. That answer ignores how much each place normally varies. Many automated rankings and alerts make the same mistake, flagging whatever moves most in raw numbers rather than what is most unusual for its own situation.',
    p2: 'A student from Argyll and Bute who has computed z-scores knows to ask what "unusual" means before accepting a ranking. The question applies to test scores, prices and health measures just as much as to weather.',
    closer: 'So a young person in Argyll and Bute should learn to code in 2026 to make comparisons that are fair, not just big.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Islands and peninsulas, one online classroom',
    intro: 'Ferries and long roads make a weekly class a real undertaking in Argyll and Bute. Online lessons take the journey out of it.',
    cells: [
      { h3: 'On the island or the mainland', p: 'A croft on Tiree, a flat in Rothesay, a house in Helensburgh. The pupil codes while the teacher follows the same screen.' },
      { h3: 'Scottish stages', p: 'Whether a pupil is in P6, S3 or sitting Highers, teachers talk about school the way Argyll and Bute classrooms do, in English.' },
      { h3: 'No charge to try', p: 'A proper lesson, then honest advice on level and course. No card details are asked for.' },
      { h3: 'The right group', p: 'Five to ten pupils at the same stage, which a small island rarely has locally.' },
      { h3: 'Term-time rhythm', p: 'Two lessons a week during term, pausing for the council\'s school holidays.' },
      { h3: 'UK time on your side', p: 'Lessons are booked and kept in UK time all year; our teachers, on India time, handle the clock changes.' }
    ],
    spec: { title: 'Why groups follow level', p: 'With about 86,000 people spread across islands and peninsulas, five learners at one stage free on the same evening are almost never neighbours. Level-based groups let a pupil in Tobermory or Tarbert join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Argyll and Bute',
    intro: 'Oban or the smallest island, the fee is the same, as it is everywhere we teach except India.',
    first: 'A whole lesson with real work, then a suggested level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month, one teacher and one learner.',
    closer: 'Everything is priced in US dollars; there are no pound prices. We charge nothing until the free lesson has agreed a course and a weekly time, and the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'What Google reviewers say',

  book: {
    h2: 'Book a free Argyll and Bute lesson',
    intro: 'Tell us the learner\'s stage or age and what they enjoy. A first lesson could be a Scratch weather chart, a Python average, or the Tiree comparison on this page.',
    success: 'Thank you. Your Argyll and Bute request has arrived.'
  },

  faq: {
    h2: 'Argyll and Bute questions',
    intro: 'The council area, the Tiree project and practical details.',
    items: [
      { q: 'How many people live in Argyll and Bute?', a: 'About 86,000 usual residents in roughly 41,900 households, according to Scotland\'s Census 2022 first results, rounded to hundreds by the National Records of Scotland.' },
      { q: 'What are the largest towns in Argyll and Bute?', a: 'By NRS mid-2020 locality estimates: Helensburgh 13,230, Oban 8,140, Dunoon 7,660, Campbeltown 4,500 and Rothesay 4,310.' },
      { q: 'What is the Tiree project?', a: 'Learners compute the average and standard deviation of 65 January temperatures at Tiree and Braemar, use z-scores to compare how unusual cold months were in each place, and test how well a normal curve fits.' },
      { q: 'What is a z-score?', a: 'How far a value is from the average, measured in standard deviations. It lets you compare unusualness between places or tests with different spreads.' },
      { q: 'What is a normal distribution?', a: 'The bell-shaped curve many measurements roughly follow, with about 68 per cent of values within one standard deviation of the average and about 95 per cent within two.' },
      { q: 'Can island families join?', a: 'Yes. All lessons are live online, so learners on any island join exactly as mainland learners do.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes. Our National 5 and Higher Maths pages describe support for Scottish exams, and statistics topics like this one are part of it. We do not promise grades.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67, from early primary block coding to Python, statistics and exam courses in secondary, and data skills for adults.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Continuing is USD 100 monthly for a shared class or USD 150 monthly for a teacher of your own.' },
      { q: 'Do you follow Argyll and Bute school holidays?', a: 'Yes. Argyll and Bute Council publishes term dates; share yours and we plan breaks to match.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Argyll and Bute',
    html: 'Try <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> or <a class="cg-inline-link" href="/coding-classes-in-highland">Highland</a>, or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page for every council. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Argyll and Bute and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-agb .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.cg-root.cg-agb .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-agb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-agb .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-agb .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-agb .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-agb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-agb .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-agb .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-agb .cg-callout { border-left-width: 6px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Argyll and Bute (S12000035), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates (14 September 2023): Argyll and Bute 86,000 (females 44,000, males 42,100; published parts rounded separately); households 41,900; density 12.5 per square kilometre (Scotland 69.8); ages 0 to 14 11,600 (13.5 per cent) and 65+ 23,300 (27.1 per cent) by our addition (Scotland 15.3, 20.1). NRS Population Estimates for Settlements and Localities in Scotland, mid-2020: Helensburgh 13,230; Oban 8,140; Dunoon 7,660; Campbeltown 4,500; Rothesay 4,310; Garelochhead 3,650; Lochgilphead 2,280; Cardross 2,070; Rhu 1,930; Sandbank 1,320; Kilcreggan 1,280; Rosneath 1,260; Ardrishaig 1,220; Innellan 1,140; Tarbert 1,120; Port Bannatyne 1,090; Tobermory 1,000. Met Office historic station data: Tiree, "Lat 56.500 Lon -6.880, 12 metres amsl", sunshine from 1928 (Campbell Stokes, later Kipp and Zonen marked #); Braemar station file.',
    localProject: 'Normal distribution and z-scores on January mean temperature ((tmax + tmin) / 2), 1961 to 2025, 65 Januaries each. Tiree mean 5.52, sd 1.13; Braemar mean 1.27, sd 1.79. 1963: Tiree 2.15 (-3.37, z -2.97), Braemar -4.65 (-5.92, z -3.31). 1979: Tiree 2.70 (-2.82, z -2.49), Braemar -2.95 (-4.22, z -2.36). 2010: Tiree 3.85 (-1.67, z -1.47), Braemar -1.55 (-2.82, z -1.57). Warmest 1989: Tiree 7.95 (z +2.14), Braemar 5.40 (z +2.31). Within 1 sd 71 per cent both; within 2 sd Tiree 94, Braemar 95. Tiree May sunshine 99 Mays, mean 222.9 h, max 1975 329.1. Page labels statistics as ours. AI angle: raw differences vs z-scores. Lesson family: normal distribution, standard deviation, z-scores, checking a model.',
    requiredMentions: [
      '41,900',
      'Tiree',
      'normal distribution',
      'Helensburgh',
      'Oban',
      'Dunoon',
      'Campbeltown',
      'Rothesay',
      'Lochgilphead',
      'Garelochhead',
      'Tobermory'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Argyll and Bute and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Met Office historic station data: Tiree and Braemar monthly records.', url: 'https://www.metoffice.gov.uk/research/climate/maps-and-data/historic-station-data' }
    ],
    rejectedClaims: [
      'That Tiree is the sunniest place in the UK: not read from a primary source, so not claimed; only the file\'s May figures are given.',
      'Gaelic language statistics: identity data, excluded.',
      'Ferry routes and times: not needed and not claimed.',
      'Argyll and Bute school term dates: none read.',
      'Named Argyll and Bute schools: none named.',
      'Adding the rounded female and male counts to reach the total: not done, since each is rounded separately.'
    ]
  }
};
