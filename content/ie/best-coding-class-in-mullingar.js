'use strict';
// Mullingar (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Mullingar, Co Westmeath", read 19 September 2026, the
// Irish Rail station page for Mullingar, Mullingar Arts Centre's own site and
// Belvedere House's own site. Spine: what a survey would have told you. The census
// is a complete count, so the true broadband share among the 7,440 households that
// answered is known exactly, 6,636, or 89.19%. A seeded simulation (mulberry32,
// seed 20220403, 1,000 surveys per size, sampling without replacement, run twice
// with identical output) shows what surveys of 100, 400 and 1,600 households would
// have reported: 83.0 to 95.0, 86.0 to 92.0 and 87.9 to 90.5 percent for the
// middle 95% of surveys. New family for the cluster: sampling error and sample
// size. Westmeath owns the town-list population 22,667 and its own eircodes.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'MULLINGAR', blurb: 'A thousand imaginary surveys of one Westmeath town, checked against the complete count. What sample size really buys.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-mullingar',
  code: 'mgr',
  accent: '#3A3A6B',
  accentRationale: 'Mullingar: a lake indigo from the solver, distinct from the Westmeath county accent and the Athlone ochre in the same county',
  pageType: 'city',
  place: {
    name: 'Mullingar',
    eyebrow: 'Mullingar, County Westmeath',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Westmeath' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-westmeath', name: 'County Westmeath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Westmeath', href: '/coding-classes-in-county-westmeath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mullingar, County Westmeath, Ireland',
  title: 'Best Coding Class in Mullingar | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Mullingar learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Mullingar, with a project that runs a thousand simulated surveys against a complete census count.',
  twitterDescription: 'Coding and AI classes for Mullingar, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Mullingar',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Mullingar, County Westmeath, taught live in English.'
  },

  h1: 'Coding classes in Mullingar',
  capsuleQ: 'What is the best coding class in Mullingar?',
  capsule: 'Mullingar records 22,470 usual residents in the census town tables and 8,171 households, 6,636 of which report broadband. For a learner here, a lesson with us means a teacher on video at a fixed hour, twice in most weeks, alongside a few others working at the same stage or entirely one to one, at any age between six and sixty-seven. The introductory lesson is free. Afterwards the monthly fee is USD 100 for a group place and USD 150 for private teaching.',
  lead: 'Most figures anybody quotes come from a survey: a few hundred people asked, and the answer scaled up. The census is different. Of the 7,440 Mullingar households that answered its internet question, 6,636 reported broadband, so the true share is known exactly: 89.19%. That makes the town a rare chance to check what a survey would have said. We ran a thousand imaginary surveys of 100 households each, drawn at random from those 7,440, with a fixed seed so anybody can repeat them. The middle 95% of those surveys reported anything from 83.0% to 95.0%, and the unluckiest said 78%. Four times as many households per survey halved the spread. That is the whole project, and it changes how a learner reads every poll for the rest of their life.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Mullingar.',

  picks: {
    eyebrow: 'Course picks for Mullingar',
    h2: 'First courses for Mullingar learners',
    intro: 'Age and interest suggest a course; the introductory hour with the teacher who runs it confirms the choice.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games built on chance, where rolling the dice a hundred times teaches what one roll cannot.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Probability and averages through programs that simulate thousands of trials in a second.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Sampling, simulation and margins of error in Python, checked against real census data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who commission surveys or read them, and want to know what the sample size is worth.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What a survey would have told you',
      intro: 'A thousand simulated surveys at each of three sizes, drawn without replacement from the 7,440 Mullingar households that answered the census internet question. The truth is known: 6,636 broadband households, 89.19%. The simulation is ours, seed 20220403, and gives identical results every time it is run.',
      body: [
        { kind: 'table', caption: 'Broadband share reported by simulated surveys, against the true 89.19%', head: ['Households per survey', 'Middle 95% of surveys', 'Most extreme of 1,000', 'Formula margin'], rows: [
          ['100', '83.0% to 95.0%', '78.0% to 98.0%', 'plus or minus 6.0 points'],
          ['400', '86.0% to 92.0%', '84.5% to 94.5%', 'plus or minus 3.0 points'],
          ['1,600', '87.9% to 90.5%', '86.6% to 91.4%', 'plus or minus 1.3 points']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four times the work, half the error', p: 'Going from 100 households to 400 cut the spread from six points either side to three. Going to 1,600 cut it again. Precision improves with the square root of the sample size, which is why the last few points of accuracy are always the most expensive.' },
          { h3: 'The unlucky survey is real', p: 'One of the thousand surveys of 100 households reported 78% and another 98%. Nobody running a single survey knows which kind they got, which is exactly why a result without its margin of error is only half a result.' },
          { h3: 'When the sample is a big slice', p: 'At 1,600 households a survey covers over a fifth of the town, and the usual formula has to be corrected for that. With the correction it predicts 1.3 points either side, which matches what the simulation actually produced.' }
        ] },
        { kind: 'callout', h3: 'Every poll you read has this hidden inside it', p: 'Voting intention, customer satisfaction, app ratings, a school survey of parents: nearly every percentage in public life comes from asking some people and inferring the rest. The honest version always carries two numbers, the estimate and how far it could be out, and the difference between two surveys means nothing until it is bigger than both of their margins. Learners who have watched a thousand surveys scatter around a known truth never quite trust a lone percentage again, and that is a healthy thing to carry into adult life.',
        },
        { kind: 'p', text: 'The learner rebuilds the simulation themselves: a list of 7,440 households with 6,636 marked as broadband, a seeded random generator, a sampler that draws without replacement, and a loop that runs a thousand surveys at each size and sorts the results. They check that rerunning with the same seed gives the same table, change the seed and see the edges move a little while the pattern holds, and then compare their spread with the textbook formula. The last step is a sentence of the kind a newspaper should print: a survey of 400 households would put Mullingar\'s broadband share at about 89%, give or take three points.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Mullingar in the town tables',
      h2: 'The complete count behind the experiment',
      intro: 'Published for the built-up area Mullingar, Co Westmeath, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Mullingar, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '22,470'],
          ['Households', '8,171'],
          ['Households reporting broadband', '6,636'],
          ['Households that answered the internet question', '7,440'],
          ['Working residents in the travel table', '9,495'],
          ['Children under fifteen in childcare', '1,397']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why 7,440 and not 8,171', p: 'The simulation uses only the households that answered the question: 6,636 broadband, 172 another connection and 632 none. The 731 that did not state are left out, because a survey cannot sample an answer nobody gave. That choice is ours and it is stated.' },
          { h3: 'Getting to work', p: 'Of the 9,495 working residents, 5,319 drive, 1,056 walk, 687 give home as their main answer, 528 travel as a car passenger, 180 by bus, 176 by bicycle and 130 by train, with 824 not stating.' },
          { h3: 'Getting to school', p: 'Of 5,961 journeys to school, college or childcare, 3,048 are as a car passenger, 1,382 on foot, 322 by bus, 174 by bicycle and 142 by train.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Mullingar station as Green Bridge, Mullingar, Co. Westmeath, Eircode N91 HKR4, staffed from 05:30 to 21:30 on weekdays with shorter weekend hours, and a booking office open on weekday mornings until 14:00.' }
      ]
    },
    {
      id: 'reading', tint: 'tint', eyebrow: 'Reading polls properly',
      h2: 'Three questions for any percentage',
      intro: 'What the simulation teaches, turned into checks a reader can run on a figure in a newspaper or a report.',
      body: [
        { kind: 'table', caption: 'Questions to ask of a survey result', head: ['Question', 'Why it matters, shown in Mullingar'], rows: [
          ['How many were asked?', 'At 100 households a survey could land anywhere from 83% to 95% in most cases; at 1,600, between 87.9% and 90.5%'],
          ['Is a difference bigger than the margin?', 'Two surveys of 100 reporting 85% and 92% are not evidence of any change; both sit inside the ordinary scatter'],
          ['Who could not be asked?', 'The 731 households that did not answer the census question are outside every simulated survey, and in a real one they would be too']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A census is not a survey', p: 'Because every household was asked, the census has no sampling error at all. The simulation exists precisely because that rare complete count gives us a truth to test surveys against.' },
          { h3: 'Randomness is a tool', p: 'A seeded random generator produces the same sequence every run, which lets an experiment built on chance be checked, shared and repeated. That is one of the more surprising and useful ideas in programming.' },
          { h3: 'Size is not everything', p: 'A huge sample drawn badly, only households with a landline, say, can be further from the truth than a small random one. The simulation assumes a fair draw; real surveys have to earn that.' }
        ] },
        { kind: 'spec', title: 'The arts centre and the house', p: 'Mullingar Arts Centre gives its address as Lower Mount Street, Mullingar, Co. Westmeath, N91 K7XK, and describes its mission as promoting excellence, innovation and participation in the arts. Belvedere House, Gardens and Park, which describes itself as a Georgian country house near Mullingar dating to 1740, gives N91 EF80 and notes that its interior is closed during conservation works while the gardens and park remain open. We have no connection with either and reproduce no prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Mullingar',
      h2: 'How the lessons actually run',
      intro: 'Twice a week, at an hour you choose, with a teacher who stays for the whole of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger children', p: 'Block coding and games of chance, where a hundred rolls of a dice turn into a first experiment.' },
          { h3: 'Secondary school', p: 'Python, websites and AI projects across the junior and senior cycles, with real data wherever it fits.' },
          { h3: 'Adults', p: 'Adult learners arrive with every level of experience, and 2,101 working residents here already work from home for part of the week.' }
        ] },
        { kind: 'p', text: 'The railway station, the arts centre and Belvedere House are quoted from their own published pages, and none of them, nor Westmeath County Council, is connected with us. Census counts appear as the Central Statistics Office published them. The simulation is ours: its population, seed, method and every result are written out on this page so that anybody can rerun it and get the same table, which is the only kind of experiment worth publishing.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From rolling dice to reading polls',
    intro: 'Use the ages as a rough guide; the introductory lesson sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Games of chance', p: 'Dice, spinners and coin flips in block code, and noticing that one roll tells you little.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Thousands of trials', p: 'Simulations in Python that repeat an experiment thousands of times and chart what happens.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Samples and margins', p: 'Sampling real data, measuring the scatter, and comparing it with the formula.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Surveys at work', p: 'Sizing a survey, reading someone else\'s, and knowing when a change is real.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a model whether a poll result changed',
    intro: 'It will usually find a story in the gap.',
    p1: 'Give an assistant two survey results, 85% and 92%, and ask what happened, and the reply often explains the rise. It rarely asks how many people each survey reached, even though at 100 respondents both numbers sit comfortably inside the scatter we measured for Mullingar, and the honest answer is that nothing can be said.',
    p2: 'A learner who has run the simulation asks for the sample sizes first and compares the gap with the margins before explaining anything. That habit turns a confident paragraph into a correct one, and it is quick to apply.',
    closer: 'Machines are fluent with percentages. Knowing how much a percentage can be trusted is a skill people still have to bring, and it starts with watching surveys miss.',
    blogAnchor: 'what makes coding worth learning today'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The arrangements for Mullingar families',
    intro: 'The practical side.',
    cells: [
      { h3: 'Taught live', p: 'A real teacher, present for the full hour, reacting to the learner\'s own screen.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one stage, from Mullingar, elsewhere in Ireland and other countries.' },
      { h3: 'Twice most weeks', p: 'Around eight lessons a month at the hour agreed when the course starts.' },
      { h3: 'School terms respected', p: 'Holidays, mid-terms and exam weeks are planned in from the outset.' },
      { h3: 'What to have ready', p: 'A computer rather than a tablet or phone, audio that works both ways, and a line that will carry a live call for an hour.' },
      { h3: 'Private lessons', p: 'They cover the cases a group cannot: an unusual level, or hours that suit nobody else.' }
    ],
    spec: { title: 'No sampling in the placement', p: 'We do not guess a learner\'s level from their age or a form. The introductory hour is a direct measurement, the one-household census rather than the survey.' }
  },

  fees: {
    h2: 'Mullingar class fees',
    intro: 'Three lines cover everything.',
    first: 'The introductory lesson, taught in full and assessed, free of charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of private lessons on the same weekly schedule.',
    closer: 'One rate, in US dollars, charged monthly and identical for every family outside India, with no euro figure printed beside it. Nothing is invoiced for the introductory hour or before a course and a time have been chosen, and the pricing page sets out what happens during holidays, after an absence, or when a learner moves between a group and private lessons.'
  },

  reviewsH2: 'Six reviews our families left on Google, reproduced exactly',

  book: {
    h2: 'Book a free Mullingar lesson',
    intro: 'Tell us the learner\'s age and what catches their interest. We shape the first hour around that, and it might finish with a game, a working script, or a thousand dice rolls charted in a few seconds.',
    success: 'Thank you. We will be in touch about the Mullingar lesson shortly.'
  },

  faq: {
    h2: 'Mullingar coding class questions',
    intro: 'What families in Mullingar usually want to know.',
    items: [
      { q: 'How many people live in Mullingar?', a: 'Census 2022 small area tables count 22,470 usual residents in the built-up area of Mullingar, in 8,171 households. The Westmeath page draws on the census town list instead, which counts on a different basis and gives a different figure.' },
      { q: 'What is the Mullingar data project?', a: 'Learners simulate a thousand surveys of Mullingar households at three sizes, drawn from the 7,440 that answered the census internet question, and compare the results with the true broadband share of 89.19%. A seeded random generator makes every run identical and checkable.' },
      { q: 'Why does sample size matter so much?', a: 'Because precision grows with the square root of the sample. In our simulation, surveys of 100 households scattered six points either side of the truth, surveys of 400 three points, and quadrupling again to 1,600 brought it close to one point.' },
      { q: 'How do Mullingar residents travel to work?', a: 'Of the 9,495 working residents in the travel table, 5,319 drive, 1,056 walk, 687 give working mainly at or from home, 528 travel as a car passenger, 180 take a bus, 176 cycle and 130 take a train, with 824 not stating.' },
      { q: 'What time are the lessons?', a: 'After school, in the evening and on weekend mornings. Our teaching day in India runs later than yours: add four and a half hours to an Irish summer evening, or five and a half in winter, and you have the teacher\'s clock. The weekly slot is fixed around that.' },
      { q: 'Are adults taught in Mullingar?', a: 'Yes. People up to sixty-seven learn with us, plenty of them from scratch, and whether an adult joins a matched group or learns privately is decided in the introductory hour.' },
      { q: 'Do learners need to be good at maths?', a: 'No. The probability and statistics on this page are taught through the project itself, one step at a time, and the computer does the arithmetic.' },
      { q: 'Is there a Modern Age Coders classroom in Mullingar?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Mullingar cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Mullingar',
    html: 'The rest of the county is on the <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">County Westmeath</a> page, with <a class="cg-inline-link" href="/best-coding-class-in-athlone">Athlone</a> to the west and <a class="cg-inline-link" href="/best-coding-class-in-portlaoise">Portlaoise</a> to the south, inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Families comparing online providers can start from <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this overview</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> holds the full list of places.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mullingar, Westmeath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-westmeath', label: 'County Westmeath' },
    { href: '/best-coding-class-in-athlone', label: 'Athlone' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mgr .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.17vw, 2.62rem); }
.cg-root.cg-mgr .cg-hero h1 { font-weight: 700; letter-spacing: -0.0183em; line-height: 1.063; }
.cg-root.cg-mgr .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.14rem; }
.cg-root.cg-mgr .cg-eyebrow { letter-spacing: 0.168em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mgr .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0137em; }
.cg-root.cg-mgr .cg-grid-3 { gap: clamp(1.06rem, 2.62vw, 2.08rem); }
.cg-root.cg-mgr .cg-table caption { letter-spacing: 0.033em; font-weight: 700; }
.cg-root.cg-mgr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mgr .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-mgr .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.03rem; }
.cg-root.cg-mgr .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Mullingar, the built-up area "Mullingar, Co Westmeath", CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T15T2TOWN22: households 8,171, broadband 6,636, other 172, none 632, not stated 731; households that answered the question 7,440; broadband share among them 89.19 percent by our division. SAP2022T2T1TOWN22: usual residents 22,470, born in Ireland 17,024. SAP2022T11T1TOWN22 to work total 9,495: car driver 5,319, on foot 1,056, not stated 824, work mainly at or from home 687, car passenger 528, bus 180, bicycle 176, train DART or Luas 130; to school, college or childcare total 5,961: car passenger 3,048, on foot 1,382, not stated 703, bus 322, bicycle 174, car driver 148, train 142. SAP2022T11T4TOWN22: 2,101 work from home at least some of the time, 6,167 never, 1,227 not stated. SAP2022T11T5TOWN22: 1,397 children under 15 in childcare, 706 aged 0 to 4 and 691 aged 5 to 14. Our simulation, run twice with identical output on 19 September 2026: population of 7,440 households with 6,636 broadband; mulberry32 generator, seed 20220403; 1,000 simple random samples without replacement at each size; middle 95 percent of reported shares 83.0 to 95.0 percent at 100 households, 86.0 to 92.0 at 400, 87.9 to 90.5 at 1,600; most extreme results 78.0 and 98.0, 84.5 and 94.5, 86.6 and 91.4; formula margin at 95 percent with finite population correction plus or minus 6.0, 3.0 and 1.3 points. Irish Rail, Mullingar station: "Green Bridge, Mullingar, Co. Westmeath", "Eircode N91 HKR4", staffing "Monday to Friday: 05:30 - 21:30", booking office "Monday to Friday: 07:30- 14:00". Mullingar Arts Centre: "Lower Mount Street Mullingar Co.Westmeath N91 K7XK", mission "to promote excellence, innovation and participation in the Arts". Belvedere House: "Belvedere House, Gardens & Park, Mullingar, Co. Westmeath, Rep. of Ireland N91 EF80", "a stunning Georgian country house near Mullingar in Westmeath that dates to 1740", "The interior of the House is now inaccessible, until further notice. The gardens, parkland, visitor centre and other recreational amenities remain open."',
    localProject: 'What a survey would have told you. The census is a complete count, so among the 7,440 Mullingar households that answered the internet question the true broadband share is known exactly, 6,636 households or 89.19 percent. That known truth lets the page test surveys against it. A seeded simulation, mulberry32 with seed 20220403, draws 1,000 simple random samples without replacement at each of three sizes and records the share each reports: the middle 95 percent of surveys of 100 households span 83.0 to 95.0 percent, of 400 span 86.0 to 92.0, and of 1,600 span 87.9 to 90.5, with the most extreme single surveys at 78.0 and 98.0 for the smallest size. Quadrupling the sample halves the spread, and at 1,600, over a fifth of the town, the textbook margin needs a finite population correction, after which it predicts 1.3 points and matches the simulation. The 731 households that did not answer are excluded from the population and the page says so. The learner rebuilds the simulation, confirms that rerunning with the same seed reproduces the table, varies the seed, compares with the formula, and writes the sentence a report should print. New family for the cluster: sampling error and sample size.',
    requiredMentions: [
      '22,470',
      '8,171',
      '6,636',
      '7,440',
      '89.19',
      '9,495',
      '5,319',
      '5,961',
      '3,048',
      '1,397',
      'N91 HKR4',
      'N91 K7XK'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, household internet access, Mullingar, Co Westmeath: broadband 6,636, other 172, no internet 632, not stated 731, total 8,171.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Mullingar: usual residents 22,470; to work 9,495 with car driver 5,319, on foot 1,056, mainly at or from home 687, car passenger 528, bus 180, bicycle 176, train 130, not stated 824; to school, college or childcare 5,961 with car passenger 3,048, on foot 1,382, bus 322, bicycle 174, train 142; 2,101 work from home at least some of the time; 1,397 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Mullingar station: "Green Bridge, Mullingar, Co. Westmeath", "Eircode N91 HKR4"; staffing "Monday to Friday: 05:30 - 21:30"; booking office "Monday to Friday: 07:30- 14:00".', url: 'https://www.irishrail.ie/en-ie/station/mullingar' },
      { claim: 'Mullingar Arts Centre: "Lower Mount Street Mullingar Co.Westmeath N91 K7XK"; "Our mission is to promote excellence, innovation and participation in the Arts."', url: 'https://www.mullingarartscentre.ie/' },
      { claim: 'Belvedere House, Gardens & Park: "Mullingar, Co. Westmeath, Rep. of Ireland N91 EF80"; "a stunning Georgian country house near Mullingar in Westmeath that dates to 1740"; "The interior of the House is now inaccessible, until further notice."', url: 'https://www.belvedere-house.ie/' }
    ],
    rejectedClaims: [
      'Any simulated survey result presented as a real survey: every figure in the project table is from our simulation against the census count, and says so.',
      'Including the 731 not-stated households in the sampled population: a survey cannot sample an answer that was never given.',
      'Belvedere House as being in the town, or its visitor numbers: it describes itself as near Mullingar, and its attendance figure is its own rounded claim, not used here.',
      'The census town-list population of Mullingar and the Westmeath County Council addresses: the County Westmeath page owns them.',
      'Any claim that a bigger sample alone guarantees accuracy: the page states the simulation assumes a fair random draw.',
      'Any reason for Mullingar\'s broadband share or travel pattern.'
    ]
  }
};
