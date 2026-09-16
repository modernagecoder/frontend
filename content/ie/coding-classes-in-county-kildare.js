'use strict';
// County Kildare (cg- county page, Ireland cluster, Phase 4). Spine: the
// council publishes 80 datasets, and the small one we opened has four separate
// faults in sixteen rows. Facts read at primary sources on 16 September 2026:
// CSO PxStat tables F1010, F1011, F1015 and F1016 and the Kildare summary and
// Profile 5, 7 and 8 press statements; gov.ie's January 2018 LCCS list, where
// Clongowes Wood College in Clane is the county's only school;
// maynoothuniversity.ie; kildarecoco.ie. GEOGRAPHY: Kilcock is published as
// "Kilcock, Counties Kildare & Meath" at 8,674, so it is never written as a
// Kildare figure, and no Kildare-only split exists in the tables. No county
// density is claimed: the electoral divisions labelled Kildare sum to 245,636
// against an official 247,774, so that sum is not used. Dataset measured by us:
// Kildare County Council's Library Locations, CC BY 4.0, 16 records with one
// truncated Eircode, four phone numbers carrying replacement characters, one
// town spelled Rathanagan where the CSO spells it Rathangan, and three entirely
// blank rows. No Intel Leixlip employment figure is claimed, because none could
// be read at a primary source.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY KILDARE', blurb: 'Commuter country and a university town, with a project on the council\'s own library dataset.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-kildare',
  code: 'kld',
  accent: '#14614A',
  accentRationale: 'County Kildare: a deep jade from the solver, unused elsewhere in the Ireland cluster and distinct from the Irish flag greens',
  pageType: 'governorate',
  place: {
    name: 'County Kildare',
    eyebrow: 'County Kildare, Leinster',
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
  routeLabel: 'County Kildare, Ireland',
  title: 'Coding Classes in County Kildare | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Kildare, from Naas and Newbridge to Maynooth and Celbridge, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Kildare, built on the council\'s own library dataset and the four faults hiding in its sixteen rows.',
  twitterDescription: 'Coding classes across County Kildare, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Kildare Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Kildare, taught live in English.'
  },

  h1: 'Coding classes in County Kildare',
  capsuleQ: 'What are the best coding classes in County Kildare?',
  capsule: 'Kildare is young, educated and on the move: 247,774 people, up 11% in six years, an average age of 36.9 against 38.8 nationally, and 49% of adults holding a third-level qualification against 45% across the country. It is also the county that works from home most readily among its neighbours, at 35% against a national 32%, while more than four in ten workers in Celbridge and in Leixlip commute into Dublin. That combination, technical households and long journeys, is exactly where a live online class fits. We teach ages 6 to 67 at a fixed weekly hour, in ability groups of five to ten or one to one. The first lesson is free, and after it a group place is USD 100 a month or private tuition USD 150.',
  lead: 'Kildare County Council publishes eighty datasets, which puts it among the more generous councils in the country. So we picked the smallest one we could find, a list of the county\'s libraries, and opened it properly. Sixteen records. In those sixteen rows there is one Eircode missing its final character, four phone numbers carrying a stray replacement character where a space or a leading zero should be, and one town whose name is spelled Rathanagan here and Rathangan by the Central Statistics Office. Underneath the last real record sit three completely blank rows, which most tools will happily read as data. None of this makes the dataset bad; it makes it normal, and it is the best possible first encounter with real data for a learner in this county, because every one of those four faults is the kind that survives into a report and quietly breaks something later.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Kildare.',

  picks: {
    eyebrow: 'Course picks for County Kildare',
    h2: 'Four courses for a commuting county',
    intro: 'Start from the thing the learner actually wants to make. Whichever card you open, the first lesson costs nothing and is taught by the person who would go on to teach the course.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games and stories in Scratch, including a library map where one place has been spelled two different ways.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python across the Junior Cycle years, using the county\'s own published files as practice rather than invented examples.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Sixteen rows, four separate faults, and a cleaned version the learner can defend line by line.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For commuters and home workers: validation code that checks a file for these faults before anyone uses it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Young, educated and heavily commuted',
      intro: 'Kildare has no city, and it has eight towns of real size. Its people are younger than the national average and more likely to hold a degree.',
      body: [
        { kind: 'table', caption: 'County Kildare in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '247,774, up 11% or 25,270 since 2016'],
          ['Average age', '36.9 years, against 38.8 nationally'],
          ['Worked from home at least one day a week', '40,761 people, 35% of the workforce against 32% nationally'],
          ['Third-level qualifications', 'Almost 76,400 people, a rate of 49% against 45% nationally'],
          ['PhD holders', '1,787, which is 4.7% of all PhD holders in the country'],
          ['Travelling to work', '100,856 people, of whom 65,587 drove, 5,011 took a train and 4,656 a bus']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Towns, not a city', p: 'Naas is the largest at 26,180, then Newbridge at 24,366, Celbridge at 20,601, Maynooth at 17,259, Leixlip at 16,733, Athy at 11,035 and Kildare town at 10,302.' },
          { h3: 'Commuting into Dublin', p: 'More than 40% of workers in both Celbridge and Leixlip travel into Dublin city and suburbs for work, which puts both towns among the ten biggest sources of Dublin commuters in the country.' },
          { h3: 'A town split with Meath', p: 'Kilcock is published as "Kilcock, Counties Kildare and Meath" with 8,674 people. No Kildare-only figure for it exists in these tables, so we do not invent one.' }
        ] },
        { kind: 'p', text: 'Two smaller facts say a lot about daily life here. The average journey to work takes 34 minutes, among the longest in the country, and in the village of Kill, 82% of secondary students travel by public transport, the highest rate nationally among towns of at least 1,500 people. Kildare families already organise their week around timetables. A weekly class that arrives at the house, at the same hour, is one less timetable to manage.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Kildare schools',
      h2: 'One school in the first phase, in a county of 247,774',
      intro: 'When Leaving Certificate Computer Science began in September 2018, County Kildare had a single school on the list.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The one', p: 'Clongowes Wood College in Clane was the county\'s only first-phase school. For a county this size, and this well educated, that is a striking number.' },
          { h3: 'What it does not tell you', p: 'Where the subject is taught today. No current official list exists, so the 2018 list is all we cite, and we cite it as history rather than as a guide for choosing a school.' },
          { h3: 'Our role', p: 'Programming, data and problem solving, taught weekly and live. Not the examination subject, and never work that will be submitted for marks.' }
        ] },
        { kind: 'p', text: 'The county also holds one of Ireland\'s universities. Maynooth University describes itself as being "in the heart of Ireland\'s only university town", 25 kilometres from the centre of Dublin, with a campus divided north and south by the Kilcock Road and closely woven into the town itself. For a Kildare teenager, that is a computing degree within cycling distance of a great many homes, and the years before it are exactly when a weekly class builds the fluency such a course assumes.' },
        { kind: 'spec', title: 'Who lives in Kildare', p: 'Non-Irish citizens are 11% of the county. The largest groups are Polish at 5,586, UK at 3,177 and Indian at 1,824, and the number of people holding dual Irish citizenship rose from 5,239 in 2016 to 8,685 in 2022. It is a county that has grown by arrival as much as by birth.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Sixteen rows, four faults',
      intro: 'The dataset is the county\'s own list of libraries, published openly under a Creative Commons Attribution licence. It is short enough to read in full, which is exactly why it teaches so well.',
      body: [
        { kind: 'table', caption: 'What we measured in the published file, read 16 September 2026', head: ['Fault', 'Count', 'Why it matters'], rows: [
          ['Records in the file', '16', 'Small enough to check every row by eye'],
          ['Eircodes missing a character', '1', 'One archive record reads W12 W86 where the same building appears elsewhere as W12 W861'],
          ['Phone numbers with a stray replacement character', '4', 'A character encoding fault somewhere in the export, in four of sixteen rows'],
          ['Town names spelled differently from the CSO', '1', 'The file says Rathanagan; the census says Rathangan'],
          ['Entirely blank rows', '3', 'Rows of nothing but commas, which many tools will read as records']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The truncated Eircode', p: 'An Eircode is seven characters. One record carries six. A validation rule catches it instantly; a human eye skims straight past it; and any system that looks up that address will fail without explaining why.' },
          { h3: 'The corrupted phone numbers', p: 'Four numbers contain a character that should be a space or a leading zero. This is what a character encoding mismatch looks like in the wild, and it is the single most common way Irish and European text gets mangled.' },
          { h3: 'The town with two spellings', p: 'One official source spells it Rathanagan, another Rathangan. Join those two sources on the town name and the row silently disappears from the result. This is why matching on names, rather than codes, is dangerous.' }
        ] },
        { kind: 'callout', h3: 'And a typo on the council\'s own contact page', p: 'While reading the council\'s own address, we found its page rendering the county as Kidare, with a missing letter, and printing an Eircode one character short of the clean version given elsewhere on the same site. The correct form, used here, is Áras Chill Dara, Devoy Park, Naas, W91 X77F. We point this out not to score a point, but because it is the perfect illustration of the lesson: text typed by people contains mistakes, official sources are no exception, and a program that assumes otherwise will be wrong in ways nobody notices for months.' },
        { kind: 'p', text: 'The project ends with a cleaned file and a short log of every change: the Eircode fixed and flagged as uncertain, the four phone numbers repaired, the town name standardised to the census spelling, and the blank rows dropped with a note of how many there were. That log is the deliverable that matters.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Validating a small file',
      h2: 'Five rules that would have caught all four faults',
      intro: 'Each of these is a few lines of code, and together they are the difference between trusting a file and knowing it.',
      body: [
        { kind: 'table', caption: 'Validation rules worth writing once', head: ['Rule', 'What it checks', 'Which fault it catches'], rows: [
          ['Pattern rules', 'That codes match their expected shape, character for character', 'The truncated Eircode'],
          ['Character checks', 'That text contains no replacement or control characters', 'The four corrupted phone numbers'],
          ['Cross-source matching', 'That names match an authoritative list before being joined', 'Rathanagan against Rathangan'],
          ['Emptiness checks', 'That a row contains something other than separators', 'The three blank rows'],
          ['Row counts', 'That the number of records matches what you expected to read', 'All of them, as a final backstop']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game that refuses a made-up postcode, and a conversation about how a computer can tell a real one from a nearly real one.' },
          { h3: 'Teenagers', p: 'The real file in Python: write the five rules, run them, fix what they find, and keep a log of every change made.' },
          { h3: 'Adults', p: 'The same validation applied to work data, where encoding faults and near-miss codes cause most of the mysterious failures.' }
        ] },
        { kind: 'p', text: 'We have no connection with Kildare County Council, Maynooth University or Clongowes Wood College, and naming them implies none. Census figures are the Central Statistics Office\'s for 2022, published under its own open licence, and the dataset measurements are ours, taken from the council\'s published file. We deliberately publish no employment figure for any private employer in the county, because none could be read at a primary source.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'Eight electoral areas that add up exactly',
      intro: 'One tidy thing about Kildare, after all those faults: its official parts fit together perfectly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A clean partition', p: 'The county\'s eight local electoral areas, from Naas at 46,011 down to Leixlip at 16,755, sum to exactly 247,774, matching the published county total to the person.' },
          { h3: 'Where it is densest', p: 'Of 87 electoral divisions, Newbridge Urban is the tightest packed, with 2,805.7 people per square kilometre across 2.8 square kilometres.' },
          { h3: 'Routing keys everywhere', p: 'Kildare spans several: the council at W91 X77F in Naas, libraries at R14 DK33 in Athy, W12 W861 in Newbridge, W23 ND79 in Maynooth and R51 P403 in Kildare town.' }
        ] },
        { kind: 'spec', title: 'Why a clean sum is worth noticing', p: 'When a set of parts adds exactly to the published whole, you have found a structure you can trust for roll-ups. When it does not, as happens with electoral divisions in several counties, you have found a warning. Teaching a learner to check which kind they are holding takes one line of code and saves entire projects.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spotting a wrong postcode to validating a file',
    intro: 'Treat the ages as rough. Placement comes from watching someone work for an hour, not from a birth year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Right and nearly right', p: 'Programs that check whether something matches a pattern, and say so kindly when it does not.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Reading real files', p: 'Opening published files, counting rows and noticing the ones that are not really rows.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Validation and cleaning', p: 'Writing rules that catch faults, fixing what they find and logging every change.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Checks that run themselves', p: 'Turning those rules into code that runs on every new file before anyone depends on it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will tidy this file happily. Why should a Naas teenager check what it changed?',
    intro: 'Because tidying and correcting are different things, and only one of them is safe to do silently.',
    p1: 'Ask an AI tool to clean the library file and it will do something plausible. It may well fix the four corrupted phone numbers, which is genuinely useful. It may also quietly normalise the truncated Eircode into something that looks right, or standardise the town name to whichever spelling it prefers, without telling you which rows it altered. A cleaned file with no record of the cleaning is worse than a dirty one, because the faults are now invisible.',
    p2: 'The discipline we teach is simple: every change gets logged, and anything uncertain gets flagged rather than guessed. A truncated postcode should be marked as incomplete, not completed by a machine that has no way of knowing the missing character.',
    closer: 'So a Kildare child learning to code in 2026 is learning something their county already values highly, in a place where half the adults hold a degree: not just how to fix things, but how to show what you changed and why.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Naas, Maynooth, Athy or the Curragh',
    intro: 'Rail and motorway run through this county in every direction, and Kildare households still lose hours to both every week.',
    cells: [
      { h3: 'Nothing to get to', p: 'Thirty-four minutes each way is already spent on the commute here. The lesson that survives a busy term is the one that needs no travel at all.' },
      { h3: 'Familiar school words', p: 'Our teachers say Junior Cycle, Transition Year and sixth year because that is what your school says, which keeps parent conversations short.' },
      { h3: 'Try it properly', p: 'The opening session teaches something real, finishes with a straight answer about level and course, and asks for no payment details whatsoever.' },
      { h3: 'Matched by level', p: 'Between five and ten learners share a class because they work at one speed. Drawing them from several countries is what keeps a sensible hour available at every stage.' },
      { h3: 'A fixed slot each week', p: 'Usually two sessions weekly, near enough eight a month, timed to land after the school run and the train home.' },
      { h3: 'The time difference, plainly', p: 'Indian clocks never change while Irish ones do twice, leaving our teachers four and a half hours ahead in summer and five and a half in winter.' }
    ],
    spec: { title: 'A county already working from home', p: 'With 40,761 people working from home at least one day a week, 35% of the workforce against 32% nationally, a great many Kildare households already run on video calls and shared screens. A live online class is the same shape of thing, and it tends to slot straight into the week.' }
  },

  fees: {
    h2: 'What classes cost in County Kildare',
    intro: 'What it costs, in three lines.',
    first: 'One complete lesson, charged at nothing, which ends with a level and a course named out loud.',
    group: 'Four weeks of classes, roughly eight of them, shared with between five and ten learners working at the same speed.',
    private: 'The identical month of lessons, except the teacher has nobody else to attend to.',
    closer: 'One rate applies outside India and it is charged in US dollars, which is why Maynooth and Monasterevin pay the same and why no euro price list exists. Money only enters the conversation once the free lesson has produced a course and an hour. What happens about pauses, missed weeks and switching format is written on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, exactly as written',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'We pick the opening task to fit: pattern-checking in a game for the youngest, a first file opened in code for the middle years, or those four faults in the library data for a teenager who likes a puzzle.',
    success: 'Got it, thank you. Expect a call about your County Kildare class shortly.'
  },

  faq: {
    h2: 'County Kildare coding class questions',
    intro: 'The county, its data and how the classes run.',
    items: [
      { q: 'How many people live in County Kildare?', a: 'Census 2022 counted 247,774, up 11% or 25,270 since 2016. Naas is the largest town at 26,180, followed by Newbridge at 24,366 and Celbridge at 20,601.' },
      { q: 'Which Kildare school first offered Leaving Certificate Computer Science?', a: 'Clongowes Wood College in Clane was the county\'s only school on the January 2018 first-phase list. That is history rather than a guide to where the subject is taught now.' },
      { q: 'What is the Kildare data project?', a: 'Students open the council\'s own library dataset, sixteen rows long, and find four separate faults in it: a truncated Eircode, four corrupted phone numbers, a town spelled two ways and three blank rows. Then they clean it and log every change.' },
      { q: 'Is the council\'s data unusually poor?', a: 'No. Kildare publishes eighty datasets, which is generous by Irish standards, and faults like these exist in most published files. That is exactly why they make such a good teaching example.' },
      { q: 'Why does Kilcock have a different kind of figure?', a: 'Because its built-up area crosses into County Meath, so the statistics office publishes it as Kilcock, Counties Kildare and Meath, at 8,674 people. No Kildare-only split exists in those tables.' },
      { q: 'Is there a university in the county?', a: 'Maynooth University, which describes its town as Ireland\'s only university town, 25 kilometres from the centre of Dublin. We are not connected with it.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Kildare?', a: 'There is none, in Kildare or anywhere else in the country, and we are careful never to imply otherwise. Every class happens live over video. The kit required is a laptop or desktop, sound that works and a connection that holds up, and the telephone number printed here belongs to India.', boiler: true },
      { q: 'What do County Kildare coding classes cost?', a: 'Nothing at all for the opening lesson. Beyond that, sharing a class with five to ten others costs USD 100 monthly and buys two live lessons a week, some eight a month; having the teacher to yourself on that same schedule costs USD 150 monthly. The course, the format and the weekly hour are all fixed before anybody pays.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Never fewer than five and never more than ten. They are put together on what they can do, how fast they move and where they are heading, rather than on age or postcode. When nothing at the right level meets at an hour that suits, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Next door, and the rest of the country',
    html: 'Kilcock is shared with <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a>, which has its own page, and the capital most Kildare commuters travel to is covered at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and for models and data there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. Everything sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Kildare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kld .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.15vw, 2.72rem); }
.cg-root.cg-kld .cg-hero h1 { font-weight: 700; letter-spacing: -0.0195em; line-height: 1.055; }
.cg-root.cg-kld .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-kld .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kld .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.0125em; }
.cg-root.cg-kld .cg-grid-3 { gap: clamp(1.06rem, 2.42vw, 1.92rem); }
.cg-root.cg-kld .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-kld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kld .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-kld .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-kld .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Kildare, Census 2022 (CSO): population 247,774, up 11 percent or 25,270 since 2016; average age 36.9 against 38.8 nationally; 40,761 people working from home at least one day a week, 35 percent of the workforce against 32 percent nationally; non-Irish citizens 11 percent, Polish 5,586, UK 3,177, Indian 1,824, with dual Irish citizenship rising from 5,239 in 2016 to 8,685; third-level qualifications almost 76,400, a rate of 49 percent against 45 percent nationally, and 1,787 PhD holders, 4.7 percent of the national total; 100,856 people travelling to work, 65,587 driving, 5,011 by train, 4,656 by bus, 6,042 walking and 1,436 cycling, with an average journey of 34 minutes, among the highest in the country; more than 40 percent of workers in both Celbridge and Leixlip commuting into Dublin city and suburbs, putting both in the national top ten; Kill recording the highest rate nationally of secondary students using public transport at 82 percent among towns of at least 1,500 people. Towns (F1015): Naas 26,180, Newbridge 24,366, Celbridge 20,601, Maynooth 17,259, Leixlip 16,733, Athy 11,035, Kildare 10,302, Clane 8,152, Sallins 6,269, Monasterevin 5,307, Kilcullen 3,815, Rathangan 3,263, and Kilcock published across Kildare and Meath at 8,674. Local electoral areas (F1016) sum exactly to the county total: Naas 46,011, Newbridge 37,478, Maynooth 35,202, Clane 31,210, Kildare 29,759, Athy 28,641, Celbridge 22,718 and Leixlip 16,755. Electoral divisions (F1011): the densest is Droichead Nua, Newbridge Urban, at 2,805.7 per sq km over 2.8 sq km, and the 87 divisions labelled Kildare sum to 245,636 rather than the official 247,774, so no ED-based county figure is used. Gov.ie, 4 January 2018: Clongowes Wood College, Clane was the county\'s only first-phase Leaving Certificate Computer Science school. Maynooth University describes itself as being in the heart of Ireland\'s only university town, 25 km from the centre of Dublin, with a campus divided by the Kilcock Road. Kildare County Council: Aras Chill Dara, Devoy Park, Naas, W91 X77F. Library addresses include Athy R14 DK33, Newbridge W12 W861, Maynooth W23 ND79, Kildare Town R51 P403 and Naas W91 A997.',
    localProject: 'Four faults in sixteen rows of the county\'s own open data. Kildare County Council publishes 80 datasets on data.gov.ie; its Library Locations file is licensed Creative Commons Attribution 4.0 and contains 16 real records. Measured: one Eircode, on the Local Studies and Archives record, reads W12 W86, six characters where seven are required, against W12 W861 for the same building elsewhere in the file; four of sixteen phone numbers contain a stray replacement character where a space or leading zero belongs, at Celbridge, Kilcock, Leixlip and Maynooth, which is the signature of a character encoding fault in the export; the file spells one town Rathanagan while the CSO census spells it Rathangan, so any join on town name silently drops that row; and three trailing rows are entirely empty, containing only separators, which many tools will read as records. Separately, the council\'s own contact page renders the county as Kidare and prints an Eircode one character short of the clean W91 X77F given elsewhere on the same site, which is used on the page as an illustration that official text is typed by people. The teaching output is a cleaned file plus a log of every change, with the truncated Eircode flagged as incomplete rather than guessed.',
    requiredMentions: [
      '247,774',
      '26,180',
      '24,366',
      '20,601',
      '17,259',
      '40,761',
      '5,586',
      '1,787',
      '46,011',
      '2,805.7',
      'W91 X77F',
      'Clongowes Wood College',
      'Rathanagan'
    ],
    sources: [
      { claim: 'CSO summary results, Kildare: "the population of Kildare grew by 11% to 247,774, which means the number of people in the county rose by 25,270"; average age 36.9 against a national 38.8; "In Kildare, 40,761 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 35% of the workforce. The national figure was 32%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultskildare/' },
      { claim: 'CSO Profile 7, Kildare: "More than 40% of workers in both Celbridge and Leixlip were commuting to work in Dublin City and suburbs"; 100,856 travelling to work with 65,587 driving, 5,011 by train and 4,656 by bus; average journey 34 minutes; "Kill had the highest rate nationally of secondary school students using public transport at 82%".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingkildare' },
      { claim: 'CSO Profile 5, Kildare: non-Irish citizens 11%, "the largest group were Polish citizens (5,586 people) followed by UK citizens (3,177), and Indian (1,824)"; dual Irish citizenship up from 5,239 to 8,685.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionkildare' },
      { claim: 'CSO Profile 8, Kildare: third-level qualifications almost 76,400, "a rate of 49% compared with 45% nationally"; 1,787 PhD holders, 4.7% of the national total.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationkildare' },
      { claim: 'CSO table F1015: Naas 26,180, Newbridge 24,366, Celbridge 20,601, Maynooth 17,259, Leixlip 16,733, Athy 11,035, Kildare 10,302, Rathangan 3,263, and Kilcock published as "Kilcock, Counties Kildare & Meath" at 8,674.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO table F1016: the county\'s eight local electoral areas, Naas 46,011 down to Leixlip 16,755, sum exactly to 247,774.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO table F1011: Droichead Nua (Newbridge) Urban is the densest Kildare electoral division at 2,805.7 persons per sq km across 2.8 sq km.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Clongowes Wood College / Clane, Co. Kildare" as the county\'s only entry.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Maynooth University: "Maynooth University is located in the heart of Ireland\'s only university town. We are 25km from the centre of Dublin in North Kildare."', url: 'https://www.maynoothuniversity.ie/location' },
      { claim: 'Kildare County Council contact page: Aras Chill Dara, Devoy Park, Naas, Co. Kildare, W91 X77F, with the page itself also rendering a misspelled county name and a truncated Eircode.', url: 'https://kildarecoco.ie/contact/' },
      { claim: 'Kildare County Council Library Locations, licensed Creative Commons Attribution 4.0 on data.gov.ie: 16 records, one Eircode of six characters, four phone numbers containing replacement characters, the spelling Rathanagan, and three blank rows.', url: 'https://data.gov.ie/dataset/kildare-library-locations' }
    ],
    rejectedClaims: [
      'Any Intel Leixlip employment or investment figure: no primary source could be read, so none is printed.',
      'A Kildare-only population for Kilcock: the CSO publishes only the combined Kildare and Meath figure.',
      'A county-level density from summing electoral divisions: the 87 Kildare-labelled divisions sum to 245,636 against an official 247,774, so no such figure is used.',
      'Any claim about which Kildare schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'Guessing the missing character in the truncated Eircode: it is reported as incomplete instead.',
      'Anything owned by the Louth, Wexford, Carlow or Laois county pages, or by the city pages.'
    ]
  }
};
