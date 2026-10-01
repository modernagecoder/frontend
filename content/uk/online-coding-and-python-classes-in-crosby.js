'use strict';
// Crosby (cg- town page, UK cluster Phase 10, towns band B, row 511). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you pick one item at random when the
// items are not equally likely, and do it fast? (Alias method for weighted sampling.)
// Data (read 30 September 2026): Census 2021 TS001 usual residents by output area for Sefton (Nomis NM_2021_1, TYPE150)
// and the ONS OA21 to BUA22 lookup; the 169 output areas assigned to the built-up area "Crosby (Sefton)".
// Our run (scratchpad csb/alias.py, seed 2026): 169 areas, counts from 129 to 546, mean 297.1. The counts are used as
// sampling weights; their sum (50,218) is our own addition and is NOT printed as a population: the ONS published
// built-up area figure is 50,215.
// Task: draw the output area of a randomly chosen resident, 1,000,000 times.
//   Wrong way (choose an area uniformly): the largest area is drawn 5,879 times per million where 10,873 are due; the
//   smallest 5,842 where 2,569 are due.
//   Linear scan of running totals: 86.3 comparisons per draw on average (75.3 if areas are sorted largest first).
//   Binary search (bisect) on running totals: 7.51 comparisons per draw.
//   Alias table (Vose's construction, 168 pairing steps to build): one random column plus one comparison per draw.
//   Check per million draws: largest area expected 10,873, alias gave 10,899; smallest expected 2,569, alias 2,539.
//   Chi-square against the true shares on 168 degrees of freedom: alias 184.6, bisect 166.1, linear 166.9; uniform 48,808.
//   A random resident's area holds 310.0 people on average; a random area holds 297.1 (size-biased sampling).
// Lesson family: alias method / weighted random sampling. Screened: "alias method" 0 hits in content/, claims and spent
// lists; claimed in claims.txt. Merseyside county page = specification to tests; Bootle = learning curves; Southport =
// byte-pair encoding; Kidderminster = importance sampling (estimating, a different use of weights).
// Place facts: Sefton TS001 279,233. ONS 2021 BUA (published): Crosby (Sefton) 50,215. postcodes.io (Sefton): Great
// Crosby (suburban area, L23), Little Crosby (village, L23), Blundellsands (suburban area, L23), Waterloo (suburban
// area, L22), Thornton (suburban area, L23), Hightown (village, L38).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CROSBY', label: 'Crosby', blurb: 'Online coding and Python classes for Crosby, with a project on choosing fairly at random when the options are not equally likely.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-crosby',
  code: 'csb',
  accent: '#475569',
  accentRationale: 'Crosby: a cool slate grey-blue (7.58:1 on white), chosen by hand as a neutral no recent page has used',
  pageType: 'city',
  place: {
    name: 'Crosby',
    eyebrow: 'Crosby, Sefton, Merseyside',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Sefton' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Crosby, Merseyside',
  title: 'Online Coding and Python Classes in Crosby | AI, Ages 6 to 67',
  description: 'Python, coding, AI and vibe coding taught live online for Crosby, Blundellsands, Waterloo, Thornton and Hightown learners aged 6 to 67. Free first lesson.',
  ogDescription: 'Online coding and Python classes for Crosby, with a project that samples fairly from unequal options using the alias method.',
  twitterDescription: 'Crosby coding and Python classes online, with AI and vibe coding, for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Crosby',
    description: 'Online Python, coding, AI, vibe coding and maths for children, teenagers and adults in Crosby and Sefton, taught live through small experiments on real census data.'
  },

  h1: 'Online coding and Python classes in Crosby',
  capsuleQ: 'Which are the best online coding and Python classes in Crosby?',
  capsule: 'Crosby is a town in the borough of Sefton, and its built-up area had 50,215 usual residents in the 2021 census on the Office for National Statistics count. The postcode gazetteer lists Great Crosby, Blundellsands, Waterloo and Thornton as suburban areas of Sefton, and Little Crosby and Hightown as villages. From any of them, a learner aged six to 67 can study Python, coding, AI, vibe coding and maths with us by live video. Our tutors are based in India. Some learners have a tutor to themselves; others share one with five to ten people at the same stage. We want learners to understand an idea well enough to do it by hand, and then to code it. A free first lesson comes before any decision, and we close it with a course suggestion. The Crosby project is about chance: a Python program has to pick a resident\'s census area at random, fairly, a million times, and we count how much work three different methods need. Beyond the trial, a place in a group is USD 100 a month and a tutor of your own is USD 150 a month.',
  lead: 'Choosing at random is easy when every option is equally likely: roll a die. It gets harder when the options have different weights. A game drops rare items less often than common ones. A language model picks its next word from thousands of candidates with very unequal chances. A survey wants to pick households so that big streets are not under-counted. The slow way to make a weighted choice is to walk down the list adding up weights until you pass a random number. Python\'s bisect module does it faster. A lovely piece of cleverness called the alias method does it in a single step, however long the list. This project tries all three on the census areas of Crosby.',
  wa: 'Hello Modern Age Coders, I am looking for a free Python or coding lesson for a learner in Crosby.',

  picks: {
    eyebrow: 'Courses to start with',
    h2: 'Python and coding routes for Crosby learners',
    intro: 'Four ways in, depending on age. Each starts with a live lesson at no charge, with no card requested.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'First real Python for children, with small AI projects and plenty of dice, coins and random numbers.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think before you code: fair choices, counting steps and spotting a quicker method.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The full Python course for teenagers, lists to algorithms, with the Crosby sampling experiment inside.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Data structures and algorithms with the costs counted, for university, interviews or work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Crosby on the record',
      h2: 'Crosby, Blundellsands, Waterloo, Thornton and Hightown',
      intro: 'The published census counts, and how the gazetteer describes the places around the town.',
      body: [
        { kind: 'table', caption: 'Crosby and Sefton, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Crosby built-up area', '50,215'],
          ['Sefton borough', '279,233']
        ] },
        { kind: 'p', text: 'Each figure is published in its own right. The borough count takes in several other towns, so the two rows are not parts of one sum. postcodes.io records Great Crosby, Blundellsands and Thornton as suburban areas in the L23 district, Waterloo as a suburban area in L22, Little Crosby as an L23 village and Hightown as a village in L38, all within Sefton. Crosby schools teach the national curriculum for England. We place children by school year, from Year 2 to Year 13, and can keep pace with GCSE and A level computer science and maths.' },
        { kind: 'callout', h3: 'More Merseyside pages', p: 'Try <a class="cg-inline-link" href="/coding-classes-in-merseyside">coding classes in Merseyside</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-bootle">Bootle</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-southport">Southport</a>. For the thinking behind our teaching, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Crosby project',
      h2: 'Weighted random choice and the alias method',
      intro: 'Pick a Crosby resident at random. Which small census area are they in?',
      body: [
        { kind: 'p', text: 'The census divides the country into output areas, small patches of a few streets each. The Crosby built-up area is made of 169 of them, and the 2021 count of residents in each one runs from 129 to 546. The learner\'s job is to write a Python function that returns the area of a randomly chosen resident. An area with 546 people should come up more than four times as often as one with 129. We use the area counts only as weights. Their sum is our own working figure, not an official population; the published figure for the town is the 50,215 above.' },
        { kind: 'p', text: 'The first attempt most people write is wrong: pick one of the 169 areas with equal chance. Over a million draws that gave the largest area 5,879 picks when its fair share is 10,873, and gave the smallest 5,842 when it is due 2,569. Every area is treated alike, so residents of crowded areas are under-counted. The fix is to weight the choice, and there are three ways to do it.' },
        { kind: 'table', caption: 'Three correct ways to draw a weighted random area, 169 Crosby output areas, 1,000,000 draws each (our Python count)', head: ['Method', 'Comparisons per draw', 'Set-up work'], rows: [
          ['Walk down the running totals', '86.3 on average', 'One pass to add up'],
          ['Binary search the running totals (bisect)', '7.51 on average', 'One pass to add up'],
          ['Alias table', '1, always', '168 pairing steps']
        ] },
        { kind: 'p', text: 'The walk is the obvious method: draw a random number up to the total and step through the list until the running total passes it, 86.3 comparisons on average. Sorting the areas largest first only trims that to 75.3, because the areas are all much the same size. Binary search halves the list each time and needs 7.51. The alias method changes the picture. Imagine 169 equal columns, one per area. Areas with more than the average spill their extra into the columns of areas with less, until every column is full and holds at most two areas: its owner and one alias. Building that table took 168 pairing steps. After that, a draw is one random column and one comparison to decide between owner and alias, no matter how many areas there are.' },
        { kind: 'p', text: 'Fast is no use if it is unfair, so the learner checks. Per million draws the largest area should appear 10,873 times and the alias table gave 10,899; the smallest should appear 2,569 times and got 2,539. A chi-square test across all 169 areas scored 184.6 for the alias table and 166.1 for binary search, both ordinary values for 168 degrees of freedom, against 48,808 for the wrong uniform method. One more result surprises people: the area of a random resident holds 310.0 people on average, while a random area holds 297.1. Sampling by person tilts you towards bigger areas.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make a spinner with unequal slices, then a fair-looking one with two colours per slice, and compare tallies.' },
          { h3: 'Ages 11 to 15', p: 'Write the running-total walk in Python, count its comparisons, then swap in bisect.' },
          { h3: 'Ages 15 and up', p: 'Build the alias table, prove each column sums to one share, and test a million draws for fairness.' }
        ] },
        { kind: 'callout', h3: 'About the data', p: 'Census 2021 output-area counts are from the Office for National Statistics through Nomis, read 30 September 2026, under the Open Government Licence. The sampling methods, the comparison counts and the checks are our own work with a fixed random seed; a different seed would move the tallies slightly.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Randomness inside AI',
      h2: 'What weighted sampling has to do with AI, vibe coding and agents',
      intro: 'Each word a language model writes is usually a weighted random draw.',
      body: [
        { kind: 'table', caption: 'From the Crosby draws to AI systems', head: ['In the Crosby experiment', 'In AI and software'], rows: [
          ['Uniform choice gave 5,879 where 10,873 were due', 'A plausible shortcut can be quietly biased'],
          ['The walk needed 86.3 comparisons', 'The first method that works may not scale'],
          ['The alias table needed 1', 'Set-up work can buy very fast answers'],
          ['Tallies were tested against fair shares', 'Random code needs a statistical test, not a glance'],
          ['A fixed seed made runs repeatable', 'Reproducible randomness makes bugs findable']
        ] },
        { kind: 'p', text: 'A large language model gives a score to every possible next token, turns the scores into probabilities and then, in its usual settings, draws one at random according to those probabilities. That is the Crosby task with tens of thousands of options in place of 169, repeated for every word. Training data is sampled with weights too, and so are the moves in many game-playing programs. In vibe coding, where you describe a program in plain English and an AI writes it, a request for "a random choice" may come back as the uniform version, which runs without error and gives unfair results. Learners who have counted the tallies themselves know to ask for weights and to test the output. An AI agent that samples options or retries tasks needs the same care. We introduce agent building once a learner\'s Python is secure, generally in the later teenage years or as an adult, and we teach Copilot Studio agents only in one-to-one lessons. Further reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a>.' },
        { kind: 'p', text: 'The Office for National Statistics, Nomis and postcodes.io have no link to Modern Age Coders. Their open data made the project possible; the sums and conclusions are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route up',
    h2: 'Spinners first, then Python, then algorithms',
    intro: 'School year gives us a first guess at the level. One free lesson settles it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Fair and unfair games, tallies and patterns, on paper and in Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'First Python', p: 'Typed code from day one, with an AI helper the child learns to question.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Python in depth', p: 'Lists, random, bisect and testing, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Efficient methods, probability and machine learning for study or a career move.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'What is the alias method, and how does AI pick its next word?',
    intro: 'The alias method is a way of drawing a random item from a weighted list in one step by first rearranging the weights into equal columns that each hold at most two items, and a language model usually picks its next word by just such a weighted random draw, over probabilities computed from its scores.',
    p1: 'Across 169 Crosby output areas, the running-total walk took 86.3 comparisons per draw, binary search 7.51 and the alias table one.',
    p2: 'The careless uniform version handed the largest area 5,879 picks per million where it should have had 10,873, and nothing in the program complained.',
    closer: 'Seeing that for themselves is why Crosby teenagers who code can still check an AI\'s work in 2026 instead of trusting it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'What a Crosby lesson looks like',
    intro: 'We teach by video call. A computer with a camera and microphone is all a learner needs, plus a spot at home where they can concentrate.',
    cells: [
      { h3: 'Hands on keys', p: 'The learner writes the code on a shared screen while the tutor guides with questions.' },
      { h3: 'Try before deciding', p: 'A complete free lesson lets us see the learner at work and recommend a course.' },
      { h3: 'No card for the trial', p: 'Booking it needs a name, an age and a phone number.' },
      { h3: 'Same-level groups', p: 'Classes of five to ten, matched by stage and joined from all over the UK.' },
      { h3: 'Twice a week in term', p: 'With breaks for Sefton school holidays when you let us know the dates.' },
      { h3: 'Fixed UK times', p: 'When clocks go forward or back, our tutors adjust and your slot does not.' }
    ],
    spec: { title: 'Why we teach online', p: 'On a shared screen the tutor sees every keystroke, and a national pool of learners lets us form classes at one precise level.' }
  },

  fees: {
    h2: 'Crosby lesson fees',
    intro: 'Learners anywhere outside India pay the same international rates.',
    first: 'The opening lesson is free and complete, with course advice at the end.',
    group: 'Five to ten learners in a class, roughly eight lessons per month.',
    private: 'One-to-one with a tutor, roughly eight lessons per month.',
    closer: 'Fees are stated in US dollars and we give no price in pounds. Nothing is charged until the trial is done and you have settled on a course and a time. See the pricing page for holiday breaks, absences and switching format.'
  },

  reviewsH2: 'Google reviews from Merseyside families and learners around the UK',

  book: {
    h2: 'Ask for a free Crosby lesson',
    intro: 'Let us know the learner\'s age or school year and one interest. A first lesson could be an unfair spinner to investigate, a Scratch game made with AI help, a few lines of Python, or a random draw to test.',
    success: 'Thank you. Your Crosby request has reached us.'
  },

  faq: {
    h2: 'Questions from Crosby',
    intro: 'Random choice, the census experiment, Python, vibe coding and how lessons are arranged.',
    items: [
      { q: 'What is the population of Crosby?', a: 'The ONS figure for the Crosby built-up area at the 2021 census is 50,215 usual residents. Sefton borough had 279,233.' },
      { q: 'Can I learn Python online from Crosby?', a: 'Yes. We teach Python live online to ages 6 to 67 in Crosby, Blundellsands, Waterloo, Thornton, Little Crosby and Hightown.' },
      { q: 'What is the alias method?', a: 'It is a technique for choosing a random item from a weighted list in constant time, using a prepared table in which each column holds at most two items.' },
      { q: 'What is weighted random sampling?', a: 'It is choosing at random so that each option\'s chance matches its weight, so an option with twice the weight is picked twice as often.' },
      { q: 'What did the Crosby project measure?', a: 'Over 169 output areas, a linear walk used 86.3 comparisons per draw, binary search 7.51 and the alias table one, with all three passing a fairness test.' },
      { q: 'Is vibe coding part of the course?', a: 'Yes. Learners ask an AI for code in plain English, then read it, test it and fix what is wrong.' },
      { q: 'When do learners start building AI agents?', a: 'After they can write Python confidently, usually older teenagers and adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Will this support GCSE or A level?', a: 'The programming, algorithms and probability all appear in those courses. We build understanding and never promise a grade.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. After that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can lessons pause for holidays?', a: 'Yes, send the dates and we will stop for them.' }
    ]
  },

  next: {
    eyebrow: 'Next',
    h2: 'Other towns in Merseyside',
    html: 'Each page has a project of its own: <a class="cg-inline-link" href="/ai-and-programming-classes-in-bootle">Bootle</a> (how much data a model needs), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-southport">Southport</a> (how AI splits words into tokens) and <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a>. There is more on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Crosby and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-csb .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-csb .cg-hero h1 { font-weight: 690; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-csb .cg-capsule { border-right: 4px solid var(--cg-accent); padding-right: 1rem; }
.cg-root.cg-csb .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; font-size: 0.8rem; }
.cg-root.cg-csb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-csb .cg-table caption { font-weight: 500; text-align: left; font-size: 0.92rem; }
.cg-root.cg-csb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-csb .cg-table th { border-bottom: 2px solid var(--cg-accent); text-transform: none; }
.cg-root.cg-csb .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-csb .cg-callout { border-radius: 12px; border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Sefton (E08000014), Census 2021 TS001 usual residents 279,233. ONS 2021 BUA (published): Crosby (Sefton) 50,215. English national curriculum, GCSE and A level. postcodes.io (Sefton): Great Crosby, Blundellsands, Thornton (suburban areas, L23), Waterloo (suburban area, L22), Little Crosby (village, L23), Hightown (village, L38).',
    localProject: 'Census 2021 TS001 by output area (Nomis), 169 output areas in the Crosby (Sefton) BUA per the ONS OA21 to BUA22 lookup, counts 129 to 546, mean 297.1, used as sampling weights (our sum 50,218 not printed as a population). 1,000,000 draws, seed 2026. Uniform choice (wrong): largest area 5,879 per million vs 10,873 due, smallest 5,842 vs 2,569. Linear scan of running totals 86.3 comparisons per draw (75.3 sorted largest first); bisect 7.51; alias table (Vose, 168 pairing steps) 1 comparison. Alias gave largest 10,899, smallest 2,539. Chi-square on 168 df: alias 184.6, bisect 166.1, uniform 48,808. Random resident area size 310.0 vs random area 297.1. Lesson family: alias method, weighted random sampling, size-biased sampling.',
    requiredMentions: [
      '50,215',
      'Blundellsands',
      'Little Crosby',
      '5,879',
      'Great Crosby',
      'alias method',
      '10,899',
      '7.51',
      '10,873',
      '169 output areas'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by output area, via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Open Geography Portal: Output Area (2021) to Built-up Area (2022) lookup for England and Wales.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Crosby and the named places in Sefton.', url: 'https://api.postcodes.io/places?q=Crosby' }
    ],
    rejectedClaims: [
      'Our sum of the 169 output-area counts (50,218) as a population figure: not printed; only the ONS published 50,215 is given.',
      'Timings in seconds: not reported, because the machine was busy; comparisons are counted instead.',
      'Any description of who lives in which output area: none; only headcounts are used, as weights.',
      'That language models use the alias method internally: not claimed; only that they make weighted random draws.',
      'That the listed places are districts of Crosby or close to it: not claimed; they are listed as recorded in Sefton.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
