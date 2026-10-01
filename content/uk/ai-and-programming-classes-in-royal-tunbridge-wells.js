'use strict';
// Royal Tunbridge Wells (cg- town page, UK cluster Phase 10, towns band B, row 508). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can both groups'
// averages go up when nothing about the town has changed? (The Will Rogers phenomenon: move the line, move both means.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup for the 160 output areas of the Royal Tunbridge Wells
// built-up area in Tunbridge Wells borough (E07000116); Nomis Census 2021 TS017 household size and TS006 population
// density by output area. Our sums over the 160 areas: 22,238 households, 7,280 of one person (32.74%). Density
// runs from 121 to 23,491 residents per square kilometre, median 5,521.
// Our run (scratchpad rtw/wr.py, wr3.py): label an area "dense" if its density is at or above a cut-off. Cut-off
// 2,000: dense 139 areas, 19,184 households, 6,441 one-person (33.57%); the rest 21 areas, 3,054, 839 (27.47%).
// Cut-off 10,000: dense 32 areas, 4,398, 1,532 (34.83%); the rest 128 areas, 17,840, 5,748 (32.22%). The 107 areas
// that change label hold 14,786 households, 4,909 one-person (33.20%): below the dense share, above the other.
// Whole town unchanged at 32.74%. We tried all 66 pairs of cut-offs from 1,000 to 12,000 in steps of 1,000: both
// shares rose in 47 pairs, moved in opposite directions in 19, and never both fell. Example of the opposite case:
// 2,000 to 3,000, dense 33.57% to 34.43%, the rest 27.47% to 27.28%.
// Lesson family: Will Rogers phenomenon (reclassification moves both group averages). Screened: "will rogers",
// "stage migration" 0 hits in content/; claimed in claims.txt. Kent county page = rates and Little's law; Mahdah
// (boundary moved under a fixed label, a time-series break) is a different lesson. Household size only; no sensitive
// demographics, no health content on the page.
// Place facts: Tunbridge Wells TS001 115,311. ONS 2021 BUA (published): Royal Tunbridge Wells 51,220. postcodes.io
// suburban areas whose closest postcode is in the BUA: High Brooms, Ramslye (TN4); Hawkenbury, Sherwood, Broadwater
// Down, Camden Park, Sandown Park (TN2).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROYAL TUNBRIDGE WELLS', label: 'Royal Tunbridge Wells', blurb: 'AI and programming classes for Royal Tunbridge Wells, with a census project in which moving one dividing line raises the average of both groups.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-royal-tunbridge-wells',
  code: 'rtw',
  accent: '#4C081F',
  accentRationale: 'Royal Tunbridge Wells: a very dark claret (15.4:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Royal Tunbridge Wells',
    eyebrow: 'Royal Tunbridge Wells, Tunbridge Wells borough, Kent',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Royal Tunbridge Wells, Kent',
  title: 'AI and Programming Classes in Royal Tunbridge Wells | Python',
  description: 'Live online AI and programming classes for Royal Tunbridge Wells, High Brooms, Hawkenbury and Sherwood: Python, vibe coding, agents. Ages 6 to 67, free first lesson.',
  ogDescription: 'AI and programming classes for Royal Tunbridge Wells, with a census project on how redrawing a category changes both averages.',
  twitterDescription: 'Royal Tunbridge Wells AI, Python and programming lessons online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Royal Tunbridge Wells',
    description: 'Live online AI, Python, programming and maths lessons for children, teenagers and adults in Royal Tunbridge Wells and its borough, with statistics projects about how categories shape conclusions.'
  },

  h1: 'AI and programming classes in Royal Tunbridge Wells',
  capsuleQ: 'Which AI and programming classes are best for Royal Tunbridge Wells families?',
  capsule: 'Royal Tunbridge Wells is an ONS built-up area with 51,220 usual residents in 2021; the borough of Tunbridge Wells around it had 115,311. High Brooms, Hawkenbury, Sherwood, Ramslye, Broadwater Down, Camden Park and Sandown Park are suburban areas of the town in the postcode gazetteer. For learners there aged six to 67, Modern Age Coders runs lessons in AI, programming, Python, vibe coding and maths. They are taught on live video by tutors in India, one learner at a time or in groups of five to ten who share a level. We train learners to look at how a category was drawn before comparing the groups it creates. The Tunbridge Wells project sorts 160 census areas into "dense" and "the rest", moves the dividing line, and watches a figure rise in both groups while the town stays exactly the same. A first lesson is free, a group place is then USD 100 a month, and a private tutor is USD 150 a month.',
  lead: 'Two league tables, both improved, and nothing actually changed. It sounds impossible, and it happens all the time. If you redraw the line between two groups, the items that cross over can be below average for the group they leave and above average for the group they join. Both averages then go up. In 1985 three researchers named the effect after a joke attributed to the American humorist Will Rogers, about people moving from one state to another and raising the average in both. Anyone who builds or reads AI systems needs to recognise it, because categories are redrawn constantly and the numbers that follow look like progress.',
  wa: 'Hello Modern Age Coders, we are in Tunbridge Wells and would like to try a free AI or programming lesson.',

  picks: {
    eyebrow: 'Courses to consider',
    h2: 'AI and programming courses for Tunbridge Wells',
    intro: 'Find the age band, then book. The opening lesson of each course is live and free, with no card required.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: sorting things into groups, and noticing how the rule you pick changes the answer.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: Scratch games built with an AI, with the child in charge of testing.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'AI and machine learning for teenagers, including how labels and categories shape what a model learns.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the start, through data analysis to AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Setting',
      h2: 'Royal Tunbridge Wells, High Brooms, Hawkenbury and Sherwood',
      intro: 'Census figures for the town and borough, and seven suburb names checked against the gazetteer.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Royal Tunbridge Wells built-up area', '51,220'],
          ['Tunbridge Wells borough', '115,311']
        ] },
        { kind: 'p', text: 'The borough also includes Southborough, Paddock Wood, Pembury, Cranbrook and Hawkhurst, each counted by the ONS as a built-up area in its own right, so the two figures are on different boundaries. postcodes.io has High Brooms and Ramslye as suburban areas in the TN4 postcode district and Hawkenbury, Sherwood, Broadwater Down, Camden Park and Sandown Park in TN2. In every case the postcode closest to the gazetteer point lies in the Royal Tunbridge Wells built-up area. Children here study the English national curriculum; a year group from Year 2 to Year 13 tells us the level, and we can teach in step with GCSE and A level computer science.' },
        { kind: 'callout', h3: 'More from Kent', p: 'Kent pages include the <a class="cg-inline-link" href="/coding-classes-in-kent">county overview</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-folkestone">Folkestone</a>. Our reasons for teaching thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Tunbridge Wells project',
      h2: 'The Will Rogers phenomenon: move the line and both averages rise',
      intro: 'One town, one fixed set of households, and a label that can be drawn in more than one place.',
      body: [
        { kind: 'p', text: 'The census reports two things for each of the 160 output areas in the Royal Tunbridge Wells built-up area: how many residents there are per square kilometre, and how many households have one, two, three or more people. By our sum the areas hold 22,238 households, and 7,280 of them, 32.7%, are one person living alone. Density varies enormously, from 121 to 23,491 residents per square kilometre, with a middle value of 5,521. The learner labels each area "dense" or "the rest" using a cut-off, then works out the one-person share in each group.' },
        { kind: 'table', caption: 'One-person households by density label, two cut-offs, our Python run', head: ['Cut-off (residents per sq km)', 'Dense areas', 'One-person share, dense', 'One-person share, the rest'], rows: [
          ['2,000 or more counts as dense', '139 of 160', '33.57%', '27.47%'],
          ['10,000 or more counts as dense', '32 of 160', '34.83%', '32.22%'],
          ['Whole town, either way', '160', '32.74%', '32.74%']
        ] },
        { kind: 'p', text: 'Raise the cut-off from 2,000 to 10,000 and the dense group\'s share climbs from 33.57% to 34.83%. The other group\'s share climbs too, from 27.47% to 32.22%. No household moved and none changed size. What changed is that 107 areas were relabelled. Together they hold 14,786 households, of which 4,909, or 33.20%, are one-person. That is a little below the old dense figure, so removing them lifts the dense group, and well above the old figure for the rest, so adding them lifts that group as well.' },
        { kind: 'p', text: 'We did not find this by luck, and the page should say so. The program tried every pair of cut-offs from 1,000 to 12,000 in steps of 1,000, which is 66 pairs. Both shares rose in 47 of them and moved in opposite directions in the other 19. Moving the line from 2,000 to 3,000, for instance, raised the dense share to 34.43% and lowered the other to 27.28%. We then picked a pair that shows the effect clearly. A report that quotes only the convenient pair would be doing exactly what this lesson warns against.' },
        { kind: 'p', text: 'Two more cautions. At the higher cut-off the dense group has only 32 areas, so its figure rests on 4,398 households. And these are counts for areas, which say nothing about why any household is the size it is.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two teams lined up by height. Move the shortest of the tall team across and measure both averages again.' },
          { h3: 'Ages 11 to 15', p: 'Reproduce the effect in Python with ten invented numbers, then explain in a sentence why it works.' },
          { h3: 'Ages 15 and up', p: 'Load the census tables, loop over all 66 pairs of cut-offs and report how often both shares move together.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Household size (table TS017) and population density (table TS006) are Census 2021 data from Nomis, published by the Office for National Statistics under the Open Government Licence. The name of the effect comes from Feinstein, Sosin and Wells (1985). The cut-offs, the grouping and the results are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why it matters for AI',
      h2: 'What a moving line teaches about AI and programming',
      intro: 'Models are scored by category, and categories are choices.',
      body: [
        { kind: 'table', caption: 'From the Tunbridge Wells census areas to AI systems', head: ['In the project', 'In AI and programming'], rows: [
          ['Relabelling 107 areas raised both shares', 'Redefining "easy" and "hard" cases can lift both scores'],
          ['The whole-town figure never moved', 'Always check the overall number alongside the groups'],
          ['47 of 66 pairs showed the effect', 'Report how many settings you tried'],
          ['One group shrank to 32 areas', 'Give group sizes with every average'],
          ['The cut-off was our choice', 'Ask who drew the category and when it last changed']
        ] },
        { kind: 'p', text: 'Suppose a team reports that its new model is more accurate on simple questions and also on difficult ones. If the definition of "difficult" was tightened in between, both gains may be this effect and nothing else. The same goes for any dashboard split into segments. Tunbridge Wells learners program the experiment themselves and also try it through vibe coding, which means having an AI draft the program from a description and then checking its work: an assistant asked to "compare dense and other areas" will pick a cut-off and rarely mention that the choice matters. Agent building is taught after Python is secure, which for most learners is sixth form or later; Copilot Studio agents are taught in private lessons only. Two door pages go further: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> on the pathway, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> on why it matters.' },
        { kind: 'p', text: 'The Office for National Statistics, Nomis and postcodes.io have no connection to Modern Age Coders. We rely on their open data and take responsibility for what we did with it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'Sorting games first, then data, models and agents',
    intro: 'Tell us the year group; the free lesson lets us confirm which step is right.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Grouping, comparing and fair rules, done with real objects.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building with AI', p: 'Scratch projects an AI helps to write and the child puts right.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'AI and data in Python', p: 'Models, labels and honest evaluation, written in Python.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Programming and agents', p: 'Python in depth, generative AI and agents you can audit.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and categories',
    h2: 'What is the Will Rogers phenomenon, and how can it mislead an AI evaluation?',
    intro: 'The Will Rogers phenomenon is when moving items from one group to another raises the average of both groups although no item has changed, and it misleads an AI evaluation whenever test cases are re-sorted into categories between two measurements.',
    p1: 'In Royal Tunbridge Wells, changing the definition of a dense area from 2,000 to 10,000 residents per square kilometre lifted the one-person household share from 33.57% to 34.83% in dense areas and from 27.47% to 32.22% elsewhere, with the town fixed at 32.74%.',
    p2: 'Learners who have produced that result ask for the overall figure and the group sizes before accepting any claim that every category improved.',
    closer: 'A Tunbridge Wells teenager who can spot a redrawn category will read AI claims critically, and the surest way to learn that is to program the example.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Live lessons for Tunbridge Wells learners',
    intro: 'Lessons are taken at home on a laptop or desktop with a camera. If a video call runs smoothly, the connection is good enough.',
    cells: [
      { h3: 'Learning by making', p: 'The learner writes the program and explains it; the tutor listens, probes and points the way.' },
      { h3: 'Trial before placement', p: 'We decide which course fits only after the free lesson.' },
      { h3: 'First lesson free', p: 'No payment and no card details are needed to try a lesson.' },
      { h3: 'Five to ten, one level', p: 'Groups are small and matched by ability, with members from many parts of the UK.' },
      { h3: 'Term-time timetable', p: 'Usually two lessons a week, with Kent school holidays left free if you share the dates.' },
      { h3: 'Steady through the year', p: 'Your UK slot does not change when the clocks do.' }
    ],
    spec: { title: 'Why lessons are online and live', p: 'Teaching online means a class can be formed from learners at one level rather than whoever lives close by. Teaching live means every learner is asked to explain their thinking, every lesson.' }
  },

  fees: {
    h2: 'Tunbridge Wells fees',
    intro: 'The international price list, used for all countries but India, applies to Tunbridge Wells.',
    first: 'An entire first lesson for free, with a course recommendation to finish.',
    group: 'Group classes, eight or so lessons a month.',
    private: 'Individual lessons, eight or so a month.',
    closer: 'Every price is in US dollars, and we give none in pounds. The trial costs nothing; billing begins when a course and a regular lesson time have been agreed. The pricing page covers holidays, missed lessons and swapping between group and individual teaching.'
  },

  reviewsH2: 'Kent and wider UK families, reviewing us on Google',

  book: {
    h2: 'Reserve a free lesson in Tunbridge Wells',
    intro: 'Send the learner\'s age or school year and something they are keen on. The trial can be a sorting puzzle, a Scratch game made with AI, a first Python program, or a small data experiment.',
    success: 'Thank you. Your Tunbridge Wells request is in.'
  },

  faq: {
    h2: 'Tunbridge Wells: your questions',
    intro: 'On the Will Rogers effect, the census project, AI, vibe coding and arrangements.',
    items: [
      { q: 'What is the population of Royal Tunbridge Wells?', a: 'The ONS built-up area had 51,220 usual residents at the 2021 census. The borough of Tunbridge Wells had 115,311.' },
      { q: 'Do you offer AI and programming classes in Tunbridge Wells?', a: 'We do, by live video, for ages 6 to 67 in Royal Tunbridge Wells, High Brooms, Hawkenbury, Sherwood, Ramslye and the wider borough.' },
      { q: 'What does reclassification mean in statistics?', a: 'Reclassification is moving items from one category to another because the definition of the categories has changed, not because the items have.' },
      { q: 'What did the Tunbridge Wells project show?', a: 'Moving the cut-off for a dense area from 2,000 to 10,000 residents per square kilometre raised the one-person household share in both groups, while the town as a whole stayed at 32.74%.' },
      { q: 'Does the effect always appear?', a: 'No. Of the 66 pairs of cut-offs we tried, both shares rose in 47 and moved in opposite directions in 19.' },
      { q: 'What is vibe coding?', a: 'It is a way of programming in which you tell an AI what the software should do, let it write a draft, and then test and repair that draft yourself. We teach the testing as seriously as the prompting.' },
      { q: 'How soon can a learner build AI agents?', a: 'As soon as their Python is dependable without a tutor\'s help, which is commonly sixth form or adulthood. Copilot Studio agents are taught in private lessons only.' },
      { q: 'Do you support GCSE and A level computer science?', a: 'Yes, through programming and the concepts underneath it. We do not promise grades.' },
      { q: 'What is the price?', a: 'The trial lesson is free. Group classes then cost USD 100 a month, and individual lessons USD 150 a month.' },
      { q: 'What about school holidays?', a: 'We skip whichever weeks you ask us to.' }
    ]
  },

  next: {
    eyebrow: 'Kent pages',
    h2: 'Other Kent towns, other projects',
    html: 'Continue to <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-folkestone">Folkestone</a> (merging search rankings of a novel) or <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ashford">Ashford</a>. You can reach every page from the <a class="cg-inline-link" href="/coding-classes-in-kent">Kent page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Open WhatsApp'
  },

  footerHeading: 'Tunbridge Wells and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rtw .cg-hero-grid { align-items: end; gap: clamp(1.25rem, 3.1vw, 2.45rem); }
.cg-root.cg-rtw .cg-hero h1 { font-weight: 745; letter-spacing: -0.028em; line-height: 1.05; }
.cg-root.cg-rtw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-rtw .cg-eyebrow { letter-spacing: 0.12em; font-weight: 690; font-size: 0.82rem; }
.cg-root.cg-rtw .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.022em; }
.cg-root.cg-rtw .cg-table caption { font-weight: 560; text-align: left; font-size: 0.92rem; }
.cg-root.cg-rtw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rtw .cg-table th { font-weight: 700; border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-rtw .cg-ladder-col { border-top: 5px solid var(--cg-accent); border-radius: 6px 6px 0 0; padding-top: 0.6rem; }
.cg-root.cg-rtw .cg-callout { border-left-width: 2px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Tunbridge Wells (E07000116), Census 2021 TS001 usual residents 115,311. ONS 2021 BUA (published): Royal Tunbridge Wells 51,220. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the BUA: High Brooms, Ramslye (TN4); Hawkenbury, Sherwood, Broadwater Down, Camden Park, Sandown Park (TN2). Southborough, Rusthall, Pembury and Paddock Wood are separate ONS built-up areas.',
    localProject: 'Census 2021 TS017 and TS006 for the 160 output areas of the Royal Tunbridge Wells BUA; our sums 22,238 households, 7,280 one-person (32.74%); density 121 to 23,491 per sq km. Dense = density at or above a cut-off. Cut-off 2,000: dense 139 areas 33.57%, the rest 21 areas 27.47%. Cut-off 10,000: dense 32 areas 34.83%, the rest 128 areas 32.22%. The 107 relabelled areas: 14,786 households, 33.20%. Town unchanged. All 66 cut-off pairs from 1,000 to 12,000 tried: both up in 47, opposite in 19; the search is disclosed on the page. Lesson family: Will Rogers phenomenon, reclassification moving both group averages.',
    requiredMentions: [
      '51,220',
      '115,311',
      'High Brooms',
      'Hawkenbury',
      'Ramslye',
      'Broadwater Down',
      'Camden Park',
      'Sandown Park',
      'Will Rogers phenomenon',
      '22,238'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 household size, TS006 population density and TS001 via Nomis; ONS 2021 built-up area populations and output area lookups.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Feinstein A. R., Sosin D. M. and Wells C. K. (1985), the paper that named the Will Rogers phenomenon, New England Journal of Medicine 312(25), 1604 to 1608.', url: 'https://doi.org/10.1056/NEJM198506203122504' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Tunbridge Wells.', url: 'https://api.postcodes.io/places?q=High%20Brooms' }
    ],
    rejectedClaims: [
      'That the effect appears for every choice of cut-off: it appeared in 47 of 66 pairs, and the page says so.',
      'Any reason why households in denser areas are smaller: not tested; not claimed.',
      'A verbatim version of the Will Rogers joke: not checked against a source, so it is described and not quoted.',
      'The Pantiles, the spring and the royal prefix: not read from a source; not claimed.',
      'That Southborough, Rusthall or Pembury are inside the town figure: the ONS counts them separately; left out.',
      'Sterling prices: none.'
    ]
  }
};
