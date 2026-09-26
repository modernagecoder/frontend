'use strict';
// South Yorkshire (cg- county index, UK cluster Phase 7, row 248). Four metropolitan boroughs: Sheffield, Doncaster,
// Rotherham, Barnsley. Spine: what does a simple model say a snooker break is worth, and why is it wrong? Sources read
// raw 26 September 2026: World Snooker Tour, 147s page: "A 147 is snooker's perfect break. The player must pot all 15
// reds with blacks, then clear the colours." WST article "The Crucible Maximums" (by David Hendon, embedded content):
// "There are few greater moments in snooker than a 147 at the Crucible"; the Crucible is "the home of the World
// Championship"; "In 46 years at the Crucible, with its many thousands of frames played, there have only been 14 maximum
// breaks, compiled by a total of ten players." Sheffield Theatres about page: "We're the world-famous Crucible, a
// Sheffield landmark with a distinctive stage".
// Our model (scratchpad syk/break.py): every pot succeeds with probability p, independently; red then black fifteen
// times, then the six colours (36 pots, 147 points). Exact results: p 0.80 expected 14.7, median 9, 147 in 1 of 3,081;
// p 0.90 expected 33.9, median 24, 147 in 1 of 44 (2.25 per cent), 46.9 per cent of breaks under 20; p 0.95 expected
// 63.2, median 49, 147 in 1 of 6; p 0.98 expected 102.0, median 134, 147 about half the time. Simulation check at 0.9:
// mean 33.8, 2.23 per cent 147s. Raising p from 0.90 to 0.95 makes a 147 seven times likelier.
// Lesson family: expected value vs median of a skewed outcome, compounding probability, and checking a model's
// assumptions against reality; screened (snooker, Crucible: 0 hits; expected value appears once in Glasnevin for
// record counts, a different lesson).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,375,006); ONS built-up areas checked
// against our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SOUTH YORKSHIRE', blurb: 'Sheffield, Doncaster, Rotherham and Barnsley, and a Crucible lesson on what a snooker break is worth on average, and why the average misleads.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-south-yorkshire',
  code: 'syk',
  accent: '#2A4C38',
  accentRationale: 'South Yorkshire: a baize green from the solver (7.73:1 on the darkest paper tint), bluer and deeper than the Nottinghamshire and Lincolnshire greens',
  pageType: 'governorate',
  place: {
    name: 'South Yorkshire',
    eyebrow: 'South Yorkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Yorkshire and the Humber' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Sheffield', href: '/best-coding-class-in-sheffield' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South Yorkshire',
  title: 'Coding Classes in South Yorkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across South Yorkshire, from Sheffield, Doncaster, Rotherham and Barnsley to Wombwell, Maltby and Mexborough.',
  ogDescription: 'Coding classes for all of South Yorkshire, and a Crucible project: work out the expected value of a snooker break in Python, then find why the model promises far too many 147s.',
  twitterDescription: 'South Yorkshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for South Yorkshire',
    description: 'Ability-placed online coding, Python, probability and mathematics for children, teenagers and adults across South Yorkshire, taught live in English.'
  },

  h1: 'Coding classes in South Yorkshire',
  capsuleQ: 'What are the best coding classes in South Yorkshire?',
  capsule: 'South Yorkshire is four boroughs, Sheffield, Doncaster, Rotherham and Barnsley, and the 2021 Census counted 1,375,006 people across them, by our addition of the four totals. The Sheffield built-up area alone passes half a million, with Doncaster, Rotherham and Barnsley next. We teach every class live over video from India, and each learner is placed by the level they have reached, whatever their age. Coding, Python, probability and maths are open to anyone aged 6 to 67, either in a class of five to ten or one-to-one. The South Yorkshire project is set at the Crucible in Sheffield. Lesson one is free of charge. Carry on and it is USD 100 per month in a group, or USD 150 per month for one-to-one.',
  lead: 'World Snooker Tour calls the Crucible in Sheffield the home of the World Championship, and describes a 147, all fifteen reds with blacks and then every colour, as snooker\'s perfect break. It also notes that in 46 years at the Crucible, with many thousands of frames, there had been only 14 maximum breaks. That fact is a gift for a young programmer, because a simple model of a snooker break gives a very different answer. This page\'s project builds that model in Python, works out the expected value of a break and the chance of a 147, and then uses the gap between the model and the Crucible\'s real record to find what the model gets wrong.',
  wa: 'Hello Modern Age Coders, we are in South Yorkshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for South Yorkshire',
    h2: 'Where South Yorkshire learners begin',
    intro: 'An eight-year-old in Barnsley who keeps score in every game, a Year 9 in Rotherham curious about odds, a Year 12 in Sheffield taking statistics seriously, and an adult in Doncaster who wants to understand risk at work. Each starts with a free lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including chance, averages and games simulated thousands of times.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built step by step, including expected value and why averages can mislead.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI tools for adults who do not code yet, with a clear head for averages, odds and risk.' }
    ]
  },

  sections: [
    {
      id: 'south-yorkshire', tint: '', eyebrow: 'South Yorkshire in figures',
      h2: '1,375,006 people in four boroughs',
      intro: 'Borough counts are 2021 Census figures from Nomis; the total is our sum. Town figures are ONS built-up areas, each checked against our own count of census output areas.',
      body: [
        { kind: 'table', caption: 'South Yorkshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Sheffield', '500,535', 'Adwick le Street', '18,325'],
          ['Doncaster', '87,455', 'Wath upon Dearne', '16,960'],
          ['Rotherham', '71,535', 'Wombwell', '16,765'],
          ['Barnsley', '71,405', 'Maltby', '16,310'],
          ['Wickersley and Bramley', '24,655', 'Swinton', '15,910'],
          ['Chapeltown and High Green', '22,180', 'Mexborough', '15,555']
        ] },
        { kind: 'p', text: 'Sheffield borough had 556,521 residents, Doncaster 308,106, Rotherham 265,807 and Barnsley 244,572. The ONS Sheffield area spills a little into Rotherham, and below the big four comes a long list of towns of roughly fifteen to twenty-five thousand people, including Rawmarsh, Hoyland, Darton, Armthorpe, Thorne and Rossington. Every published figure matches our own count to within a few people. School holidays differ between the four councils and the academy trusts; we have not read their calendars, so each family tells us its own dates.' },
        { kind: 'callout', h3: 'Two city pages already', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> page fits trend lines to a record, and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a> is about searching cleverly. This page is for the whole county, Rotherham and Barnsley included.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South Yorkshire project',
      h2: 'What is a snooker break worth?',
      intro: 'A model with one number in it, the arithmetic of chance, and a reality check from the Crucible.',
      body: [
        { kind: 'p', text: 'The model is deliberately simple. The player pots each ball with the same chance p, every shot independent of the last, and always takes red then black fifteen times before clearing the six colours: 36 pots worth 147 points. The break ends at the first miss. The chance of reaching the tenth pot is p multiplied by itself ten times, so the expected value of a break is the value of each ball times the chance of getting that far, added up. The learner writes it as a short loop, then checks it with 200,000 simulated breaks, which agree.' },
        { kind: 'table', caption: 'Our model: exact results for four levels of skill, 26 September 2026', head: ['Chance of each pot', 'Expected break', 'Middle break (median)', 'Chance of a 147'], rows: [
          ['80 per cent', '14.7', '9', '1 in 3,081'],
          ['90 per cent', '33.9', '24', '1 in 44'],
          ['95 per cent', '63.2', '49', '1 in 6'],
          ['98 per cent', '102.0', '134', 'About 1 in 2']
        ] },
        { kind: 'p', text: 'Two lessons come straight out of the table. First, the average and the typical break are different things. At 90 per cent the expected break is 33.9, but half of all breaks are 24 or less, and nearly half are under 20: a few long breaks pull the average up. At 98 per cent the pattern flips, and the middle break is higher than the average. Second, chances that multiply compound fast. Raising the pot rate from 90 to 95 per cent makes a 147 seven times more likely, because the improvement is applied 36 times over.' },
        { kind: 'p', text: 'Now the reality check. The model says a player potting 95 per cent of the time should make a 147 in about one break in six. Yet WST notes only 14 maximums in 46 years at the Crucible, across many thousands of frames played by the top professionals. The model is not just a little out; it is wrong by a huge margin. That is its most useful result, because it points straight at the assumptions: shots are not equally hard, the black is not always available after a red, the cue ball has to be placed for the next shot, and players choose safety instead of risk. A model that fails loudly teaches more than one that nobody checks.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Roll a die for each pot, stop at the first six, add up the points, and compare the class\'s average break with the middle one.' },
          { h3: 'Ages 12 to 15', p: 'Write the expected-value loop in Python for different pot rates and plot how the chance of a 147 changes.' },
          { h3: 'Ages 15 and up', p: 'Compute the full distribution exactly, confirm it by simulation, then add a harder shot type and see how far the 147 rate falls.' }
        ] },
        { kind: 'callout', h3: 'What is WST\'s and what is ours', p: 'The description of a 147 and the Crucible maximum figures come from World Snooker Tour\'s website. The model, its pot rates and every number in the table are ours, invented for teaching; they do not describe any real player.' }
      ]
    },
    {
      id: 'crucible', tint: 'deep', eyebrow: 'Why the Crucible',
      h2: 'A Sheffield theatre and snooker\'s perfect break',
      intro: 'The South Yorkshire link, in the words of the people who run it.',
      body: [
        { kind: 'table', caption: 'The Crucible and the 147, from its own sources', head: ['Source', 'What it says'], rows: [
          ['Sheffield Theatres', 'The world-famous Crucible is a Sheffield landmark with a distinctive stage.'],
          ['World Snooker Tour', 'The Crucible is the home of the World Championship.'],
          ['World Snooker Tour', 'A 147 means potting all 15 reds with blacks, then clearing the colours.'],
          ['World Snooker Tour', 'In 46 years at the Crucible there had been only 14 maximum breaks, by ten players.']
        ] },
        { kind: 'p', text: 'Snooker is a lovely way into probability because every shot is a chance and every break a chain of them. The same arithmetic runs through product reliability, where a device fails if any one part fails, through medicine, where several tests must all be passed, and through any process with many steps that must all go right. A South Yorkshire student who has built the model and caught its mistake knows both how to calculate with chances and how far to trust the answer.' },
        { kind: 'p', text: 'We have no link with World Snooker Tour, Sheffield Theatres or any South Yorkshire council. Their facts are theirs; the model and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a> have their own pages; <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a> and <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a> are south, <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From keeping score to reasoning about chance',
    intro: 'The free lesson settles the starting point. Age is a hint; skill decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Scores and dice', p: 'Block coding games with scores, dice and turns, where children first see chance at work.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Games in Python', p: 'Typed Python that plays a game many times and counts what happens.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Probability properly', p: 'Expected value, distributions and simulation, from GCSE ideas through to A level statistics.', courses: ['statistics-probability-maths-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Risk and data', p: 'Data, statistics and AI tools for adults who weigh odds and risks in their work.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and models of chance',
    h2: 'An AI can compute an expected value instantly. Will it check the model against the world?',
    intro: 'The arithmetic is easy. Noticing that the model disagrees with reality is the skill.',
    p1: 'Ask an assistant for the chance of a 147 if a player pots 95 per cent of shots, and it will multiply correctly and answer about one in six. Unless asked, it will not set that beside the Crucible record of 14 maximums in 46 years and conclude that the assumption of equal, independent shots must be badly wrong. The answer is correct for the model and useless for the game.',
    p2: 'A South Yorkshire student who has made that comparison will ask the same of any number an AI produces: what does the model assume, and does its answer match what actually happens? That habit protects against confident nonsense in forecasts, risk scores and predictions of every kind.',
    closer: 'For a teenager in South Yorkshire, learning to code in 2026 means being able to put any model up against the real world before trusting it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'From the Dearne to the Don, straight from home',
    intro: 'Crossing South Yorkshire for a weekly class in the evening rush takes time many families do not have. Online lessons give it back.',
    cells: [
      { h3: 'Lessons at your table', p: 'A semi in Wickersley, a terrace in Wombwell, a flat in Doncaster. The teacher and learner share a screen, and the learner writes the code.' },
      { h3: 'School words we use', p: 'Whether it is a Year 7 homework project or an A level statistics topic, the teacher uses the terms South Yorkshire pupils hear in class, in English.' },
      { h3: 'First lesson free', p: 'A proper lesson, then honest advice on level and course. No card details are asked for.' },
      { h3: 'Your level, your group', p: 'Everyone in a group of five to ten is working at the same point, wherever in the world they log in from.' },
      { h3: 'Breaks to match school', p: 'Two lessons a week is typical, with pauses for your school\'s holidays.' },
      { h3: 'Held in UK time', p: 'Slots are fixed in UK time and ignore the clock changes on your side; the teacher, running on India time several hours ahead, adjusts.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even in a borough of a quarter of a million, five learners at one stage free on the same evening are hard to find. Level-based groups let a learner in Thorne or Hoyland join the right class.' }
  },

  fees: {
    h2: 'Fees in South Yorkshire',
    intro: 'Maltby or Mexborough, the fee is the same, as it is in every country we teach apart from India.',
    first: 'A full lesson of genuine work, finishing with advice on level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month with a teacher of your own.',
    closer: 'All prices are set in US dollars, with none in pounds. You are only billed once the free lesson has led to an agreed course and a fixed weekly slot. How pauses, missed classes and swaps between group and private teaching work is spelled out on the pricing page.'
  },

  reviewsH2: 'Google reviews, from families like yours',

  book: {
    h2: 'Book a free South Yorkshire lesson',
    intro: 'Send the learner\'s age or year and one or two interests. A first lesson might be a dice game in Scratch, a Python scorekeeper, or the snooker model on this page.',
    success: 'Thank you. Your South Yorkshire request is in.'
  },

  faq: {
    h2: 'South Yorkshire questions',
    intro: 'The county, the snooker project and the practical side.',
    items: [
      { q: 'How many people live in South Yorkshire?', a: 'Add the four boroughs together, Sheffield 556,521, Doncaster 308,106, Rotherham 265,807 and Barnsley 244,572, and you get 1,375,006 usual residents in the 2021 Census. The borough figures are the ONS\'s on Nomis; the total is our addition.' },
      { q: 'What are the largest towns in South Yorkshire?', a: 'By ONS built-up area: Sheffield 500,535, Doncaster 87,455, Rotherham 71,535, Barnsley 71,405 and Wickersley and Bramley 24,655.' },
      { q: 'What is the snooker project?', a: 'Learners model a break where every pot has the same chance, compute its expected value and the chance of a 147, check it by simulation, and compare it with the Crucible\'s real record to find the model\'s wrong assumptions.' },
      { q: 'What is expected value?', a: 'The average result you would get over a very large number of tries, found by multiplying each outcome by its chance and adding up. It is not the same as the typical result when outcomes are lopsided.' },
      { q: 'Why does the Crucible matter here?', a: 'World Snooker Tour calls it the home of the World Championship and records only 14 maximum breaks there in 46 years, a real figure that shows how far a simple model can be from reality.' },
      { q: 'Are classes held in South Yorkshire?', a: 'No. No. Everything happens live over video, so a learner in Thorne has the same class as one in Sheffield.' },
      { q: 'Is there an age limit?', a: 'We teach from 6 up to 67. Blocks and games come first for the youngest, typed Python tends to start between eight and ten, teenagers can go deep into statistics and data science, and adults usually focus on data skills. The free lesson decides where each person begins.' },
      { q: 'Do you teach statistics and probability?', a: 'Yes, from first ideas to A level topics, using code to run experiments. We help learners understand; we do not promise grades.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Staying on costs USD 100 monthly in a small group or USD 150 monthly with a private teacher. There is nothing to pay to join and no minimum commitment.' },
      { q: 'Do you break for South Yorkshire school holidays?', a: 'If you want us to. Sheffield, Doncaster, Rotherham and Barnsley councils and academy trusts publish dates, and we plan around yours.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages around South Yorkshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a>, then <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a>, <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Yorkshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/best-coding-class-in-doncaster', label: 'Doncaster' }
  ],

  personalityCss: `
.cg-root.cg-syk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-syk .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.03; }
.cg-root.cg-syk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-syk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-syk .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.019em; }
.cg-root.cg-syk .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-syk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-syk .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-syk .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-syk .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Yorkshire: metropolitan boroughs Sheffield, Doncaster, Rotherham, Barnsley. ONS Census 2021 TS001 via Nomis: Sheffield 556,521; Doncaster 308,106; Rotherham 265,807; Barnsley 244,572; our sum 1,375,006. ONS built-up areas (published; agree with our OA sums): Sheffield 500,535 (Rotherham, Sheffield); Doncaster 87,455; Rotherham 71,535; Barnsley 71,405; Wickersley and Bramley 24,655; Chapeltown and High Green 22,180; Rawmarsh 18,895; Adwick le Street 18,325; Wath upon Dearne 16,960; Wombwell 16,765; Maltby 16,310; Swinton 15,910; Mexborough 15,555; Hoyland 15,535; Darton 15,025; Armthorpe 14,160; Thorne 12,305. World Snooker Tour 147s: "A 147 is snooker\'s perfect break. The player must pot all 15 reds with blacks, then clear the colours." WST, The Crucible Maximums (David Hendon): "a 147 at the Crucible"; "the home of the World Championship"; "In 46 years at the Crucible, with its many thousands of frames played, there have only been 14 maximum breaks, compiled by a total of ten players." Sheffield Theatres: "We\'re the world-famous Crucible, a Sheffield landmark with a distinctive stage".',
    localProject: 'Expected value of a snooker break under an independent-pot model (ours): sequence red/black x 15 then yellow to black, 36 pots, 147. E = sum v_k p^k. p 0.80: 14.7, median 9, 147 1 in 3,081, 73.8 per cent under 20; p 0.90: 33.9, median 24, 1 in 44 (2.25 per cent), 46.9 per cent under 20; p 0.95: 63.2, median 49, 1 in 6; p 0.98: 102.0, median 134, 48.3 per cent. Simulation (200,000, p 0.9): mean 33.8, 2.23 per cent. 0.95 vs 0.90 raises 147 chance 7.0 times. Reality check: 14 Crucible maximums in 46 years contradicts 1 in 6 at 95 per cent, exposing independence and equal-difficulty assumptions. Page labels model as ours. AI angle: correct arithmetic on a wrong model. Lesson family: expected value vs median, compounding probability, model assumptions vs reality.',
    requiredMentions: [
      '1,375,006',
      'Crucible',
      'Wickersley and Bramley',
      'Chapeltown and High Green',
      'Rawmarsh',
      'Adwick le Street',
      'Wath upon Dearne',
      'Wombwell',
      'Maltby',
      'Hoyland',
      '1 in 44'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the four South Yorkshire boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for South Yorkshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'World Snooker Tour: what a 147 is.', url: 'https://www.wst.tv/147s' },
      { claim: 'World Snooker Tour: The Crucible Maximums (home of the World Championship; 14 maximums in 46 years).', url: 'https://www.wst.tv/147s/thecruciblemaxiums' },
      { claim: 'Sheffield Theatres: the Crucible as a Sheffield landmark.', url: 'https://www.sheffieldtheatres.co.uk/about' }
    ],
    rejectedClaims: [
      'Names of the players who made Crucible 147s and the song lyric quoted in the WST article: not needed, and the lyric is not reproduced.',
      'The year the World Championship moved to the Crucible: not stated explicitly on the pages read, so no year is given.',
      'Real pot success rates of professional players: not read; the page states the pot rates are invented.',
      'Steel, Magna and mining history facts: not researched for this page, not claimed.',
      'South Yorkshire school term dates: none read.',
      'Named South Yorkshire schools: none named.'
    ]
  }
};
