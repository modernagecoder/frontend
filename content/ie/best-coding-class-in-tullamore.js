'use strict';
// Tullamore (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Tullamore, Co Offaly" and CSO table F1015 (average age by
// town), read 19 September 2026, the Irish Rail station page for Tullamore and the
// HSE page for Midland Regional Hospital Tullamore. Spine: rebuild a published
// figure end to end. A constructive page: the learner rebuilds the CSO's average
// age for Tullamore (38.1) from the 34 rows of the age table. The totals agree
// (15,598 in both, and in all 867 towns); counting everyone in completed years
// gives 37.6 whatever is assumed for the open 85-and-over row, short of an average
// of 116 to 123 years; counting each person at the middle of their year of age
// gives 38.1 for any 85-plus average from 85 to about 89.6. Run over every town,
// with 85-plus set at 88, 517 of 867 reproduce to one decimal, 820 are within a
// tenth, completed years reproduces none, and the 350 misses split 170 high and
// 180 low. All computed in this session (scratchpad age_repro.js). The Offaly
// county page owns the town-list population as a mention and quotes the published
// average age in passing; this page uses 38.1 only as the target to rebuild.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'TULLAMORE', blurb: 'The CSO prints one average age for Tullamore. Rebuild it from the age table and the attempt reveals how the CSO counted.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-tullamore',
  code: 'tlm',
  accent: '#314941',
  accentRationale: 'Tullamore: a dark canal-slate green from the solver, clear of the Offaly county green and the Carlow teal it sits nearest',
  pageType: 'city',
  place: {
    name: 'Tullamore',
    eyebrow: 'Tullamore, County Offaly',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Offaly' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-offaly', name: 'County Offaly' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Offaly', href: '/coding-classes-in-county-offaly' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tullamore, County Offaly, Ireland',
  title: 'Best Coding Class in Tullamore | Modern Age Coders',
  description: 'Coding, Python, data and AI lessons for Tullamore learners aged 6 to 67, taught live online in small groups matched by level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Tullamore, with a data project that rebuilds the town\'s published average age from the census table underneath it.',
  twitterDescription: 'Live online coding and AI classes for Tullamore, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Tullamore',
    description: 'Ability-grouped online coding, Python, AI, data and mathematics for children, teenagers and adults in Tullamore, County Offaly, taught live in English.'
  },

  h1: 'Coding classes in Tullamore',
  capsuleQ: 'What is the best coding class in Tullamore?',
  capsule: 'Of Tullamore\'s 5,601 households, 4,530 report broadband, which is the whole of the equipment list apart from a computer. Our teachers take a live lesson over video with a few learners working at the same level, or with one learner on their own, about twice a week, for any age from six to sixty-seven. The opening lesson costs nothing. A group place is then USD 100 a month and private teaching USD 150.',
  lead: 'The Central Statistics Office prints a single number for how old Tullamore is: an average age of 38.1. Underneath it sits a table counting the town\'s people by age, one row per year up to nineteen and then five-year bands, ending in an open row for everyone aged 85 and over. This page rebuilds the one from the other, the way a careful analyst checks any figure before quoting it. The totals agree. The average only comes out right if each person is counted at the middle of their year of age, not at the birthday just gone, and that single discovery is the reason to do the exercise. Then the same program runs across all 867 census towns, and the pattern of its misses shows what grouping ages into bands throws away. Every number below came from running it.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Tullamore.',

  picks: {
    eyebrow: 'Course picks for Tullamore',
    h2: 'Four places Tullamore learners start',
    intro: 'Start from age and interest; the first lesson, taken by the course teacher, confirms the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding where sorting things into boxes and counting them is part of the game.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, rounding and tables worked out by a program the learner writes, then checked by hand.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census tables in Python, and the habit of rebuilding a published number before trusting a chart.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who report figures at work and want to know how each one was made.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Rebuild Tullamore\'s average age from the table beneath it',
      intro: 'The published figure is 38.1. The age table for the same town has 34 rows. Four steps get from the rows to the figure, and one of them decides whether it can be done at all.',
      body: [
        { kind: 'align', rows: [
          { code: 'Step 1', req: '<strong>Match the population.</strong> Add up the age table before anything else.', ours: 'The 34 rows sum to 15,598, the same as the published population of Tullamore. The birthplace and citizenship tables count 15,412 usual residents instead, so they cannot be the base. Across all 867 towns the age-table total equals the published population every time.' },
          { code: 'Step 2', req: '<strong>Give every row one age.</strong> A band holds many ages; the formula needs one.', ours: 'There are 20 single years from 0 to 19, 13 five-year bands from 20 to 24 up to 80 to 84, and one open row, 85 and over, which holds 230 people in Tullamore and has no upper edge.' },
          { code: 'Step 3', req: '<strong>Choose how an age is counted.</strong> Completed years, or the middle of the year.', ours: 'In completed years somebody who is 38 counts as 38 and a band from 20 to 24 as 22. At the middle of the year the same person counts as 38.5, because on an average day a 38-year-old is halfway to 39, and the band counts as 22.5.' },
          { code: 'Step 4', req: '<strong>Compare, then widen.</strong> One town can mislead; run all of them.', ours: 'Round the result to one decimal, as the published figure is, test it against that figure, then repeat for all 867 towns and count how many come out exactly.' }
        ] },
        { kind: 'table', mt: true, caption: 'Tullamore\'s average age rebuilt two ways, with the 230 people aged 85 and over set at four assumed averages, against the published 38.1', head: ['Oldest row at', 'Completed years', 'Middle of year', 'Gives 38.1'], rows: [
          ['87', '37.62', '38.11', 'Middle'],
          ['88', '37.63', '38.13', 'Middle'],
          ['89', '37.65', '38.14', 'Middle'],
          ['90', '37.66', '38.16', 'Neither'],
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The convention settles itself', p: 'Counting in completed years, no believable guess about the oldest row reaches 38.1: the 230 people aged 85 and over would need an average age of 116 to 123. Counting at the middle of the year, any average for that row from 85 up to about 89.6 rounds to the published figure.' },
          { h3: 'Then every town', p: 'At the middle of the year, with the oldest row set at 88, 517 of the 867 towns come out exactly at their published average age, and 820 land within a tenth of it. Completed years reproduces none of the 867, whichever of the four values is used for the oldest row.' },
          { h3: 'The misses point both ways', p: 'Of the 350 towns that miss at all, 170 are rebuilt too high and 180 too low. A wrong method would push nearly all of them one way. A scatter on both sides is what grouping costs when the method is right.' }
        ] },
        { kind: 'callout', h3: 'Which way a rebuilt number misses tells you why it missed', p: 'A reproduction is an experiment, not a formality. If every rebuilt value comes out low by about half a year, the method differs from the publisher\'s, and here the fix is to count ages at the middle of the year. If the misses fall on both sides of the target in roughly equal numbers, the method matches and the gap is information the table never contained. Knowing which of the two you are looking at stops the two classic mistakes: blaming the publisher for your own convention, and fiddling with a correct method to chase a rounding difference.' },
        { kind: 'p', text: 'In code the whole exercise is small. The learner writes one function that takes the band edges, the counts, a convention and a value for the open row, and returns an average. A second function rounds it to one decimal and compares it with the published figure. A loop sends all 867 towns through both and tallies exact matches, near misses and the direction of every miss. The table above is that program run on one town; the three findings are the same program run on every town. The learner then changes one thing at a time, the convention or the value for the oldest row, and watches the tally move, which is how a guess about how a number was made becomes evidence.' }
      ]
    },
    {
      id: 'misses', tint: 'tint', eyebrow: 'What the table cannot hold',
      h2: 'Where grouping costs the most',
      intro: 'The towns that miss by more than a tenth are not random. Two of the largest misses show the two ways a band loses detail.',
      body: [
        { kind: 'table', caption: 'Rebuilt against published average age, middle-of-year counting, oldest row at 88', head: ['Town', 'Population', 'Aged 85 and over', 'Rebuilt', 'Published'], rows: [
          ['Tyrrellspass, Co Westmeath', '480', '51, one in ten', '49.91', '50.3'],
          ['Ballynoe, Co Cork', '211', 'none', '36.23', '36.0'],
          ['Tullamore, Co Offaly', '15,598', '230', '38.13', '38.1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An open row with many people in it', p: 'In Tyrrellspass 51 of 480 people sit in the row with no upper edge. Whatever single age is assumed for them moves the whole town\'s average, and the table gives no way to choose it. The open row is one of two sources of error, and it weighs most where, as here, it holds a large share of the town.' },
          { h3: 'No open row, still a miss', p: 'Nobody in Ballynoe is 85 or over, yet the rebuilt average is 0.23 years out. The five-year bands are the reason: 211 people spread across bands five years wide can sit near the top or the bottom of each, and the midpoint guess can be off in the same direction several times over.' },
          { h3: 'Size helps', p: 'The towns that reproduce exactly have a median population of 772, the towns that miss about 440, and the 47 that miss by more than a tenth just 238. In a large town the errors inside each band tend to cancel, which is why Tullamore, with 15,598 people and 230 in the oldest row, comes out right for any average in that row from 85 to about 89.6.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The rebuild shows that the published averages behave as if ages were counted at the middle of the year. It does not show how the CSO computed them, and nothing here says the published figures are wrong: the misses are the size and the pattern that grouping alone would produce.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Tullamore in the small area tables',
      intro: 'Published for the town Tullamore, Co Offaly, in the Census 2022 small area tables. Each table counts its own population, which is why two different totals appear.',
      body: [
        { kind: 'table', caption: 'Tullamore, Co Offaly, Census 2022', head: ['Counted', 'Number'], rows: [
          ['Usual residents, birthplace table', '15,412'],
          ['Population, age table', '15,598'],
          ['Households', '5,601'],
          ['Households with broadband', '4,530'],
          ['Working residents in the travel table', '6,457'],
          ['Journeys to school, college or childcare', '3,833'],
          ['Children under fifteen in childcare', '869'],
          ['Aged 85 and over', '230']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting to work', p: 'Of 6,457 working residents, 3,517 drive, 859 walk, 442 give home as the main answer, 381 ride as a car passenger, 346 go by van, 210 cycle, 146 take the train and 57 the bus.' },
          { h3: 'Getting to school', p: 'Of 3,833 journeys to school, college or childcare, 1,772 are made as a car passenger, 760 on foot and 580 by bus, with 98 learners driving themselves, 85 cycling and 77 on the train.' },
          { h3: 'Working at home', p: 'Asked the question directly, 1,353 working residents do at least some of their work from home, 4,349 never do and 755 left it blank.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station address as Iarnród Éireann, Kilcruttin, Tullamore, Co. Offaly, Eircode R35 RY63, and says sheltered bike parking is available there. The HSE lists Midland Regional Hospital Tullamore at Arden Road, Tullamore, Offaly, R35 NY51. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Tullamore learners',
      intro: 'A fixed hour on two days of most weeks, with the teacher live for all of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary school', p: 'The census counts 1,581 children aged six to twelve in the town. They start with block code, games and puzzles, and meet averages as something a program can work out.' },
          { h3: 'Secondary school', p: 'For the 1,266 aged thirteen to eighteen: Python, websites, data and AI projects, including real census tables from the junior cycle on.' },
          { h3: 'Adults', p: 'Retired, working shifts or back at a desk after years away, adults start from wherever they are, including from nothing, and the first lesson places them.' }
        ] },
        { kind: 'p', text: 'Census counts are Central Statistics Office figures printed as published, and every rebuilt average on this page came from running the reconstruction over the published age table and table F1015 on 19 September 2026. Irish Rail and the HSE are quoted from their own pages and have no link with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting things to checking a statistic',
    intro: 'Ages are a starting guide; the first lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sort and count', p: 'Block-coded games that sort things into groups and count them, the first step towards any table.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Averages by program', p: 'Writing code that works out an average, then checking it by hand and finding out when the two disagree.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Rebuild a statistic', p: 'Loading real tables in Python, reproducing a published figure and explaining any gap.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Check before citing', p: 'Tracing a figure at work back to its table, and saying plainly what it can and cannot support.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how old Tullamore is',
    intro: 'It will answer quickly. Whether the answer is the CSO\'s depends on a choice it will not mention.',
    p1: 'Ask an AI assistant to work out the average age from the census bands and it will write correct-looking code in seconds. It has to decide how to count a person who is 38, and nothing in a short request tells it what the CSO did, so it picks. If it picks completed years it prints about 37.6 for Tullamore, confidently, half a year short of the published 38.1.',
    p2: 'A learner who has done this project asks for the code, runs it, compares the result with the published figure and notices which way it misses. A miss in one direction for every town is a method problem, and the fix is a change of convention, not a change of data.',
    closer: 'The arithmetic is cheap now. Knowing which arithmetic produced a published number still takes a person who checks.',
    blogAnchor: 'why learning to code keeps its worth'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Tullamore lessons run',
    intro: 'The arrangements, in brief.',
    cells: [
      { h3: 'Live, not recorded', p: 'A teacher runs each lesson in real time and responds to the code in front of the learner.' },
      { h3: 'Matched groups', p: 'Five to ten learners at one stage, drawn from Offaly, the rest of Ireland and other countries.' },
      { h3: 'Twice most weeks', p: 'About eight lessons a month, on days and at an hour agreed at the start.' },
      { h3: 'Fitted to the school year', p: 'The plan allows for mid-terms, holidays and the weeks before exams.' },
      { h3: 'At home', p: 'A keyboard and a screen wide enough for code beside a video window, a headset or speakers with a microphone, and the ordinary home broadband that 4,530 households here already have.' },
      { h3: 'Taught alone', p: 'Some learners are taught on their own, usually because the group at their level meets when they cannot, or because they are ahead of every group running.' }
    ],
    spec: { title: 'Nothing to travel to', p: 'Lessons reach Tullamore over video only. There is no classroom in the town, and the same lesson reaches Clara, Kilbeggan or anywhere else with a connection.' }
  },

  fees: {
    h2: 'Fees for Tullamore',
    intro: 'All of it, in one place.',
    first: 'A complete first lesson with a level assessment, at no charge.',
    group: 'A month in a group of five to ten at the same stage, about eight live lessons.',
    private: 'A month of one-to-one lessons on the same weekly pattern.',
    closer: 'Nothing is owed for the opening hour; the month begins when the first paid lesson does, at the one US dollar rate used for every country outside India, and the pricing page sets out what happens over holidays, after a missed lesson or on moving between group and private.'
  },

  reviewsH2: 'Six Google reviews from our families, quoted in full',

  book: {
    h2: 'Book a free first lesson from Tullamore',
    intro: 'Tell us the learner\'s age and what they enjoy, and the first hour is planned around it. It may end with a game, a first program, or an average that finally matches the published one.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Tullamore coding class questions',
    intro: 'The questions Tullamore families put to us first.',
    items: [
      { q: 'How many people live in Tullamore?', a: 'It depends which census table is asked, and both answers are official. The age table and the published town population give 15,598; the birthplace and citizenship tables count 15,412 usual residents. The town has 5,601 households.' },
      { q: 'What is the data project on this page?', a: 'Rebuilding the published average age of Tullamore, 38.1, from the age table. It only comes out right when each person is counted at the middle of their year of age, and the same program then reproduces 517 of the 867 census towns exactly to one decimal.' },
      { q: 'Why do some towns not come out exactly?', a: 'Because the table groups ages into bands and ends in an open row for 85 and over, so detail is gone before the calculation starts. Of the towns that miss, 170 come out high and 180 low, which is what lost detail looks like rather than a wrong method.' },
      { q: 'How do Tullamore residents get to work?', a: 'Of the 6,457 working residents in the travel table, 3,517 drive, 859 walk, 442 work mainly at or from home, 381 are car passengers, 346 use a van, 210 cycle and 146 take the train.' },
      { q: 'When are lessons?', a: 'After school, in the evening and at weekends. Lessons land in our teachers\' evening, four and a half hours later on the clock than yours while Ireland is on summer time and five and a half later in winter, and we agree an hour that suits both seasons.' },
      { q: 'Is it too late to start as an adult?', a: 'No. Learners up to sixty-seven join us, often with no coding behind them, and after the first lesson they either join a group at their level or continue one to one.' },
      { q: 'Do learners from outside the town join too?', a: 'Yes. Lessons are online, so a learner in Clara, Kilbeggan or a farm outside Tullamore gets the same class, and groups are formed by level rather than address.' },
      { q: 'Is there a Modern Age Coders classroom in Tullamore?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Tullamore cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Beyond Tullamore',
    html: 'Next door in the series are the <a class="cg-inline-link" href="/coding-classes-in-county-offaly">County Offaly</a> page and the midland town pages for <a class="cg-inline-link" href="/best-coding-class-in-portlaoise">Portlaoise</a>, <a class="cg-inline-link" href="/best-coding-class-in-mullingar">Mullingar</a> and <a class="cg-inline-link" href="/best-coding-class-in-athlone">Athlone</a>, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. For a side-by-side look at online coding schools there is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a separate comparison</a>, and every county and town in the series is listed from the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tullamore, Offaly and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-offaly', label: 'County Offaly' },
    { href: '/best-coding-class-in-portlaoise', label: 'Portlaoise' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-tlm .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.07vw, 2.55rem); }
.cg-root.cg-tlm .cg-hero h1 { font-weight: 650; letter-spacing: -0.0172em; line-height: 1.07; }
.cg-root.cg-tlm .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.22rem; }
.cg-root.cg-tlm .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tlm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0118em; }
.cg-root.cg-tlm .cg-grid-3 { gap: clamp(1.02rem, 2.61vw, 2.06rem); }
.cg-root.cg-tlm .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-tlm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tlm .cg-align-code { font-weight: 700; letter-spacing: 0.05em; }
.cg-root.cg-tlm .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.12rem; }
.cg-root.cg-tlm .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Tullamore, Co Offaly, CSO Census 2022 Small Area Population town tables and CSO table F1015, read 19 September 2026. F1015 (Population, Average Age, by town and sex, updated 29 June 2023): Tullamore, Co Offaly, both sexes, population 15,598, average age 38.1. SAP2022T1T1TOWN22 (population by single year of age 0 to 19, five-year bands 20-24 to 80-84, and 85 and over): Tullamore total 15,598; 85 and over 230 (82 male, 148 female); ages 6 to 12 sum to 1,581; ages 13 to 18 sum to 1,266. SAP2022T2T1TOWN22: usually resident population 15,412. SAP2022T15T2TOWN22: households 5,601, broadband 4,530, no internet 527, other 107, not stated 437. SAP2022T11T1TOWN22 to work total 6,457: car driver 3,517, on foot 859, work mainly at or from home 442, car passenger 381, van 346, bicycle 210, train DART or Luas 146, bus 57, not stated 462; to school, college or childcare total 3,833: car passenger 1,772, on foot 760, bus 580, car driver 98, bicycle 85, train 77, not stated 431. SAP2022T11T4TOWN22: 1,353 work from home at least some of the time, 4,349 never, 755 not stated. SAP2022T11T5TOWN22: 869 children under 15 in childcare. Reconstruction run in this session over all 867 towns (the all-towns row excluded), joining T1T1 to F1015 by town code: the age-table total equals the F1015 population in all 867. Middle-of-year convention (single year x counted at x + 0.5, band at its midpoint) with 85 and over at 87, 88, 89, 90: exact to one decimal 484, 517, 513, 465 towns; within 0.1: 811, 820, 825, 817. Completed-years convention (x, band lower edge + 2): 0 exact and 0 within 0.1 at every tested value. At 88: 350 misses, 170 rebuilt high and 180 low; 47 off by more than 0.1; median population of exact towns 772, of missing towns 439.5, of the 47 far misses 238. Tullamore: completed years 37.62, 37.63, 37.65, 37.66 at 87 to 90; middle of year 38.11, 38.13, 38.14, 38.16. 85-and-over average needed to round to 38.1: 82.8 to 89.6 (middle of year), 116.2 to 123.0 (completed years). Largest misses at 88: Tyrrellspass, Co Westmeath, population 480, 85 and over 51, rebuilt 49.91, published 50.3; Ballynoe, Co Cork, population 211, 85 and over 0, rebuilt 36.23, published 36.0. Irish Rail, Tullamore: "Station Address Iarnród Éireann, Kilcruttin, Tullamore, Co. Offaly", "Eircode R35 RY63", "Sheltered bike parking is available in Tullamore station". HSE, Midland Regional Hospital Tullamore: "Arden Road, Tullamore, Offaly, R35 NY51".',
    localProject: 'Rebuild a published figure end to end. The CSO publishes an average age of 38.1 for Tullamore in table F1015; the learner rebuilds it from the 34 rows of the census age table for the same town. Step one checks totals: the age rows sum to 15,598, equal to the published population, while the birthplace table counts 15,412 usual residents and cannot be the base; the check passes in all 867 towns. Step two assigns an age to each row, including the open 85-and-over row of 230 people. Step three chooses a convention, and the rebuild decides it: completed years gives 37.62 to 37.66 for any 85-plus average from 87 to 90 and would need an impossible 116 to 123 years to reach 38.1, while counting each person at the middle of their year gives 38.11 to 38.14 and rounds correctly for any 85-plus average up to about 89.6. Step four runs all 867 towns: with the oldest row at 88, 517 reproduce exactly to one decimal, 820 within a tenth, 47 miss by more, and completed years reproduces none. The 350 misses split 170 high and 180 low, the signature of lost detail rather than a wrong method; Tyrrellspass (51 of 480 aged 85 and over) and Ballynoe (nobody over 85, still 0.23 out) show the open row and the five-year bands as the two sources. Lesson: which way a rebuilt number misses tells you why it missed. A constructive page following Laytown-Bettystown; new family for the cluster: reproducing a published statistic.',
    requiredMentions: [
      '15,412',
      '5,601',
      '4,530',
      '6,457',
      '3,517',
      '859',
      '1,353',
      '3,833',
      '869',
      '230',
      '517',
      'R35 RY63'
    ],
    sources: [
      { claim: 'CSO table F1015, Population and Average Age by town and sex, Census 2022: Tullamore, Co Offaly, both sexes, population 15,598, average age 38.1; the same table gives Tyrrellspass, Co Westmeath 50.3 and Ballynoe, Co Cork 36.0, and an average age for each of the 867 towns used in the reconstruction.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T1T1TOWN22, population by age: Tullamore total 15,598 in 34 age rows (single years 0 to 19, five-year bands 20 to 84, 85 and over), 230 aged 85 and over, 1,581 aged 6 to 12, 1,266 aged 13 to 18; Tyrrellspass 480 with 51 aged 85 and over; Ballynoe 211 with none.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T1T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Tullamore, Co Offaly: usual residents 15,412; households 5,601, broadband 4,530; to work 6,457 with car driver 3,517, on foot 859, mainly at or from home 442, car passenger 381, van 346, bicycle 210, train 146, bus 57; to school, college or childcare 3,833 with car passenger 1,772, on foot 760, bus 580, car driver 98, bicycle 85, train 77; 1,353 work from home at least some of the time, 4,349 never, 755 not stated; 869 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Tullamore station: "Station Address Iarnród Éireann, Kilcruttin, Tullamore, Co. Offaly", "Eircode R35 RY63", "Sheltered bike parking is available in Tullamore station".', url: 'https://www.irishrail.ie/en-ie/station/tullamore' },
      { claim: 'HSE, Midland Regional Hospital Tullamore: "Arden Road, Tullamore, Offaly, R35 NY51".', url: 'https://www2.hse.ie/services/hospitals/midland-regional-hospital-tullamore/' }
    ],
    rejectedClaims: [
      'Any statement of how the CSO computes average age: the rebuild shows only that the published figures behave like middle-of-year counting.',
      'Any suggestion that a published average age is wrong, or any claim about the ages the CSO worked from: the misses are only shown to be consistent with grouping.',
      'The county work-from-home headline (8,324 people, 24 percent) and the gap between it and the county SAP table: the Offaly page owns the headline, and the gap cannot be explained without the profile table behind it.',
      'A national average-age comparison built from the TOWN22 "State" row: that row is all 867 towns combined, not the State.',
      'Any reason why Tyrrellspass has so many residents aged 85 and over.',
      'The Offaly County Council eircode, the town density and area, and the county page\'s commuting and citizenship points: the County Offaly page owns them.'
    ]
  }
};
