'use strict';
// Christchurch, Dorset (cg- town page, UK cluster Phase 10, towns band B, row 517). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how much would the
// answer change if one year of the record were missing? (the jackknife: leave one observation out, recalculate,
// and read the uncertainty from the spread; it works for the mean and breaks for the median and the maximum).
// Data (read 30 September 2026): Met Office historic station data, Hurn (hurndata.txt; header: Location 411700E
// 97800N, Lat 50.779 Lon -1.835, 10 metres amsl). Monthly rainfall, January 1957 onwards.
// Our run (scratchpad xch/jk.py): 69 complete calendar years with no provisional month, 1957 to 2025; three monthly
// rainfall values are marked estimated. Annual totals are our sums of the 12 monthly figures. Mean 845.2 mm, standard
// deviation 143.2; textbook standard error 17.25; jackknife standard error 17.25. Leave-one-out means run from 839.2
// (without 1960, the wettest, 1,252.4 mm) to 850.1 (without 1973, the driest, 509.1 mm). Median 821.7; the 69
// leave-one-out medians take only three values (818.95 34 times, 820.45 once, 823.2 34 times); jackknife standard
// error 17.41. Ending the record earlier: 68 years (to 2024) 12.28; 67 years 17.15; 66 years 22.17; 65 years 16.88,
// while the mean's stays between 17.20 and 17.47. Maximum: 68 of 69 leave-one-out values are 1,252.4 and one is
// 1,217.2 (2014). Delete-10 jackknife of the median, 20,000 random subsets (seed 20260930): 23.37 (delete-5 22.74,
// delete-20 21.89). Station coordinates are 5.87 km from the postcodes.io point for Christchurch (our haversine).
// Lesson family: the jackknife (resampling standard errors), smooth vs non-smooth statistics.
// Place facts: Bournemouth, Christchurch and Poole (E06000058) TS001 400,196. ONS 2021 BUAs wholly inside it
// (published): Bournemouth 196,455; Poole 141,005; Christchurch 48,985.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHRISTCHURCH', label: 'Christchurch', blurb: 'Coding and AI classes for Christchurch in Dorset, with a statistics project that drops one year at a time from 69 years of rain records.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-christchurch',
  code: 'xch',
  accent: '#2A6A96',
  accentRationale: 'Christchurch, Dorset: a harbour blue (5.8:1 contrast on white), set by hand well apart from the accents already taken',
  pageType: 'city',
  place: {
    name: 'Christchurch',
    eyebrow: 'Christchurch, Dorset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dorset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Dorset', href: '/coding-classes-in-dorset' },
    { label: 'Bournemouth', href: '/best-coding-and-ai-classes-in-bournemouth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Christchurch, Dorset',
  title: 'Coding and AI Classes in Christchurch, Dorset | Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding taught live online for Christchurch, Mudeford, Highcliffe, Somerford and Burton in Dorset, ages 6 to 67. Free first lesson.',
  ogDescription: 'Coding and AI classes for Christchurch, Dorset, with a data project: the jackknife removes one year at a time from 69 years of rainfall measured at Hurn.',
  twitterDescription: 'Christchurch, Dorset: live online coding, AI, Python and vibe coding for ages 6 to 67. The first lesson costs nothing.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Christchurch, Dorset',
    description: 'Coding, AI, data skills, Python, vibe coding and maths for children, teenagers and adults in Christchurch, Dorset, taught live online by tutors who put careful reasoning first.'
  },

  h1: 'Coding and AI classes in Christchurch, Dorset',
  capsuleQ: 'What are the best coding and AI classes for Christchurch in Dorset?',
  capsule: 'Christchurch is a built-up area of 48,985 people in the ONS figures for the 2021 census, within the Bournemouth, Christchurch and Poole council area of 400,196. Mudeford, Highcliffe, Somerford, Stanpit and Purewell are listed in postcode data as its suburban areas. From age six to 67, learners here study coding, AI, Python, vibe coding and maths with tutors based in India, over live video, either alone with a tutor or in a class of five to ten at a matched level. We teach people to reason before they reach for a tool, which is what lets them judge an AI\'s output. The Christchurch project takes 69 years of rainfall from the Met Office station at Hurn and asks how far a result can be trusted, by removing one year at a time. A first lesson is free and closes with a course recommendation. Continuing costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Anyone can ask a chatbot for the average rainfall of a place and get a number back. The harder question is how sure that number is. Statisticians have a blunt, clever test called the jackknife: take one observation away, work the answer out again, put it back, take the next one away, and keep going. If the answer barely moves, it is solid. If it lurches, it was resting on a few data points. The test is simple enough for a 13-year-old to program. It also has a well-known blind spot, and the rain record from Hurn shows it clearly.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Christchurch, Dorset.',

  picks: {
    eyebrow: 'Chosen for Christchurch',
    h2: 'Courses in thinking, vibe coding and AI for Christchurch',
    intro: 'Start from the age group. No card is taken for any of these, and the opening live class is free.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: remove one card from a hand and say whether the middle card has changed.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch weather game and find the input that makes it misbehave.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Data and machine learning with uncertainty attached, including the jackknife on Hurn rainfall.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'AI-assisted Python and web builds, each one tested by taking something away.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The council area',
      h2: 'Christchurch, Bournemouth and Poole in the census',
      intro: 'Three built-up areas make up most of the council area, and postcode data names the places around Christchurch.',
      body: [
        { kind: 'table', caption: 'Built-up areas wholly inside Bournemouth, Christchurch and Poole, as published by the ONS for 2021', head: ['Built-up area', 'Population (2021)'], rows: [
          ['Bournemouth', '196,455'],
          ['Poole', '141,005'],
          ['Christchurch', '48,985']
        ] },
        { kind: 'p', text: 'These are the ONS\'s rounded figures, shown as released and not totalled; 400,196 is the separate census count for the whole council area. In postcodes.io, Mudeford, Highcliffe, Burton, Somerford, Stanpit, Purewell, Jumpers Common, Walkford, Friars Cliff and Fairmile are suburban areas of Bournemouth, Christchurch and Poole, and Hurn and Winkton are villages. Local schools follow the national curriculum for England. If you pass on the term calendar, we plan lessons to suit it.' },
        { kind: 'callout', h3: 'Dorset, the South West and the way we teach', p: 'For the county, see <a class="cg-inline-link" href="/coding-classes-in-dorset">coding classes in Dorset</a>; for the region, <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. Our case for reasoning before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Christchurch project',
      h2: 'The jackknife on 69 years of Hurn rain',
      intro: 'Leave out one year, recalculate, repeat 69 times, and see which statistics survive the treatment.',
      body: [
        { kind: 'p', text: 'The Met Office publishes a monthly record for its station at Hurn, a village that postcodes.io places in the same council area as Christchurch. The file begins in January 1957. The learner adds the 12 monthly rainfall figures of each calendar year to get an annual total, keeping the 69 years from 1957 to 2025 that are complete and not marked provisional. The average year brought 845.2 mm. The wettest was 1960 with 1,252.4 mm and the driest 1973 with 509.1 mm.' },
        { kind: 'table', caption: 'Three statistics of annual rainfall at Hurn, each recalculated 69 times with one year left out (our Python run on Met Office data)', head: ['Statistic', 'All 69 years', 'What the 69 recalculations look like', 'Jackknife standard error'], rows: [
          ['Mean', '845.2 mm', '69 different values, from 839.2 to 850.1', '17.25 mm'],
          ['Median', '821.7 mm', 'Only three values: 818.95, 820.45 and 823.2', '17.41 mm'],
          ['Wettest year', '1,252.4 mm', '68 identical values and one of 1,217.2', 'Not meaningful']
        ] },
        { kind: 'p', text: 'For the mean the jackknife is exact. The textbook formula, standard deviation divided by the square root of 69, gives 17.25 mm, and the leave-one-out spread gives 17.25 mm as well. Every year nudges the mean a little, and the nudges add up to an honest measure of doubt. The median behaves differently. Remove any of the 34 drier years and the median becomes 823.2. Remove any of the 34 wetter ones and it becomes 818.95. The whole calculation hangs on three numbers in the middle of the sorted list, so the answer depends on how far apart those three happen to be.' },
        { kind: 'table', caption: 'Standard errors as the record grows by one year at a time', head: ['Record ends', 'Years', 'Mean: jackknife', 'Median: jackknife'], rows: [
          ['2021', '65', '17.42 mm', '16.88 mm'],
          ['2022', '66', '17.20 mm', '22.17 mm'],
          ['2023', '67', '17.43 mm', '17.15 mm'],
          ['2024', '68', '17.47 mm', '12.28 mm'],
          ['2025', '69', '17.25 mm', '17.41 mm']
        ] },
        { kind: 'p', text: 'One extra year should hardly change how uncertain a 60-odd-year median is. The mean\'s column agrees: it stays between 17.20 and 17.47. The median\'s column jumps from 22.17 to 12.28 and back to 17.41, which tells the learner the method is broken here, not the weather. A repair exists within the same idea. Leave out ten years at a time instead of one, over 20,000 random choices, and the median\'s standard error settles at 23.37 mm, with 22.74 for five years out and 21.89 for twenty. The wettest-year row is worse still: 68 of the 69 recalculations return the same 1,252.4, so leaving one out reveals almost nothing about an extreme.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Line up seven number cards, take one away at a time, and record what happens to the middle card and to the total.' },
          { h3: 'Ages 11 to 15', p: 'Read the Hurn file in Python, build yearly totals, and print the 69 leave-one-out means.' },
          { h3: 'Ages 15 and up', p: 'Code the jackknife as a function that accepts any statistic, then find where it fails and try the delete-ten version.' }
        ] },
        { kind: 'callout', h3: 'Source and caveats', p: 'Contains Met Office data, published as historic station data under the Open Government Licence. Three monthly rainfall values in our span are marked as estimated in the file. Annual totals and every standard error are our calculations. By our measurement the station\'s coordinates lie 5.87 km from the postcodes.io point for Christchurch, so this is a record for the area and not for any one street. Nothing here is a forecast or a statement about climate.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Doubt, measured',
      h2: 'What the jackknife teaches about AI and vibe coding',
      intro: 'A number without its uncertainty is half an answer, and a method can be sound in one place and fail in another.',
      body: [
        { kind: 'table', caption: 'From Hurn rainfall to working with AI', head: ['In the rain record', 'In AI practice'], rows: [
          ['17.25 mm by formula and by jackknife', 'Test a method where the right answer is known before trusting it elsewhere'],
          ['Leaving out 1960 moves the mean most', 'Find the few examples a result leans on'],
          ['The median gave only three values', 'A tool can run without error and still be the wrong tool'],
          ['12.28, then 17.41, a year apart', 'Instability is a warning sign even when each number looks fine'],
          ['Delete ten instead of one', 'Fix the method, do not just pick the output you like']
        ] },
        { kind: 'p', text: 'A learner who vibe codes this project can have working jackknife code from an AI assistant in under a minute, and the assistant will apply it to the median without a word of caution. The code runs. The output looks like any other number. Only someone who prints the 69 recalculations and sees three values repeated will know something is off. That habit of opening up a result carries straight over to machine learning, where the same leave-one-out idea is used to ask which training examples a model\'s answer depends on. AI agents come later in our pathway, when a learner writes Python alone, generally at sixth-form age or beyond; Copilot Studio agents are offered in private lessons only. Read on at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The Met Office, the Office for National Statistics and postcodes.io have no connection with this page beyond publishing the open data used. Responsibility for the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From number cards to resampling',
    intro: 'Treat the school years as approximate; the free lesson shows us the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Middles, totals and what-if questions answered by trying them.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and tools drafted with AI help, then poked until they break.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Real datasets, honest error bars, and support for GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Practical AI', p: 'Python first, then generative AI and agents for real tasks.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and uncertainty',
    h2: 'What is the jackknife in statistics?',
    intro: 'The jackknife is a resampling method that measures how uncertain a statistic is by recalculating it many times, each time with one observation left out, and seeing how much the results spread.',
    p1: 'On 69 years of rainfall at Hurn it gave the mean of 845.2 mm a standard error of 17.25 mm, identical to the textbook formula, but for the median it produced only three distinct values and an error that swung from 12.28 to 17.41 mm when a single year was added.',
    p2: 'Leaving out ten years at a time steadied the median\'s figure at about 23 mm.',
    closer: 'Christchurch teenagers who have watched a trusted method fail on their own screen ask better questions of every AI answer afterwards, and that judgement only grows by writing and testing code, which keeps coding worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Live lessons for Mudeford, Highcliffe and Somerford',
    intro: 'Any reasonably recent computer with a webcam, plus household broadband, will do.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'It is the learner who writes the code, with the screen shared. Our tutor follows along and asks what makes them confident.' },
      { h3: 'Starting point checked', p: 'The opening session tells us the right level and, for exam years, the board.' },
      { h3: 'Trial at no charge', p: 'Full length, no card, and a course suggestion at the end.' },
      { h3: 'Classes by level', p: 'Groups hold five to ten UK learners who are all at a similar point.' },
      { h3: 'Two sessions weekly', p: 'We leave out the holiday weeks you name.' },
      { h3: 'A fixed UK hour', p: 'The tutors move with British Summer Time, so your lesson does not.' }
    ],
    spec: { title: 'The reason for online', p: 'One town rarely has ten learners at the same level on the same evening. The whole UK does, and video lets us bring them together.' }
  },

  fees: {
    h2: 'Fees for Christchurch',
    intro: 'Christchurch learners pay the international rate that applies everywhere outside India.',
    first: 'A free live lesson of normal length that ends with our advice on a course.',
    group: 'Roughly eight live lessons a month, shared with a small class.',
    private: 'Roughly eight live lessons a month, one learner and one tutor.',
    closer: 'All fees are quoted and charged in US dollars; we publish no price in sterling. The first invoice follows the trial, once a course and a regular time are agreed. How we treat holidays, absences and changes of format is explained on the pricing page.'
  },

  reviewsH2: 'What Dorset families and other UK learners say on Google',

  book: {
    h2: 'Arrange a free Christchurch lesson',
    intro: 'We need an age or school year and something the learner likes. A trial might be a take-one-away card puzzle, a Scratch game made with AI, a first Python script, or a first look at a real weather file.',
    success: 'Thanks. The Christchurch request has arrived and we will reply soon.'
  },

  faq: {
    h2: 'Christchurch questions',
    intro: 'The jackknife, the rainfall project, coding, AI and how lessons work.',
    items: [
      { q: 'What is the population of Christchurch, Dorset?', a: 'The Christchurch built-up area had 48,985 residents at the 2021 census, according to the ONS. The Bournemouth, Christchurch and Poole council area had 400,196.' },
      { q: 'Are there coding and AI classes online for Christchurch?', a: 'Yes. Ages 6 to 67 are taught by live video, reaching Christchurch, Mudeford, Highcliffe, Somerford, Burton and the wider council area.' },
      { q: 'What is a standard error?', a: 'A measure of how much a calculated value, such as an average, would be expected to vary if the data were collected again. A small standard error means the value is pinned down well.' },
      { q: 'Why does the jackknife fail for the median?', a: 'Leaving out one value shifts the median only between the two or three numbers at the middle of the sorted data, so the spread of results reflects those few gaps and little else.' },
      { q: 'What do students do in the Christchurch project?', a: 'They turn 69 years of Met Office rainfall for Hurn into annual totals with Python, apply the jackknife to the mean, median and maximum, and work out why two of the three go wrong.' },
      { q: 'How does vibe coding fit in?', a: 'Learners of every age practise it: they brief an AI, read what it wrote, and test it before trusting it.' },
      { q: 'When are AI agents taught?', a: 'Once Python is secure without help, normally sixth form or later. Agents in Copilot Studio are taught one-to-one only.' },
      { q: 'Do lessons help with GCSE or A level?', a: 'They support computer science, maths and statistics at both levels. We aim for real understanding and make no promise about grades.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 per month and one-to-one tuition is USD 150 per month.' },
      { q: 'Are there lessons in the school holidays?', a: 'Only if you want them; give us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Around Dorset',
    h2: 'More Dorset and South West pages',
    html: 'Other projects are on the pages for <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bournemouth">Bournemouth</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-poole">Poole</a>, with the county at <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Christchurch and Dorset',
  footerPlaces: [
    { href: '/coding-classes-in-dorset', label: 'Dorset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-xch .cg-hero-grid { align-items: center; gap: clamp(1.3rem, 3.8vw, 3rem); }
.cg-root.cg-xch .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-xch .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-xch .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-xch .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-xch .cg-table caption { text-align: left; font-size: 0.88rem; font-style: italic; padding-bottom: 0.4rem; }
.cg-root.cg-xch .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-xch .cg-table th { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
.cg-root.cg-xch .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-xch .cg-callout { border-radius: 10px; border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Bournemouth, Christchurch and Poole (E06000058), Census 2021 TS001 usual residents 400,196. ONS 2021 BUAs wholly inside it (published): Bournemouth 196,455; Poole 141,005; Christchurch 48,985. Upton straddles the boundary and is excluded. postcodes.io (Bournemouth, Christchurch and Poole): Christchurch (town); Mudeford, Highcliffe, Burton, Somerford, Stanpit, Purewell, Jumpers Common, Walkford, Friars Cliff, Fairmile (suburban areas); Hurn, Winkton (villages).',
    localProject: 'Met Office historic station data, Hurn (Lat 50.779 Lon -1.835, 10 m amsl), read 30 September 2026. 69 complete non-provisional calendar years 1957-2025; annual rainfall = our sum of 12 monthly values (3 estimated). Mean 845.2 mm, sd 143.2; formula standard error 17.25; jackknife 17.25; leave-one-out means 839.2 (without 1960, 1,252.4 mm) to 850.1 (without 1973, 509.1 mm). Median 821.7; leave-one-out medians 818.95 x34, 820.45 x1, 823.2 x34; jackknife standard error 17.41 (69 years), 12.28 (68), 17.15 (67), 22.17 (66), 16.88 (65); mean 17.25, 17.47, 17.43, 17.20, 17.42. Maximum: 68 replicates 1,252.4, one 1,217.2. Delete-10 jackknife of median, 20,000 subsets, seed 20260930: 23.37; delete-5 22.74; delete-20 21.89. Station 5.87 km from the postcodes.io Christchurch point (haversine). Lesson family: the jackknife, resampling standard errors, smooth vs non-smooth statistics.',
    requiredMentions: [
      '400,196',
      'Mudeford',
      'Highcliffe',
      'Somerford',
      'Stanpit',
      'Purewell',
      'Friars Cliff',
      'jackknife',
      '845.2',
      '1,252.4'
    ],
    sources: [
      { claim: 'Met Office historic station data for Hurn: monthly rainfall from January 1957 (Open Government Licence).', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/hurndata.txt' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and villages in Bournemouth, Christchurch and Poole, with coordinates.', url: 'https://api.postcodes.io/places?q=Mudeford' }
    ],
    rejectedClaims: [
      'Any trend or climate claim from the rainfall record: not tested; not claimed.',
      'That Hurn rainfall equals rainfall in Christchurch town: not claimed; the station is 5.87 km from the Christchurch point.',
      'Christchurch Priory, harbour, castle or airport facts: not read from a source; not claimed.',
      'Comparison with other resampling methods: left out on purpose; the page stays on the jackknife.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
