'use strict';
// County Wicklow (cg- county page, Ireland cluster, Phase 4). Spine: Bray, a
// town split between two local authorities, and a CSO release that prints the
// same share two different ways. Facts read at primary sources on 16 September
// 2026: CSO PxStat tables F1010, F1011, F1015 and F1016 and the Wicklow summary
// and Profile 5, 7 and 8 press statements; gov.ie's January 2018 LCCS list,
// where NO Wicklow school appears; nationalparks.ie; heritageireland.ie.
// GEOGRAPHY: Bray is published as "Bray, Counties Wicklow & Dublin" at 33,512
// and Blessington across Wicklow and Kildare at 5,611, so neither is used as a
// Wicklow figure. Dun Laoghaire-Rathdown census figures belong to that page and
// are not touched here. The clean Wicklow-side figure for the Bray area is the
// sum of the Bray West and Bray East electoral areas, 36,872, which is our own
// addition of two published rows and is labelled as such, and is an electoral
// area figure rather than a town boundary. The Profile 5 release states the
// non-Irish share as 10% while the summary release rounds differently; both are
// quoted rather than reconciled. The ED-sum shortfall is mentioned only in
// passing, because the Meath page owns that trap.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY WICKLOW', blurb: 'The Garden County, Bray to Arklow, with a project on a town that belongs to two councils.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-wicklow',
  code: 'wkw',
  accent: '#405A2B',
  accentRationale: 'County Wicklow: a deep moss green from the solver for the Garden County, distinct from the Irish flag greens and from every other Ireland page',
  pageType: 'governorate',
  place: {
    name: 'County Wicklow',
    eyebrow: 'County Wicklow, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'County Wicklow, Ireland',
  title: 'Coding Classes in County Wicklow | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Wicklow, from Bray and Greystones to Arklow and Baltinglass, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Wicklow, on a page about a town shared between two councils and a statistic published two ways.',
  twitterDescription: 'Coding classes across County Wicklow, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Wicklow Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Wicklow, taught live in English.'
  },

  h1: 'Coding classes in County Wicklow',
  capsuleQ: 'What are the best coding classes in County Wicklow?',
  capsule: 'Wicklow works from home more than almost anywhere: 25,839 people, 37% of the workforce, did at least one day a week at home in 2022, against 32% nationally. It is also well educated, with 48% of adults holding a third-level qualification against 45% across the country, and it is the one county in this part of Ireland where more commuters take a train than a bus. A household already used to working over video takes to a live online class easily. We teach ages 6 to 67 at a fixed weekly hour, in groups of five to ten matched by ability, or one to one. The opening lesson is free; continuing costs USD 100 a month in a group and USD 150 with a teacher to yourself.',
  lead: 'Ask how many people live in Bray and the honest answer begins with a question of your own: which Bray? The town\'s built-up area is published as "Bray, Counties Wicklow and Dublin", 33,512 people, because it spills north across the county line into Dún Laoghaire-Rathdown. So that figure belongs to neither council on its own. If you want a number that is properly Wicklow\'s, you have to change the unit entirely and add the two Bray electoral areas, West and East, which lie wholly inside the county: 36,872 people. Bigger than the town figure, and measuring something different. Both numbers are correct and they are not comparable, and knowing which one answers your question is the entire skill. This page teaches that on a county where it matters, and where even the statistics office prints one of its own percentages two different ways.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Wicklow.',

  picks: {
    eyebrow: 'Course picks for County Wicklow',
    h2: 'Four courses for the Garden County',
    intro: 'The age band is a hint, not a rule; pick the thing the learner actually wants to make. Each card opens with a lesson that costs nothing and asks for no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games and stories in Scratch, with a map where one town sits on a line and has to be drawn twice.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python across the school years, practised on tables where the unit of measurement is the first thing to check.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two correct figures for the same town, and a written answer about which question each one answers.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For the county\'s many home workers: comparing figures that were never meant to be compared, and knowing when to stop.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Home working, hills and a coastal railway',
      intro: 'Wicklow is the oldest of its neighbours by average age, the most likely to work from home, and the only one where the train beats the bus.',
      body: [
        { kind: 'table', caption: 'County Wicklow in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '155,851, up 9% or 13,426 since 2016'],
          ['Average age', '39.1 years, up from 37.2 in 2016'],
          ['Worked from home at least one day a week', '25,839 people, 37% of the workforce against 32% nationally'],
          ['Third-level qualifications', 'Just over 49,100 people, 48% against 45% nationally, with 1,261 PhD holders'],
          ['Travelling to work', '58,715 people, of whom 37,311 drove, 2,717 took a train and 2,568 a bus'],
          ['Average journey time', '33.9 minutes, slightly shorter than the 34.5 minutes recorded in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The largest settlement', p: 'Greystones and Delgany together hold 22,009 people, which makes them larger than Arklow at 13,399 and considerably larger than Wicklow town itself at 12,957.' },
          { h3: 'Six electoral areas', p: 'Wicklow at 32,593, Greystones at 30,479, Baltinglass at 28,041, Arklow at 27,866, Bray West at 19,144 and Bray East at 17,728, adding to exactly 155,851.' },
          { h3: 'Tight at the top', p: 'The densest of the county\'s 78 electoral divisions is Rathmichael, on the Bray side, with 7,441.1 people per square kilometre in an area of just 0.3 square kilometres.' }
        ] },
        { kind: 'p', text: 'One honest note about a figure on this page. The statistics office\'s diversity release states that non-Irish citizens accounted for 10% of the county\'s population, and names UK citizens as the largest group at 2,917, followed by Polish at 2,244, Romanian at 1,018 and Lithuanian at 680. Elsewhere in its own Wicklow material the share is rounded to 9%. We quote both rather than pick one, because a difference of a percentage point in a published source is exactly the sort of thing a careful reader should notice and report, not quietly resolve.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Wicklow schools',
      h2: 'No Wicklow school in the first phase',
      intro: 'We searched the full list published by the Department in January 2018. Not one address is in County Wicklow.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The result', p: 'When Leaving Certificate Computer Science began, no school in this county was among those named to teach it from September 2018. For a county with 48% third-level attainment, that is a striking absence.' },
          { h3: 'Its limits', p: 'The list describes 2018 and nothing else. No current official list of schools offering the subject exists, so nobody, including us, can tell you the position today from published sources.' },
          { h3: 'What a weekly class does', p: 'Builds the programming, data work and problem solving the subject assumes, live and outside school hours, without ever touching work that will be marked.' }
        ] },
        { kind: 'p', text: 'The county is not short of places to learn other things. Wicklow Mountains National Park stretches across almost 23,000 hectares south of Dublin and is the largest of Ireland\'s national parks, as well as the only one in the east of the country. Inside it, at Glendalough, A98 HC80, sits the monastery founded in the sixth century by St Kevin, which the Office of Public Works describes as having become one of the most famous religious centres in Europe. A child who can read a landscape that old can certainly learn to read a dataset.' },
        { kind: 'spec', title: 'A county that already works remotely', p: 'With 37% of its workforce doing at least one day a week at home, the highest share among its neighbours, Wicklow households are unusually comfortable with the format a live online class uses. The equipment is already on the kitchen table and the habit is already there.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Bray do you mean?',
      intro: 'Every learner in the north of this county knows Bray. Very few know that the official figures for it measure three different things, and that only one of them is a Wicklow number.',
      body: [
        { kind: 'table', caption: 'Three published figures, all correct, none interchangeable', head: ['Figure', 'What it counts', 'Whose number it is'], rows: [
          ['33,512', 'The built-up area of Bray, published as spanning Wicklow and Dublin', 'Neither council on its own'],
          ['19,144', 'The Bray West electoral area', 'County Wicklow'],
          ['17,728', 'The Bray East electoral area', 'County Wicklow'],
          ['36,872', 'Those two electoral areas added together, which is our own arithmetic', 'County Wicklow, but a wider area than the town'],
          ['5,611', 'Blessington, published as spanning Wicklow and Kildare', 'Neither county on its own']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the bigger number is not the town', p: 'Electoral areas are drawn for elections, not for towns, so they reach into countryside the built-up area never touches. Adding them gives a valid county figure and an invalid town one.' },
          { h3: 'Why the town figure is not the county\'s', p: 'The built-up area crosses into the neighbouring local authority, so quoting all 33,512 as Wicklow\'s would claim people who are counted elsewhere.' },
          { h3: 'The honest answer', p: 'Say which unit you used and why, every single time. A figure without its unit is a rumour with a decimal point.' }
        ] },
        { kind: 'callout', h3: 'What we did not do, and why', p: 'It would be easy to subtract one figure from another and publish a tidy "Bray, Wicklow side" population. We have not, because the two numbers measure different shapes, and subtracting across incompatible units produces something that looks authoritative and means nothing. Where the arithmetic is sound, as with adding the two electoral areas, we do it and label it as ours. Where it is not, we stop and say so. Learning where that line falls is worth more than any single statistic on this page.' },
        { kind: 'p', text: 'Students finish this project with a short table of their own, giving each figure, its unit, its source and the question it answers. It is the least exciting artefact imaginable and the one that stops a wrong number reaching a report.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Comparing like with like',
      h2: 'Five questions before you compare two numbers',
      intro: 'Useful on census tables, and just as useful on sales figures, exam results and anything else where two sources describe the same thing.',
      body: [
        { kind: 'table', caption: 'Before putting two figures side by side', head: ['Question', 'What you check', 'What it prevents'], rows: [
          ['Same unit?', 'That both count the same kind of area, group or period', 'Comparing a town with an electoral area'],
          ['Same boundary?', 'That neither figure spills across a line the other respects', 'Claiming people counted somewhere else'],
          ['Same date?', 'That both come from the same collection, not adjacent years', 'A change that is only a calendar'],
          ['Same definition?', 'That words like worker, resident or student mean the same in both', 'A difference in wording read as a difference in fact'],
          ['Same publisher\'s wording?', 'Whether the source itself states the figure more than one way', 'Repeating one rounding as though it were the only one']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A map game where a town sits on a border and the score depends on which side you decide to count it for.' },
          { h3: 'Teenagers', p: 'The real tables in Python: pull all three Bray figures, label each with its unit and write the sentence that explains which to use.' },
          { h3: 'Adults', p: 'The same discipline on work reporting, where most arguments about numbers turn out to be arguments about definitions.' }
        ] },
        { kind: 'p', text: 'We have no link to Wicklow County Council, the National Parks and Wildlife Service, the Office of Public Works or any school named here. Census figures are the Central Statistics Office\'s for 2022; the addition of the two Bray electoral areas is ours and is labelled that way throughout. Figures belonging to the neighbouring local authority north of Bray are deliberately left to the page that covers it.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'A coast railway, a mountain park and a long county',
      intro: 'Wicklow runs from the edge of Dublin to the Wexford border, which makes the practicalities of an evening class very different at its two ends.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The train counts here', p: 'It is the only county in this group where more people commute by train than by bus, 2,717 against 2,568, which is the coastal line doing its work.' },
          { h3: 'The park in the middle', p: 'Almost 23,000 hectares of national park sit between the county\'s two coasts of population, which is beautiful and does nothing for cross-county travel on a wet Tuesday.' },
          { h3: 'Three towns, no city', p: 'Greystones and Delgany at 22,009, Arklow at 13,399 and Wicklow town at 12,957, with Kilcoole, Newtownmountkennedy, Rathnew and Baltinglass beneath them.' }
        ] },
        { kind: 'spec', title: 'Why distance decides the format', p: 'A learner in Baltinglass is over an hour from Greystones by road. No evening class held in a room can serve both, which is precisely why a live online group, drawing learners from several countries, can put them in the same class at the same level.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing a border to defending a comparison',
    intro: 'Ages here are indicative. Where somebody starts is decided in the free lesson, by what they do rather than what year they are in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sides and sorting', p: 'Programs that decide which side of a line something belongs on, and say so clearly.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Units and labels', p: 'Reading tables where two columns count different things, and labelling each before using it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Comparisons that hold', p: 'Pulling several figures for one place, matching units and defending the comparison in writing.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Definitions at work', p: 'Reconciling reports whose figures disagree because their definitions do.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will answer "how big is Bray?" straight away. Why should a Greystones teenager push back?',
    intro: 'Because there are at least three correct answers and the tool will offer one of them without mentioning the others.',
    p1: 'Ask a language model for Bray\'s population and it will produce a number, probably the built-up area figure, presented as simple fact. It will not usually volunteer that the area crosses a local authority boundary, that a second and larger figure exists for the electoral areas inside Wicklow, or that the two measure different shapes. None of that is hidden; it is just not the shape of answer a confident summary tends to give.',
    p2: 'The habit that protects a learner is to ask what was counted before accepting how many. It costs one extra question and it is the difference between quoting a figure and understanding it, which is the difference a teacher can actually teach.',
    closer: 'So the reason for a Wicklow child to learn to code in 2026 has little to do with any employer. It is that they will spend their adult life being handed numbers, and somebody has to be the person in the room who asks which Bray we mean.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bray, Greystones, Arklow or over the mountains',
    intro: 'This county is long, hilly and split by a national park, so what suits it is a class that does not care where anybody lives.',
    cells: [
      { h3: 'Distance stops mattering', p: 'Baltinglass and Bray are more than an hour apart by road and nought seconds apart in a live online group.' },
      { h3: 'The school year, named locally', p: 'Junior Cycle, Transition Year, fifth and sixth year: our teachers use the words your school uses, which keeps everything simple.' },
      { h3: 'A real free lesson', p: 'Proper teaching on a proper task, closing with a level, a course and an hour, and no request for payment details.' },
      { h3: 'Grouped by what they can do', p: 'Five to ten learners at one level, gathered from Wicklow and several other countries, which is how the right class exists at a sensible hour.' },
      { h3: 'Weekly and steady', p: 'Two sessions in most weeks, about eight a month, at one fixed time, pausing for mid-terms, exams and holidays by agreement.' },
      { h3: 'How the clocks sit', p: 'Indian time never shifts while Irish time does, so our teachers run four and a half hours ahead in summer and five and a half in winter.' }
    ],
    spec: { title: 'The county that already logs in', p: 'With 25,839 people working from home at least weekly, video calls and shared screens are ordinary here. A live class is the same technology doing something more interesting, and it slots into a Wicklow week with almost no friction.' }
  },

  fees: {
    h2: 'What classes cost in County Wicklow',
    intro: 'The entire price list, in three lines.',
    first: 'A complete lesson at no cost, finishing with a level named and a course suggested.',
    group: 'A month of classes, normally eight, shared with five to ten learners working at one speed.',
    private: 'The same month, the same eight or so classes, with the teacher attending to one learner.',
    closer: 'Everything is charged monthly in US dollars on the one rate used outside India, which is why Arklow and Enniskerry pay the same and why there is no euro list. Nothing is billed until the free lesson has produced a course and a weekly hour, and the pricing page covers pauses, missed weeks and moving between group and private.'
  },

  reviewsH2: 'Six Google reviews, printed as our families left them',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The opening task is chosen to fit: a border-drawing game for a young child, a first table opened in code for the middle years, or the three Bray figures for a teenager.',
    success: 'Thank you. Expect a call about your County Wicklow class shortly.'
  },

  faq: {
    h2: 'County Wicklow coding class questions',
    intro: 'What families here ask before booking.',
    items: [
      { q: 'How many people live in County Wicklow?', a: 'Census 2022 counted 155,851, up 9% or 13,426 since 2016, with an average age of 39.1. Greystones and Delgany together form the largest settlement at 22,009.' },
      { q: 'How big is Bray?', a: 'It depends which Bray. The built-up area is 33,512 people across Wicklow and Dublin; the two Bray electoral areas inside County Wicklow hold 36,872 between them. They measure different shapes and are not comparable.' },
      { q: 'Did any Wicklow school offer Leaving Certificate Computer Science from the start?', a: 'No. No County Wicklow address appears on the January 2018 first-phase list. That describes 2018 only, since no current official list is published.' },
      { q: 'What is the Wicklow data project?', a: 'Students collect every published figure for one town, work out what each one counts, and write a short table giving the figure, the unit, the source and the question it answers.' },
      { q: 'Why do two official sources give different percentages?', a: 'The statistics office\'s own Wicklow material states the non-Irish share as 10% in one release and rounds to 9% elsewhere. We quote both, because noticing and reporting that is better practice than silently choosing one.' },
      { q: 'Is the county well set up for online classes?', a: 'Unusually so. 37% of the workforce works from home at least one day a week, the highest share among neighbouring counties, so most households already have the equipment and the habit.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Wicklow?', a: 'No, and we never imply one. Every class is live over video, with no premises anywhere in Ireland. A learner needs a laptop or desktop, sound that works and a steady connection, and the number printed here is an Indian one.', boiler: true },
      { q: 'What do County Wicklow coding classes cost?', a: 'The opening lesson is free. After it, sharing a class with five to ten others costs USD 100 a month and brings two live lessons a week, about eight monthly, while having the teacher to yourself on the same schedule costs USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five at the least and ten at the most, grouped on ability, pace and ambition rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'North to the city, south along the coast',
    html: 'North of Bray the coast continues into <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> and on to <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>; south lies <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a>. For choosing between online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a> holds everything together.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Wicklow and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-county-wexford', label: 'County Wexford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wkw .cg-hero-grid { align-items: start; gap: clamp(1.19rem, 3.28vw, 2.78rem); }
.cg-root.cg-wkw .cg-hero h1 { font-weight: 700; letter-spacing: -0.0185em; line-height: 1.065; }
.cg-root.cg-wkw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-wkw .cg-eyebrow { letter-spacing: 0.185em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wkw .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.0105em; }
.cg-root.cg-wkw .cg-grid-3 { gap: clamp(1.03rem, 2.58vw, 2.02rem); }
.cg-root.cg-wkw .cg-table caption { letter-spacing: 0.028em; font-weight: 700; }
.cg-root.cg-wkw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wkw .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-wkw .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.98rem; }
.cg-root.cg-wkw .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Wicklow, Census 2022 (CSO): population 155,851, up 9 percent or 13,426 since 2016; average age 39.1, up from 37.2; 25,839 people working from home at least one day a week, 37 percent of the workforce against 32 percent nationally; third-level qualifications just over 49,100, a rate of 48 percent against 45 percent nationally, with 1,261 PhD holders, 3.3 percent of the national total; 58,715 people travelling to work, 37,311 driving, 2,717 by train against 2,568 by bus, 4,269 walking and 665 cycling, with an average journey time of 33.9 minutes against 34.5 in 2016; almost 69,000 people at work, up 17 percent since 2016. The Profile 5 release states non-Irish citizens at 10 percent of the county, with UK citizens the largest group at 2,917, then Polish 2,244, Romanian 1,018 and Lithuanian 680, while the same office rounds the share to 9 percent elsewhere in its Wicklow material; both are quoted. Towns (F1015): Greystones-Delgany 22,009, Arklow 13,399, Wicklow 12,957, Kilcoole 4,569, Newtownmountkennedy 3,539, Rathnew 3,482, Baltinglass 2,611, Ashford 1,892; Bray published as "Bray, Counties Wicklow & Dublin" at 33,512 and Blessington across Wicklow and Kildare at 5,611, neither used as a Wicklow figure. Local electoral areas (F1016) sum exactly to the county total: Wicklow 32,593, Greystones 30,479, Baltinglass 28,041, Arklow 27,866, Bray West 19,144 and Bray East 17,728. DERIVED, and labelled as ours: Bray West plus Bray East gives 36,872 people wholly inside County Wicklow, an electoral area figure rather than a town boundary. Electoral divisions (F1011): the densest is Rathmichael on the Bray side at 7,441.1 persons per sq km across 0.3 sq km, with Bray No. 3 next at 4,656.7; the 78 divisions labelled Wicklow sum to 151,943 rather than 155,851, so no ED-based county figure is used. Gov.ie, 4 January 2018: no County Wicklow school appears on the first-phase Leaving Certificate Computer Science list. National Parks and Wildlife Service: Wicklow Mountains National Park "stretches across almost 23,000 hectares south of Dublin", is "the largest of Ireland\'s National Parks and the only one in the east". Office of Public Works: Glendalough, A98 HC80, where a sixth-century foundation by St Kevin "became one of the most famous religious centres in Europe".',
    localProject: 'Three published figures for one town, none of them interchangeable. Bray\'s built-up area is published as spanning Wicklow and Dublin at 33,512 people, so it belongs to neither local authority alone. The Bray West and Bray East electoral areas, both wholly inside County Wicklow, hold 19,144 and 17,728 people, and adding them gives 36,872, which is our own arithmetic on two published rows and is a wider area than the town. Blessington behaves the same way across Wicklow and Kildare at 5,611. The project asks learners to collect every published figure for the place they know best, identify the unit behind each, and produce a table of figure, unit, source and the question each answers. The page deliberately does NOT subtract one figure from another to manufacture a Bray Wicklow-side town population, because the units differ and the result would look authoritative while meaning nothing. Separately, the county\'s 71 datasets on the national portal are planning and zoning polygon layers, several with no licence specified, so no council dataset is used, and the CSO\'s own two roundings of the non-Irish share, 10 percent and 9 percent, are both quoted rather than reconciled.',
    requiredMentions: [
      '155,851',
      '22,009',
      '13,399',
      '12,957',
      '36,872',
      '25,839',
      '2,717',
      '1,261',
      '32,593',
      '7,441.1',
      '33,512',
      'A98 HC80',
      'Glendalough'
    ],
    sources: [
      { claim: 'CSO summary results, Wicklow: "the population of Wicklow grew by 9% to 155,851, which means the number of people in the county rose by 13,426"; average age 39.1 against 37.2; "In Wicklow, 25,839 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 37% of the workforce. The national figure was 32%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultswicklow/' },
      { claim: 'CSO Profile 7, Wicklow: 58,715 travelling to work, 37,311 driving, "2,568 people travelling by bus, which was slightly less than those by train (2,717)"; average journey time 33.9 minutes against 34.5 in 2016; almost 69,000 at work, up 17%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingwicklow' },
      { claim: 'CSO Profile 5, Wicklow: "In Wicklow non-Irish citizens accounted for 10% of the county\'s population. Among the non-Irish residents, the largest group were UK citizens (2,917 people) followed by Polish citizens (2,244), Romanian (1,018) and Lithuanian (680)"; the office rounds the same share to 9% elsewhere in its Wicklow material.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionwicklow' },
      { claim: 'CSO Profile 8, Wicklow: third-level qualifications just over 49,100, "a rate of 48% compared with 45% nationally"; 1,261 PhD holders, 3.3% of the national total.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationwicklow' },
      { claim: 'CSO table F1015: Greystones-Delgany 22,009, Arklow 13,399, Wicklow 12,957, Kilcoole 4,569, Newtownmountkennedy 3,539, Rathnew 3,482; Bray published as "Bray, Counties Wicklow & Dublin" at 33,512 and Blessington across Wicklow and Kildare at 5,611.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO table F1016: Wicklow 32,593, Greystones 30,479, Baltinglass 28,041, Arklow 27,866, Bray West 19,144 and Bray East 17,728, summing exactly to 155,851.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO table F1011: Rathmichael on the Bray side is the densest Wicklow electoral division at 7,441.1 persons per sq km across 0.3 sq km, with Bray No. 3 next at 4,656.7.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list contains no County Wicklow address.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'National Parks and Wildlife Service: "Wicklow Mountains National Park stretches across almost 23,000 hectares south of Dublin. The largest of Ireland\'s National Parks and the only one in the east".', url: 'https://www.nationalparks.ie/wicklow/' },
      { claim: 'Office of Public Works, Glendalough: "The foundation of St Kevin at Glendalough became one of the most famous religious centres in Europe"; address Glendalough, Bray, Co. Wicklow, A98 HC80.', url: 'https://heritageireland.ie/places-to-visit/glendalough-monastic-site-and-visitor-centre/' }
    ],
    rejectedClaims: [
      'Using Bray\'s 33,512 or Blessington\'s 5,611 as County Wicklow figures: both are published across two local authorities.',
      'Manufacturing a Bray Wicklow-side town population by subtracting one published figure from another: the units differ, so the result would be meaningless.',
      'Any Dun Laoghaire-Rathdown census figure: those belong to the page covering that local authority.',
      'A county-level density from summing electoral divisions: the 78 Wicklow-labelled divisions sum to 151,943 against an official 155,851.',
      'Any Eircode routing key for Wicklow town, Arklow or Greystones: none was confirmed at a primary source, so only the Glendalough address is printed.',
      'Any claim about which Wicklow schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'Silently reconciling the CSO\'s two roundings of the non-Irish share: both are quoted instead.'
    ]
  }
};
