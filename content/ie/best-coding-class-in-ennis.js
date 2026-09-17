'use strict';
// Ennis (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Ennis, Co Clare", read 18 September 2026, the Irish Rail
// station page for Ennis and glor's own site. Spine: a rank is not a fact. Among
// the 59 towns with at least 4,000 working residents in the travel table, Ennis
// is 36th on the share cycling to work at 1.3390 percent, with Kildare town 35th
// at 1.3394; one more cyclist in Ennis reverses the order. Change the inclusion
// cut and the same town on the same measure is 36th of 59, 49th of 102, 59th of
// 152 or 83rd of 263. New family for the cluster: ranking stability, chosen to
// avoid another denominator lesson. Clare owns the town-list population 27,923
// and the V95 DP96 eircode, so neither appears here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ENNIS', blurb: 'Thirty-sixth of fifty-nine towns, or fifty-ninth of a hundred and fifty-two, on the same measure. A Clare lesson in reading league tables.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-ennis',
  code: 'enn',
  accent: '#8A5A2E',
  accentRationale: 'Ennis: a turf brown from the solver, clear of the Clare county accent and of the Limerick and Galway city blues nearby',
  pageType: 'city',
  place: {
    name: 'Ennis',
    eyebrow: 'Ennis, County Clare',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Clare' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-clare', name: 'County Clare' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Clare', href: '/coding-classes-in-county-clare' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ennis, County Clare, Ireland',
  title: 'Best Coding Class in Ennis | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Ennis learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Ennis, with a project on why a town can be 36th or 83rd on the same measure.',
  twitterDescription: 'Coding and AI classes for Ennis, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ennis',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Ennis, County Clare, taught live in English.'
  },

  h1: 'Coding classes in Ennis',
  capsuleQ: 'What is the best coding class in Ennis?',
  capsule: 'The census town tables record 27,548 usual residents in Ennis and 10,587 households, of which 8,616 report broadband. Learning with us costs nobody a journey. Twice in most weeks a teacher appears on video at the agreed hour, and the learner works either beside a handful of others at the same stage, never more than ten in all, or with the teacher alone. Ages run from six to sixty-seven. Nothing is charged for the opening lesson, and a shared place afterwards is USD 100 a month against USD 150 for private teaching.',
  lead: 'Rank every town with at least 4,000 working residents by the share of them who cycle to work, and Ennis comes 36th of 59, at 1.3390%. Immediately above it sits Kildare town at 1.3394%. The gap between them is four ten-thousandths of a percentage point, which in Ennis is less than one person: add a single cyclist to the town\'s 164 and the order reverses. Ten more would pass Celbridge, seventeen would pass Gorey, and five fewer would drop Ennis below Castlebar. Then change nothing except who is allowed onto the list. Include towns with 2,000 working residents and Ennis is 49th of 102; at 1,000 it is 59th of 152; at 500 it is 83rd of 263. Same town, same measure, same day, four different ranks.',
  wa: 'Hello Modern Age Coders, I want to arrange a free coding lesson for a learner in Ennis.',

  picks: {
    eyebrow: 'Course picks for Ennis',
    h2: 'Where Ennis learners start',
    intro: 'Choose on age and interest. The free lesson is taught by the course teacher and it decides the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with scores and lists, where sorting is something you build rather than trust.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the start, including sorting a table and seeing how close the top entries really are.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census data, rankings, and the gap that a position on a list hides.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who report on league tables and dashboards where order changes week to week.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A rank is not a fact',
      intro: 'Towns ranked by the share of working residents whose main means of travel is a bicycle. Counts are published; the list, the cut and the shares are ours.',
      body: [
        { kind: 'table', caption: 'Nine places on one list, towns with 4,000 or more working residents', head: ['Position', 'Town as published', 'Cyclists', 'Working residents', 'Share'], rows: [
          ['32', 'Drogheda, Counties Louth & Meath', '291', '19,199', '1.5157%'],
          ['33', 'Gorey, Co Wexford', '70', '4,751', '1.4734%'],
          ['34', 'Celbridge, Co Kildare', '140', '9,893', '1.4151%'],
          ['35', 'Kildare, Co Kildare', '62', '4,629', '1.3394%'],
          ['36', 'Ennis, Co Clare', '164', '12,248', '1.3390%'],
          ['37', 'Castlebar, Co Mayo', '73', '5,632', '1.2962%'],
          ['38', 'Arklow, Co Wicklow', '71', '5,498', '1.2914%'],
          ['39', 'Rush, Co Dublin', '61', '4,945', '1.2336%'],
          ['40', 'Kilcock, Counties Kildare & Meath', '53', '4,331', '1.2237%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One person decides two places', p: 'Ennis and Kildare town are separated by 0.0004 of a percentage point. A 165th cyclist in Ennis lifts its share to 1.3472% and moves it above Kildare, and nothing whatever has changed about either town.' },
          { h3: 'The list itself is a choice', p: 'Ours admits towns with at least 4,000 working residents, which gives 59 of them. Admit towns from 2,000 and Ennis is 49th of 102. From 1,000, 59th of 152. From 500, 83rd of 263. The cut is never neutral and is rarely printed beside the rank.' },
          { h3: 'What a position hides', p: 'Positions look evenly spaced and the underlying gaps are not. From 32nd to 40th on this list spans less than three tenths of a percentage point, while the leading town on the same measure is several times higher than any of them.' }
        ] },
        { kind: 'callout', h3: 'League tables are answers with the error bars removed', p: 'Sales leaderboards, app store charts, supplier scorecards, country indices, internal team dashboards: a ranking converts a set of measurements into an order, and the order is what gets quoted, screenshotted and acted on. Two things vanish in that conversion. The size of each gap disappears, so a hair and a chasm look identical. The inclusion rule disappears too, so nobody sees that the list was drawn at four thousand rather than five hundred. Publishing the gap beside the position, and the cut beside the list, costs two extra columns and prevents most of the trouble.',
        },
        { kind: 'p', text: 'The project is a ranking function with a conscience. It sorts, then for every entry it also computes the gap to the position above and how many people would have to change for that gap to close, and it refuses to print a position without both. The learner runs it at each of the four cuts, records the four positions Ennis takes, and writes the single sentence they would be willing to defend in public. On the evidence here that sentence mentions the share, the denominator and the cut, and it never contains the word ahead.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Ennis in the town tables',
      h2: 'The town behind the ranking',
      intro: 'Published for the built-up area Ennis, Co Clare, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Ennis, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '27,548'],
          ['Households', '10,587'],
          ['Households reporting broadband', '8,616'],
          ['Working residents in the travel table', '12,248'],
          ['Residents travelling to school, college or childcare', '7,073'],
          ['Working residents whose main means is a bicycle', '164']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 12,248 working residents, 7,407 drive, 1,134 walk, 1,031 give home as their main answer, 653 travel by van, 637 go as a car passenger, 164 cycle and 51 take a train.' },
          { h3: 'The school journey', p: 'Of the 7,073 travelling to school, college or childcare, 4,150 go as a car passenger, 1,380 walk, 343 take a bus, 263 drive themselves and 99 cycle.' },
          { h3: 'Home working', p: 'A table asking about home working directly counts 3,279 working residents doing some work at home, 7,535 who never do and 1,434 who did not state.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Ennis station as Quinn Road, Ennis, Co. Clare, Eircode V95 WY02, on the Dublin Heuston to Limerick and Ennis route. It is staffed from 05:00 to 23:30 Monday to Saturday, has toilets, an enclosed waiting room, free Wi-Fi and a ticket machine, and no booking office.' }
      ]
    },
    {
      id: 'measures', tint: 'tint', eyebrow: 'One town, several positions',
      h2: 'Every rank Ennis holds on this one measure',
      intro: 'The same 164 cyclists and the same 12,248 working residents, listed against four different inclusion rules and one different mode.',
      body: [
        { kind: 'table', caption: 'How the position moves without the town moving', head: ['List', 'Towns on it', 'Position of Ennis'], rows: [
          ['Cycling share, towns with 4,000 or more working residents', '59', '36th'],
          ['Cycling share, towns with 2,000 or more', '102', '49th'],
          ['Cycling share, towns with 1,000 or more', '152', '59th'],
          ['Cycling share, towns with 500 or more', '263', '83rd'],
          ['Walking share, towns with 4,000 or more', '59', '33rd']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the cut moves it', p: 'Smaller towns tend to sit further from the middle on any share, because a handful of people is a larger part of a smaller total. Letting them onto the list changes the field around Ennis without changing Ennis.' },
          { h3: 'A second measure, a third answer', p: 'On the share walking to work, 1,134 of 12,248, the same town on the same list is 33rd rather than 36th. Choosing the measure is as consequential as choosing the cut.' },
          { h3: 'None of this ranks the towns themselves', p: 'These are travel shares on one April day, not a verdict on any place. The project is about how a list behaves, and every position here belongs to a list we built and described.' }
        ] },
        { kind: 'spec', title: 'The arts centre', p: 'Glor gives its address as Causeway Link, Ennis, Co. Clare, V95 VHP0, and describes a venue with a gallery, a cafe and conference facilities alongside its performance programme. We have no connection with it and reproduce none of its prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Ennis',
      h2: 'How the courses run here',
      intro: 'A fixed hour each week, a teacher in the room with the learner, and work pitched at the right level.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'Block coding and first games, at an hour early enough to suit a younger learner.' },
          { h3: 'Secondary age', p: 'Python, working websites and AI projects, from first year through Transition Year and into the exam classes.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults at any level, including the 3,279 residents already doing some work at home.' }
        ] },
        { kind: 'p', text: 'Two institutions are named above, the railway station and the arts centre, each from information it publishes itself, and we have no relationship with either or with Clare County Council. Census counts appear exactly as the Central Statistics Office published them. The rankings, though, are entirely ours: we picked the measure, drew the inclusion cut, ran the sort, and print all three beside every position, because a position without them is not something we would put our name to.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting a list to questioning one',
    intro: 'Ages are a guide; the free lesson finds the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Putting things in order', p: 'Sorting and comparing in block code, and noticing when two things are almost equal.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Sorting real data', p: 'Writing a sort in Python and printing the gap between neighbours, not just the order.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Rankings and their rules', p: 'Building league tables from published data, and showing how the inclusion rule moves them.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Leaderboards at work', p: 'Reporting positions with gaps attached, so that nobody acts on a difference of one.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask where Ennis ranks',
    intro: 'You will get a number, not a list.',
    p1: 'Assistants are good at producing a position and poor at volunteering the two things that make it meaningful. Ask which towns cycle most and a ranking arrives, usually with no inclusion rule stated and no gaps shown, and a place separated from its neighbour by one person appears as a clean step down the table.',
    p2: 'A learner who has built the ranking function asks for the cut and the gap before quoting any position, and supplies both when writing one. That turns an impressive-looking answer into a defensible one, which is the only kind worth sending to somebody else.',
    closer: 'Ordering things is the easiest thing a computer does. Knowing when an order means nothing is the part that has to be taught.',
    blogAnchor: 'why coding still earns its place'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The practical side in Ennis',
    intro: 'Six points.',
    cells: [
      { h3: 'Live, not recorded', p: 'A teacher present throughout, responding to the work as the learner does it.' },
      { h3: 'Placed by level', p: 'Groups of five to ten at one stage, joining from Ennis, elsewhere in Ireland and abroad.' },
      { h3: 'Two lessons weekly', p: 'About eight a month, in a slot chosen once and then kept for the term.' },
      { h3: 'School calendar', p: 'Mid-terms, holidays and exam weeks are planned in before the first lesson.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, working sound, and a connection able to carry video.' },
      { h3: 'One to one', p: 'Where no group at the right level meets at a workable hour, the same course is taught privately.' }
    ],
    spec: { title: 'No position to defend', p: 'Nobody is ranked in our groups. Learners are placed by what they can do and moved when they outgrow it, which is the opposite of a leaderboard.' }
  },

  fees: {
    h2: 'Ennis class fees',
    intro: 'Three lines, complete.',
    first: 'A full opening lesson, taught and assessed, at no charge.',
    group: 'A month in an ability group of five to ten, about eight live lessons.',
    private: 'A month of private teaching on the same weekly pattern.',
    closer: 'Everything is billed monthly in US dollars at the one rate for families outside India, so Ennis sees the same figure as Galway or Navan and no euro list beside it. We invoice once, and only once, a course and a weekly time have both been chosen in the opening lesson; what happens around holidays, a week missed and a switch of format is written out on the pricing page rather than agreed case by case.'
  },

  reviewsH2: 'Six of our families, printed from Google without edits',

  book: {
    h2: 'Book a free Ennis lesson',
    intro: 'Send an age and an interest and we build the first hour from it, whether that turns into a game, a first Python script or a league table taken apart.',
    success: 'Thank you. We will be in touch about the Ennis lesson shortly.'
  },

  faq: {
    h2: 'Ennis coding class questions',
    intro: 'What Ennis families ask before booking.',
    items: [
      { q: 'How many people live in Ennis?', a: 'The Census 2022 small area tables count 27,548 usual residents in the built-up area of Ennis, in 10,587 households. Our Clare page quotes the census town list, which counts town populations on a slightly different basis.' },
      { q: 'What is the Ennis data project?', a: 'Learners build a ranking of towns by the share cycling to work, find Ennis 36th of 59 at 1.3390% with Kildare town 35th at 1.3394%, work out that one cyclist reverses it, then rerun the list at three other inclusion cuts and watch the same town land 49th, 59th and 83rd.' },
      { q: 'Is Ennis good or bad on cycling then?', a: 'The page does not say, because a position on a list we built is not a verdict on a town. The published facts are 164 cyclists among 12,248 working residents on one April day, and the rest is arithmetic we describe as ours.' },
      { q: 'How do Ennis residents travel to work?', a: 'Of the 12,248 working residents in the travel table, 7,407 drive, 1,134 walk, 1,031 give working mainly at or from home, 653 use a van, 637 travel as a car passenger, 164 cycle and 51 take a train.' },
      { q: 'What hours do lessons run?', a: 'After school, evenings and weekend mornings. Our teachers are in India, four and a half hours in front of Irish clocks while summer time lasts and five and a half afterwards, and we settle a workable weekly hour in the opening lesson.' },
      { q: 'Can adults in Ennis join?', a: 'Yes, to sixty-seven, with no previous coding needed. The opening lesson places an adult in a group at the same stage or with a teacher one to one.' },
      { q: 'Are learners compared with each other?', a: 'No. There is no ranking, no leaderboard and no class position. Progress is measured against what the learner could do at the start.' },
      { q: 'Is there a Modern Age Coders classroom in Ennis?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Ennis cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Ennis',
    html: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-county-clare">County Clare</a>, with <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> and <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a> on either side and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> around them. Weighing up online schools is what the <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> is for, and the full index of this cluster sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ennis, Clare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-clare', label: 'County Clare' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-enn .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.22vw, 2.59rem); }
.cg-root.cg-enn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0184em; line-height: 1.061; }
.cg-root.cg-enn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.21rem; }
.cg-root.cg-enn .cg-eyebrow { letter-spacing: 0.164em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-enn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0129em; }
.cg-root.cg-enn .cg-grid-3 { gap: clamp(1.08rem, 2.64vw, 2.04rem); }
.cg-root.cg-enn .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-enn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-enn .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-enn .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-enn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Ennis, the built-up area "Ennis, Co Clare", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22 to work total 12,248: car driver 7,407, on foot 1,134, work mainly at or from home 1,031, not stated 957, van 653, car passenger 637, bicycle 164, bus 158, train DART or Luas 51, motorcycle 29, other including lorry 27; to school, college or childcare total 7,073: car passenger 4,150, on foot 1,380, not stated 703, bus 343, car driver 263, bicycle 99, train 72, work mainly at or from home 40, van 15, other 8, motorcycle 0. Rankings computed by us from the same table, using the work block only and the share whose main means is a bicycle: among towns with at least 4,000 working residents, 59 of them, Ennis is 36th at 1.3390 percent, Kildare town 35th at 1.3394 (62 of 4,629), Celbridge 34th at 1.4151 (140 of 9,893), Gorey 33rd at 1.4734 (70 of 4,751), Drogheda 32nd at 1.5157 (291 of 19,199), Castlebar 37th at 1.2962 (73 of 5,632), Arklow 38th at 1.2914 (71 of 5,498), Rush 39th at 1.2336 (61 of 4,945) and Kilcock 40th at 1.2237 (53 of 4,331). A 165th Ennis cyclist gives 1.3472 percent, above Kildare town. At other cuts Ennis is 49th of 102 towns with 2,000 or more working residents, 59th of 152 with 1,000 or more, and 83rd of 263 with 500 or more. On the share walking to work, 1,134 of 12,248, Ennis is 33rd of the same 59 towns. SAP2022T2T1TOWN22: usual residents 27,548, born in Ireland 21,231. SAP2022T15T2TOWN22: households 10,587, broadband 8,616, other 184, none 938, not stated 849. SAP2022T11T4TOWN22: 12,248 working persons, 3,279 work from home at least some of the time, 7,535 never, 1,434 not stated. SAP2022T11T5TOWN22: 1,832 children under 15 in childcare. SAP2022T8T1TOWN22: at work 12,404, students 2,281, retired 3,625, total aged 15 and over 22,301. Irish Rail, Ennis station: "Quinn Road Ennis Co. Clare", "Eircode V95 WY02", staffing "Monday to Saturday: 05:00 - 23:30", "This station does not have a booking office", "There is free wi-fi at the station", route "Dublin Heuston - Limerick and Ennis". Glor: "Causeway Link, Ennis, Co. Clare, V95 VHP0, Ireland", with a gallery, cafe and conference facilities listed on its own site.',
    localProject: 'A rank is not a fact. Ranking towns by the share of working residents whose main means of travel is a bicycle, on a list we built from the published table, Ennis is 36th of the 59 towns with at least 4,000 working residents, at 1.3390 percent from 164 cyclists among 12,248. Kildare town is 35th at 1.3394 percent, a gap of four ten-thousandths of a percentage point, and a 165th cyclist in Ennis would give 1.3472 percent and reverse the order; ten more would pass Celbridge at 1.4151, seventeen would pass Gorey at 1.4734, and five fewer would drop Ennis below Castlebar at 1.2962. Changing only the inclusion rule moves the same town on the same measure to 49th of 102 at a 2,000 cut, 59th of 152 at 1,000 and 83rd of 263 at 500, and switching to the walking share puts it 33rd of the original 59. The page therefore prints the measure, the cut and the gap beside every position, and states that the ranking is ours rather than the CSO\'s. The learner writes a ranking function that refuses to return a position without the gap to the entry above and the number of people that would close it. New family for the cluster, chosen to avoid a further denominator lesson: ranking stability.',
    requiredMentions: [
      '27,548',
      '10,587',
      '8,616',
      '12,248',
      '7,407',
      '7,073',
      '4,150',
      '3,279',
      '1,134',
      '1.3390',
      'V95 WY02',
      'V95 VHP0'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel: Ennis, Co Clare to work 12,248 with car driver 7,407, on foot 1,134, mainly at or from home 1,031, van 653, car passenger 637, bicycle 164, bus 158, train 51, not stated 957; to school, college or childcare 7,073 with car passenger 4,150, on foot 1,380, bus 343, car driver 263, bicycle 99. Comparison towns from the same table and block: Kildare 62 of 4,629, Celbridge 140 of 9,893, Gorey 70 of 4,751, Drogheda 291 of 19,199, Castlebar 73 of 5,632, Arklow 71 of 5,498, Rush 61 of 4,945, Kilcock 53 of 4,331.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Ennis: usual residents 27,548, born in Ireland 21,231; households 10,587, broadband 8,616, no internet 938, not stated 849; 3,279 work from home at least some of the time, 7,535 never, 1,434 not stated; 1,832 children under 15 in childcare; at work 12,404, students 2,281, retired 3,625.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Ennis station: "Quinn Road Ennis Co. Clare", "Eircode V95 WY02"; staffing "Monday to Saturday: 05:00 - 23:30"; "This station does not have a booking office"; "There is free wi-fi at the station"; route "Dublin Heuston - Limerick and Ennis".', url: 'https://www.irishrail.ie/en-ie/station/ennis' },
      { claim: 'Glor, Ennis: "Causeway Link, Ennis, Co. Clare, V95 VHP0, Ireland", with a gallery, cafe and conference facilities listed among its own pages.', url: 'https://glor.ie/' }
    ],
    rejectedClaims: [
      'Any verdict on Ennis or any other town implied by its position: the rankings are ours, built from one measure on one day.',
      'Quoting any position on this page without the measure, the inclusion cut and the gap beside it.',
      'Any reason for the cycling or walking shares in Ennis or in any comparison town.',
      'The census town-list population of Ennis and the Clare County Council eircode: the County Clare page owns both.',
      'Any glor ticket price, and any claim about either named institution beyond its own published page.',
      'Presenting the four different positions as a change over time: all four come from the same April 2022 table and differ only by inclusion rule.'
    ]
  }
};
