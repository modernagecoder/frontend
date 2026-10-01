'use strict';
// Wythenshawe, Manchester (cg- district page, UK cluster Phase 9, row 458). Vibe coding and AI agents slug per the owner's
// rotation, with the how-to-think picks, FAQ and door links. Spine: can several rough rules, none of them reliable,
// label data as well as a person would? (weak supervision: labelling functions combined by a label model, against a
// plain majority vote).
// Data (read 30 September 2026): OpenStreetMap buildings in the box 53.375 to 53.410 N, 2.305 to 2.240 W (scratchpad
// g4/wys.json): 9,726 building outlines; 3,027 carry a specific type tag (2,858 homes, 169 anything else); 6,699 are
// tagged only "building=yes".
// Our run (scratchpad wys/ws.py). Seven rule agents, each votes "home", "other" or abstains. On the 3,027 typed buildings
// (share voted on / right when voting): footprint over 400 sq m -> other 5.4% / 75.8%; footprint 40 to 160 sq m -> home
// 77.9% / 99.4%; footprint under 25 sq m -> other 0.2% / 85.7%; has a name -> other 2.5% / 92.1%; shares a wall -> home
// 37.0% / 98.4%; within 15 m of a mapped shop or amenity point -> other 0.6% / 50.0%; more than 12 corners -> other
// 1.9% / 74.1%. Across all 9,726: 1,342 get no vote at all, 147 get conflicting votes.
// Scores on the 3,027: always home accuracy 94.4%, finds 0 of 169, balanced 50.0%; majority vote (ties and no votes ->
// home) 97.0%, 119 of 169, 41 false alarms, balanced 84.5%; label model (Dawid-Skene style EM, abstain as an outcome,
// never shown a tag) 95.7%, 144 of 169, 105 false alarms, balanced 90.8%.
// Lesson family: weak supervision / labelling functions / label model. Screened with rm.js: 0 hits; claimed.
// Place facts: no ward is named Wythenshawe, so NO Wythenshawe population is stated. Census 2021 TS001 wards: Sharston
// 17,446; Woodhouse Park 15,414; Baguley 16,064; Northenden 15,064 (never summed). postcodes.io: places Wythenshawe,
// Benchill, Sharston, Moss Nook (M22); Northern Moor, Baguley, Roundthorn (M23). Outcode ward lists M22: Northenden,
// Sharston, Woodhouse Park (+ wards of other councils); M23: Baguley, Northenden (+ others).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WYTHENSHAWE', label: 'Wythenshawe, Manchester', blurb: 'Vibe coding and AI agents classes for Wythenshawe in Manchester, with a project where seven small rule agents label 9,726 mapped buildings between them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester',
  code: 'wys',
  accent: '#A03A2A',
  accentRationale: 'Wythenshawe: a brick red (hand-picked for hue distance from other Phase 9 pages, contrast above 6:1)',
  pageType: 'city',
  place: {
    name: 'Wythenshawe',
    eyebrow: 'Wythenshawe, Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-manchester', name: 'Manchester' }],
  nav: [
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wythenshawe, Manchester',
  title: 'Vibe Coding and AI Agents Classes in Wythenshawe, Manchester',
  description: 'Vibe coding, AI agents, Python and thinking-skills lessons online for Wythenshawe, Benchill, Sharston and Baguley in Manchester, ages 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Wythenshawe, Manchester, with a weak supervision project: seven rough rules label 9,726 mapped buildings.',
  twitterDescription: 'Wythenshawe, Manchester: vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Wythenshawe, Manchester',
    description: 'Online vibe coding, AI agents, Python and maths for children, teenagers and adults in Wythenshawe and the M22 and M23 districts, taught live with thinking habits first.'
  },

  h1: 'Vibe coding and AI agents classes in Wythenshawe',
  capsuleQ: 'What are the best vibe coding and AI agents classes for Wythenshawe learners?',
  capsule: 'Wythenshawe is recorded by postcodes.io in the M22 postcode district of Manchester, alongside Benchill, Sharston and Moss Nook, with Baguley and Northern Moor in M23. We teach vibe coding, AI agents, Python, coding and maths to people of six through 67, live on video from India, whether alone with a tutor or among five to ten classmates of the same level. How to think comes before which tool to use, so that a learner can judge what an AI has produced instead of simply accepting it. You begin with a free lesson, after which we name the course we would choose. For the Wythenshawe project, learners write seven rough rules as tiny agents, let them vote on 9,726 mapped buildings, and find out whether a model that weighs the votes beats a simple show of hands. After the trial, groups are USD 100 per month and one-to-one is USD 150 per month.',
  lead: 'Machine learning is hungry for labelled examples, and labelling by hand is slow. A shortcut called weak supervision replaces the hand labelling with rules of thumb: "a very large building is probably not a house", "a building with a name is probably not a house". Each rule is wrong some of the time and silent most of the time. The interesting claim is that a pile of such rules, combined carefully, can produce labels good enough to train on. We put that claim to the test on the buildings that OpenStreetMap volunteers have drawn in and around Wythenshawe.',
  wa: 'Hello Modern Age Coders, please could we arrange a free vibe coding or AI lesson for a learner in Wythenshawe, Manchester?',

  picks: {
    eyebrow: 'Wythenshawe course picks',
    h2: 'Wythenshawe courses in thinking, vibe coding and AI agents',
    intro: 'One course for each age range. The first session of any of them is a free live lesson, arranged with no payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: writing a rule, finding where it breaks, and writing a better one.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an AI builds the Scratch game, the child is the tester.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects, including the seven rule agents of the Wythenshawe project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI from the inside, then agents that use tools and check each other.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wythenshawe, M22 and M23',
      h2: 'Wards in and around Wythenshawe',
      intro: 'No council ward carries the name Wythenshawe, so we quote no population for it. These are four Manchester wards in its two postcode districts, each figure published separately.',
      body: [
        { kind: 'table', caption: 'Four Manchester wards in M22 and M23, Census 2021 (ONS table TS001, via Nomis)', head: ['Ward', 'Usual residents'], rows: [
          ['Sharston', '17,446'],
          ['Baguley', '16,064'],
          ['Woodhouse Park', '15,414'],
          ['Northenden', '15,064']
        ] },
        { kind: 'p', text: 'Postcodes.io places Wythenshawe, Benchill, Sharston and Moss Nook in M22, and Northern Moor, Baguley and Roundthorn in M23. Both districts also reach into wards of neighbouring councils, which is one reason adding ward figures together would mislead. Local schools work to the English national curriculum; give us the term dates and lessons fit around them.' },
        { kind: 'callout', h3: 'Parent page and method', p: 'Wythenshawe sits under <a class="cg-inline-link" href="/best-coding-class-in-manchester">coding classes in Manchester</a>. Our reasons for teaching judgement ahead of tools are set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wythenshawe project',
      h2: 'Weak supervision: seven rule agents label 9,726 buildings',
      intro: 'Is this outline a home or something else? Nobody labels by hand; seven rules vote.',
      body: [
        { kind: 'p', text: 'The map holds 9,726 building outlines for the area. Volunteers have given a specific type to 3,027 of them (2,858 homes and 169 others) and left 6,699 as plain "building". The learner writes seven labelling functions in Python. Each looks at one thing, the footprint, the corner count, a name, a shared wall, a nearby shop marker, and either votes or stays quiet. Vibe coding suits this well: the learner states the rule in a sentence, an AI writes the function, and the learner checks it against outlines they can see.' },
        { kind: 'table', caption: 'The seven rule agents on the 3,027 typed buildings, our Python run', head: ['Rule', 'Votes', 'Speaks on', 'Right when it speaks'], rows: [
          ['Footprint of 40 to 160 square metres', 'home', '77.9%', '99.4%'],
          ['Shares a wall with a neighbour', 'home', '37.0%', '98.4%'],
          ['Footprint above 400 square metres', 'other', '5.4%', '75.8%'],
          ['Has a name on the map', 'other', '2.5%', '92.1%'],
          ['Outline has more than 12 corners', 'other', '1.9%', '74.1%'],
          ['Within 15 metres of a mapped shop or amenity', 'other', '0.6%', '50.0%'],
          ['Footprint below 25 square metres', 'other', '0.2%', '85.7%']
        ] },
        { kind: 'p', text: 'No rule covers everything. Across all 9,726 outlines, 1,342 receive no vote and 147 receive votes that disagree. Two ways of settling the votes are compared. A majority vote counts hands. A label model, which never sees a single volunteer tag, works out from the pattern of agreement and silence how far each rule can be trusted, and weighs the votes accordingly.' },
        { kind: 'table', caption: 'Three ways to label, scored against the volunteers\' tags', head: ['Method', 'Accuracy', 'Non-homes found', 'Homes wrongly flagged'], rows: [
          ['Call everything a home', '94.4%', '0 of 169', '0'],
          ['Majority vote of the seven rules', '97.0%', '119 of 169', '41'],
          ['Label model weighing the rules', '95.7%', '144 of 169', '105']
        ] },
        { kind: 'p', text: 'The result is not the tidy victory the textbooks suggest. The label model finds more of the rare buildings, 144 against 119, and has learned something a show of hands cannot: that a rule staying silent is itself a clue. But it raises more false alarms, and on plain accuracy the majority vote is ahead. Averaging the share of homes and the share of non-homes each method gets right gives 90.8% for the label model and 84.5% for the vote. Which is preferable depends on what a miss costs.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Invent three rules for sorting animal cards, let them vote, and find a card that fools them all.' },
          { h3: 'Ages 11 to 15', p: 'Code two labelling functions in Python and count how often each speaks and how often it is right.' },
          { h3: 'Ages 15 and up', p: 'Write all seven rules, implement the label model, and compare it with the vote on tagged buildings.' }
        ] },
        { kind: 'callout', h3: 'Open data, careful claims', p: 'Outlines and tags come from OpenStreetMap contributors under the Open Database Licence. Tags are volunteer work and incomplete. The model also labels the 6,699 untyped outlines, but those are guesses and we do not publish them as facts about any building.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that vote',
      h2: 'What seven rules teach about AI agents',
      intro: 'A team of weak checkers is how many agent systems are built. The project shows what that team can and cannot do.',
      body: [
        { kind: 'table', caption: 'From rule agents in Wythenshawe to AI agent systems', head: ['In the weak supervision project', 'In a system of AI agents'], rows: [
          ['Each rule is narrow and often silent', 'Each agent has one job'],
          ['1,342 outlines got no vote', 'Know what nobody is covering'],
          ['147 outlines got conflicting votes', 'Decide in advance who wins'],
          ['The label model trusted rules unequally', 'Not every agent deserves equal weight'],
          ['A few tagged buildings kept everyone honest', 'Keep a checked sample, always']
        ] },
        { kind: 'p', text: 'Large AI models are often trained on labels made this way, and modern agent systems frequently let several agents vote on an answer. A Wythenshawe learner who has watched seven rules argue over a building understands both. Younger children meet the idea through games and sorting; writing real AI agents in Python comes when the language is comfortable, commonly at sixteen or older, and Copilot Studio agents are offered one-to-one only. More on both: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and, for the habit behind it, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of OpenStreetMap, postcodes.io and the Office for National Statistics. Their open data made the project possible; the rules and results are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From sorting rules to agent teams',
    intro: 'Approximate school years; the free lesson fixes the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, exceptions and testing an idea.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Telling an AI what to build, then trying to break it.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Real projects with an AI pair, next to GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Generative AI, tool use and agents that check agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Labels without labelling',
    h2: 'What is weak supervision in machine learning?',
    intro: 'Weak supervision is training data made by combining many imperfect rules, called labelling functions, instead of labelling each example by hand; a label model estimates how reliable each rule is and merges their votes.',
    p1: 'With seven rules on buildings around Wythenshawe, the label model found 144 of 169 non-homes against 119 for a majority vote, at the price of 105 false alarms against 41.',
    p2: 'Learners who have built it know that cheap labels are a trade, and ask of any AI what its training labels were made from.',
    closer: 'A Wythenshawe teenager who has written labelling functions has seen how AI is fed, which is a sound footing for directing AI agents later.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'Live lessons for Wythenshawe',
    intro: 'A computer, a camera and home broadband good enough for a video call are the whole kit list.',
    cells: [
      { h3: 'Learner at the controls', p: 'Nobody watches a tutor type. The learner builds, shares the screen, and explains each choice when asked.' },
      { h3: 'Trial before timetable', p: 'The free lesson shows us the level and, where relevant, the exam specification.' },
      { h3: 'Free to begin', p: 'Lesson one has no charge and finishes with the course we suggest.' },
      { h3: 'Small matched groups', p: 'Five to ten people at one stage, drawn from all over Britain.' },
      { h3: 'Twice each week', p: 'With a break in the school holidays.' },
      { h3: 'Same hour all year', p: 'Our tutors adjust at the UK clock changes, so your lesson hour stays put.' }
    ],
    spec: { title: 'Why video', p: 'Five learners of one level with one free hour rarely live in one neighbourhood. Online classes assemble them from a much wider area.' }
  },

  fees: {
    h2: 'What Wythenshawe learners pay',
    intro: 'Wythenshawe learners are on our international price list, which is identical in every country except India.',
    first: 'A whole lesson, free, and then our advice on a course.',
    group: 'Around eight live lessons a month in a group.',
    private: 'Around eight live lessons a month with a tutor to yourself.',
    closer: 'We quote in US dollars and no other currency. Billing starts only once the trial has fixed the course and a weekly time, and the pricing page explains holidays, missed sessions and moving between formats.'
  },

  reviewsH2: 'What UK families, Manchester included, say on Google',

  book: {
    h2: 'Book a free Wythenshawe lesson',
    intro: 'We need an age or school year and a hobby to build on. The trial may turn out to be a sorting-rules game, a Scratch project steered by AI, a first Python function, or two rule agents voting on real data.',
    success: 'Thank you. The Wythenshawe request is with us.'
  },

  faq: {
    h2: 'Wythenshawe questions',
    intro: 'Vibe coding, agents, the building project and everyday arrangements.',
    items: [
      { q: 'Can you learn vibe coding and AI agents online in Wythenshawe?', a: 'Yes. Live video lessons run for ages 6 to 67 in Wythenshawe, Benchill, Sharston, Baguley and elsewhere in Manchester.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI in plain language, then reading, testing and correcting the code it writes.' },
      { q: 'What is a labelling function?', a: 'A small rule that labels some examples and stays silent on the rest, such as "a building above 400 square metres is not a home". Weak supervision combines many of them.' },
      { q: 'What is the Wythenshawe project?', a: 'Seven rule agents vote on whether each of 9,726 mapped buildings is a home, and a label model is compared with a majority vote using the 3,027 buildings volunteers have tagged.' },
      { q: 'Did the label model beat the majority vote?', a: 'Partly. It found 144 of 169 non-homes against 119, but wrongly flagged 105 homes against 41, so its plain accuracy was 95.7% against 97.0%.' },
      { q: 'What is the population of Wythenshawe?', a: 'No ward is named Wythenshawe, so there is no single census figure we can quote. Sharston ward had 17,446 usual residents in 2021 and Woodhouse Park 15,414.' },
      { q: 'How old must a learner be for AI agents?', a: 'Python has to be comfortable first, which is commonly at sixteen or older. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, for computer science and maths. We build understanding; we never promise a grade.' },
      { q: 'What are the fees?', a: 'The first lesson is free. After it, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the holidays?', a: 'No. We stop for school holidays once you give us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in Manchester',
    h2: 'Neighbouring pages',
    html: 'Each one runs a separate experiment: <a class="cg-inline-link" href="/ai-and-programming-classes-in-chorlton-manchester">Chorlton</a> (is 98% accuracy any good?), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-didsbury-manchester">Didsbury</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-withington-manchester">Withington</a>. For the rest of the country, start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Wythenshawe and Manchester',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wys .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 4.4vw, 3.6rem); }
.cg-root.cg-wys .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-wys .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-wys .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wys .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.024em; }
.cg-root.cg-wys .cg-table caption { font-weight: 600; text-align: left; font-size: 0.88rem; letter-spacing: 0.01em; }
.cg-root.cg-wys .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.5rem; }
.cg-root.cg-wys .cg-table th { letter-spacing: 0.07em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-wys .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-wys .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Manchester (E08000003). No ward named Wythenshawe; no Wythenshawe population stated. Census 2021 TS001 wards: Sharston 17,446; Baguley 16,064; Woodhouse Park 15,414; Northenden 15,064 (never summed). postcodes.io: Wythenshawe, Benchill, Sharston, Moss Nook (M22); Northern Moor, Baguley, Roundthorn (M23). England national curriculum, GCSE and A level.',
    localProject: 'OpenStreetMap buildings around Wythenshawe: 9,726 outlines; 3,027 typed (2,858 homes, 169 other); 6,699 untyped. Seven labelling functions (coverage / accuracy on typed): 40-160 sq m home 77.9 / 99.4; shared wall home 37.0 / 98.4; over 400 sq m other 5.4 / 75.8; named other 2.5 / 92.1; over 12 corners other 1.9 / 74.1; near shop or amenity point other 0.6 / 50.0; under 25 sq m other 0.2 / 85.7. 1,342 no vote, 147 conflicts. Always home 94.4% (0 of 169); majority vote 97.0%, 119 of 169, 41 false; label model (Dawid-Skene EM with abstain outcome, no tags seen) 95.7%, 144 of 169, 105 false; balanced 84.5 vs 90.8. Lesson family: weak supervision, labelling functions, label model vs majority vote.',
    requiredMentions: [
      '17,446',
      '16,064',
      '15,414',
      'Benchill',
      'Sharston',
      'Northern Moor',
      '9,726',
      'weak supervision',
      'label model',
      'labelling function'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap building outlines and tags, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places and ward lists for outcodes M22 and M23.', url: 'https://api.postcodes.io/outcodes/M22' }
    ],
    rejectedClaims: [
      'Any population for Wythenshawe: no ward or published area of that exact name was read, and ward figures are not summed.',
      'Brooklands ward figure: the M23 list does not say whether the Manchester or the Trafford ward of that name is meant; omitted.',
      'Model guesses for the 6,699 untyped buildings: not published as facts.',
      'That the label model is simply better: reported as a trade, with accuracy lower than the majority vote.',
      'Airport, hospital, housing-estate history or "largest" claims about Wythenshawe: not read from a source; not made.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
