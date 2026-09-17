'use strict';
// Kilkenny (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Kilkenny, Co Kilkenny", read 18 September 2026, the Irish
// Rail station page for Kilkenny MacDonagh and Butler Gallery's own site. Spine:
// a complete count has no margin of error and still has a range. 2,003 of the
// town's 11,832 working residents walk to work, 16.93%, and 738 did not state a
// mode, so the recorded share lies between 16.93% and 23.17% depending on those
// 738, which is a bound rather than a confidence interval. New family for the
// cluster: kinds of uncertainty, sampling error against everything else. County
// Kilkenny owns the castle eircode R95 YRK1 and the county figures, so the castle
// is left alone and Butler Gallery is used instead.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'KILKENNY', blurb: 'Counted completely, and still not known exactly: what 738 unanswered questions do to a Kilkenny percentage.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-kilkenny',
  code: 'kil',
  accent: '#8A4A6B',
  accentRationale: 'Kilkenny: a damson from the solver, unlike the County Kilkenny ochre and the Carlow and Waterford accents nearby',
  pageType: 'city',
  place: {
    name: 'Kilkenny',
    eyebrow: 'Kilkenny, County Kilkenny',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kilkenny' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kilkenny', name: 'County Kilkenny' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kilkenny', href: '/coding-classes-in-county-kilkenny' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kilkenny, County Kilkenny, Ireland',
  title: 'Best Coding Class in Kilkenny | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Kilkenny learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Kilkenny, with a project on why a complete count still leaves a percentage inside a range.',
  twitterDescription: 'Coding and AI classes for Kilkenny, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Kilkenny',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Kilkenny, taught live in English.'
  },

  h1: 'Coding classes in Kilkenny',
  capsuleQ: 'What is the best coding class in Kilkenny?',
  capsule: 'Kilkenny counts 26,697 usual residents in the census town tables and 10,050 households, 8,212 of them reporting broadband. Learning happens where the learner lives: a teacher live on video, twice in most weeks, with five to ten others at the same stage or with nobody else at all, from age six to sixty-seven. The opening lesson is free, and a shared place afterwards is USD 100 a month against USD 150 for private teaching.',
  lead: 'A census is not a survey. Nobody was sampled, so no margin of error applies and a confidence interval would be meaningless: 2,003 of Kilkenny\'s 11,832 working residents gave walking as their main means of travel, and that is the count, full stop. The share, though, is still not a single number. 738 residents did not state a mode at all. If none of them walks, walking is 16.93% of the town\'s working residents. If all of them do, it is 23.17%. Everything between is consistent with what was collected. That range is a bound, not an error bar, and knowing the difference is a genuinely useful thing to carry out of a data lesson.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Kilkenny.',

  picks: {
    eyebrow: 'Course picks for Kilkenny',
    h2: 'Where Kilkenny learners start',
    intro: 'Age and interest narrow it down, and then the free hour with the teacher who runs that course decides the rest.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding where a program has to cope with answers it did not expect.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from scratch, including what a program should do with a blank answer.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real data with gaps in it, and how to report a figure honestly when some answers are missing.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults presenting figures from datasets that are complete in theory and patchy in practice.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'No margin of error, and still a range',
      intro: 'Four Kilkenny figures, each shown as the lowest and highest value consistent with the published counts once the unanswered rows are taken into account. Counts are published; both bounds are our arithmetic.',
      body: [
        { kind: 'table', caption: 'What the not-stated rows do to four figures', head: ['Figure', 'Counted', 'Not stated', 'Lowest', 'Highest'], rows: [
          ['Working residents walking to work', '2,003 of 11,832', '738', '16.93%', '23.17%'],
          ['Working residents cycling to work', '380 of 11,832', '738', '3.21%', '9.45%'],
          ['Households reporting broadband', '8,212 of 10,050', '746', '81.71%', '89.13%'],
          ['Education journeys made on foot', '1,896 of 6,547', '569', '28.96%', '37.65%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why there is no margin of error', p: 'Sampling error measures how much a result might move if a different sample had been drawn. The census draws no sample: it attempts to count everybody. There is therefore no interval of that kind to report, and quoting one would be inventing a quantity.' },
          { h3: 'What is uncertain instead', p: 'Answers that were never given, which the bounds above cover. Self-reported main mode, which compresses mixed journeys into one word. One day in April, which may not be a typical day. And definitions set by the form rather than by the reader.' },
          { h3: 'How to report it', p: 'Give the counted share, name the unanswered count, and state the bound. The sentence that survives scrutiny is that between 16.93% and 23.17% of Kilkenny working residents walk to work, and the width of that gap is exactly the price of 738 unanswered questions.' }
        ] },
        { kind: 'callout', h3: 'No error bar is not the same as no doubt', p: 'The same trap waits inside every complete dataset an organisation owns. All your customers, not a sample of them, so no margin of error: and then a tenth of the records have no region set, some accounts are duplicated, and the export ran at a different hour than last month. None of that produces a confidence interval, and all of it moves the answer. Bounds are the honest tool: compute the figure with the unknowns counted every way they could go, publish the range, and let the width of it argue for fixing the collection.',
        },
        { kind: 'p', text: 'The project is a small function with three inputs, the counted value, the not-stated value and the total, returning both bounds and the width between them. The learner runs it on the four Kilkenny figures above, then on a column with almost no missing answers, and sees the range collapse. The point lands without a lecture: the tighter the collection, the narrower the honest claim, and a figure quoted without its unanswered rows is a claim somebody else cannot check.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Kilkenny in the town tables',
      h2: 'The counted town',
      intro: 'Published for the built-up area Kilkenny, Co Kilkenny, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Kilkenny, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '26,697'],
          ['Households', '10,050'],
          ['Households reporting broadband', '8,212'],
          ['Working residents in the travel table', '11,832'],
          ['Working residents walking to work', '2,003'],
          ['Children under fifteen in childcare', '1,722']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 11,832 working residents, 6,150 drive, 2,003 walk, 1,132 give home as their main answer, 738 did not state, 559 travel by van, 543 go as a car passenger, 380 cycle, 188 take a bus and 75 a train.' },
          { h3: 'The education journey', p: 'Of 6,547 journeys to school, college or childcare, 3,033 are as a car passenger, 1,896 on foot, 594 by bus, 225 driving, 123 by bicycle and 51 by train, with 569 not stated.' },
          { h3: 'Home working', p: 'A separate table records 3,084 working residents doing at least some work at home, 7,532 who never do and 1,216 who did not state.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Kilkenny MacDonagh as Carlow Road, Kilkenny, Co. Kilkenny, open from 06:00 to 23:00, staffed to the same hours Monday to Saturday, with a booking office on weekday mornings and early afternoons, toilets, an enclosed waiting room and free Wi-Fi. The eircode is printed on that page with three characters after the routing key where an eircode carries four, and we quote pages as they stand rather than correcting them.' }
      ]
    },
    {
      id: 'kinds', tint: 'tint', eyebrow: 'Four kinds of doubt',
      h2: 'What could still be wrong, and what could not',
      intro: 'Applied to the Kilkenny walking figure, one line each.',
      body: [
        { kind: 'table', caption: 'Sources of uncertainty in a complete count', head: ['Kind', 'Present here', 'What it does to the figure'], rows: [
          ['Sampling error', 'No', 'Nothing. Nobody was sampled, so no interval of that kind exists'],
          ['Unanswered questions', 'Yes, 738', 'Widens the share to a range from 16.93% to 23.17%'],
          ['Self-reported main mode', 'Yes', 'Compresses mixed journeys into one answer each, so no row counts all users of a mode'],
          ['One day in April 2022', 'Yes', 'Says nothing about other days, weeks or seasons'],
          ['Definitions set by the form', 'Yes', 'Bus, minibus and coach are one row; the reader cannot separate them']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Only one of these is arithmetic', p: 'The bound can be computed exactly. The other three are limits on what the question can answer, and no amount of calculation improves them. Saying which kind you are dealing with is half of handling it.' },
          { h3: 'Why the walking figure was chosen', p: 'It is the town\'s most distinctive travel number, 2,003 of 11,832 against a much lower share across all towns combined, and it is the one a reader would be most tempted to quote as a single tidy percentage.' },
          { h3: 'No explanation offered', p: 'Why walking is high here is not in these tables. Compactness, distances and habits are all candidates, none is measured, and the page does not choose between them.' }
        ] },
        { kind: 'spec', title: 'The gallery', p: 'Butler Gallery gives its address as Evans\' Home, John\'s Quay, Kilkenny, R95 YX3F, publishes registered charity numbers 20038977 and CHY12922, opens daily with a late evening on Thursdays and shorter Sunday hours, and states free entry. We have no connection with it.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Kilkenny',
      h2: 'How the lessons run',
      intro: 'A fixed hour each week, a teacher present throughout, and work at the learner\'s level.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary years', p: 'Block coding and small games, taught early enough in the evening for younger learners.' },
          { h3: 'Secondary years', p: 'Python, working websites and AI projects from the junior cycle into the exam years.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults at any level, including the 3,084 residents already doing some work at home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and Butler Gallery are named from their own published pages and neither has a connection with us, nor does Kilkenny County Council. Census counts appear exactly as the Central Statistics Office published them for this built-up area. The bounds and shares are ours, computed by dividing published counts, and each is printed with the unanswered count it depends on, because on this page a percentage without that number is only part of a figure.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a missing answer to an honest range',
    intro: 'Ages guide the choice; the opening lesson sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'When something is missing', p: 'Programs that handle a blank answer instead of crashing or pretending it was a zero.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Highest and lowest', p: 'Working out the best and worst case in Python, and checking the real answer sits between.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Reporting with gaps', p: 'Handling missing data in real datasets and publishing a range rather than a guess.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Confidence and its absence', p: 'Knowing when an interval belongs on a figure at work and when a bound is the honest tool.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for a margin of error on a census figure',
    intro: 'One will often be supplied.',
    p1: 'Models are fluent in the vocabulary of statistics, and a request for a confidence interval on a complete count usually produces something that looks like one. There is nothing to be confident about in that sense, because nobody sampled anything, and the figure that actually needs qualifying, the 738 people who did not answer, is rarely mentioned.',
    p2: 'A learner who has done this project asks a sharper question: what is missing, how much of it is there, and what would the answer be at both extremes. That reply has no jargon in it and cannot be quietly wrong.',
    closer: 'Borrowing statistical language is easy. Knowing which uncertainty you actually face is the part worth teaching, and it starts with one column of unanswered questions in one town.',
    blogAnchor: 'why coding earns its place in a week'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical points for Kilkenny families',
    intro: 'Six lines.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher present for the whole hour, working from the learner\'s own screen.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one stage, from Kilkenny, the rest of Ireland and abroad.' },
      { h3: 'Two lessons a week', p: 'Roughly eight a month, in an hour agreed at the start and then kept.' },
      { h3: 'Around the term', p: 'Mid-terms, holidays and exam weeks are built into the plan in advance.' },
      { h3: 'What is needed', p: 'Something with a proper keyboard, a microphone the teacher can hear, and enough bandwidth to hold a video call.' },
      { h3: 'One to one', p: 'When the timetable and the level cannot be reconciled in a group, the same course is taught privately.' }
    ],
    spec: { title: 'Nothing assumed about a learner', p: 'The opening lesson exists because a form cannot tell us what somebody can already do. We would rather find out than infer it, which is the same instinct the project above teaches.' }
  },

  fees: {
    h2: 'Kilkenny class fees',
    intro: 'Three lines and no extras.',
    first: 'A complete opening lesson, taught and assessed, at no charge.',
    group: 'A month in an ability group of five to ten, about eight live lessons.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Fees are monthly, in US dollars, at the one rate for families outside India, so Kilkenny sees the same figure as Carlow or Waterford and there is no euro column anywhere on the page. No money changes hands until a level, a course and a time are settled, which is what the free hour is for, and the pricing page carries the rules on holidays, a lesson missed and a change of format.'
  },

  reviewsH2: 'Six of our families, quoted from Google without changes',

  book: {
    h2: 'Book a free Kilkenny lesson',
    intro: 'Send an age and an interest and the first hour is planned around it, whether that becomes a game, a first program, or a percentage that turns out to be a range.',
    success: 'Thank you. We will be in touch about the Kilkenny lesson shortly.'
  },

  faq: {
    h2: 'Kilkenny coding class questions',
    intro: 'The questions Kilkenny families ask first.',
    items: [
      { q: 'How many people live in Kilkenny?', a: 'The Census 2022 small area tables count 26,697 usual residents in the built-up area of Kilkenny, in 10,050 households. County figures belong to our County Kilkenny page, which uses its own sources.' },
      { q: 'What is the Kilkenny data project?', a: 'Learners take four town figures and compute the lowest and highest value each could take once the unanswered rows are counted both ways, so the walking share becomes a range from 16.93% to 23.17% rather than a single tidy percentage.' },
      { q: 'Does a census have a margin of error?', a: 'Not of the sampling kind, because nobody was sampled. What it has is unanswered questions, self-reported answers, a single reference day and definitions set by the form, and only the first of those can be handled with arithmetic.' },
      { q: 'How do Kilkenny residents travel to work?', a: 'Of 11,832 working residents, 6,150 drive, 2,003 walk, 1,132 give working mainly at or from home, 559 use a van, 543 travel as a car passenger, 380 cycle, 188 take a bus and 75 a train, with 738 not stating a mode.' },
      { q: 'What hours do lessons run?', a: 'Late afternoons, evenings and weekend mornings. The teaching team is in India, which sits four and a half hours ahead of Irish clocks in summer and five and a half in winter, and a workable weekly hour is agreed in the opening lesson.' },
      { q: 'Can an adult in Kilkenny learn from scratch?', a: 'Yes, up to the age of sixty-seven. The opening lesson decides whether an adult joins a group at the same stage or works one to one with a teacher.' },
      { q: 'What happens if a learner falls behind?', a: 'The group is chosen to fit, and if it stops fitting we move the learner rather than letting them struggle through a course pitched at somebody else.' },
      { q: 'Is there a Modern Age Coders classroom in Kilkenny?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Kilkenny cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Kilkenny',
    html: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-county-kilkenny">County Kilkenny</a>, with <a class="cg-inline-link" href="/best-coding-class-in-carlow">Carlow</a> upriver and <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a> to the south, all inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> and its neighbouring province. Online schools sit side by side on our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> indexes every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kilkenny, Leinster and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kilkenny', label: 'County Kilkenny' },
    { href: '/best-coding-class-in-carlow', label: 'Carlow' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kil .cg-hero-grid { align-items: start; gap: clamp(1.11rem, 3.27vw, 2.61rem); }
.cg-root.cg-kil .cg-hero h1 { font-weight: 700; letter-spacing: -0.0191em; line-height: 1.054; }
.cg-root.cg-kil .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.24rem; }
.cg-root.cg-kil .cg-eyebrow { letter-spacing: 0.181em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kil .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0138em; }
.cg-root.cg-kil .cg-grid-3 { gap: clamp(1.13rem, 2.69vw, 2.12rem); }
.cg-root.cg-kil .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-kil .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kil .cg-table td:nth-child(4), .cg-root.cg-kil .cg-table td:nth-child(5) { font-weight: 600; }
.cg-root.cg-kil .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-kil .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Kilkenny, the built-up area "Kilkenny, Co Kilkenny", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22 to work total 11,832: car driver 6,150, on foot 2,003, work mainly at or from home 1,132, not stated 738, van 559, car passenger 543, bicycle 380, bus minibus or coach 188, train DART or Luas 75, motorcycle 38, other including lorry 26; to school, college or childcare total 6,547: car passenger 3,033, on foot 1,896, bus 594, not stated 569, car driver 225, bicycle 123, train 51, work mainly at or from home 34, van 12, other 7, motorcycle 3. SAP2022T15T2TOWN22: households 10,050, broadband 8,212, other 189, none 903, not stated 746. SAP2022T11T4TOWN22: 11,832 working persons, 3,084 work from home at least some of the time, 7,532 never, 1,216 not stated. SAP2022T2T1TOWN22: usual residents 26,697, born in Ireland 20,938. SAP2022T11T5TOWN22: 1,722 children under 15 in childcare, 788 aged 0 to 4 and 934 aged 5 to 14. SAP2022T8T1TOWN22: at work 12,058, students 2,065, retired 3,672, total aged 15 and over 21,887. Our bounds arithmetic, taking each not-stated row every way it could go: walking to work 2,003 of 11,832 is 16.93 percent at the low end and 23.17 percent if all 738 not-stated walked; cycling 380 gives 3.21 and 9.45 percent; broadband 8,212 of 10,050 households gives 81.71 and 89.13 percent on 746 not stated; education journeys on foot 1,896 of 6,547 gives 28.96 and 37.65 percent on 569 not stated. All-towns comparison for walking to work: 159,162 of 1,625,104, 9.79 percent, rising to 17.88 percent if all 131,336 not-stated walked. Irish Rail, Kilkenny MacDonagh: "Carlow Road, Kilkenny, Co. Kilkenny", station open "06:00 - 23:00", staffing "Monday to Saturday: 06:00-23:00", booking office "Monday to Friday: 08:00-14:30", "There is free wi-fi at the station"; the eircode is printed there with three characters after the routing key and is quoted as printed rather than corrected. Butler Gallery: "Butler Gallery, Evans\' Home, John\'s Quay, Kilkenny, Ireland, R95 YX3F", "Registered Charity No 20038977. CHY12922", "FREE Entry", "Thursdays: Late Night 10.00-20.00 Sunday: 11.00-17.00".',
    localProject: 'No margin of error, and still a range. The census is a complete count rather than a sample, so no sampling error exists and a confidence interval would be an invented quantity. What does exist is 738 working residents who did not state a means of travel. Taking them every way they could go, the share of Kilkenny working residents walking to work lies between 16.93 and 23.17 percent, cycling between 3.21 and 9.45, broadband households between 81.71 and 89.13 on 746 not stated, and education journeys on foot between 28.96 and 37.65 on 569 not stated. A bound is not an error bar, and the page separates four kinds of doubt: sampling error, absent here; unanswered questions, which arithmetic can bound exactly; self-reported main mode, which compresses mixed journeys; and a single reference day with definitions set by the form, neither of which any calculation improves. The learner writes a function taking counted, not stated and total, returning both bounds and the width, runs it on the four figures and then on a column with almost no missing answers to watch the range collapse. New family for the cluster: kinds of uncertainty.',
    requiredMentions: [
      '26,697',
      '10,050',
      '8,212',
      '11,832',
      '2,003',
      '6,547',
      '3,033',
      '1,896',
      '3,084',
      '1,722',
      '738',
      'R95 YX3F'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Kilkenny, Co Kilkenny: to work 11,832 with car driver 6,150, on foot 2,003, mainly at or from home 1,132, van 559, car passenger 543, bicycle 380, bus 188, train 75, not stated 738; to school, college or childcare 6,547 with car passenger 3,033, on foot 1,896, bus 594, car driver 225, bicycle 123, train 51, not stated 569. All-towns row: on foot 159,162 of 1,625,104 with 131,336 not stated.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T2T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Kilkenny: households 10,050, broadband 8,212, other 189, none 903, not stated 746; usual residents 26,697, born in Ireland 20,938; 3,084 work from home at least some of the time, 7,532 never, 1,216 not stated; 1,722 children under 15 in childcare; at work 12,058, students 2,065, retired 3,672.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Kilkenny MacDonagh station: "Carlow Road, Kilkenny, Co. Kilkenny"; station open "06:00 - 23:00"; staffing "Monday to Saturday: 06:00-23:00"; booking office "Monday to Friday: 08:00-14:30"; "There is free wi-fi at the station".', url: 'https://www.irishrail.ie/en-ie/station/kilkenny-macdonagh' },
      { claim: 'Butler Gallery: "Butler Gallery, Evans\' Home, John\'s Quay, Kilkenny, Ireland, R95 YX3F"; "Registered Charity No 20038977. CHY12922"; "FREE Entry"; "Thursdays: Late Night 10.00-20.00 Sunday: 11.00-17.00".', url: 'https://www.butlergallery.ie/' }
    ],
    rejectedClaims: [
      'Any confidence interval or margin of error on a census figure: nobody was sampled, so no such quantity exists.',
      'Quoting any of the four figures as a single percentage without the not-stated count it depends on.',
      'Any explanation for the town\'s walking share: nothing on the page measures distance, compactness or habit.',
      'Kilkenny Castle and its eircode R95 YRK1: the County Kilkenny page owns them, and the castle page carries euro admission prices we do not reproduce.',
      'Correcting the eircode printed on the station page: sources are quoted as they stand and the discrepancy is stated instead.',
      'Treating the bounds as a forecast or as evidence about any other day: the census records one day in April 2022.'
    ]
  }
};
